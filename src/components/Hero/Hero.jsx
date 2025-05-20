import Slider from "react-slick";
import Image1 from "../../assets/hero/collection3.jpg";
import Image2 from "../../assets/hero/collection4.jpg";
import Image3 from "../../assets/hero/collection.jpg";

const SLIDES = [
  {
    id: 1,
    img: Image1,
    title: "Chaveirinhos Artesanais",
    description:
      "Descubra nossa coleção de chaveirinhos de tricô feitos à mão, perfeitos para presentear ou colecionar.",
  },
  {
    id: 2,
    img: Image2,
    title: "Feitos com Amor",
    description:
      "Cada chaveirinho é feito com cuidado e atenção aos detalhes, trazendo um toque especial ao seu dia.",
  },
  {
    id: 3,
    img: Image3,
    title: "Estilos Únicos",
    description:
      "Explore designs exclusivos que combinam criatividade e qualidade em cada peça.",
  },
];

const HeroSlide = ({ img, title, description }) => (
  <div className="grid grid-cols-1 sm:grid-cols-2 sm:gap-8 py-6 sm:py-12">
    <div className="flex flex-col justify-center gap-4 sm:gap-8 text-center sm:text-left order-2 sm:order-1 relative z-10">
      <h1
        data-aos="zoom-out"
        data-aos-duration="500"
        data-aos-once="true"
        className="text-3xl sm:text-5xl lg:text-6xl font-bold text-light"
      >
        {title}
      </h1>
      <p
        data-aos="fade-up"
        data-aos-duration="500"
        data-aos-delay="100"
        className="text-base sm:text-lg text-light"
      >
        {description}
      </p>
    </div>
    <div className="order-1 sm:order-2 flex items-center justify-center">
      <div
        data-aos="zoom-in"
        data-aos-once="true"
        className="relative z-10"
      >
        <img
          src={img}
          alt={title}
          className="w-[180px] h-[180px] sm:w-[320px] sm:h-[320px] lg:w-[400px] lg:h-[400px] object-contain"
        />
      </div>
    </div>
  </div>
);

const Hero = () => {
  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 800,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    cssEase: "ease-in-out",
    pauseOnHover: false,
    pauseOnFocus: true,
  };

  return (
    <section className="flex justify-center relative overflow-hidden min-h-[550px] sm:min-h-[650px] text-light duration-200">
      <div className="h-[700px] w-[700px] absolute -top-1/2 right-0 rounded-3xl rotate-45 -z-[8]" />
      <div className="container px-2 sm:px-8 bg-gradient-to-br from-[#F5F5F5] via-white to-[#F5F5F5]/80 rounded-2xl">
        <Slider {...settings}>
          {SLIDES.map((slide) => (
            <HeroSlide key={slide.id} {...slide} />
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default Hero;