import { Collapse, Card, Row, Col } from "antd";
import { MdOutlineEmail } from "react-icons/md";

import Breadcrumb from "@/components/layout-components/Breadcrumb";
import Button from "@/components/shared-components/Button";
import BannerDownload from "@/components/shared-components/BannerDownload";

import { CONST_faq } from "@/views/landing-views/constant/faq";

export default function Faq() {
  const faq = CONST_faq;
  return (
    <>
      <div className="base-container">
        <Breadcrumb currentPage="FAQ" />
        <section>
          <h2 className="mt-5 pb-5">Frequently Ask Question</h2>
          <Collapse accordion items={faq} />
          <Card className="my-5 bg-grey-10">
            <Row justify="space-between" gutter={[8, 16]} align="middle">
              <Col
                span={24}
                md={12}
                lg={8}
                className="text-center md:text-start"
              >
                <h5>{FAQ.textContent}</h5>
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
