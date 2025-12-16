import React, { useState, useEffect } from "react";
import { avatar, search } from "../../images";
import LogoBtn from "../LogoBtn/LogoBtn";

const Header = () => {
  const [isShrunk, setIsShrunk] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsShrunk(window.scrollY > 40);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleSearchChange = (event) => {
    const query = event.target.value;
    console.log("Search query:", query);
  };

  return (
    <header
      className={`fixed left-1.5 right-1.5 z-50 border rounded-lg bg-white/95 backdrop-blur-sm transition-all duration-500 ease-in-out
      ${
        isShrunk
          ? "top-2 py-2 shadow-md border-red-200"
          : "top-1 py-5 border-gray-200 shadow-sm"
      } custom_container`}
    >
      <div
        className={`header-wrapper px-2 w-full flex justify-between items-center gap-4 transition-all duration-500 
        ${isShrunk ? "scale-[0.98] py-1.5" : "scale-100 py-4"}`}
      >
        <div
          className={`transition-transform duration-500 ${
            isShrunk ? "scale-90" : "scale-100"
          }`}
        >
          <LogoBtn />
        </div>

        <form className="flex-1 w-100 min-w-0 relative group">
          <input
            className={`
              w-full pl-10 pr-4 rounded-xl border-2 border-gray-100 bg-gray-50 
              text-sm text-gray-700 placeholder:text-gray-400
              transition-all duration-500 ease-in-out
              shadow-[0_4px_6px_-1px_rgba(0,0,0,0.1)]
              focus:outline-none focus:bg-white focus:border-green-500 
              focus:ring-4 focus:ring-green-100 focus:scale-[1.01] 
              ${isShrunk ? "p-1.5" : "p-2"} 
              [&::-webkit-search-cancel-button]:hidden [&::-webkit-search-cancel-button]:appearance-none`}
            type="search"
            placeholder="Mahsulotlarni qidirish..."
            onChange={(e) => handleSearchChange(e)}
          />

          <span className="absolute left-3 top-1/2 -translate-y-1/2 transition-all duration-300 group-focus-within:scale-110 w-5 h-5 flex items-center justify-center">
            <img
              src={search}
              alt="search"
              className="transition-all duration-300 filter group-focus-within:sepia-[1] group-focus-within:hue-rotate-320 group-focus-within:saturate-[5]"
            />
          </span>
          <div className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-red-500 transition-all duration-500 group-focus-within:w-[60%] group-focus-within:-translate-x-1/2 rounded-full" />
        </form>

        <div
          className={`flex gap-2 items-center group cursor-pointer p-1 pr-3 rounded-xl transition-all duration-500 hover:bg-gray-50 
          ${isShrunk ? "scale-90" : "scale-100"}`}
        >
          <div className="relative">
            <img
              className="w-8 h-8 rounded-full border-2 border-green-500 p-0.5 object-cover
                 transition-all duration-300 ease-out
                 group-hover:rotate-12 group-hover:scale-110 group-hover:border-blue-500 shadow-sm"
              src={avatar}
              alt="profile"
            />
            <span className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-green-500 border-2 border-white rounded-full"></span>
          </div>

          <div className="flex flex-col">
            <span className="whitespace-nowrap text-sm font-semibold text-gray-700 transition-all duration-300 group-hover:text-blue-600 group-hover:translate-x-1">
              profile_name
            </span>
            <div className="h-0.5 w-0 bg-green-500 transition-all duration-300 group-hover:w-full group-hover:bg-blue-500 rounded-full" />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
