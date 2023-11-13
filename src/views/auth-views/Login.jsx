import { useState } from "react";
import loginIllus from "@/assets/login-illustration.svg";
import { AiOutlineMail, AiOutlineLock } from "react-icons/ai";

const Login = () => {
  const [isFocusEmail, setIsFocusEmail] = useState(false);
  const [isFocusPass, setIsFocusPass] = useState(false);

  return (
    <section className="flex h-screen items-center justify-center xl:scale-95">
      <div className="base-container">
        <div className="flex items-center justify-center">
          <div className="z-10 translate-x-0 rounded-lg bg-white px-8 py-8 shadow-none md:max-w-[38rem] md:px-14 md:py-14 md:shadow-[2px_2px_4px_4px_rgba(186,186,186,0.3)] xl:-translate-x-[38%]">
            {/* Title */}
            <div className="space-y-1">
              <h2 className="font-semibold text-grey-900">
                Masuk ke Akun Anda!
              </h2>
              <p className="text-base font-medium text-grey-300">
                Selamat datang, silakan masukkan email dan kata sandi Anda.
              </p>
            </div>

            <form className="mt-8">
              {/* Email */}
              <div>
                <label className="text-base font-medium text-grey-300">
                  Email
                </label>
                <div className="relative mt-2">
                  <div className="absolute inset-y-0 start-0 flex items-center ps-4">
                    <AiOutlineMail
                      color={`${
                        isFocusEmail === false ? "#b9b9b9" : "#0d0d0d"
                      }`}
                      size={24}
                    />
                  </div>
                  <input
                    onFocus={() => setIsFocusEmail(true)}
                    onBlur={() => setIsFocusEmail(false)}
                    id="email"
                    type="email"
                    className="block w-full rounded-lg border border-grey-100 p-4 ps-14 text-base text-grey-100 focus:border-grey-900 focus:text-grey-900 focus:outline-none focus:ring-1 focus:ring-grey-900"
                    placeholder="Enter your email address"
                  />
                </div>
              </div>

              {/* Passoword */}
              <div className="mt-2">
                <label className="text-base font-medium text-grey-300">
                  Password
                </label>
                <div className="relative mt-2">
                  <div className="absolute inset-y-0 start-0 flex items-center ps-4">
                    <AiOutlineLock
                      color={`${isFocusPass === false ? "#b9b9b9" : "#0d0d0d"}`}
                      size={24}
                    />
                  </div>
                  <input
                    onFocus={() => setIsFocusPass(true)}
                    onBlur={() => setIsFocusPass(false)}
                    id="password"
                    type="password"
                    className="block w-full rounded-lg border border-grey-100 p-4 ps-14 text-base text-grey-100 focus:border-grey-900 focus:text-grey-900 focus:outline-none focus:ring-1 focus:ring-grey-900"
                    placeholder="Enter your password"
                  />
                </div>
              </div>

              {/* Remember me & Forgot Password */}
              <div className="mt-4 flex items-center justify-between">
                <div className="flex items-start">
                  <div className="flex h-5 items-center gap-2">
                    <input
                      type="checkbox"
                      className="h-4 w-4 rounded border border-grey-200 accent-white focus:border-green-500 focus:outline-none focus:ring-1 focus:ring-green-500"
                    />
                    <label
                      htmlFor=""
                      className="text-base font-medium text-grey-200"
                    >
                      Remember me
                    </label>
                  </div>
                </div>
                <a
                  href="/forgot-password"
                  className="text-base font-medium text-green-500 hover:text-green-600"
                >
                  Forgot Password?
                </a>
              </div>

              {/* Button */}
              <div className="mt-16">
                <button className="w-full rounded-lg bg-green-500 px-4 py-4 text-xl font-bold text-grey-10 hover:bg-green-600">
                  Masuk
                </button>
              </div>
            </form>
          </div>

          {/* Illustration */}
          <div className="absolute hidden translate-x-[40%] py-5 xl:block">
            <img
              className="-z-10 w-[82%]"
              src={loginIllus}
              alt="login-illustration"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
