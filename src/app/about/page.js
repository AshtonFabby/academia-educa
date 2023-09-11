import Image from "next/image";
import ValueItems from "../components/value_items";
import ContactUs from "../components/contact_us";

const AboutPage = () => {
  return (
    <main className="hero bg-[url('/svg/bg-graphic.svg')] bg-no-repeat  bg-right-top bg-contain md:bg-auto pb-20">
      <div className="content container m-auto pt-[200px] md:pt-[400px] lg:pt-[300px] space-y-8">
        <h1 className=" text-5xl font-viga text-primary">
          A Academia Educa Mais
        </h1>
        <p className="">
          Bem-vindo à Academia Educa Mais, o lugar onde o conhecimento e as
          habilidades se transformam em oportunidades de sucesso profissional.
          <br /> <br />
          Oferecemos uma variedade de cursos projectados para capacitá-lo com as
          habilidades necessárias para enfrentar os desafios do mercado de
          trabalho moderno.
          <br /> <br />
          Nossos cursos são ministrados por profissionais experientes e oferecem
          experiências práticas e projetos reais para que você possa colocar
          suas habilidades em ação desde o primeiro dia.
        </p>
      </div>
      <div className=" container mx-auto mt-28">
        <h1 className=" font-viga text-4xl mb-12">Nossa História</h1>
        <div className=" md:flex gap-5 ">
          <div className=" md:w-1/2">
            <Image
              src="/images/thumbnail.png"
              width={628}
              height={418}
              alt="thumbnail"
              className=" rounded-2xl "
            />
          </div>
          <div className="mt-10 md:mt-0 md:w-1/2">
            <p className="">
              Academia Educa Mais faz parte do grupo Paramore Investimentos Lda,
              que também detém duas outras marcas, inlínguas e Vialatea. <br />
              inlínguas é uma escola de línguas que oferece Inglês como segunda
              língua, Português para estrangeiros e serviços de Tradução e
              Interpretação. <br />
              <br />
              Durante muitos anos, o inlínguas atendeu com excelência os alunos
              que buscavam aprender ou simplesmente aprimorar suas habilidades
              de inglês; os cursos de inglês, as traduções e as interpretações
              eram reconhecidos pela qualidade e compromisso com o ensino
              eficaz, o que leveu inúmeros clientes a solicitar formações
              diversas.
              <br /> <br />O centro de formação profissional nasceu como uma
              extensão natural da escola de línguas, compartilhando a mesma
              paixão pelo aprendizado e pela capacitação. Os fundadores do
              centro entenderam que, para muitos, a educação é uma jornada
              contínua que não se limita apenas à língua, mas se estende a todas
              as áreas da vida.
            </p>
          </div>
        </div>
        <p className=" mt-10">
          Guiados por essa visão, eles desenvolveram uma ampla gama de cursos
          abrangendo diversos setores, desde negócios e tecnologia até saúde e
          criatividade. Cada curso foi projetado com base nas necessidades reais
          do mercado de trabalho e foi enriquecido pela experiência prática e
          pelo conhecimento acumulado ao longo dos anos.
        </p>
      </div>

      <div className=" container mt-28 mx-auto md:flex justify-center gap-6">
        <div className=" lg:w-5/12 flex flex-col gap-5 md:w-1/2 justify-center items-center p-10 border-2 border-primary border-dashed rounded-2xl">
          <Image src="/svg/visson.svg" width={141} height={141} alt="vision" />
          <h2 className=" font-viga text-2xl">Missão</h2>
          <p className=" text-center">
            Ser o principal catalisador na formação de profissionais altamente
            capacitados, impulsionando o desenvolvimento pessoal e contribuindo
            para o sucesso sustentável das carreiras e das empresas.
          </p>
        </div>
        <div className=" lg:w-5/12 flex flex-col gap-5 justify-center items-center p-10 border-2 md:w-1/2 border-primary border-dashed rounded-2xl">
          <Image
            src="/svg/mission.svg"
            width={141}
            height={141}
            alt="mission"
          />
          <h2 className=" font-viga text-2xl">Missão</h2>
          <p className=" text-center">
            Nossa missão é capacitar indivíduos com as habilidades e
            conhecimentos necessários para prosperar em suas carreiras,
            promovendo o desenvolvimento profissional e contribuindo para o
            crescimento socioeconômico da comunidade, através de programas de
            formação de alta qualidade, orientados pela excelência educacional,
            buscamos transformar vidas e criar um impacto positivo no mundo de
            trabalho.
          </p>
        </div>
      </div>
      <div className=" container mx-auto mt-28">
        <h1 className=" text-4xl font-viga mb-5 text-center">Nossos Valores</h1>
        <div>
          <div className="grid gap-5 md:grid-cols-3">
            <div className=" space-y-5 ">
              <ValueItems
                title="Colaboração"
                body="Fomentamos um ambiente inclusivo e colaborativo, onde ideias são compartilhadas e todos contribuem para o sucesso mútuo."
              />
              <ValueItems
                title="Excelência"
                body="Comprometemo-nos com os mais altos padrões de qualidade em todos os aspectos de nossos programas e serviços."
              />
            </div>
            <Image
              src={"/svg/values.svg"}
              width={587}
              height={335}
              alt="people sitting"
              className=" m-auto lg:m-0"
            />
            <div className=" space-y-5">
              <ValueItems
                title="Aprendizado Contínuo"
                body="Promovemos uma cultura de desenvolvimento constante, incentivando nossos alunos e equipe a buscarem conhecimento e aprimoramento contínuo."
              />
              <ValueItems
                title="Responsabilidade Social"
                body="Contribuímos positivamente para a sociedade ao preparar profissionais capacitados e éticos, promovendo a cidadania corporativa e apoiando iniciativas com impacto social."
              />
            </div>
          </div>
        </div>
      </div>

      <div className="mt-28 bg-[url('/images/blue-bg.png')]">
        <div className="container mx-auto py-28 text-white">
          <h1 className=" text-4xl font-viga mb-5 text-center">
            Vamas além da capacitação técnica <br /> professional
          </h1>
          <div className=" grid md:grid-cols-3 gap-10 mt-20">
            <div className=" space-y-5">
              <Image
                src={"/images/sports.jpg"}
                alt="Sports"
                width={400}
                height={400}
              />
              <p>
                Programas de Saúde e Bem-Estar: Oferecer aulas de ioga,
                meditação ou programas de saúde mental para promover o bem-estar
                dos alunos.
              </p>
            </div>
            <div className=" space-y-5">
              <Image
                src={"/images/soft_skills2.jpg"}
                alt="Sports"
                width={400}
                height={400}
              />
              <p>
                Treinamento em Soft Skills: Oferecer cursos sobre habilidades
                interpessoais, como trabalho em equipe, empatia e resolução de
                conflitos.
              </p>
            </div>
            <div className=" space-y-5">
              <Image
                src={"/images/culture.jpg"}
                alt="Sports"
                width={400}
                height={400}
              />
              <p>
                Atividades Culturais e Sociais: Promover atividades
                extracurriculares, como eventos culturais, encontros sociais e
                clubes de interesse, para construir uma comunidade entre os
                alunos.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="my-28 container mx-auto lg:flex justify-between">
        <div>
          <h3 className=" font-viga text-3xl">Acreditação</h3>
          <Image
            src="/images/inefop.png"
            width={324}
            height={94}
            alt="inefop"
            className=" mt-5"
          />
        </div>
        <div className="">
          <h3 className=" font-viga text-3xl">Parceiros</h3>
          <div className="md:flex mt-5">
            <Image src="/images/lin.png" width={324} height={94} alt="inefop" />
            <Image src="/images/via.png" width={324} height={94} alt="inefop" />
          </div>
        </div>
      </div>
      <ContactUs />
    </main>
  );
};

export default AboutPage;
