import React from "react";
import { FaSpider, FaStar, FaHeart } from "react-icons/fa";
import { GiSpiderWeb } from "react-icons/gi";
import Img1 from "../../assets/hero/collection4.jpg";
import Img2 from "../../assets/hero/collection5.jpg";
import Img3 from "../../assets/hero/collection6.jpg";
import Img4 from "../../assets/hero/collection2.jpg";
import Img5 from "../../assets/hero/collection.jpg";
import Img6 from "../../assets/hero/collection3.jpg";

const PRODUCTS = [
  {
    id: 1,
    img: Img1,
    title: "Ceva",
    description: "Chaveirinho fofo e exclusivo",
    badge: "Popular",
    price: "R$ 15,00"
  },
  {
    id: 2,
    img: Img2,
    title: "Hamburguerzinho",
    description: "Delicioso e divertido",
    badge: "Novo",
    price: "R$ 18,00"
  },
  {
    id: 3,
    img: Img3,
    title: "Estrelinha",
    description: "Brilha com personalidade",
    badge: "Destaque",
    price: "R$ 15,00"
  },
  {
    id: 4,
    img: Img4,
    title: "Lua e Estrela",
    description: "Conjunto celestial único",
    badge: "Premium",
    price: "R$ 22,00"
  },
  {
    id: 5,
    img: Img5,
    title: "Coelhinho",
    description: "Fofura em forma de crochê",
    badge: "Favorito",
    price: "R$ 20,00"
  },
  {
    id: 6,
    img: Img6,
    title: "Passarinho",
    description: "Voe com estilo",
    badge: "Exclusivo",
    price: "R$ 17,00"
  },
];

const ProductCard = ({ img, title, description, badge, price }) => {
  const [isFavorite, setIsFavorite] = React.useState(false);

  return (
    <div
      data-aos="fade-up"
      className="group relative glass-arachne rounded-2xl p-5 shadow-card border-2 border-arachne-neonPurple/30 hover:border-arachne-neonPurple hover:shadow-card-hover transition-all duration-500 cursor-pointer flex flex-col items-center overflow-hidden web-hover"
    >
      
      <div className="absolute top-3 left-3 z-20 px-3 py-1 rounded-full bg-gradient-to-r from-arachne-royalPurple to-arachne-neonPurple shadow-glow-purple">
        <span className="text-xs font-bold text-white uppercase tracking-wide">{badge}</span>
      </div>

      
      <button
        onClick={() => setIsFavorite(!isFavorite)}
        className="absolute top-3 right-3 z-20 p-2 rounded-full bg-arachne-deepPurple/60 backdrop-blur-sm hover:bg-arachne-neonPurple transition-all duration-300 hover:scale-110"
        aria-label="Adicionar aos favoritos"
      >
        <FaHeart
          className={`text-lg transition-colors duration-300 ${
            isFavorite ? 'text-red-500' : 'text-arachne-silk'
          }`}
        />
      </button>

      
      <div className="absolute -top-2 -right-2 opacity-20 group-hover:opacity-40 transition-opacity duration-300">
        <GiSpiderWeb className="text-5xl text-arachne-neonPurple animate-spin-slower" />
      </div>

      
      <div className="relative mb-4 w-full">
        <div className="absolute inset-0 bg-gradient-to-br from-arachne-neonPurple/20 to-arachne-royalPurple/20 rounded-xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

        <div className="relative bg-arachne-deepPurple/30 rounded-xl p-3 border border-arachne-neonPurple/20 group-hover:border-arachne-neonPurple/60 transition-all duration-300">
          <img
            src={img}
            alt={title}
            className="h-[180px] w-[180px] sm:h-[200px] sm:w-[200px] object-contain rounded-lg mx-auto transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3"
          />
        </div>
      </div>

      
      <div className="w-full flex flex-col items-center space-y-2 relative z-10">

        
        <h3 className="font-bold text-arachne-silk text-xl group-hover:text-arachne-lightPurple group-hover:neon-glow transition-all duration-300">
          {title}
        </h3>

        
        <p className="text-sm text-arachne-web text-center px-2 leading-relaxed">
          {description}
        </p>

        
        <div className="w-16 h-0.5 bg-gradient-to-r from-transparent via-arachne-neonPurple to-transparent rounded-full"></div>

        
        <div className="flex justify-center items-center gap-1 py-2">
          {Array.from({ length: 5 }).map((_, idx) => (
            <FaSpider
              key={idx}
              className="text-base text-arachne-neonPurple group-hover:animate-pulse-glow transition-all duration-300"
              style={{ animationDelay: `${idx * 0.1}s` }}
            />
          ))}
        </div>

        
        <div className="w-full pt-2 border-t border-arachne-neonPurple/30">
          <p className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-arachne-lightPurple to-arachne-neonPurple text-center">
            {price}
          </p>
        </div>

        
        <button className="w-full mt-3 px-4 py-2.5 rounded-xl bg-gradient-to-r from-arachne-royalPurple to-arachne-neonPurple hover:from-arachne-neonPurple hover:to-arachne-lightPurple text-white font-bold text-sm uppercase tracking-wider transition-all duration-300 hover:shadow-glow-purple hover:scale-105 shimmer">
          Encomendar
        </button>
      </div>

      
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-arachne-neonPurple/10 to-transparent"></div>
      </div>
    </div>
  );
};

const Products = () => (
  <section className="flex justify-center px-4 sm:px-8 py-12 relative overflow-hidden">

    
    <div className="absolute inset-0 web-pattern opacity-20"></div>
    <div className="absolute top-10 right-10 opacity-10">
      <GiSpiderWeb className="text-[200px] text-arachne-neonPurple animate-spin-slower" />
    </div>

    <div className="container relative z-10">

      
      <div className="text-center mb-12 max-w-3xl mx-auto">
        <div
          data-aos="fade-down"
          className="flex items-center justify-center gap-3 mb-4"
        >
          <FaSpider className="text-4xl text-arachne-neonPurple animate-pulse-glow" />
          <h2 className="text-4xl sm:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-arachne-silk via-arachne-lightPurple to-arachne-neonPurple neon-glow">
            Nossa Coleção
          </h2>
          <FaSpider className="text-4xl text-arachne-neonPurple animate-pulse-glow" />
        </div>

        <div className="w-32 h-1 bg-gradient-to-r from-transparent via-arachne-neonPurple to-transparent mx-auto rounded-full mb-4"></div>

        <p
          data-aos="fade-up"
          data-aos-delay="100"
          className="text-lg text-arachne-web max-w-2xl mx-auto leading-relaxed"
        >
          Descubra chaveirinhos artesanais únicos, tecidos com amor e dedicação.
          Cada peça é uma obra de arte feita à mão especialmente para você! 🕸️✨
        </p>
      </div>

      
      <div className="w-full">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-2 sm:px-6 place-items-stretch">
          {PRODUCTS.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>
      </div>

      
      <div
        data-aos="fade-up"
        data-aos-delay="200"
        className="mt-16 text-center"
      >
        <div className="glass-arachne rounded-2xl p-8 border-2 border-arachne-neonPurple/30 max-w-2xl mx-auto">
          <p className="text-arachne-silk text-lg mb-4">
            ✨ Não encontrou o que procurava? Entre em contato e faça uma encomenda personalizada!
          </p>
          <a
            href="#footer"
            className="inline-block px-8 py-3 rounded-xl bg-gradient-to-r from-arachne-royalPurple to-arachne-neonPurple hover:from-arachne-neonPurple hover:to-arachne-lightPurple text-white font-bold uppercase tracking-wider transition-all duration-300 hover:shadow-glow-purple hover:scale-105 shimmer"
          >
            Faça seu Pedido
          </a>
        </div>
      </div>
    </div>
  </section>
);

export default Products;