"use client";
import { useState } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import Image from "next/image";

const Register = (pageContext) => {
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isNameError, setIsNameError] = useState(false);
  const [isDOBError, setIsDOBError] = useState(false);
  const [isPhoneNumberError, setIsPhoneNumberError] = useState(false);
  const [isWhatsAppNumberError, setIsWhatsAppNumberError] = useState(false);
  const [isEmailError, setIsEmailError] = useState(false);
  const [isLanguageError, setIsLanguageError] = useState(false);
  const [isGenderError, setIsGenderError] = useState(false);
  const [name, setName] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState("");
  const [gender, setGender] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [whatsAppNumber, setWhatsAppNumber] = useState("");
  const [email, setEmail] = useState("");
  const [language, setLanguage] = useState("");
  const searchParams = useSearchParams();
  const courseName = searchParams.get("course-name");
  const router = useRouter();

  const sendEmail = async () => {
    if (
      name != "" &&
      dateOfBirth != "" &&
      gender != "" &&
      phoneNumber != "" &&
      whatsAppNumber != "" &&
      email != "" &&
      language != ""
    ) {
      try {
        setIsLoading(true);
        const send = await fetch("/api/register", {
          method: "POST",
          body: JSON.stringify({
            courseName: courseName,
            name: name,
            dateOfBirth: dateOfBirth,
            phoneNumber: phoneNumber,
            whatsAppNumber: whatsAppNumber,
            email: email,
            language: language,
          }),
        });

        if (send.status == 200) {
          setIsLoading(false);
          router.push("/thank_you");
        } else {
          setIsError(true);
          setIsLoading(false);
        }
      } catch (error) {
        setIsError(true);
        setIsLoading(false);
      }
    } else {
      setIsError(true);
    }
  };

  return (
    <main>
      <div className="hero bg-[url('/svg/bg-graphic.svg')] bg-no-repeat  bg-right-top bg-contain md:bg-auto pb-20">
        <div className="content container m-auto pt-[200px] md:pt-[400px] lg:pt-[350px] ">
          <div>
            <div className=" md:flex justify-between ">
              <h1 className=" text-5xl font-viga text-primary md:w-[500px]">
                Formulário de Inscrição no Curso
              </h1>
            </div>
          </div>
          <div className=" p-10 space-y-10 lg:p-20 bg-white shadow-xl rounded-2xl md:w-10/12 mt-10">
            <h2 className="font-viga text-2xl">Informação pessoal</h2>
            <div>
              <label htmlFor="name" className="font-viga">
                Nome Completo*
              </label>
              <br />
              <input
                type="text"
                name="name"
                id="name"
                on
                placeholder="Nome Completo"
                onChange={(e) => {
                  setName(e.target.value);
                }}
                onBlur={(e) => {
                  e.target.value == ""
                    ? setIsNameError(true)
                    : setIsNameError(false);
                }}
                className={` border-b-2 appearance-none leading-tight focus:outline-none focus:border-accent ease-in-out delay-100 py-2 px-4 w-full ${
                  isNameError ? "border-red-500" : "border-primary"
                }`}
              />
              {isNameError ? (
                <p className=" text-xs text-red-500">name cannot be empty</p>
              ) : null}
            </div>

            <div>
              <label htmlFor="date-of-birth" className="font-viga">
                Data de nascimento*
              </label>
              <br />
              <input
                type="date"
                name="date-of-birth"
                id="date-of-birth"
                onChange={(e) => {
                  setDateOfBirth(e.target.value);
                }}
                onBlur={(e) => {
                  e.target.value == ""
                    ? setIsDOBError(true)
                    : setIsDOBError(false);
                }}
                className={` border-b-2 appearance-none leading-tight focus:outline-none focus:border-accent ease-in-out delay-100 py-2 px-4 w-full ${
                  isDOBError ? "border-red-500" : "border-primary"
                }`}
              />
              {isDOBError ? (
                <p className=" text-xs text-red-500">
                  Date of Birth cannot be empty
                </p>
              ) : null}
            </div>
            <div>
              <label htmlFor="gender" className="font-viga">
                Género
              </label>
              <br />
              {/* FIXME: gender validation not working */}
              <select
                name="Género"
                id="gender"
                onChange={(e) => {
                  setGender(e.target.value);
                }}
                onBlur={(e) => {
                  e.target.value == ""
                    ? setIsGenderError(true)
                    : setIsGenderError(false);
                }}
                className={` border-b-2 appearance-none leading-tight focus:outline-none focus:border-accent ease-in-out delay-100 py-2 px-4 w-full ${
                  isGenderError ? "border-red-500" : "border-primary"
                }`}
              >
                <option hidden disabled selected>
                  -- selecione uma opção --
                </option>
                <option value="Masculino">Masculino</option>
                <option value="Feminino">Feminino</option>
              </select>
              {isGenderError ? (
                <p className=" text-xs text-red-500">Gender cannot be empty</p>
              ) : null}
            </div>
            <div>
              <label htmlFor="phone-number" className="font-viga">
                Número do telefone
              </label>
              <br />
              <input
                type="tel"
                name="phone-number"
                id="phone-number"
                placeholder="+244 000 000 000"
                onChange={(e) => {
                  setPhoneNumber(e.target.value);
                }}
                onBlur={(e) => {
                  e.target.value == ""
                    ? setIsPhoneNumberError(true)
                    : setIsPhoneNumberError(false);
                }}
                className={` border-b-2 appearance-none leading-tight focus:outline-none focus:border-accent ease-in-out delay-100 py-2 px-4 w-full ${
                  isPhoneNumberError ? "border-red-500" : "border-primary"
                }`}
              />
              {isPhoneNumberError ? (
                <p className=" text-xs text-red-500">
                  Phone Number cannot be empty
                </p>
              ) : null}
            </div>
            <div>
              <label htmlFor="whatsApp-number" className="font-viga">
                Número do WhatsApp
              </label>
              <br />
              <input
                type="tel"
                name="whatsApp-number"
                id="whatsApp-number"
                placeholder="+244 000 000 000"
                onChange={(e) => {
                  setWhatsAppNumber(e.target.value);
                }}
                onBlur={(e) => {
                  e.target.value == ""
                    ? setIsWhatsAppNumberError(true)
                    : setIsWhatsAppNumberError(false);
                }}
                className={` border-b-2 appearance-none leading-tight focus:outline-none focus:border-accent ease-in-out delay-100 py-2 px-4 w-full ${
                  isWhatsAppNumberError ? "border-red-500" : "border-primary"
                }`}
              />
              {isWhatsAppNumberError ? (
                <p className=" text-xs text-red-500">
                  WhatsApp Number cannot be empty
                </p>
              ) : null}
            </div>
            <div>
              <label htmlFor="whatsApp-number" className="font-viga">
                E-mail
              </label>
              <br />
              <input
                type="email"
                name="email"
                id="email"
                placeholder="example@email.com"
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                onBlur={(e) => {
                  e.target.value == ""
                    ? setIsEmailError(true)
                    : setIsEmailError(false);
                }}
                className={` border-b-2 appearance-none leading-tight focus:outline-none focus:border-accent ease-in-out delay-100 py-2 px-4 w-full ${
                  isEmailError ? "border-red-500" : "border-primary"
                }`}
              />
              {isEmailError ? (
                <p className=" text-xs text-red-500">Email cannot be empty</p>
              ) : null}
            </div>
            <div>
              <label htmlFor="language" className="font-viga">
                Língua Materna
              </label>
              <br />
              <input
                type="text"
                name="language"
                id="language"
                placeholder="Português"
                onChange={(e) => {
                  setLanguage(e.target.value);
                }}
                onBlur={(e) => {
                  e.target.value == ""
                    ? setIsLanguageError(true)
                    : setIsLanguageError(false);
                }}
                className={` border-b-2 appearance-none leading-tight focus:outline-none focus:border-accent ease-in-out delay-100 py-2 px-4 w-full ${
                  isLanguageError ? "border-red-500" : "border-primary"
                }`}
              />
              {isLanguageError ? (
                <p className=" text-xs text-red-500">
                  Language cannot be empty
                </p>
              ) : null}
            </div>
            {/* <div>
              <label htmlFor="national-id" className="font-viga">
                Cópia do bilhete
              </label>
              <br />
              <input
                type="file"
                name="national-id"
                id="national-id"
                accept=".png,.jpg,.webp,.pdf"
                className=" border-b-2 appearance-none leading-tight focus:outline-none focus:border-accent ease-in-out delay-100 py-2 px-4 border-primary w-full"
              />
            </div>
            <div>
              <label htmlFor="photo" className="font-viga">
                Foto tipo passe
              </label>
              <br />
              <input
                type="file"
                name="photo"
                id="photo"
                accept=".png,.jpg,.webp,.pdf"
                className=" border-b-2 appearance-none leading-tight focus:outline-none focus:border-accent ease-in-out delay-100 py-2 px-4 border-primary w-full"
              />
            </div> */}

            <p className=" text-red-500 text-center">
              {isError ? "ERROR: make sure all fields are filled" : null}
            </p>
            {isLoading ? (
              <div className=" w-full flex justify-center">
                <Image
                  src={"/svg/loading.svg"}
                  alt="loading"
                  width={60}
                  height={60}
                  className=" animate-spin"
                />
              </div>
            ) : null}

            <button
              disabled={isLoading}
              onClick={sendEmail}
              className={` py-4 mt-5 ${
                !isError ? "bg-primary" : "bg-red-500"
              } font-viga rounded-xl text-white w-full`}
            >
              <p className=" ">Enviar</p>
            </button>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Register;
