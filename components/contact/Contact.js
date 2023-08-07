import React from 'react'

const Contact = () => {
  return (
    <div className="contact bg-[#8C9C7B] py-10 w-full relative">
      <img src="/fa-solid_leaf.png" className="lg:w-[173px] w-[100px] absolute top-0 right-4 md:block" alt="" />
      <div className="container mx-auto max-w-7xl px-6 md:px-10 lg:px-24">
        <h1 className="text-center font-semibold tracking-[6px] text-2xl sm:text-[32px] mb-6 md:mb-12 lg:mb-16">TALK WITH US</h1>
        <div className="form w-full">
          <form className="w-full lg:w-[800px] space-y-10 mx-auto">
            <div className="form-top flex justify-center md:items-center  gap-4 md:gap-6 lg:gap-8 md:flex-row flex-col">
              <div className="name flex w-full flex-col gap-5"><label htmlFor="name" className="text-base sm:text-xl tracking-[4px]">Your Name</label> <input type="text" className="px-4 py-3 text-gray-800 bg-gray-50 border border-gray-300 text-sm rounded-lg !focus:none block w-full p-2.5 " placeholder="Type Your Name" /></div>
              <div className="name flex w-full flex-col gap-5"><label htmlFor="name" className="text-base sm:text-xl tracking-[4px]">Email</label> <input type="text" className="px-4 py-3 text-gray-800 bg-gray-50 border border-gray-300 text-sm rounded-lg focus:none block w-full p-2.5 " placeholder="Type Your Email" /></div>
              <div className="name flex w-full flex-col gap-5"><label htmlFor="name" className="text-base sm:text-xl tracking-[4px]">Handphone</label> <input type="text" className="px-4 py-3 text-gray-800 bg-gray-50 border border-gray-300 text-sm rounded-lg focus:none block w-full p-2.5 " placeholder="Type Your Phone Number" /></div>
            </div>
            <div className="form-bottom">
            <div className="name flex flex-col gap-5"><textarea id="message" rows="4"className="px-4 py-3 text-gray-800 bg-gray-50 border border-gray-300 text-sm rounded-lg focus:ring-green-800 focus:border-greenring-green-800 block w-full p-2.5" placeholder="Type Your Message" /></div>
            </div>
            <div className="justify-center items-center w-full flex">
            <a href="send" className="px-16 py-3 bg-[#6B826F] rounded-full lg:mt-6 hover:bg-white hover:text-[#6B826F]">
                Send
              </a>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Contact