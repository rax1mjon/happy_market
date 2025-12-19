import React, { useState } from "react";
import ProductCard from "../../assets/Components/ProductCard/ProductCard";
const Searching = () => {
  // Filtrlash uchun holatlar (State)
  const [isOpen, setIsOpen] = useState(false);
  const [filters, setFilters] = useState({
    age: "",
    gender: "all",
    budget: 500000,
    category: "all",
  });

  const [currentPage, setCurrentPage] = useState(1);

  return (
    <div className="custom_container pt-28 pb-10 px-4">
      <div className="flex flex-col lg:flex-row gap-8">
        <button
          onClick={() => setIsOpen(true)}
          className="lg:hidden fixed bottom-6 right-6 z-50 flex items-center gap-2 bg-green-600 text-white px-6 py-3 rounded-full shadow-2xl active:scale-95 transition-all"
        >
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z"
            />
          </svg>
          <span className="font-bold">Filtrlar</span>
        </button>

        <div
          onClick={() => setIsOpen(false)}
          className={`fixed inset-0 bg-black/40 backdrop-blur-sm z-60 transition-opacity duration-300 lg:hidden ${
            isOpen ? "opacity-100 visible" : "opacity-0 invisible"
          }`}
        />
        <aside
          className={`
          flex flex-col gap-6 bg-white p-6 border-green-50 shadow-xl lg:shadow-sm h-fit
          
          fixed inset-y-0   z-70 w-72 transform transition-transform duration-500 ease-in-out
          ${isOpen ? "translate-x-0" : "-translate-x-full"}
          
          lg:static lg:translate-x-0 lg:w-64 lg:flex lg:rounded-2xl lg:border  lg:top-24 lg:z-10
        `}
        >
          <div className="flex justify-between items-center border-b pb-2">
            <h2 className="text-lg font-bold text-gray-800">Saralash</h2>
            <button
              onClick={() => setIsOpen(false)}
              className="lg:hidden text-gray-400 hover:text-red-500"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-xs font-bold text-gray-400 uppercase">
              Yosh
            </label>
            <input
              type="number"
              className="p-2.5 bg-gray-50 border border-gray-100 rounded-xl focus:border-green-500 outline-none text-sm transition-all"
              placeholder="Masalan: 25"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-xs font-bold text-gray-400 uppercase">
              Jinsi
            </label>
            <div className="flex gap-2">
              {["Erkak", "Ayol"].map((g) => (
                <button
                  key={g}
                  className="flex-1 py-2.5 text-xs font-bold border border-gray-100 rounded-xl hover:border-green-500 hover:bg-green-50 transition-all active:scale-95"
                >
                  {g}
                </button>
              ))}
            </div>
          </div>

          {/* Byudjet filtri */}
          <div className="flex flex-col gap-2">
            <label className="text-xs font-bold text-gray-400 uppercase flex justify-between">
              Byudjet{" "}
              <span className="text-green-600 font-black">
                {filters.budget.toLocaleString()} so'm
              </span>
            </label>
            <input
              type="range"
              min="10000"
              max="5000000"
              step="10000"
              className="w-full h-2 bg-green-100 rounded-lg appearance-none cursor-pointer accent-green-600"
              onChange={(e) =>
                setFilters({ ...filters, budget: Number(e.target.value) })
              }
            />
          </div>

          {/* Kategoriya */}
          <div className="flex flex-col gap-2">
            <label className="text-xs font-bold text-gray-400 uppercase">
              Kategoriya
            </label>
            <select className="p-2.5 bg-gray-50 border border-gray-100 rounded-xl focus:border-green-500 outline-none text-sm cursor-pointer">
              <option>Texnika</option>
              <option>Oziq-ovqat</option>
              <option>Smartfonlar</option>
              <option>O'yinchoqlar</option>
            </select>
          </div>

          <button
            onClick={() => setIsOpen(false)}
            className="w-full py-4 bg-green-600 text-white rounded-xl font-bold hover:bg-blue-600 transition-all shadow-lg shadow-green-100 active:scale-95 uppercase text-xs tracking-widest mt-2"
          >
            Filtrni qo'llash
          </button>
        </aside>

        <main className="flex-1 flex flex-col gap-8">
          <div className="flex justify-between items-center bg-white p-4 rounded-xl border border-gray-100">
            <p className="text-sm text-gray-500">
              Sizning kriteriyalaringiz bo'yicha{" "}
              <span className="font-bold text-gray-800">24 ta</span> sovg'a
              topildi
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div key={i} className="flex justify-center">
                <ProductCard
                  product_name={`Sovg'a nomi ${i}`}
                  product_desc="Ushbu mahsulot aynan siz ko'rsatgan yosh va byudjetga mos keladi."
                  cost={`${(i * 500000).toFixed(0)} so'm`}
                />
              </div>
            ))}
          </div>

          <div className="flex justify-center items-center gap-2 mt-10">
            <button className="w-10 h-10 rounded-lg border border-gray-200 flex items-center justify-center hover:border-green-500 hover:text-green-500 transition-all">
              &lt;
            </button>
            {[1, 2, 3, 4].map((p) => (
              <button
                key={p}
                onClick={() => setCurrentPage(p)}
                className={`w-10 h-10 rounded-lg font-bold transition-all ${
                  currentPage === p
                    ? "bg-green-600 text-white shadow-lg shadow-green-100"
                    : "border border-gray-200 hover:border-green-500"
                }`}
              >
                {p}
              </button>
            ))}
            <button className="w-10 h-10 rounded-lg border border-gray-200 flex items-center justify-center hover:border-green-500 hover:text-green-500 transition-all">
              &gt;
            </button>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Searching;
