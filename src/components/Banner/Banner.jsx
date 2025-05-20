import { GrSecure } from "react-icons/gr";
import { FaBox, FaTruck, FaSpider } from "react-icons/fa";

const features = [
  { Icon: GrSecure, text: "Qualidade garantida em cada peça" },
  { Icon: FaBox, text: "Design exclusivo e funcional" },
  { Icon: FaTruck, text: "Entrega rápida e segura" },
];

const Banner = () => (
  <section id="banner" className="min-h-[350px] flex justify-center">
    <div className="container px-2 sm:px-4 bg-gradient-to-br from-red-200 via-white to-pink-100 rounded-2xl shadow-2xl mx-2 sm:mx-4 sm:py-4 w-full animate-fade-in">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 items-center">
        <div className="flex flex-col justify-center items-center sm:items-start gap-4 text-center sm:text-left mt-8 sm:mt-12">
          <h1
            data-aos="fade-up"
            className="text-2xl sm:text-3xl font-extrabold tracking-wide leading-tight flex items-center gap-4 text-black-900 drop-shadow-lg whitespace-nowrap"
          >
            Chaveirinhos de Tricô
            <FaSpider className="text-2xl text-red-800 animate-spin-slow" />
          </h1>
          <p
            data-aos="fade-up"
            className="text-sm sm:text-base text-gray-700 leading-6"
          >
            Cada chaveirinho é uma obra de arte feita à mão, trazendo estilo e personalidade ao seu dia a dia.
          </p>
          <div className="flex flex-col gap-4">
            {features.map(({ Icon, text }, idx) => (
              <div
                key={idx}
                data-aos="fade-up"
                className="flex items-center gap-3 hover:scale-105 transition-transform duration-300"
              >
                <div className="flex items-center justify-center w-9 h-9 bg-red-800 rounded-full shadow-md">
                  <Icon className="text-xl text-white" />
                </div>
                <p className="text-xs sm:text-sm font-semibold text-gray-600">
                  {text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Banner;
