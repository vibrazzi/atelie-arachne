import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Products from "./components/Products/Products";
import Banner from "./components/Banner/Banner";
import Footer from "./components/Footer/Footer";
import BackToHome from "./components/BackToHome/BackToHome";

const App = () => {
  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 800,
      easing: "ease-in-sine",
      delay: 100,
    });
    AOS.refresh();
  }, []);

  return (
    <div
      className=" text-light duration-200"
      style={{
        backgroundImage: "url('/background-chat.png')", // Certifique-se de que a imagem está no diretório public
        backgroundSize: "cover",
        backgroundAttachment: "fixed",
        backgroundColor: "rgba(0, 0, 0, 0.1)", // Cor de fundo com opacidade

  //         background-repeat: no-repeat;
  // background-position: center;

      }}
    >
      <Navbar />
      <div id="home" className="my-16">
        <Banner />
      </div>
      <div id="products" className="my-16">
        <Hero />
      </div>
      <div className="my-16">
        <Products />
      </div>
      <div id="footer">
        <Footer />
      </div>
      <BackToHome />
    </div>
  );
};

export default App;
