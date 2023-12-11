import icon01 from "@/assets/db-icon-01.png";
import icon02 from "@/assets/db-icon-02.png";
import { Card, Col, Flex, Row } from "antd";

export function CardAppointment({ data }) {
  const appointmentToday = data?.filter(
    (item) => new Date(item.date).toDateString() === new Date().toDateString(),
  );

  const waitingVerification = data?.filter((item) => item.status === "waiting");
  return (
    <>
      <Row gutter={[16, 16]} className="mb-4" id="appointment-card">
        <Col id="total-cards" span={6} xs={24} md={8} lg={7}>
          <Card>
            <div className="grid h-20 content-between">
              <Flex justify="space-between" align="flex-start">
                <div>
                  <p id="total-card-title" className="me-0 font-medium lg:me-3">
                    Janji temu hari ini
                  </p>
                  <h4 id="total-item" className="font-bold">
                    {appointmentToday?.length}
                  </h4>
                </div>
                <div className="grid h-16 w-16 place-content-center rounded-lg bg-green-50">
                  <img id="item-icon" src={icon01} alt="item-icon" />
                </div>
              </Flex>
            </div>
          </Card>
        </Col>
        <Col id="total-cards" span={6} xs={24} md={8} lg={7}>
          <Card>
            <div className="grid h-20 content-between">
              <Flex justify="space-between" align="flex-start">
                <div>
                  <p id="total-card-title" className="me-0 font-medium lg:me-3">
                    Menunggu Verifikasi
                  </p>
                  <h4 id="total-item" className="font-bold">
                    {waitingVerification?.length}
                  </h4>
                </div>
                <div className="grid h-16 w-16 place-content-center rounded-lg bg-green-50">
                  <img id="item-icon" src={icon02} alt="item-icon" />
                </div>
              </Flex>
            </div>
          </Card>
        </Col>
      </Row>
    </>
  );
}
