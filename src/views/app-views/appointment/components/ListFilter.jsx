import { Col, Form, Input, Row, Select, ConfigProvider } from "antd";
import { BsSearch } from "react-icons/bs";

export default function ListFilter({ setSearchValue, setFilterStatus }) {
  const Filter = [
    {
      value: "processed",
      label: "Berjalan",
    },
    {
      value: "waiting",
      label: "Menunggu",
    },
    {
      value: "cancelled",
      label: "Dibatalkan",
    },
    {
      value: "done",
      label: "Selesai",
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
                colorPrimaryBorderHover: "#17c6a3",
                colorPrimaryHover: "#17c6a3",
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
                  onChange={(e) => setSearchValue(e.target.value)}
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
                  onChange={(e) => setFilterStatus(e)}
                />
              </Form.Item>
            </Col>
          </Row>
        </ConfigProvider>
      </Form>
    </>
  );
}
