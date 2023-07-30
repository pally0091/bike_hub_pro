/* eslint-disable no-unused-vars */
import React from "react";
import bike1 from "../../assets/IMGS/bike-1.png";
import bike2 from "../../assets/IMGS/bike-2.png";
import bike3 from "../../assets/IMGS/bike-3.png";
import { Link } from "react-router-dom";

const BestBike = () => {
  return (
    <div>
      <hr />
      <h3 className="text-3xl text-white italic">Our Best Selling Bikes</h3>
      <hr />
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 w-[95%] sm:w-[95%] md:w-10/12 lg:9/12 gap-4 mx-auto my-10">
        <div className="p-2 border rounded-md">
          <img
            src={bike1}
            alt=""
          />
        </div>
        <div className="p-2 border rounded-md">
          <img
            src={bike2}
            alt=""
          />
        </div>
        <div className="p-2 border rounded-md">
          <img
            src={bike3}
            alt=""
          />
        </div>
      </div>
      <div className="w-1/4 mt-3 mx-auto py-4">
        <Link to="/bikes">
          <button className="bg-red-400 py-2 px-4 w-full rounded-full hover:bg-red-300 hover:text-black transition-all duration-500">
            Show All
          </button>
        </Link>
      </div>
    </div>
  );
};

export default BestBike;
<p>Best Bikes </p>;
