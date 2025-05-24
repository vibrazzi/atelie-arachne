import { GrSecure } from "react-icons/gr";
import { FaBox, FaTruck, FaSpider } from "react-icons/fa";

const features = [
  { Icon: GrSecure, text: "Qualidade garantida em cada peça" },
  { Icon: FaBox, text: "Design exclusivo e funcional" },
  { Icon: FaTruck, text: "Entrega rápida e segura" },
];

const Banner = () => (
  <section id="banner" className="min-h-[350px] flex justify-center px-4 sm:px-8">
    <div className="container px-6 sm:px-12 py-10 sm:py-16 bg-gradient-to-br from-purple-300 rounded-2xl shadow-2xl mx-4 sm:mx-20 animate-fade-in">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-10 items-center">
        <div className="flex flex-col justify-center items-center sm:items-start gap-6 sm:gap-10 text-center sm:text-left">
          <h1
            data-aos="fade-up"
            className="text-2xl sm:text-3xl font-bold tracking-wide leading-tight flex items-center gap-4 text-black drop-shadow-lg whitespace-nowrap"
          >
            Chaveirinhos de{" "}
            <span className="font-extrabold bg-gradient-to-r from-black via-purple-700 to-black bg-clip-text text-transparent animate-pulse">
              Crochê
            </span>
            <FaSpider className="text-2xl text-purple-700 animate-spin-slow" />
          </h1>
          <p
            data-aos="fade-up"
            className="text-base sm:text-lg text-purple-100 font-normal leading-6"
          >
            Cada chaveirinho é uma obra de arte feita à mão, trazendo estilo e personalidade ao seu dia a dia.
          </p>
          <div className="flex flex-col gap-4">
            {features.map(({ Icon, text }, idx) => (
              <div
                key={idx}
                data-aos="fade-up"
                className="flex items-center gap-3 hover:scale-105 transition-transform duration-300"
                role="listitem"
                tabIndex={0}
                aria-label={text}
              >
                <div className="flex items-center justify-center w-9 h-9 bg-purple-800 rounded-full shadow-md">
                  <Icon className="text-xl text-white" aria-hidden="true" focusable="false" />
                </div>
                <p className="text-sm sm:text-base font-semibold text-purple-100">
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
