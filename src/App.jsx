import { useEffect } from "react";
import Toaster from "./components/Toaster.jsx";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { Routes, Route } from "react-router-dom";
import Home from "./components/home/Home.jsx";
import AllServices from "./components/pages/services/all-services/AllServices.jsx";

function App() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: false,
      mirror: false,
    });
  }, []);

  return (
    <>
      <Toaster />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<AllServices />} />
      </Routes>
    </>
  );
}

export default App;
