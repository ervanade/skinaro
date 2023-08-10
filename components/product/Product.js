import Image from "next/image";
import React, { useEffect, useState } from "react";
import {
  BsCart,
  BsChevronBarLeft,
  BsChevronLeft,
  BsChevronRight,
} from "react-icons/bs";

const Product = () => {
  const productData = [
    {
      id: 1,
      image: "/prod-4.png",
      name: "Skinaro Tea Brightening Cleanser",
      category: "BRIGHTENING CLEANSER",
      description:
        "Merupakan pembersih wajah dengan kandungan Ekstrak Teh & Glycolic Acid yang dapat membantu mencerahkan dan membersihkan kulit mati sekaligus menenangkan kulit.",
      ingridients: [
        {
          title: "Camellia Sinensis Leaf Extract",
          dexc: "Merupakan kandungan dengan tinggi antioksidan dapat bantu melindungi kerusakan sel akibat radikal bebas. Sehingga dapat mencegah inflamasi, hingga merawat kesehatan kulit.",
        },
        {
          title: "Glycolic Acid",
          dexc: "Merupakan AHA yang bersifat mengeksfoliasi dan juga menarik kelembaban di saat yang bersamaan. Dengan  kandungan anti-bacterial dan anti-oksidan, yang  dapat membantu memperbaiki tekstur kulit, dan juga  memperbaiki skin barrier dengan  membantu produksi kolagen alami kulit. Gunakan pada  malam hari untuk kulit tampak lebih sehat bercahaya di pagi hari. ",
        },
        {
          title: "Hyaluronic Acid",
          dexc: "Merupakan micronized Hyaluronic  Acid (molekul jauh lebih kecil sehingga lebih mudah diserap kulit), yang menjaga kelembaban alami kulit serta memberikan efek tampilan yang lebih  glowing",
        },
      ],
    },
    {
      id: 4,
      image: "/serum.jpeg",
      name: "Skinaro Tea Brightening Serum",
      category: "BRIGHTENING CLEANSER",
      description:
        "Merupakan toner essence dengan tekstur sangat ringan berfungsi untuk menyeimbangkan pH kulit wajah sekaligus mengembalikan kelembapan kulit. mengandung Ekstrak Teh & Niacinamide 2% yang dapat membantu meningkatkan kecerahan dan menjaga barrier kulit wajah.",
      ingridients: [
        {
          title: "Camellia Sinensis Leaf Extract",
          dexc: "Merupakan kandungan dengan tinggi antioksidan dapat bantu melindungi kerusakan sel akibat radikal bebas. Sehingga dapat mencegah inflamasi, hingga merawat kesehatan kulit.",
        },
        {
          title: "Niacinamide 4%",
          dexc: "Kandungan yang dapat membantu mengatasi permasalahan wajah yang kusam dengan membantu mencerahkan kulit, sehingga wajah terlihat lebih sehat tanpa memberikan efek samping. Serta dapat membantu mengatasi permasalahan kulit yang berjerawat.",
        },
        {
          title: "Peptide",
          dexc: "sejenis peptide yang merupakan asam amino, yang berfungsi mendorong proses pembuatan protein, seperti kolagen dan elastin. Yang membantu mengatasi permasalahan kerutan dan kurangnya elastisitas pada wajah",
        },
      ],
    },
    {
      id: 2,
      image: "/toner.jpeg",
      name: "Skinaro Tea Brightening Essence Toner",
      category: "BRIGHTENING CLEANSER",
      description:
        "Merupakan toner essence dengan tekstur sangat ringan berfungsi untuk menyeimbangkan pH kulit wajah sekaligus mengembalikan kelembapan kulit. mengandung Ekstrak Teh & Niacinamide 2% yang dapat membantu meningkatkan kecerahan dan menjaga barrier kulit wajah.",
      ingridients: [
        {
          title: "Camellia Sinensis Leaf Extract",
          dexc: "Merupakan kandungan dengan tinggi antioksidan dapat bantu melindungi kerusakan sel akibat radikal bebas. Sehingga dapat mencegah inflamasi, hingga merawat kesehatan kulit.",
        },
        {
          title: "Niacinamide 2%",
          dexc: "Kandungan yang dapat membantu mengatasi permasalahan wajah yang kusam dengan membantu mencerahkan kulit, sehingga wajah terlihat lebih sehat tanpa memberikan efek samping. Serta dapat membantu mengatasi permasalahan kulit yang berjerawat.",
        },
        {
          title: "Ceramide",
          dexc: "Bantu mencegah hilangnya kelembaban dan melindungi kulit dari radikal bebas",
        },
      ],
    },
    {
      id: 3,
      image: "/mostur-1.jpeg",
      name: "Skinaro Tea Brightening Moisturizer Gel",
      category: "BRIGHTENING CLEANSER",
      description:
        "Merupakan krim pelembap pagi & malam dengan tekstur gel yang ringan. Kombinasi Ekstrak Teh dan Squalane membantu meningkatkan hidrasi serta menyamarkan noda hitam. Niacinamide 4% dan Vitamin E membantu mencerahkan serta menutrisi kulit.",
      ingridients: [
        {
          title: "Camellia Sinensis Leaf Extract",
          dexc: "Merupakan kandungan dengan tinggi antioksidan dapat bantu melindungi kerusakan sel akibat radikal bebas. Sehingga dapat mencegah inflamasi, hingga merawat kesehatan kulit.",
        },
        {
          title: "Niacinamide 4%",
          dexc: "Kandungan yang dapat membantu mengatasi permasalahan wajah yang kusam dengan membantu mencerahkan kulit, sehingga wajah terlihat lebih sehat tanpa memberikan efek samping. Serta dapat membantu mengatasi permasalahan kulit yang berjerawat.",
        },
        {
          title: "Squalane",
          dexc: "Bantu meningkatkan hidrasi kulit dan membantu kulit terlihat lebih sehat. Kaya akan antioksidan bisa melawan kerusakan kulit serta radikal bebas, sehingga dapat menunda proses penuaan.",
        },
        {
          title: "Peptide",
          dexc: "sejenis peptide yang merupakan asam amino, yang berfungsi mendorong proses pembuatan protein, seperti kolagen dan elastin. Yang membantu mengatasi permasalahan kerutan dan kurangnya elastisitas pada wajah",
        },
      ],
    },
  ];
  const [slider, setSlider] = useState(0);

  // useEffect(() => {
  //     const interval = setInterval(() => setSlider((prev) => (prev === (productData.length - 1) ? 0 : prev + 1)), 3000)
  //     return () => clearInterval(interval)
  // }, [])
  const prevOnClick = () => {
    setSlider((prev) => (prev === 0 ? productData.length - 1 : prev - 1));
  };
  const nextOnClick = () => {
    setSlider((prev) => (prev === productData.length - 1 ? 0 : prev + 1));
  };
  return (
    <div
      className="product w-full mt-8 mb-10 md:my-16 flex justify-center items-center"
      id="product"
    >
      <div className="container mx-auto max-w-7xl px-6 md:px-10 lg:px-24 text-gray-700 flex flex-col md:flex-row h-full justify-around gap-6 md:gap-0 group relative">
        <div
          onClick={prevOnClick}
          className="prev-arrow z-10 hidden group-hover:block absolute top-[200px] sm:top-[200px] md:top-[200px] left-6 md:left-10 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer duration-500"
        >
          <BsChevronLeft size={30} className="font-bold text-[#6B826F]" />
        </div>
        <div
          onClick={nextOnClick}
          className="next-arrow z-10 hidden group-hover:block absolute top-[200px] sm:top-[200px] md:top-[200px] right-0 md:right-0 lg:right-3 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer"
        >
          <BsChevronRight size={30} className="font-bold text-[#6B826F]" />
        </div>
        <div className="next-arrow"></div>
        <div className="image w-full flex flex-col gap-4">
          {/* <div className="image h-[350px] md:h-[450px] md:w-1/2 flex justify-center items-center self-center p-12 md:p-16" > */}

          <div
            className={`w-full bg-contain md:bg-contain bg-center image h-[350px] md:h-[350px] md:w-2/3 flex justify-center items-center self-center md:p-8 duration-500 transition-all bg-no-repeat`}
            style={{ backgroundImage: `url(${productData[slider].image})` }}
          >
            {/* <img src={item.image} alt="" className="md:w-full h-full md:h-auto object-cover duration-500" /> */}
          </div>

          {/* <img src={productData[slider].image} alt="" className="md:w-full h-full md:h-auto object-cover duration-500" /> */}
          {/* </div> */}
          <div className="img-thumbnail flex gap-4 justify-center w-full">
            {productData.map((item, index) => {
              return (
                <div
                  key={index}
                  onClick={() => setSlider(index)}
                  className={`img-box transition-all duration-200 h-16 w-16 border flex justify-center items-center cursor-pointer p-3 border-gray-300 rounded ${slider === index ? "" : "opacity-60"
                    }`}
                >
                  <img
                    src={item.image}
                    alt=""
                    className="md:w-full h-full md:h-auto object-cover"
                  />
                </div>
              );
            })}
          </div>
        </div>

        <div className="text_container flex flex-col gap-4 justify-center items-center md:w-full transition-all duration-300">
          <h1 className="text-2xl font-bold text-[#8C9C7B] self-start transition-all duration-300">
            {productData[slider].name}
          </h1>
          <div className="deskripsi text-gray-700 transition-all duration-300">
            <p className="font-semibold text-gray-700">Description : </p>
            <p className="text-sm">{productData[slider].description}</p>
          </div>
          <div className="ingridients self-start transition-all duration-300">
            <p className="font-semibold text-gray-700">Active Ingridients : </p>

            {
              productData[slider].ingridients.map((item, index) => (
                <div className="mb-3" key={index}>
                  <p className="text-sm font-medium">{item.title}</p>
                  <p className="text-sm font-normal">{item.dexc}</p>
                </div>
              ))
            }
          </div>
          <div className="flex self-start flex-wrap">

            <div className={`img-box transition-all duration-200 h-24 w-28 flex flex-col gap-1 justify-center items-center cursor-pointer p-3`}
            >
              <img
                src={'/prodDesc1.png'}
                alt=""
                className="md:w-full h-full md:h-auto object-cover px-3"
              />
              <p className="text-[10px] text-center">Brightens with high antioxidant</p>
            </div>
            <div className={`img-box transition-all duration-200 h-24 w-28 flex flex-col gap-1 justify-center items-center cursor-pointer p-3`}
            >
              <img
                src={'/prodDesc2.png'}
                alt=""
                className="md:w-full h-full md:h-auto object-cover px-3"
              />
              <p className="text-[10px] text-center">Exfoliate Gently</p>
            </div>
            <div className={`img-box transition-all duration-200 h-24 w-28 flex flex-col gap-1 justify-center items-center cursor-pointer p-3`}
            >
              <img
                src={'/prodDesc3.png'}
                alt=""
                className="md:w-full h-full md:h-auto object-cover px-3"
              />
              <p className="text-[10px] text-center">Natural Calming  TeaScent</p>
            </div>
            <div className={`img-box transition-all duration-200 h-24 w-28 flex flex-col gap-1 justify-center items-center cursor-pointer p-3`}
            >
              <img
                src={'/prodDesc4.png'}
                alt=""
                className="md:w-full h-full md:h-auto object-cover px-3"
              />
              <p className="text-[10px] text-center">Suitable for  most skin types</p>
            </div>
          </div>
          <div className="flex place-items-end self-end my-5">
            <button className="items-center justify-center py-3 px-8 text-white bg-[#6B826F] rounded-full flex flex-row space-x-2 hover:bg-white hover:text-[#6B826F] border hover:border-[#6B826F] transition-all duration-200">
              <BsCart className="text-xl" /> <span>Shop Now</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
