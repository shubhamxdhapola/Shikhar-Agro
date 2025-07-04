import { Headset, Mail } from "lucide-react";
import ContactForm from '../forms/ContactForm.jsx'

const Contact = () => {
  
  return (
    <section name="contact" className="pb-28 lg:pb-36">
      <div className="mx-auto px-4 md:px-6 lg:px-8 xl:px-10 2xl:px-14">
        <div className="mb-8 sm:mb-10 md:mb-12 lg:mb-14" data-aos="fade-right">
          <span className="text-white bg-[#4b8b3b] rounded-full px-3 py-1.5 sm:px-4 sm:py-2 text-xs sm:text-sm">
            CONTACT US
          </span>
          <h2 className="font-extrabold text-3xl md:text-4xl xl:text-5xl 2xl:6xl text-gray-800 my-4">
            Have Questions? Let’s Talk.
          </h2>
        </div>

        <div className="flex flex-col md:flex-row justify-center items-center gap-10 md:gap-5 lg:gap-8">
          <div className="w-full md:w-1/2 bg-white rounded-2xl shadow-md border-b-4 border-t-4 border-[#4b8b3b] contact-form p-4 md:p-6 lg:p-8" data-aos="fade-right">
            <h2 className="text-gray-800 font-semibold text-lg mb-6">
              Get In Touch
            </h2>
            <ContactForm />
          </div>
          <div className="md:w-1/2 md:p-4 lg:p-8" data-aos="fade-left">
            <h1 className="mb-2 md:mb-4 text-4xl sm:text-5xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:7xl font-extrabold tracking-tight leading-none text-gray-800">
              <span className="text-[#4b8b3b]">Contact</span> Us for Support,
              Orders, or Queries
            </h1>
            <p className="md:text-sm lg:text-lg text-justify text-gray-800">
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
                  </span>
                  <br />
                  <span className="text-gray-600">+91&nbsp;12345 67890</span>
                </div>
              </div>
              <div className="flex items-center gap-4 bg-white p-4 rounded-full shadow-md flex-grow border-b-4 border-[#4b8b3b]">
                <span className="bg-[#4b8b3b] w-12 h-12 p-2 rounded-full text-white inline-block content-center">
                  <Mail className="mx-auto" />
                </span>
                <div>
                  <span className="font-semibold text-gray-800">Mail Us</span>{" "}
                  <br />
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
