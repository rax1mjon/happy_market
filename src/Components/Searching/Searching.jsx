import React from "react";
import { useState } from "react";
import { search } from "../../assets/images";

const Searching = () => {
  const ageGroups = ["all", "kids", "adults", "seniors"];
  const genders = ["all", "male", "female", "unisex"];

  const [ageSelected, setAgeSelected] = useState("all");
  const [ageOpen, setAgeOpen] = useState(false);

  const [genderSelected, setGenderSelected] = useState("all");
  const [genderOpen, setGenderOpen] = useState(false);

  return (
    <>
      <div className="custom_container">
        <div className="flex flex-col w-[480px] h-[440px] p-12  border-2 border-gray-200 rounded-2xl">
          <div className="flex gap-3 items-center mb-6 r">
            <img src={search} alt="search" className="w-[35px]" />
            <p className="text-[25px] font-semibold">Searching Results</p>
          </div>

          {/* Select Filter */}
          <div className="flex flex-col gap-6 w-[250px] p-4">
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
            className="mt-4 w-[250px] ml-2 text-gray-500 bg-gray-200 py-2 rounded transition-colors"
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
      </div>
    </>
  );
};

export default Searching;
