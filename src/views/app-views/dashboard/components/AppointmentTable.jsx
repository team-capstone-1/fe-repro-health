import { Link } from "react-router-dom";
import { Card, Table, Button } from "antd";

import Utils from "@/utils";

export default function AppointmentTable() {
  const columns = [
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
      width: 200,
    },
    {
      title: "No Urut",
      dataIndex: "no",
      key: "no",
      width: 100,
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
      width: 100,
    },
    {
      title: "Pembayaran",
      dataIndex: "payment",
      key: "payment",
      width: 200,
      render: (val) => (
        <span className="text-green-500">{Utils.thousandSeparator(val)}</span>
      ),
    },
    {
      title: "Metode",
      dataIndex: "method",
      key: "method",
      width: 300,
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

  const data = [
    {
      id: "#001",
      name: "Naufal Helmi",
      no: "009",
      date: "23/10/23",
      session: "Pagi",
      payment: 123000,
      method: "Bayar di Klinik",
      status: ["Menunggu"],
    },
    {
      id: "#001",
      name: "Naufal Helmi",
      no: "009",
      date: "23/10/23",
      session: "Pagi",
      payment: 123000,
      method: "Bayar di Klinik",
      status: ["Berjalan"],
    },
    {
      id: "#001",
      name: "Naufal Helmi",
      no: "009",
      date: "23/10/23",
      session: "Pagi",
      payment: 123000,
      method: "Bayar di Klinik",
      status: ["Dibatalkan"],
    },
    {
      id: "#001",
      name: "Naufal Helmi",
      no: "009",
      date: "23/10/23",
      session: "Pagi",
      payment: 123000,
      method: "Bayar di Klinik",
      status: ["Selesai"],
    },
  ].map((item, i) => ({ ...item, key: (i + 1).toString() }));

  return (
    <>
      <Card id="appointment-table-section">
        <div className="flex justify-between">
          <p
            id="appointment-table-title"
            className="mb-4 text-2xl font-semibold"
          >
            Janji Temu
          </p>
          <Link
            id="link-to-all-appointment-table"
            to="#"
            className="text-green-500 hover:text-green-700"
          >
            Lihat semua
          </Link>
        </div>
        <Table
          id="table-appointment"
          columns={columns}
          dataSource={data}
          pagination={false}
          scroll={{ x: 1000 }}
          style={{ maxWidth: "100vw" }}
        />
        <h6 id="more-appointment-footer" className="mt-5 text-grey-200">
          Menampilkan 5 data teratas
        </h6>
      </Card>
    </>
  );
}
