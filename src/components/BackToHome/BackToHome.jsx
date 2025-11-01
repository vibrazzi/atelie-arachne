import React, { useState, useEffect } from "react";
import { FaArrowUp, FaSpider } from "react-icons/fa";
import { GiSpiderWeb } from "react-icons/gi";

const BackToHome = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div>
      {isVisible && (
        <div className="fixed bottom-6 right-6 z-50 animate-fade-in">
          
          <div className="absolute -inset-4 opacity-30 pointer-events-none">
            <GiSpiderWeb className="text-6xl text-arachne-neonPurple animate-spin-slower" />
          </div>

          
          <button
            onClick={scrollToTop}
            className="group relative glass-arachne p-4 rounded-full shadow-card-hover border-2 border-arachne-neonPurple/40 hover:border-arachne-neonPurple hover:scale-110 focus:outline-none focus:ring-4 focus:ring-arachne-neonPurple/50 transition-all duration-300 overflow-hidden"
            aria-label="Voltar ao Início"
            tabIndex={0}
          >
            
            <div className="absolute inset-0 bg-gradient-to-br from-arachne-neonPurple/40 to-arachne-royalPurple/40 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

            
            <FaArrowUp className="relative z-10 text-2xl text-arachne-silk group-hover:text-white transition-colors duration-300 drop-shadow-glow-purple group-hover:animate-pulse-glow" />

            
            <div className="absolute inset-0 bg-gradient-to-br from-arachne-royalPurple to-arachne-neonPurple opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full"></div>

            
            <div className="absolute inset-0 web-pattern opacity-0 group-hover:opacity-30 transition-opacity duration-300 rounded-full"></div>
          </button>

          
          <div className="absolute -top-2 -right-2 opacity-60 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
            <FaSpider className="text-lg text-arachne-neonPurple animate-float" />
          </div>
        </div>
      )}
    </div>
  );
};

export default BackToHome;
