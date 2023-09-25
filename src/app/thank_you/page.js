import Link from "next/link";

const ThankYou = () => {
  return (
    <div className="hero h-screen bg-[url('/svg/bg-graphic.svg')] bg-no-repeat  bg-right-top bg-contain md:bg-auto pb-20">
      <div className="content container m-auto pt-[200px] md:pt-[400px] lg:pt-[300px] space-y-8">
        <h1 className=" text-5xl font-viga text-primary">
          Registration Successful
        </h1>
        <Link
          href="/"
          className=" text-white mb-5 md:mb-0 flex gap-5 items-center px-10 py-4 rounded-lg justify-center bg-primary hover:bg-accent hover:text-black hover:shadow-xl ease-in-out duration-200 w-min"
        >
          Home
        </Link>
      </div>
    </div>
  );
};

export default ThankYou;
