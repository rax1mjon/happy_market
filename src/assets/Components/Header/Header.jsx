import React from "react";
import { avatar, logo, search } from "../../images";
import { NavLink } from "react-router-dom";

const Header = () => {
  const handleSearchChange = (event) => {
    const query = event.target.value;
    // Implement search logic here, e.g., update state or call a search function
    console.log("Search query:", query);
  };

  return (
    <header className="fixed top-1 left-1.5 right-1.5 border rounded-lg bg-white custom_container">
      <div className="header-wrapper py-3 px-1 w-full flex justify-between items-center gap-4 ">
        <NavLink
          to="/home"
          className="flex gap-1 items-center justify-self-start border rounded-lg bg-gray-100 py-1 pr-2  transition-all duration-150 hover:shadow-md hover:-translate-x-0.2 hover:scale-102 active:scale-100 active:translate-x-0"
        >
          <div className="header-brand w-8 h-6">
            <img src={logo} alt="" />
          </div>
          <span className="whitespace-nowrap text-[12px] ">Happy Market</span>
        </NavLink>

        <form className="flex-1 w-100 min-w-0 relative ">
          <input
            className="[&::-webkit-search-cancel-button]:hidden [&::-webkit-search-cancel-button]:appearance-none p-1 pl-8 placeholder:text-[14px]  focus:outline-none focus:border focus:border-black rounded-lg text-gray-700/70 text-[12px] focus:bg-gray-300/20 transition-all duration-150  shadow-[0_4px_5px_-1px_rgba(0,0,0,0.2)] w-full"
            type="search"
            placeholder="search product ..."
            onChange={(e) => handleSearchChange(e)}
          />
          <span class="absolute left-2 top-1/2 -translate-y-1/2 text-gray-400">
            <img src={search} alt="" />
          </span>
        </form>

        <div className="flex gap-1.5 items-center">
          <img className="w-6 h-6 rounded-[50%] border" src={avatar} alt="" />
          <span className="whitespace-nowrap">profile_name</span>
        </div>
      </div>
    </header>
  );
};

export default Header;
