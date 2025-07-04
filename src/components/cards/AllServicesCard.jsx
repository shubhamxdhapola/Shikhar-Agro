const AllServicesCard = ({ service }) => {
  
  return (
    <div className="bg-white px-6 py-5 rounded-xl shadow text-left ">
      <h1 className="text-left">
        <div className="mb-3 text-gray-800 text-lg font-semibold">
          <div className="flex items-center gap-2">
            <span className="inline-block">{service.serviceName}</span>
          </div>
        </div>
      </h1>

      {service.serviceItems.map((item, index) => (
        <div className="text-gray-700 py-1.5" key={index}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="size-4 me-2 inline-block text-green-800"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M5 13l4 4L19 7"
            />
          </svg>
          <span>{item}</span>
        </div>
      ))}
    </div>
  );
};

export default AllServicesCard;
