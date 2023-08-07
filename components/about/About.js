import React from 'react'

const About = () => {
  return (
    <div className="about grid lg:grid-cols-2 gap-4 px-6 md:px-10 lg:px-10">
    <div className="left-about w-full object-cover">
      <img src="/image 5.png" alt="" className="w-full h-full object-cover"/>
    </div>
    <div className="right-about bg-white flex flex-col justify-center px-6 w-full">
      <div className="about-description py-8 space-y-8 sm:space-y-14">
        <div className="title">
          <h1 className="font-normal text-3xl sm:text-[40px] text-[#6B826F]">
            Why Aro ?
          </h1>
          <div className="line w-[150px] sm:w-[226px] h-1 sm:h-2 bg-[#6B826F]"></div>
        </div>
        <p className="sm:text-base text-sm font-normal text-gray-700 lg:max-w-md">
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
          <a href="shop" className="px-8 py-3 bg-[#6B826F] rounded-full hover:bg-white hover:text-[#6B826F]">
            Shop Now
          </a>
        </div>
      </div>
    </div>
  </div>
  )
}

export default About