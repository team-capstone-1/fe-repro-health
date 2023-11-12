import { Row, Col } from "antd";

import HandPhone from "@/assets/handphone-2.png";

import ButtonGooglePlay from "@/components/shared-components/ButtonGooglePlay";
import ButtonAppStore from "@/components/shared-components/ButtonAppStore";

export default function BannerDownload() {
  return (
    <>
      <div className="bg-green-50 rounded-lg px-5 pt-5 md:pt-0 bg-vector-header-2 sm:bg-no-repeat">
        <Row align="middle">
          <Col span={6} xs={0} md={6} align="center">
            <img src={HandPhone} alt="" />
          </Col>
          <Col span={18} xs={24} sm={18}>
            <Row align="middle">
              <Col span={24} lg={16} xl={18}>
                <h4 className="text-green-900 font-bold">
                  Jadikan Kesehatan Reproduksi Anda Prioritas! Unduh ReproHealth
                  Sekarang
                </h4>
                <h5 className="font-semibold text-grey-400">
                  Tanggapan Cepat, Solusi Akurat!
                </h5>
              </Col>
              <Col span={24} lg={8} xl={6} className="my-4 my-md-0">
                <Row>
                  <Col span={24} xs={12} md={10} lg={24} align="center">
                    <ButtonGooglePlay />
                  </Col>
                  <Col span={24} xs={12} md={10} lg={24} align="center">
                    <ButtonAppStore />
                  </Col>
                </Row>
              </Col>
            </Row>
          </Col>
          <Col xs={24} md={0} align="center">
            <img src={HandPhone} alt="" />
          </Col>
        </Row>
      </div>
    </>
  );
}