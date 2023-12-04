import { Col, Form, Input, Row, Select, ConfigProvider } from "antd";
import { BsSearch } from "react-icons/bs";

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
        <ConfigProvider
          theme={{
            components: {
              Input: {
                colorPrimary: "#17c6a3",
              },
              Select: {
                colorPrimary: "#17c6a3",
              },
            },
          }}
        >
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
              <Form.Item id="search-appointment" name="search">
                <Input
                  placeholder="Cari Janji Temu..."
                  allowClear
                  prefix={<BsSearch className="me-1 text-gray-400" />}
                  className="h-[2.1rem] hover:border-green-500"
                />
              </Form.Item>
            </Col>
            <Col span={24} md={{ span: 6 }} lg={{ span: 5 }} xl={{ span: 4 }}>
              <Form.Item id="filter-appointment" name="filter">
                <Select
                  placeholder="Filter"
                  options={Filter}
                  showSearch
                  allowClear
                  className="h-[2.1rem] hover:border-green-500"
                />
              </Form.Item>
            </Col>
          </Row>
        </ConfigProvider>
      </Form>
    </>
  );
}
