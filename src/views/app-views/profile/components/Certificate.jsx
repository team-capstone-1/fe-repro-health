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
  Spin,
  Table,
} from "antd";
import { BsSearch } from "react-icons/bs";

import { APIProfile } from "@/apis/APIProfile";
import { useDebounce } from "@/hooks/useDebounce";
import { ColumnCertificate } from "../constant/certificate";

export function Certificate() {
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
                placeholder="Cari Sertifikat..."
                size="large"
                allowClear
                prefix={
                  !isLoading ? (
                    <BsSearch className="me-1 text-gray-400" />
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
                columns={ColumnCertificate}
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
