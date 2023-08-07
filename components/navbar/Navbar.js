import React from 'react'
import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineCloseCircle } from "react-icons/ai";
const Navbar = () => {
    const [color, setColor] = useState(false);
    const [menuButton, setMenuButton] = useState(false)

    const buttonOnChangeBars = () => {
        setMenuButton(prev => !prev)
      }
      const buttonOnChangeClose = () => {
        setMenuButton(false)
      }
  const changeColor = () => {
    if (typeof window !== "undefined") {
      // Client-side-only code
      if (window.scrollY > 5) {
        setColor(true);
      } else {
        setColor(false);
      }
    }
  };
  if (typeof window !== "undefined") {
    window.addEventListener("scroll", changeColor);
  }
  return (
    <div
    className={`${
      color ? "bg-white text-[#6B826F]" : ""
    } navbar-fixed fixed top-0 left-0 w-full z-50`}
  >
    <div className="container mx-auto max-w-7xl px-6 md:px-10 lg:px-24 py-4 flex justify-between items-center">
    <div className="left-navbar">
      {color ? (
        <img src="/skinaro-logo-hitam.png" alt="" className="w-28 h-14" />
      ) : (
        <img src="/skinaro_white_green.png" alt="" className="w-28 h-14" />
      )}
    </div>
    <button className="lg:hidden" onClick={buttonOnChangeBars}>
      <GiHamburgerMenu className={`text-2xl ${color ? 'text-[#6B826F] hover:text-[#5e8a65]' : 'text-gray-200 hover:text-white'} `} />
    </button>
    <div className="right-navbar space-x-4 hidden lg:block">
      <a href="asd" className="font-bold text-xl">
        Home
      </a>
      <a href="asd" className="text-xl">
        Why Aro ?
      </a>
      <a href="asd" className="text-xl">
        Our Product
      </a>
      <a href="asd" className="text-xl">
        Talk With Us
      </a>
    </div>
    <div className={`right-navbar space-y-4 flex flex-col fixed top-0 ${menuButton ? 'right-0' : '-right-[350px]'} right-0 lg:hidden w-[350px] py-16 px-14 bg-[#AFBAB0] text-white h-full duration-200 transition-all ease-in`}>
        <button className='absolute top-3 left-4' onClick={buttonOnChangeClose}><GiHamburgerMenu className='text-3xl text-gray-200 hover:text-white ' /></button>
      <a href="asd" className="font-bold text-xl">
        Home
      </a>
      <a href="asd" className="text-xl">
        Why Aro ?
      </a>
      <a href="asd" className="text-xl">
        Our Product
      </a>
      <a href="asd" className="text-xl">
        Talk With Us
      </a>
    </div>
    </div>
  </div>
  )
}

export default Navbar