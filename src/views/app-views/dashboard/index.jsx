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
      <Row gutter={[8, 16]}>
        <Col span={24}>
          <TotalCards />
        </Col>
        <Col span={24}>
          <ChartIncome />
        </Col>
        <Col span={24}>
          <AppointmentTable />
        </Col>
        <Col span={24}>
          <Calendar />
        </Col>
      </Row>
    </>
  );
}
