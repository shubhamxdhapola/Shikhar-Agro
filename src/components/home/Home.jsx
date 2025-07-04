import Navbar from "../header/Navbar";
import Hero from "../pages/Hero";
import Services from "../Pages/Services/Services";
import About from "../pages/About";
import Offer from "../pages/Offer";
import Contact from "../pages/Contact";
import Footer from "../footer/Footer";

const Home = () => {
  return (
    <div className="max-w-[1500px] w-full mx-auto">
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
};

export default Home;
