/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React from "react";
import bannerbike from "../../assets/IMGS/header-bike.png";
import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <div className="flex flex-col-reverse lg:flex-row md:flex-rowitems-center lg:w-10/12 md:w-[95%] max-[425px]:w-full mx-auto py-10 border-b">
      <div className="lg:w-1/2 md:w-1/2 max-[425px]:w-[95%] m-auto text-left">
        <h1
          id="banner-name"
          className="text-5xl text-white my-4 font-bold "
        >
          Bike Hub <span className="text-red-500">Pro</span>
        </h1>
        <p className="text-lg">
          Your Bike's Best Friend : Welcome to Bike Hub Pro!
        </p>
        <div className="w-1/4 mt-3">
          <Link to="/bikes">
            <button className="bg-red-400 py-2 px-4 w-full rounded-full hover:bg-red-300 hover:text-black transition-all duration-500">
              Show All
            </button>
          </Link>
        </div>
      </div>
      <div className="lg:w-1/2 md:w-1/2 max-[425px]:w-[95%] m-auto">
        <img
          src={bannerbike}
          alt="banner nike"
        />
      </div>
    </div>
  );
};

export default Banner;
