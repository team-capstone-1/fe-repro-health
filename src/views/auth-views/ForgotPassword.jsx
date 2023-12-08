import * as yup from "yup";
import CryptoJS from "crypto-js";
import { useNavigate } from "react-router-dom";
import {
  AiOutlineMail,
  AiOutlineArrowLeft,
  AiOutlineArrowRight,
} from "react-icons/ai";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import forgotPasswordIllus from "@/assets/forgot-password-illustration.svg";
import { useDocumentTitle } from "@/hooks/useDocumentTitle";
import { APIAuth } from "@/apis/APIAuth";
import { showErrorToast } from "@/components/shared-components/Toast";
import { CONST } from "@/utils/Constant";

const ForgotPassword = () => {
  useDocumentTitle("Lupa Password");

  const navigate = useNavigate();
  const secretKey = CONST.SECRET_KEY;

  const schema = yup.object().shape({
    email: yup
      .string()
      .required("Email harus diisi")
      .email("Email harus sesuai"),
  });

  const {
    register,
    formState: { errors, isSubmitting },
    handleSubmit,
  } = useForm({
    resolver: yupResolver(schema),
  });

  const encryptData = (data) => {
    const encryptedData = CryptoJS.AES.encrypt(data, secretKey)
      .toString()
      .replace(/\//g, "Por21Ld");
    return encryptedData;
  };

  const onSubmitHandler = async (data) => {
    try {
      await APIAuth.sendOTP(data);
      navigate(`/verifikasi/${encryptData(data.email)}`);
    } catch (error) {
      console.error(error);
      showErrorToast(
        "Terjadi kesalahan, pastikan email sudah terdaftar",
        "top-right",
        "medium",
      );
    }
  };

  return (
    <>
      <section className="flex h-screen items-center justify-center xl:scale-95">
        <div className="base-container">
          <div className="mx-auto max-w-[1200px] rounded-lg bg-white p-8 shadow-none md:p-14 md:shadow-[2px_2px_4px_4px_rgba(186,186,186,0.3)]">
            <button
              id="back-button"
              onClick={() => navigate(-1)}
              className="flex gap-3"
            >
              <AiOutlineArrowLeft color="#989898" size={24} />
              <p className="text-base font-semibold text-grey-900">Kembali</p>
            </button>
            <div className="mt-[26px] grid grid-cols-1 items-center gap-24 lg:grid-cols-2">
              <form
                onSubmit={handleSubmit(onSubmitHandler)}
                id="forgot-password-form"
                className="flex flex-col gap-12 lg:gap-20"
              >
                {/* Title */}
                <div>
                  <h3 className="text-grey-900">Lupa Kata Sandi Anda?</h3>
                  <p className="mt-1 text-justify text-base font-medium text-grey-300">
                    Masukkan alamat email Anda untuk mengatur ulang kata sandi
                    Anda. Kami akan mengirimkan Anda kode verifikasi untuk
                    mengatur ulang kata sandi.
                  </p>
                </div>

                {/* Email */}
                <div>
                  <div
                    className={`relative mt-2 rounded-lg border focus-within:ring ${
                      errors.email
                        ? "border-negative text-negative focus-within:text-negative focus-within:ring-negative"
                        : "border-grey-200 text-grey-200 focus-within:text-grey-900 focus-within:ring-grey-900"
                    }`}
                  >
                    <div className="absolute inset-y-0 start-0 flex items-center ps-4">
                      <AiOutlineMail size={24} />
                    </div>
                    <input
                      {...register("email")}
                      id="email"
                      type="email"
                      className={`block w-full rounded-lg border-0 p-4 pe-8 ps-14 text-base focus:outline-none focus:ring-0`}
                      placeholder="Masukkan email anda"
                    />
                  </div>
                  <span className=" text-xs text-red-500">
                    {errors.email?.message}
                  </span>
                </div>

                {/* Button */}
                <div>
                  <button
                    id="submit-button"
                    type="submit"
                    className="flex w-full items-center justify-center gap-2 rounded-lg bg-green-500 px-8 py-4 text-base font-semibold text-grey-10 hover:bg-green-600 disabled:bg-green-700"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      "Loading..."
                    ) : (
                      <span>
                        Lanjut{" "}
                        <AiOutlineArrowRight
                          size={18}
                          className="inline-block"
                        />
                      </span>
                    )}
                  </button>
                </div>
              </form>

              {/* Illustration */}
              <div
                id="forgot-password-illustration"
                className="hidden lg:block"
              >
                <img
                  className="w-full"
                  src={forgotPasswordIllus}
                  alt="forgot-password-illustration"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ForgotPassword;
