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

import {
  // DataIncome as data,
  DataIncomeDay as data,
  // DataIncomeWeek as data,
  // RangePresets as data,
} from "@/views/app-views/dashboard/constant/graph-income";

const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div className="w-full rounded-[4px] bg-white px-3 py-3 shadow-lg">
        <p id="label-year" className="mb-4 text-base text-black">
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
};

export default function ChartIncome({ selectedFilter }) {
  // const customTickYAxis = (values) => `${values.toString().slice(0, 2)} jt`;
  const customTickYAxis = (values) => {
    if (values > 99000000) {
      return `${values.toString().slice(0, 3)} jt`;
    } else {
      return `${values.toString().slice(0, 2)} jt`;
    }
  };
  const customTickXAxis = (value) => value.slice(0, 3);

  const mobileSize = window.innerWidth >= 450;

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
              data={data}
              barGap={0}
              margin={{
                top: 5,
                right: 0,
                left: 0,
                bottom: 10,
              }}
              // maxBarSize={30}
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
                className="text-base font-medium"
              />

              <YAxis
                tickFormatter={customTickYAxis}
                orientation="left"
                type="number"
                // dataKey="amount"
                tickLine={false}
                axisLine={false}
                tickMargin={10}
                // ticks={[0, 10, 20, 30, 40, 50, 60]}
                custom
                show
                tick
                className="text-base"
              />

              <Tooltip
                id="tooltip-chart-income"
                cursor={{ fill: "transparent" }}
                content={CustomTooltip}
              />

              <Bar
                id="bar-chart-income"
                barSize={mobileSize || data.length < 20 ? 30 : 5}
                // barSize={data.length < 8 ? 30 : 20}
                radius={data.length < 10 ? 10 : 2}
                dataKey="income"
                name="Jumlah Pendapatan"
                fill="rgba(20, 198, 164, 1)"
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
