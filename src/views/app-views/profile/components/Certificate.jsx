import { Col, ConfigProvider, Form, Image, Input, Row, Table } from "antd";
import { IoMdSearch } from "react-icons/io";

// import IconShowCertif from "@/assets/certif-show.svg";
import ImageCertif from "@/assets/certificate-dental.png";
import { useState } from "react";

export default function Certificate() {
  const [visible, setVisible] = useState(false);

  const DataSource = [
    {
      id: 1,
      doctor_profile_id: "74300897765",
      time_period: "22 Juni 2022 - 22 Juni 2027",
      // time_period: {
      //   start_date: "22 Juni 2022",
      //   end_date: "22 Juni 2027",
      // },
      description: "Praktik Medis",
      certificate_type: "Sertifikasi Lisensi",
      file_size: "5 MB",
      details: ImageCertif,
    },

    // {
    //   id: 2,
    //   doctor_profile_id: "74300897765",
    //   time_period: "22 Juni 2022 - 22 Juni 2027",
    //   description: "Praktik Medis",
    //   certificate_type: "Sertifikasi Lisensi",
    //   file_size: "5 MB",
    //   details:
    //     "https://yt3.googleusercontent.com/Yltbh2eH6nCCEwh4au4IeBK-FNkYSETVxLngkPbcj1igZ__PJa4XVEt-0Jx-sGAx717p1kERzqA=s900-c-k-c0x00ffffff-no-rj",
    // },

    // {
    //   id: 3,
    //   doctor_profile_id: "74300897765",
    //   time_period: "22 Juni 2022 - 22 Juni 2027",
    //   description: "Praktik Medis",
    //   certificate_type: "Sertifikasi Lisensi",
    //   file_size: "5 MB",
    //   details:
    //     "https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png",
    // },

    // {
    //   id: 4,
    //   doctor_profile_id: "74300897765",
    //   time_period: "22 Juni 2022 - 22 Juni 2027",
    //   description: "Praktik Medis",
    //   certificate_type: "Sertifikasi Lisensi",
    //   file_size: "5 MB",
    //   details:
    //     "https://assets-a1.kompasiana.com/items/album/2022/05/30/eren-yeager-1-6294723353e2c32b47142933.jpg",
    // },

    // {
    //   id: "f03f5d62-5cf3-4f03-9c3f-8c34620e94c6",
    //   doctor_profile_id: "74300897765",
    //   time_period: "22 Juni 2022 - 22 Juni 2027",
    //   description: "Praktik Medis",
    //   certificate_type: "Sertifikasi Lisensi",
    //   file_size: "5 MB",
    //   details: (
    //     <Image
    //       width={20}
    //       src={IconShowCertif}
    //       preview={{
    //         src: "https://i.ytimg.com/vi/f93sHJkdsiw/maxresdefault.jpg",
    //       }}
    //     />
    //   ),
    // },
  ];

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
      width: 100,
    },
    // {
    //   title: "Detail",
    //   dataIndex: "details",
    //   key: "details",
    //   width: 100,
    //   align: "center",
    // },
  ];

  return (
    <section id="profile-certificate-section" className="my-10 ms-[3rem]">
      <Form layout="vertical">
        <Row gutter={[16, 8]}>
          <Col
            span={24}
            lg={{ span: 7, offset: 0 }}
            md={{ span: 8, offset: 2 }}
            xl={{ span: 7, offset: 0 }}
            className="text-start"
          >
            <Form.Item name="search" id="search-certificate">
              <Input
                placeholder="Cari Sertifikat"
                size="large"
                allowClear
                prefix={<IoMdSearch />}
                className="h-[3.14rem]"
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
                dataSource={DataSource}
                columns={columns}
                pagination={false}
                scroll={{ x: true }}
                style={{ maxWidth: "100%" }}
                className="shadow-sm"
                bordered
                onRow={() => ({
                  onClick: () => {
                    setVisible(true);
                  },
                })}
              />
              <Image
                width={200}
                style={{
                  display: "none",
                }}
                src={DataSource.map((val) => val.details)}
                preview={{
                  visible,
                  // src: ,
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
