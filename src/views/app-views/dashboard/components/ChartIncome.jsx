import { Alert, Card, Col, Row } from "antd";
import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  //   LabelList,
} from "recharts";

// dataset
const data = [
  {
    year: "Januari",
    after: 100,
    // previous: 200,
    amount: 0,
  },
  {
    year: "Februari",
    after: 140,
    // previous: 180,
    amount: 50,
  },
  {
    year: "Maret",
    after: 160,
    // previous: 240,
    amount: 100,
  },
  {
    year: "April",
    after: 140,
    // previous: 220,
    amount: 150,
  },
  {
    year: "Mei",
    after: 180,
    // previous: 140,
    amount: 200,
  },
];

const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div className="w-[190px] rounded-lg bg-slate-50 px-3 py-3">
        <p className="mb-4 text-base text-neutral-600">
          {`${label} : Rp. ${payload[0].value * 1000}`}
        </p>

        <p className="text-base text-neutral-600">
          {`Pendapatan Bulan ${label}.`}
        </p>
      </div>
    );
  }

  return null;
};

export default function ChartIncome() {
  const customTickYAxis = (value) => `${value}K`;
  const customTickXAxis = (value) => value.slice(0, 3);

  return (
    <Row justify="start">
      <Col span={8} xs={24} md={24} lg={8}>
        <Card>
          <div className="pl-4">
            <h3 className="text-2xl font-semibold text-black">Pendapatan</h3>
          </div>

          <ResponsiveContainer width="100%" aspect={1.5}>
            <BarChart
              //   width={405}
              //   height={300}
              data={data}
              barGap={0}
              margin={{
                top: 15,
                right: 0,
                left: 0,
                bottom: 5,
              }}
              className="mt-[3.4rem]"
            >
              <CartesianGrid stroke="rgba(185, 185, 185, 1)" vertical={false} />

              <XAxis
                tickFormatter={customTickXAxis}
                orientation="bottom"
                dataKey="year"
                tickLine={false}
                axisLine={false}
                stroke="rgba(75, 75, 75, 1)"
                className="text-base font-medium"
              />

              <YAxis
                tickFormatter={customTickYAxis}
                orientation="left"
                type="string"
                dataKey="amount"
                tickLine={false}
                axisLine={false}
                stroke="rgba(75, 75, 75, 1)"
                className="text-base font-semibold"
              ></YAxis>

              <Tooltip
                cursor={{ fill: "transparent" }}
                content={CustomTooltip}
              />

              <Bar
                barSize={25}
                radius={0}
                dataKey="after"
                name="Pekan Kini"
                fill="rgba(20, 198, 164, 1)"
              >
                {/* <LabelList position="top" formatter={customTickYAxis} /> */}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </Card>
      </Col>
    </Row>
  );
}
