/* eslint-disable react-refresh/only-export-components */
import dayjs from "dayjs";
import "dayjs/locale/id";
import { Button } from "antd";

import Utils from "@/utils";

export const ColumnAppointment = [
  {
    title: "ID",
    dataIndex: "id",
    key: "id",
    width: 100,
    render: (val) => <span>{val.slice(0, 5)}</span>,
  },
  {
    title: "Nama Pasien",
    dataIndex: "patient_name",
    key: "patient_name",
    width: 250,
    sorter: (a, b) => a.patient_name.localeCompare(b.patient_name),
  },
  {
    title: "No Urut",
    dataIndex: "sequence_number",
    key: "sequence_number",
    width: 150,
    sorter: (a, b) => a.sequence_number - b.sequence_number,
  },
  {
    title: "Tanggal",
    dataIndex: "date",
    key: "date",
    width: 150,
    render: (val) => {
      return dayjs(val).format("DD/MM/YYYY");
    },
  },
  {
    title: "Sesi",
    dataIndex: "session",
    key: "session",
    width: 150,
    filters: [
      {
        text: "Pagi",
        value: "pagi",
      },
      {
        text: "Siang",
        value: "siang",
      },
      {
        text: "Malam",
        value: "malam",
      },
    ],
    render: (val) => <span className="capitalize">{val}</span>,
    onFilter: (value, record) => record.session.indexOf(value) === 0,
  },
  {
    title: "Pembayaran",
    dataIndex: "total",
    key: "total",
    width: 150,
    render: (val) => (
      <span className="text-green-500">{Utils.thousandSeparator(val)}</span>
    ),
  },
  {
    title: "Metode",
    dataIndex: "payment_method",
    key: "payment_method",
    width: 200,
    render: (val) => {
      if (val === "manual_transfer") {
        return "Transfer Manual";
      }
      if (val === "clinic_payment") {
        return "Pembayaran Klinik";
      }
      return "Belum melakukan pembayaran";
    },
  },
  {
    title: "Status",
    dataIndex: "status",
    key: "status",
    width: 200,
    render: (_, { status }) => {
      let text;
      let color;
      if (status === "processed") {
        (color = "text-link bg-link-25 w-28"), (text = "Berjalan");
      }
      if (status === "waiting") {
        (color = "text-warning bg-warning-25 w-28"), (text = "Menunggu");
      }
      if (status === "done") {
        (color = "text-positive bg-positive-25 w-28"), (text = "Selesai");
      }
      if (status === "cancelled") {
        (color = "text-negative bg-negative-25 w-28"), (text = "Dibatalkan");
      }
      return (
        <Button className={color} key={status} type="primary">
          <span className="font-medium">{text}</span>
        </Button>
      );
    },
  },
];
