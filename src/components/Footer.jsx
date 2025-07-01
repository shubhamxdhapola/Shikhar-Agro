import { IoLogoInstagram } from "react-icons/io";
import { RiTwitterXLine } from "react-icons/ri";
import { FaFacebookSquare } from "react-icons/fa";
import { MdEmail, MdMyLocation } from "react-icons/md";
import { PiPhoneCallBold } from "react-icons/pi";
import { Link } from "react-scroll";

const Footer = () => {
  const quickLinks = [
    { to: "offer", text: "Offer" },
    { to: "services", text: "Services" },
    { to: "contact", text: "Contact Us" },
  ];

  const contactInfo = [
    { href: "tel:+91XXXXXXX", text: "+91 XXXXX XXXXX", icon: PiPhoneCallBold },
    {
      href: "mailto:shikharagro@gmail.com",
      text: "help@shikharagro.com",
      icon: MdEmail,
    },
    {
      href: "location",
      text: "Jabalpur, Madhya Pradesh, India",
      icon: MdMyLocation,
    },
  ];

  const SOCIAL_HANDLES = [
    {
      socialHandleUrl: "https://www.facebook.com",
      icon: FaFacebookSquare,
    },
    {
      socialHandleUrl: "https://www.instagram.com",
      icon: IoLogoInstagram,
    },
    {
      socialHandleUrl: "https://www.x.com",
      icon: RiTwitterXLine,
    },
  ];

  return (
    <footer className="bg-white rounded-t-4xl shadow-xl py-10 px-4 md:px-6 lg:px-8 xl:px-10 2xl:px-14">
      <div className="mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 px-4">
        {/* Left section */}
        <div className="md:mx-auto mb-5 md:mb-3" data-aos="fade-right">
          <h3 className="logo text-xl md:text-2xl text-[#4b8b3b] mb-1">
            Shikhar Agro
          </h3>
          <p className="text-gray-600 mb-4">
            Your trusted partner in agricultural excellence.
          </p>
          <h3 className="text text-gray-800 mb-2">Follow Us</h3>
          <div className="flex items-center space-x-4">
            {SOCIAL_HANDLES.map((item, index) => (
              <a
                key={index}
                href={item.socialHandleUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#4b8b3b] duration-300"
              >
                <item.icon className="h-5 w-5" />
              </a>
            ))}
          </div>
        </div>

        {/* Middle Section */}
        <div className="md:mx-auto mb-5 md:mb-3" data-aos="fade-right">
          <h3 className="text font-semibold text-gray-800">Quick Links</h3>
          <ul className="space-y-2 mt-3">
            {quickLinks.map((item, index) => (
              <li key={index}>
                <Link
                  to={item.to}
                  duration={500}
                  smooth={true}
                  className="hover:text-[#4b8b3b] text-gray-800 duration-300 cursor-pointer"
                >
                  {item.text}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Right Section */}
        <div className="md:mx-auto mb-5 md:mb-3" data-aos="fade-right">
          <p className="text font-semibold text-gray-800 mb-3">Contact Info</p>
          {contactInfo.map((item, index) => (
            <p className="mb-2" key={index}>
              <item.icon className="inline-block mr-2 " />
              <a
                href={item.href}
                target="_blank"
                className="text-gray-800 hover:text-[#4b8b3b] cursor-pointer duration-300"
              >
                {item.text}
              </a>
            </p>
          ))}
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="mx-auto mt-6 px-4 lg:px-0 border-t border-gray-200 pt-6">
        <p className="text-gray-800 text tracking-tight text-center">
          &copy; {new Date().getFullYear()}, Shikhar Agro. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
