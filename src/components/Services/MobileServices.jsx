import { serviceCategories } from "../../utils/data";
import Slider from "react-slick";

import ServicesCard from "../ServicesCard";
import { ChevronRight } from "lucide-react";

const MobileServices = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 2,
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: false,
    responsive: [
      {
        breakpoint: 600,
        settings: { slidesToShow: 1, slidesToScroll: 1 },
      },
    ],
  };

  return (
    <div className="lg:hidden">
      {serviceCategories.map((service, index) => (
        <div key={index} className="mb-15">
          <h3 className="flex justify-center items-center mb-6 border border-[#4b8b3b] text-gray-800 px-4 py-3 rounded-full w-fit text-sm gap-2 font-semibold mx-auto">
            <span>{<service.icon size={20} />}</span>
            <span>{service.title}</span>
          </h3>

          <Slider {...settings}>
            {service.services.map((service, index) => (
              <ServicesCard key={index} service={service} />
            ))}
          </Slider>
        </div>
      ))}
    </div>
  );
};

export default MobileServices;
