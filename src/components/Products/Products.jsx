import React from "react";
import { FaSpider } from "react-icons/fa";
import Img1 from "../../assets/hero/collection4.jpg";
import Img2 from "../../assets/hero/collection5.jpg";
import Img3 from "../../assets/hero/collection6.jpg";
import Img4 from "../../assets/hero/collection2.jpg";
import Img5 from "../../assets/hero/collection.jpg";
import Img6 from "../../assets/hero/collection3.jpg";

const PRODUCTS = [
  { id: 1, img: Img1, title: "Ceva" },
  { id: 2, img: Img2, title: "Hamburguerzinho" },
  { id: 3, img: Img3, title: "Estrelinha" },
  { id: 4, img: Img4, title: "Lua e Estrela" },
  { id: 5, img: Img5, title: "Coelhinho" },
  { id: 6, img: Img6, title: "Passarinho" },
];

const ProductCard = ({ img, title }) => (
  <div
    data-aos="fade-up"
    className="space-y-3 text-center bg-purple-100 rounded-lg p-6 shadow-md border-2 border-purple-700 hover:border-purple-950 hover:shadow-xl transition-all duration-300 cursor-pointer flex flex-col items-center"
  >
    <img
      src={img}
      alt={title}
      className="h-[180px] w-[180px] sm:h-[220px] sm:w-[220px] object-cover rounded-md mx-auto"
    />
    <div className="w-full flex flex-col items-center">
      <h3 className="font-semibold text-purple-950 text-lg mb-1">{title}</h3>
      <div className="flex justify-center items-center gap-1">
        {Array.from({ length: 5 }).map((_, idx) => (
          <FaSpider key={idx} style={{ color: "#800080" }} />
        ))}
      </div>
    </div>
  </div>
);

const Products = () => (
  <section className="flex justify-center px-2 sm:px-8 bg-gradient-to-br from-purple-300 rounded-2xl mx-4 sm:mx-10 mb-10 py-6 sm:py-10">
    <div className="container">
      <div className="text-center mt-4 max-w-[600px] mx-auto">
        <h1
          data-aos="fade-up"
          className="text-3xl font-bold flex items-center justify-center gap-2"
        >
          <span className="font-extrabold bg-gradient-to-r from-purple-950 via-purple-700 to-purple-950 bg-clip-text text-transparent animate-pulse">
            Chaveirinhos
          </span>
          <FaSpider className="inline-block text-3xl text-purple-950 animate-spin-slow ml-2" />
        </h1>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 place-items-center px-2 sm:px-6 py-8 gap-6">
        {PRODUCTS.map(({ id, img, title }) => (
          <ProductCard key={id} img={img} title={title} />
        ))}
      </div>
    </div>
  </section>
);

export default Products;