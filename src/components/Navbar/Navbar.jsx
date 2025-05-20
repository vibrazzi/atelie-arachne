import { useState, useEffect } from "react";

const Menu = [
  { id: 1, name: "Início", link: "#home" },
  { id: 2, name: "Chaveirinhos", link: "#products" },
  { id: 3, name: "Contato", link: "#footer" },
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
      className="bg-gradient-to-br from-[#F5F5F5] via-white to-[#F5F5F5]/80 rounded-2xl shadow-xl mx-2 mt-2 w-full"
      aria-label="Barra de Navegação"
    >
      <div className="w-full flex flex-col items-center justify-center mx-auto py-2" style={{ maxWidth: "20rem" }}>
        <img
          className="w-32 h-32 mx-auto mt-0"
          src={"./spider-web-sf.png"}
          alt="Teia de aranha"
        />
        <ul className="flex flex-wrap gap-4 text-black text-sm justify-center w-full">
          {Menu.map(({ id, name, link }) => (
            <li key={id}>
              <button
                onClick={() => handleMenuClick(link)}
                className="relative group transition duration-300 text-center hover:text-gray-400"
                aria-label={`Ir para ${name}`}
              >
                {name}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
