import { Card, Table } from "antd";
import { ColumnAppointment } from "../constant/appointment";
import { useEffect, useState } from "react";
import { APIAppointment } from "@/apis/APIAppointment";

export default function AppointmentTable() {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  const DataSource = data.slice(0, 5);

  const fetchDataAppointment = async () => {
    try {
      const result = await APIAppointment.getListAppointments();
      console.log(result);

      setData(result);
      setIsLoading(false);
    } catch (error) {
      console.error(error);
      setIsLoading(false);
      setIsError(error);
    }
  };

  useEffect(() => {
    setIsLoading(true);
    fetchDataAppointment();
  }, []);

  console.log("data appointment", data);

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
          <a
            id="link-to-all-appointment-table"
            href="/janji-temu"
            className="text-green-500 hover:text-green-700"
          >
            Lihat semua
          </a>
        </div>
        <Table
          id="table-appointment"
          loading={isLoading}
          columns={ColumnAppointment}
          dataSource={DataSource}
          pagination={false}
          scroll={{ x: true }}
          style={{ maxWidth: "100vw" }}
          summary={() =>
            isError.message !== null && !isLoading && isError ? (
              <Table.Summary.Row>
                <Table.Summary.Cell colSpan={10}>
                  <p className="text-center">
                    Terjadi kesalahan! silahkan kembali beberapa saat lagi.
                  </p>
                  <p className="text-center text-negative">{isError.message}</p>
                </Table.Summary.Cell>
              </Table.Summary.Row>
            ) : (
              <></>
            )
          }
        />
        <h6 id="more-appointment-footer" className="mt-5 text-grey-200">
          Menampilkan 5 data teratas
        </h6>
      </Card>
    </>
  );
}
