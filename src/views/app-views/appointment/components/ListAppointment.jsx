import { useState } from "react";
import { Row, Col, Card, Table, Flex, ConfigProvider } from "antd";

import ListFilter from "./ListFilter";
import DetailPatient from "./DetailPatient";
import { ColumnAppointment } from "../constant/appointment";
import { DataAppointment } from "../constant/appointment";
import { CardAppointment } from "../constant/appointment";
import { useDocumentTitle } from "@/hooks/useDocumentTitle";
import { useScrollToTop } from "@/hooks/useScrollToTop";

export default function AppointmentTable() {
  useDocumentTitle("Janji Temu");
  useScrollToTop();
  const [isOpen, setIsOpen] = useState(false);
  const handleOpen = () => {
    setIsOpen((prev) => !prev);
  };

  const onChange = (pagination, filters, sorter) => {
    console.log("params", pagination, filters, sorter);
  };

  return (
    <>
      <h3 className="mb-3 font-bold">Janji Temu</h3>
      <Row gutter={[16, 16]} className="mb-4" id="appointment-card">
        {CardAppointment.map((item, i) => (
          <Col id="total-cards" key={i} span={6} xs={24} md={8} lg={7}>
            <Card>
              <div className="grid h-20 content-between">
                <Flex justify="space-between" align="flex-start">
                  <div>
                    <p
                      id="total-card-title"
                      className="me-0 font-medium lg:me-3"
                    >
                      {item.title}
                    </p>
                    <h4 id="total-item" className="font-bold">
                      {item.total}
                    </h4>
                  </div>
                  <div className="grid h-16 w-16 place-content-center rounded-lg bg-green-50">
                    <img id="item-icon" src={item.icon} alt="item-icon" />
                  </div>
                </Flex>
              </div>
            </Card>
          </Col>
        ))}
      </Row>
      <Card>
        <ListFilter />
        <ConfigProvider
          theme={{
            components: {
              Table: {
                colorPrimary: "#17c6a3",
              },
              Dropdown: {
                colorPrimary: "#17c6a3",
              },
              Checkbox: {
                colorPrimary: "#17c6a3",
                colorPrimaryHover: "#15b494",
              },
              Button: {
                colorLink: "#15b494",
                colorLinkHover: "#108d74",
                colorLinkActive: "#15b494",
              },
            },
          }}
        >
          <Table
            id="appointment-table-list"
            columns={ColumnAppointment}
            dataSource={DataAppointment}
            onChange={onChange}
            scroll={{ x: true }}
            style={{ maxWidth: "100%" }}
            onRow={(val) => ({
              onClick: () => handleOpen(val),
            })}
          />
        </ConfigProvider>
      </Card>
      {/* drawer detail pasien */}
      {isOpen && <DetailPatient isOpen={isOpen} handleOpen={handleOpen} />}
    </>
  );
}
