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
      title: "Status",
      dataIndex: "status",
      key: "status",
      render: (_, { status }) => (
        <>
          {status.map((tag) => {
            let color;
            if (tag === "Berjalan") {
              color = "text-link bg-link-25";
            } else if (tag === "Menunggu") {
              color = "text-warning bg-warning-25";
            } else {
              color = "text-negative bg-negative-25";
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
      status: ["Menunggu"],
    },
    {
      id: "#001",
      name: "Naufal Helmi",
      no: "009",
      date: "23/10/23",
      session: "Pagi",
      status: ["Berjalan"],
    },
    {
      id: "#001",
      name: "Naufal Helmi",
      no: "009",
      date: "23/10/23",
      session: "Pagi",
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
