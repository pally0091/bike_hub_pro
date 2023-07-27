/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";

const Bike = ({ bike }) => {
  const { bikeName, model, details, image, spc, price } = bike;
  return (
    <div className="relative border border-white px-3 py-2 rounded-md b-card">
      <h1 className="my-2 text-2xl italic font-semibold text-black shadow-inner shadow-black py-1 rounded-tl-full rounded-br-full bg-white">
        {bikeName}
      </h1>
      <div className="w-[90%] h-56 mx-auto">
        <img
          className="w-full h-full rounded-md"
          src={image}
          alt=""
        />
      </div>
      <h5 className="text-white my-2 font-semibold">Model : {model}</h5>
      <p className="text-left my-1">Price : {price} INR</p>
      <hr className="w-full" />
      <hr className="w-1/2 mx-auto mt-2" />
      <div className="bg-black bg-opacity-40 py-1 px-2 rounded-md">
        <p className="my-2">{details}</p>
        <p className="my-2 text-justify">
          <span className="underline">Spacifications</span> : {spc}
        </p>
      </div>
    </div>
  );
};

export default Bike;
