// import React from "react";
import { Collapse, Card, Row, Col } from "antd";
import { MdOutlineEmail } from "react-icons/md";

import Button from "@/components/shared-components/Button";
import BannerDownload from "@/components/shared-components/BannerDownload";

const items = [
  {
    key: "1",
    label: <p>Bagaimana cara melihat detail janji temu saya?</p>,
    children: (
      <>
        <p className="mb-4">
          Ikuti langkah berikut untuk melihat detail janji temu kamu:
        </p>
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
        Saya ingin menghapus akun Halodoc yang terdaftar ke nomor ponsel saya
        yang hilang. Kemana saya harus menghubungi?
      </p>
    ),
  },
];

export default function Faq() {
  return (
    <>
      <div className="py-5 base-container">
        <h2 className="pb-5 mt-5">Frequently Ask Question</h2>
        <Collapse accordion items={items} />
        <Card className="bg-grey-10 my-5">
          <Row justify="space-between" gutter={[8, 16]} align="middle">
            <Col
              span={24}
              md={12}
              lg={8}
              xl={6}
              className="text-center text-md-start"
            >
              <h5>Punya pertanyaan lanjutan?</h5>
            </Col>
            <Col
              span={24}
              md={12}
              lg={8}
              xl={6}
              className="text-center text-md-end"
            >
              <Button text="Hubungi email kami" icon={<MdOutlineEmail />} />
            </Col>
          </Row>
        </Card>
        <BannerDownload />
      </div>
    </>
  );
}
