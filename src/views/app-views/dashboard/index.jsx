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
        <Row gutter={[16, 24]}>
          <Col span={24}>
            <TotalCards />
          </Col>
          <Col xs={24} md={24} lg={14} xl={16}>
            <ChartIncome />
          </Col>
          <Col xs={24} md={24} lg={10} xl={8}>
            <Calendar />
          </Col>
          <Col span={24}>
            <AppointmentTable />
          </Col>
        </Row>
      </div>
    </>
  );
}
