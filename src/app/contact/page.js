import Image from "next/image";

const ContactPage = () => {
  return (
    <main>
      <div className="hero bg-[url('/svg/bg-graphic.svg')] bg-no-repeat  bg-right-top bg-contain md:bg-auto pb-20">
        <div className="content container m-auto pt-[200px] md:pt-[400px] lg:pt-[350px] lg:flex gap-7 justify-between ">
          <div>
            <div className=" md:flex justify-between ">
              <h1 className=" text-5xl font-viga text-primary w-[500px]">
                Não hesite em contactar-nos
              </h1>
            </div>
            <p className=" mt-5">
              Temos o sistema de suporte necessários para o guiar na sua viagem.
              Quer esteja a planear melhorar as suas competências, mudar de
              carreira ou simplesmente explorar os seus interesses, estamos aqui
              para o ajudar.
            </p>
            <div className="mt-10 space-y-4">
              <div className=" flex gap-5">
                <div className=" w-[87px] h-[87px] bg-[#0B0B3A] flex justify-center items-center rounded-full">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="52"
                    height="52"
                    viewBox="0 0 52 52"
                    fill="none"
                  >
                    <path
                      d="M35.8716 27.9634L34.8847 28.9445C34.8847 28.9445 32.539 31.2769 26.1365 24.9106C19.7341 18.5445 22.0797 16.2122 22.0797 16.2122L22.7011 15.5943C24.232 14.0722 24.3763 11.6283 23.0406 9.84421L20.3086 6.19468C18.6554 3.9865 15.4611 3.6948 13.5663 5.5788L10.1655 8.9603C9.226 9.89448 8.59641 11.1054 8.67276 12.4488C8.86809 15.8856 10.423 23.2802 19.0998 31.9076C28.301 41.0566 36.9346 41.4202 40.4651 41.091C41.5818 40.987 42.5529 40.4183 43.3355 39.64L46.4135 36.5798C48.4911 34.5139 47.9053 30.9723 45.247 29.5273L41.1076 27.277C39.3621 26.3283 37.2357 26.6069 35.8716 27.9634Z"
                      fill="white"
                    />
                  </svg>
                </div>
                <div>
                  <h2 className=" font-viga text-2xl">Phone Number</h2>
                  <p>+244 92 817 1555</p>
                  <p>+244 92 817 1556</p>
                </div>
              </div>
              <div className=" flex gap-5">
                <div className=" w-[87px] h-[87px] bg-[#0B0B3A] flex justify-center items-center rounded-full">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="45"
                    height="45"
                    viewBox="0 0 45 45"
                    fill="none"
                  >
                    <path
                      d="M22.5 0C13.1808 0 5.625 7.55578 5.625 16.875C5.625 20.5446 6.82805 23.9119 8.82773 26.6695C8.86359 26.7356 8.86922 26.8095 8.91 26.8727L20.16 43.7477C20.6817 44.5303 21.5606 45 22.5 45C23.4394 45 24.3183 44.5303 24.84 43.7477L36.09 26.8727C36.1315 26.8095 36.1364 26.7356 36.1723 26.6695C38.172 23.9119 39.375 20.5446 39.375 16.875C39.375 7.55578 31.8192 0 22.5 0ZM22.5 22.5C19.3936 22.5 16.875 19.9814 16.875 16.875C16.875 13.7686 19.3936 11.25 22.5 11.25C25.6064 11.25 28.125 13.7686 28.125 16.875C28.125 19.9814 25.6064 22.5 22.5 22.5Z"
                      fill="white"
                    />
                  </svg>
                </div>
                <div>
                  <h2 className=" font-viga text-2xl">Address</h2>
                  <p className=" w-52">
                    Av. Cmte.Valódia nº 226, 2º andar (No prédio do Kero
                    Combatentes) - Sambizanga
                  </p>
                </div>
              </div>
              <div className=" flex gap-5">
                <div className=" w-[87px] h-[87px] bg-[#0B0B3A] flex justify-center items-center rounded-full">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="54"
                    height="54"
                    viewBox="0 0 54 54"
                    fill="none"
                  >
                    <path
                      d="M46.503 7.16394H7.49704C3.35675 7.16394 0 10.5207 0 14.661V39.339C0 43.4793 3.35675 46.836 7.49704 46.836H46.503C50.6431 46.836 54 43.4793 54 39.339V14.661C54 10.5207 50.6431 7.16394 46.503 7.16394ZM18.7909 33.9314L8.29259 42.8878C7.55209 43.5198 6.43887 43.4319 5.807 42.6907C5.17503 41.9502 5.26289 40.8369 6.00423 40.2051L16.5026 31.2487C17.243 30.6167 18.3561 30.7046 18.9881 31.4459C19.62 32.1863 19.5322 33.2995 18.7909 33.9314ZM27 30.5264C25.5958 30.5229 24.2346 30.0564 23.1704 29.136L23.1713 29.1369L23.1679 29.1343C23.1687 29.1352 23.1697 29.1352 23.1704 29.136L7.0624 15.1552C6.32623 14.5163 6.24786 13.4032 6.88584 12.6679C7.52467 11.9318 8.63789 11.8534 9.37301 12.4914L25.4856 26.4757C25.8299 26.7822 26.3974 27.0035 27 27C27.6018 27.0018 28.1596 26.7865 28.523 26.4697L28.5308 26.4628L44.6269 12.4915C45.3621 11.8535 46.4753 11.9319 47.1142 12.668C47.752 13.4032 47.6738 14.5164 46.9376 15.1553L30.8251 29.1404C29.7644 30.0511 28.4051 30.5246 27 30.5264ZM48.1937 42.6907C47.5618 43.4319 46.4485 43.5198 45.7083 42.8878L35.2099 33.9314C34.4687 33.2994 34.3808 32.1863 35.0128 31.4459C35.6446 30.7046 36.7579 30.6168 37.4983 31.2487L47.9966 40.2051C48.7379 40.8369 48.8257 41.9502 48.1937 42.6907Z"
                      fill="white"
                    />
                  </svg>
                </div>
                <div>
                  <h2 className=" font-viga text-2xl">Email Address</h2>
                  <p className=" w-52">info@educamais.academy</p>
                </div>
              </div>
            </div>
          </div>
          <form className=" p-10 space-y-4 lg:p-20 bg-white shadow-xl rounded-2xl md:w-10/12">
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
            <div>
              <label htmlFor="message" className="font-viga">
                Menssagem
              </label>
              <br />
              <input
                type="text"
                name="message"
                className=" border-b-2 border-primary w-full"
              />
            </div>
            <button className=" py-4 mt-5 bg-primary font-viga rounded-xl text-white w-full ">
              Enviar
            </button>
          </form>
        </div>
      </div>
    </main>
  );
};

export default ContactPage;
