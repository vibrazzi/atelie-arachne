import { FaInstagram, FaWhatsapp, FaSpider, FaHeart, FaEnvelope, FaPhone } from "react-icons/fa";
import { GiSpiderWeb } from "react-icons/gi";

const SOCIAL_LINKS = [
  {
    href: "https://wa.me/553484407531?text=Olá,%20gostaria%20de%20efetuar%20um%20pedido%20de%20um%20chaveirinho!",
    label: "WhatsApp",
    icon: FaWhatsapp,
    color: "hover:text-green-400",
    bgGradient: "from-green-600 to-green-400",
  },
  {
    href: "https://instagram.com/arachne.atelie",
    label: "Instagram",
    icon: FaInstagram,
    color: "hover:text-pink-400",
    bgGradient: "from-pink-600 to-purple-500",
  },
];

const QUICK_LINKS = [
  { label: "Início", href: "#home" },
  { label: "Produtos", href: "#products" },
  { label: "Sobre", href: "#about" },
];

const Footer = () => (
  <footer className="relative text-white py-12 sm:py-16 glass-arachne rounded-t-3xl shadow-card-hover border-t-4 border-arachne-neonPurple overflow-hidden">

    
    <div className="absolute inset-0 web-pattern opacity-20"></div>
    <div className="absolute top-10 right-10 opacity-10">
      <GiSpiderWeb className="text-[200px] text-arachne-neonPurple animate-spin-slower" />
    </div>
    <div className="absolute bottom-10 left-10 opacity-10">
      <FaSpider className="text-[100px] text-arachne-lightPurple animate-float" />
    </div>

    <div className="container mx-auto px-4 sm:px-8 relative z-10">

      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-12">

        
        <div className="space-y-4">
          <div className="flex items-center gap-3 mb-4">
            <GiSpiderWeb className="text-4xl text-arachne-neonPurple animate-spin-slow" />
            <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-arachne-silk to-arachne-neonPurple">
              Ateliê Arachne
            </h3>
          </div>
          <p className="text-arachne-web text-sm leading-relaxed">
            Chaveirinhos artesanais de crochê feitos à mão com amor e dedicação.
            Cada peça é única e carrega a essência da arte aracnídea.
          </p>
          <div className="flex items-center gap-2 pt-2">
            <FaHeart className="text-red-400 animate-pulse-glow" />
            <span className="text-arachne-silk text-xs italic">Tecendo sonhos desde 2020</span>
          </div>
        </div>

        
        <div className="space-y-4">
          <h3 className="text-xl font-bold text-arachne-lightPurple mb-4 flex items-center gap-2">
            <FaSpider className="text-arachne-neonPurple" />
            Links Rápidos
          </h3>
          <ul className="space-y-3">
            {QUICK_LINKS.map((link, idx) => (
              <li key={idx}>
                <a
                  href={link.href}
                  className="group flex items-center gap-2 text-arachne-web hover:text-arachne-lightPurple transition-colors duration-300"
                >
                  <span className="w-2 h-2 rounded-full bg-arachne-neonPurple group-hover:animate-pulse-glow"></span>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          
          <div className="pt-4 space-y-2">
            <div className="flex items-center gap-2 text-arachne-web text-sm">
              <FaPhone className="text-arachne-neonPurple" />
              <span>(34) 98440-7531</span>
            </div>
            <div className="flex items-center gap-2 text-arachne-web text-sm">
              <FaEnvelope className="text-arachne-neonPurple" />
              <span>contato@arachne.com.br</span>
            </div>
          </div>
        </div>

        
        <div className="space-y-4">
          <h3 className="text-xl font-bold text-arachne-lightPurple mb-4 flex items-center gap-2">
            <FaSpider className="text-arachne-neonPurple" />
            Faça seu Pedido
          </h3>
          <p className="text-arachne-web text-sm mb-4">
            Entre em contato conosco pelas redes sociais e encomende seu chaveirinho exclusivo!
          </p>

          <div className="space-y-4">
            {SOCIAL_LINKS.map(({ href, label, icon: Icon, color, bgGradient }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className={`group flex items-center gap-4 p-4 rounded-xl bg-arachne-deepPurple/50 border-2 border-arachne-neonPurple/30 hover:border-arachne-neonPurple transition-all duration-300 hover:shadow-card hover:scale-105 web-hover`}
                aria-label={label}
              >
                <div className={`p-3 rounded-full bg-gradient-to-br ${bgGradient} shadow-glow-purple group-hover:animate-pulse-glow`}>
                  <Icon className="text-2xl text-white" />
                </div>
                <div className="flex-grow">
                  <p className="font-bold text-arachne-silk group-hover:text-arachne-lightPurple transition-colors duration-300">
                    {label}
                  </p>
                  <p className="text-xs text-arachne-web">
                    Clique para conversar
                  </p>
                </div>
                <FaSpider className="text-arachne-neonPurple group-hover:animate-pulse-glow" />
              </a>
            ))}
          </div>
        </div>
      </div>

      
      <div className="w-full h-px bg-gradient-to-r from-transparent via-arachne-neonPurple to-transparent mb-8"></div>

      
      <div className="flex flex-col sm:flex-row justify-between items-center gap-6">

        
        <div className="text-center sm:text-left">
          <p className="text-sm text-arachne-web">
            © {new Date().getFullYear()}{" "}
            <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-arachne-lightPurple to-arachne-neonPurple">
              Ateliê Arachne
            </span>
            . Todos os direitos reservados.
          </p>
          <p className="text-xs text-arachne-web/60 mt-1">
            Desenvolvido com 💜 por{" "}
            <span className="text-arachne-lightPurple font-semibold">Webert Fernandes</span>
          </p>
        </div>

        
        <div className="flex items-center gap-3">
          <div className="px-3 py-1.5 rounded-full bg-gradient-to-r from-arachne-royalPurple to-arachne-neonPurple shadow-glow-purple text-xs font-bold uppercase tracking-wider">
            100% Artesanal
          </div>
          <div className="px-3 py-1.5 rounded-full border-2 border-arachne-neonPurple text-arachne-silk text-xs font-bold uppercase tracking-wider">
            Feito à Mão
          </div>
        </div>
      </div>

      
      <div className="flex justify-center mt-8 gap-2">
        {Array.from({ length: 7 }).map((_, idx) => (
          <FaSpider
            key={idx}
            className="text-lg text-arachne-neonPurple/40 animate-pulse-glow"
            style={{ animationDelay: `${idx * 0.15}s` }}
          />
        ))}
      </div>
    </div>
  </footer>
);

export default Footer;