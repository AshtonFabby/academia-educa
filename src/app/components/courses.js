import CourseItem from "./course_item";

import { gsap, ScrollTrigger } from "gsap/all";
import { useEffect } from "react";

const Courses = () => {
  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    let courses = document.getElementById("courses");
    gsap.to(courses, {
      opacity: 1,
      duration: 1,
      scrollTrigger: {
        trigger: courses,
        start: "top 60%",
      },
    });
  });

  return (
    <div id="courses" className=" opacity-0 mt-28 container m-auto">
      <h1 className=" font-viga text-4xl text-center mb-12">
        Cursos em destaque
      </h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        <CourseItem
          imageUrl="/images/course_1.png"
          title="Educação Financeira"
          id="pvlzpubfytm0yr9"
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
          id="9unti6ufym2kvlc"
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
          id="77p9ne4p06ug3e9"
          theme="bg-primary text-white"
          category="Tecnologia da informação"
          description="Combinando conhecimentos técnicos e competências de liderança, este diploma é projetado para profissionais de TI aspirantes a cargos de gestão e líderes empresariais que desejam compreender e aproveitar o potencial transformador da tecnologia."
          teacherImageUrl="/images/luisa.png"
          teacherName="Luisa Matumona"
          duration="2 MONTHS"
        />
      </div>
    </div>
  );
};

export default Courses;
