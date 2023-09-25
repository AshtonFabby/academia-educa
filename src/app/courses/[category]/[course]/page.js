"use client";
import ContactUs from "@/app/components/contact_us";
import FullCourse from "@/app/components/full_course";
import { useSearchParams } from "next/navigation";

const Course = async () => {
  const searchParams = useSearchParams();
  const courseName = searchParams.get("course-name");
  const courseId = searchParams.get("course-id");
  console.log(courseId);

  return (
    <main>
      <FullCourse courseId={courseId} courseName={courseName} />
      <ContactUs />
    </main>
  );
};

export default Course;
