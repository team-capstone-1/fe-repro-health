import { useEffect, useState } from "react";
import { Card, Table, ConfigProvider } from "antd";
import { useDispatch, useSelector } from "react-redux";

import ListFilter from "./ListFilter";
import DetailPatient from "./DetailPatient";
import CardAppointment from "./CardAppointment";
import { ColumnAppointment } from "../constant/appointment";
import { useDocumentTitle } from "@/hooks/useDocumentTitle";
import { useScrollToTop } from "@/hooks/useScrollToTop";
import { APIAppointment } from "@/apis/APIAppointment";
import { useDebounce } from "@/hooks/useDebounce";
import {
  selectToggleFetchLatestData,
  toggleFetchLatestData,
} from "@/store/toggle-fetch-new-data";

export default function AppointmentTable() {
  useDocumentTitle("Janji Temu");
  useScrollToTop();
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [dataAppointment, setDataAppointment] = useState([]);
  const [idAppointment, setIdAppointment] = useState("");
  const [searchValue, setSearchValue] = useState("");
  const [filterStatus, setFilterStatus] = useState("");

  const { shouldFetchLatestData } = useSelector(selectToggleFetchLatestData);
  const dispatch = useDispatch();

  const searchQuery = useDebounce(searchValue, 800);
  const filterQuery = useDebounce(filterStatus, 800);

  useEffect(() => {
    setIsLoading(true);
    const fetchData = async () => {
      try {
        const result = await APIAppointment.getListAppointments(
          searchQuery,
          filterQuery,
        );
        setDataAppointment(result);
        setIsLoading(false);
      } catch (err) {
        console.error(err);
        setIsLoading(false);
        setIsError(err);
        setDataAppointment([]);
      }
    };
    fetchData();
    if (shouldFetchLatestData) {
      fetchData();
      dispatch(toggleFetchLatestData());
    }
  }, [searchQuery, filterQuery, shouldFetchLatestData, dispatch]);

  const handleOpen = (val) => {
    setIdAppointment(val.id);
    setIsOpen((prev) => !prev);
  };

  return (
    <>
      <h3 className="mb-3 font-bold">Janji Temu</h3>
      <CardAppointment data={dataAppointment} />
      <Card>
        <ListFilter
          setSearchValue={setSearchValue}
          setFilterStatus={setFilterStatus}
        />
        <ConfigProvider
          theme={{
            components: {
              Table: {
                colorPrimary: "#17c6a3",
                rowHoverBg: "#e8f9f6",
              },
              Dropdown: {
                colorPrimary: "#17c6a3",
              },
              Checkbox: {
                colorPrimary: "#17c6a3",
                colorPrimaryHover: "#15b494",
              },
              Button: {
                colorLink: "#15b494",
                colorLinkHover: "#108d74",
                colorLinkActive: "#15b494",
              },
              Pagination: {
                colorPrimary: "#17c6a3",
                colorPrimaryHover: "#15b494",
              },
            },
          }}
        >
          <Table
            rowClassName={"hover:bg-green-50 hover:cursor-pointer"}
            loading={isLoading}
            id="appointment-table-list"
            columns={ColumnAppointment}
            dataSource={dataAppointment}
            scroll={{ x: true }}
            style={{ maxWidth: "100%" }}
            onRow={(val) => ({
              onClick: () => handleOpen(val),
            })}
            pagination={{
              defaultCurrent: 1,
              defaultPageSize: 10,
              total: dataAppointment.length,
              showTotal: (total, range) =>
                `Menampilkan ${range[0]}-${range[1]} dari ${total} data`,
            }}
            summary={() =>
              isError.message !== null && !isLoading && isError ? (
                <Table.Summary.Row>
                  <Table.Summary.Cell colSpan={10}>
                    <p className="text-center">
                      Terjadi kesalahan! silahkan kembali beberapa saat lagi.
                    </p>
                    <p className="text-center text-negative">
                      {isError.message}
                    </p>
                  </Table.Summary.Cell>
                </Table.Summary.Row>
              ) : (
                <></>
              )
            }
          />
        </ConfigProvider>
      </Card>
      {/* drawer detail pasien */}
      {isOpen && (
        <DetailPatient
          idAppointment={idAppointment}
          isOpen={isOpen}
          handleOpen={handleOpen}
        />
      )}
    </>
  );
}
