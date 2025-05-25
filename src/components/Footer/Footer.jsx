import { FaInstagram, FaWhatsapp, FaSpider } from "react-icons/fa";

const SOCIAL_LINKS = [
  {
    href: "https://wa.me/553484407531?text=Olá,%20gostaria%20de%20efetuar%20um%20pedido%20de%20um%20chaveirinho!",
    label: "WhatsApp",
    icon: FaWhatsapp,
    hover: "hover:text-green-500",
  },
  {
    href: "https://instagram.com/arachne.atelie",
    label: "Instagram",
    icon: FaInstagram,
    hover: "hover:text-pink-500",
  },
];

const Footer = () => (
  <footer className="text-black py-10 sm:py-14 bg-gradient-to-br from-purple-300 via-white to-purple-100 rounded-t-3xl shadow-[0_8px_40px_0_rgba(80,0,120,0.20)] border-t-4 border-purple-400">
    <div className="container flex flex-col items-center gap-10 sm:gap-14">
      <h1
        className="text-2xl sm:text-3xl font-extrabold flex items-center gap-3 text-transparent bg-clip-text bg-gradient-to-r from-purple-900 via-purple-700 to-purple-500 animate-gradient-x bg-[length:200%_200%] drop-shadow-lg"
        style={{ backgroundSize: "200% 200%" }}
      >
        Faça seus pedidos aqui
        <FaSpider className="text-4xl text-purple-950 animate-spin-slow drop-shadow-xl" />
      </h1>
      <div className="flex flex-row items-center gap-8 sm:gap-12">
        {SOCIAL_LINKS.map(({ href, label, icon: Icon, hover }) => (
          <a
            key={label}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className={`flex items-center gap-2 text-black text-xl font-semibold transition duration-300 ${hover} hover:scale-125 hover:drop-shadow-glow group`}
            aria-label={label}
            tabIndex={0}
          >
            <Icon className="text-4xl sm:text-5xl transition-all duration-300 group-hover:animate-pulse-glow" aria-hidden="true" focusable="false" />
            <span className="hidden sm:inline">{label}</span>
          </a>
        ))}
      </div>
      <span className="mt-6 text-xs text-gray-500 tracking-wide">
        © {new Date().getFullYear()} <span className="font-bold text-purple-700">Arachne</span>. Todos os direitos reservados.
      </span>
    </div>
  </footer>
);

export default Footer;