import { Row, Col, Card, Table } from "antd";

export default function AppointmentTable() {
  const columns = [
    {
      title: "No Urut",
      dataIndex: "no",
      key: "no",
    },
    {
      title: "Nama Pasien",
      dataIndex: "name",
      key: "name",
      render: (text) => <a>{text}</a>,
    },
    {
      title: "Tanggal",
      dataIndex: "date",
      key: "date",
    },
    {
      title: "Biaya",
      dataIndex: "cost",
      key: "cost",
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
    },
  ];
  const data = [
    {
      key: "1",
      no: "009",
      name: "Naufal Helmi",
      date: "23/10/23 - Pagi",
      cost: "Rp 123.456",
    },
  ];
  return (
    <>
      <Row gutter={[16]}>
        <Col span={16}>
          <Card>
            <h4 className="mb-4 font-bold">Janji Temu</h4>
            <Table columns={columns} dataSource={data} />
          </Card>
        </Col>
      </Row>
    </>
  );
}
