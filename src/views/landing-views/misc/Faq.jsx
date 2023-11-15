// import React from "react";
import { Collapse, Card, Row, Col } from "antd";
import { MdOutlineEmail } from "react-icons/md";

import Breadcrumb from "@/components/layout-components/Breadcrumb";
import Button from "@/components/shared-components/Button";
import BannerDownload from "@/components/shared-components/BannerDownload";

import { useDocumentTitle } from "@/hooks/useDocumentTitle";
import { useScrollToTop } from "@/hooks/useScrollToTop";
import { DataFaq } from "@/views/landing-views/constant/faq";

const items = [
  {
    key: "1",
    label: <p>Bagaimana cara melihat detail janji temu saya?</p>,
    children: (
      <>
        <p className="mb-4">
          Ikuti langkah berikut untuk melihat detail janji temu kamu:
        </p>
        <p>1. Pilih 'Riwayat' pada menu bagian bawah layar. </p>
        <p>2. Pilih janji temu untuk melihat detailnya.</p>
      </>
    ),
  },
  {
    key: "2",
    label: <p>Bagaimana cara membatalkan janji temu saya?</p>,
    children: (
      <>
        <p className="mb-4">
          Ikuti langkah berikut untuk membatalkan janji temu:
        </p>
        <p>1. Pilih 'Riwayat Transaksi' pada menu bagian bawah layar.</p>
        <p>2. Pilih janji yang ingin dibatalkan.</p>
        <p>3. Pilih 'Batalkan'.</p>
      </>
    ),
  },
  {
    key: "3",
    label: <p>Berapa lama estimasi pengembalian dana (refund) ReproHealth?</p>,
    children: (
      <>
        <p className="mb-4">
          Berikut adalah perkiraan kapan pengembalian danamu akan diterima:
        </p>
        <p>
          Kartu Debit : Maksimal 14 hari kerja tergantung bank (tidak termasuk
          hari Sabtu, Minggu & Libur Nasional).
        </p>
        <p className="mt-4">
          Apabila sudah lewat dari waktu di atas dan kamu belum menerima
          pengembalian dana, hubungi email ReproHealth di
          helpreprohealth@gmail.com.
        </p>
      </>
    ),
  },
  {
    key: "4",
    label: <p>Bagaimana cara mengubah jadwal janji temu saya?</p>,
    children: (
      <>
        <p className="mb-4">
          Ikuti langkah berikut untuk mengubah jadwal janji temu:
        </p>
        <p>1. Pilih 'Riwayat Transaksi' pada menu bagian bawah layar.</p>
        <p>2. Pilih janji yang ingin kamu ubah dan klik 'Ubah Jadwal'.</p>
        <p>3. Pilih tanggal dan waktu yang baru.</p>
        <p className="mt-4">
          Apabila langkah di atas ini sudah tidak bisa dilakukan dan kamu perlu
          mengubah jadwal, hubungi email ReproHealth di
          helpreprohealth@gmail.com.
        </p>
      </>
    ),
  },
  {
    key: "5",
    label: (
      <p>
        Saya tidak bisa membuat pesanan janji temu. Apa yang harus saya lakukan?
      </p>
    ),
    children: (
      <>
        <p className="mb-4">
          Jika kamu mengalami kendala membuat pesanan janji temu di ReproHealth,
          coba perbarui aplikasi ReproHealth kamu hingga ke versi terbaru.
        </p>
        <p>
          Jika masih mengalami kendala, silakan hubungi email ReproHealth di
          helpreprohealth@gmail.com.
        </p>
      </>
    ),
  },
];

export default function Faq() {
  useDocumentTitle(DataFaq.title);
  useScrollToTop();
  return (
    <>
      <div className="base-container">
        <Breadcrumb currentPage={DataFaq.title} />

        <section>
          <h2 className="mt-5 pb-5">{DataFaq.title}</h2>
          <Collapse accordion items={items} />
          <Card className="my-5 border-slate-300 bg-grey-10">
            <Row justify="space-between" gutter={[8, 16]} align="middle">
              <Col
                span={24}
                md={12}
                lg={8}
                className="text-center md:text-start"
              >
                <h5>{DataFaq.textContent}</h5>
              </Col>
              <Col span={24} md={12} lg={8} className="text-center md:text-end">
                <Button text="Hubungi email kami" icon={<MdOutlineEmail />} />
              </Col>
            </Row>
          </Card>
        </section>

        <section className="mb-[2rem] mt-[4rem]">
          <BannerDownload />
        </section>
      </div>
    </>
  );
}
