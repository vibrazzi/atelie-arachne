import { GrSecure } from "react-icons/gr";
import { FaBox, FaTruck, FaSpider, FaHeart, FaWhatsapp } from "react-icons/fa";
import { GiSpiderWeb, GiSewingNeedle } from "react-icons/gi";

const features = [
  { Icon: GiSewingNeedle, text: "Design exclusivo e personalizado", color: "from-arachne-neonPurple to-arachne-lightPurple" },
  { Icon: FaTruck, text: "Entrega rápida e segura", color: "from-arachne-royalPurple to-arachne-neonPurple" },
  { Icon: GrSecure, text: "Qualidade garantida em cada peça", color: "from-arachne-darkPurple to-arachne-royalPurple" },
  { Icon: FaHeart, text: "Feito com amor e dedicação", color: "from-arachne-lightPurple to-arachne-silk" },
];

const Banner = () => (
  <section id="banner" className="min-h-[450px] flex justify-center px-4 sm:px-8 py-8 relative overflow-hidden">

    
    <div className="absolute inset-0 web-pattern opacity-20"></div>
    <div className="absolute top-0 right-0 opacity-10">
      <GiSpiderWeb className="text-[250px] text-arachne-neonPurple animate-spin-slower" />
    </div>
    <div className="absolute bottom-0 left-0 opacity-10">
      <FaSpider className="text-[120px] text-arachne-lightPurple animate-float" />
    </div>

    <div className="container glass-arachne p-8 sm:p-16 rounded-3xl shadow-card-hover max-w-6xl mx-auto animate-fade-in border-2 border-arachne-neonPurple/30 relative z-10">

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">

        
        <div className="flex flex-col justify-center items-start gap-6 text-start w-full">

          
          <div
            data-aos="fade-right"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-arachne-royalPurple to-arachne-neonPurple shadow-glow-purple"
          >
            <FaSpider className="text-white text-sm animate-pulse-glow" />
            <span className="text-xs font-bold text-white uppercase tracking-wider">Ateliê Arachne</span>
          </div>

          
          <h1
            data-aos="fade-up"
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-wide leading-tight"
          >
            <span className="text-arachne-silk">Chaveirinhos de </span>
            <span className="block mt-2 text-transparent bg-clip-text bg-gradient-to-r from-arachne-lightPurple via-arachne-neonPurple to-arachne-royalPurple neon-glow animate-gradient-x bg-[length:200%_auto]">
              Crochê Artesanal
            </span>
          </h1>

          
          <div className="w-24 h-1 bg-gradient-to-r from-arachne-neonPurple to-transparent rounded-full"></div>

          
          <p
            data-aos="fade-up"
            data-aos-delay="100"
            className="text-base sm:text-lg text-arachne-web font-normal leading-relaxed max-w-lg"
          >
            Cada chaveirinho é cuidadosamente <span className="text-arachne-lightPurple font-semibold">feito à mão</span>,
            combinando arte, autenticidade e a delicadeza de fios tecidos com amor.
            Peças únicas que carregam personalidade! 🕸️✨
          </p>

          
          <div className="flex flex-col gap-4 w-full max-w-lg">
            {features.map(({ Icon, text, color }, idx) => (
              <div
                key={idx}
                data-aos="fade-right"
                data-aos-delay={idx * 100}
                className="group flex items-center gap-4 p-3 rounded-xl bg-arachne-deepPurple/30 border border-arachne-neonPurple/20 hover:border-arachne-neonPurple/60 hover:shadow-card transition-all duration-300 hover:scale-105 web-hover cursor-pointer"
                role="listitem"
                tabIndex={0}
                aria-label={text}
              >
                <div className={`flex items-center justify-center w-12 h-12 bg-gradient-to-br ${color} rounded-full shadow-glow-purple group-hover:animate-pulse-glow transition-all duration-300`}>
                  <Icon className="text-xl text-white" aria-hidden="true" focusable="false" />
                </div>
                <p className="text-sm sm:text-base font-semibold text-arachne-silk group-hover:text-arachne-lightPurple transition-colors duration-300">
                  {text}
                </p>
              </div>
            ))}
          </div>

          
          <div
            data-aos="fade-up"
            data-aos-delay="300"
            className="flex flex-col sm:flex-row gap-4 mt-4 w-full"
          >
            <a
              href="#products"
              className="group relative px-8 py-4 rounded-xl bg-gradient-to-r from-arachne-royalPurple to-arachne-neonPurple hover:from-arachne-neonPurple hover:to-arachne-lightPurple text-white font-bold text-base uppercase tracking-wider transition-all duration-300 hover:shadow-glow-purple hover:scale-105 shimmer text-center overflow-hidden"
            >
              <span className="relative z-10">Ver Coleção</span>
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 web-pattern"></div>
            </a>

            <a
              href="https://wa.me/553484407531?text=Olá,%20gostaria%20de%20fazer%20um%20pedido!"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-center gap-3 px-8 py-4 rounded-xl border-2 border-arachne-neonPurple text-arachne-silk hover:bg-arachne-neonPurple hover:text-white font-bold text-base uppercase tracking-wider transition-all duration-300 hover:shadow-glow-purple hover:scale-105"
            >
              <FaWhatsapp className="text-2xl group-hover:animate-pulse-glow" />
              <span>Encomende Já</span>
            </a>
          </div>
        </div>

        
        <div
          data-aos="fade-left"
          data-aos-delay="200"
          className="hidden lg:flex items-center justify-center relative"
        >
          <div className="relative">
            
            <div className="absolute inset-0 bg-gradient-to-br from-arachne-neonPurple/40 to-arachne-royalPurple/40 rounded-full blur-3xl animate-pulse-glow"></div>

            
            <div className="relative flex items-center justify-center">
              <GiSpiderWeb className="text-[280px] text-arachne-neonPurple/60 animate-spin-slower web-glow" />

              
              <div className="absolute inset-0 flex items-center justify-center">
                <FaSpider className="absolute top-0 text-4xl text-arachne-lightPurple animate-float" />
                <FaSpider className="absolute bottom-0 text-3xl text-arachne-neonPurple animate-float" style={{ animationDelay: '0.5s' }} />
                <FaSpider className="absolute left-0 text-3xl text-arachne-silk animate-float" style={{ animationDelay: '1s' }} />
                <FaSpider className="absolute right-0 text-4xl text-arachne-royalPurple animate-float" style={{ animationDelay: '1.5s' }} />
              </div>

              
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <p className="text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-arachne-silk to-arachne-neonPurple neon-glow">
                    Arte
                  </p>
                  <p className="text-2xl font-bold text-arachne-lightPurple mt-2">
                    Aracnídea
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Banner;
