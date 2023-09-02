"use client";
import ContactUs from "@/app/components/contact_us";
import CourseItem from "@/app/components/course_item";

import { useSearchParams } from "next/navigation";

const Category = (pageContext) => {
  const searchParams = useSearchParams();
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
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <CourseItem
            imageUrl="/images/course_1.png"
            title="Educação Financeira"
            category="Finanças"
            theme="bg-primary text-white"
            description="Neste curso abrangente, você será capacitado com as habilidades e o
      conhecimento necessários para tomar decisões financeiras informadas,
      planejar para o futuro e alcançar seus objetivos financeiros."
            teacherImageUrl="/images/luisa.png"
            teacherName="Luisa Matumona"
            duration="2 MONTHS"
          />
          <CourseItem
            imageUrl="/images/course_2.png"
            title="Plano de Negócios para pequenas empresas"
            theme="bg-accent"
            category="Empreendedorismo"
            description="Este curso prático oferece as ferramentas e orientações necessárias para transformar suas ideias em um plano estratégico abrangente, permitindo que você navegue com confiança pelos desafios do empreendedorismo."
            teacherImageUrl="/images/luisa.png"
            teacherName="Luisa Matumona"
            duration="2 MONTHS"
          />
          <CourseItem
            imageUrl="/images/course_3.png"
            title="Diploma em Gestão de Tecnologias da Informação"
            theme="bg-primary text-white"
            category="Tecnologia da informação"
            description="Combinando conhecimentos técnicos e competências de liderança, este diploma é projetado para profissionais de TI aspirantes a cargos de gestão e líderes empresariais que desejam compreender e aproveitar o potencial transformador da tecnologia."
            teacherImageUrl="/images/luisa.png"
            teacherName="Luisa Matumona"
            duration="2 MONTHS"
          />
          <CourseItem
            imageUrl="/images/course_1.png"
            title="Educação Financeira"
            category="Finanças"
            theme="bg-primary text-white"
            description="Neste curso abrangente, você será capacitado com as habilidades e o
      conhecimento necessários para tomar decisões financeiras informadas,
      planejar para o futuro e alcançar seus objetivos financeiros."
            teacherImageUrl="/images/luisa.png"
            teacherName="Luisa Matumona"
            duration="2 MONTHS"
          />
          <CourseItem
            imageUrl="/images/course_2.png"
            title="Plano de Negócios para pequenas empresas"
            theme="bg-accent"
            category="Empreendedorismo"
            description="Este curso prático oferece as ferramentas e orientações necessárias para transformar suas ideias em um plano estratégico abrangente, permitindo que você navegue com confiança pelos desafios do empreendedorismo."
            teacherImageUrl="/images/luisa.png"
            teacherName="Luisa Matumona"
            duration="2 MONTHS"
          />
          <CourseItem
            imageUrl="/images/course_3.png"
            title="Diploma em Gestão de Tecnologias da Informação"
            theme="bg-primary text-white"
            category="Tecnologia da informação"
            description="Combinando conhecimentos técnicos e competências de liderança, este diploma é projetado para profissionais de TI aspirantes a cargos de gestão e líderes empresariais que desejam compreender e aproveitar o potencial transformador da tecnologia."
            teacherImageUrl="/images/luisa.png"
            teacherName="Luisa Matumona"
            duration="2 MONTHS"
          />
        </div>
      </div>
      <ContactUs />
    </main>
  );
};

export default Category;
