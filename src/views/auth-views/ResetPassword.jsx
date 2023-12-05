import * as yup from "yup";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import { ToastContainer } from "react-toastify";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import { yupResolver } from "@hookform/resolvers/yup";

import resetPasswordIllus from "@/assets/reset-password-illustration.svg";
import { useDocumentTitle } from "@/hooks/useDocumentTitle";
import { APIAuth } from "@/apis/APIAuth";
import {
  showErrorToast,
  showSuccessToast,
} from "@/components/shared-components/Toast";
import {
  selectDoctorProfile,
  fetchGetDoctorProfile,
} from "@/store/get-doctor-profile-slice";
import {
  selectIsPasswordReset,
  toggleResetPassword,
} from "@/store/is-password-reset-slice";

const ResetPassword = () => {
  const [isVisiblePassword, setIsVisiblePassword] = useState(false);
  const [isVisiblePasswordConfirm, setIsVisiblePasswordConfirm] =
    useState(false);

  useDocumentTitle("Reset Password");
  const dispatch = useDispatch();
  const stateData = useSelector(selectDoctorProfile);
  const emailDoctor = stateData.data?.response?.email;
  const { isPasswordReset } = useSelector(selectIsPasswordReset);

  useEffect(() => {
    // if (!isPasswordReset) {
    //   navigate("/dashboard");
    // }
    dispatch(fetchGetDoctorProfile());
  }, [dispatch]);

  const navigate = useNavigate();
  const schema = yup.object().shape({
    password: yup
      .string()
      .required("Kata sandi harus diisi")
      .min(8, "Kata sandi minimal 8 karakter"),
    confirmPassword: yup
      .string()
      .required("Kata sandi harus diisi")
      .min(8, "Kata sandi minimal 8 karakter")
      .oneOf([yup.ref("password"), null], "Kata sandi tidak sama"),
  });

  const {
    register,
    formState: { isSubmitting, errors },
    handleSubmit,
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmitHandler = async (data) => {
    try {
      await APIAuth.changePassword(data).then(() => {
        showSuccessToast("Kata sandi telah diganti!", "top-right");
        setTimeout(() => {
          dispatch(toggleResetPassword());
          navigate("/dashboard");
        }, 2000);
      });
    } catch (error) {
      console.error(error);
      showErrorToast("gagal mengganti kata sandi!", "top-right");
    }
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
              <form
                id="reset-password-form"
                className="flex flex-col gap-4 md:gap-8"
                onSubmit={handleSubmit(onSubmitHandler)}
              >
                {/* Title */}
                <div>
                  <h3 className="text-grey-900">Masukkan Kata Sandi Baru</h3>
                  <p className="mt-1 text-base font-medium text-grey-300">
                    Buatlah kata sandi baru yang kuat untuk akun dengan email{" "}
                    {emailDoctor}
                  </p>
                </div>

                <div className="space-y-2">
                  {/* New Password */}
                  <div>
                    <label className="text-base font-medium text-grey-300">
                      Kata sandi baru
                    </label>
                    <div
                      className={`relative mt-2 rounded-lg border focus-within:ring ${
                        errors.password
                          ? "border-negative text-negative focus-within:text-negative focus-within:ring-negative"
                          : "border-grey-200 text-grey-200 focus-within:text-grey-900 focus-within:ring-grey-900"
                      }`}
                    >
                      <input
                        id="new-password"
                        type={isVisiblePassword ? "text" : "password"}
                        {...register("password")}
                        className="w-full rounded-lg border-0 p-3 text-base focus:outline-none focus:ring-0"
                        placeholder="Masukkan kata sandi baru"
                      />
                      <button
                        id="toggle-visibility-password"
                        type="button"
                        onClick={() => setIsVisiblePassword((prev) => !prev)}
                        className="absolute inset-y-0 end-0 flex cursor-pointer items-center pe-4"
                      >
                        {isVisiblePassword ? (
                          <FaRegEyeSlash size={24} />
                        ) : (
                          <FaRegEye size={24} />
                        )}
                      </button>
                    </div>
                  </div>
                  <span className=" text-xs text-red-500">
                    {errors.password?.message}
                  </span>
                  {/* Password Confirm */}
                  <div>
                    <label className="text-base font-medium text-grey-300">
                      Konfirmasi kata sandi baru
                    </label>
                    <div
                      className={`relative mt-2 rounded-lg border focus-within:ring ${
                        errors.password
                          ? "border-negative text-negative focus-within:text-negative focus-within:ring-negative"
                          : "border-grey-200 text-grey-200 focus-within:text-grey-900 focus-within:ring-grey-900"
                      }`}
                    >
                      <input
                        id="reset-password"
                        type={isVisiblePasswordConfirm ? "text" : "password"}
                        {...register("confirmPassword")}
                        className="w-full rounded-lg border-0 p-3 text-base focus:outline-none focus:ring-0"
                        placeholder="Masukkan kata sandi baru"
                      />
                      <button
                        id="toggle-visibility-password-confirm"
                        type="button"
                        onClick={() =>
                          setIsVisiblePasswordConfirm((prev) => !prev)
                        }
                        className="absolute inset-y-0 end-0 flex cursor-pointer items-center pe-4"
                      >
                        {isVisiblePasswordConfirm ? (
                          <FaRegEyeSlash size={24} />
                        ) : (
                          <FaRegEye size={24} />
                        )}
                      </button>
                    </div>
                  </div>
                  <span className=" text-xs text-red-500">
                    {errors.confirmPassword?.message}
                  </span>
                </div>

                {/* Button */}
                <div>
                  <button
                    id="submit-button"
                    className="flex w-full items-center justify-center gap-2 rounded-lg bg-green-500 p-4 text-xl font-bold text-grey-10 hover:bg-green-600 disabled:bg-green-700"
                    type="submit"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Loading..." : "Lanjut"}
                  </button>
                </div>
              </form>

              {/* Illustration */}
              <div id="reset-password-illustration" className="hidden lg:block">
                <img
                  className="w-full"
                  src={resetPasswordIllus}
                  alt="reset-password-illustration"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ResetPassword;
