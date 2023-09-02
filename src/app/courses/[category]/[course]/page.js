"use client";
import ContactUs from "@/app/components/contact_us";
import Image from "next/image";
import { useSearchParams } from "next/navigation";

const Course = () => {
  const searchParams = useSearchParams();
  const courseName = searchParams.get("course-name");

  return (
    <main>
      <div className="hero bg-[url('/svg/bg-graphic.svg')] bg-no-repeat  bg-right-top bg-contain md:bg-auto pb-20">
        <div className="content container m-auto pt-[200px] md:pt-[400px] lg:pt-[350px] lg:flex gap-7 justify-between ">
          <div>
            <div className=" md:flex justify-between ">
              <h1 className=" text-5xl font-viga text-primary w-[500px]">
                {courseName}
              </h1>
              <div
                className={`" bg-primary text-white rounded-full py-1 px-4 w-max h-max relative "`}
              >
                <h3 className=" font text-sm font-medium">something</h3>
              </div>
            </div>
            <p className=" mt-5">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
            <div className=" mt-5 flex justify-between">
              <div>
                <h3 className=" font-viga text-2xl">Teacher</h3>
                <p className=" font-medium">Luisa Matumona</p>
              </div>
              <div>
                <h3 className=" font-viga text-2xl">Duration</h3>
                <p className=" font-medium uppercase">2 months</p>
              </div>
            </div>
          </div>
          <Image
            src={"/images/course_1.png"}
            alt="course image"
            width={412}
            height={242}
            className=" rounded-t-2xl mt-10 lg:mt-0"
          />
        </div>
      </div>
      <div className=" container mx-auto my-16">
        <h1 className=" font-viga text-4xl "> Cource Outline</h1>
        <div className=" space-y-7 mt-10">
          <div>
            <h3 className=" text-2xl font-viga">week one</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>
          <div>
            <h3 className=" text-2xl font-viga">week two</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>
          <div>
            <h3 className=" text-2xl font-viga">week three</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>
          <div>
            <h3 className=" text-2xl font-viga">week four</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>
        </div>
      </div>
      <ContactUs />
    </main>
  );
};

export default Course;
