import dayjs from "dayjs";
import { useState } from "react";
import { GrFormNext, GrFormPrevious } from "react-icons/gr";
import { generateDate, months } from "@/utils/GenerateDate";

function cn(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Calendar() {
  const days = ["M", "S", "S", "R", "K", "J", "S"];
  const currentDate = dayjs();
  const [today, setToday] = useState(currentDate);

  const dateSchedule = { nanoseconds: 807000000, seconds: 1699780986 };
  const newDate = new Date(
    dateSchedule.seconds * 1000 + dateSchedule.nanoseconds / 1000000,
  );
  const schedule = newDate.toDateString();

  return (
    <div
      id="calender-dashboard-wrapper"
      className="w-full rounded-lg border p-5"
    >
      {/* Header */}
      <div
        id="header-calender"
        className="mb-4 mt-1 flex items-center justify-between"
      >
        <p id="title" className="text-xl font-semibold">
          Kalender
        </p>
        <div className="flex items-center gap-1">
          <h6 id="month-year-calender" className="select-none font-semibold">
            {months[today.month()]} {today.year()}
          </h6>
          <GrFormPrevious
            id="button-previous-month"
            className="h-5 w-5 cursor-pointer transition-all hover:scale-105"
            onClick={() => {
              setToday(today.month(today.month() - 1));
            }}
          />
          <GrFormNext
            id="button-next-month"
            className="h-5 w-5 cursor-pointer transition-all hover:scale-105"
            onClick={() => {
              setToday(today.month(today.month() + 1));
            }}
          />
        </div>
      </div>
      {/* Day render */}
      <div
        id="day-calender"
        className="grid grid-cols-7 rounded-se-xl rounded-ss-xl bg-grey-50 "
      >
        {days.map((day, index) => {
          return (
            <h6
              key={index}
              className="grid select-none place-content-center py-2 text-center text-base font-semibold text-grey-900"
            >
              {day}
            </h6>
          );
        })}
      </div>
      {/* Date render */}
      <div id="date-calendar-wrapper" className=" grid grid-cols-7 ">
        {generateDate(today.month(), today.year()).map(
          ({ date, currentMonth, today }, index) => {
            return (
              <div
                key={index}
                className="grid h-14 place-content-center border-t p-2 text-center text-sm"
              >
                {date.toDate().toDateString() === schedule ? (
                  <h6
                    id="date-calendar"
                    className={cn(
                      currentMonth ? "" : "text-gray-400",
                      today ? "bg-grey-100 text-white" : "",

                      "grid h-10 w-10 select-none place-content-center items-center rounded-full transition-all hover:bg-grey-100 hover:text-white",
                    )}
                  >
                    <div
                      id="dot-calendar"
                      className={`mb-1 ms-[0.2rem] h-[0.3rem] w-[0.3rem] rounded-full bg-negative`}
                    ></div>
                    {date.date()}
                  </h6>
                ) : (
                  <h6
                    id="date-calendar"
                    className={cn(
                      currentMonth ? "" : "text-gray-400",
                      today ? "bg-grey-100 text-white" : "",

                      "grid h-10 w-10 select-none place-content-center rounded-full transition-all hover:bg-grey-100 hover:text-white",
                    )}
                  >
                    {date.date()}
                  </h6>
                )}
              </div>
            );
          },
        )}
      </div>
      {/* Footer */}
      <div
        id="footer-calender"
        className="flex gap-2 text-sm font-semibold text-grey-300"
      >
        <h6 className="font-semibold">Ket :</h6>
        <div>
          <span className="flex items-center gap-1 ">
            <div className="h-2 w-2 rounded-full bg-negative"></div>
            Libur Nasional
          </span>
        </div>
      </div>
    </div>
  );
}
