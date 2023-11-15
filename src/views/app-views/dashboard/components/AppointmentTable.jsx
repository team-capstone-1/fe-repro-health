import { Row, Col, Card, Table, Button } from "antd";

export default function AppointmentTable() {
  const columns = [
    {
      title: "ID",
      dataIndex: "id",
      key: "id",
    },
    {
      title: "Nama Pasien",
      dataIndex: "name",
      key: "name",
      render: (text) => <a>{text}</a>,
    },
    {
      title: "No Urut",
      dataIndex: "no",
      key: "no",
    },
    {
      title: "Tanggal",
      dataIndex: "date",
      key: "date",
    },
    {
      title: "Sesi",
      dataIndex: "session",
      key: "session",
    },
    {
      title: "Pembayaran",
      dataIndex: "payment",
      key: "payment",
      render: (text) => <span className="text-green-500">{text}</span>,
    },
    {
      title: "Metode",
      dataIndex: "method",
      key: "method",
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
      render: (_, { status }) => (
        <>
          {status.map((tag) => {
            let color;
            if (tag === "Berjalan") {
              color = "text-link bg-link-25 cursor-default";
            } else if (tag === "Menunggu") {
              color = "text-warning bg-warning-25 cursor-default";
            } else {
              color = "text-negative bg-negative-25 cursor-default";
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
      payment: "Rp 123.000",
      method: "Bayar di Klinik",
      status: ["Menunggu"],
    },
    {
      id: "#001",
      name: "Naufal Helmi",
      no: "009",
      date: "23/10/23",
      session: "Pagi",
      payment: "Rp 123.000",
      method: "Bayar di Klinik",
      status: ["Berjalan"],
    },
    {
      id: "#001",
      name: "Naufal Helmi",
      no: "009",
      date: "23/10/23",
      session: "Pagi",
      payment: "Rp 123.000",
      method: "Bayar di Klinik",
      status: ["Dibatalkan"],
    },
  ];

  return (
    <>
      <Row gutter={[16]}>
        <Col span={24}>
          <Card>
            <p className="mb-4 text-xl font-bold">Janji Temu</p>
            <Table columns={columns} dataSource={data} />
          </Card>
        </Col>
      </Row>
    </>
  );
}
