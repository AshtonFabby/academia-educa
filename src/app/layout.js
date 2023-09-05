import Footer from "./components/footer";
import NavBar from "./components/navbar";
import "./globals.css";
import { Viga, Roboto_Condensed } from "next/font/google";

const viga = Viga({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-viga",
});

const roboto_condensed = Roboto_Condensed({
  subsets: ["latin"],
  weight: ["400", "300", "700"],
  variable: "--roboto_condensed",
});

export const metadata = {
  title: "Academia Educa",
  description:
    "Chegou a hora de investir em si mesmo e preparar-se para o futuro; estamos aqui para apoiar o seu crescimento e ajudá-lo a atingir o seu potencial máximo.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt">
      <body
        className={`${viga.variable} ${roboto_condensed.variable} font-roboto_condensed text-dark`}
      >
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
