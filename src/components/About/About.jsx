import { FaHeart, FaHandHoldingHeart, FaMagic, FaSpider } from "react-icons/fa";
import { GiSpiderWeb, GiSewingNeedle } from "react-icons/gi";

const features = [
  {
    icon: GiSewingNeedle,
    title: "Feito à Mão",
    description: "Cada chaveirinho é cuidadosamente criado com técnicas artesanais de crochê"
  },
  {
    icon: FaHeart,
    title: "Com Amor",
    description: "Dedicação e carinho em cada ponto, transformando linha em arte"
  },
  {
    icon: FaMagic,
    title: "Designs Únicos",
    description: "Peças exclusivas e personalizadas que refletem sua personalidade"
  },
];

const About = () => {
  return (
    <section
      id="about"
      className="flex justify-center px-4 sm:px-8 py-16 relative overflow-hidden"
    >
      
      <div className="absolute inset-0 web-pattern opacity-30"></div>

      
      <div className="absolute top-10 right-10 opacity-10">
        <GiSpiderWeb className="text-9xl text-arachne-neonPurple animate-spin-slower" />
      </div>
      <div className="absolute bottom-10 left-10 opacity-10">
        <FaSpider className="text-7xl text-arachne-lightPurple animate-float" />
      </div>

      <div className="container max-w-6xl relative z-10">
        <div className="glass-arachne rounded-3xl p-8 sm:p-12 shadow-card-hover border-2 border-arachne-neonPurple/30">

          
          <div className="text-center mb-12" data-aos="fade-down">
            <div className="flex items-center justify-center gap-3 mb-4">
              <FaSpider className="text-4xl text-arachne-neonPurple animate-pulse-glow" />
              <h2 className="text-4xl sm:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-arachne-silk via-arachne-lightPurple to-arachne-neonPurple neon-glow">
                Sobre o Ateliê
              </h2>
              <FaSpider className="text-4xl text-arachne-neonPurple animate-pulse-glow" />
            </div>
            <div className="w-32 h-1 bg-gradient-to-r from-transparent via-arachne-neonPurple to-transparent mx-auto rounded-full"></div>
          </div>

          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center mb-12">

            
            <div className="space-y-6" data-aos="fade-right">
              <p className="text-arachne-silk text-lg leading-relaxed">
                Bem-vindo ao <span className="font-bold text-arachne-lightPurple">Ateliê Arachne</span>,
                onde cada fio é tecido com dedicação para criar chaveirinhos únicos de crochê.
                Inspirado na mitologia grega de Arachne, a tecelã lendária, nosso ateliê traz
                arte e delicadeza em cada peça.
              </p>

              <p className="text-arachne-web text-base leading-relaxed">
                Como uma aranha que tece sua teia com precisão, criamos cada chaveirinho
                com atenção aos mínimos detalhes. São peças que carregam personalidade,
                carinho e a essência do trabalho artesanal brasileiro.
              </p>

              <div className="flex items-center gap-3 p-4 rounded-xl bg-arachne-deepPurple/30 border-l-4 border-arachne-neonPurple">
                <FaHandHoldingHeart className="text-3xl text-arachne-lightPurple flex-shrink-0" />
                <p className="text-arachne-silk text-sm italic">
                  "Cada ponto é uma expressão de arte, cada chaveirinho é uma pequena obra-prima."
                </p>
              </div>
            </div>

            
            <div className="relative" data-aos="fade-left">
              <div className="relative rounded-2xl overflow-hidden shadow-card-hover border-2 border-arachne-neonPurple/40">
                <div className="absolute inset-0 bg-gradient-to-br from-arachne-royalPurple/20 to-arachne-neonPurple/20 backdrop-blur-sm"></div>
                <div className="relative p-8 flex flex-col items-center justify-center min-h-[300px]">
                  <GiSpiderWeb className="text-9xl text-arachne-neonPurple/40 animate-spin-slower mb-4" />
                  <h3 className="text-2xl font-bold text-arachne-silk text-center mb-2">
                    Arte Aracnídea
                  </h3>
                  <p className="text-arachne-web text-center text-sm">
                    Tecendo sonhos, um fio de cada vez
                  </p>
                </div>
              </div>
            </div>
          </div>

          
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <div
                key={index}
                data-aos="fade-up"
                data-aos-delay={index * 100}
                className="group relative p-6 rounded-xl bg-arachne-deepPurple/30 border-2 border-arachne-neonPurple/20 hover:border-arachne-neonPurple/60 transition-all duration-300 hover:shadow-card-hover hover:-translate-y-2 web-hover"
              >
                
                <div className="flex justify-center mb-4">
                  <div className="p-4 rounded-full bg-gradient-to-br from-arachne-royalPurple to-arachne-neonPurple shadow-glow-purple group-hover:animate-pulse-glow">
                    <feature.icon className="text-3xl text-white" />
                  </div>
                </div>

                
                <h3 className="text-xl font-bold text-arachne-lightPurple text-center mb-2 group-hover:neon-glow transition-all duration-300">
                  {feature.title}
                </h3>

                
                <p className="text-arachne-web text-sm text-center leading-relaxed">
                  {feature.description}
                </p>

                
                <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-arachne-neonPurple to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            ))}
          </div>

          
          <div className="mt-12 text-center" data-aos="fade-up">
            <p className="text-arachne-silk text-lg mb-4">
              Pronta para tecer memórias especiais com você! 🕸️✨
            </p>
            <div className="flex justify-center gap-2">
              {Array.from({ length: 5 }).map((_, idx) => (
                <FaSpider
                  key={idx}
                  className="text-xl text-arachne-neonPurple animate-pulse-glow"
                  style={{ animationDelay: `${idx * 0.2}s` }}
                />
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;
