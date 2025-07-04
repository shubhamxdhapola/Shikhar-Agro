import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight, Undo2 } from "lucide-react";
import { useNavigate } from "react-router-dom";
import AllServicesCard from "../../../cards/AllServicesCard";
import SideMenu from "./SideMenu";
import { services } from "../../../../utils/data";

const AllServices = () => {
  
  const navigate = useNavigate();
  const [currentService, setCurrentService] = useState(services[0]);
  const [isSideMenuOpen, setIsSideMenuOpen] = useState(false);
  const toggleSideMenu = () => setIsSideMenuOpen(!isSideMenuOpen);

  const handleServiceSelection = (service) => {
    setCurrentService(service);
    setIsSideMenuOpen(false);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <section
      className="mx-auto px-4 md:px-6 lg:px-8 xl:px-10 2xl:px-14 py-8"
      name="services"
    >
      <div
        className={`overlay bg-black/30 fixed w-[100vw] h-[100vh] top-0 ${
          isSideMenuOpen ? "block" : "hidden"
        } `}
      ></div>

      <div className="mb-8 lg:mb-10 text-left lg:w-[80%] mx-auto">
        <button
          className="inline-flex justify-center items-center gap-1 border-1 text-gray-800 px-4 py-1 rounded-full cursor-pointer group duration-300 w-fit mx-auto  font-semibold mb-4"
          onClick={() => navigate("/")}
        >
          <Undo2
            size={18}
            className="group-hover:-translate-x-0.5 duration-300"
          />
          <span>Back</span>
        </button>
        <h2 className="font-extrabold text-2xl md:text3xl xl:text-4xl 2xl:5xl text-gray-800 my-2">
          Explore Our Full Range of Services
        </h2>
        <p className="text-gray-600 md:text-lg ">
          From farm-fresh milk to secure guard services — we bring convenience
          and care to your doorstep.
        </p>
      </div>

      <div>
        <span
          className="bg-[#4b8b3b] fixed right-0 top-[50%] -translate-y-[55%] w-8 h-20 inline-flex justify-center items-center rounded-l-xl text-white cursor-pointer group duration-300"
          onClick={toggleSideMenu}
        >
          {isSideMenuOpen ? (
            <ChevronRight />
          ) : (
            <ChevronLeft className="group-hover:-translate-x-0.5 duration-300" />
          )}
        </span>

        <SideMenu
          isSideMenuOpen={isSideMenuOpen}
          setIsSideMenuOpen={setIsSideMenuOpen}
          currentService={currentService}
          handleServiceSelection={handleServiceSelection}
        />

        <div className="lg:w-[80%] mx-auto">
          <div className="flex items-center gap-2 mb-5 bg-[#4b8b3b] px-4 py-2 rounded-full text-white w-fit">
            <span>{<currentService.icon size={20} />}</span>
            <p className="text">{currentService.category}</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 ">
            {currentService.services.map((service, index) => (
              <AllServicesCard service={service} key={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AllServices;
