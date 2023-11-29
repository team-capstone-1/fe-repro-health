import dayjs from "dayjs";
import { Card, ConfigProvider, Tooltip } from "antd";
import { Calendar } from "antd";
import { useState } from "react";
import { GrFormNext, GrFormPrevious } from "react-icons/gr";

import { Response } from "@/views/app-views/my-schedule/constant/my-schedule";

import { months } from "@/utils/GenerateDate";
import { mapListData, formatStrDayJs } from "@/utils/MapListData";
import { getListDataByDate } from "@/utils/GetListData";

export default function ScheduleCalendar() {
  const response = Response;
  const currentDate = dayjs();
  const [displayedDate, setDisplayedDate] = useState(currentDate);

  const HeaderRender = ({ onChange }) => {
    const days = ["M", "S", "S", "R", "K", "J", "S"];
    return (
      <>
        <div
          id="header-calendar-dashboard"
          className="mb-3 flex flex-row items-center justify-between"
          style={{
            padding: 8,
          }}
        >
          <a href="/jadwal-saya">
            <p className="text-xl font-semibold hover:text-green-500">
              Jadwal Saya
            </p>
          </a>
          <div
            id="month-year-calendar-wrapper"
            className="flex items-center gap-1"
          >
            <h6
              id="month-year-calender"
              className="select-none text-base font-semibold"
            >
              {months[displayedDate.month()]} {displayedDate.year()}
            </h6>
            <GrFormPrevious
              id="button-previous-month-dashboard"
              className="h-5 w-5 cursor-pointer transition-all hover:scale-105"
              onClick={() => {
                setDisplayedDate(
                  displayedDate.month(displayedDate.month() - 1),
                );
                onChange(displayedDate.month(displayedDate.month() - 1));
              }}
            />
            <GrFormNext
              id="button-next-month-dashboard"
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
          id="days-calendar-dashboard"
          className="grid grid-cols-7 place-items-start rounded-tl-lg rounded-tr-lg border bg-grey-50"
        >
          {days.map((day, index) => (
            <li
              key={index}
              className={`h-full w-full border-l pb-2 pt-2 text-center font-medium uppercase ${
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
        <Tooltip
          id="tooltip-my-schedule-dashboard"
          title={<TooltipContent value={value} />}
          color="white"
          trigger="click"
        >
          <div
            id="date-cell-wrapper-dashboard"
            className={`flex h-12 w-full flex-col-reverse items-center justify-center text-center leading-none hover:bg-green-50 ${
              value.date() === dayjs().date() &&
              value.month() === dayjs().month() &&
              value.year() === dayjs().year()
                ? "border-t-4 border-green-600"
                : ""
            }
            `}
          >
            <div
              id="date-cell-dashboard"
              className={`${
                value.day() === 0 && value.month() === displayedDate.month()
                  ? "text-negative"
                  : ""
              }`}
            >
              {value.date()}
            </div>

            {listData.map(({ type }, index) => (
              <div
                key={index}
                id="dot-calendar-dashboard"
                className={`mb-1 h-[0.3rem] w-[0.3rem] rounded-full bg-negative ${
                  type === "Libur" ? "block" : "hidden"
                }`}
              ></div>
            ))}
          </div>
        </Tooltip>
      </>
    );
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

  return (
    <section id="calendar-schedule-dashboard">
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
            className="big-calendar"
            headerRender={HeaderRender}
            fullCellRender={cellRender}
            disabledDate={disabledDate}
          />
        </ConfigProvider>
        <FooterCalendar />
      </Card>
    </section>
  );
}

const FooterCalendar = () => {
  return (
    <>
      <div
        id="footer-calender"
        className="my-3 flex gap-2 text-sm font-semibold text-grey-300"
      >
        <h6 className="font-semibold">Ket :</h6>
        <div>
          <span className="flex items-center gap-1 ">
            <div className="h-2 w-2 rounded-full bg-negative"></div>
            Libur Nasional
          </span>
        </div>
      </div>
    </>
  );
};

const TooltipContent = ({ value }) => {
  const date = value.date();
  const month = months[value.month()];
  const year = value.year();

  const strDate = formatStrDayJs(value);
  const listData = getListDataByDate(strDate);

  if (listData?.length > 0) {
    if (listData[0]?.type === "Libur") {
      return (
        <div className="flex flex-col gap-2 p-4 text-black">
          <p className="text-xs font-semibold">
            {date} {month} {year}
          </p>
          <p className="text-xs">Tidak ada pasien pada hari ini.</p>
        </div>
      );
    }
    const totalAppointment = listData?.reduce((accumulator, item) => {
      return accumulator + item.appointment;
    }, 0);
    return (
      <div className="flex flex-col gap-2 p-4 text-black">
        <p className="text-xs font-semibold">
          {date} {month} {year}
        </p>
        <p className="text-xs">
          Terdapat {totalAppointment} pasien pada hari ini.
        </p>
      </div>
    );
  } else
    return (
      <div className="flex flex-col gap-2 p-4 text-black">
        <p className="text-xs font-semibold">
          {date} {month} {year}
        </p>
        <p className="text-xs">Tidak ada pasien pada hari ini.</p>
      </div>
    );
};
