import { Response } from "@/views/app-views/my-schedule/constant/my-schedule";

export function getListDataByDate(targetDate) {
  const data = Response?.data;

  const targetData = data.find((item) => item.date === targetDate);
  return targetData ? targetData.listData : null;
}
