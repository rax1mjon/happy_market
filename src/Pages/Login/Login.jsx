import { useState } from "react";

const Login = () => {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className="min-h-[80vh] flex items-center justify-center p-4">
      <div className="bg-white w-full max-w-md rounded-2xl shadow-xl border border-green-50 overflow-hidden transition-all duration-500">
        {/* Yuqori qism: Sarlavha va Toggle */}
        <div className="p-8 pb-0 text-center">
          <h2 className="text-3xl font-bold text-gray-800 tracking-tight">
            {isLogin ? "Xush kelibsiz!" : "Ro'yxatdan o'tish"}
          </h2>
          <p className="text-gray-500 text-sm mt-2">
            {isLogin ? "Happy Market-ga kirish" : "Yangi hisob yarating"}
          </p>
        </div>

        {/* Forma qismi */}
        <form className="p-8 flex flex-col gap-4">
          {/* Ism (Har doim bor) */}
          <div className="group">
            <label className="text-xs font-bold text-gray-400 uppercase ml-1 transition-colors group-focus-within:text-green-500">
              Ism
            </label>
            <input
              type="text"
              placeholder="Ismingizni kiriting"
              className="w-full p-3 mt-1 bg-gray-50 border border-gray-100 rounded-xl outline-none focus:border-green-500 focus:ring-4 focus:ring-green-50 transition-all duration-300"
            />
          </div>

          {!isLogin && (
            <div className="animate-in fade-in slide-in-from-top-4 duration-500 flex flex-col gap-4">
              {/* Email */}
              <div className="group">
                <label className="text-xs font-bold text-gray-400 uppercase ml-1 group-focus-within:text-green-500">
                  Email
                </label>
                <input
                  type="email"
                  placeholder="example@mail.com"
                  className="w-full p-3 mt-1 bg-gray-50 border border-gray-100 rounded-xl outline-none focus:border-green-500 focus:ring-4 focus:ring-green-50 transition-all duration-300"
                />
              </div>

              <div className="flex gap-4">
                {/* Telefon */}
                <div className="group flex-1">
                  <label className="text-xs font-bold text-gray-400 uppercase ml-1 group-focus-within:text-green-500">
                    Telefon
                  </label>
                  <input
                    type="tel"
                    placeholder="+998..."
                    className="w-full p-3 mt-1 bg-gray-50 border border-gray-100 rounded-xl outline-none focus:border-green-500 focus:ring-4 focus:ring-green-50 transition-all duration-300"
                  />
                </div>
                {/* Yosh */}
                <div className="group w-24">
                  <label className="text-xs font-bold text-gray-400 uppercase ml-1 group-focus-within:text-green-500">
                    Yosh
                  </label>
                  <input
                    type="number"
                    placeholder="25"
                    className="w-full p-3 mt-1 bg-gray-50 border border-gray-100 rounded-xl outline-none focus:border-green-500 focus:ring-4 focus:ring-green-50 transition-all duration-300"
                  />
                </div>
              </div>
            </div>
          )}

          {/* Parol (Har doim bor) */}
          <div className="group">
            <label className="text-xs font-bold text-gray-400 uppercase ml-1 transition-colors group-focus-within:text-blue-500">
              Parol
            </label>
            <input
              type="password"
              placeholder="••••••••"
              className="w-full p-3 mt-1 bg-gray-50 border border-gray-100 rounded-xl outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-50 transition-all duration-300"
            />
          </div>

          {/* Submit Tugmasi */}
          <button
            type="submit"
            className="w-full mt-4 py-4 bg-green-600 text-white font-bold rounded-xl shadow-lg shadow-green-100 
                       hover:bg-blue-600 hover:shadow-blue-100 transition-all duration-300 active:scale-95"
          >
            {isLogin ? "KIRISH" : "RO'YXATDAN O'TISH"}
          </button>
        </form>

        {/* Pastki almashtirish qismi */}
        <div className="p-6 bg-gray-50/50 border-t border-gray-50 text-center">
          <p className="text-sm text-gray-500">
            {isLogin ? "Hisobingiz yo'qmi?" : "Profilingiz bormi?"}
            <button
              onClick={() => setIsLogin(!isLogin)}
              className="ml-2 font-bold text-green-600 hover:text-blue-600 transition-colors"
            >
              {isLogin ? "Ro'yxatdan o'ting" : "Kirish qismiga o'ting"}
            </button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
