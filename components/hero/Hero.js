import React from "react";
import { BsCart } from "react-icons/bs";


const Hero = () => {
  return (
    <div className="hero relative w-screen h-screen overflow-hidden">
      <div className="overlay w-full h-full absolute top-0 left-0 bg-black bg-opacity-20 z-[2]"></div>
      <div className="container mx-auto max-w-7xl px-6 md:px-10 lg:px-24 py-4 w-full h-full relative bg-transparent z-10" >
        <div className="text absolute top-36 sm:left-16 left-10 lg:left-40  left-50 max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg flex flex-col space-y-10">
          <div className="text flex flex-col space-y-8">
            <h1 className="text-4xl tracking-[4px] leading-[40px] lg:text-5xl font-bold lg:tracking-[12px] lg:leading-[60px]">
              SKINARO TEA BRIGHTENING CLEANSER
            </h1>
            <p className="text-lg tracking-[2px] font-normal">
              Facial cleansing soap containing Tea Extract & Glycolic Acid helps
              brighten and cleanse dead skin while calming the skin.
            </p>
          </div>
          <div className="cta">
            <button className="items-center justify-center py-5 px-8 bg-[#6B826F] rounded-full flex flex-row space-x-2 hover:bg-white hover:text-[#6B826F]">
              <BsCart className="text-xl" /> <span>Shop Now</span>
            </button>
          </div>
        </div>
      </div>

      <img
        src="/hero-skinaro.png"
        className="h-full lg:w-full object-cover absolute top-0 left-0"
        alt="Hero Banner"
      />

    </div>
  );
};

export default Hero;
