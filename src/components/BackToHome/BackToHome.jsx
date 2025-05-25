import React, { useState, useEffect } from "react";
import { FaArrowUp } from "react-icons/fa";

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
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 bg-purple-950 text-white p-3 rounded-full shadow-2xl hover:scale-110 hover:bg-purple-800 focus:outline-none focus:ring-4 focus:ring-purple-400 transition-all duration-300 animate-fade-in"
          aria-label="Voltar ao Início"
          tabIndex={0}
          style={{
            boxShadow: "0 4px 24px 0 rgba(80, 0, 120, 0.4)",
          }}
        >
          <FaArrowUp className="text-2xl drop-shadow-lg" />
        </button>
      )}
    </div>
  );
};

export default BackToHome;
