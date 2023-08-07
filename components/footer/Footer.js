import React from 'react'

const Footer = () => {
  return (
    <div className="footer w-full bg-[#6B826F] py-10">
        <div className="container mx-auto max-w-7xl px-6 md:px-10 lg:px-24 flex justify-between lg:flex-row flex-col space-y-8">
          <div className="logo"><img src="/skinaro_white.png" alt="" /></div>
          
          <div className="nav-menu flex flex-col gap-4">
          <a href="asd" className="font-bold text-base">
        Home
      </a>
      <a href="asd" className="text-base">
        Why Aro ?
      </a>
      <a href="asd" className="text-base">
        Our Product
      </a>
      <a href="asd" className="text-base">
        Talk With Us
      </a>
          </div>

          <div className="connect">
            <h1 className="text-xl tracking-[2px] mb-3">CONNECT WITH US</h1>
            <div className="socmed flex gap-4">
              <a href="#"><img src="/fb-icon.png" alt="Facebook Icon" /></a>
              <a href="#"><img src="/ig-icon.png" alt="Facebook Icon" /></a>
              <a href="#"><img src="/linkdin-icon.png" alt="Facebook Icon" /></a>
              <a href="#"><img src="/twitter-icon.png" alt="Facebook Icon" /></a>
            </div>
          </div>

          <div className="connect">
            <h1 className="text-xl tracking-[2px] mb-3">SUBSCRIBE NEWSLETTER</h1>
            <div className="socmed flex gap-0">
            <input type="text" className="px-4 py-3 text-gray-800 bg-gray-50 border border-gray-300 text-sm rounded-tl-lg rounded-bl-lg focus:ring-green-800 focus:border-greenring-green-800 block w-full p-2.5 " placeholder="Type Your Email Here" />
            <a href="send" className="px-4 py-3 bg-[#457E4F] ">
                Send
              </a>
            </div>
          </div>

        </div>
      </div>
  )
}

export default Footer