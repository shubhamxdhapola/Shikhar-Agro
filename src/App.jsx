import { useEffect } from "react";
import Navbar from "./components/Navbar/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import Offer from "./components/Offer.jsx";
import Contact from "./components/Contact.jsx";
import Footer from "./components/Footer.jsx";
import About from "./components/About.jsx";
import Services from "./components/Services/Services.jsx";
import Toaster from "./components/Toaster.jsx";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import AOS from "aos";
import "aos/dist/aos.css";

function App() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: false,
      mirror: false,
    });
  }, []);

  return (
    <div className="max-w-[1500px] w-full mx-auto">
      <Toaster />
      <div className="px-2 sm:px-4 lg:px-6 xl:px-10 2xl:px-15">
        <Navbar />
        <div className="overflow-x-hidden">
          <Hero />
          <Services />
          <About />
          <Offer />
          <Contact />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
