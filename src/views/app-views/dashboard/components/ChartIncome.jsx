import dayjs from "dayjs";
import "dayjs/locale/id";

dayjs.locale("id");

import { Card, Col, Row } from "antd";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer as Wrapper,
  Legend,
} from "recharts";

import // DataIncome,
// DataIncomeDay,
// DataIncomeWeek,
// formatDateToStringDay,
// formatDateToStringWeek,
// formatDateToStringMonth,
"@/views/app-views/dashboard/constant/graph-income";
import { useEffect, useState } from "react";

import { APIDashboard } from "@/apis/APIDashboard";

export function CustomTooltip({ active, payload, label }) {
  if (active && payload && payload.length) {
    return (
      <div className="w-full rounded-[4px] bg-white px-3 py-3 shadow-lg">
        <p id="label-year" className="mb-4 text-base font-medium text-black">
          {`${label} `}
        </p>

        <p className="text-base text-black">
          {`${payload[0].value.toLocaleString("id-ID", {
            minimumFractionDigits: 0,
            maximumFractionDigits: 0,
          })} Rupiah`}
        </p>
      </div>
    );
  }

  return null;
}

export function ChartIncome({ selectedFilter }) {
  const [dataIncome, setDataIncome] = useState([]);
  // const [isError, setIsError] = useState(null);
  const today = dayjs();
  const mobileSize = window.innerWidth <= 450;

  useEffect(() => {
    const fecthDataIncome = async () => {
      try {
        const result = await APIDashboard.getDashboardIncome();
        console.log("data income", result);

        setDataIncome(result?.response);
      } catch (error) {
        console.error(error);
        // setIsError(error);
      }
    };

    fecthDataIncome();
  }, []);

  const filterAndAggregateData = (startDate, endDate) => {
    const filteredData = dataIncome.filter(
      (data) => dayjs(data.date) >= startDate && dayjs(data.date) <= endDate,
    );

    const sortedData = filteredData.sort(
      (a, b) => dayjs(a.date).toDate() - dayjs(b.date).toDate(),
    );

    const aggregatedData = sortedData.reduce((acc, data) => {
      // const date = dayjs(data.date).format("dddd, DD MMMM YYYY");
      let formattedDate = "";

      if (selectedFilter === "hari") {
        formattedDate = dayjs(data.date).format("dddd, DD MMMM YYYY");
      }
      if (selectedFilter === "minggu") {
        const value = dayjs(data.date);
        const startOfWeek = value.startOf("week");
        const endOfWeek = value.endOf("week");

        formattedDate = `Week ${value.week()}, ${startOfWeek.format(
          "DD",
        )} - ${endOfWeek.format("DD MMMM YYYY")}`;
      }
      if (selectedFilter === "bulan") {
        formattedDate = dayjs(data.date).format("MMMM YYYY");
      }

      acc[formattedDate] = (acc[formattedDate] || 0) + parseFloat(data.income);
      return acc;
    }, {});

    return Object.entries(aggregatedData).map(([date, income]) => ({
      date,
      income,
    }));
  };

  let chartData = [];

  switch (selectedFilter) {
    case "hari":
      chartData = filterAndAggregateData(today.subtract(7, "days"), today);
      break;
    case "minggu":
      chartData = filterAndAggregateData(today.subtract(7, "weeks"), today);
      break;
    case "bulan":
      chartData = filterAndAggregateData(today.subtract(7, "months"), today);
      break;
    default:
      break;
  }

  // const customTickYAxis = (values) => `${values.toString().slice(0, 2)} jt`;
  const customTickYAxis = (values) => {
    if (values >= 10000000 && values < 100000000) {
      // return `${values.toString().slice(0, 2)} jt`;
      return Math.floor(values / 1000000) + " jt";
    } else if (values > 100000000) {
      return Math.floor(values / 1000000) + " jt";
    } else if (values >= 1000000 && values < 10000000) {
      // return `${values.toString().slice(0, 2)} rb`;
      return `${values
        .toLocaleString("id-ID", {
          minimumFractionDigits: 0,
          maximumFractionDigits: 0,
        })
        .slice(0, 3)} jt`;
    } else if (values > 1000 && values < 1000000) {
      return Math.floor(values / 1000) + " rb";
    } else if (values < 1000) {
      return `${values
        .toLocaleString("id-ID", {
          minimumFractionDigits: 0,
          maximumFractionDigits: 0,
        })
        .slice(0, 3)} rp`;
    }
  };

  const customTickXAxis = (value) => {
    if (selectedFilter === "minggu") return value.slice(8, 20);
    return value.slice(0, 3);
  };

  return (
    <Row id="chart-income" justify="start">
      <Col span={24} xs={24} md={24} lg={24}>
        <Card>
          <section>
            <h3 id="title-graph" className="text-2xl font-semibold text-black">
              Grafik Pendapatan
            </h3>
            <h6 id="label-graph" className="mb-5 mt-1">
              {`Menampilkan data pendapatan 7 ${selectedFilter.toLowerCase()} terakhir`}
            </h6>
          </section>

          <Wrapper id="chart-income-wrapper" width="100%" height={360}>
            <BarChart
              id="bar-chart"
              // data={data}
              // data={
              //   selectedFilter === "hari"
              //     ? DataIncomeDay
              //     : selectedFilter === "minggu"
              //     ? IncomeWeeks
              //     : IncomeMonth
              // }
              // data={filteredData}
              data={chartData}
              barGap={0}
              margin={{
                top: 5,
                right: 0,
                left: 0,
                bottom: 10,
              }}
            >
              <Legend
                id="legend-chart-income"
                verticalAlign="top"
                align="end"
                iconSize={20}
                iconType="circle"
                formatter={(value) => (
                  <span className="text-xs text-black md:text-[14px] lg:text-[16px]">
                    {value}
                  </span>
                )}
                wrapperStyle={{
                  paddingBottom: "10px",
                }}
              />

              <CartesianGrid stroke="rgba(233, 233, 233, 1)" vertical={false} />

              <XAxis
                tickFormatter={customTickXAxis}
                orientation="bottom"
                dataKey="date"
                tickLine={false}
                axisLine={false}
                tickMargin={10}
                className="text-sm font-medium sm:text-base"
              />

              <YAxis
                tickFormatter={customTickYAxis}
                orientation="left"
                type="number"
                tickLine={false}
                axisLine={false}
                tickMargin={0}
                className="text-base"
              />

              <Tooltip
                id="tooltip-chart-income"
                cursor={{ fill: "transparent" }}
                content={CustomTooltip}
              />

              <Bar
                id="bar-chart-income"
                // barSize={mobileSize || data.length < 20 ? 30 : 5}
                // barSize={data.length < 8 ? 30 : 20}
                // barSize={mobileSize || data.length > 20 ? 15 : 30}
                // radius={data.length >= 7 ? 10 : 2}
                barSize={mobileSize ? 15 : 30}
                radius={mobileSize ? 5 : 10}
                dataKey="income"
                name="Jumlah Pendapatan"
                fill="rgba(20, 198, 164, 1)"
                activeBar={{ fill: "rgba(16, 141, 116, 1)" }}
              >
                {/* <LabelList position="top" fill="black" /> */}
              </Bar>
            </BarChart>
          </Wrapper>
        </Card>
      </Col>
    </Row>
  );
}
