import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import { BsCart, BsChevronBarLeft, BsChevronLeft, BsChevronRight } from 'react-icons/bs'

const Product = () => {
    const productData = [
        { id: 1, image: '/prod-1.png', name: 'SKINARO TEA BRIGHTENING CLEANSER', category: 'BRIGHTENING CLEANSER', description: 'Sabun cuci wajah dengan kandungan Ekstrak Teh & Glycolic Acid bantu mencerahkan dan membersihkan kulit mati sekaligus menenangkan kulit', ingridients: 'Allantoin, Sodium Hyaluronate, Polyquaternium-7, Vitamin E, Grape Seed Oil, Eucalyptus Oil, Rose Extract, Camellia Sinensis Leaf Extract, Sweet Almond Oil, Glycolic Acid' },
        { id: 2, image: '/product-2.png', name: 'SKINARO TEA BRIGHTENING ESSENCE TONER', category: 'BRIGHTENING CLEANSER', description: 'Sabun cuci wajah dengan kandungan Ekstrak Teh & Glycolic Acid bantu mencerahkan dan membersihkan kulit mati sekaligus menenangkan kulit', ingridients: 'Allantoin, Sodium Hyaluronate, Polyquaternium-7, Vitamin E, Grape Seed Oil, Eucalyptus Oil, Rose Extract, Camellia Sinensis Leaf Extract, Sweet Almond Oil, Glycolic Acid' },
        { id: 3, image: '/product-3.png', name: 'SKINARO TEA BRIGHTENING SERUM', category: 'BRIGHTENING CLEANSER', description: 'Sabun cuci wajah dengan kandungan Ekstrak Teh & Glycolic Acid bantu mencerahkan dan membersihkan kulit mati sekaligus menenangkan kulit', ingridients: 'Allantoin, Sodium Hyaluronate, Polyquaternium-7, Vitamin E, Grape Seed Oil, Eucalyptus Oil, Rose Extract, Camellia Sinensis Leaf Extract, Sweet Almond Oil, Glycolic Acid' },
    ]
    const [slider, setSlider] = useState(0)

    // useEffect(() => {
    //     const interval = setInterval(() => setSlider((prev) => (prev === (productData.length - 1) ? 0 : prev + 1)), 3000)
    //     return () => clearInterval(interval)
    // }, [])
    const prevOnClick = () => {
        setSlider((prev) => prev === 0 ? productData.length - 1 : prev - 1)
    }
    const nextOnClick = () => {
        setSlider((prev) => prev === productData.length - 1 ? 0 : prev + 1)
    }
    return (
        <div className="product w-full my-16 flex justify-center items-center" id="product">
            <div className="container mx-auto max-w-7xl px-6 md:px-10 lg:px-24 text-gray-700 flex flex-col md:flex-row h-full justify-around gap-6 md:gap-0 group relative">
                <div onClick={prevOnClick} className="prev-arrow z-10 hidden group-hover:block absolute top:1/3 md:top-1/2 left-6 md:left-10 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer duration-500">
                    <BsChevronLeft size={30} className='font-bold' />
                </div>
                <div onClick={nextOnClick} className="prev-arrow z-10 hidden group-hover:block absolute top:1/3 md:top-1/2 right-6 md:right-10 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer">
                    <BsChevronRight size={30} className='font-bold' />
                </div>
                <div className="next-arrow"></div>
                <div className="image w-full flex flex-col gap-4">
                    {/* <div className="image h-[350px] md:h-[450px] md:w-1/2 flex justify-center items-center self-center p-12 md:p-16" > */}

                    <div className={`w-full bg-contain md:bg-contain bg-center image h-[350px] md:h-[350px] md:w-1/2 flex justify-center items-center self-center md:p-16 duration-500 transition-all bg-no-repeat`} style={{ backgroundImage: `url(${productData[slider].image})` }}>
                        {/* <img src={item.image} alt="" className="md:w-full h-full md:h-auto object-cover duration-500" /> */}
                    </div>

                    {/* <img src={productData[slider].image} alt="" className="md:w-full h-full md:h-auto object-cover duration-500" /> */}
                    {/* </div> */}
                    <div className="img-thumbnail flex gap-4 justify-center w-full">
                        {productData.map((item, index) => {
                            return (
                                <div key={index} onClick={() => setSlider(index)} className={`img-box transition-all duration-200 h-16 w-16 border flex justify-center items-center cursor-pointer p-3 border-gray-300 rounded ${slider === index ? '' : 'opacity-60'}`}>
                                    <img src={item.image} alt="" className="md:w-full h-full md:h-auto object-cover" />
                                </div>
                            )
                        })}

                    </div>
                </div>

                <div className="text_container flex flex-col gap-4 justify-center items-center md:w-1/2">
                    <h1 className='text-2xl font-medium text-[#8C9C7B] self-start'>{productData[slider].name}</h1>
                    <div className="deskripsi">
                        <p className='font-medium'>Description : </p>
                        <p className='text-sm'>{productData[slider].description}</p>
                    </div>
                    <div className="ingridients">
                        <p className='font-medium'>Ingridients : </p>
                        <p className='text-sm'>{productData[slider].ingridients}</p>
                    </div>
                    <div className='flex place-items-end self-end my-5'>
                        <button className="items-center justify-center py-3 px-8 text-white bg-[#6B826F] rounded-full flex flex-row space-x-2 hover:bg-white hover:text-[#6B826F] border hover:border-[#6B826F]">
                            <BsCart className="text-xl" /> <span>Shop Now</span>
                        </button>
                    </div>
                </div>

            </div>

        </div >
    )
}

export default Product