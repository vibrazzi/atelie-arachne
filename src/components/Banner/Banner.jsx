import { GrSecure } from "react-icons/gr";
import { FaBox, FaTruck, FaSpider } from "react-icons/fa";

const features = [
  { Icon: GrSecure, text: "Qualidade garantida em cada peça" },
  { Icon: FaBox, text: "Design exclusivo e funcional" },
  { Icon: FaTruck, text: "Entrega rápida e segura" },
];

const Banner = () => (
<section id="banner" className="min-h-[350px] flex justify-center px-2 sm:px-8">
  <div className="container p-6 sm:p-12 bg-gradient-to-br from-purple-300 rounded-2xl shadow-2xl max-w-2xl mx-auto animate-fade-in">
    <div className="grid grid-cols-1 items-center">
      <div className="flex flex-col justify-center items-center gap-5 text-center w-full">
        <h1
          data-aos="fade-up"
          className="text-2xl sm:text-3xl font-bold tracking-wide leading-tight flex items-center gap-3 text-white drop-shadow-lg whitespace-nowrap justify-center w-full"
        >
          Chaveirinhos de{" "}
          <span className="font-extrabold bg-gradient-to-r from-purple-400 via-purple-800 to-purple-900 bg-clip-text text-transparent animate-pulse">
            Crochê
          </span>
          <FaSpider className="text-2xl text-purple-700 animate-spin-slow" />
        </h1>
        <p
          data-aos="fade-up"
          className="text-center sm:text-lg text-purple-950 font-normal leading-6 max-w-md mx-auto"
        >
          Cada chaveirinho é cuidadosamente feito à mão, combinando arte e autenticidade
        </p>
        <div className="flex flex-col gap-3 w-full max-w-md mx-auto">
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
              <p className="text-sm sm:text-base font-semibold text-purple-100 text-left">{text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
</section>




);

export default Banner;
