import { Button } from "antd";
import { Link } from "react-router-dom";

export default function Notfound() {
  return (
    <section id="error-notfound">
      <div className="bg-error-notfound flex h-screen w-screen items-center justify-center bg-center bg-no-repeat text-center">
        <div className="mt-[35%]">
          <h4 className="text-2xl">Halaman Tidak Ditemukan!</h4>
          <p className="text-sm text-[#686868]">
            Link halaman yang anda tuju tidak ditemukan di server ini.
          </p>
          <Link to="/">
            <Button className="mt-[1rem] h-[50px] w-[100%] bg-green-500 text-base text-white hover:border-transparent">
              Kembali ke halaman utama
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
