import dayjs from "dayjs";
import React, { useState } from "react";
import { GrFormNext, GrFormPrevious } from "react-icons/gr";

function cn(...classes) {
  return classes.filter(Boolean).join(" ");
}

const generateDate = (month = dayjs().month(), year = dayjs().year()) => {
  const firstDateOfMonth = dayjs().year(year).month(month).startOf("month");
  const lastDateOfMonth = dayjs().year(year).month(month).endOf("month");

  const arrayOfDate = [];

  // create prefix date
  for (let i = 0; i < firstDateOfMonth.day(); i++) {
    const date = firstDateOfMonth.day(i);

    arrayOfDate.push({
      currentMonth: false,
      date,
    });
  }

  // generate current date
  for (let i = firstDateOfMonth.date(); i <= lastDateOfMonth.date(); i++) {
    arrayOfDate.push({
      currentMonth: true,
      date: firstDateOfMonth.date(i),
      today:
        firstDateOfMonth.date(i).toDate().toDateString() ===
        dayjs().toDate().toDateString(),
    });
  }

  const remaining = 42 - arrayOfDate.length;

  for (
    let i = lastDateOfMonth.date() + 1;
    i <= lastDateOfMonth.date() + remaining;
    i++
  ) {
    arrayOfDate.push({
      currentMonth: false,
      date: lastDateOfMonth.date(i),
    });
  }
  return arrayOfDate;
};

const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

export default function Calendar() {
  const days = ["S", "M", "T", "W", "T", "F", "S"];
  const currentDate = dayjs();
  const [today, setToday] = useState(currentDate);
  const [selectDate, setSelectDate] = useState(currentDate);
  const dateSchedule = { nanoseconds: 807000000, seconds: 1699780986 };
  const newDate = new Date(
    dateSchedule.seconds * 1000 + dateSchedule.nanoseconds / 1000000,
  );
  const schedule = newDate.toDateString();

  const dateSchedule2 = {
    nanoseconds: 759000000,
    seconds: 1699012369,
  };
  const newDate2 = new Date(
    dateSchedule2.seconds * 1000 + dateSchedule.nanoseconds / 1000000,
  );
  const schedule2 = newDate2.toDateString();
  return (
    <div className="m-5 w-96 rounded-lg border-2 p-5">
      {/* Header */}
      <div className="mb-2 flex items-center justify-between">
        <h6 className="text-lg font-semibold">Kalender</h6>
        <div className="flex items-center gap-1">
          <h6 className="select-none font-semibold">
            {months[today.month()]} {today.year()}
          </h6>
          <GrFormPrevious
            className="h-5 w-5 cursor-pointer transition-all hover:scale-105"
            onClick={() => {
              setToday(today.month(today.month() - 1));
            }}
          />
          <h6
            className=" cursor-pointer transition-all hover:scale-105"
            onClick={() => {
              setToday(currentDate);
            }}
          ></h6>
          <GrFormNext
            className="h-5 w-5 cursor-pointer transition-all hover:scale-105"
            onClick={() => {
              setToday(today.month(today.month() + 1));
            }}
          />
        </div>
      </div>
      {/* Day render */}
      <div className="grid grid-cols-7 rounded-se-xl rounded-ss-xl bg-grey-50 ">
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
      <div className=" grid grid-cols-7 ">
        {generateDate(today.month(), today.year()).map(
          ({ date, currentMonth, today }, index) => {
            return (
              <div
                key={index}
                className="grid h-14 place-content-center border-t p-2 text-center text-sm"
              >
                {date.toDate().toDateString() === schedule ||
                date.toDate().toDateString() === schedule2 ? (
                  <h6
                    className={cn(
                      currentMonth ? "" : "text-gray-400",
                      today ? "bg-grey-50 text-white" : "",
                      selectDate.toDate().toDateString() ===
                        date.toDate().toDateString()
                        ? "bg-grey-100 text-white"
                        : "",
                      "grid h-10 w-10 cursor-pointer select-none place-content-center items-center rounded-full transition-all hover:bg-grey-100 hover:text-white",
                    )}
                    onClick={() => {
                      setSelectDate(date);
                      console.log(date.toDate().toDateString());
                    }}
                  >
                    <div
                      className={`mb-1 ms-[0.1rem] h-[0.3rem] w-[0.3rem] rounded-full ${
                        date.toDate().toDateString() === schedule
                          ? "bg-positive"
                          : "bg-negative "
                      }`}
                    ></div>
                    {date.date()}
                  </h6>
                ) : (
                  <h6
                    className={cn(
                      currentMonth ? "" : "text-gray-400",
                      today ? "bg-grey-50 text-black" : "",
                      selectDate.toDate().toDateString() ===
                        date.toDate().toDateString()
                        ? "bg-grey-100 text-white"
                        : "",
                      "grid h-10 w-10 cursor-pointer select-none place-content-center rounded-full transition-all hover:bg-grey-100 hover:text-white",
                    )}
                    onClick={() => {
                      setSelectDate(date);
                      console.log(date.toDate().toDateString());
                    }}
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
      <div className="flex gap-2 text-sm font-semibold text-grey-300">
        <h6 className="font-semibold">Ket :</h6>
        <div>
          <span className="flex items-center gap-1">
            <div className="h-2 w-2 rounded-full bg-positive"></div>
            Jadwal Dokter
          </span>
          <span className="flex items-center gap-1 ">
            <div className="h-2 w-2 rounded-full bg-negative"></div>
            Libur
          </span>
        </div>
      </div>
    </div>
  );
}
