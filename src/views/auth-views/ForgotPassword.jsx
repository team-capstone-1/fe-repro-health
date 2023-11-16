import { useNavigate } from "react-router-dom";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import forgotPasswordIllus from "@/assets/forgot-password-illustration.svg";

const ForgotPassword = () => {
  const navigate = useNavigate();

  return (
    <section className="flex h-screen items-center justify-center">
      <div className="base-container">
        <div className="mx-auto max-w-[1200px] rounded-lg bg-white p-8 shadow-none md:p-16 md:shadow-[2px_2px_4px_4px_rgba(186,186,186,0.3)] lg:p-20">
          <button onClick={() => navigate(-1)} className="flex gap-3">
            <AiOutlineArrowLeft color="#989898" size={24} />
            <p className="text-base font-semibold text-grey-900">Kembali</p>
          </button>
          <div className="mt-[26px] grid grid-cols-1 items-center gap-32 lg:grid-cols-2">
            <form className="flex flex-col gap-12 lg:gap-20">
              {/* Title */}
              <div>
                <h3 className="text-grey-900">Lupa Kata Sandi Anda</h3>
                <p className="mt-1 text-justify text-base font-medium text-grey-300">
                  Masukkan alamat email Anda untuk mengatur ulang kata sandi
                  Anda. Kami akan mengirimkan Anda kode verifikasi untuk
                  mengatur ulang kata sandi.
                </p>
              </div>

              {/* Email */}
              <div>
                <input
                  id="email"
                  type="email"
                  className="block w-full rounded-lg border border-grey-100 p-4 text-base text-grey-100 focus:border-grey-900 focus:text-grey-900 focus:outline-none focus:ring-1 focus:ring-grey-900"
                  placeholder="Masukkan email anda"
                />
              </div>

              {/* Button */}
              <div>
                <button
                  type="submit"
                  onClick={() => navigate("/verify")}
                  className="flex w-full items-center justify-center gap-2 rounded-lg bg-green-500 px-8 py-4 text-base font-semibold text-grey-10 hover:bg-green-600"
                >
                  Lanjut
                  <AiOutlineArrowRight size={18} />
                </button>
              </div>
            </form>

            {/* Illustration */}
            <div className="hidden lg:block">
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
  );
};

export default ForgotPassword;
