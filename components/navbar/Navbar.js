import React from 'react'
import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";

const Navbar = () => {
    const [color, setColor] = useState(false);
  const changeColor = () => {
    if (typeof window !== "undefined") {
      // Client-side-only code
      if (window.scrollY >= 80) {
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
    <button className="lg:hidden">
      <GiHamburgerMenu className="text-2xl" />
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
    </div>
  </div>
  )
}

export default Navbar