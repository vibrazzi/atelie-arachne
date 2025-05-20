import { useState, useEffect } from "react";
import { FaArrowUp } from "react-icons/fa";

const BackToHome = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => setIsVisible(window.scrollY > 300);
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  if (!isVisible) return null;

  return (
    <button
      onClick={scrollToTop}
      className="fixed bottom-6 right-6 bg-vermelhoSangue text-white p-3 rounded-full shadow-lg hover:bg-purple-950 transition duration-300"
      aria-label="Voltar ao Início"
    >
      <FaArrowUp className="text-xl" />
    </button>
  );
};

export default BackToHome;
