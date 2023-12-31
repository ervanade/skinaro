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
  const navbarMenu = [
    { id: 1, name: "Home", link: "#hero" },
    { id: 2, name: "Why Aro ?", link: "#why-aro" },
    { id: 3, name: "Our Product", link: "#product" },
    { id: 4, name: "Talk With Us", link: "#contact" },
  ]
  return (
    <div
      className={`${color ? "bg-white text-[#6B826F] shadow-md" : ""
        } navbar-fixed fixed top-0 left-0 w-full z-50`}
    >
      <div className="container mx-auto max-w-7xl px-6 md:px-10 lg:px-24 py-4 flex justify-between items-center">
        <div className="left-navbar">
          {color ? (
            <img src="/logo-hitam.png" alt="" className="w-28 h-10 md:w-44 md:h-14" />
          ) : (
            <img src="/logo-hitam.png" alt="" className="w-28 h-10 md:w-44 md:h-14" />
          )}
        </div>
        <button className="lg:hidden" onClick={buttonOnChangeBars}>
          <GiHamburgerMenu className={`text-2xl ${color ? 'text-[#5F8171] hover:text-[#5e8a65]' : 'text-gray-700 hover:text-gray-900'} `} />
        </button>
        <div className="right-navbar space-x-6 hidden lg:block">
          {navbarMenu.map(item => {
            return (
              <a key={item.id} href={item.link} className={`${color ? 'text-gray-700 hover:text-gray-900' : 'text-gray-700 hover:text-gray-900 '} text-xl ${item.name === 'Home' ? 'font-normal' : ''} ${item.name === 'Home' && !color ? '!text-gray-700' : ''}`}>
                {item.name}
              </a>
            )
          })}

        </div>
        <div className={`right-navbar z-50 space-y-4 flex flex-col fixed top-0 ${menuButton ? 'right-0' : '-right-[350px]'} lg:hidden w-2/3 xs:w-[350px] py-10 xs:py-16 px-8 xs:px-14 bg-[#5F8171] text-white h-full duration-200 transition-all ease-in`}>
          <button className='absolute top-5 right-6' onClick={buttonOnChangeClose}><GiHamburgerMenu className='text-3xl text-gray-200 hover:text-white ' /></button>
          {navbarMenu.map(item => {
            return (
              <a key={item.id} href={item.link} className={`text-xl text-gray-200 hover:text-white font-medium `}>
                {item.name}
              </a>
            )
          })}
        </div>
      </div>
      <div className={`overlay w-screen h-screen absolute top-0 left-0 bg-black bg-opacity-20 z-[2] transition-all duration-300 lg:hidden ${menuButton ? "block" : "hidden"} `} onClick={() => setMenuButton(false)}></div>
    </div>
  )
}

export default Navbar