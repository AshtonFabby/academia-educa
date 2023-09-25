import Image from "next/image";
import Link from "next/link";
import fetchCourse from "../helpers/fetch_course";
import generateImageUrl from "../helpers/generate_image_url";

const FullCourse = async (props) => {
  const course = await fetchCourse(props.courseId);
  console.log(course);

  return (
    <>
      <div className="hero bg-[url('/svg/bg-graphic.svg')] bg-no-repeat  bg-right-top bg-contain md:bg-auto pb-20">
        <div className="content container m-auto pt-[200px] md:pt-[400px] lg:pt-[350px] lg:flex gap-7 justify-between ">
          <div>
            <div className=" md:flex justify-between ">
              <h1 className=" text-5xl font-viga text-primary w-[500px]">
                {props.courseName}
              </h1>
              {/* TODO: get the category name */}
              {/* <div
                className={`" bg-primary text-white rounded-full py-1 px-4 w-max h-max relative "`}
              >
                <h3 className=" font text-sm font-medium">something</h3>
              </div> */}
            </div>
            <p className=" mt-5">{course.description}</p>
            <div className=" mt-5 flex justify-between">
              <div>
                <h3 className=" font-viga text-2xl">Teacher</h3>
                <p className=" font-medium">{course.expand.teacher.name}</p>
              </div>
              <div>
                <h3 className=" font-viga text-2xl">Duration</h3>
                <p className=" font-medium uppercase">{`${course.duration} months`}</p>
              </div>
            </div>
          </div>
          <Image
            src={generateImageUrl(
              `${course.collectionId}`,
              `${course.id}`,
              `${course.course_image}`
            )}
            alt="course image"
            width={412}
            height={242}
            className=" rounded-t-2xl mt-10 lg:mt-0"
          />
        </div>
        <div className="container mt-10">
          <Link href={`/register?course-name=${props.courseName}`}>
            <button
              id="hero-button-1"
              className=" text-white mb-5 md:mb-0 flex gap-5 items-center px-10 py-4 rounded-lg justify-center bg-primary hover:bg-accent hover:text-black hover:shadow-xl ease-in-out duration-200"
            >
              <p className=" font-viga">Registrar Agora</p>
            </button>
          </Link>
        </div>
      </div>

      <div className=" container mx-auto my-10">
        <h1 className=" font-viga text-4xl "> Cource Outline</h1>
        {/* TODO: make this readable */}
        <div className=" space-y-7 mt-10">{course.course_outline}</div>
      </div>
    </>
  );
};

export default FullCourse;
