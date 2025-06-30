import { ChevronRight } from "lucide-react";
import { Link } from "react-scroll";
import { navTabs } from "../../../utils/data";
import { useEffect, useRef } from "react";

const SideMenu = ({ openSideMenu, setOpenSideMenu, toggleSideMenu }) => {

  const navRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(e) {
      if (navRef.current && !navRef.current.contains(e.target)) {
        setOpenSideMenu(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
  });

  return (
    <div
      className={`bg-transparent backdrop-blur-3xl w-[60vw] sm:w-[50vw] h-auto fixed top-20 sm:top-22 z-10 shadow rounded-3xl ${
        openSideMenu ? "left-3 sm:left-5" : "-left-[100vw]"
      } duration-300`}
      ref={navRef}
    >
      <div className="flex flex-col gap-6 justify-center px-6 py-5">
        {navTabs.map((item, index) => (
          <Link
            key={index}
            className="uppercase cursor-pointer font-medium text-gray-700 text-sm sm:text-md"
            to={item.name}
            smooth={true}
            duration={100}
            onClick={toggleSideMenu}
          >
            {item.tabName}
          </Link>
        ))}
        <Link
          to="contact"
          duration={500}
          smooth={true}
          className="bg-[#4b8b3b] rounded-md text-white py-2 px-4 sm:px-5 flex justify-center items-center gap-1 cursor-pointer hover:bg-[#467a3b] duration-300 w-fit text-sm sm:text-md"
          onClick={toggleSideMenu}
        >
          <span>Contact Us</span>
          <ChevronRight size={18} />
        </Link>
      </div>
    </div>
  );
};

export default SideMenu;
