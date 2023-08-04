/* eslint-disable no-unused-vars */
import React from "react";

const Service = () => {
  const services = [
    {
      name: "Basic Tune-Up",
      description:
        "Includes adjustments to brakes, gears, and minor wheel truing.",
      price: 50,
    },
    {
      name: "Comprehensive Tune-Up",
      description:
        "Complete inspection, cleaning, and adjustments to all components.",
      price: 80,
    },
    {
      name: "Flat Tire Repair",
      description: "Patching or replacing inner tubes and fixing punctures.",
      price: 15,
    },
    {
      name: "Brake Service",
      description:
        "Adjusting, replacing brake pads, and bleeding hydraulic brakes.",
      price: 40,
    },
    {
      name: "Gear Adjustments",
      description: "Fine-tuning the shifting system for smooth gear changes.",
      price: 30,
    },
    {
      name: "Wheel Truing",
      description: "Correcting wheel wobbles and ensuring proper alignment.",
      price: 25,
    },
    {
      name: "Drivetrain Cleaning",
      description:
        "Cleaning and degreasing the chain, cassette, and chainrings.",
      price: 35,
    },
    {
      name: "Fork and Shock Servicing",
      description: "Maintaining suspension components for optimal performance.",
      price: 60,
    },
  ];

  return (
    <div className="py-10">
      <h3 className="text-3xl text-white italic">Services we provide</h3>
      <hr className="border-t-4 border-b-4 my-3 border-double" />
      <div className="py-4 grid grid-cols-1 lg:grid-cols-2 gap-5 px-5 pt-8">
        {services.map((service) => (
          <div
            key={service.name}
            className="bg-black text-justify px-3 py-4 rounded-lg shadow-md shadow-gray-400 text-white bg-opacity-25 backdrop-blur-md"
          >
            <h5 className="text-white font-bold text-xl">{service.name}</h5>
            <hr className="w-1/2" />
            <p className="py-2">
              Description : <br />
              {service.description}
            </p>
            <p>Price : {service.price} USD</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Service;
