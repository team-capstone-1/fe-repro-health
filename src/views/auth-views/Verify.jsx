import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { IoSend } from "react-icons/io5";
import codeVerifyIllus from "@/assets/code-verify-illustration.svg";

const Verify = () => {
  const navigate = useNavigate();
  const [isFocusCode, setIsFocusCode] = useState(false);

  return (
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
            <form id="verify-form" className="flex flex-col gap-12 lg:gap-20">
              {/* Title */}
              <div>
                <h3 className="text-grey-900">Masukkan Kode Verifikasi</h3>
                <p className="mt-1 text-base font-medium text-grey-300">
                  Kode verifikasi telah dikirim melalui e-mail ke
                  n******@g****.com
                </p>
              </div>

              {/* Code Verify */}
              <div>
                <div className="relative mt-2">
                  <input
                    onFocus={() => setIsFocusCode(true)}
                    onBlur={() => setIsFocusCode(false)}
                    id="code-verify"
                    type="number"
                    className="block w-full rounded-lg border border-grey-100 bg-gray-50 p-4 pe-14 text-base text-grey-100 focus:border-grey-900 focus:text-grey-900 focus:outline-none focus:ring-1 focus:ring-grey-900"
                    placeholder="Masukkan kode verifikasi"
                  />
                  <button
                    id="submit-button"
                    type="submit"
                    className="absolute inset-y-0 end-0 flex items-center pe-4"
                  >
                    <IoSend
                      color={`${isFocusCode === false ? "#686868" : "#0d0d0d"}`}
                      size={24}
                    />
                  </button>
                </div>
                <div className="mt-4">
                  <button
                    id="get-code"
                    className="text-base font-medium text-grey-300"
                  >
                    Kirim ulang kode
                  </button>
                </div>
              </div>
            </form>

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
  );
};

export default Verify;
