/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React from "react";
import bannerbike from "../../assets/IMGS/header-bike.png";

const Banner = () => {
  return (
    <div className="flex flex-row items-center w-10/12 mx-auto py-10">
      <div className="w-1/2 text-left">
        <h1 className="text-5xl text-white my-4 font-bold ">
          Bike Hub <span className="text-red-500">Pro</span>
        </h1>
        <p className="text-lg">
          Your Bike's Best Friend : Welcome to Bike Hub Pro!
        </p>
      </div>
      <div className="w-1/2">
        <img
          src={bannerbike}
          alt="banner nike"
        />
      </div>
    </div>
  );
};

export default Banner;
