"use client";
import Image from "next/image";
import ValueItems from "./components/value_items";
import Categories from "./components/categories";
import Courses from "./components/courses";
import ContactUs from "./components/contact_us";
import { BsWhatsapp } from "react-icons/bs";
import { gsap, Power3, ScrollTrigger } from "gsap/all";
import { useEffect } from "react";

export default function Home() {
  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    let heroHeadingText = document.getElementById("hero-heading-text");
    let heroBodyText = document.getElementById("hero-body-text");
    let heroButton1 = document.getElementById("hero-button-1");

    const tl = gsap.timeline({ delay: 0.5 });

    tl.to(heroHeadingText, {
      opacity: 1,
      y: 0,
      duration: 1,
      ease: Power3.easeIn,
    })
      .to(heroBodyText, { opacity: 1, duration: 1, delay: 1 })
      .to(heroButton1, { opacity: 1, duration: 1 });
  }, []);

  useEffect(() => {
    let whyHeading = document.getElementById("why-heading");
    let whyItem = document.getElementById("why-item-1");
    let whyItem2 = document.getElementById("why-item-2");
    let whyItem3 = document.getElementById("why-item-3");

    const tl = new gsap.timeline({
      delay: 0.5,
      scrollTrigger: { trigger: whyHeading, start: "top 60%" },
    });
    tl.to(whyHeading, { opacity: 1, duration: 0.5 })
      .to(whyItem, { opacity: 1, duration: 0.5 })
      .to(whyItem2, { opacity: 1, duration: 0.5 })
      .to(whyItem3, { opacity: 1, duration: 0.5 });
  }, []);

  useEffect(() => {
    let values = document.getElementById("values");
    let valuesImage = document.getElementById("values-image");
    let valuesContent = document.getElementById("values-content");

    const tl = new gsap.timeline({
      delay: 0.5,
      scrollTrigger: { trigger: values, start: "top 60%" },
    });
    tl.to(valuesImage, { opacity: 1, x: 0, duration: 1 }).to(valuesContent, {
      opacity: 1,
      duration: 1,
    });
  }, []);
  return (
    <main>
      <div className="hero bg-[url('/svg/bg-graphic.svg')] bg-no-repeat  bg-right-top bg-contain md:bg-auto pb-20">
        <div className="content container m-auto pt-[200px] md:pt-[400px] lg:pt-[300px] space-y-8">
          <h1
            id="hero-heading-text"
            className=" translate-y-20 opacity-0 text-5xl font-viga text-primary"
          >
            Transforme o seu futuro!
          </h1>
          <p id="hero-body-text" className="opacity-0">
            Chegou a hora de investir em si mesmo e preparar-se para o futuro;
            estamos aqui <br /> para apoiar o seu crescimento e ajudá-lo a
            atingir o seu potencial máximo.
          </p>
          <div className=" md:flex gap-10 ">
            <button
              id="hero-button-1"
              className=" text-white opacity-0 mb-5 md:mb-0 flex gap-5 items-center px-10 py-4 rounded-lg justify-center bg-primary hover:bg-accent hover:text-black hover:shadow-xl ease-in-out duration-200"
            >
              <BsWhatsapp />
              <p className=" font-viga">Fale connosco</p>
            </button>
          </div>
        </div>
      </div>
      <div className="container m-auto text-center">
        <h1 id="why-heading" className=" opacity-0 font-viga text-4xl mb-14 ">
          Porquê investir em uma formação profissional?
        </h1>

        <div className="grid md:grid-cols-2 gap-8 lg:grid-cols-3">
          <div
            id="why-item-1"
            className=" opacity-0 flex border-dashed hover:shadow-2xl rounded-2xl border-primary border-2 flex-col px-10 py-16 justify-center items-center gap-5"
          >
            <svg width="70" height="70" viewBox="0 0 70 70" fill="none">
              <g clipPath="url(#clip0_51_18)">
                <mask
                  id="path-1-outside-1_51_18"
                  maskUnits="userSpaceOnUse"
                  x="5.57553"
                  y="-2"
                  width="59"
                  height="74"
                  fill="black"
                >
                  <rect
                    fill="white"
                    x="5.57553"
                    y="-2"
                    width="59"
                    height="74"
                  />
                  <path d="M60.8686 59.9259C59.4057 57.0998 57.1102 55.262 54.8681 54.0141C52.6261 52.7636 50.3803 52.0549 48.9102 51.5013C47.7474 51.0693 46.5236 50.5083 45.702 49.9293C45.2904 49.644 44.9894 49.3562 44.8339 49.1426C44.6737 48.9205 44.6652 48.8222 44.6628 48.7664C44.6628 47.6617 44.6628 46.2851 44.6628 44.4946C45.3935 43.6765 46.2713 42.6507 47.0931 41.3335C47.9502 39.9618 48.7136 38.2552 49.1846 36.2073C49.453 36.0762 49.72 35.9256 49.981 35.7424C50.7834 35.1901 51.4619 34.3828 52.013 33.3328C52.5714 32.2778 53.0522 30.9571 53.5632 29.1715C53.8872 28.0341 54.0389 27.1115 54.0403 26.2969C54.0415 25.542 53.9019 24.8562 53.5802 24.271C53.3424 23.834 53.006 23.4807 52.6674 23.244C52.3263 23.0061 52.0069 22.8727 51.7436 22.7851C51.7425 22.7511 51.7412 22.722 51.7412 22.6844C51.7374 21.7996 51.9136 20.3113 52.1139 18.9493C52.2341 18.1165 52.3081 17.2317 52.3081 16.3174C52.3081 14.9191 52.1358 13.4454 51.6866 11.9911C51.0202 9.81208 49.6836 7.66833 47.4573 6.05382C45.2468 4.44533 42.2193 3.37468 38.2206 3.05298C33.7607 2.50911 31.1241 1.9956 28.9937 1.50163C26.8657 1.00999 25.1869 0.517123 22.7396 0.0401113V0.0413418C22.5964 0.0146816 22.4555 5.27148e-05 22.3257 5.27148e-05C22.0052 -0.00240822 21.6616 0.0814004 21.3813 0.229467C20.8447 0.513568 20.568 0.917709 20.3894 1.25035C20.0884 1.84507 19.9913 2.38415 19.8953 2.95345C19.7679 3.79728 19.7182 4.69306 19.6477 5.43462C19.6138 5.80376 19.5736 6.13271 19.5313 6.36212C19.5106 6.47628 19.4875 6.56488 19.473 6.61218L19.4621 6.64732C17.3148 10.4142 16.7829 14.3496 16.7829 17.3966C16.7829 19.8219 17.1217 21.7144 17.288 22.5448C17.3487 22.8544 17.3729 23.0668 17.3863 23.2366C17.2151 23.358 17.0355 23.5013 16.8486 23.6847C16.5147 24.0136 16.181 24.4578 15.938 25.0212C15.6952 25.582 15.5485 26.2546 15.5496 27.0023C15.5496 27.585 15.6346 28.2102 15.8167 28.8852C16.4771 31.3372 17.2977 33.0403 18.3198 34.2687C19.082 35.1975 19.9645 35.8056 20.8156 36.2122C21.2889 38.2576 22.0513 39.9632 22.9071 41.3337C23.7288 42.6508 24.6065 43.6765 25.3374 44.4948C25.3374 46.2852 25.3374 47.6617 25.3374 48.7665C25.3385 48.7872 25.3288 48.9012 25.1493 49.1428C24.8908 49.4961 24.2705 49.9937 23.5166 50.4174C22.7641 50.846 21.8839 51.221 21.1168 51.4917C20.1201 51.8438 18.78 52.2771 17.3391 52.895C15.1783 53.8201 12.7518 55.1651 10.829 57.3914C8.89891 59.6104 7.56345 62.7302 7.57561 66.8064C7.57561 67.3673 7.59981 67.95 7.64972 68.5496L7.77085 70H9.22636H62.2294L62.3508 68.5495C62.4005 67.9509 62.4249 67.3707 62.4249 66.8111C62.4272 64.0945 61.8445 61.8038 60.8686 59.9259ZM59.2613 66.8366H10.7389C10.7389 66.8269 10.7378 66.8172 10.7378 66.8063C10.7401 64.5291 11.2088 62.7773 11.9358 61.3596C13.0284 59.24 14.7558 57.8051 16.6604 56.7382C18.5638 55.6748 20.5923 55.0265 22.168 54.4743C23.3892 54.0409 24.8034 53.4193 26.0258 52.572C26.6364 52.1459 27.2045 51.6616 27.6694 51.0534C28.1258 50.4525 28.4985 49.6731 28.4997 48.7664C28.4997 47.5355 28.4997 45.9987 28.4997 43.8913V43.2832L28.0942 42.8328C27.2992 41.9527 26.3948 40.9487 25.5912 39.662C24.7899 38.3729 24.0896 36.8117 23.7315 34.7869L23.5713 33.8826L22.7057 33.5719C21.9409 33.2915 21.3764 32.9843 20.7476 32.2463C20.1284 31.5033 19.4559 30.2396 18.8697 28.0631C18.7507 27.6213 18.7107 27.2716 18.7107 27.0021C18.7119 26.6538 18.7726 26.4353 18.8406 26.2762C18.9425 26.0431 19.0784 25.9144 19.1962 25.8258L19.3285 25.7457L19.3347 25.7421L19.4924 25.6899L19.6698 25.5721C19.9405 25.3973 20.2027 25.0792 20.3483 24.7163C20.4988 24.3497 20.562 23.948 20.5631 23.4673C20.5631 23.0399 20.511 22.5447 20.3884 21.928C20.2438 21.2034 19.9454 19.5329 19.9454 17.3964C19.9442 14.7003 20.4261 11.3063 22.2275 8.17802C22.4412 7.79685 22.5224 7.47993 22.5965 7.15714C22.7167 6.60111 22.77 6.02949 22.8222 5.44064C22.8878 4.66736 22.9498 3.88204 23.0421 3.33093C24.8848 3.72181 26.3537 4.13443 28.28 4.58122C30.5075 5.09952 33.2946 5.63724 37.8395 6.19204L37.8711 6.19683L37.9086 6.20038C40.3133 6.38742 42.2035 6.86566 43.6759 7.5163C45.8841 8.50081 47.1793 9.83245 48.006 11.345C48.8267 12.8587 49.1459 14.6031 49.1459 16.3172C49.1459 17.0601 49.0852 17.7981 48.9844 18.4962C48.7794 19.9202 48.5828 21.4545 48.5789 22.6842C48.5802 23.0726 48.5959 23.432 48.664 23.8083C48.6991 23.9964 48.7466 24.1919 48.8387 24.4139C48.931 24.6336 49.0669 24.8959 49.3499 25.1605L49.3522 25.1618C49.6618 25.4348 49.9083 25.5209 50.0818 25.589C50.3902 25.6935 50.5601 25.7225 50.6814 25.7626L50.8174 25.8136C50.8344 25.8585 50.8781 25.9968 50.8781 26.2967C50.8794 26.696 50.7932 27.3588 50.5225 28.3033C49.8901 30.5356 49.3232 31.8067 48.8461 32.4621C48.607 32.7948 48.403 32.9866 48.176 33.1456C47.9477 33.3046 47.677 33.4345 47.2947 33.5717L46.4292 33.8813L46.2689 34.7869C45.9109 36.8117 45.2105 38.3728 44.4093 39.662C43.6058 40.9487 42.7014 41.9527 41.9062 42.8328L41.502 43.2832V43.8913C41.502 45.9987 41.502 47.5355 41.502 48.7664C41.4995 49.6392 41.8418 50.4173 42.2873 51.0171C42.9623 51.9213 43.863 52.5562 44.8244 53.1086C45.787 53.6548 46.8274 54.0967 47.8033 54.4632C48.863 54.8602 50.1122 55.2765 51.4003 55.8349C53.3339 56.6666 55.3151 57.8002 56.7729 59.4864C58.2273 61.1798 59.2505 63.3989 59.2627 66.8112C59.2626 66.8185 59.2613 66.8294 59.2613 66.8366Z" />
                </mask>
                <path
                  d="M60.8686 59.9259C59.4057 57.0998 57.1102 55.262 54.8681 54.0141C52.6261 52.7636 50.3803 52.0549 48.9102 51.5013C47.7474 51.0693 46.5236 50.5083 45.702 49.9293C45.2904 49.644 44.9894 49.3562 44.8339 49.1426C44.6737 48.9205 44.6652 48.8222 44.6628 48.7664C44.6628 47.6617 44.6628 46.2851 44.6628 44.4946C45.3935 43.6765 46.2713 42.6507 47.0931 41.3335C47.9502 39.9618 48.7136 38.2552 49.1846 36.2073C49.453 36.0762 49.72 35.9256 49.981 35.7424C50.7834 35.1901 51.4619 34.3828 52.013 33.3328C52.5714 32.2778 53.0522 30.9571 53.5632 29.1715C53.8872 28.0341 54.0389 27.1115 54.0403 26.2969C54.0415 25.542 53.9019 24.8562 53.5802 24.271C53.3424 23.834 53.006 23.4807 52.6674 23.244C52.3263 23.0061 52.0069 22.8727 51.7436 22.7851C51.7425 22.7511 51.7412 22.722 51.7412 22.6844C51.7374 21.7996 51.9136 20.3113 52.1139 18.9493C52.2341 18.1165 52.3081 17.2317 52.3081 16.3174C52.3081 14.9191 52.1358 13.4454 51.6866 11.9911C51.0202 9.81208 49.6836 7.66833 47.4573 6.05382C45.2468 4.44533 42.2193 3.37468 38.2206 3.05298C33.7607 2.50911 31.1241 1.9956 28.9937 1.50163C26.8657 1.00999 25.1869 0.517123 22.7396 0.0401113V0.0413418C22.5964 0.0146816 22.4555 5.27148e-05 22.3257 5.27148e-05C22.0052 -0.00240822 21.6616 0.0814004 21.3813 0.229467C20.8447 0.513568 20.568 0.917709 20.3894 1.25035C20.0884 1.84507 19.9913 2.38415 19.8953 2.95345C19.7679 3.79728 19.7182 4.69306 19.6477 5.43462C19.6138 5.80376 19.5736 6.13271 19.5313 6.36212C19.5106 6.47628 19.4875 6.56488 19.473 6.61218L19.4621 6.64732C17.3148 10.4142 16.7829 14.3496 16.7829 17.3966C16.7829 19.8219 17.1217 21.7144 17.288 22.5448C17.3487 22.8544 17.3729 23.0668 17.3863 23.2366C17.2151 23.358 17.0355 23.5013 16.8486 23.6847C16.5147 24.0136 16.181 24.4578 15.938 25.0212C15.6952 25.582 15.5485 26.2546 15.5496 27.0023C15.5496 27.585 15.6346 28.2102 15.8167 28.8852C16.4771 31.3372 17.2977 33.0403 18.3198 34.2687C19.082 35.1975 19.9645 35.8056 20.8156 36.2122C21.2889 38.2576 22.0513 39.9632 22.9071 41.3337C23.7288 42.6508 24.6065 43.6765 25.3374 44.4948C25.3374 46.2852 25.3374 47.6617 25.3374 48.7665C25.3385 48.7872 25.3288 48.9012 25.1493 49.1428C24.8908 49.4961 24.2705 49.9937 23.5166 50.4174C22.7641 50.846 21.8839 51.221 21.1168 51.4917C20.1201 51.8438 18.78 52.2771 17.3391 52.895C15.1783 53.8201 12.7518 55.1651 10.829 57.3914C8.89891 59.6104 7.56345 62.7302 7.57561 66.8064C7.57561 67.3673 7.59981 67.95 7.64972 68.5496L7.77085 70H9.22636H62.2294L62.3508 68.5495C62.4005 67.9509 62.4249 67.3707 62.4249 66.8111C62.4272 64.0945 61.8445 61.8038 60.8686 59.9259ZM59.2613 66.8366H10.7389C10.7389 66.8269 10.7378 66.8172 10.7378 66.8063C10.7401 64.5291 11.2088 62.7773 11.9358 61.3596C13.0284 59.24 14.7558 57.8051 16.6604 56.7382C18.5638 55.6748 20.5923 55.0265 22.168 54.4743C23.3892 54.0409 24.8034 53.4193 26.0258 52.572C26.6364 52.1459 27.2045 51.6616 27.6694 51.0534C28.1258 50.4525 28.4985 49.6731 28.4997 48.7664C28.4997 47.5355 28.4997 45.9987 28.4997 43.8913V43.2832L28.0942 42.8328C27.2992 41.9527 26.3948 40.9487 25.5912 39.662C24.7899 38.3729 24.0896 36.8117 23.7315 34.7869L23.5713 33.8826L22.7057 33.5719C21.9409 33.2915 21.3764 32.9843 20.7476 32.2463C20.1284 31.5033 19.4559 30.2396 18.8697 28.0631C18.7507 27.6213 18.7107 27.2716 18.7107 27.0021C18.7119 26.6538 18.7726 26.4353 18.8406 26.2762C18.9425 26.0431 19.0784 25.9144 19.1962 25.8258L19.3285 25.7457L19.3347 25.7421L19.4924 25.6899L19.6698 25.5721C19.9405 25.3973 20.2027 25.0792 20.3483 24.7163C20.4988 24.3497 20.562 23.948 20.5631 23.4673C20.5631 23.0399 20.511 22.5447 20.3884 21.928C20.2438 21.2034 19.9454 19.5329 19.9454 17.3964C19.9442 14.7003 20.4261 11.3063 22.2275 8.17802C22.4412 7.79685 22.5224 7.47993 22.5965 7.15714C22.7167 6.60111 22.77 6.02949 22.8222 5.44064C22.8878 4.66736 22.9498 3.88204 23.0421 3.33093C24.8848 3.72181 26.3537 4.13443 28.28 4.58122C30.5075 5.09952 33.2946 5.63724 37.8395 6.19204L37.8711 6.19683L37.9086 6.20038C40.3133 6.38742 42.2035 6.86566 43.6759 7.5163C45.8841 8.50081 47.1793 9.83245 48.006 11.345C48.8267 12.8587 49.1459 14.6031 49.1459 16.3172C49.1459 17.0601 49.0852 17.7981 48.9844 18.4962C48.7794 19.9202 48.5828 21.4545 48.5789 22.6842C48.5802 23.0726 48.5959 23.432 48.664 23.8083C48.6991 23.9964 48.7466 24.1919 48.8387 24.4139C48.931 24.6336 49.0669 24.8959 49.3499 25.1605L49.3522 25.1618C49.6618 25.4348 49.9083 25.5209 50.0818 25.589C50.3902 25.6935 50.5601 25.7225 50.6814 25.7626L50.8174 25.8136C50.8344 25.8585 50.8781 25.9968 50.8781 26.2967C50.8794 26.696 50.7932 27.3588 50.5225 28.3033C49.8901 30.5356 49.3232 31.8067 48.8461 32.4621C48.607 32.7948 48.403 32.9866 48.176 33.1456C47.9477 33.3046 47.677 33.4345 47.2947 33.5717L46.4292 33.8813L46.2689 34.7869C45.9109 36.8117 45.2105 38.3728 44.4093 39.662C43.6058 40.9487 42.7014 41.9527 41.9062 42.8328L41.502 43.2832V43.8913C41.502 45.9987 41.502 47.5355 41.502 48.7664C41.4995 49.6392 41.8418 50.4173 42.2873 51.0171C42.9623 51.9213 43.863 52.5562 44.8244 53.1086C45.787 53.6548 46.8274 54.0967 47.8033 54.4632C48.863 54.8602 50.1122 55.2765 51.4003 55.8349C53.3339 56.6666 55.3151 57.8002 56.7729 59.4864C58.2273 61.1798 59.2505 63.3989 59.2627 66.8112C59.2626 66.8185 59.2613 66.8294 59.2613 66.8366Z"
                  fill="url(#paint0_linear_51_18)"
                />
                <path
                  d="M60.8686 59.9259C59.4057 57.0998 57.1102 55.262 54.8681 54.0141C52.6261 52.7636 50.3803 52.0549 48.9102 51.5013C47.7474 51.0693 46.5236 50.5083 45.702 49.9293C45.2904 49.644 44.9894 49.3562 44.8339 49.1426C44.6737 48.9205 44.6652 48.8222 44.6628 48.7664C44.6628 47.6617 44.6628 46.2851 44.6628 44.4946C45.3935 43.6765 46.2713 42.6507 47.0931 41.3335C47.9502 39.9618 48.7136 38.2552 49.1846 36.2073C49.453 36.0762 49.72 35.9256 49.981 35.7424C50.7834 35.1901 51.4619 34.3828 52.013 33.3328C52.5714 32.2778 53.0522 30.9571 53.5632 29.1715C53.8872 28.0341 54.0389 27.1115 54.0403 26.2969C54.0415 25.542 53.9019 24.8562 53.5802 24.271C53.3424 23.834 53.006 23.4807 52.6674 23.244C52.3263 23.0061 52.0069 22.8727 51.7436 22.7851C51.7425 22.7511 51.7412 22.722 51.7412 22.6844C51.7374 21.7996 51.9136 20.3113 52.1139 18.9493C52.2341 18.1165 52.3081 17.2317 52.3081 16.3174C52.3081 14.9191 52.1358 13.4454 51.6866 11.9911C51.0202 9.81208 49.6836 7.66833 47.4573 6.05382C45.2468 4.44533 42.2193 3.37468 38.2206 3.05298C33.7607 2.50911 31.1241 1.9956 28.9937 1.50163C26.8657 1.00999 25.1869 0.517123 22.7396 0.0401113V0.0413418C22.5964 0.0146816 22.4555 5.27148e-05 22.3257 5.27148e-05C22.0052 -0.00240822 21.6616 0.0814004 21.3813 0.229467C20.8447 0.513568 20.568 0.917709 20.3894 1.25035C20.0884 1.84507 19.9913 2.38415 19.8953 2.95345C19.7679 3.79728 19.7182 4.69306 19.6477 5.43462C19.6138 5.80376 19.5736 6.13271 19.5313 6.36212C19.5106 6.47628 19.4875 6.56488 19.473 6.61218L19.4621 6.64732C17.3148 10.4142 16.7829 14.3496 16.7829 17.3966C16.7829 19.8219 17.1217 21.7144 17.288 22.5448C17.3487 22.8544 17.3729 23.0668 17.3863 23.2366C17.2151 23.358 17.0355 23.5013 16.8486 23.6847C16.5147 24.0136 16.181 24.4578 15.938 25.0212C15.6952 25.582 15.5485 26.2546 15.5496 27.0023C15.5496 27.585 15.6346 28.2102 15.8167 28.8852C16.4771 31.3372 17.2977 33.0403 18.3198 34.2687C19.082 35.1975 19.9645 35.8056 20.8156 36.2122C21.2889 38.2576 22.0513 39.9632 22.9071 41.3337C23.7288 42.6508 24.6065 43.6765 25.3374 44.4948C25.3374 46.2852 25.3374 47.6617 25.3374 48.7665C25.3385 48.7872 25.3288 48.9012 25.1493 49.1428C24.8908 49.4961 24.2705 49.9937 23.5166 50.4174C22.7641 50.846 21.8839 51.221 21.1168 51.4917C20.1201 51.8438 18.78 52.2771 17.3391 52.895C15.1783 53.8201 12.7518 55.1651 10.829 57.3914C8.89891 59.6104 7.56345 62.7302 7.57561 66.8064C7.57561 67.3673 7.59981 67.95 7.64972 68.5496L7.77085 70H9.22636H62.2294L62.3508 68.5495C62.4005 67.9509 62.4249 67.3707 62.4249 66.8111C62.4272 64.0945 61.8445 61.8038 60.8686 59.9259ZM59.2613 66.8366H10.7389C10.7389 66.8269 10.7378 66.8172 10.7378 66.8063C10.7401 64.5291 11.2088 62.7773 11.9358 61.3596C13.0284 59.24 14.7558 57.8051 16.6604 56.7382C18.5638 55.6748 20.5923 55.0265 22.168 54.4743C23.3892 54.0409 24.8034 53.4193 26.0258 52.572C26.6364 52.1459 27.2045 51.6616 27.6694 51.0534C28.1258 50.4525 28.4985 49.6731 28.4997 48.7664C28.4997 47.5355 28.4997 45.9987 28.4997 43.8913V43.2832L28.0942 42.8328C27.2992 41.9527 26.3948 40.9487 25.5912 39.662C24.7899 38.3729 24.0896 36.8117 23.7315 34.7869L23.5713 33.8826L22.7057 33.5719C21.9409 33.2915 21.3764 32.9843 20.7476 32.2463C20.1284 31.5033 19.4559 30.2396 18.8697 28.0631C18.7507 27.6213 18.7107 27.2716 18.7107 27.0021C18.7119 26.6538 18.7726 26.4353 18.8406 26.2762C18.9425 26.0431 19.0784 25.9144 19.1962 25.8258L19.3285 25.7457L19.3347 25.7421L19.4924 25.6899L19.6698 25.5721C19.9405 25.3973 20.2027 25.0792 20.3483 24.7163C20.4988 24.3497 20.562 23.948 20.5631 23.4673C20.5631 23.0399 20.511 22.5447 20.3884 21.928C20.2438 21.2034 19.9454 19.5329 19.9454 17.3964C19.9442 14.7003 20.4261 11.3063 22.2275 8.17802C22.4412 7.79685 22.5224 7.47993 22.5965 7.15714C22.7167 6.60111 22.77 6.02949 22.8222 5.44064C22.8878 4.66736 22.9498 3.88204 23.0421 3.33093C24.8848 3.72181 26.3537 4.13443 28.28 4.58122C30.5075 5.09952 33.2946 5.63724 37.8395 6.19204L37.8711 6.19683L37.9086 6.20038C40.3133 6.38742 42.2035 6.86566 43.6759 7.5163C45.8841 8.50081 47.1793 9.83245 48.006 11.345C48.8267 12.8587 49.1459 14.6031 49.1459 16.3172C49.1459 17.0601 49.0852 17.7981 48.9844 18.4962C48.7794 19.9202 48.5828 21.4545 48.5789 22.6842C48.5802 23.0726 48.5959 23.432 48.664 23.8083C48.6991 23.9964 48.7466 24.1919 48.8387 24.4139C48.931 24.6336 49.0669 24.8959 49.3499 25.1605L49.3522 25.1618C49.6618 25.4348 49.9083 25.5209 50.0818 25.589C50.3902 25.6935 50.5601 25.7225 50.6814 25.7626L50.8174 25.8136C50.8344 25.8585 50.8781 25.9968 50.8781 26.2967C50.8794 26.696 50.7932 27.3588 50.5225 28.3033C49.8901 30.5356 49.3232 31.8067 48.8461 32.4621C48.607 32.7948 48.403 32.9866 48.176 33.1456C47.9477 33.3046 47.677 33.4345 47.2947 33.5717L46.4292 33.8813L46.2689 34.7869C45.9109 36.8117 45.2105 38.3728 44.4093 39.662C43.6058 40.9487 42.7014 41.9527 41.9062 42.8328L41.502 43.2832V43.8913C41.502 45.9987 41.502 47.5355 41.502 48.7664C41.4995 49.6392 41.8418 50.4173 42.2873 51.0171C42.9623 51.9213 43.863 52.5562 44.8244 53.1086C45.787 53.6548 46.8274 54.0967 47.8033 54.4632C48.863 54.8602 50.1122 55.2765 51.4003 55.8349C53.3339 56.6666 55.3151 57.8002 56.7729 59.4864C58.2273 61.1798 59.2505 63.3989 59.2627 66.8112C59.2626 66.8185 59.2613 66.8294 59.2613 66.8366Z"
                  stroke="url(#paint1_linear_51_18)"
                  strokeWidth="2.91667"
                  mask="url(#path-1-outside-1_51_18)"
                />
              </g>
              <defs>
                <linearGradient
                  id="paint0_linear_51_18"
                  x1="42.2761"
                  y1="-21"
                  x2="-8.77511"
                  y2="-3.14598"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#3A3AE8" />
                  <stop offset="1" stopColor="#01FEBF" />
                </linearGradient>
                <linearGradient
                  id="paint1_linear_51_18"
                  x1="42.2761"
                  y1="-21"
                  x2="-8.77511"
                  y2="-3.14598"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#3A3AE8" />
                  <stop offset="1" stopColor="#01FEBF" />
                </linearGradient>
                <clipPath id="clip0_51_18">
                  <rect width="70" height="70" fill="white" />
                </clipPath>
              </defs>
            </svg>
            <h2>
              Desenvolvimento <br /> pessoal
            </h2>
            <p>
              Melhora as suas capacidades de comunicação, de pensamento crítico
              e de resolução de problemas, que são úteis não só no local de
              trabalho, mas também na sua vida pessoal
            </p>
          </div>
          <div
            id="why-item-2"
            className=" opacity-0 flex border-dashed hover:shadow-2xl rounded-2xl border-primary border-2 flex-col px-10 py-16 justify-center items-center gap-5"
          >
            <svg width="100" height="100" viewBox="0 0 100 100" fill="none">
              <path
                d="M16.6667 50H12.5V33.3333C12.5 28.731 16.231 25 20.8333 25H37.5M16.6667 50V75C16.6667 79.6025 20.3976 83.3333 25 83.3333H75C79.6025 83.3333 83.3333 79.6025 83.3333 75V50M16.6667 50H41.6667M37.5 25V20.8333C37.5 16.231 41.231 12.5 45.8333 12.5H54.1667C58.7692 12.5 62.5 16.231 62.5 20.8333V25M37.5 25H62.5M83.3333 50H87.5V33.3333C87.5 28.731 83.7692 25 79.1667 25H62.5M83.3333 50H58.3333M41.6667 50V41.6667H58.3333V50M41.6667 50V58.3333H58.3333V50"
                stroke="url(#paint0_linear_36_42)"
                strokeWidth="6.06061"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <defs>
                <linearGradient
                  id="paint0_linear_36_42"
                  x1="59.949"
                  y1="-8.75"
                  x2="-4.09268"
                  y2="21.5152"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#3A3AE8" />
                  <stop offset="1" stopColor="#01FEBF" />
                </linearGradient>
              </defs>
            </svg>
            <h2>Melhore as suas perspectivas br de carreira</h2>
            <p>
              Adquira novas competências em finanças, secretariado,
              produtividade, gestão empresarial, vendas e marketing e
              tecnologias da informação para se tornar mais competitivo no
              mercado de trabalho e aumentar as suas chances de ser contratado
              ou promovido.
            </p>
          </div>
          <div
            id="why-item-3"
            className=" opacity-0 flex border-dashed hover:shadow-2xl rounded-2xl border-primary border-2 flex-col px-10 py-16 justify-center items-center gap-5"
          >
            <svg width="99" height="99" viewBox="0 0 99 99" fill="none">
              <path
                d="M48.3677 70.5453C47.9593 69.6481 47.1137 68.9935 46.0903 68.8771C45.2236 68.7781 44.3751 68.5925 43.5682 68.3248C43.2065 68.2031 42.867 68.0703 42.5527 67.928L43.0749 66.5044C43.4437 66.669 43.8236 66.8196 44.2126 66.9557L44.2286 66.9615L44.2451 66.9669C45.4934 67.3794 46.7218 67.5885 47.8954 67.5885C49.0739 67.5885 49.9282 67.4305 50.5844 67.0918L50.6236 67.0716L50.662 67.0494C51.6561 66.4789 52.2266 65.4984 52.2266 64.3586C52.2266 63.0939 51.5443 62.0441 50.3543 61.4769C49.7557 61.1857 48.9056 60.9076 47.6809 60.6032C46.4248 60.2856 45.3696 59.9486 44.5512 59.6033C43.9531 59.3327 43.4342 58.9008 42.9664 58.2833C42.5638 57.7322 42.36 56.9035 42.36 55.819C42.36 54.5106 42.7284 53.4307 43.4866 52.5174C44.1614 51.7171 45.1196 51.1735 46.4058 50.8686C47.3599 50.6426 48.1041 49.9615 48.4386 49.0821C48.8169 49.9735 49.6217 50.6364 50.6232 50.796C51.4598 50.9293 52.2278 51.1417 52.9184 51.4292L52.4378 52.8243C51.1339 52.3008 49.8506 52.0364 48.6094 52.0364C44.4873 52.0364 44.2786 54.8802 44.2786 55.4503C44.2786 56.6861 44.946 57.7223 46.1096 58.2936L46.1422 58.3097L46.1752 58.3246C46.763 58.5869 47.5971 58.8398 48.8008 59.1203C50.0453 59.4016 51.0832 59.7238 51.8987 60.081L51.9156 60.0884L51.9325 60.0954C52.538 60.3475 53.0574 60.7682 53.5202 61.382L53.5276 61.3915L53.5351 61.4014C53.9397 61.9245 54.1451 62.7334 54.1451 63.8059C54.1451 65.0438 53.7867 66.0915 53.0491 67.0093C52.4093 67.8055 51.5163 68.3566 50.318 68.694C49.3927 68.9547 48.675 69.6621 48.3677 70.5453Z"
                fill="black"
              />
              <path
                d="M49.4113 74.2499H47.4251C46.9809 74.2499 46.6207 73.8807 46.6207 73.4249V71.7688C46.6207 71.3332 46.2903 70.9751 45.8679 70.9268C44.8623 70.8126 43.8896 70.5993 42.9495 70.2875C42.0362 69.9797 41.245 69.6151 40.5758 69.1923C40.2683 68.998 40.1565 68.6036 40.2836 68.2571L41.646 64.5422C41.8296 64.0422 42.4215 63.8508 42.8773 64.1095C43.4928 64.458 44.1544 64.7563 44.8614 65.0038C45.9154 65.3519 46.9268 65.526 47.8954 65.526C48.7282 65.526 49.3234 65.434 49.6803 65.2496C50.0371 65.0446 50.2157 64.7476 50.2157 64.3586C50.2157 63.9082 49.9777 63.5703 49.5016 63.3451C49.0429 63.1199 48.2778 62.874 47.2073 62.608C45.8304 62.2598 44.6832 61.891 43.7654 61.502C42.8476 61.0924 42.0486 60.437 41.3688 59.5361C40.6888 58.6145 40.3489 57.3754 40.3489 55.819C40.3489 54.0168 40.8844 52.4708 41.955 51.1805C42.9202 50.0362 44.2526 49.2623 45.9529 48.8593C46.3357 48.7686 46.6207 48.4279 46.6207 48.0253V46.1999C46.6207 45.7441 46.9809 45.3749 47.4251 45.3749H49.4113C49.8556 45.3749 50.2157 45.7441 50.2157 46.1999V47.9209C50.2157 48.3425 50.5259 48.6935 50.9318 48.7583C52.4213 48.9955 53.7302 49.4447 54.858 50.1059C55.1781 50.2936 55.3051 50.6929 55.1822 51.0493L53.9071 54.749C53.7384 55.2395 53.1754 55.447 52.7224 55.2127C51.2861 54.4702 49.9154 54.0989 48.6094 54.0989C47.0625 54.0989 46.2891 54.5494 46.2891 55.4503C46.2891 55.8805 46.5189 56.208 46.9776 56.4336C47.4367 56.6382 48.1928 56.8635 49.2467 57.1093C50.6063 57.4166 51.7539 57.7747 52.6886 58.1843C53.6233 58.5733 54.4306 59.2184 55.1108 60.1198C55.8075 61.0207 56.1561 62.2495 56.1561 63.8058C56.1561 65.526 55.6376 67.0312 54.6006 68.3215C53.6976 69.446 52.4473 70.233 50.8505 70.683C50.4834 70.7866 50.2157 71.1199 50.2157 71.5101V73.4249C50.2157 73.8807 49.8556 74.2499 49.4113 74.2499Z"
                fill="url(#paint0_linear_36_71)"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M39.5684 20.6249H56.9832C61.4435 20.6249 58.9941 27.4889 57.1882 31.6758L55.1331 36.4773L54.8555 37.1249C56.8021 37.028 58.7272 37.5809 60.3413 38.7007C66.3799 44.3676 71.2808 51.1904 74.7681 58.7853C76.1269 61.5936 76.666 64.7451 76.3203 67.8603C75.9054 75.8005 69.6943 82.1279 61.9501 82.4999H34.6014C26.8551 82.139 20.6349 75.8183 20.2112 67.8768C19.8655 64.7616 20.4046 61.6101 21.7636 58.8018C25.255 51.1994 30.1627 44.3705 36.2102 38.7007C37.8246 37.5809 39.7494 37.028 41.6959 37.1249L41.3742 36.3783L39.3633 31.6758C37.5655 27.4889 35.1042 20.6249 39.5684 20.6249Z"
                stroke="url(#paint1_linear_36_71)"
                strokeWidth="6.1875"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M54.8555 40.2188C56.5641 40.2188 57.9492 38.8336 57.9492 37.125C57.9492 35.4164 56.5641 34.0313 54.8555 34.0313V40.2188ZM41.6959 34.0313C39.9874 34.0313 38.6022 35.4164 38.6022 37.125C38.6022 38.8336 39.9874 40.2188 41.6959 40.2188V34.0313ZM65.9076 35.6808C67.3881 34.8279 67.8971 32.9363 67.044 31.4557C66.191 29.9752 64.2997 29.4664 62.8192 30.3193L65.9076 35.6808ZM55.1331 36.4774L55.73 39.513L55.7391 39.5113L55.1331 36.4774ZM41.3742 36.3784L42.0148 33.3515L41.9867 33.3458L41.3742 36.3784ZM33.6847 30.2923C32.1893 29.4658 30.307 30.0081 29.4805 31.5036C28.6541 32.999 29.1964 34.8813 30.6918 35.7078L33.6847 30.2923ZM54.8555 34.0313H41.6959V40.2188H54.8555V34.0313ZM62.8192 30.3193C60.2328 31.8091 57.4336 32.8632 54.5271 33.4435L55.7391 39.5113C59.3084 38.7985 62.7417 37.5047 65.9076 35.6808L62.8192 30.3193ZM54.5362 33.4418C50.3972 34.2557 46.1427 34.2249 42.0148 33.3515L40.7338 39.4051C45.6769 40.4511 50.773 40.4878 55.73 39.513L54.5362 33.4418ZM41.9867 33.3458C39.088 32.7606 36.2895 31.7318 33.6847 30.2923L30.6918 35.7078C33.8467 37.4513 37.2412 38.7001 40.762 39.411L41.9867 33.3458Z"
                fill="url(#paint2_linear_36_71)"
              />
              <defs>
                <linearGradient
                  id="paint0_linear_36_71"
                  x1="50.3064"
                  y1="36.7124"
                  x2="34.6225"
                  y2="40.5729"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#3A3AE8" />
                  <stop offset="1" stopColor="#01FEBF" />
                </linearGradient>
                <linearGradient
                  id="paint1_linear_36_71"
                  x1="55.7358"
                  y1="2.06244"
                  x2="5.24336"
                  y2="22.5729"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#3A3AE8" />
                  <stop offset="1" stopColor="#01FEBF" />
                </linearGradient>
                <linearGradient
                  id="paint2_linear_36_71"
                  x1="53.3648"
                  y1="26.8118"
                  x2="42.6972"
                  y2="44.5234"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#3A3AE8" />
                  <stop offset="1" stopColor="#01FEBF" />
                </linearGradient>
              </defs>
            </svg>
            <h2>
              Aumentar o seu potencial <br />
              de ganhos
            </h2>
            <p>
              Adquirir novas competências e torna-se mais valioso para o seu
              empregador ou clientes, o que pode levar a salários ou honorários
              mais elevados.
            </p>
          </div>
        </div>
      </div>
      <div id="values" className=" mt-28 container m-auto lg:flex gap-5">
        <Image
          id="values-image"
          src={"/svg/values.svg"}
          width={587}
          height={335}
          alt="people sitting"
          className=" m-auto lg:m-0 -translate-x-96 opacity-0"
        />
        <div id="values-content" className="opacity-0">
          <h1 className=" text-4xl font-viga mb-5">Nossos Valores</h1>
          <div className="grid gap-5 grid-cols-2">
            <ValueItems
              title="Colaboração"
              body="Fomentamos um ambiente inclusivo e colaborativo, onde ideias são compartilhadas e todos contribuem para o sucesso mútuo."
            />
            <ValueItems
              title="Excelência"
              body="Comprometemo-nos com os mais altos padrões de qualidade em todos os aspectos de nossos programas e serviços."
            />
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
      <Categories />
      <Courses />
      <div className=" container mx-auto mt-28 lg:flex items-center justify-between gap-10">
        <Image
          src={"/images/study.jpg"}
          height={498}
          width={485}
          alt="happy guy"
          className="lg:w-4/12 mb-10 lg:mb-0 object-fill h-[580px] w-[500px]"
        />
        <div className=" mb-20">
          <h2 className=" text-4xl font-viga mb-5">
            Porquê fazer o curso connosco?
          </h2>
          <ol className="grid gap-5 font-viga text-xl">
            <li className=" p-5 border rounded-lg hover:shadow-lg flex gap-5">
              <Image
                src={"/svg/icon.svg"}
                alt="round icon"
                width={25}
                height={25}
                className=" hover:animate-spin"
              />
              Mentoria e Aconselhamento de Carreira
            </li>
            <li className=" p-5 border rounded-lg hover:shadow-lg flex gap-5">
              <Image
                src={"/svg/icon.svg"}
                alt="round icon"
                width={25}
                height={25}
                className=" hover:animate-spin"
              />
              Programas de Estágio e Colocação Profissional
            </li>
            <li className=" p-5 border rounded-lg hover:shadow-lg flex gap-5">
              <Image
                src={"/svg/icon.svg"}
                alt="round icon"
                width={25}
                height={25}
                className=" hover:animate-spin"
              />
              Sessões de Networking
            </li>
            <li className=" p-5 border rounded-lg hover:shadow-lg flex gap-5">
              <Image
                src={"/svg/icon.svg"}
                alt="round icon"
                width={25}
                height={25}
                className=" hover:animate-spin"
              />
              Serviços de Apoio Psicológico
            </li>
            <li className=" p-5 border rounded-lg hover:shadow-lg flex gap-5">
              <Image
                src={"/svg/icon.svg"}
                alt="round icon"
                width={25}
                height={25}
                className=" hover:animate-spin"
              />
              Workshops e Seminários de desenvolvimento pessoal
            </li>
            <li className=" p-5 border rounded-lg hover:shadow-lg flex gap-5">
              <Image
                src={"/svg/icon.svg"}
                alt="round icon"
                width={25}
                height={25}
                className=" hover:animate-spin"
              />
              Apoio na Busca de Emprego
            </li>
          </ol>
        </div>
      </div>
      <ContactUs />
    </main>
  );
}
