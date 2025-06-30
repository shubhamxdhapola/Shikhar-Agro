import Navbar from "./components/Navbar/Navbar.jsx"
import Hero from "./components/Hero.jsx";
import Services from "./components/Services.jsx";
import Offer from "./components/Offer.jsx";
import Contact from "./components/Contact.jsx";
import Footer from "./components/Footer.jsx";
import About from "./components/About.jsx";
import Toaster from "./components/Toaster.jsx";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";


function App() {
  return (
    <div className="max-w-[1500px] w-full mx-auto">
      <Toaster />
      <div className="px-2 sm:px-4 lg:px-6 xl:px-10 2xl:px-15">
      <Navbar />
        <Hero />
        <Services />
         <About />
         <Offer /> 
        <Contact /> 
      </div>
      <Footer />
    </div>
  );
}

export default App;
