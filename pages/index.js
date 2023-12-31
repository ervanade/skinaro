import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { useEffect, useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { BsCart, BsFillChatDotsFill } from "react-icons/bs";
import Navbar from "../components/navbar/Navbar";
import Hero from "../components/hero/Hero";
import About from "../components/about/About";
import Contact from "../components/contact/Contact";
import Footer from "../components/footer/Footer";
import Product from "../components/product/Product";
import Benefit from "../components/benefit/Benefit";
import Modal from "../components/modal/Modal";

export default function Home() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon-skinaro.png" />
        <title>Skinaro - Beauty Aro Tea Skin Care</title>
      </Head>
      <Navbar />
      <Modal />

      {/* Hero Seection */}
      <Hero />
      <button className="items-center justify-center py-3 px-3 sm:px-8 bg-[#94AF78] border border-[#94AF78] fixed bottom-6 right-5 sm:right-10 z-50 rounded-full flex flex-row space-x-2 hover:bg-white hover:text-[#6B826F]">
        <BsFillChatDotsFill className="text-xl" />
        <span className="hidden sm:block">Talk With Us</span>
      </button>

      <About />



      {/* Section Benefit */}
      <div className="points-skinaro w-full flex flex-wrap justify-center items-center py-8 lg:my-16 container mx-auto max-w-7xl gap-12 bg-cover bg-no-repeat">

        <img src="assets/Icon/Icon-1.png" alt="" className="w-2/6 sm:w-auto sm:max-w-[150px] px-2 sm:px-0 " />
        <img src="assets/Icon/Icon-2.png" alt="" className="w-2/6 sm:w-auto sm:max-w-[150px] px-2 sm:px-0" />
        <img src="assets/Icon/Icon-4.png" alt="" className="w-2/6 sm:w-auto sm:max-w-[150px] px-2 sm:px-0" />
        <img src="assets/Icon/Icon-5.png" alt="" className="w-2/6 sm:w-auto sm:max-w-[150px] px-2 sm:px-0" />
      </div>

      <Product />

      {/* Section Benefit */}

      {/* <div className="arotea w-full mb-16">
        <div className="container mx-auto max-w-7xl gap-10 px-6 md:px-10 lg:px-24 flex justify-center flex-col md:flex-row ">

          <div className="flex flex-col gap-3 sm:gap-6 w-full">
            <div className="image w-full md:h-[300px] lg:h-[400px]">
              <img src="arotea.png" alt="" className="w-full h-full object-cover" />
            </div>
            <div className="description flex flex-col gap-2 sm:gap-4">
              <h1 className="text-black font-luxyna  text-xl sm:text-2xl">
                Benefits using Aro Tea
              </h1>
              <p className="text-[#5C5858] font-normal text-sm sm:text-base">
                The traditional Kayu Aro Tea production process starts from the
                planting process without using any chemicals, preservatives or
                coloring agents. In addition, tea production workers are also
                prohibited from using cosmetics while processing tea so that the
                quality of tea remains natural and good.
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-3 sm:gap-6 w-full">
            <div className="image w-full md:h-[300px] lg:h-[400px]">
              <img src="orthodoxtea.png" alt="" className="w-full h-full object-cover" />
            </div>
            <div className="description flex flex-col gap-2 sm:gap-4">
              <h1 className="text-black font-luxyna  text-xl sm:text-2xl">
                The best Orthodox tea
              </h1>
              <p className="text-[#5C5858] font-normal text-sm sm:text-base">
                Tea has antioxidants that help remove toxins from your body, and start the healing process. In addition, tea contains significantly less caffeine than coffee, another of the worlds most popular beverages.
                </p>
            </div>
          </div>
        </div>
      </div> */}
      <Benefit />


      {/* Section Contact */}

      <Contact />
      {/* Section Footer */}
      <Footer />
    </>
  );
}
