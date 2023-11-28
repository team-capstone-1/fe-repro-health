import { useEffect, useState } from "react";
import {
  Col,
  ConfigProvider,
  Form,
  Image,
  Input,
  Row,
  Space,
  Table,
} from "antd";
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
    width: 250,
  },
  {
    title: "Masa Berlaku",
    dataIndex: ["start_date", "end_date"],
    key: "id",
    width: 350,
    render: (_, id) => (
      <Space size="small">
        <span>{id.start_date.slice(0, 10)}</span>
        <span>-</span>
        <span>{id.end_date.slice(0, 10)}</span>
      </Space>
    ),
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
  const [selectedCertificateUrl, setSelectedCertificateUrl] = useState("");

  useEffect(() => {
    const fetchDoctorCertifications = async () => {
      const result = await APIProfile.getDoctorCertifications();
      if (result?.message === "success get doctor certifications") {
        setDataDoctor(result.response);
        // console.log(result.response);
      }
    };
    fetchDoctorCertifications();
  }, []);

  const handleOpen = (selectedRow) => {
    setSelectedCertificateUrl(selectedRow.details);
    setVisible(true);
  };

  // console.log(`data doctor: `, dataDoctor);

  // const imagesUrl = () => {
  //   return dataDoctor?.map((val) => val.details);
  // };

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
                // src: imagesUrl(),
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
