import { ChevronRight } from "lucide-react";
import { Link } from "react-scroll";
import MobileNav from "./MobileNavbar/MobileNav";
import { navTabs } from "../../utils/data";
import { useState } from "react";

const Navbar = () => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <>
      <nav className="sticky top-3 md:top-5 z-10">
        {/* Desktop Navbar */}
        <div className="h-15 lg:h-16 content-center pr-4.5 pl-2 sm:pl-4 md:pl-6 lg:pl-8 xl:pl-10 2xl:pl-14 mt-5 rounded-full backdrop-blur-2xl hidden md:block">
          <div className="flex justify-between items-center">
            <Link
              to="home"
              duration={500}
              smooth={true}
              className="logo md:text-xl lg:text-2xl text-[#4b8b3b] cursor-pointer"
              data-aos="fade-right"
              data-aos-once="true"
              data-aos-mirror="false"
            >
              Shikhar Agro
            </Link>
            <div
              className="flex gap-6 lg:gap-8 bg-white rounded-full shadow-sm h-11 lg:h-12 px-8 lg:px-10 items-center "
              data-aos="fade-down"
              data-aos-once="true"
              data-aos-mirror="false"
            >
              {navTabs.map((item, index) => (
                <Link
                  key={index}
                  className="relative uppercase text-sm font-medium text-gray-700 before:content-[''] before:bg-[#4b8b3b] before:w-full before:h-[3px] before:absolute before:-bottom-1 before:scale-x-0 before:rounded before:duration-300 hover:before:scale-x-100 cursor-pointer"
                  to={item.name}
                  smooth={true}
                  duration={500}
                  spy={true}
                  activeClass="active"
                >
                  {item.tabName}
                </Link>
              ))}
            </div>
            <div>
              <Link
                to="contact"
                duration={500}
                smooth={true}
                className="bg-[#4b8b3b] rounded-full text-white py-1.5 px-5 flex justify-center items-center gap-1 cursor-pointer hover:bg-[#467a3b] duration-300"
                data-aos="fade-left "
                data-aos-once="true"
                data-aos-mirror="false"
              >
                <span>Contact Us</span>
                <ChevronRight size={18} />
              </Link>
            </div>
          </div>
        </div>
        {/* Mobile Navbar */}
        <MobileNav />
      </nav>
    </>
  );
};

export default Navbar;
