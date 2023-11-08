// import React from "react";
import { Collapse, Card } from "antd";
import { MdOutlineEmail } from "react-icons/md";

import HandPhone from "@/assets/hand-phone.png";

import Button from "@/components/shared-components/button";
import ButtonGooglePlay from "@/components/shared-components/ButtonGooglePlay";
import ButtonAppStore from "@/components/shared-components/ButtonAppStore";

const items = [
  {
    key: "1",
    label: <p>Bagaimana cara melihat detail janji temu saya?</p>,
    children: (
      <>
        <p className="mb-4">Ikuti langkah berikut untuk melihat detail janji temu kamu:</p>
        <p>1. Pilih &apos;Riwayat&apos; pada menu bagian bawah layar. </p>
        <p>2. Pilih janji temu untuk melihat detailnya.</p>
      </>
    ),
  },
  {
    key: "2",
    label: <p>Bagaimana cara membatalkan janji temu saya?</p>,
  },
  {
    key: "3",
    label: <p>Berapa lama estimasi pengembalian dana (refund) ReproHealth?</p>,
  },
  {
    key: "4",
    label: <p>Mengapa proses verifikasi KTP atau KIA saya gagal?</p>,
  },
  {
    key: "5",
    label: (
      <p>
        Saya ingin menghapus akun Halodoc yang terdaftar ke nomor ponsel saya yang hilang. Kemana
        saya harus menghubungi?
      </p>
    ),
  },
];

export default function Faq() {
  return (
    <>
      <div className="py-5 base-container">
        <h2 className="py-5">Frequently Ask Question</h2>
        <Collapse accordion items={items} />

        <Card className="bg-grey-10 my-5">
          <div className="grid grid-cols-6 gap-4">
            <div className="col-start-1 col-end-3 md:col-end-4">
              <h5>Punya pertanyaan lanjutan?</h5>
            </div>
            <div className="col-end-7 col-span-2 md:col-span-3 grid justify-items-end">
              <Button text="Hubungi email kami" icon={<MdOutlineEmail />} />
            </div>
          </div>
        </Card>

        <div className="bg-green-50 rounded-lg px-5">
          <div className="grid grid-cols-8">
            <div className="justify-self-center pb-0 col-span-2 lg:col-span-2 invisible md:visible">
              <img src={HandPhone} alt="" />
            </div>
            <div className="self-center col-span-6">
              <div className="grid grid-cols-6">
                <div className="col-span-4 md:col-span-6 lg:col-span-4 self-center">
                  <h4 className="text-green-900 font-semibold">
                    Jadikan Kesehatan Reproduksi Anda Prioritas! Unduh ReproHealth Sekarang
                  </h4>
                  <p className="font-semibold">Tanggapan Cepat, Solusi Akurat!</p>
                </div>
                <div className="col-span-2 md:col-span-6 lg:col-span-2 flex flex-wrap self-center place-content-center">
                  <ButtonGooglePlay />
                  <ButtonAppStore />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
