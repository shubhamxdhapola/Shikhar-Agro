import Slider from "react-slick";
import { useNavigate } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import HomeServicesCard from "../../../cards/HomeServicesCard";
import { serviceCategories } from "../../../../utils/data";

const MobileServices = () => {
  const navigate = useNavigate();

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
    <div className="lg:hidden text-center">
      {serviceCategories.map((service, index) => (
        <div key={index} className="mb-15" data-aos="fade-right">
          <h3 className="flex justify-center items-center mb-6 border border-[#4b8b3b] text-gray-800 px-4 py-3 rounded-full w-fit text-sm gap-2 font-semibold mx-auto">
            <span>{<service.icon size={20} />}</span>
            <span>{service.title}</span>
          </h3>

          <Slider {...settings}>
            {service.services.map((service, index) => (
              <HomeServicesCard key={index} service={service} />
            ))}
          </Slider>
        </div>
      ))}
      <button
        className="inline-flex justify-center items-center gap-2 text-sm border text-gray-800 px-4 py-2 rounded-full cursor-pointer group duration-300 w-fit mx-auto -mt-4 text-center font-semibold"
        onClick={() => navigate("/services")}
      >
        <span>Explore More</span>
        <ArrowRight
          size={16}
          className="group-hover:translate-x-0.5 duration-300"
        />
      </button>
    </div>
  );
};

export default MobileServices;
