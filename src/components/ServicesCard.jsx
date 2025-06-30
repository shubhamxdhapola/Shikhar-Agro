const ServicesCard = ({ service }) => {
  return (
    <div className="bg-white rounded-lg p-6 text-center shadow-md mx-1 md:mx-2 lg:mx-0">
      <span className="bg-green-500">
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

export default ServicesCard;
