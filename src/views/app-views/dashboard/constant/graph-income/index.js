import dayjs from "dayjs";

const formatDateToStringMMYYYY = (date) => {
  const value = dayjs(date, "DD-MM-YYYY");
  return value.format("MMMM YYYY");
};

// dataset
// export const DataIncome = [
//   {
//     date: dayjs().add(-10, "month").format("MMMM YYYY"),
//     after: 53000000,
//     amount: 0,
//   },
//   {
//     date: dayjs().add(-9, "month").format("MMMM YYYY"),
//     after: 43000000,
//     amount: 10000000,
//   },
//   {
//     date: dayjs().add(-8, "month").format("MMMM YYYY"),
//     after: 33000000,
//     amount: 20000000,
//   },
//   {
//     date: dayjs().add(-7, "month").format("MMMM YYYY"),
//     after: 50000000,
//     amount: 30000000,
//   },
//   {
//     date: dayjs().add(-6, "month").format("MMMM YYYY"),
//     after: 47000000,
//     amount: 40000000,
//   },
//   {
//     date: dayjs().add(-5, "month").format("MMMM YYYY"),
//     after: 45000000,
//     amount: 50000000,
//   },
//   {
//     date: dayjs().add(-4, "month").format("MMMM YYYY"),
//     after: 49000000,
//     amount: 60000000,
//   },
// ];

export const PlainDataIncome = [
  {
    date: "01-11-2023",
    after: 900000,
  },
  {
    date: "02-11-2023",
    after: 800000,
  },
  {
    date: "03-11-2023",
    after: 4640045,
  },
  {
    date: "04-11-2023",
    after: 22865856,
  },
  {
    date: "05-11-2023",
    after: 26408664,
  },
  {
    date: "06-11-2023",
    after: 32475250,
  },
  {
    date: "07-11-2023",
    after: 34803815,
  },
  {
    date: "08-11-2023",
    after: 20905891,
  },
  {
    date: "09-11-2023",
    after: 16181572,
  },
  {
    date: "10-11-2023",
    after: 6411077,
  },
  {
    date: "11-11-2023",
    after: 2741965,
  },
  {
    date: "12-11-2023",
    after: 19175514,
  },
  {
    date: "13-11-2023",
    after: 40826120,
  },
  {
    date: "14-11-2023",
    after: 5786028,
  },
  {
    date: "15-11-2023",
    after: 6048350,
  },
  {
    date: "16-11-2023",
    after: 99100000,
  },
  {
    date: "17-11-2023",
    after: 41139644,
  },
  {
    date: "18-11-2023",
    after: 37948462,
  },
  {
    date: "19-11-2023",
    after: 24413857,
  },
  {
    date: "20-11-2023",
    after: 25470265,
  },
  {
    date: "21-11-2023",
    after: 34069700,
  },
  {
    date: "22-11-2023",
    after: 10211132,
  },
  {
    date: "23-11-2023",
    after: 12531885,
  },
  {
    date: "24-11-2023",
    after: 12714056,
  },
  {
    date: "25-11-2023",
    after: 27023882,
  },
  {
    date: "26-11-2023",
    after: 33827396,
  },
  {
    date: "27-11-2023",
    after: 13371354,
  },
  {
    date: "28-11-2023",
    after: 7979962,
  },
  {
    date: "29-11-2023",
    after: 15032924,
  },
  {
    date: "30-11-2023",
    after: 8712508,
  },
];

export const DataIncome = PlainDataIncome.map((value) => {
  value.date = formatDateToStringMMYYYY(value.date);
  return value;
});

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
