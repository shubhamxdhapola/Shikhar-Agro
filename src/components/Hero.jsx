import { SOCIAL_HANDLES } from "../utils/data";
import { Link } from "react-scroll";

const Hero = () => {
  return (
    <section className="pt-18 md:pt-14 pb-32 lg:pb-36" name="home">
      <div className="flex flex-col gap-8 md:gap-0 md:flex-row justify-center items-center px-4 md:px-6 lg:px-8 xl:px-10 2xl:px-14">
        <div className="md:w-1/2 md:pe-3 lg:pe-5" data-aos="fade-right">
          <h1 className="text-gray-800 mb-4 text-center md:text-left font-extrabold tracking-tight leading-none text-4xl sm:text-5xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:7xl">
            Rooted in Service, Growing with{" "}
            <span className="text-[#4b8b3b]">Farmers</span>
          </h1>
          <p className="mb-6 text-gray-800 md:text-left lg:mb-8 text-sm lg:text-lg text-center">
            Farm-Fresh Goodness, Tailored Services, and Unique Specialties — All
            in One Place. From daily essentials to premium pets and personalized
            care, we deliver trust with every product.
          </p>
          <div className="text-center flex-col gap-6 md:flex-row flex items-center md:text-left md:gap-2">
            <Link
              className="px-4 py-2 text-sm lg:text-md lg:px-5 lg:py-3 text-center text-white rounded-full bg-[#4b8b3b]  cursor-pointer hover:bg-[#467a3b] duration-300 mr-3"
              to="contact"
              duration={500}
              smooth={true}
            >
              Get Started
            </Link>
            <div className="flex items-center space-x-2 md:-space-x-2">
              {SOCIAL_HANDLES.map((item, index) => (
                <a
                  key={index}
                  href={item.socialHandleUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block p-3 border-[#4b8b3b] border-1 bg-[#f3f2ef] text-gray-800 hover:text-white rounded-full content-center cursor-pointer transition-all duration-300 hover:bg-[#4b8b3b] hover:-translate-y-1"
                >
                  <span>
                    {
                      <item.icon className="duration-300 text-xl mx-auto" />
                    }
                  </span>
                </a>
              ))}
            </div>
          </div>
        </div>
        <div className="md:w-1/2 pe-0 md:p-4 lg:p-10" data-aos="fade-left">
          <img src="/farm.png" alt="heroimage" className="" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
