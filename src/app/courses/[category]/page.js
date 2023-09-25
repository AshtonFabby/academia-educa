"use client";
import AllCourses from "@/app/components/all_courses";
import ContactUs from "@/app/components/contact_us";

import { useSearchParams } from "next/navigation";

const Category = async () => {
  const searchParams = useSearchParams();
  const categoryId = searchParams.get("category-id");
  const categoryName = searchParams.get("category-name");

  return (
    <main>
      <div className="hero bg-[url('/svg/bg-graphic.svg')] bg-no-repeat  bg-right-top bg-contain md:bg-auto pb-20">
        <div className="content container m-auto pt-[200px] md:pt-[400px] lg:pt-[350px]">
          <h1 className=" text-5xl font-viga text-primary">{categoryName}</h1>
          <p>
            Chegou a hora de investir em si mesmo e preparar-se para o futuro;
            estamos aqui para apoiar o seu crescimento e ajudá-lo a alcançar o
            seu potencial máximo.
          </p>
        </div>
      </div>
      <div className=" container mx-auto my-28">
        <AllCourses courseId={categoryId} />
      </div>
      <ContactUs />
    </main>
  );
};

export default Category;
