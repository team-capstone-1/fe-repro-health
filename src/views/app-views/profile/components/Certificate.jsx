import dayjs from "dayjs";
import "dayjs/locale/id";

dayjs.locale("id");

import { useEffect, useState } from "react";
import {
  Col,
  ConfigProvider,
  Form,
  Image,
  Input,
  Row,
  Space,
  Spin,
  Table,
} from "antd";
import { IoMdSearch } from "react-icons/io";

import { APIProfile } from "@/apis/APIProfile";
import { useDebounce } from "@/hooks/useDebounce";

const columns = [
  {
    title: "Id Sertifikat",
    dataIndex: "id",
    key: "id",
    width: 150,
    render: (id) => (
      <span className="text-sm font-medium text-[#4B4B4B]">
        {id.slice(0, 8)}
      </span>
    ),
  },
  {
    title: "Jenis Sertifikat",
    dataIndex: "certificate_type",
    key: "certificate_type",
    width: 200,
  },
  {
    title: "Keterangan",
    dataIndex: "description",
    key: "description",
    width: 350,
  },
  {
    title: "Masa Berlaku",
    dataIndex: ["start_date", "end_date"],
    key: "id",
    width: 250,
    render: (_, id) => (
      <Space size="small">
        <span>
          {dayjs(id?.start_date, "YYYY-MM-DD").format("DD MMMM YYYY")}
        </span>
        <span>-</span>
        <span>{dayjs(id?.end_date, "YYYY-MM-DD").format("DD MMMM YYYY")}</span>
      </Space>
    ),
  },
  {
    title: "Ukuran File",
    dataIndex: "file_size",
    key: "file_size",
    width: 100,
    render: (file_size) => {
      const convertMB = parseInt(file_size) / 1024 / 1024;
      const formattedMB = convertMB.toFixed(2);
      console.log(`hasil convert before: ${convertMB} after: ${formattedMB}`);

      return <span>{formattedMB} MB</span>;
    },
  },
];

export default function Certificate() {
  const [isLoading, setIsLoading] = useState(true);
  const [visible, setVisible] = useState(false);
  const [dataDoctor, setDataDoctor] = useState([]);
  const [selectedCertificateUrl, setSelectedCertificateUrl] = useState("");
  const [searchValue, setSearchValue] = useState("");
  const searchQuery = useDebounce(searchValue, 800);

  useEffect(() => {
    const fetchDoctorCertifications = async () => {
      setIsLoading(true);
      try {
        const result = await APIProfile.getDoctorCertifications();
        if (searchQuery) {
          const filteredData = result.response?.filter((data) => {
            // return data.id.toLowerCase().includes(searchQuery.toLowerCase());
            return (
              data.description
                .toLowerCase()
                .includes(searchQuery.toLowerCase()) ||
              data.certificate_type
                .toLowerCase()
                .includes(searchQuery.toLowerCase())
            );
          });
          setDataDoctor(filteredData);
        } else {
          setDataDoctor(result?.response);
        }
        setIsLoading(false);
      } catch (error) {
        console.error(error);
      }
    };
    fetchDoctorCertifications();
  }, [searchQuery]);

  const handleOpen = (selectedRow) => {
    setSelectedCertificateUrl(selectedRow.details);
    setVisible(true);
  };

  return (
    <section id="profile-certificate-section" className="my-10">
      <Form layout="vertical">
        <Row gutter={[16, 8]}>
          <Col span={24} md={12} lg={10} xl={8} className="text-start">
            <Form.Item name="search" id="search-certificate">
              <Input
                placeholder="Cari Sertifikat berdasarkan id"
                size="large"
                allowClear
                prefix={
                  !isLoading ? (
                    <IoMdSearch className="text-2xl" />
                  ) : (
                    <ConfigProvider
                      theme={{
                        token: {
                          colorPrimary: "#17c6a3",
                        },
                      }}
                    >
                      <Spin />
                    </ConfigProvider>
                  )
                }
                className="h-[3.14rem] hover:border-green-500 focus:border focus:border-green-500 focus:outline-none focus:ring focus:ring-green-500"
                value={searchValue}
                onChange={(e) => {
                  setSearchValue(e.target.value);
                }}
              />
            </Form.Item>
          </Col>

          <Col span={24}>
            <ConfigProvider
              theme={{
                components: {
                  Table: {
                    headerColor: "#0D0D0D",
                    headerBg: "transparent",
                    rowHoverBg: "#e8f9f6",
                    cellPaddingBlock: 15,
                  },
                },
              }}
            >
              <Table
                rowClassName="cursor-pointer"
                id="table-certificate"
                dataSource={dataDoctor}
                columns={columns}
                pagination={false}
                scroll={{ x: 1000 }}
                style={{ maxWidth: "100vw" }}
                className="shadow-sm"
                bordered
                onRow={(val) => ({
                  onClick: () => handleOpen(val),
                })}
              />

              <Image
                width={200}
                style={{
                  display: "none",
                }}
                preview={{
                  movable: true,
                  visible,
                  src: selectedCertificateUrl,
                  onVisibleChange: (value) => {
                    setVisible(value);
                  },
                }}
              />
            </ConfigProvider>
          </Col>
        </Row>
      </Form>
    </section>
  );
}
