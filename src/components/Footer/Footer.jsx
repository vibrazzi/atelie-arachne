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
  <footer className="text-light py-6 sm:py-10 bg-gradient-to-br from-purple-100 via-white to-purple-100 rounded-t-2xl shadow-lg">
    <div className="container flex flex-col items-center sm:gap-8">
      <h1 className="text-lg font-bold flex items-center gap-2 text-black-900 drop-shadow">
        Faça seus pedidos aqui
        <FaSpider className="text-2xl text-red-700 animate-spin-slow" />
      </h1>
      <div className="flex sm:flex-row items-center gap-4 sm:gap-6">
        {SOCIAL_LINKS.map(({ href, label, icon: Icon, hover }) => (
          <a
            key={label}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className={`flex items-center gap-2 text-light transition duration-300 ${hover} hover:scale-110`}
          >
            <Icon className="text-2xl" />
            <span>{label}</span>
          </a>
        ))}
      </div>
    </div>
  </footer>
);

export default Footer;