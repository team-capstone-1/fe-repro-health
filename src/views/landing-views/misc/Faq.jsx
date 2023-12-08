/* eslint-disable react/no-unescaped-entities */
import { Link } from "react-router-dom";
import { Collapse, Card, Row, Col } from "antd";
import { HiOutlineMail } from "react-icons/hi";

import { Breadcrumbs } from "@/components/layout-components/Breadcrumb";
import Button from "@/components/shared-components/Button";
import BannerDownload from "@/components/shared-components/BannerDownload";

import { useDocumentTitle } from "@/hooks/useDocumentTitle";
import { useScrollToTop } from "@/hooks/useScrollToTop";
import { DataFaq } from "@/views/landing-views/constant/faq";
import { QuestionFaq } from "../constant/faq";

export default function Faq() {
  useDocumentTitle(DataFaq.title);
  useScrollToTop();
  return (
    <>
      <div id="breadcrumb-faq" className="base-container">
        <Breadcrumbs currentPage={DataFaq.title} />

        <section id="faq-section">
          <h2 id="faq-title" className="mt-5 pb-5">
            {DataFaq.title}
          </h2>
          <Collapse accordion items={QuestionFaq} />
          <Card id="faq-card" className="my-5 border-slate-300 bg-grey-10">
            <Row justify="space-between" gutter={[8, 16]} align="middle">
              <Col
                span={24}
                md={12}
                lg={8}
                className="text-center md:text-start"
              >
                <h5 id="faq-card-text">{DataFaq.textContent}</h5>
              </Col>
              <Col
                span={24}
                md={12}
                lg={8}
                className="text-center md:text-end md:font-semibold"
              >
                <Link to="mailto:reprohealth@gmail.com" id="email-us-faq">
                  <Button text="Hubungi email kami" icon={<HiOutlineMail />} />
                </Link>
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
