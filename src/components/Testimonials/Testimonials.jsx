import { FaStar, FaQuoteLeft, FaSpider } from "react-icons/fa";
import { GiSpiderWeb } from "react-icons/gi";

const testimonials = [
  {
    id: 1,
    name: "Maria Silva",
    comment: "Os chaveirinhos são simplesmente perfeitos! A qualidade é excepcional e o atendimento foi maravilhoso. Já encomendei vários!",
    rating: 5,
    avatar: "👩",
    product: "Coelhinho"
  },
  {
    id: 2,
    name: "João Santos",
    comment: "Presente perfeito para minha namorada! Ela amou o chaveirinho. Muito bem feito e com detalhes incríveis.",
    rating: 5,
    avatar: "👨",
    product: "Lua e Estrela"
  },
  {
    id: 3,
    name: "Ana Costa",
    comment: "Trabalho artesanal impecável! Super recomendo. A entrega foi rápida e o produto veio muito bem embalado.",
    rating: 5,
    avatar: "👩‍🦰",
    product: "Estrelinha"
  },
];

const TestimonialCard = ({ name, comment, rating, avatar, product }) => (
  <div
    data-aos="fade-up"
    className="group relative glass-arachne rounded-2xl p-6 shadow-card border-2 border-arachne-neonPurple/30 hover:border-arachne-neonPurple hover:shadow-card-hover transition-all duration-500 h-full flex flex-col web-hover"
  >
    
    <div className="absolute -top-2 -right-2 opacity-20 group-hover:opacity-40 transition-opacity duration-300">
      <GiSpiderWeb className="text-4xl text-arachne-neonPurple animate-spin-slower" />
    </div>

    
    <div className="mb-4">
      <FaQuoteLeft className="text-3xl text-arachne-neonPurple/60" />
    </div>

    
    <p className="text-arachne-silk text-base leading-relaxed mb-6 flex-grow italic">
      "{comment}"
    </p>

    
    <div className="flex items-center gap-1 mb-4">
      {Array.from({ length: rating }).map((_, idx) => (
        <FaStar
          key={idx}
          className="text-yellow-400 text-lg"
        />
      ))}
    </div>

    
    <div className="w-full h-px bg-gradient-to-r from-transparent via-arachne-neonPurple/50 to-transparent mb-4"></div>

    
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-3">
        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-arachne-royalPurple to-arachne-neonPurple flex items-center justify-center text-2xl shadow-glow-purple">
          {avatar}
        </div>
        <div>
          <p className="font-bold text-arachne-lightPurple">{name}</p>
          <p className="text-xs text-arachne-web">Comprou: {product}</p>
        </div>
      </div>

      <FaSpider className="text-xl text-arachne-neonPurple group-hover:animate-pulse-glow" />
    </div>

    
    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none rounded-2xl">
      <div className="absolute inset-0 bg-gradient-to-br from-arachne-neonPurple/5 to-transparent"></div>
    </div>
  </div>
);

const Testimonials = () => {
  return (
    <section className="flex justify-center px-4 sm:px-8 py-16 relative overflow-hidden">

      
      <div className="absolute inset-0 web-pattern opacity-20"></div>
      <div className="absolute bottom-10 left-10 opacity-10">
        <GiSpiderWeb className="text-[180px] text-arachne-lightPurple animate-spin-slower" />
      </div>

      <div className="container max-w-7xl relative z-10">

        
        <div className="text-center mb-12">
          <div
            data-aos="fade-down"
            className="flex items-center justify-center gap-3 mb-4"
          >
            <FaStar className="text-3xl text-yellow-400 animate-pulse-glow" />
            <h2 className="text-4xl sm:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-arachne-silk via-arachne-lightPurple to-arachne-neonPurple neon-glow">
              Depoimentos
            </h2>
            <FaStar className="text-3xl text-yellow-400 animate-pulse-glow" />
          </div>

          <div className="w-32 h-1 bg-gradient-to-r from-transparent via-arachne-neonPurple to-transparent mx-auto rounded-full mb-4"></div>

          <p
            data-aos="fade-up"
            data-aos-delay="100"
            className="text-lg text-arachne-web max-w-2xl mx-auto"
          >
            Veja o que nossos clientes têm a dizer sobre os chaveirinhos do Ateliê Arachne! 💜
          </p>
        </div>

        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-2 sm:px-6">
          {testimonials.map((testimonial, index) => (
            <div key={testimonial.id} data-aos-delay={index * 100}>
              <TestimonialCard {...testimonial} />
            </div>
          ))}
        </div>

        
        <div
          data-aos="fade-up"
          data-aos-delay="300"
          className="mt-12 glass-arachne rounded-2xl p-8 border-2 border-arachne-neonPurple/30"
        >
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
            <div className="space-y-2">
              <p className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-arachne-lightPurple to-arachne-neonPurple">
                500+
              </p>
              <p className="text-arachne-silk text-sm uppercase tracking-wider">
                Clientes Felizes
              </p>
            </div>

            <div className="space-y-2">
              <div className="flex items-center justify-center gap-1">
                <span className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-arachne-lightPurple to-arachne-neonPurple">
                  5.0
                </span>
                <FaStar className="text-2xl text-yellow-400 mb-2" />
              </div>
              <p className="text-arachne-silk text-sm uppercase tracking-wider">
                Avaliação Média
              </p>
            </div>

            <div className="space-y-2">
              <p className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-arachne-lightPurple to-arachne-neonPurple">
                100%
              </p>
              <p className="text-arachne-silk text-sm uppercase tracking-wider">
                Artesanal
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
