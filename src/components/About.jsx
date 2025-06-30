
const About = () => {
  return (
    <section className="pb-24 lg:pb-36" name="about">
      <div className="mx-auto px-4 md:px-6 lg:px-8 xl:px-10 2xl:px-14">
        <div className="mb-4 sm:mb-6 md:mb-8 lg:mb-10">
          <span className="text-white bg-[#4b8b3b] rounded-full px-3 py-1.5 sm:px-4 sm:py-2 text-xs sm:text-sm">
            ABOUT US
          </span>
          <h2 className="font-extrabold text-3xl md:text-4xl xl:text-5xl 2xl:6xl text-gray-800 my-4">
            Who We Are
          </h2>
        </div>
        <div className="flex flex-col md:flex-row justify-center items-center gap-4 sm:gap-8 md:gap-4 lg:gap-8">
          <div className="md:w-1/2">
            <img src="/aboutImage.png" alt="" className="w-full sm:w-[70%] md:w-[80%] mx-auto md:mx-0" />
          </div>
          <div className="md:w-1/2 flex flex-col gap-2 lg:gap-4">
            <h1 className="mb-2 md:mb-4 text-4xl sm:text-5xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:7xl font-extrabold tracking-tight leading-none text-gray-800">
              Locally Grown, Honestly{" "}
              <span className="text-[#4b8b3b]">Delivered</span>
            </h1>
            <p className="text-md lg:text-lg text-justify">
              Hi, I’m Sagar Singh, founder of Shikhar Agro, based in Jabalpur, 
              Madhya Pradesh, India. At Shikhar Agro, we’re committed to delivering
              fresh, natural, and responsibly sourced products straight from the
              heart of rural India. We offer a wide range of services — from
              premium quality milk, eggs, and oils to specialty products like
              dry powders, silage, and well-bred dog breeds. We also provide dog
              care, training, and rural tourism experiences. Our goal is to
              combine traditional farming values with modern quality standards
              to build a healthier, more sustainable future — one product at a
              time.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
