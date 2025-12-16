import React from "react";
import { product } from "./product";

const Home = () => {
  return (
    <section className="flex items-center justify-center mb-20">
      <div
        className="group shadow-md rounded-lg p-4 flex flex-col gap-3 w-60 bg-white
            transition-all duration-500 ease-out 
            /* Ring o'lchamni buzmaydi, rotate esa nozik qiyalik beradi */
            hover:ring-1 hover:ring-green-400 hover:shadow-lg
            hover:rotate-[1.5deg]"
      >
        <div className="w-full h-32 overflow-hidden rounded-md">
          <img
            src={product}
            alt="product"
            className="w-full h-full object-cover transition-transform duration-700 
                 group-hover:scale-110 group-hover:-rotate-1"
          />
        </div>

        <div className="flex flex-col gap-2">
          <h2 className="text-[18px] font-semibold text-gray-800 transition-colors duration-300 group-hover:text-green-600">
            product name
          </h2>
          <p className="line-clamp-2 w-full text-[12px] text-gray-500">
            product description about, product description about...
          </p>

          <div className="flex justify-between items-center mt-1">
            <span className="text-lg font-bold text-red-500">$99.99</span>
            <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
          </div>

          <button
            className="w-full border border-green-500 bg-green-500 text-white rounded py-1.5 font-medium 
                       transition-all duration-300 
                       hover:bg-white hover:text-green-600 
                       active:scale-95"
          >
            See Product
          </button>
        </div>
      </div>
    </section>
  );
};

export default Home;
