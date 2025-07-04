const HomeServicesCard = ({ service }) => {
  
  return (
    <div className="bg-white rounded-4xl p-6 text-center shadow hover:drop-shadow-lg hover:scale-105 duration-300 cursor-pointer mx-1 md:mx-2 lg:mx-0">
      <span className="">
        {
          <service.icon className="bg-[#4b8b3b] mx-auto text-white w-12 h-12 rounded-full p-3" />
        }
      </span>
      <h2 className="text-lg font-semibold mt-4">{service.service}</h2>
      {/* <span className="text-sm text-gray-600">{service.examples}</span> */}
      <p className="text-gray-600 mt-2">{service.description}</p>
    </div>
  );
};

export default HomeServicesCard;
