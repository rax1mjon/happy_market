import React from "react";
import { useNavigate } from "react-router-dom";

const Landing = () => {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-[#F9FAFB] font-sans overflow-x-hidden">
      <section className="relative pt-32 pb-20 px-6 overflow-hidden">
        <div className="absolute top-10 right-10 w-64 h-64 bg-green-100 rounded-full blur-3xl opacity-50 -z-10 animate-pulse"></div>
        <div className="absolute bottom-10 left-10 w-72 h-72 bg-blue-100 rounded-full blur-3xl opacity-50 -z-10"></div>

        <div className="custom_container flex flex-col items-center text-center">
          <div className="inline-block px-4 py-1.5 mb-6 bg-green-50 border border-green-100 rounded-full">
            <span className="text-green-600 text-sm font-bold tracking-wide">
              🎄 2026-yilgi bayram uchun maxsus
            </span>
          </div>

          <h1 className="text-4xl md:text-6xl font-black text-gray-900 leading-tight max-w-4xl">
            Yaqinlaringiz uchun{" "}
            <span className="text-green-600">mukammal sovg'ani</span> topish
            endi juda oson!
          </h1>

          <p className="mt-6 text-lg text-gray-600 max-w-2xl leading-relaxed">
            Nima sovg'a qilishni bilmayapsizmi? HappyMarket algoritmi yoshi,
            jinsi va byudjetingizga mos eng yaxshi variantlarni saralab beradi.
          </p>

          <div className="mt-10 flex flex-wrap gap-4 justify-center">
            <button
              className="px-8 py-4 bg-green-600 text-white font-bold rounded-2xl shadow-xl shadow-green-100 hover:bg-blue-600 hover:shadow-blue-100 transition-all duration-300 hover:-translate-y-1 active:scale-95"
              onClick={() => navigate("/home")}
            >
              Sovg'a qidirishni boshlash
            </button>
            <a
              className="px-8 py-4 bg-white text-gray-700 border-2 border-gray-100 font-bold rounded-2xl hover:border-green-500 transition-all duration-300"
              href="#qanday_ishlaydi"
            >
              Qanday ishlaydi?
            </a>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white" id="qanday_ishlaydi">
        <div className="custom_container px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-800">
              4 ta oddiy qadam
            </h2>
            <div className="h-1 w-20 bg-green-500 mx-auto mt-4 rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Yoshi va Jinsi",
                desc: "Sovg'a egasining ma'lumotlarini kiriting.",
                color: "green",
              },
              {
                step: "02",
                title: "Byudjet",
                desc: "O'zingizga qulay mablag'ni belgilang.",
                color: "blue",
              },
              {
                step: "03",
                title: "Kategoriya",
                desc: "Texnika, oziq-ovqat yoki boshqa turdagi.",
                color: "green",
              },
              {
                step: "04",
                title: "Tayyor!",
                desc: "Saralangan sovg'alardan birini tanlang.",
                color: "blue",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="group p-8 rounded-2xl bg-gray-50 border border-gray-100 transition-all duration-500 hover:rotate-2 hover:ring-2 hover:ring-green-400 hover:shadow-xl"
              >
                <span
                  className={`text-4xl font-black text-${item.color}-200 group-hover:text-${item.color}-500 transition-colors`}
                >
                  {item.step}
                </span>
                <h3 className="text-xl font-bold text-gray-800 mt-4">
                  {item.title}
                </h3>
                <p className="text-gray-500 text-sm mt-2">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20" id="afzalliklar">
        <div className="custom_container px-6 flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1 relative">
            <div className="w-full h-80 bg-gradient-to-br from-green-500 to-blue-600 rounded-3xl rotate-3 absolute -z-10 opacity-10"></div>
            <div className="w-full h-80 bg-white border-2 border-dashed border-green-200 rounded-3xl flex items-center justify-center p-10 text-center">
              <span className="text-5xl">🎁</span>
              <p className="font-bold text-green-700 ml-4">
                Barcha mahsulotlar emas, faqat sizga moslari!
              </p>
            </div>
          </div>

          <div className="flex-1">
            <h2 className="text-3xl font-bold text-gray-800 leading-tight">
              Vaqtingizni tejang, qaror qabul qilishni bizga qo'ying.
            </h2>
            <p className="mt-6 text-gray-600 leading-relaxed">
              BizOnline Market integratsiyasi orqali bozordagi minglab
              mahsulotlar ichidan aynan sizning yoshi, jinsi va byudjetingizga
              mos keladigan assortimentni taqdim etamiz.
            </p>
            <ul className="mt-8 space-y-4">
              {[
                "Saralangan mahsulotlar",
                "Vaqtni 10 barobar tejash",
                "Tayyor assortiment",
              ].map((list, i) => (
                <li
                  key={i}
                  className="flex items-center gap-3 font-semibold text-gray-700"
                >
                  <div className="w-6 h-6 bg-green-100 text-green-600 rounded-full flex items-center justify-center text-xs">
                    ✓
                  </div>
                  {list}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="py-20 px-6" id="sovg'alar">
        <div className="custom_container bg-blue-600 rounded-[2.5rem] py-20  text-center text-white relative overflow-hidden shadow-2xl shadow-blue-200">
          <div className="absolute top-0 left-0 w-32 h-32 bg-white/10 rounded-full -translate-x-16 -translate-y-16"></div>
          <h2 className="text-3xl md:text-5xl font-bold relative z-10 mt-8">
            Bayramni quvonch bilan kutib oling!
          </h2>
          <p className="mt-6 text-blue-100 relative z-10 max-w-xl mx-auto">
            Ro'yxatdan o'ting va 2026-yilgi yangi yilni yaqinlaringiz uchun
            unutilmas qiling.
          </p>
          <button
            className="mt-10 px-10 py-5 mb-8 bg-white text-blue-600 font-black rounded-2xl hover:bg-green-500 hover:text-white transition-all duration-300 transform hover:scale-105 active:scale-95 relative z-10"
            onClick={() => navigate("/home")}
          >
            Hozir boshlash
          </button>
        </div>
      </section>
    </div>
  );
};

export default Landing;
