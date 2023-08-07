import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import Navbar from "../components/navbar/Navbar";

export default function Home() {

  return (
    <>
    <Navbar />
      <div className="hero relative w-screen h-screen overflow-hidden">
        <div className="overlay w-full h-full absolute top-0 left-0 bg-black bg-opacity-20 z-1"></div>
        <div className="text absolute top-36 left-10 lg:left-40 max-w-xs sm:max-w-sm lg:max-w-lg flex flex-col space-y-10">
          <div className="text flex flex-col space-y-8">
            <h1 className="text-4xl tracking-[4px] leading-[40px] lg:text-5xl font-bold lg:tracking-[12px] lg:leading-[60px]">
              SKINARO TEA BRIGHTENING CLEANSER
            </h1>
            <p className="text-lg tracking-[2px] font-normal">
              Facial cleansing soap containing Tea Extract & Glycolic Acid helps
              brighten and cleanse dead skin while calming the skin.
            </p>
          </div>
          <div className="cta">
            <a href="shop" className="px-10 py-5 bg-[#6B826F] rounded-full">
              Shop Now
            </a>
          </div>
        </div>
        <img
          src="/hero-skinaro.png"
          className="h-full lg:w-full object-cover"
          alt="Hero Banner"
        />
      </div>
      <a
        href="shop"
        className="px-8 py-3 bg-[#6B826F] rounded-full fixed bottom-6 right-10"
      >
        Talk With Us
      </a>
      <div className="about grid lg:grid-cols-2 gap-4 px-6 md:px-10 lg:px-10">
        <div className="left-about w-full object-cover">
          <img src="/image 5.png" alt="" className="w-full h-full object-cover"/>
        </div>
        <div className="right-about bg-white flex flex-col justify-center px-6 w-full">
          <div className="about-description py-8 space-y-14">
            <div className="title">
              <h1 className="font-normal text-[40px] text-[#6B826F]">
                Why Aro ?
              </h1>
              <div className="line w-[226px] h-2 bg-[#6B826F]"></div>
            </div>
            <p className="font-normal text-gray-700 lg:max-w-md">
              Apart from spices to coffee, Indonesia is also famous as the best
              black tea exporter in the world. One of the best known is Kayu Aro
              Black Tea. Kayu Aro Tea is the best in terms of quality because
              the production process is still very traditional so that the taste
              of the tea is maintained. Not surprisingly, this tea, which has a
              strong aroma, is said to be a favorite of world royalty. From
              Queen Elizabeth in England to Queen Wilhelmina, Queen Juliana and
              Queen Beatrix in the Netherlands.
            </p>

            <div>
              <a href="shop" className="px-8 py-3 bg-[#6B826F] rounded-full">
                Shop Now
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="points-skinaro w-full flex flex-wrap justify-center items-center my-8 lg:my-16 container mx-auto max-w-7xl">
        <img src="/natural1.png" alt="" className="" />
        <img src="/best1.png" alt="" className="" />
        <img src="/suit.png" alt="" className="" />
        <img src="/halal.png" alt="" className="" />
      </div>
      <div className="arotea w-full">
        <div className="container mx-auto max-w-7xl gap-10 px-6 md:px-10 lg:px-24 flex justify-center items-center flex-col md:flex-row ">

        <div className="flex flex-col gap-6 w-full">
          <div className="image w-full md:h-[300px] lg:h-[400px]">
            <img src="/arotea.png" alt="" className="w-full h-full object-cover" />
          </div>
          <div className="description flex flex-col gap-4">
            <h1 className="text-[#8C9C7B] font-bold text-2xl">
              Benefits using Aro Tea
            </h1>
            <p className="text-[#5C5858] font-normal text-lg">
              The traditional Kayu Aro Tea production process starts from the
              planting process without using any chemicals, preservatives or
              coloring agents. In addition, tea production workers are also
              prohibited from using cosmetics while processing tea so that the
              quality of tea remains natural and good.
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-6 w-full">
          <div className="image w-full md:h-[300px] lg:h-[400px]">
            <img src="/orthodoxtea.png" alt="" className="w-full h-full object-cover" />
          </div>
          <div className="description flex flex-col gap-4">
            <h1 className="text-[#8C9C7B] font-bold text-2xl">
            The best Orthodox tea
            </h1>
            <p className="text-[#5C5858] font-normal text-lg">
              The traditional Kayu Aro Tea production process starts from the
              planting process without using any chemicals, preservatives or
              coloring agents. In addition, tea production workers are also
              prohibited from using cosmetics while processing tea so that the
              quality of tea remains natural and good.
            </p>
          </div>
        </div>
        </div>   
      </div>

      
    </>
  );
}
