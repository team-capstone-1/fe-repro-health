import dayjs from "dayjs";
import { Card, ConfigProvider, Skeleton } from "antd";
import { Calendar } from "antd";
import { useEffect, useState } from "react";
import { GrFormNext, GrFormPrevious } from "react-icons/gr";
import { useDispatch, useSelector } from "react-redux";

import DetailSchedule from "./DetailSchedule";
import { months } from "@/utils/GenerateDate";
// import { NewResponse } from "@/views/app-views/my-schedule/constant/my-schedule/NewResponse";
import { mapListData } from "@/utils/MapListData";
import { Indicator } from "./Indicator";
import {
  fetchDoctorSchedule,
  selectDoctorSchedule,
} from "@/store/get-doctor-schedule-slice";

export function ScheduleCalendar() {
  const currentDate = dayjs();
  const [displayedDate, setDisplayedDate] = useState(currentDate);
  const [isOpen, setIsOpen] = useState(false);
  const [selectedDate, setSelectedDate] = useState(null);

  const dispatch = useDispatch();
  const scheduleState = useSelector(selectDoctorSchedule);
  const response = scheduleState.data;
  // const response = NewResponse;

  useEffect(() => {
    dispatch(fetchDoctorSchedule());
  }, [dispatch]);

  const handleOpenDrawer = () => {
    setIsOpen((prev) => !prev);
  };

  const HeaderRender = ({ onChange }) => {
    const days = [
      "Minggu",
      "Senin",
      "Selasa",
      "Rabu",
      "Kamis",
      "Jumat",
      "Sabtu",
    ];
    return (
      <>
        <div
          id="header-calendar"
          className="mb-3 flex flex-col justify-between lg:flex-row"
          style={{
            padding: 8,
          }}
        >
          <h3 className="mb-5 font-bold">Jadwal Saya</h3>
          <div
            id="month-year-calendar-wrapper"
            className="flex items-center gap-5"
          >
            <h6
              id="month-year-calender"
              className="select-none text-base font-semibold"
            >
              {months[displayedDate.month()]} {displayedDate.year()}
            </h6>
            <GrFormPrevious
              id="button-previous-month"
              className="h-5 w-5 cursor-pointer transition-all hover:scale-105"
              onClick={() => {
                setDisplayedDate(
                  displayedDate.month(displayedDate.month() - 1),
                );
                onChange(displayedDate.month(displayedDate.month() - 1));
              }}
            />
            <GrFormNext
              id="button-next-month"
              className="h-5 w-5 cursor-pointer transition-all hover:scale-105"
              onClick={() => {
                setDisplayedDate(
                  displayedDate.month(displayedDate.month() + 1),
                );
                onChange(displayedDate.month(displayedDate.month() + 1));
              }}
            />
          </div>
        </div>
        <ul
          id="days-calendar"
          className="grid grid-cols-7 place-items-start rounded-tl-lg rounded-tr-lg border"
        >
          {days.map((day, index) => (
            <li
              key={index}
              className={`h-full w-full border-l pb-2 ps-3 pt-2 text-base font-medium uppercase ${
                index === 0 ? "border-l-0 text-negative" : "text-black"
              }`}
            >
              {day}
            </li>
          ))}
        </ul>
      </>
    );
  };
  const dateCellRender = (value) => {
    if (scheduleState.status === "success") {
      const listData = mapListData(response?.data, value);
      return (
        <>
          <div
            id="date-cell-wrapper"
            className={`h-36 w-full border p-2  px-4 text-left hover:bg-green-50 ${
              value.date() === dayjs().date() &&
              value.month() === dayjs().month() &&
              value.year() === dayjs().year()
                ? "border-t-4 border-green-600 border-b-inherit border-l-inherit border-r-inherit"
                : ""
            }`}
          >
            <div
              id="date-cell"
              className={`${
                value.day() === 0 && value.month() === displayedDate.month()
                  ? "text-negative"
                  : ""
              }`}
            >
              {value.date()}
            </div>
            <div
              id="list-schedule"
              className="flex h-[80%] flex-col justify-end"
            >
              {listData.map((item, index) => (
                <div
                  className={`flex w-full items-center rounded-bl-lg rounded-tl-lg shadow-sm ${
                    !item.doctor_available ? "justify-start" : "justify-between"
                  } ${item.doctor_available === "Libur" ? "pe-0" : "pe-2"}`}
                  key={index}
                >
                  <Indicator
                    session={item.session}
                    doctor_available={item.doctor_available}
                    appointment={item.appointments}
                    date={value}
                    displayedDate={displayedDate}
                  />
                  <div
                    className={`grid h-4 w-4 content-center rounded-full  text-center 
              text-[0.6rem] font-light text-white ${
                !item.appointments || !item.doctor_available
                  ? "hidden"
                  : "block"
              } ${
                value.month() !== displayedDate.month()
                  ? "bg-grey-50"
                  : "bg-negative"
              }`}
                  >
                    {item.appointments?.length}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </>
      );
    }
    return <Skeleton active />;
  };

  const onSelect = (date) => {
    handleOpenDrawer();
    setSelectedDate(date);
  };

  const cellRender = (current, info) => {
    if (info.type === "date") return dateCellRender(current);
    return info.originNode;
  };

  const disabledDate = (current) => {
    const year = displayedDate.year();
    const month = displayedDate.month();
    const startOfMonth = displayedDate.year(year).month(month).startOf("month");
    const endOfMonth = displayedDate.year(year).month(month).endOf("month");

    return current && (current < startOfMonth || current > endOfMonth);
  };

  const handlePanelChange = () => {
    handleOpenDrawer();
  };

  return (
    <section id="calendar-schedule" className="my-5">
      <Card className="overflow-x-auto">
        <ConfigProvider
          theme={{
            components: {
              Calendar: {
                colorPrimary: "#17c6a3",
              },
            },
          }}
        >
          <Calendar
            className="big-calendar w-[150vh] lg:w-full"
            headerRender={HeaderRender}
            fullCellRender={cellRender}
            onSelect={onSelect}
            disabledDate={disabledDate}
            onPanelChange={handlePanelChange}
          />
        </ConfigProvider>
      </Card>
      {/* Drawer Detail Schedule */}
      <DetailSchedule
        isOpen={isOpen}
        handleOpenDrawer={handleOpenDrawer}
        date={selectedDate}
      />
    </section>
  );
}
