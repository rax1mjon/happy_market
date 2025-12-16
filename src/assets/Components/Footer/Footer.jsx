import LogoBtn from "../LogoBtn/LogoBtn";

const Footer = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Form submitted");
  };

  return (
    <footer className="custom_container mb-4">
   
      <div className="footer-wrapper py-6 px-6 w-full flex flex-col justify-center items-center gap-6 border border-red-300 rounded-2xl z-50 bg-white transition-all duration-300 hover:shadow-md hover:shadow-green-50">
        <div className="flex gap-10 justify-around items-center w-full">
          <div className="flex flex-col flex-1 gap-4 items-start">
            <LogoBtn />
            <div className="w-full h-50 bg-gradient-to-br from-green-50 to-blue-50 rounded-xl border border-green-50"></div>
          </div>

          <form className="flex flex-col gap-2">
            <input
              className="p-1 pl-3 placeholder:text-[14px] focus:outline-none border border-gray-200 
               focus:border-green-500 focus:ring-2 focus:ring-green-100 rounded-lg 
               text-gray-700 text-[12px] focus:bg-white transition-all duration-300 
               shadow-sm w-full focus:-translate-y-0.5"
              type="text"
              placeholder="Your name"
            />

            <input
              className="p-1 pl-3 placeholder:text-[14px] focus:outline-none border border-gray-200 
               focus:border-green-500 focus:ring-2 focus:ring-green-100 rounded-lg 
               text-gray-700 text-[12px] focus:bg-white transition-all duration-300 
               shadow-sm w-full focus:-translate-y-0.5"
              type="email"
              placeholder="Your email"
            />

            <textarea
              className="resize-none p-2 pl-3 placeholder:text-[14px] h-20 focus:outline-none 
               border border-gray-200 focus:border-green-500 focus:ring-2 focus:ring-green-100 
               rounded-lg text-gray-700 text-[12px] focus:bg-white transition-all 
               duration-300 shadow-sm w-full focus:-translate-y-0.5"
              placeholder="Enter your opinions"
            ></textarea>

            <button
              type="submit"
              onClick={(e) => handleSubmit(e)}
              className="relative flex justify-center items-center gap-2 border-2 border-green-600 
               rounded-xl text-white font-black bg-green-600 uppercase px-8 py-4 
               overflow-hidden transition-all duration-300 group 
               /* Hoverda qizil emas, ko'k rang ishlatildi */
               hover:bg-white hover:text-blue-600 hover:border-blue-500
               active:scale-90 scale-75 
               isolation-auto before:absolute before:w-full before:h-full 
               before:bg-blue-50 before:left-full before:hover:left-0 
               before:transition-all before:duration-500 before:-z-10 before:ease-in-out"
            >
              <span className="truncate transition-all duration-300 group-hover:tracking-wider">
                Send Message
              </span>

              <svg
                className="fill-current transition-all duration-300 
                 group-hover:translate-x-1 group-hover:-translate-y-1 
                 /* Ikonka hoverda ko'k bo'ladi */
                 group-hover:text-blue-500 group-active:translate-x-10"
                viewBox="0 0 512 512"
                height="16"
                width="16"
                xmlns="www.w3.org"
              >
                <path d="m476.59 227.05-.16-.07L49.35 49.84A23.56 23.56 0 0 0 27.14 52 24.65 24.65 0 0 0 16 72.59v113.29a24 24 0 0 0 19.52 23.57l232.93 43.07a4 4 0 0 1 0 7.86L35.53 303.45A24 24 0 0 0 16 327v113.31A23.57 23.57 0 0 0 26.59 460a23.94 23.94 0 0 0 13.22 4 24.55 24.55 0 0 0 9.52-1.93L476.4 285.94l.19-.09a32 32 0 0 0 0-58.8z"></path>
              </svg>

              {/* Spinner ham ko'k rangga moslandi */}
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-focus:opacity-100 bg-white transition-opacity duration-300">
                <div className="animate-spin size-5 border-3 border-blue-500 border-t-transparent rounded-full"></div>
              </div>
            </button>
          </form>
        </div>

        {/* Copyright yozuvi uchun yuqoridan border qo'shildi */}
        <div className="w-full pt-4 border-t border-gray-50 flex justify-center">
          <span className="text-[11px] text-gray-400 tracking-widest uppercase">
            &copy; 2025/2026 Happy Market. All rights reserved.
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
