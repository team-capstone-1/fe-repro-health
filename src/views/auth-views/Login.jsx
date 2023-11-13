import { useState } from "react";
import loginIllus from "@/assets/login-illustration.svg";
import { AiOutlineMail, AiOutlineLock } from "react-icons/ai";
import { MdError } from "react-icons/md";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

const Login = () => {
  const [isFocusEmail, setIsFocusEmail] = useState(false);
  const [isFocusPass, setIsFocusPass] = useState(false);

  const schema = yup.object().shape({
    email: yup
      .string()
      .required("Email harus diisi")
      .email("Email harus sesuai")
      .oneOf(["dummy@example.com"], "Email tidak valid"),
    password: yup
      .string()
      .required("Kata sandi harus diisi")
      .min(8, "Kata sandi minimal 8 karakter")
      .oneOf(["helloworld"], "Kata sandi tidak valid"),
    // .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/, "Password")
  });

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({
    resolver: yupResolver(schema),
  });
  const onSubmitHandler = (data) => console.log(data);

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
                        isFocusEmail
                          ? "#0d0d0d"
                          : errors.email
                          ? "#fc4547"
                          : "#b9b9b9"
                      }`}
                      size={24}
                    />
                  </div>
                  <input
                    {...register("email")}
                    onFocus={() => setIsFocusEmail(true)}
                    onBlur={() => setIsFocusEmail(false)}
                    id="email"
                    type="email"
                    className={`block w-full rounded-lg border border-grey-100 p-4 pe-8 ps-14 text-base focus:border-grey-900 focus:text-grey-900 focus:outline-none focus:ring-1 focus:ring-grey-900 ${
                      errors.email
                        ? "border-[#fc4547] text-[#fc4547]"
                        : "border-grey-100 text-grey-100"
                    }`}
                    placeholder="Enter your email address"
                  />
                  <div
                    className={`absolute inset-y-0 end-0 items-center pe-4 ${
                      errors.email ? "flex" : "hidden"
                    }`}
                  >
                    <MdError
                      color={`${
                        isFocusEmail
                          ? "#0d0d0d"
                          : errors.email
                          ? "#fc4547"
                          : "#b9b9b9"
                      }`}
                      size={24}
                    />
                  </div>
                </div>
                <span className=" text-xs text-[#fc4547]">
                  {errors.email?.message}
                </span>
              </div>

              {/* Passoword */}
              <div className="mt-2">
                <label className="text-base font-medium text-grey-300">
                  Kata Sandi
                </label>
                <div className="relative mt-2">
                  <div className="absolute inset-y-0 start-0 flex items-center ps-4">
                    <AiOutlineLock
                      color={`${
                        isFocusPass
                          ? "0d0d0d"
                          : errors.password
                          ? "#fc4547"
                          : "#b9b9b9"
                      }`}
                      size={24}
                    />
                  </div>
                  <input
                    {...register("password")}
                    onFocus={() => setIsFocusPass(true)}
                    onBlur={() => setIsFocusPass(false)}
                    id="password"
                    type="password"
                    className={`block w-full rounded-lg border p-4 ps-14 text-base focus:border-grey-900 focus:text-grey-900 focus:outline-none focus:ring-1 focus:ring-grey-900 ${
                      errors.password
                        ? "border-[#fc4547] text-[#fc4547]"
                        : "border-grey-100 text-grey-100"
                    }`}
                    placeholder="Enter your password"
                  />
                  <div
                    className={`absolute inset-y-0 end-0 items-center pe-4 ${
                      errors.password ? "flex" : "hidden"
                    }`}
                  >
                    <MdError
                      color={`${
                        isFocusPass
                          ? "#0d0d0d"
                          : errors.password
                          ? "#fc4547"
                          : "#b9b9b9"
                      }`}
                      size={24}
                    />
                  </div>
                </div>
                <span className=" text-xs text-red-500">
                  {errors.password?.message}
                </span>
              </div>

              {/* Remember me & Forgot Password */}
              <div className="mt-4 flex items-center justify-between">
                <div className="flex items-start">
                  <div className="flex h-5 items-center gap-2">
                    <input
                      type="checkbox"
                      id="rememberCheck"
                      className="h-4 w-4 rounded border border-grey-200 accent-white focus:border-green-500 focus:outline-none focus:ring-1 focus:ring-green-500"
                    />
                    <label
                      htmlFor="rememberCheck"
                      className="text-base font-medium text-grey-200"
                    >
                      Ingatkan saya
                    </label>
                  </div>
                </div>
                <a
                  href="/forgot-password"
                  className="text-base font-medium text-green-500 hover:text-green-600"
                >
                  Lupa Password?
                </a>
              </div>

              {/* Button */}
              <div className="mt-16">
                <button id="submit-button" className="w-full rounded-lg bg-green-500 px-4 py-4 text-xl font-bold text-grey-10 hover:bg-green-600">
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
