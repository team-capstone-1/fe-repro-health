import { Alert, Card, Col, Row } from "antd";
import React from "react";
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

// dataset
const data = [
  {
    year: "Januari",
    after: 53,
    // previous: 200,
    amount: 0,
  },
  {
    year: "Februari",
    after: 43,
    // previous: 180,
    amount: 10,
  },
  {
    year: "Maret",
    after: 33,
    // previous: 240,
    amount: 20,
  },
  {
    year: "April",
    after: 50,
    // previous: 220,
    amount: 30,
  },
  {
    year: "Mei",
    after: 47,
    // previous: 140,
    amount: 40,
  },
  {
    year: "Juni",
    after: 45,
    // previous: 140,
    amount: 50,
  },
  {
    year: "Juli",
    after: 49,
    // previous: 140,
    amount: 60,
  },
];

const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div className="w-[190px] rounded-lg bg-slate-50 px-3 py-3">
        <p className="mb-4 text-base text-neutral-600">
          {`${label} : Rp. ${payload[0].value * 1000000}`}
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
  const customTickYAxis = (value) => `${value} jt`;
  const customTickXAxis = (value) => value.slice(0, 3);

  return (
    <Row justify="start">
      <Col span={24} xs={24} md={24} lg={16}>
        <Card>
          <div className="pl-4">
            <h3 className="text-2xl font-semibold text-black">
              Grafik Pendapatan
            </h3>
          </div>

          <Wrapper width="100%" aspect={2}>
            <BarChart
              //   width={405}
              //   height={300}
              data={data}
              barGap={0}
              margin={{
                top: 5,
                right: 0,
                left: 10,
                bottom: 10,
              }}
            >
              <Legend
                verticalAlign="top"
                align="end"
                iconSize={20}
                iconType="circle"
                formatter={(value) => (
                  <span className="text-black">{value}</span>
                )}
                wrapperStyle={{
                  paddingBottom: "50px",
                }}
              />

              <CartesianGrid stroke="rgba(233, 233, 233, 1)" vertical={false} />

              <XAxis
                tickFormatter={customTickXAxis}
                orientation="bottom"
                dataKey="year"
                tickLine={false}
                axisLine={false}
                tickMargin={20}
                className="text-base font-medium"
              />

              <YAxis
                tickFormatter={customTickYAxis}
                orientation="left"
                type="string"
                dataKey="amount"
                tickLine={false}
                axisLine={false}
                tickMargin={20}
                // ticks={[0, 10, 20, 30, 40, 50, 60]} custom show tick
                className="text-base"
              />

              <Tooltip
                cursor={{ fill: "transparent" }}
                content={CustomTooltip}
              />

              <Bar
                barSize={25}
                radius={30}
                dataKey="after"
                name="Jumlah Pendapatan"
                fill="rgba(20, 198, 164, 1)"
              >
                {/* <LabelList position="insideBottom" fill="black" /> */}
              </Bar>
            </BarChart>
          </Wrapper>
        </Card>
      </Col>
    </Row>
  );
}
