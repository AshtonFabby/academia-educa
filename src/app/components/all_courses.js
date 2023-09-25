import fetchCourses from "../helpers/fetch_courses";
import generateImageUrl from "../helpers/generate_image_url";
import CourseItem from "./course_item";

/**
 * Fetches all courses and renders them in a grid layout.
 *
 * @param {object} props - The properties passed to the component.
 * @param {string} props.courseId - The ID of the course.
 * @return {JSX.Element} The component that renders all the courses.
 */

const AllCourses = async (props) => {
  const courses = await fetchCourses(props.courseId);
  // console.log(courses.expand.courses);
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
      {courses.expand.courses.map((course) => (
        <CourseItem
          key={course.id}
          id={course.id}
          title={course.title}
          category={courses.name}
          //TODO: use an object for the image
          imageUrl={generateImageUrl(
            `${course.collectionId}`,
            `${course.id}`,
            `${course.course_image}`
          )}
          description={course.description}
          duration={`${course.duration} MONTHS`}
        />
      ))}
    </div>
  );
};

export default AllCourses;
