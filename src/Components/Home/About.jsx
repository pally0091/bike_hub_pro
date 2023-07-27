/* eslint-disable react/no-unknown-property */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React from "react";
import bike3 from "../../assets/IMGS/bike-3.png";

const About = () => {
  return (
    <div className="flex lg:w-10/12 max-[425px]:w-11/12 lg:flex-row max-[425px]:flex-col mx-auto items-center my-10 ">
      {/* Bike Section */}
      <div
        className="lg:w-1/2 max-[425px]:w-11/12 mx-auto p-4"
        uk-scrollspy="cls: uk-animation-slide-left; repeat: true"
      >
        <img
          src={bike3}
          alt="Bike"
        />
      </div>

      {/* About Section */}
      <div
        className="lg:w-1/2 max-[425px]:w-11/12 mx-auto py-10 px-6 text-justify bg-black bg-opacity-60 rounded-2xl"
        uk-scrollspy="cls: uk-animation-slide-right; repeat: true"
      >
        <h1 className="text-white text-3xl text-center underline my-4 ">
          About
        </h1>
        <p className="my-2">
          At Bike Hub, we are your one-stop-shop for all things biking. From
          top-quality bikes to essential accessories, we've got everything you
          need to enhance your biking experience.
        </p>
        <p className="my-2">
          Our shop offers a wide selection of bikes, catering to various styles
          and preferences. Whether you're a casual rider or a seasoned cyclist,
          we have the perfect ride for you.
        </p>
        <p className="my-2">
          Discover the joy of biking with us. Visit Bike Hub today and explore
          our exciting collection of bikes and accessories. Your biking
          adventures await!
        </p>
      </div>
    </div>
  );
};

export default About;
