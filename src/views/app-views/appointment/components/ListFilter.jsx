import { Col, Form, Input, Row, Select } from "antd";

export default function ListFilter() {
  const Filter = [
    {
      value: "Berjalan",
      label: "Berjalan",
    },
    {
      value: "Menunggu",
      label: "Menunggu",
    },
    {
      value: "Dibatalkan",
      label: "Dibatalkan",
    },
  ];

  return (
    <>
      <Form layout="vertical">
        <Row gutter={[16, 8]}>
          <Col span={24} md={8}>
            <p
              id="appointment-table-title"
              className="mb-4 text-2xl font-semibold"
            >
              Daftar Janji Temu
            </p>
          </Col>
          <Col
            span={24}
            md={{ span: 8, offset: 2 }}
            lg={{ span: 7, offset: 4 }}
            xl={{ span: 6, offset: 6 }}
            className="text-end"
          >
            <Form.Item name="search">
              <Input.Search placeholder="Cari Janji Temu..." />
            </Form.Item>
          </Col>
          <Col span={24} md={{ span: 6 }} lg={{ span: 5 }} xl={{ span: 4 }}>
            <Form.Item name="filter">
              <Select
                placeholder="Filter"
                options={Filter}
                showSearch
                allowClear
              />
            </Form.Item>
          </Col>
        </Row>
      </Form>
    </>
  );
}
