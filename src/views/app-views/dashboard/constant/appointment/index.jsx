/* eslint-disable react-refresh/only-export-components */
import { Button } from "antd";
import Utils from "@/utils";

export const ColumnAppointment = [
  {
    title: "ID",
    dataIndex: "id",
    key: "id",
    width: 100,
  },
  {
    title: "Nama Pasien",
    dataIndex: "name",
    key: "name",
    width: 250,
  },
  {
    title: "No Urut",
    dataIndex: "no",
    key: "no",
    width: 150,
  },
  {
    title: "Tanggal",
    dataIndex: "date",
    key: "date",
    width: 150,
  },
  {
    title: "Sesi",
    dataIndex: "session",
    key: "session",
    width: 150,
  },
  {
    title: "Pembayaran",
    dataIndex: "payment",
    key: "payment",
    width: 150,
    render: (val) => (
      <span className="text-green-500">{Utils.thousandSeparator(val)}</span>
    ),
  },
  {
    title: "Metode",
    dataIndex: "method",
    key: "method",
    width: 200,
  },
  {
    title: "Status",
    dataIndex: "status",
    key: "status",
    width: 200,
    render: (_, { status }) => (
      <>
        {status.map((tag) => {
          let color;
          if (tag === "Berjalan") {
            color = "text-link bg-link-25 cursor-default w-28";
          } else if (tag === "Menunggu") {
            color = "text-warning bg-warning-25 cursor-default w-28";
          } else if (tag === "Selesai") {
            color = "text-positive bg-positive-25 cursor-default w-28";
          } else {
            color = "text-negative bg-negative-25 cursor-default w-28";
          }
          return (
            <Button className={color} key={tag} type="primary">
              <span className="font-medium">{tag}</span>
            </Button>
          );
        })}
      </>
    ),
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
