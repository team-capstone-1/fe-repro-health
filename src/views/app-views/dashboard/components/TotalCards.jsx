import { Row, Col, Card, Flex } from "antd";

import Icon01 from "@/assets/db-icon-01.png";
import Icon02 from "@/assets/db-icon-02.png";
import Icon03 from "@/assets/db-icon-03.png";
import Icon04 from "@/assets/db-icon-04.png";

const data = [
  {
    title: "Total Janji Temu",
    total: "100",
    icon: `${Icon01}`,
    percent: "+5.2%",
  },
  {
    title: "Total Pasien",
    total: "250",
    icon: `${Icon02}`,
    percent: "-2%",
  },
  {
    title: "Total Pendapatan",
    total: "500K",
    icon: `${Icon03}`,
    percent: "+3.2%",
  },
  {
    title: "Total Artikel",
    total: "100",
    icon: `${Icon04}`,
    percent: "-35%",
  },
];

export default function TotalCards() {
  return (
    <>
      <Row gutter={[16, 16]}>
        {data.map((item, i) => (
          <Col key={i} span={6} xs={24} md={12} lg={6}>
            <Card>
              <div className="grid h-32 content-between">
                <Flex justify="space-between" align="flex-start">
                  <div>
                    <p className="me-0 font-medium lg:me-3">{item.title}</p>
                    <h4 className="font-bold">{item.total}</h4>
                  </div>
                  <div className="grid h-16 w-16 place-content-center rounded-lg bg-green-50">
                    <img src={item.icon} alt="" />
                  </div>
                </Flex>
                <h6 className="text-grey-200">
                  <span
                    className={`me-2 place-content-center rounded px-2 font-semibold ${
                      item.percent[0] === "+"
                        ? "bg-green-50 text-positive"
                        : item.percent[0] === "-"
                        ? "bg-red-50 text-negative"
                        : ""
                    }`}
                  >
                    {item.percent}
                  </span>
                  Sejak periode terakhir
                </h6>
              </div>
            </Card>
          </Col>
        ))}
      </Row>
    </>
  );
}
