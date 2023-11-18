import { Row, Col } from "antd";

import MySchedule from "./components/MySchedule";
import ListAppointment from "./components/ListAppointment";
import { Tabs } from "@/components/shared-components/Tabs";

export default function Appointment() {
  return (
    <>
      <Tabs title={["Janji Temu", "Jadwal Saya"]}>
        <section className="py-5">
          <Row gutter={[16, 24]}>
            <Col span={24}>
              <ListAppointment />
            </Col>
          </Row>
        </section>
        <section className="py-5">
          <MySchedule />
        </section>
      </Tabs>
    </>
  );
}
