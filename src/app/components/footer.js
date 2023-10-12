import Image from "next/image";
import Link from "next/link";
import { BsFacebook, BsInstagram, BsLinkedin } from "react-icons/bs";
import { FaXTwitter } from "react-icons/fa6";
const Footer = () => {
  return (
    <footer>
      <div className=" bg-primary py-20 text-white">
        <div className=" container mx-auto md:flex justify-between gap-28 ">
          <p className=" mb-10 md:mb-0">
            Bem-vindo à Academia Educa Mais, o lugar onde o conhecimento e as
            habilidades se transformam em oportunidades de sucesso profissional.
            Oferecemos uma variedade de cursos projectados para capacitá-lo com
            as habilidades necessárias para enfrentar os desafios do mercado de
            trabalho moderno.
          </p>
          <div>
            <h3 className=" font-viga text-3xl mb-3">Follow us</h3>
            <div className="flex gap-2">
              <Link
                href={"#"}
                className="  text-white hover:text-accent ease-in w-10 h-10 rounded-xl "
              >
                <BsFacebook size={25} />
              </Link>
              <Link
                href={"#"}
                className="  text-white hover:text-accent ease-in w-10 h-10 rounded-xl "
              >
                <BsInstagram size={25} />
              </Link>
              <Link
                href={"#"}
                className="  text-white hover:text-accent ease-in w-10 h-10 rounded-xl "
              >
                <FaXTwitter size={25} />
              </Link>
              <Link
                href={"#"}
                className="  text-white hover:text-accent ease-in w-10 h-10 rounded-xl "
              >
                <BsLinkedin size={25} />
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className=" my-8 lg:flex justify-between items-center container mx-auto">
        <Link href="/">
          <Image width={100} height={100} alt="" src="/images/logo.png" />
        </Link>
        <div className=" mt-10 md:mt-0 grid grid-cols-3 lg:grid-cols-5 items-center md:gap-10  font-medium uppercase">
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
