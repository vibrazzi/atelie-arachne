import Slider from "react-slick";
import { FaSpider, FaStar } from "react-icons/fa";
import { GiSpiderWeb } from "react-icons/gi";
import Image1 from "../../assets/hero/collection3.jpg";
import Image2 from "../../assets/hero/collection4.jpg";
import Image3 from "../../assets/hero/collection.jpg";

const SLIDES = [
  {
    id: 1,
    img: Image1,
    title: "Chaveirinhos Artesanais",
    subtitle: "✨ Tecidos com Dedicação",
    description:
      "Descubra nossa coleção exclusiva de chaveirinhos de crochê feitos à mão. Cada peça é única, perfeita para presentear ou colecionar.",
    badge: "Exclusivo",
  },
  {
    id: 2,
    img: Image2,
    title: "Feitos com Amor",
    subtitle: "💜 Arte em Cada Ponto",
    description:
      "Cada chaveirinho é criado com cuidado e atenção aos mínimos detalhes, trazendo um toque especial e personalidade ao seu dia a dia.",
    badge: "Artesanal",
  },
  {
    id: 3,
    img: Image3,
    title: "Designs Únicos",
    subtitle: "🕸️ Inspire-se com Arachne",
    description:
      "Explore designs exclusivos que combinam criatividade, qualidade e a essência da mitologia grega em cada peça criada com maestria.",
    badge: "Premium",
  },
];

const HeroSlide = ({ img, title, subtitle, description, badge }) => (
  <div className="relative flex flex-col sm:flex-row items-center justify-center glass-arachne rounded-3xl shadow-card-hover px-6 sm:px-12 py-10 sm:py-14 border-2 border-arachne-neonPurple/30 overflow-hidden">

    
    <div className="absolute inset-0 web-pattern opacity-20"></div>

    
    <div className="absolute top-4 right-4 opacity-30">
      <GiSpiderWeb className="text-6xl text-arachne-lightPurple animate-spin-slower" />
    </div>
    <div className="absolute bottom-4 left-4 opacity-20">
      <FaSpider className="text-4xl text-arachne-neonPurple animate-float" />
    </div>

    
    <div className="flex flex-col justify-center items-center sm:items-start gap-5 text-center sm:text-left w-full sm:w-1/2 px-0 sm:px-6 relative z-10">

      
      <div
        data-aos="fade-down"
        data-aos-duration="400"
        data-aos-once="true"
        className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gradient-to-r from-arachne-royalPurple to-arachne-neonPurple shadow-glow-purple"
      >
        <FaStar className="text-sm text-yellow-300" />
        <span className="text-xs font-bold text-white uppercase tracking-wider">{badge}</span>
      </div>

      
      <h1
        data-aos="zoom-out"
        data-aos-duration="500"
        data-aos-once="true"
        className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-arachne-silk via-arachne-lightPurple to-arachne-neonPurple neon-glow leading-tight"
        tabIndex={0}
        aria-label={title}
      >
        {title}
      </h1>

      
      <p
        data-aos="fade-right"
        data-aos-duration="500"
        data-aos-delay="50"
        className="text-lg sm:text-xl font-semibold text-arachne-lightPurple"
      >
        {subtitle}
      </p>

      
      <div className="w-24 h-1 bg-gradient-to-r from-arachne-neonPurple to-transparent rounded-full"></div>

      
      <p
        data-aos="fade-up"
        data-aos-duration="500"
        data-aos-delay="100"
        className="text-base sm:text-lg text-arachne-web leading-relaxed max-w-xl"
        tabIndex={0}
        aria-label={description}
      >
        {description}
      </p>

      
      <div
        data-aos="fade-up"
        data-aos-delay="150"
        className="flex items-center gap-2 mt-2"
      >
        {Array.from({ length: 5 }).map((_, idx) => (
          <FaSpider key={idx} className="text-xl text-arachne-neonPurple animate-pulse-glow" style={{ animationDelay: `${idx * 0.1}s` }} />
        ))}
        <span className="ml-2 text-sm text-arachne-silk font-semibold">100% Artesanal</span>
      </div>
    </div>

    
    <div className="flex items-center justify-center w-full sm:w-1/2 mt-8 sm:mt-0 relative z-10">
      <div
        data-aos="zoom-in"
        data-aos-once="true"
        className="relative group"
      >
        
        <div className="absolute inset-0 bg-gradient-to-br from-arachne-neonPurple to-arachne-royalPurple rounded-3xl blur-2xl opacity-40 group-hover:opacity-60 transition-opacity duration-500 scale-105"></div>

        
        <div className="relative">
          <img
            src={img}
            alt={title}
            className="w-[200px] h-[200px] sm:w-[300px] sm:h-[300px] lg:w-[380px] lg:h-[380px] object-contain mx-auto rounded-2xl border-4 border-arachne-neonPurple/60 shadow-card-hover transition-all duration-500 group-hover:scale-105 group-hover:rotate-2 group-hover:border-arachne-lightPurple backdrop-blur-sm bg-arachne-deepPurple/20"
          />

          
          <div className="absolute -top-3 -right-3 opacity-70 group-hover:opacity-100 transition-opacity duration-300">
            <GiSpiderWeb className="text-4xl text-arachne-neonPurple animate-spin-slow" />
          </div>
        </div>
      </div>
    </div>
  </div>
);

const Hero = () => {
  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 1000,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    cssEase: "cubic-bezier(0.87, 0, 0.13, 1)",
    pauseOnHover: true,
    pauseOnFocus: true,
    dotsClass: "slick-dots custom-dots",
  };

  return (
    <section className="flex justify-center relative overflow-hidden min-h-[400px] sm:min-h-[550px] py-8 sm:py-12">

      
      <div className="absolute inset-0 bg-gradient-to-br from-arachne-shadow via-arachne-deepPurple to-arachne-darkPurple opacity-40"></div>

      
      <div className="absolute top-0 left-0 w-full h-full web-pattern opacity-10"></div>

      
      <div className="container px-4 sm:px-8 rounded-3xl mx-4 sm:mx-8 lg:mx-20 relative z-10">
        <Slider {...settings}>
          {SLIDES.map((slide) => (
            <HeroSlide key={slide.id} {...slide} />
          ))}
        </Slider>
      </div>

      
      <style jsx>{`
        :global(.custom-dots) {
          bottom: -40px !important;
          display: flex !important;
          justify-content: center;
          gap: 12px;
        }

        :global(.custom-dots li) {
          width: 12px;
          height: 12px;
          margin: 0;
        }

        :global(.custom-dots li button) {
          width: 12px;
          height: 12px;
          padding: 0;
          border-radius: 50%;
          background: rgba(123, 44, 191, 0.3);
          transition: all 0.3s ease;
        }

        :global(.custom-dots li button:before) {
          display: none;
        }

        :global(.custom-dots li.slick-active button) {
          background: linear-gradient(135deg, #7b2cbf, #9d4edd);
          box-shadow: 0 0 15px rgba(157, 78, 221, 0.8);
          width: 32px;
          border-radius: 6px;
        }

        :global(.custom-dots li:hover button) {
          background: rgba(157, 78, 221, 0.6);
          transform: scale(1.2);
        }
      `}</style>
    </section>
  );
};

export default Hero;