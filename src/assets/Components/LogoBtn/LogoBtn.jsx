import React from "react";
import { logo } from "../../images";
import { NavLink } from "react-router-dom";

const LogoBtn = () => {
  return (
    <NavLink
      to="/home"
      className="
    group flex gap-0.5 items-center justify-self-start 
    border-2 border-transparent bg-gray-100 py-1 pr-3 sm:pr-0 lg:pr-3 rounded-xl
    transition-all duration-300 
    hover:bg-white hover:border-green-500 
    hover:shadow-[0_8px_15px_-3px_rgba(34,197,94,0.2)] 
    hover:scale-105 hover:-translate-y-0.5
    active:scale-95 active:translate-y-0"
    >
      <div className="header-brand w-14 transition-transform duration-300 group-hover:rotate-[-5deg] group-hover:scale-110">
        <img src={logo} alt="Happy Market Logo" />
      </div>

      <span
        className="
    sm:hidden lg:block  whitespace-nowrap text-sm font-bold 
    text-gray-800 transition-all duration-300 
    group-hover:text-red-600 group-hover:translate-x-1"
      >
        Happy Market
      </span>
    </NavLink>
  );
};

export default LogoBtn;
