import { useState, useEffect } from "react";
import { FaSpider, FaHome, FaShoppingBag, FaEnvelope } from "react-icons/fa";

const Menu = [
  { id: 1, name: "Início", link: "#home", icon: FaHome },
  { id: 2, name: "Chaveirinhos", link: "#products", icon: FaShoppingBag },
  { id: 3, name: "Sobre", link: "#about", icon: FaSpider },
  { id: 4, name: "Pedidos", link: "#footer", icon: FaEnvelope },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleMenuClick = (link) => {
    const section = document.querySelector(link);
    section?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <nav
      className={`glass-arachne rounded-3xl shadow-web transition-all duration-500 web-pattern ${
        isScrolled ? "shadow-card-hover backdrop-blur-xl" : "backdrop-blur-lg"
      } relative overflow-hidden border-2 border-arachne-neonPurple/30`}
      aria-label="Barra de Navegação"
    >
      
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-arachne-royalPurple via-arachne-neonPurple to-arachne-lightPurple animate-gradient-x rounded-t-3xl"
           style={{ boxShadow: '0 0 20px rgba(123, 44, 191, 0.6)' }} />

      
      <div className="absolute top-2 right-4 opacity-20">
        <FaSpider className="text-3xl text-arachne-web animate-spin-slower" />
      </div>
      <div className="absolute bottom-2 left-4 opacity-20">
        <FaSpider className="text-2xl text-arachne-silk animate-float" />
      </div>

      <div className="w-full flex flex-col items-center justify-center mx-auto py-4 relative z-10" style={{ maxWidth: "28rem" }}>
        
        <div className="relative mb-2">
          <div className="absolute inset-0 bg-arachne-neonPurple rounded-full blur-xl opacity-50 animate-pulse-glow"></div>
          <img
            className="w-28 h-28 mx-auto relative z-10 transition-all duration-500 hover:scale-110 hover:rotate-12 drop-shadow-glow-purple web-glow"
            src={"./spider-web-sf.png"}
            alt="Teia de aranha - Ateliê Arachne"
          />
        </div>

        
        <h1 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-arachne-silk via-arachne-lightPurple to-arachne-neonPurple mb-4 neon-glow tracking-wider">
          Ateliê Arachne
        </h1>

        
        <ul className="flex flex-wrap gap-3 justify-center w-full px-4" role="menubar">
          {Menu.map(({ id, name, link, icon: Icon }) => (
            <li key={id} role="none">
              <button
                onClick={() => handleMenuClick(link)}
                className="relative group transition-all duration-300 text-center focus:outline-none px-4 py-2.5 rounded-xl overflow-hidden hover:scale-105 shimmer"
                aria-label={`Ir para ${name}`}
                role="menuitem"
                tabIndex={0}
              >
                
                <span className="relative z-10 flex items-center gap-2 text-arachne-silk group-hover:text-white font-semibold text-sm transition-colors duration-300">
                  <Icon className="text-lg group-hover:animate-pulse-glow" />
                  {name}
                </span>

                
                <span className="absolute inset-0 bg-gradient-to-r from-arachne-royalPurple via-arachne-neonPurple to-arachne-lightPurple opacity-0 group-hover:opacity-100 group-focus:opacity-100 transition-opacity duration-300 rounded-xl"></span>

                
                <span className="absolute inset-0 rounded-xl border-2 border-arachne-neonPurple/0 group-hover:border-arachne-neonPurple/60 transition-all duration-300 group-hover:shadow-glow-purple"></span>

                
                <span className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 web-pattern"></span>
              </button>
            </li>
          ))}
        </ul>

        
        <p className="mt-3 text-xs text-arachne-web/80 italic tracking-wide">
          Chaveirinhos artesanais de crochê ✨
        </p>
      </div>

      
      <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-arachne-neonPurple to-transparent opacity-50"></div>
    </nav>
  );
};

export default Navbar;
