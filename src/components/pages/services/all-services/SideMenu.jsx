import { useEffect, useRef } from "react";
import { services } from "../../../../utils/data";

const SideMenu = ({
  isSideMenuOpen,
  setIsSideMenuOpen,
  currentService,
  handleServiceSelection,
}) => {
  
  const navRef = useRef(null);

  useEffect(() => {
    function hideSideBar(e) {
      if (navRef.current && !navRef.current.contains(e.target)) {
        setIsSideMenuOpen(false);
      }
    }
    document.addEventListener("mousedown", hideSideBar);
    return () => {
      document.removeEventListener("mousedown", hideSideBar);
    };
  });

  return (
    <div
      ref={navRef}
      className={`bg-white shadow-md w-[80vw] sm:w-[50vw] md:w-[50vw] lg:w-[30vw] xl:w-[20vw] h-screen p-4 fixed top-0 duration-300 z-10 space-y-1  border-[#4b8b3b] ${
        isSideMenuOpen ? "left-0" : "-left-[100vh]"
      }`}
    >
      <p className="logo text-lg lg:text-xl text-[#4b8b3b] cursor-pointer pb-8">
        Shikhar Agro
      </p>
      {services.map((service, index) => (
        <div
          key={index}
          className={`flex items-center w-fit  px-4 cursor-pointer  duration-300  ${
            currentService.categoryNo === index + 1
              ? "bg-[#4b8b3b] rounded-full text-white"
              : ""
          }`}
        >
          <service.icon
            className={`${
              currentService.categoryNo === index + 1
                ? "text-white"
                : "text-gray-800"
            }`}
            size={20}
          />
          <p
            className="p-3 text"
            key={index}
            onClick={() => handleServiceSelection(service)}
          >
            <span>{service.category}</span>
          </p>
        </div>
      ))}
    </div>
  );
};

export default SideMenu;
