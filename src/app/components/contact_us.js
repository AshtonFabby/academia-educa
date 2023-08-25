const ContactUs = () => {
  return (
    <div className=" bg-[#DFFFF6] h-[400px]">
      <div className="container mx-auto pt-20 md:flex gap-5 lg:gap-10">
        <div className=" md:w-1/2 md:mt-16 mb-20">
          <h1 className=" font-viga text-2xl text-primary ">
            Desenvolva Habilidades que Impulsionam Carreiras de Sucesso
          </h1>
          <p>
            Nossas ações formativas abrangem diferentes ramos profissionais,
            atendendo a diversidade das aspirações e metas profissionais
            de cada indivíduo
          </p>
        </div>
        <form className=" p-10 space-y-4 lg:p-20 bg-white shadow-xl rounded-2xl md:w-1/2">
          <h2 className="font-viga text-2xl">Inscreva-se</h2>
          <div>
            <label htmlFor="name" className="font-viga">
              Nome Completo
            </label>
            <br />
            <input
              type="text"
              name="name"
              className=" border-b-2 border-primary w-full"
            />
          </div>
          <div>
            <label htmlFor="curso" className="font-viga">
              Curso
            </label>
            <br />
            <input
              type="text"
              name="curso"
              className=" border-b-2 border-primary w-full"
            />
          </div>
          <div>
            <label htmlFor="contact" className="font-viga">
              Contacto
            </label>
            <br />
            <input
              type="text"
              name="contact"
              className=" border-b-2 border-primary w-full"
            />
          </div>
          <div>
            <label htmlFor="email" className="font-viga">
              Email
            </label>
            <br />
            <input
              type="text"
              name="email"
              className=" border-b-2 border-primary w-full"
            />
          </div>
          <button className=" py-4 mt-5 bg-primary font-viga rounded-xl text-white w-full ">
            Enviar
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactUs;
