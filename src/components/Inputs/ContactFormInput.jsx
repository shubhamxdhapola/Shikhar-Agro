const ContactFormInput = ({
  label,
  type,
  id,
  name,
  Icon,
  value,
  onChange,
  placeholder,
}) => {
  return (
    <div className="mb-4">
      <label
        htmlFor={id}
        className="block ml-1 mb-1 text-sm font-medium text-gray-700"
      >
        {label}
      </label>
      <div className="relative">
        <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
          {<Icon className="text-gray-500" size={18} />}
        </div>
        <input
          type={type}
          id={id}
          name={name}
          onChange={onChange}
          value={value}
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg w-full ps-11 p-3"
          placeholder={placeholder}
        />
      </div>
    </div>
  );
};

export default ContactFormInput;
