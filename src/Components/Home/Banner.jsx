/* eslint-disable react/no-unknown-property */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React from "react";
import bike1 from "../../assets/IMGS/header-bike.png";
import bike2 from "../../assets/IMGS/bike-5.png";
import bike3 from "../../assets/IMGS/bike-6.png";
import bike4 from "../../assets/IMGS/bike-7.png";
import bike5 from "../../assets/IMGS/bike-8.png";

import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <div className="flex flex-col-reverse lg:flex-row md:flex-rowitems-center lg:w-10/12 md:w-[95%] max-[425px]:w-full mx-auto py-10 border-b">
      <div className="w-[95%] md:w-1/2 lg:w-1/2 m-auto text-left">
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
      <div className="w-[95%] md:w-1/2 lg:w-1/2 m-auto text-left">
        <div uk-slideshow="animation: fade; autoplay: true; autoplay-interval: 2500">
          <div
            class="uk-position-relative uk-visible-toggle uk-light"
            tabindex="-1"
          >
            <ul class="uk-slideshow-items">
              <li>
                <img
                  src={bike1}
                  alt=""
                  uk-cover
                />
              </li>
              <li>
                <img
                  src={bike5}
                  alt=""
                  uk-cover
                />
              </li>
              <li>
                <img
                  src={bike4}
                  alt=""
                  uk-cover
                />
              </li>
              <li>
                <img
                  src={bike3}
                  alt=""
                  uk-cover
                />
              </li>
              <li>
                <img
                  src={bike2}
                  alt=""
                  uk-cover
                />
              </li>
            </ul>

            <a
              class="uk-position-center-left uk-position-small uk-hidden-hover"
              href="#"
              uk-slidenav-previous
              uk-slideshow-item="previous"
            ></a>
            <a
              class="uk-position-center-right uk-position-small uk-hidden-hover"
              href="#"
              uk-slidenav-next
              uk-slideshow-item="next"
            ></a>
          </div>

          <ul class="uk-slideshow-nav uk-dotnav uk-flex-center uk-margin"></ul>
        </div>
      </div>
    </div>
  );
};

export default Banner;
