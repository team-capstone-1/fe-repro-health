import dayjs from "dayjs";
import { Card, ConfigProvider } from "antd";
import { Calendar } from "antd";
import { useState } from "react";
import { GrFormNext, GrFormPrevious } from "react-icons/gr";
import { months } from "@/utils/GenerateDate";
import { Response } from "@/views/app-views/my-schedule/constant/my-schedule";
import { mapListData } from "@/utils/MapListData";

import DetailSchedule from "./DetailSchedule";

export default function MySchedule() {
  const response = Response;
  const currentDate = dayjs();
  const [displayedDate, setDisplayedDate] = useState(currentDate);
  const [isOpen, setIsOpen] = useState(false);
  const [selectedDate, setSelectedDate] = useState(null);
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
    const listData = mapListData(response.data, value);
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
          <div id="list-schedule" className="flex h-[80%] flex-col justify-end">
            {listData.map((item, index) => (
              <div
                className={`flex w-full items-center rounded-bl-lg rounded-tl-lg border-b border-r border-t pe-2  ${
                  item.type === "Tidak Masuk"
                    ? "justify-start"
                    : "justify-between"
                }`}
                key={index}
              >
                <Indicator
                  text={item.content}
                  type={item.type}
                  appointment={item.appointment}
                />
                <div
                  className={`grid h-4 w-4 content-center rounded-full bg-negative text-center 
              text-[0.6rem] font-light text-white ${
                !item.appointment || item.type === "Tidak Masuk"
                  ? "hidden"
                  : "block"
              }`}
                >
                  {item.appointment}
                </div>
              </div>
            ))}
          </div>
        </div>
      </>
    );
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

const Indicator = ({ text, type }) => {
  let textColor;
  let bgColor;
  if (type === "Masuk" && text === "Pagi") {
    bgColor = "bg-positive";
    textColor = "text-positive font-medium";
  } else if (type === "Masuk" && text === "Siang") {
    bgColor = "bg-link";
    textColor = "text-link font-medium";
  } else if (type === "Masuk" && text === "Malam") {
    bgColor = "bg-warning";
    textColor = "text-warning font-medium";
  } else if (type === "Tidak Masuk") {
    bgColor = "bg-grey-100";
    textColor = "text-grey-100 font-medium";
  } else {
    bgColor = "bg-negative-25";
    textColor = "text-negative font-medium";
  }

  return (
    <>
      {type === "Libur" ? (
        <div
          id="indicator-wrapper"
          className={`flex rounded-sm px-2 text-start leading-5 ${bgColor} ${textColor}`}
        >
          {text}
        </div>
      ) : (
        <div
          id="indicator-wrapper"
          className={`flex items-center justify-between gap-1 ${textColor}`}
        >
          <div
            id="indicator-item"
            className={`h-5 w-[0.25rem] rounded-bl-full rounded-tl-full ${bgColor}`}
          ></div>
          {text}
        </div>
      )}
    </>
  );
};
