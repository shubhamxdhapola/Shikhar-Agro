import { Link } from "react-scroll";

const Offer = () => {
  return (
    <section className="pb-28 lg:pb-36" name="offer">
      <div className="mx-auto px-4 md:px-6 lg:px-8 xl:px-10 2xl:px-14">
        <div className="mb-8 sm:mb-10 md:mb-12 lg:mb-14" data-aos="fade-right">
          <span className="text-white bg-[#4b8b3b] rounded-full px-3 py-1.5 sm:px-4 sm:py-2 text-xs sm:text-sm">
            SPECIAL OFFER
          </span>
          <h2 className="font-extrabold text-3xl md:text-4xl xl:text-5xl 2xl:6xl text-gray-800 my-4">
            Your Special Offer Awaits
          </h2>
        </div>
        <div className="flex justify-center flex-col md:flex-row items-center bg-white rounded-xl shadow-md overflow-hidden">
          <div className="md:w-1/2 bg-green-100 text-center" data-aos="fade-right">
            <img
              src="/offerImage.png"
              alt="offer_image"
              className="w-[70%] sm:w-[50%] md:w-[85%] lg:w-[67%] mx-auto"
            />
          </div>
          <div className="md:w-1/2 text-center p-4 py-8 md:py-6 md:p-6" data-aos="fade-left">
          {/* <h3 className="flex justify-center items-center mb-6 border border-[#4b8b3b]  text-gray-800 px-4 py-2 w-fit rounded-lg text gap-2 font mx-auto  tracking-wide">
            <span><Hourglass size={20} /> </span>
            <span>Limited Time Offer</span>
          </h3> */}
            <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-4xl lg:text-5xl xl:text-6xl text-gray-800">
              The <span className="text-[#4b8b3b]">20-20-20</span> Plan
            </h1>
            <p className="mb-6 lg:mb-8 text-sm md:text-md lg:text-lg ">
              Get <strong>20 KG</strong> of premium meat every year for the next{" "}
              <strong>20 years</strong> with a one-time investment of{" "}
              <strong>₹20,000</strong> only! Perfect for families, meat lovers,
              and long-term planners.
            </p>
            <Link
              className="px-4 py-2.5 text-sm md:px-5 sm:py-3 text-center text-white rounded-full bg-[#4b8b3b] cursor-pointer hover:bg-[#467a3b] duration-300 "
              to="contact"
              duration={500}
              smooth={true}
            >
              Grab the Offer
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Offer;
