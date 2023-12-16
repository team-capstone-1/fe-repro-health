/* eslint-disable react-refresh/only-export-components */
import dayjs from "dayjs";
import "dayjs/locale/id";
import { Button } from "antd";

import { thousandSeparator } from "@/utils/ThousandSeparator";

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
  },
  {
    title: "No Urut",
    dataIndex: "sequence_number",
    key: "sequence_number",
    width: 100,
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
  },
  {
    title: "Pembayaran",
    dataIndex: "total",
    key: "total",
    width: 150,
    render: (val) => (
      <span className="text-green-500">{thousandSeparator(val)}</span>
    ),
  },
  {
    title: "Metode",
    dataIndex: "payment_method",
    key: "payment_method",
    width: 250,
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
    width: 180,
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

export const DataAppointment = [
  {
    id: "#001",
    name: "Alfhiyana",
    no: "006",
    date: "23/10/23",
    session: "Malam",
    payment: 12300000,
    method: "Bayar di Klinik",
    status: ["Menunggu"],
  },
  {
    id: "#002",
    name: "Xavier",
    no: "007",
    date: "23/10/23",
    session: "Pagi",
    payment: 1230000,
    method: "Bayar di Klinik",
    status: ["Berjalan"],
  },
  {
    id: "#003",
    name: "Naufal Helmi",
    no: "008",
    date: "23/10/23",
    session: "Pagi",
    payment: 123000,
    method: "Bayar di Klinik",
    status: ["Dibatalkan"],
  },
  {
    id: "#004",
    name: "Helmi Naufal",
    no: "009",
    date: "23/10/23",
    session: "Pagi",
    payment: 12300,
    method: "Bayar di Klinik",
    status: ["Selesai"],
  },
].map((item, i) => ({ ...item, key: (i + 1).toString() }));
