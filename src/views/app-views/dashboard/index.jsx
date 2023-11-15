import { Row, Col } from "antd";

import ButtonFilter from "./components/ButtonFilter";
import TotalCards from "./components/TotalCards";
import AppointmentTable from "./components/AppointmentTable";
import Calendar from "./components/Calendar";
import ChartIncome from "./components/ChartIncome";

export default function Dashboard() {
  return (
    <>
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
    </>
  );
}
