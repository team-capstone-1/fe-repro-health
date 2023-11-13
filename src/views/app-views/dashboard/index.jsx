import { Row, Col } from "antd";

import Topbar from "@/components/layout-components/Topbar";
import TotalCards from "./components/TotalCards";
import AppointmentTable from "./components/AppointmentTable";

export default function index() {
  return (
    <>
      <Topbar />
      <div className="base-container">
        <Row gutter={[8, 16]}>
          <Col span={24}>
            <TotalCards />
          </Col>
          <Col span={24}>
            <AppointmentTable />
          </Col>
        </Row>
      </div>
    </>
  );
}
