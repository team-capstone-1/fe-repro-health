import { Space } from "antd";

import dayjs from "dayjs";
import "dayjs/locale/id";
dayjs.locale("id");

export const ColumnCertificate = [
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

      return (
        <span>
          {isNaN(file_size) || file_size.length === 0 ? "0" : formattedMB} MB
        </span>
      );
    },
  },
];
