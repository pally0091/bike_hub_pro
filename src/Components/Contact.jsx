/* eslint-disable no-unused-vars */
import React, { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const { name, email, message } = formData;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Form submitted:", formData);
  };

  const isFormValid =
    name.trim() !== "" && email.trim() !== "" && message.trim() !== "";

  return (
    <div className="flex flex-col md:flex-row lg:flex-row items-center  w-11/12 mx-auto">
      <div className="w-full md:w-[60%] lg:w-1/2">
        <div className="flex justify-center items-center min-h-fit py-16 bg-transparent text-left">
          <form
            className="bg-white bg-opacity-40 shadow-md rounded px-8 pt-6 pb-8 mb-4 w-[90%] mx-auto"
            onSubmit={handleSubmit}
          >
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="name"
              >
                Name
              </label>
              <input
                className="shadow appearance-none bg-white border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="name"
                type="text"
                name="name"
                placeholder="Your Name"
                value={name}
                onChange={handleChange}
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="email"
              >
                Email
              </label>
              <input
                className="shadow appearance-none bg-white border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="email"
                type="email"
                name="email"
                placeholder="Your Email"
                value={email}
                onChange={handleChange}
              />
            </div>
            <div className="mb-6">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="message"
              >
                Message
              </label>
              <textarea
                className="shadow appearance-none bg-white border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="message"
                name="message"
                rows="5"
                placeholder="Your Message"
                value={message}
                onChange={handleChange}
              ></textarea>
            </div>
            <div className="flex items-center justify-center">
              <button
                className={`bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline ${
                  isFormValid ? "" : "opacity-50 cursor-not-allowed"
                }`}
                type="submit"
                disabled={!isFormValid}
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
      <div className="flex flex-wrap justify-center items-center min-h-fit py-16 bg-transparent w-full md:w-[40%] lg:w-1/2  gap-5 text-black text-center ">
        <div className="px-4 w-[90%] md:w-[90%] lg:w-[45%] h-28 py-8 bg-white bg-opacity-60 rounded-md hover:-translate-y-3 hover:scale-105 transition-all duration-300">
          <p>A-36, xyz moto plaza, UAE</p>
        </div>
        <div className="px-4 w-[90%] md:w-[90%] lg:w-[45%] h-28 py-8  bg-white bg-opacity-60 rounded-md hover:-translate-y-3 hover:scale-105 transition-all duration-300">
          <p>bikehub1@bikhub.com</p>
          <p>bike_help@bikhub1.com</p>
        </div>
        <div className=" px-4 w-[90%] md:w-[90%] lg:w-[45%]  h-28 py-8 bg-white bg-opacity-60 rounded-md hover:-translate-y-3 hover:scale-105 transition-all duration-300">
          <p>+1-258369654</p>
          <p>+1-258963456</p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
