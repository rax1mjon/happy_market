import React from "react";
import { product } from "./product";

const Home = () => {
  return (
    <section className="flex items-center justify-center mb-20">
      <div className=" shadow-lg rounded-lg p-4 flex flex-col gap-2 w-60">
        <div className="w-full h-30 overflow-hidden rounded-md">
          <img src={product} alt="" />
        </div>

        <div className="flex flex-col gap-1">
          <h2 className="text-[20px]">product name</h2>
          <p className="line-clamp-2 w-55 text-[12px]">
            product description about,product description about,product
            description about{" "}
          </p>
          <span className="text-sm self-end text-amber-700 text-shadow-blue-900">$99.99</span>

          <button className="border rounded py-1">See Product</button>
        </div>
      </div>
    </section>
  );
};

export default Home;
