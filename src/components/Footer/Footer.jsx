import React from "react";
import { FaInstagram, FaWhatsapp, FaSpider } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="text-light py-8 sm:py-10 bg-gradient-to-br from-[#F5F5F5] via-white to-[#F5F5F5]/80 rounded-t-2xl shadow-xl w-full">
      <div className="container flex flex-col items-center gap-4 sm:gap-6">
        <h1 className="text-lg font-bold flex items-center gap-2">
          Faça seus pedidos aqui
          <FaSpider className="text-2xl text-purple-500" />
        </h1>
        <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6">
          <a
            href="https://wa.me/553484407531?text=Olá,%20gostaria%20de%20efetuar%20um%20pedido%20de%20um%20chaveirinho!"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-light hover:text-green-500 transition duration-300"
          >
            <FaWhatsapp className="text-2xl" />
            <span>WhatsApp</span>
          </a>
          <a
            href="https://instagram.com/arachne.atelie"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-light hover:text-pink-500 transition duration-300"
          >
            <FaInstagram className="text-2xl" />
            <span>Instagram</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;