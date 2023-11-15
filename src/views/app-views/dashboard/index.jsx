import { Row, Col } from "antd";

import ButtonFilter from "./components/ButtonFilter";
import TotalCards from "./components/TotalCards";
import ChartIncome from "./components/ChartIncome";
import AppointmentTable from "./components/AppointmentTable";
import Calendar from "./components/Calendar";

export default function Dashboard() {
  return (
    <>
      <div className="py-5">
        <ButtonFilter />
        <Row gutter={[16, 16]}>
          <Col span={24}>
            <TotalCards />
          </Col>
          <Col span={24}>
            <ChartIncome />
          </Col>
          <Col xs={24} md={24} lg={14} xl={16}>
            <AppointmentTable />
          </Col>
          <Col xs={24} md={24} lg={10} xl={8}>
            <Calendar />
          </Col>
        </Row>
      </div>
    </>
  );
}
