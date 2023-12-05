import * as yup from "yup";
import CryptoJS from "crypto-js";
import Cookies from "js-cookie";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { IoSend } from "react-icons/io5";
import codeVerifyIllus from "@/assets/code-verify-illustration.svg";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useDocumentTitle } from "@/hooks/useDocumentTitle";
import { APIAuth } from "@/apis/APIAuth";
import {
  showSuccessToast,
  showErrorToast,
} from "@/components/shared-components/Toast";
import { CONST } from "@/utils/Constant";
import { ToastContainer } from "react-toastify";
import { useDispatch } from "react-redux";
import { toggleResetPassword } from "@/store/is-password-reset-slice";

const Verify = () => {
  useDocumentTitle("Verifikasi");

  const secretKey = CONST.SECRET_KEY;
  const { userEmail } = useParams();
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const decryptData = (encryptedData) => {
    const decryptedData = CryptoJS.AES.decrypt(
      encryptedData,
      secretKey,
    ).toString(CryptoJS.enc.Utf8);
    return decryptedData;
  };

  const email = decryptData(userEmail.replace(/Por21Ld/g, "/"));

  const schema = yup.object().shape({
    code: yup.string().required("Kode Verifikasi harus diisi"),
  });

  const {
    register,
    formState: { errors, isSubmitting },
    handleSubmit,
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmitHandler = async (data) => {
    try {
      await APIAuth.validateOTP({
        email,
        otp: data.code,
      }).then((data) => {
        Cookies.set("token", data.response.token);
        dispatch(toggleResetPassword());
        navigate("/atur-ulang-kata-sandi");
      });
    } catch (error) {
      console.error(error);
      showErrorToast("Kode verifikasi tidak sesuai", "top-right");
    }
  };

  const repeatSendCode = async () => {
    setIsLoading(true);
    try {
      await APIAuth.sendOTP({
        email,
      });
      showSuccessToast("Kode verifikasi berhasil dikirim ulang", "top-right");
      setIsLoading(false);
    } catch (error) {
      console.error(error);
      setIsLoading(false);
      showErrorToast("Kode verifikasi gagal dikirim", "top-right");
    }
  };

  const modifyEmail = (email) => {
    const parts = email.split("@");
    if (parts.length === 2) {
      // Mengganti huruf kecuali huruf pertama di bagian sebelum '@'
      const replaced =
        parts[0][0] + parts[0].substring(1).replace(/[a-zA-Z]/g, "*");

      // Menggabungkan kembali bagian-bagian string
      const result = replaced + "@" + parts[1];

      return result;
    }
    return email;
  };

  return (
    <>
      <ToastContainer className="w-full sm:w-[35rem] lg:w-[38rem]" />
      <section className="flex h-screen items-center justify-center xl:scale-95">
        <div className="base-container">
          <div className="mx-auto max-w-[1200px] rounded-lg bg-white p-8 shadow-none md:p-16 md:shadow-[2px_2px_4px_4px_rgba(186,186,186,0.3)]">
            <button
              id="back-button"
              onClick={() => navigate(-1)}
              className="flex gap-3"
            >
              <AiOutlineArrowLeft color="#989898" size={24} />
              <p className="text-base font-semibold text-grey-900">Kembali</p>
            </button>
            <div className="mt-[26px] grid grid-cols-1 items-center gap-24 lg:grid-cols-2">
              <div>
                <form
                  onSubmit={handleSubmit(onSubmitHandler)}
                  id="verify-form"
                  className="flex flex-col gap-12 lg:gap-20"
                >
                  {/* Title */}
                  <div>
                    <h3 className="text-grey-900">Masukkan Kode Verifikasi</h3>
                    <p className="mt-1 text-base font-medium text-grey-300">
                      Kode verifikasi telah dikirim melalui e-mail ke{" "}
                      {modifyEmail(email)}
                    </p>
                  </div>

                  {/* Code Verify */}
                  <div>
                    <div
                      className={`relative mt-2 rounded-lg border focus-within:ring ${
                        errors.code
                          ? "border-negative text-negative focus-within:text-negative focus-within:ring-negative "
                          : "border-grey-200 text-grey-200 focus-within:text-grey-900 focus-within:ring-grey-900 "
                      } `}
                    >
                      <input
                        {...register("code")}
                        id="code-verify"
                        type="number"
                        className={`block w-full rounded-lg border-0 p-4 pe-14 text-base focus:outline-none focus:ring-0`}
                        placeholder="Masukkan kode verifikasi"
                      />
                      <button
                        id="submit-button"
                        type="submit"
                        className="absolute inset-y-0 end-0 flex items-center pe-4 disabled:text-grey-100"
                        disabled={isSubmitting}
                      >
                        <IoSend size={24} />
                      </button>
                    </div>
                    <span className="text-xs text-red-500">
                      {errors.code?.message}
                    </span>
                  </div>
                </form>
                <div className="mt-4">
                  <button
                    id="get-code"
                    className="text-base font-medium text-grey-300 disabled:text-grey-100"
                    onClick={repeatSendCode}
                    disabled={isLoading}
                  >
                    {isLoading ? "Loading..." : "Kirim ulang kode"}
                  </button>
                </div>
              </div>

              {/* Illustration */}
              <div id="code-verify-illustration" className="hidden lg:block">
                <img
                  className="w-full"
                  src={codeVerifyIllus}
                  alt="code-verify-illustration"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Verify;
