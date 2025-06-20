import { useState, useEffect } from "react";

const Menu = [
  { id: 1, name: "Início", link: "#home" },
  { id: 2, name: "Chaveirinhos", link: "#products" },
  { id: 3, name: "Pedidos", link: "#footer" },
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
      className={`bg-gradient-to-br from-purple-100 via-white to-purple-200 rounded-2xl shadow-xl transition-shadow duration-300 ${
        isScrolled ? "shadow-2xl border-t-4 border-purple-400" : ""
      } relative`}
      aria-label="Barra de Navegação"
    >
      {/* Gradiente animado na borda superior */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 animate-pulse rounded-t-2xl shadow-[0_0_16px_2px_rgba(236,72,153,0.3)]" />
      <div className="w-full flex flex-col items-center justify-center mx-auto py-2 relative z-10" style={{ maxWidth: "20rem" }}>
        <img
          className="w-32 h-32 mx-auto mt-0 transition-transform duration-300 hover:scale-110 drop-shadow-lg"
          src={"./spider-web-sf.png"}
          alt="Teia de aranha"
        />
        <ul className="flex flex-wrap gap-4 text-purple-950 text-base font-semibold justify-center w-full" role="menubar">
          {Menu.map(({ id, name, link }) => (
            <li key={id} role="none">
              <button
                onClick={() => handleMenuClick(link)}
                className="relative group transition duration-300 text-center hover:text-white focus:outline-none focus:ring-2 focus:ring-purple-400 px-3 py-1 rounded-lg overflow-hidden hover:scale-110"
                aria-label={`Ir para ${name}`}
                role="menuitem"
                tabIndex={0}
              >
                <span className="relative z-10">{name}</span>
                {/* Efeito gradiente animado no hover */}
                <span className="absolute left-0 top-0 w-full h-full opacity-0 group-hover:opacity-100 group-focus:opacity-100 transition-opacity duration-300 rounded-lg -z-1 bg-gradient-to-r from-purple-500 via-pink-400 to-blue-400 blur-sm animate-gradient-x"></span>
                {/* Fundo sutil para contraste */}
                <span className="absolute left-0 top-0 w-full h-full bg-purple-100 opacity-0 group-hover:opacity-30 group-focus:opacity-30 transition-opacity duration-300 rounded-lg -z-2"></span>
              </button>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
