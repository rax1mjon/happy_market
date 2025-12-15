import React from "react";
import { logo } from "../../images";
import { NavLink } from "react-router-dom";

const Footer = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    // Implement form submission logic here
    console.log("Form submitted");
  };
  return (
    <footer className="custom_container">
      <div className="footer-wrapper py-3 px-3 w-full flex flex-col justify-center items-center gap-4 border rounded-lg z-50 bg-white">
        <div className="flex gap-3 justify-around items-center w-full">
          <div className="flex flex-col flex-1 gap-2 items-start">
            <NavLink
              to="/home"
              className="flex gap-1 items-center justify-self-start border rounded-lg bg-gray-100 py-1 pr-2  transition-all duration-150 hover:shadow-md hover:-translate-x-0.2 hover:scale-102 active:scale-100 active:translate-x-0"
            >
              <div className="header-brand w-8 h-6">
                <img src={logo} alt="" />
              </div>
              <span className="whitespace-nowrap text-[12px] ">
                Happy Market
              </span>
            </NavLink>

            <div className=" w-[100%] h-50 bg-gray-200 rounded "></div>
          </div>

          <form className="flex flex-col gap-2">
            <input
              className="p-1 pl-2 placeholder:text-[14px]  focus:outline-none border border-black/10 focus:border-black rounded-lg text-gray-700/70 text-[12px] focus:bg-gray-300/20 transition-all duration-150  shadow-[0_4px_5px_-1px_rgba(0,0,0,0.2)] w-full"
              type="text"
              placeholder="Your name"
            />
            <input
              className="p-1 pl-2 placeholder:text-[14px]  focus:outline-none border border-black/10 focus:border-black rounded-lg text-gray-700/70 text-[12px] focus:bg-gray-300/20 transition-all duration-150  shadow-[0_4px_5px_-1px_rgba(0,0,0,0.2)] w-full"
              type="mail"
              placeholder="Your email"
            />
            <textarea
              className="resize-none p-1 pl-2 placeholder:text-[14px] h-20  focus:outline-none border border-black/10 focus:border-black rounded-lg text-gray-700/70 text-[12px] focus:bg-gray-300/20 transition-all duration-150  shadow-[0_4px_5px_-1px_rgba(0,0,0,0.2)] w-full"
              name=""
              id=""
              placeholder="Enter your opinions"
            ></textarea>
            <button
              type="submit"
              onClick={(e) => handleSubmit(e)}
              class="relative bottom-0 flex justify-center items-center gap-2 border border-black-10 hover:border-[#000] rounded-xl text-[#FFF] font-black bg-blue-400 uppercase px-8 py-4 z-10 overflow-hidden ease-in-out duration-700 group hover:text-[#000] hover:bg-[#FFF] active:scale-65 active:duration-0 focus:bg-[#FFF] focus:text-[#000] isolation-auto before:absolute before:w-full before:transition-all before:duration-700 before:hover:w-full before:-left-full before:hover:left-0 before:rounded-full before:bg-[#FFF] before:-z-10 before:aspect-square before:hover:scale-150 before:hover:duration-700 scale-75"
            >
              <span class="truncate eaes-in-out duration-300 group-active:-translate-x-96 group-focus:translate-x-96">
                Send Message
              </span>
              <div class="absolute flex flex-row justify-center items-center gap-2 -translate-x-96 eaes-in-out duration-300 group-active:translate-x-0 group-focus:translate-x-0">
                <div class="animate-spin size-4 border-2 border-[#000] border-t-transparent rounded-full"></div>
                Processing...
              </div>
              <svg
                class="fill-[#FFF] group-hover:fill-[#000] group-hover:-translate-x-0 group-active:translate-x-96 group-active:duration-0 group-focus:translate-x-96 group-focus:fill-[#000] ease-in-out duration-200"
                stroke="currentColor"
                fill="currentColor"
                stroke-width="0"
                viewBox="0 0 512 512"
                height="16"
                width="16"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="m476.59 227.05-.16-.07L49.35 49.84A23.56 23.56 0 0 0 27.14 52 24.65 24.65 0 0 0 16 72.59v113.29a24 24 0 0 0 19.52 23.57l232.93 43.07a4 4 0 0 1 0 7.86L35.53 303.45A24 24 0 0 0 16 327v113.31A23.57 23.57 0 0 0 26.59 460a23.94 23.94 0 0 0 13.22 4 24.55 24.55 0 0 0 9.52-1.93L476.4 285.94l.19-.09a32 32 0 0 0 0-58.8z"></path>
              </svg>
            </button>
          </form>
        </div>

        <span className="text-[12px] text-gray-500">
          &copy; 2025/2026 Happy Market. All rights reserved.
        </span>
      </div>
    </footer>
  );
};

export default Footer;
