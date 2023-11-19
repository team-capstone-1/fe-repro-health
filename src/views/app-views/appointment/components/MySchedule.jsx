import dayjs from "dayjs";
import { Card, ConfigProvider } from "antd";
import { Calendar } from "antd";
import React, { useState } from "react";
import { GrFormNext, GrFormPrevious } from "react-icons/gr";
import { months } from "@/utils/GenerateDate";
import { Response } from "@/views/app-views/appointment/constant/my-schedule";
import { mapListData } from "@/utils/MapListData";

export default function MySchedule() {
  const response = Response;
  const dateCellRender = (value) => {
    const listData = mapListData(response.data, value);
    return (
      <>
        <ul className="flex flex-col items-end">
          {listData.map((item, index) => (
            <li
              className={`flex w-full items-center  ${
                item.type === "Tidak Masuk" ? "justify-end" : "justify-between"
              }`}
              key={index}
            >
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

              <Indicator
                text={item.content}
                type={item.type}
                appointment={item.appointment}
              />
            </li>
          ))}
        </ul>
      </>
    );
  };

  const cellRender = (current, info) => {
    if (info.type === "date") return dateCellRender(current);
    return info.originNode;
  };

  return (
    <>
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
            cellRender={cellRender}
          />
        </ConfigProvider>
      </Card>
    </>
  );
}

const HeaderRender = ({ onChange }) => {
  const currentDate = dayjs();
  const [today, setToday] = useState(currentDate);

  const days = ["Minggu", "Senin", "Selasa", "Rabu", "Kamis", "Jumat", "Sabtu"];
  return (
    <>
      <div
        className="mb-3 flex flex-col justify-between lg:flex-row"
        style={{
          padding: 8,
        }}
      >
        <h3 className="mb-5 font-bold">Jadwal Saya</h3>
        <div className="flex items-center gap-5">
          <h6
            id="month-year-calender"
            className="select-none text-base font-semibold"
          >
            {months[today.month()]}
            {today.year()}
          </h6>
          <GrFormPrevious
            id="button-previous-month"
            className="h-5 w-5 cursor-pointer transition-all hover:scale-105"
            onClick={() => {
              setToday(today.month(today.month() - 1));
              onChange(today.month(today.month() - 1));
            }}
          />
          <GrFormNext
            id="button-next-month"
            className="h-5 w-5 cursor-pointer transition-all hover:scale-105"
            onClick={() => {
              setToday(today.month(today.month() + 1));
              onChange(today.month(today.month() + 1));
            }}
          />
        </div>
      </div>
      <ul className="grid grid-cols-7 place-items-end">
        {days.map((day, index) => (
          <li
            key={index}
            className={`pe-3 text-base font-medium uppercase ${
              index === 0 ? "text-negative" : "text-black"
            }`}
          >
            {day}
          </li>
        ))}
      </ul>
    </>
  );
};

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
          className={`flex rounded-sm px-2 text-end leading-5 ${bgColor} ${textColor}`}
        >
          {text}
        </div>
      ) : (
        <div
          id="indicator-wrapper"
          className={`flex items-center justify-between gap-1 ${textColor}`}
        >
          {text}
          <div
            id="indicator-item"
            className={`h-5 w-[0.25rem] rounded-br-full rounded-tr-full ${bgColor}`}
          ></div>
        </div>
      )}
    </>
  );
};
