import React from "react";
import { FaSpider } from "react-icons/fa";
import Img1 from "../../assets/hero/collection4.jpg";
import Img2 from "../../assets/hero/collection5.jpg";
import Img3 from "../../assets/hero/collection6.jpg";
import Img4 from "../../assets/hero/collection2.jpg";
import Img5 from "../../assets/hero/collection.jpg";

const PRODUCTS = [
  { id: 1, img: Img1, title: "Chaveirinho Ceva" },
  { id: 2, img: Img2, title: "Chaveirinho Hamburguer" },
  { id: 3, img: Img3, title: "Chaveirinho Estrela" },
  { id: 4, img: Img4, title: "Chaveirinho Lua e Estrela" },
  { id: 5, img: Img5, title: "Chaveirinho Coelhinho" },
];

const ProductCard = ({ img, title }) => (
  <div
    data-aos="fade-up"
    className="space-y-3 text-center bg-white/80 rounded-lg p-4 shadow-md border-2 border-red-100 hover:border-pink-400 hover:shadow-xl transition-all duration-300 cursor-pointer"
  >
    <img
      src={img}
      alt={title}
      className="h-[220px] w-[250px] object-cover rounded-md mx-auto"
    />
    <div>
      <h3 className="font-semibold text-black-900 text-lg">{title}</h3>
      <div className="flex justify-center items-center gap-1">
        {Array.from({ length: 5 }).map((_, idx) => (
          <FaSpider key={idx} style={{ color: "#800080" }} />
        ))}
      </div>
    </div>
  </div>
);

const Products = () => (
  <section className="flex justify-center px-2 sm:px-8 bg-gradient-to-br from-purple-100 via-white to-purple-200 rounded-2xl mx-4 sm:mx-10 mb-10 py-2 sm:py-8">
    <div className="container">
      <div className="text-center max-w-[600px] mx-auto">
        <h1 data-aos="fade-up" className="text-3xl font-bold">
          Nossos Chaveirinhos
        </h1>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 place-items-center p-10 gap-5">
        {PRODUCTS.map(({ id, img, title }) => (
          <ProductCard key={id} img={img} title={title} />
        ))}
      </div>
    </div>
  </section>
);

export default Products;