import { useState } from "react";
import { ArrowRight } from "lucide-react";
import HomeServicesCard from '../../cards/HomeServicesCard'
import MobileServices from './mobile-services/MobileServices'
import { useNavigate } from "react-router-dom";
import { serviceCategories } from "../../../utils/data";

const Services = () => {
  
  const [selectedCategory, setSelectedCategory] = useState(
    serviceCategories[0]
  );
  const navigate = useNavigate();
  const handleOnClick = (data) => setSelectedCategory(data);

  return (
    <section className="pb-24 lg:pb-36" name="services">
      <div className="mx-auto px-4 md:px-6 lg:px-8 xl:px-10 2xl:px-14">
        <div className="mb-8 sm:mb-10 md:mb-12 lg:mb-14" data-aos="fade-right">
          <span className="text-white bg-[#4b8b3b] rounded-full px-3 py-1.5 sm:px-4 sm:py-2 text-xs sm:text-sm">
            OUR SERVICES
          </span>
          <h2 className="font-extrabold text-3xl md:text-4xl xl:text-5xl 2xl:6xl text-gray-800 my-4">
            What Services We're Offering
          </h2>
        </div>

        <div
          className="lg:grid grid-cols-3 lg:gap-5 xl:gap-8 hidden"
          data-aos="fade-left"
        >
          {serviceCategories.map((service, index) => (
            <div key={index}>
              <h3
                className={`p-4 bg-white flex justify-center items-center gap-2 text-center font-semibold rounded-4xl cursor-pointer shadow-sm ${
                  selectedCategory.serviceNo === index + 1
                    ? "border-b-4 border-[#4b8b3b]"
                    : ""
                }`}
                onClick={() => handleOnClick(service)}
              >
                <span>{<service.icon size={20} />}</span>
                <span>{service.title}</span>
              </h3>
            </div>
          ))}
        </div>

        {/* Desktop Services */}
        <div className="text-center hidden lg:block">
          <div
            className="grid grid-cols-3 lg:gap-5 xl:gap-8 mt-5 "
            data-aos="fade-left"
          >
            {selectedCategory.services.map((service, index) => (
              <HomeServicesCard key={index} service={service} />
            ))}
          </div>
          <button
            className="inline-flex justify-center items-center gap-2 text-sm border text-gray-800 px-4 py-2 rounded-full cursor-pointer group duration-300 w-fit mx-auto mt-6 text-center font-semibold"
            onClick={() => navigate("/services")}
          >
            <span>Explore More</span>
            <ArrowRight
              size={16}
              className="group-hover:translate-x-0.5 duration-300"
            />
          </button>
        </div>

        {/* Mobile Services */}
        <MobileServices />
      </div>
    </section>
  );
};

export default Services;
