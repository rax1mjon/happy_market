import { useNavigate } from "react-router-dom";
import LogoBtn from "../LogoBtn/LogoBtn";
import { instagram_qr, telegram_qr, youtube_qr } from "../../images";

const Footer = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Form submitted");
  };
  const navigate = useNavigate();

  const onClickFunc = (query) => {
    navigate("/" + query);
  };

  const onFinish = (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());

    console.log("Yuborildi:", data);
  };
  return (
    <footer className="custom_container mb-4 p-[0_20px]">
      <div className="footer-wrapper py-6 px-6 w-full flex flex-col justify-center items-center gap-6 border border-red-300 rounded-2xl z-50 bg-white transition-all duration-300 hover:shadow-md hover:shadow-green-50">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 flex-col gap-10 justify-around items-center w-full">
          <div className="flex flex-col flex-1 gap-4 items-start md:col-span-2 lg:col-span-3">
            <LogoBtn />
            <div className="w-full min-w-[250px] h-52 bg-gradient-to-br from-green-50 to-blue-50 rounded-2xl border border-green-100 p-4 flex flex-col justify-between shadow-inner">
              {/* Yuqori qism: Telegram va Tel */}
              <div className="flex flex-col gap-3">
                {/* Telegram Link */}
                <a
                  href="https://t.me/HappyMarket_uz"
                  target="_blank"
                  className="flex items-center gap-3 group/link"
                >
                  <div className="w-9 h-9 bg-white rounded-xl flex items-center justify-center shadow-sm group-hover/link:bg-blue-500 transition-all duration-300">
                    <svg
                      className="w-5 h-5 text-blue-500 group-hover/link:text-white transition-colors"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69.01-.03.01-.14-.07-.2-.08-.06-.19-.04-.27-.02-.12.02-1.96 1.25-5.54 3.69-.52.35-.97.53-1.33.52-.4-.01-1.17-.22-1.74-.41-.7-.23-1.26-.35-1.21-.74.03-.2.3-.4.8-.6 3.12-1.36 5.2-2.26 6.24-2.69 2.97-1.23 3.59-1.44 3.99-1.44.09 0 .28.02.41.12.11.08.14.19.16.27-.01.04.01.12 0 .15z" />
                    </svg>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[10px] text-gray-400 font-bold uppercase tracking-wider">
                      Telegram Kanal
                    </span>
                    <span className="text-sm font-semibold text-gray-700 group-hover/link:text-blue-600 transition-colors">
                      HappyMarket_uz
                    </span>
                  </div>
                </a>

                {/* Telefon Raqam */}
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 bg-white rounded-xl flex items-center justify-center shadow-sm text-green-600">
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
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      />
                    </svg>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[10px] text-gray-400 font-bold uppercase tracking-wider">
                      Aloqa
                    </span>
                    <span className="text-sm font-semibold text-gray-700">
                      +998 (77) 193 53 13
                    </span>
                  </div>
                </div>
              </div>

              {/* Pastki qism: QR Kod va Mini Ma'lumot */}
              <div className="flex justify-between items-end border-t border-green-100 pt-3 mt-1">
                <div className="flex flex-col">
                  <span className="text-[10px] font-bold text-green-600 uppercase tracking-tighter">
                    Ilovamizni yuklang
                  </span>
                  <span className="text-[9px] text-gray-400 leading-tight max-w-[100px]">
                    Tezkor sovg'a qidirish endi mobil ilovada!
                  </span>
                </div>

                {/* QR Kod Placeholder (Haqiqiy QR rasm qo'ysangiz bo'ladi) */}
                <div className="w-14 h-14 bg-white p-1 rounded-lg border border-green-100 shadow-sm transition-transform hover:scale-110 cursor-zoom-in">
                  <div className="w-full h-full bg-gray-100 rounded flex items-center justify-center overflow-hidden">
                    {/* <img src={qr_code} alt="QR" /> */}
                    <img src={instagram_qr} alt="" />
                  </div>
                </div>
                <div className="w-14 h-14 bg-white p-1 rounded-lg border border-green-100 shadow-sm transition-transform hover:scale-110 cursor-zoom-in">
                  <div className="w-full h-full bg-gray-100 rounded flex items-center justify-center overflow-hidden">
                    {/* <img src={qr_code} alt="QR" /> */}
                    <img src={youtube_qr} alt="" />
                  </div>
                </div>
                <div className="w-14 h-14 bg-white p-1 rounded-lg border border-green-100 shadow-sm transition-transform hover:scale-110 cursor-zoom-in">
                  <div className="w-full h-full bg-gray-100 rounded flex items-center justify-center overflow-hidden">
                    {/* <img src={qr_code} alt="QR" /> */}
                    <img src={telegram_qr} alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <form className="flex flex-col gap-2" onSubmit={onFinish}>
            <input
              className="p-1 pl-3 placeholder:text-[14px] focus:outline-none border border-gray-200 
               focus:border-green-500 focus:ring-2 focus:ring-green-100 rounded-lg 
               text-gray-700 text-[12px] focus:bg-white transition-all duration-300 
               shadow-sm w-full focus:-translate-y-0.5"
              type="text"
              name="name"
              placeholder="Your name"
            />

            <input
              className="p-1 pl-3 placeholder:text-[14px] focus:outline-none border border-gray-200 
               focus:border-green-500 focus:ring-2 focus:ring-green-100 rounded-lg 
               text-gray-700 text-[12px] focus:bg-white transition-all duration-300 
               shadow-sm w-full focus:-translate-y-0.5"
              type="email"
              name="email"
              placeholder="Your email"
            />

            <textarea
              className="resize-none p-2 pl-3 placeholder:text-[14px] h-20 focus:outline-none 
               border border-gray-200 focus:border-green-500 focus:ring-2 focus:ring-green-100 
               rounded-lg text-gray-700 text-[12px] focus:bg-white transition-all 
               duration-300 shadow-sm w-full focus:-translate-y-0.5"
              placeholder="Enter your opinions"
              name="message"
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
