import React, { useState, useEffect } from "react";
import LogoBtn from "../../LogoBtn/LogoBtn";
import { useNavigate } from "react-router-dom";

const LandingHeader = () => {
  const [isShrunk, setIsShrunk] = useState(false);
  const navigate = useNavigate();
  useEffect(() => {
    const handleScroll = () => {
      setIsShrunk(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed left-2  right-2 z-100 transition-all duration-500 ease-in-out border rounded-2xl bg-white/90 backdrop-blur-md
      ${
        isShrunk
          ? "top-1 shadow-md border-green-200"
          : "top-4 border-transparent shadow-none"
      } custom_container`}
    >
      <div
        className={`flex flex-wrap gap-2 justify-between items-center px-6
             ${isShrunk ? "py-2" : "py-4"}      
      `}
      >
        <div
          className={`transition-transform duration-500 ${
            isShrunk ? "scale-90" : "scale-100"
          }`}
        >
          <LogoBtn lending={true} />
        </div>

        <nav className=" grid grid-cols-3 items-center justify-center mx-auto gap-8 order-1 min-[720px]:order-0">
          {["Qanday ishlaydi?", "Afzalliklar", "Sovg'alar"].map((item) => (
            <div className="min-w-0">
              <a
                key={item}
                href={`#${item
                  .replace(" ", "_")
                  .replace("?", "")
                  .toLowerCase()}`}
                className="text-sm font-semibold truncate block text-gray-600 hover:text-green-600 transition-colors relative group"
              >
                {item}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-green-500 transition-all duration-300 group-hover:w-full"></span>
              </a>
            </div>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <button
            className="text-sm font-bold text-gray-700 hover:text-blue-600 transition-colors px-4 py-2"
            onClick={() => navigate("/login")}
          >
            Kirish
          </button>
          <button
            className={`
            bg-green-600 text-white text-sm font-bold rounded-xl transition-all duration-500
            hover:bg-blue-600 hover:shadow-lg hover:shadow-blue-100 active:scale-95
            ${isShrunk ? "px-5 py-2" : "px-7 py-3"}
          `}
            onClick={() => navigate("/home")}
          >
            Boshlash
          </button>
        </div>
      </div>
    </header>
  );
};

export default LandingHeader;
