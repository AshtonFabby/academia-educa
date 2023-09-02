import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer>
      <div className="lg:flex justify-between items-center container mx-auto">
        <Link href="/">
          <Image width={100} height={100} alt="" src="/images/logo.png" />
        </Link>
        <div className=" mt-10 md:mt-0 grid grid-cols-3 lg:grid-cols-5 items-center gap-10  font-medium uppercase">
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
    </footer>
  );
};

export default Footer;
