import dayjs from "dayjs";
import "dayjs/locale/id";

dayjs.locale("id");

export const formatDateToStringMonth = (date) => {
  const value = dayjs(date, "YYYY-MM-DD");
  return value.format("MMMM YYYY");
};

export const formatDateToStringDay = (date) => {
  const value = dayjs(date, "YYYY-MM-DD");
  return value.format("dddd, DD MMMM YYYY");
};

export const formatDateToStringWeek = (date) => {
  const value = dayjs(date, "YYYY-MM-DD");
  return `Week ${value.week()}, ${value.startOf("week").format("DD")} - ${value
    .endOf("week")
    .format("DD MMMM YYYY")}`;
};
