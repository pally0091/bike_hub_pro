/* eslint-disable no-unused-vars */
import React from "react";
import u1 from "../../assets/IMGS/user-1.png";
import u2 from "../../assets/IMGS/user-2.png";
import u3 from "../../assets/IMGS/user-3.png";

const Client = () => {
  return (
    <div>
      <h3 className="text-3xl text-white italic">Our Customers and clients</h3>
      <hr className="border-t-4 border-b-4 my-3 border-double" />
      <div className="grid lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-1 max-[425px]:grid-cols-1 gap-6 mx-auto lg:w-9/12 md:w-[95%] sm:w-[90%] max-[425px]:w-10/12 p-4">
        <card className="border border-t-red-500 border-r-red-500 border-l-blue-500 border-b-blue-500 p-8 rounded-md">
          <div className="w-32 mx-auto rounded-full border-2 border-t-blue-500 border-r-blue-500 border-b-red-500 border-l-red-500 p-2 ">
            <img
              className="w-full"
              src={u3}
              alt=""
            />
          </div>
          <p className="mt-3 text-xl c-name">Maria J. fox</p>
          <p className="mt-3">
            Lorem ipsum dolor sit amet consectetur adipisicing.
          </p>
        </card>
        <card className="border border-t-red-500 border-r-red-500 border-l-blue-500 border-b-blue-500  p-8 rounded-md">
          <div className="w-32 mx-auto rounded-full border-2 border-t-blue-500 border-r-blue-500 border-b-red-500 border-l-red-500 p-2 ">
            <img
              className="w-full"
              src={u2}
              alt=""
            />
          </div>
          <p className="mt-3 text-xl c-name">Kat White</p>
          <p className="mt-3">
            Lorem ipsum dolor sit amet consectetur adipisicing.
          </p>
        </card>
        <card className="border border-t-red-500 border-r-red-500 border-l-blue-500 border-b-blue-500 p-8 rounded-md">
          <div className="w-32 mx-auto rounded-full border-2 border-t-blue-500 border-r-blue-500 border-b-red-500 border-l-red-500 p-2 ">
            <img
              className="w-full"
              src={u1}
              alt=""
            />
          </div>
          <p className="mt-3 text-xl c-name">Benjamin T.</p>
          <p className="mt-3">
            Lorem ipsum dolor sit amet consectetur adipisicing.
          </p>
        </card>
      </div>
    </div>
  );
};

export default Client;
