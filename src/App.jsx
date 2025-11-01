import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Products from "./components/Products/Products";
import Banner from "./components/Banner/Banner";
import About from "./components/About/About";
import Testimonials from "./components/Testimonials/Testimonials";
import Footer from "./components/Footer/Footer";
import BackToHome from "./components/BackToHome/BackToHome";
import WebDecoration from "./components/WebDecoration/WebDecoration";

const App = () => {
  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 1000,
      easing: "ease-in-out",
      delay: 100,
      once: false,
      mirror: true,
    });
    AOS.refresh();
  }, []);

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-arachne-shadow via-arachne-deepPurple to-arachne-darkPurple overflow-x-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-arachne-shadow/90 via-arachne-deepPurple/80 to-arachne-darkPurple/90 animate-gradient-xy bg-[length:200%_200%]"></div>
      <div className="absolute inset-0 bg-black/30"></div>
      <WebDecoration />
      <div className="relative z-10">
        <div className="sticky top-4 mx-4 sm:mx-8 mb-8 z-50">
          <Navbar />
        </div>
        <section id="home" className="mb-20">
          <Banner />
        </section>
        <section id="hero" className="mb-20">
          <Hero />
        </section>
        <section id="about" className="mb-20">
          <About />
        </section>
        <section id="products" className="mb-20">
          <Products />
        </section>
        <section id="testimonials" className="mb-20">
          <Testimonials />
        </section>
        <section id="footer">
          <Footer />
        </section>
        <BackToHome />
      </div>
      <div className="fixed top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-arachne-neonPurple to-transparent animate-gradient-x z-50 pointer-events-none"></div>
    </div>
  );
};

export default App;
