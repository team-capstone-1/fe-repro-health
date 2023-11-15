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

import { DataIncome as data } from "@/utils/DataIncome";

const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div className="w-full rounded-lg bg-slate-50 px-3 py-3">
        <p className="mb-4 text-base text-neutral-600">
          {`${label} : Rp. ${payload[0].value.toLocaleString("id-ID", {
            minimumFractionDigits: 0,
            maximumFractionDigits: 0,
          })}`}
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
  const customTickYAxis = (values) => `${values.toString().slice(0, 2)} jt`;
  const customTickXAxis = (value) => value.slice(0, 3);

  return (
    <Row justify="start">
      <Col span={24} xs={24} md={24} lg={24}>
        <Card>
          <div className="pl-4">
            <h3 className="text-2xl font-semibold text-black">
              Grafik Pendapatan
            </h3>
          </div>

          <Wrapper width="100%" height={400}>
            <BarChart
              // width={770}
              // height={408}
              data={data}
              barGap={5}
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

              {/* <Bar
                barSize={30}
                radius={10}
                dataKey="prev"
                fill="#8896AB"
                name="Pendapatan Sebelum"
              >
                <LabelList position="insideTop" fill="white" />
              </Bar> */}

              <Bar
                barSize={30}
                radius={10}
                dataKey="after"
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
