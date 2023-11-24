import { useEffect, useState } from "react";
import { Col, ConfigProvider, Form, Image, Input, Row, Table } from "antd";
import { IoMdSearch } from "react-icons/io";

// import ImageCertif from "@/assets/certificate-dental.png";
import { APIProfile } from "@/apis/APIProfile";

// const DataSource = [
//   {
//     id: 1,
//     doctor_profile_id: "74300897765",
//     time_period: "22 Juni 2022 - 22 Juni 2027",
//     // time_period: {
//     //   start_date: "22 Juni 2022",
//     //   end_date: "22 Juni 2027",
//     // },
//     description: "Praktik Medis",
//     certificate_type: "Sertifikasi Lisensi",
//     file_size: "5 MB",
//     details: ImageCertif,
//   },
// ];

const columns = [
  {
    title: "No Sertifikat",
    dataIndex: "doctor_profile_id",
    key: "doctor_profile_id",
    width: 150,
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
    width: 250,
  },
  {
    title: "Masa Berlaku",
    dataIndex: "time_period",
    key: "time_period",
    width: 350,
  },
  {
    title: "Ukuran File",
    dataIndex: "file_size",
    key: "file_size",
    width: 150,
  },
];

export default function Certificate() {
  const [visible, setVisible] = useState(false);
  const [dataDoctor, setDataDoctor] = useState([]);

  useEffect(() => {
    const fetchDoctorCertifications = async () => {
      const result = await APIProfile.getDoctorCertifications();
      if (result?.message === "success get doctor certifications") {
        setDataDoctor(result.response);
      }
    };
    fetchDoctorCertifications();
  }, []);

  const handleOpen = () => {
    setVisible(true);
  };

  return (
    <section id="profile-certificate-section" className="my-10">
      <Form layout="vertical">
        <Row gutter={[16, 8]}>
          <Col span={24} md={12} lg={10} xl={8} className="text-start">
            <Form.Item name="search" id="search-certificate">
              <Input
                placeholder="Cari Sertifikat"
                size="large"
                allowClear
                prefix={<IoMdSearch />}
                className="h-[3.14rem] hover:border-green-500 "
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
                // src={DataSource.map((val) => val.details)}
                preview={{
                  movable: true,
                  visible,
                  src: dataDoctor?.map((val) => val.details),
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
