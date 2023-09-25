import Image from "next/image";
import Link from "next/link";

/**
 * Renders a CourseItem component.
 *
 * @param {Object} props - The properties for the CourseItem component.
 * @param {string} props.title - The title of the course.
 * @param {string} props.id - The id of the course.
 * @param {string} props.imageUrl - The URL of the course image.
 * @param {string} props.category - The category of the course.
 * @param {string} props.description - The description of the course.
 * @param {string} props.duration - The duration of the course.
 * @return {JSX.Element} The rendered CourseItem component.
 */
const CourseItem = (props) => {
  return (
    <Link
      href={`/courses/category/course?course-id=${props.id}&course-name=${props.title}`}
      className=" h-max grid justify-between hover:shadow-2xl rounded-2xl "
    >
      <Image
        src={props.imageUrl}
        alt="course image"
        width={412}
        height={242}
        className=" rounded-t-2xl"
      />
      <div className="px-5 pb-5 space-y-3">
        <div
          className={`" bg-primary text-white rounded-full py-1 px-4 w-max -mt-3 relative "`}
        >
          <h3 className=" font text-sm font-medium">{props.category}</h3>
        </div>
        <h2 className=" text-2xl font-viga mt-5">{props.title}</h2>
        <p>{props.description}</p>

        <div className="flex items-center justify-between">
          <h5 className=" uppercase font-semibold">{props.duration}</h5>
          <div className="flex items-center gap-5">
            <h5 className=" uppercase font-semibold">SAIBA MAIS</h5>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
            >
              <g clipPath="url(#clip0_64_39)">
                <path d="M0 0H16V16H0V0Z" fill="white" />
                <path
                  d="M2.5 8.00008H14M14 8.00008L10.6667 11.3334M14 8.00008L10.6667 4.66675"
                  stroke="black"
                  strokeWidth="1.01781"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </g>
              <defs>
                <clipPath id="clip0_64_39">
                  <rect
                    width="16"
                    height="16"
                    fill="white"
                    transform="matrix(-1 0 0 1 16 0)"
                  />
                </clipPath>
              </defs>
            </svg>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default CourseItem;
