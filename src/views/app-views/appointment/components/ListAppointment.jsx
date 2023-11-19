import { useState } from "react";
import { Row, Col, Card, Table, Button, Flex } from "antd";

import Utils from "@/utils";
import Icon01 from "@/assets/db-icon-01.png";
import Icon02 from "@/assets/db-icon-02.png";
import ListFilter from "./ListFilter";
import DetailPatient from "./DetailPatient";

export default function AppointmentTable() {
  const [isOpen, setIsOpen] = useState(false);
  const handleOpen = () => {
    setIsOpen((prev) => !prev);
  };

  const columns = [
    {
      title: "ID",
      dataIndex: "id",
      key: "id",
      width: 100,
    },
    {
      title: "Nama Pasien",
      dataIndex: "name",
      key: "name",
      width: 300,
    },
    {
      title: "No Urut",
      dataIndex: "no",
      key: "no",
      width: 100,
    },
    {
      title: "Tanggal",
      dataIndex: "date",
      key: "date",
      width: 150,
    },
    {
      title: "Sesi",
      dataIndex: "session",
      key: "session",
      width: 100,
    },
    {
      title: "Pembayaran",
      dataIndex: "payment",
      key: "payment",
      width: 200,
      render: (val) => (
        <span className="text-green-500">{Utils.thousandSeparator(val)}</span>
      ),
    },
    {
      title: "Metode",
      dataIndex: "method",
      key: "method",
      width: 300,
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
      width: 200,
      render: (_, { status }) => (
        <>
          {status.map((tag) => {
            let color;
            if (tag === "Berjalan") {
              color = "text-link bg-link-25 cursor-default w-28";
            } else if (tag === "Menunggu") {
              color = "text-warning bg-warning-25 cursor-default w-28";
            } else if (tag === "Selesai") {
              color = "text-positive bg-positive-25 cursor-default w-28";
            } else {
              color = "text-negative bg-negative-25 cursor-default w-28";
            }

            return (
              <Button className={color} key={tag} type="primary">
                <span className="font-medium">{tag}</span>
              </Button>
            );
          })}
        </>
      ),
    },
  ];

  const data = [
    {
      id: "#001",
      name: "Naufal Helmi",
      no: "009",
      date: "23/10/23",
      session: "Pagi",
      payment: 123000,
      method: "Bayar di Klinik",
      status: ["Menunggu"],
    },
    {
      id: "#001",
      name: "Naufal Helmi",
      no: "009",
      date: "23/10/23",
      session: "Pagi",
      payment: 123000,
      method: "Bayar di Klinik",
      status: ["Berjalan"],
    },
    {
      id: "#001",
      name: "Naufal Helmi",
      no: "009",
      date: "23/10/23",
      session: "Pagi",
      payment: 123000,
      method: "Bayar di Klinik",
      status: ["Dibatalkan"],
    },
    {
      id: "#001",
      name: "Naufal Helmi",
      no: "009",
      date: "23/10/23",
      session: "Pagi",
      payment: 123000,
      method: "Bayar di Klinik",
      status: ["Selesai"],
    },
  ].map((item, i) => ({ ...item, key: (i + 1).toString() }));

  const card = [
    {
      title: "Janji Temu Hari Ini",
      total: "100",
      icon: `${Icon01}`,
    },
    {
      title: "Menunggu Verifikasi",
      total: "250",
      icon: `${Icon02}`,
    },
  ];

  return (
    <>
      <h3 className="mb-3 font-bold">Janji Temu</h3>
      <Row gutter={[16, 16]} className="mb-4" id="appointment-card">
        {card.map((item, i) => (
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
        <Table
          id="appointment-table-list"
          columns={columns}
          dataSource={data}
          scroll={{ x: true }}
          style={{ maxWidth: "100%" }}
          onRow={(val) => ({
            onClick: () => handleOpen(val),
          })}
        />
      </Card>
      {/* drawer detail pasien */}
      {isOpen && <DetailPatient isOpen={isOpen} handleOpen={handleOpen} />}
    </>
  );
}
