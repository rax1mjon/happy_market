import React from "react";
import { product } from "./product";

import ProductCard from "../../assets/Components/ProductCard/ProductCard";

const Home = () => {
  return (
    <section className="custom_container flex flex-col gap-5">
      <span className="text-[18px]">Category_name</span>
      <div>
        <ProductCard
          product={product}
          product_name="product_name"
          product_desc="product_desc lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          cost="$99.99"
        />
      </div>
    </section>
  );
};

export default Home;
