import axios from "axios";
import { Headset, Loader2, Mail, MapPinHouse, Phone, User } from "lucide-react";
import { useState } from "react";
import toast from "react-hot-toast";

const Contact = () => {
  const defaultFormData = {
    fullName: "",
    contact: "",
    email: "",
    address: "",
  };

  const [formData, setFormData] = useState(defaultFormData);
  const [loading, setLoading] = useState(false);

  const validateForm = () => {
    if (!formData.fullName.trim()) return toast.error("Name is required");
    if (!formData.contact.trim()) return toast.error("Contact is required");
    if (!formData.address.trim()) return toast.error("Address is required");
    return true;
  };

  const handleOnSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const success = validateForm();
      if (success === true) {
        console.log(formData);
        await axios.post(
          `${import.meta.env.VITE_FORM_SUMISSION_API}`,
          formData
        );
        setLoading(false);
        toast.success("Form submitted successfully");
        setFormData(defaultFormData);
      }
    } catch (err) {
      console.log(err);
      toast.error(err.message);
      setLoading(false);
    } finally {
      setLoading(false);
    }
  };

  const handleOnChange = (e) => {
    setFormData((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <section name="contact" className="pb-28 lg:pb-36">
      <div className="mx-auto px-4 md:px-6 lg:px-8 xl:px-10 2xl:px-14">
        <div className="mb-8 sm:mb-10 md:mb-12 lg:mb-14">
          <span className="text-white bg-[#4b8b3b] rounded-full px-3 py-1.5 sm:px-4 sm:py-2 text-xs sm:text-sm">
            CONTACT US
          </span>
          <h2 className="font-extrabold text-3xl md:text-4xl xl:text-5xl 2xl:6xl text-gray-800 my-4">
            Have Questions? Let’s Talk.
          </h2>
        </div>

        <div className="flex flex-col md:flex-row justify-center items-center gap-10 md:gap-5 lg:gap-8">
          <div className="w-full md:w-1/2 bg-white rounded-2xl shadow-md border-b-4 border-t-4 border-[#4b8b3b] contact-form p-4 md:p-6 lg:p-8">
            <h2 className="text-gray-800 font-semibold text-lg mb-6">
              Get In Touch
            </h2>
            <form onSubmit={handleOnSubmit} method="POST">
              <div className="mb-4">
                <label
                  htmlFor="full-name"
                  className="block ml-1 mb-1 text-sm font-medium text-gray-700"
                >
                  Name
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                    <User className="text-gray-500" size={18} />
                  </div>
                  <input
                    type="text"
                    id="full-name"
                    name="fullName"
                    onChange={handleOnChange}
                    value={formData.fullName}
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg w-full ps-11 p-3"
                    placeholder="Enter your full name"
                  />
                </div>
              </div>

              <div className="mb-4">
                <label
                  htmlFor="contact"
                  className="block ml-1 mb-1 text-sm font-medium text-gray-700"
                >
                  Contact
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                    <Phone className="text-gray-500" size={18} />
                  </div>
                  <input
                    name="contact"
                    type="number"
                    id="contact"
                    onChange={handleOnChange}
                    value={formData.contact}
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg w-full ps-11 p-3"
                    placeholder="Enter your contact number"
                  />
                </div>
              </div>
              <div className="mb-4">
                <label
                  htmlFor="email"
                  className="block ml-1 mb-1 text-sm font-medium text-gray-700"
                >
                  Email
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                    <Mail className="text-gray-500" size={18} />
                  </div>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    onChange={handleOnChange}
                    value={formData.email}
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg w-full ps-11 p-3"
                    placeholder="Enter your email address"
                  />
                </div>
              </div>

              <div className="mb-4">
                <label
                  htmlFor="address"
                  className="block ml-1 mb-1 text-sm font-medium text-gray-700"
                >
                  Address
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                    <MapPinHouse className="text-gray-500" size={18} />
                  </div>
                  <input
                    type="text"
                    id="address"
                    name="address"
                    onChange={handleOnChange}
                    value={formData.address}
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg w-full ps-11 p-3"
                    placeholder="Enter your address"
                  />
                </div>
              </div>

              <button
                disabled={loading}
                className={`px-5 py-2 font-medium w-full text-center text-white rounded-lg  duration-300 mt-2 ${
                  loading
                    ? "cursor-not-allowed bg-gray-500 text-white/80"
                    : "bg-[#4b8b3b] hover:bg-[#487a3b] cursor-pointer"
                }`}
              >
                {loading ? (
                  <span className="flex justify-center items-center gap-2">
                    <Loader2 className="animate-spin" /> Submitting...
                  </span>
                ) : (
                  <span>Submit Form</span>
                )}
              </button>
            </form>
          </div>
          <div className="md:w-1/2 md:p-4 lg:p-8">
            <h1 className="mb-2 md:mb-4 text-4xl sm:text-5xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:7xl font-extrabold tracking-tight leading-none text-gray-800">
              <span className="text-[#4b8b3b]">Contact</span> Us for Support,
              Orders, or Queries
            </h1>
            <p className="md:text-sm lg:text-lg text-justify">
              We’re Here to Help — Let’s Connect! Have questions, feedback, or
              looking to place an order? We’d love to hear from you! At Shikhar
              Agro, we’re committed to providing you with quality products and
              prompt support. For orders or inquiries, feel free to email us,
              message us, or call us directly — we’re always ready to assist
              you. Let’s grow together — reach out anytime!
            </p>

            <div className="flex gap-4 justify-between items-center mt-8 lg:mt-[50px] flex-wrap">
              <div className="flex items-center gap-4 bg-white p-4 rounded-full shadow-md flex-grow border-b-4 border-[#4b8b3b]">
                <span className="bg-[#4b8b3b] w-12 h-12 p-2 rounded-full text-white inline-block content-center">
                  <Headset className="mx-auto" />
                </span>
                <div>
                  <span className="font-semibold text-gray-800">
                    Contact Us
                  </span><br />
                  <span className="text-gray-600">+91&nbsp;12345 67890</span>
                </div>
              </div>
              <div className="flex items-center gap-4 bg-white p-4 rounded-full shadow-md flex-grow border-b-4 border-[#4b8b3b]">
                <span className="bg-[#4b8b3b] w-12 h-12 p-2 rounded-full text-white inline-block content-center">
                  <Mail className="mx-auto" />
                </span>
                <div>
                  <span className="font-semibold text-gray-800">Mail Us</span> <br />
                  <span className="text-gray-600">shikharagro@help.com</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
