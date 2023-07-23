/* eslint-disable no-unused-vars */
import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <div>
      <div className="navbar bg-gradient-to-r from-slate-200 to-slate-700">
        <Link to="/">
          <button
            id="nav-btn"
            className=" normal-case border-4 border-double border-white px-4 rounded-3xl hover:bg-slate-500 transition-all duration-700"
          >
            <p id="nav-name">Bike Hub</p>
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Nav;
