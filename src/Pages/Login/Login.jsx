import { useEffect } from "react";
import { useState } from "react";
import { CiRead, CiUnread } from "react-icons/ci";
import {  useNavigate } from "react-router-dom";

const Login = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [showPassword, setShowPassword] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    localStorage.setItem("isLogin", isLogin);
  }, [isLogin]);
  const [errors, setErrors] = useState({});

  const inputStyle = `
    peer w-full p-3 pl-4 bg-gray-50 border border-gray-100 rounded-xl outline-none 
    transition-all duration-300
    focus:border-green-500 focus:ring-4 focus:ring-green-50
    invalid:[&:not(:placeholder-shown)]:border-red-500 
    invalid:[&:not(:placeholder-shown)]:ring-red-50
  `;

  const onFinish = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());
    setErrors({});

    if (isLogin) {
      // Validation
      const newErrors = {};

      if (!data.email) newErrors.email = true;
      if (!data.password) {
        newErrors.password = true;
      } else if (data.password.length < 5) {
        newErrors.password = "Kamida 5 ta belgidan iborat parol kiriting!";
      }
      setErrors(newErrors);

      // If no errors, submit the form
      if (Object.keys(newErrors).length === 0) {
        console.log("Yuborildi:", data);

        // Simulate successful login


        setErrors({});
        navigate("/home");
      }
    } else {
      // Registration Validation
      const newErrors = {};
      if (!data.email) newErrors.email = true;
      if (!data.name) newErrors.name = true;
      if (!data.phone_number) newErrors.phone_number = true;
      if (!data.age) newErrors.age = true;
      if (!data.password) {
        newErrors.password = true;
      } else if (data.password.length < 5) {
        newErrors.password = "Kamida 5 ta belgidan iborat parol kiriting!";
      }

      setErrors(newErrors);

      // If no errors, submit the form
      if (Object.keys(newErrors).length === 0) {
        console.log("Ro'yxatdan o'tildi:", data);
        setIsLogin(true);
        setErrors({});
      }
    }
  };

  return (
    <div className="min-h-[80vh] flex items-center justify-center p-4">
      <div className="bg-white w-full max-w-md rounded-2xl shadow-xl border border-green-50 overflow-hidden transition-all duration-500">
        <div className="p-8 pb-0 text-center">
          <h2 className="text-3xl font-bold text-gray-800 tracking-tight">
            {isLogin ? "Xush kelibsiz!" : "Ro'yxatdan o'tish"}
          </h2>
          <p className="text-gray-500 text-sm mt-2">
            {isLogin ? "Happy Market-ga kirish" : "Yangi hisob yarating"}
          </p>
        </div>

        <form
          className="p-8 flex flex-col gap-4"
          onSubmit={onFinish}
          noValidate
        >
          <div className="group">
            <label className="text-xs font-bold text-gray-400 uppercase ml-1 group-focus-within:text-green-500">
              Email
            </label>
            <input
              type="email"
              name="email"
              placeholder="example@mail.com"
              className="w-full p-3 mt-1 bg-gray-50 border border-gray-100 rounded-xl outline-none focus:border-green-500 focus:ring-4 focus:ring-green-50 transition-all duration-300"
            />
            {errors.email ? (
              <p className="mt-1 text-[10px] text-red-500 font-bold ml-1 uppercase tracking-wider">
                email pochtangizni kiriting!
              </p>
            ) : null}
          </div>
          {!isLogin ? (
            <div className="animate-in fade-in slide-in-from-top-4 duration-500 flex flex-col gap-4">
              <div className="group">
                <label className="text-xs font-bold text-gray-400 uppercase ml-1 transition-colors group-focus-within:text-green-500">
                  Ism
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="Ismingizni kiriting"
                  className={inputStyle}
                />
                {errors.name ? (
                  <p className="mt-1 text-[10px] text-red-500 font-bold ml-1 uppercase tracking-wider">
                    Ismingizni kiriting!
                  </p>
                ) : null}
              </div>

              <div className="flex gap-4 flex-col min-[400px]:flex-row">
                <div className="group flex-1">
                  <label className="text-xs font-bold text-gray-400 uppercase ml-1 group-focus-within:text-green-500">
                    Telefon
                  </label>
                  <input
                    type="tel"
                    name="phone_number"
                    placeholder="+998..."
                    className={inputStyle}
                  />

                  <p className="mt-1 text-[10px] text-red-500 font-bold ml-1 uppercase tracking-wider">
                    telefon raqamingizni kiriting!
                  </p>
                </div>
                <div className="group w-24">
                  <label className="text-xs font-bold text-gray-400 uppercase ml-1 group-focus-within:text-green-500">
                    Yosh
                  </label>
                  <input
                    type="number"
                    name="age"
                    placeholder="25"
                    className={inputStyle}
                  />
                  <p className="mt-1 text-[8px] text-red-500 font-bold ml-1 uppercase tracking-wider">
                    yoshingizni kiriting!
                  </p>
                </div>
              </div>
            </div>
          ) : null}
          <div className="group relative">
            <label className="text-xs font-bold text-gray-400 uppercase ml-1 transition-colors group-focus-within:text-green-500">
              Parol
            </label>
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              placeholder={
                showPassword ? "Parolingizni kiriting" : "•••••••••••••••••••"
              }
              className={inputStyle}
            />
            {errors.password ? (
              typeof errors.password === "string" ? (
                <p className="mt-1 text-[8px] text-red-500 font-bold ml-1 uppercase tracking-wider">
                  {errors.password}
                </p>
              ) : (
                <p className="mt-1 text-[8px] text-red-500 font-bold ml-1 uppercase tracking-wider">
                  parolingizni kiriting!
                </p>
              )
            ) : null}

            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-1/2  scale-130 text-gray-400 hover:text-blue-600 transition-colors cursor-pointer p-1 rounded-full hover:bg-blue-50"
            >
              {showPassword ? <CiRead /> : <CiUnread />}
            </button>
          </div>

          <button
            type="submit"
            className="w-full mt-4 py-4 bg-green-600 text-white font-bold rounded-xl shadow-lg shadow-green-100 
                       hover:bg-blue-600 hover:shadow-blue-100 transition-all duration-300 active:scale-95"
          >
            {isLogin ? "KIRISH" : "RO'YXATDAN O'TISH"}
          </button>
        </form>

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
