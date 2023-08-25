"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import Hamburger from "hamburger-react";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className=" py-5 lg:absolute w-full bg-white lg:bg-transparent ">
      <div className="flex items-center justify-between container lg:hidden">
        <Link href="/">
          <Image width={100} height={100} alt="" src="/images/logo.png" />
        </Link>

        <div className="burger lg:hidden">
          <Hamburger size={24} toggled={isOpen} toggle={setIsOpen} />
        </div>
      </div>
      <div
        className={`ease-in-out duration-200 lg:hidden ${
          !isOpen ? "hidden" : "block"
        }`}
      >
        <div className="links flex flex-col items-center justify-center p-10 absolute w-full bg-white gap-10 font-medium uppercase">
          <Link href="/">Home</Link>
          <Link href="/about">Sobre nós</Link>
          <Link href="/courses">Formações</Link>
          <Link href="/coming_soon">Secretaria</Link>
          <Link href="/contact">Contactos </Link>
        </div>
      </div>
      <div className="hidden lg:flex justify-between items-center container mx-auto">
        <Link href="/">
          <Image width={100} height={100} alt="" src="/images/logo.png" />
        </Link>
        <div className=" flex items-center gap-10 font-medium text-white uppercase">
          <Link
            className=" hover:border-b-2 border-accent duration-150"
            href="/"
          >
            Home
          </Link>
          <Link
            className=" hover:border-b-2 border-accent duration-150"
            href="/about"
          >
            Sobre nós
          </Link>
          <Link
            className=" hover:border-b-2 border-accent duration-150"
            href="/courses"
          >
            Formações
          </Link>
          <Link
            className=" hover:border-b-2 border-accent duration-150"
            href="/coming_soon"
          >
            Secretaria
          </Link>
          <Link
            className=" hover:border-b-2 border-accent duration-150"
            href="/contact"
          >
            Contactos 
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
