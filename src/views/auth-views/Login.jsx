import * as yup from "yup";
import { useState } from "react";
import { AiOutlineMail, AiOutlineLock } from "react-icons/ai";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useLocation, useNavigate } from "react-router-dom";
import loginIllus from "@/assets/login-illustration.svg";
import { useDocumentTitle } from "@/hooks/useDocumentTitle";
import { APIAuth } from "@/apis/APIAuth";
import { showErrorToast } from "@/components/shared-components/Toast";

const Login = () => {
  useDocumentTitle("Login");

  const [isRemembered, setIsRemembered] = useState(false);
  const [visible, setVisible] = useState(false);

  const navigate = useNavigate();
  const { search } = useLocation();
  const userData = JSON.parse(localStorage.getItem("data"));

  const schema = yup.object().shape({
    email: yup
      .string()
      .required("Email harus diisi")
      .email("Email tidak valid"),
    password: yup
      .string()
      .required("Kata sandi harus diisi")
      .min(8, "Kata sandi minimal 8 karakter"),
  });

  const {
    register,
    formState: { errors, isSubmitting, isValid },
    handleSubmit,
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      email: userData?.email,
      password: userData?.password,
    },
  });

  const onSubmitHandler = async (data) => {
    let returnTo = "/dashboard";
    const params = new URLSearchParams(search);
    const redirectTo = params.get("return_to");
    if (isRemembered) {
      try {
        await APIAuth.loginWithRememberMe(data, isRemembered).then(() => {
          if (redirectTo) {
            returnTo = `/${redirectTo}`;
            return navigate(returnTo);
          } else {
            navigate(returnTo);
          }
        });
      } catch (error) {
        console.error(error);
        showErrorToast(
          "email atau password yang anda masukan salah!",
          "top-right",
          "medium",
        );
      }
    } else {
      try {
        await APIAuth.login(data).then(() => {
          if (redirectTo) {
            returnTo = `/${redirectTo}`;
            return navigate(returnTo);
          } else {
            navigate(returnTo);
          }
        });
      } catch (error) {
        console.error(error);
        showErrorToast(
          "email atau password yang anda masukan salah!",
          "top-right",
          "medium",
        );
      }
    }
  };

  return (
    <>
      <section className="flex h-screen items-center justify-center xl:scale-90">
        <div className="bg-error-timeout"></div>
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

              <form
                id="login-form"
                onSubmit={handleSubmit(onSubmitHandler)}
                className="mt-8"
              >
                {/* Email */}
                <div>
                  <label
                    htmlFor="email"
                    className="text-base font-medium text-grey-300"
                  >
                    Email
                  </label>
                  <div
                    className={`relative mt-2 rounded-lg border 
                    focus-within:ring  ${
                      errors.email
                        ? "border-negative text-negative focus-within:text-negative focus-within:ring-negative"
                        : "border-grey-200 text-grey-200 focus-within:text-grey-900 focus-within:ring-grey-900"
                    }
                    ${isValid ? "focus-within:text-grey-900" : ""}`}
                  >
                    <div className="absolute inset-y-0 start-0 flex items-center ps-4">
                      <AiOutlineMail size={24} />
                    </div>
                    <input
                      {...register("email")}
                      id="email"
                      type="email"
                      autoComplete="email-doctor"
                      className="w-full rounded-lg p-4 pe-8 ps-14 text-base font-medium 
                      focus:border-0 focus:outline-none focus:ring-0"
                      placeholder="Masukkan email anda"
                    />
                  </div>
                  <span className=" text-xs text-red-500">
                    {errors.email?.message}
                  </span>
                </div>

                {/* Passoword */}
                <div className="mt-2">
                  <label
                    htmlFor="password"
                    className="text-base font-medium text-grey-300"
                  >
                    Kata Sandi
                  </label>
                  <div
                    className={`relative mt-2 rounded-lg border 
                    focus-within:ring  ${
                      errors.password
                        ? "border-negative text-negative focus-within:text-negative focus-within:ring-negative"
                        : "border-grey-200 text-grey-200 focus-within:text-grey-900 focus-within:ring-grey-900"
                    }
                    ${isValid ? "focus-within:text-grey-900" : ""}`}
                  >
                    <div className="absolute inset-y-0 start-0 flex items-center ps-4">
                      <AiOutlineLock size={24} />
                    </div>
                    <input
                      {...register("password")}
                      id="login-password"
                      autoComplete="current-password"
                      type={`${visible ? "text" : "password"}`}
                      className="w-full rounded-lg p-4 pe-8 ps-14 text-base font-medium 
                      focus:border-0 focus:outline-none focus:ring-0"
                      placeholder="Masukkan kata sandi anda"
                    />
                    <button
                      id="check-visibility"
                      type="button"
                      onClick={() => setVisible(!visible)}
                      className="absolute inset-y-0 end-0 flex cursor-pointer items-center pe-4"
                    >
                      {visible ? (
                        <FaRegEyeSlash size={24} />
                      ) : (
                        <FaRegEye size={24} />
                      )}
                    </button>
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
                        onChange={(e) => {
                          setIsRemembered(e.target.checked);
                        }}
                        className="h-4 w-4 cursor-pointer rounded border border-grey-200 accent-white focus:border-green-500 focus:outline-none focus:ring-1 focus:ring-green-500"
                      />
                      <label
                        htmlFor="rememberCheck"
                        className="cursor-pointer text-base font-medium text-grey-200"
                      >
                        Ingatkan saya
                      </label>
                    </div>
                  </div>
                  <a
                    href="/lupa-kata-sandi"
                    className="text-base font-medium text-green-500 hover:text-green-600"
                  >
                    Lupa kata sandi?
                  </a>
                </div>

                {/* Button */}
                <div className="mt-16">
                  <button
                    id="submit-button"
                    className="w-full rounded-lg bg-green-500 px-4 py-4 text-xl font-bold text-grey-10 hover:bg-green-600 disabled:bg-green-700"
                    disabled={isSubmitting}
                  >
                    Masuk
                  </button>
                </div>
              </form>
            </div>

            {/* Illustration */}
            <div
              id="login-illustration"
              className="absolute hidden translate-x-[40%] py-5 xl:block"
            >
              <img
                className="-z-10 w-[85%]"
                src={loginIllus}
                alt="login-illustration"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Login;
