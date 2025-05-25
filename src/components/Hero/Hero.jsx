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
  <div className="flex flex-col sm:flex-row items-center justify-center bg-gradient-to-br from-purple-300 rounded-xl shadow-lg px-4 sm:px-10 py-8 sm:py-12">
    <div className="flex flex-col justify-center items-center gap-6 text-center w-full sm:w-1/2 px-0 sm:px-6">
      <h1
        data-aos="zoom-out"
        data-aos-duration="500"
        data-aos-once="true"
        className="text-2xl sm:text-3xl lg:text-5xl font-bold text-purple-950 drop-shadow-lg"
        tabIndex={0}
        aria-label={title}
      >
        {title}
      </h1>
      <p
        data-aos="fade-up"
        data-aos-duration="500"
        data-aos-delay="100"
        className="text-base sm:text-lg mt-0 text-purple-200 font-normal text-center max-w-xl mx-auto"
        tabIndex={0}
        aria-label={description}
      >
        {description}
      </p>
    </div>
    <div className="flex items-center justify-center w-full sm:w-1/2 mt-8 sm:mt-0">
      <div
        data-aos="zoom-in"
        data-aos-once="true"
        className="relative z-10"
      >
        <img
          src={img}
          alt={title}
          className="w-[180px] h-[180px] sm:w-[320px] sm:h-[320px] lg:w-[400px] lg:h-[400px] object-contain mx-auto rounded-xl border-4 border-purple-900 shadow-2xl transition-transform duration-300 hover:scale-105"
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
    <section className="flex justify-center relative overflow-hidden min-h-[300px] sm:min-h-[400px] text-black duration-200">
      <div className="h-[400px] w-[400px] absolute -top-1/3 right-0 rounded-3xl rotate-45 -z-[8]" />
      <div className="container px-4 sm:px-8 rounded-2xl mx-4 sm:mx-40">
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