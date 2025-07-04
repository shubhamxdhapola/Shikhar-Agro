import axios from "axios";
import { Loader2, Mail, MapPinHouse, Phone, User } from "lucide-react";
import { useState } from "react";
import toast from "react-hot-toast";
import ContactFormInput from "../Inputs/ContactFormInput";

const ContactForm = () => {
    
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
    <form onSubmit={handleOnSubmit} method="POST">
      <ContactFormInput
        label="Name"
        type="text"
        id="full-name"
        name="fullName"
        Icon={User}
        value={formData.fullName}
        onChange={handleOnChange}
        placeholder="Enter your full name"
      />
      <ContactFormInput
        label="Contact"
        type="number"
        id="contact"
        name="contact"
        Icon={Phone}
        value={formData.contact}
        onChange={handleOnChange}
        placeholder="Enter your contact number"
      />
      <ContactFormInput
        label="Email"
        type="email"
        id="email"
        name="email"
        Icon={Mail}
        value={formData.email}
        onChange={handleOnChange}
        placeholder="Enter your email address"
      />
      <ContactFormInput
        label="Address"
        type="text"
        id="address"
        name="address"
        Icon={MapPinHouse}
        value={formData.address}
        onChange={handleOnChange}
        placeholder="Enter your address"
      />

      <button
        disabled={loading}
        className={`px-5 py-2 font-medium w-full text-center text-white rounded-lg duration-300 mt-2 text-sm md:text-md ${
          loading
            ? "cursor-not-allowed bg-gray-500 text-white/80"
            : "bg-[#4b8b3b] hover:bg-[#487a3b] cursor-pointer"
        }`}
      >
        {loading ? (
          <span className="flex justify-center items-center gap-2">
            <Loader2 className="animate-spin" size={20} /> Submitting...
          </span>
        ) : (
          <span>Submit Form</span>
        )}
      </button>
    </form>
  );
};

export default ContactForm;
