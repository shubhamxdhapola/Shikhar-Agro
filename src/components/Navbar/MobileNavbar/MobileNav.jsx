import { AlignRight, Sidebar, X } from "lucide-react";
import { useState } from "react";
import { Link } from "react-scroll";
import SideMenu from "./SideMenu";

const MobileNav = () => {
  const [openSideMenu, setOpenSideMenu] = useState(false);
  const toggleSideMenu = () => setOpenSideMenu(!openSideMenu);

  return (
    <>
      <div className="h-14 sm:h-16 bg-transparent backdrop-blur-3xl px-4 sm:px-6 flex justify-between rounded-full items-center py-1 shadow md:hidden">
        <Link
          to="home"
          duration={500}
          smooth={true}
          className="logo text-lg sm:text-xl text-[#4b8b3b]"
          onClick={toggleSideMenu}
        >
          Shikhar Agro
        </Link>
        <span className="cursor-pointer" onClick={toggleSideMenu}>
          {openSideMenu ? (
            <X className="text-gray-800" />
          ) : (
            <AlignRight className="text-gray-800" />
          )}
        </span>
      </div>

      <SideMenu
        openSideMenu={openSideMenu}
        setOpenSideMenu={setOpenSideMenu}
        toggleSideMenu={toggleSideMenu}
      />
    </>
  );
};

export default MobileNav;
