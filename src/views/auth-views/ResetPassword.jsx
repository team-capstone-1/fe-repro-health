import { useNavigate } from "react-router-dom";
import { AiOutlineArrowLeft } from "react-icons/ai";
import * as yup from "yup";
import resetPasswordIllus from "@/assets/reset-password-illustration.svg";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { APIAuth } from "@/apis/APIAuth";
import { showErrorToast } from "@/components/shared-components/Toast";
import { useDocumentTitle } from "@/hooks/useDocumentTitle";
import { ToastContainer } from "react-toastify";

const ResetPassword = () => {
  useDocumentTitle("Reset Password");

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
      await APIAuth.changePassword(data);
      navigate("/dashboard");
    } catch (error) {
      showErrorToast(
        "email atau password yang anda masukan salah!",
        "top-right",
      );
      console.error(error);
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
                    Buatlah kata sandi baru yang kuat untuk akun dengan email
                    naura22@gmail.com
                  </p>
                </div>

                <div className="space-y-2">
                  {/* New Password */}
                  <div>
                    <label className="text-base font-medium text-grey-300">
                      Kata sandi baru
                    </label>
                    <input
                      id="new-password"
                      type="password"
                      {...register("password")}
                      className="mt-2 block w-full rounded-lg border border-grey-100 bg-gray-50 p-4 text-base text-grey-100 focus:border-grey-900 focus:text-grey-900 focus:outline-none focus:ring-1 focus:ring-grey-900"
                      placeholder="Masukkan kata sandi baru"
                    />
                  </div>
                  <span className=" text-xs text-red-500">
                    {errors.password?.message}
                  </span>
                  {/* Password */}
                  <div>
                    <label className="text-base font-medium text-grey-300">
                      Konfirmasi kata sandi baru
                    </label>
                    <input
                      id="reset-password"
                      type="password"
                      {...register("confirmPassword")}
                      className="mt-2 block w-full rounded-lg border border-grey-100 bg-gray-50 p-4 text-base text-grey-100 focus:border-grey-900 focus:text-grey-900 focus:outline-none focus:ring-1 focus:ring-grey-900"
                      placeholder="Masukkan kata sandi baru"
                    />
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
                    {isSubmitting ? "Loading..." : "lanjut"}
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
