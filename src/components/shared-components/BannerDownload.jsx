import { Row, Col } from "antd";

import HandPhone from "@/assets/hand-phone.png";

import ButtonGooglePlay from "@/components/shared-components/ButtonGooglePlay";
import ButtonAppStore from "@/components/shared-components/ButtonAppStore";

export default function BannerDownload() {
  return (
    <>
      <div className="bg-green-50 rounded-lg px-5 py-5 md:py-0">
        <Row align="middle">
          <Col span={6} xs={0} md={6} align="center">
            <img src={HandPhone} alt="" />
          </Col>
          <Col span={18} xs={24} sm={18}>
            <Row align="middle" gutter={[8, 16]}>
              <Col span={24} lg={16} xl={18}>
                <h4 className="text-green-900 font-semibold">
                  Jadikan Kesehatan Reproduksi Anda Prioritas! Unduh ReproHealth Sekarang
                </h4>
                <h5 className="font-semibold">Tanggapan Cepat, Solusi Akurat!</h5>
              </Col>
              <Col span={24} lg={8} xl={6}>
                <Row justify="space-evenly">
                  <Col span={24} xs={12} md={12} lg={24}>
                    <ButtonGooglePlay />
                  </Col>
                  <Col span={24} xs={12} md={12} lg={24}>
                    <ButtonAppStore />
                  </Col>
                </Row>
              </Col>
            </Row>
          </Col>
        </Row>
      </div>
    </>
  );
}
