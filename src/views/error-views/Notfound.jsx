import { Button } from "antd";
import { Link } from "react-router-dom";

import imageNotfound from "@/assets/notfound.svg";

export default function Notfound() {
  return (
    <section
      id="error-notfound"
      className="m-auto mt-[50%] flex h-[100vw] w-[90vw] flex-col items-center justify-center text-center sm:mt-0 sm:w-[80vw] md:mt-0 md:h-[80vw] lg:mt-0 lg:h-[60vw] lg:w-[100vw] xl:h-[45vw]"
    >
      <img
        src={imageNotfound}
        className="h-[40%] items-center justify-center"
      />
      <div className="mt-[3rem]">
        <h4 className="text-base lg:text-2xl">Halaman Tidak Ditemukan!</h4>
        <p className="my-[1rem] text-xs text-[#686868] lg:text-sm">
          Link halaman yang anda tuju tidak ditemukan di server ini.
        </p>
        <Link to="/">
          <Button className="mt-[1rem] h-[50px] w-[100%] bg-green-500 text-base text-white hover:border-transparent">
            Kembali ke halaman utama
          </Button>
        </Link>
      </div>
    </section>
  );
}
