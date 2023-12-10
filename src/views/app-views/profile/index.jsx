import { Col, Row } from "antd";

import { DoctorProfile } from "./components/DoctorProfile";
import { TabsDoctor } from "./components/TabsDoctor";
import { useDocumentTitle } from "@/hooks/useDocumentTitle";
import { useScrollToTop } from "@/hooks/useScrollToTop";

export default function Profile() {
  useDocumentTitle("Profil");
  useScrollToTop();
  return (
    <section className="mb-5 py-5">
      <Row gutter={[16, 24]}>
        <Col span={24}>
          <DoctorProfile />
        </Col>
        <Col span={24}>
          <TabsDoctor />
        </Col>
      </Row>
    </section>
  );
}
