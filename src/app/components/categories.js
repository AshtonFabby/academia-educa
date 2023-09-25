"use client";
import Image from "next/image";
import Link from "next/link";

import { gsap, ScrollTrigger } from "gsap/all";
import { useEffect } from "react";

const Categories = () => {
  gsap.registerPlugin(ScrollTrigger);

  // TODO: make these load one by one

  useEffect(() => {
    let categoryItem = document.querySelectorAll("#category-item");
    let category = document.getElementById("category");
    categoryItem.forEach((ci) => {
      var tl = new gsap.timeline({
        delay: 0.5,
        scrollTrigger: {
          trigger: category,
          start: "top 60%",
        },
      });
      tl.to(ci, { opacity: 1, duration: 1 });
    });
  }, []);
  return (
    <>
      <div
        id="category"
        className="mt-28 container mx-auto grid md:grid-cols-3 lg:grid-cols-4 gap-6 justify-center items-center "
      >
        <div id="category-item" className="opacity-0">
          <h2 className=" font-viga text-4xl">
            Categorias mais <br />
            populares
          </h2>
        </div>
        <Link
          id="category-item"
          className="opacity-0"
          href={`/courses/category?category-name=${"Negócios e Gestão"}&category-id=${"0c8goowtbbgzdzx"}`}
        >
          <div
            className={` border-2 border-primary h-[316px] border-dashed hover:shadow-2xl cursor-pointer py-16 rounded-2xl flex flex-col gap-4 justify-center items-center`}
          >
            <Image
              src="/svg/finance.svg"
              width={100}
              height={100}
              alt="finance icon"
            />
            <h3 className=" text-2xl font-semibold text-center">
              Negócios e <br />
              Gestão
            </h3>
          </div>
        </Link>
        <Link
          id="category-item"
          className="opacity-0"
          href={`/courses/category?category-name=${"Secretariado"}&category-id=${"tduq43pdq1fursw"}`}
        >
          <div
            className={` border-2 border-primary h-[316px] border-dashed hover:shadow-2xl cursor-pointer py-16 rounded-2xl flex flex-col gap-4 justify-center items-center`}
          >
            <Image
              src="/svg/secrerary.svg"
              width={100}
              height={100}
              alt="finance icon"
            />
            <h3 className=" text-2xl font-semibold text-center">
              Secretariado
            </h3>
          </div>
        </Link>
        <Link
          id="category-item"
          className="opacity-0"
          href={`/courses/category?category-name=${"Produtividade"}&category-id=${"nk5mdf38fklm351"}`}
        >
          <div
            className={` border-2 border-primary h-[316px] border-dashed hover:shadow-2xl cursor-pointer py-16 rounded-2xl flex flex-col gap-4 justify-center items-center`}
          >
            <Image
              src="/svg/productive.svg"
              width={100}
              height={100}
              alt="finance icon"
            />
            <h3 className=" text-2xl font-semibold text-center">
              Produtividade
            </h3>
          </div>
        </Link>
        <Link
          id="category-item"
          className="opacity-0"
          href={`/courses/category?category-name=${"Negócios e Gestão"}&category-id=${"0c8goowtbbgzdzx"}`}
        >
          <div
            className={` border-2 border-primary h-[316px] border-dashed hover:shadow-2xl cursor-pointer py-16 rounded-2xl flex flex-col gap-4 justify-center items-center`}
          >
            <Image
              src="/svg/gesto.svg"
              width={100}
              height={100}
              alt="finance icon"
            />
            <h3 className=" text-2xl font-semibold text-center">
              Negócios e <br />
              Gestão
            </h3>
          </div>
        </Link>
        <Link
          id="category-item"
          className="opacity-0"
          href={`/courses/category?category-name=${"Vendas e Marketing"}&category-id=${"ubss00c1rdvtje3"}`}
        >
          <div
            className={` border-2 border-primary h-[316px] border-dashed hover:shadow-2xl cursor-pointer py-16 rounded-2xl flex flex-col gap-4 justify-center items-center`}
          >
            <Image
              src="/svg/marketing.svg"
              width={100}
              height={100}
              alt="finance icon"
            />
            <h3 className=" text-2xl font-semibold text-center">
              Vendas e <br />
              Marketing
            </h3>
          </div>
        </Link>
        <Link
          id="category-item"
          className="opacity-0"
          href={`/courses/category?category-name=${"Tecnologia de Informação"}&category-id=${"bgn3rs0fnsnm3s8"}`}
        >
          <div
            className={` border-2 border-primary h-[316px] border-dashed hover:shadow-2xl cursor-pointer py-16 rounded-2xl flex flex-col gap-4 justify-center items-center`}
          >
            <Image
              src="/svg/technology.svg"
              width={100}
              height={100}
              alt="finance icon"
            />
            <h3 className=" text-2xl font-semibold text-center">
              Tecnologia de <br />
              Informação
            </h3>
          </div>
        </Link>
        <Link
          id="category-item"
          className="opacity-0"
          href={`/courses/category?category-name=${"Sectores Emergentes"}&category-id=${"fokdn912rbll64h"}`}
        >
          <div
            className={` border-2 border-primary h-[316px] border-dashed hover:shadow-2xl cursor-pointer py-16 rounded-2xl flex flex-col gap-4 justify-center items-center`}
          >
            <Image
              src="/svg/industry.svg"
              width={100}
              height={100}
              alt="finance icon"
            />
            <h3 className=" text-2xl font-semibold text-center">
              Sectores <br />
              Emergentes
            </h3>
          </div>
        </Link>
      </div>
      <Link
        href="/"
        className=" text-right mt-10 container font-viga text-2xl text-primary hover:underline"
      >
        ver todas as categorias
      </Link>
    </>
  );
};

export default Categories;
