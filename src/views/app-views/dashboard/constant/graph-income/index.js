import dayjs from "dayjs";

// dataset
export const DataIncome = [
  {
    date: dayjs().add(-10, "month").format("MMMM YYYY"),
    after: 53000000,
    amount: 0,
  },
  {
    date: dayjs().add(-9, "month").format("MMMM YYYY"),
    after: 43000000,
    amount: 10000000,
  },
  {
    date: dayjs().add(-8, "month").format("MMMM YYYY"),
    after: 33000000,
    amount: 20000000,
  },
  {
    date: dayjs().add(-7, "month").format("MMMM YYYY"),
    after: 50000000,
    amount: 30000000,
  },
  {
    date: dayjs().add(-6, "month").format("MMMM YYYY"),
    after: 47000000,
    amount: 40000000,
  },
  {
    date: dayjs().add(-5, "month").format("MMMM YYYY"),
    after: 45000000,
    amount: 50000000,
  },
  {
    date: dayjs().add(-4, "month").format("MMMM YYYY"),
    after: 49000000,
    amount: 60000000,
  },
];

export const RangePresets = [
  {
    label: "Last 7 Days",
    value: [dayjs().add(-7, "d"), dayjs()],
  },
  {
    label: "Last 7 Weeks",
    value: [dayjs().add(-7, "week"), dayjs()],
  },
  {
    label: "Last 7 Month",
    value: [dayjs().add(-7, "month"), dayjs()],
  },
];
