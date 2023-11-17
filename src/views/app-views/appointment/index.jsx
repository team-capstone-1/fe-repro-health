import { Row, Col } from "antd";

import ListAppointment from "./components/ListAppointment";

export default function Appointment() {
  return (
    <>
      <div className="mb-5 py-5">
        <Row gutter={[16, 24]}>
          <Col span={24}>
            <ListAppointment />
          </Col>
        </Row>
      </div>
    </>
  );
}
