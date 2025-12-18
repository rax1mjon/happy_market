import React from "react";
import { product } from "./../Home/product";
import { useState } from "react";
import { search } from "../../assets/images";

const Searching = () => {
  const ageGroups = ["all", "kids", "adults", "seniors"];
  const genders = ["all", "male", "female"];

  const [ageSelected, setAgeSelected] = useState("all");
  const [ageOpen, setAgeOpen] = useState(false);

  const [genderSelected, setGenderSelected] = useState("all");
  const [genderOpen, setGenderOpen] = useState(false);

  return (
    <>
      <div className="custom_container flex">
        <div className="flex flex-col w-120 h-110 p-12  container border-2 border-gray-200 rounded-2xl">
          <div className="flex gap-3 items-center mb-6">
            <img src={search} alt="search" className="w-6.25" />
            <p className="text-[19px] font-semibold">Searching Results</p>
          </div>

          {/* Select Filter */}
          <div className="flex flex-col gap-6 w-62.5 p-4">
            {/* Age Select */}
            <div className="relative">
              <label className="block mb-2 font-medium text-gray-700">
                Age Groups
              </label>
              <div
                className="bg-gray-200 rounded px-3 py-2 cursor-pointer border border-gray-300 flex justify-between items-center"
                onClick={() => setAgeOpen(!ageOpen)}
              >
                {ageSelected === "all"
                  ? "All Ages"
                  : ageSelected.charAt(0).toUpperCase() + ageSelected.slice(1)}
                <span
                  className={`ml-2 text-gray-500 text-sm transform transition-transform ${
                    ageOpen ? "rotate-180" : "rotate-0"
                  }`}
                >
                  ▼
                </span>
              </div>
              {ageOpen && (
                <div className="absolute top-full left-0 w-full bg-white border border-gray-300 rounded shadow-md mt-1 z-20">
                  {ageGroups.map((opt) => (
                    <div
                      key={opt}
                      className="px-3 py-2 hover:bg-blue-100 cursor-pointer transition-colors"
                      onClick={() => {
                        setAgeSelected(opt);
                        setAgeOpen(false);
                      }}
                    >
                      {opt === "all"
                        ? "All Ages"
                        : opt.charAt(0).toUpperCase() + opt.slice(1)}
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Gender Select */}
            <div className="relative">
              <label className="block mb-2 font-medium text-gray-700">
                Gender
              </label>
              <div
                className="bg-gray-200 rounded px-3 py-2 cursor-pointer border border-gray-300 flex justify-between items-center"
                onClick={() => setGenderOpen(!genderOpen)}
              >
                {genderSelected === "all"
                  ? "All"
                  : genderSelected.charAt(0).toUpperCase() +
                    genderSelected.slice(1)}
                <span
                  className={`ml-2 text-gray-500 text-sm transform transition-transform ${
                    genderOpen ? "rotate-180" : "rotate-0"
                  }`}
                >
                  ▼
                </span>
              </div>
              {genderOpen && (
                <div className="absolute top-full left-0 w-full bg-white border border-gray-300 rounded shadow-md mt-1 z-20">
                  {genders.map((opt) => (
                    <div
                      key={opt}
                      className="px-3 py-2 hover:bg-blue-100 cursor-pointer transition-colors"
                      onClick={() => {
                        setGenderSelected(opt);
                        setGenderOpen(false);
                      }}
                    >
                      {opt === "all"
                        ? "All"
                        : opt.charAt(0).toUpperCase() + opt.slice(1)}
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
          <button
            className="mt-4 w-62.5 ml-2 text-gray-500 bg-gray-200 py-2 rounded transition-colors"
            onClick={() => {
              setAgeSelected("all");
              setGenderSelected("all");
              setAgeOpen(false);
              setGenderOpen(false);
            }}
          >
            Clear All
          </button>
        </div>
        <div className="ml-10">
          <p className="text-[50px]  text-gray-700 pb-5">Searching Results</p>
          <div className="flex flex-wrap gap-5">
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
          </div>
        </div>
      </div>
    </>
  );
};

export default Searching;
