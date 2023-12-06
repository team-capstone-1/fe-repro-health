import dayjs from "dayjs";
import "dayjs/locale/id";

dayjs.locale("id");

const PlainDataIncomeWeek = [
  {
    date: "13-10-2023",
    income: 22865856,
  },
  {
    date: "14-10-2023",
    income: 8000000,
  },
  {
    date: "15-10-2023",
    income: 4640045,
  },
  {
    date: "16-10-2023",
    income: 9000000,
  },
  {
    date: "17-10-2023",
    income: 36408664,
  },
  {
    date: "18-10-2023",
    income: 32475250,
  },
  {
    date: "19-10-2023",
    income: 34803815,
  },
  {
    date: "20-10-2023",
    income: 20905891,
  },
  {
    date: "21-10-2023",
    income: 16181572,
  },
  {
    date: "22-10-2023",
    income: 6411077,
  },
  {
    date: "23-10-2023",
    income: 2741965,
  },
  {
    date: "24-10-2023",
    income: 19175514,
  },
  {
    date: "25-10-2023",
    income: 40826120,
  },
  {
    date: "26-10-2023",
    income: 5786028,
  },
  {
    date: "27-10-2023",
    income: 6048350,
  },
  {
    date: "28-10-2023",
    income: 110100000,
  },
  {
    date: "29-10-2023",
    income: 41139644,
  },
  {
    date: "30-10-2023",
    income: 37948462,
  },
  {
    date: "31-10-2023",
    income: 24413857,
  },
  {
    date: "01-11-2023",
    income: 22865856,
  },
  {
    date: "02-11-2023",
    income: 8000000,
  },
  {
    date: "03-11-2023",
    income: 4640045,
  },
  {
    date: "04-11-2023",
    income: 9000000,
  },
  {
    date: "05-11-2023",
    income: 36408664,
  },
  {
    date: "06-11-2023",
    income: 32475250,
  },
  {
    date: "07-11-2023",
    income: 34803815,
  },
  {
    date: "08-11-2023",
    income: 20905891,
  },
  {
    date: "09-11-2023",
    income: 16181572,
  },
  {
    date: "10-11-2023",
    income: 6411077,
  },
  {
    date: "11-11-2023",
    income: 2741965,
  },
  {
    date: "12-11-2023",
    income: 19175514,
  },
  {
    date: "13-11-2023",
    income: 40826120,
  },
  {
    date: "14-11-2023",
    income: 5786028,
  },
  {
    date: "15-11-2023",
    income: 6048350,
  },
  {
    date: "16-11-2023",
    income: 110100000,
  },
  {
    date: "17-11-2023",
    income: 41139644,
  },
  {
    date: "18-11-2023",
    income: 37948462,
  },
  {
    date: "19-11-2023",
    income: 24413857,
  },
  {
    date: "20-11-2023",
    income: 25470265,
  },
  {
    date: "21-11-2023",
    income: 34069700,
  },
  {
    date: "22-11-2023",
    income: 10211132,
  },
  {
    date: "23-11-2023",
    income: 12531885,
  },
  {
    date: "24-11-2023",
    income: 12714056,
  },
  {
    date: "25-11-2023",
    income: 27023882,
  },
  {
    date: "26-11-2023",
    income: 33827396,
  },
  {
    date: "27-11-2023",
    income: 13371354,
  },
  {
    date: "28-11-2023",
    income: 7979962,
  },
  {
    date: "29-11-2023",
    income: 15032924,
  },
  {
    date: "30-11-2023",
    income: 8712508,
  },
];

const PlainDataIncomeDay = [
  {
    date: "24-11-2023",
    income: 800000,
  },
  {
    date: "25-11-2023",
    income: 800000,
  },
  {
    date: "26-11-2023",
    income: 2286585,
  },
  {
    date: "27-11-2023",
    income: 3640866,
  },
  {
    date: "28-11-2023",
    income: 2286585,
  },
  {
    date: "29-11-2023",
    income: 900000,
  },
  {
    date: "30-11-2023",
    income: 464004,
  },
  {
    date: "01-12-2023",
    income: 2286585,
  },
];

const PlainDataIncomeMonth = [
  {
    date: "01-05-2023",
    income: 22865856,
  },
  {
    date: "02-06-2023",
    income: 60000000,
  },
  {
    date: "03-07-2023",
    income: 46490045,
  },
  {
    date: "04-08-2023",
    income: 9000000,
  },
  {
    date: "05-09-2023",
    income: 36408664,
  },
  {
    date: "06-10-2023",
    income: 32475250,
  },
  {
    date: "07-11-2023",
    income: 34803815,
  },
];

const formatDateToStringMonth = (date) => {
  const value = dayjs(date, "DD-MM-YYYY");
  return value.format("MMMM YYYY");
};

const formatDateToStringDay = (date) => {
  const value = dayjs(date, "DD-MM-YYYY");
  return value.format("dddd, DD MMMM YYYY");
};

const formatDateToStringWeek = (date, separator = "-") => {
  const value = dayjs(date, "DD-MM-YYYY");
  // return `Week ${value.week()}, ${value.format("MMMM YYYY")}`;
  return `Week ${value.week()}, ${value.format("DD")} ${separator} ${value
    .add(7, "days")
    .format("DD MMMM YYYY")}`;
};

// export const DataIncomeWeek = PlainDataIncomeWeek.map((value) => {
//   value.date = formatDateToStringWeek(value.date);
//   return value;
// });

export const DataIncome = PlainDataIncomeMonth.map((value) => {
  value.date = formatDateToStringMonth(value.date);
  return value;
});

export const DataIncomeDay = PlainDataIncomeDay.map((value) => {
  value.date = formatDateToStringDay(value.date);
  return value;
});

const ProcessedDataIncomeWeek = [];
// loop through each week in PlainDataIncomeWeek
for (let i = 0; i < PlainDataIncomeWeek.length; i += 7) {
  // calculate total income for week
  const totalIncome = PlainDataIncomeWeek.slice(i, i + 7).reduce(
    (acc, current) => acc + current.income,
    0,
  );

  // proses data income week
  ProcessedDataIncomeWeek.push({
    date: formatDateToStringWeek(PlainDataIncomeWeek[i].date),
    income: totalIncome, // calculate income
  });
}

export const DataIncomeWeek = ProcessedDataIncomeWeek;

console.log("datas:", DataIncomeWeek);

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
// ];

// export const RangePresets = [
//   {
//     label: "Last 7 Days",
//     value: [dayjs().add(-7, "d"), dayjs()],
//   },
//   {
//     label: "Last 7 Weeks",
//     value: [dayjs().add(-7, "week"), dayjs()],
//   },
//   {
//     label: "Last 7 Month",
//     value: [dayjs().add(-7, "month"), dayjs()],
//   },
// ];

// const currentDate = new Date();
// const startDate = new Date(currentDate.getTime() - 7 * 24 * 60 * 60 * 1000);

// const filteredData = PlainDataIncomeDay.filter((item) => {
//   const itemDate = new Date(item.date);
//   return itemDate >= startDate && itemDate <= currentDate;
// });

// export const DataIncomeDay = filteredData.map((item) => {
//   item.date = formatDateToStringDay(item.date);
//   return item;
// });
