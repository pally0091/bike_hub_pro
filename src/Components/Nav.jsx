/* eslint-disable no-unused-vars */
import React from "react";
import { Link, NavLink } from "react-router-dom";

const Nav = () => {
  return (
    <div>
      {/* navbar 1  */}
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
      {/* navbar 2  */}
      <nav className="py-3 border-b-4 border-double">
        <NavLink
          to="/bikes"
          className="text-white px-3 py-1 mx-2 hover:bg-white hover:text-black transition-all duration-700"
        >
          All Bikes
        </NavLink>
      </nav>
    </div>
  );
};

export default Nav;
