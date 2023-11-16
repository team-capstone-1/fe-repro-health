import dayjs from "dayjs";

// dataset
export const DataIncome = [
  {
    year: "Januari",
    after: 53000000,
    // prev: 20,
    amount: 0,
  },
  {
    year: "Februari",
    after: 43000000,
    // prev: 20,
    amount: 10000000,
  },
  {
    year: "Maret",
    after: 33000000,
    // prev: 20,
    amount: 20000000,
  },
  {
    year: "April",
    after: 50000000,
    // prev: 20,
    amount: 30000000,
  },
  {
    year: "Mei",
    after: 47000000,
    // prev: 20,
    amount: 40000000,
  },
  {
    year: "Juni",
    after: 45000000,
    // prev: 20,
    amount: 50000000,
  },
  {
    year: "Juli",
    after: 49000000,
    // prev: 20,
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
