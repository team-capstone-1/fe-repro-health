import { Card, Col, DatePicker, Row, Space } from "antd";
import dayjs from "dayjs";
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
  DataIncome as data,
  RangePresets as rangePresets,
} from "@/views/app-views/dashboard/constant/graph-income";

import { useState } from "react";

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

export default function ChartIncome() {
  const customTickYAxis = (values) => `${values.toString().slice(0, 2)} jt`;
  const customTickXAxis = (value) => value.slice(0, 3);

  const { RangePicker } = DatePicker;

  const [selectedRange, setSelectedRange] = useState("");
  const [startDate, setStartDate] = useState(selectedRange[0]);
  const [endDate, setEndDate] = useState(selectedRange[1]);
  const dateFormat = "DD/MM/YYYY";

  const onRangeChange = (dates) => {
    if (dates) {
      setStartDate(dates[0]);
      setEndDate(dates[1]);
      setSelectedRange(dates);
    } else {
      setStartDate("");
      setEndDate("");
      setSelectedRange("");
    }
  };

  const getLabel = () => {
    if (startDate && endDate) {
      const formattedStartDate = dayjs(startDate).format("DD MMMM YYYY");
      const formattedEndDate = dayjs(endDate).format("DD MMMM YYYY");
      return `Pendapatan dari ${formattedStartDate} hingga ${formattedEndDate}`;
    } else {
      return `Pilih Rentang Pendapatan...`;
    }
  };

  return (
    <Row justify="start">
      <Col span={24} xs={24} md={24} lg={24}>
        <Card>
          <div className="pl-4">
            <h3 className="text-2xl font-semibold text-black">
              Grafik Pendapatan
            </h3>
            <h6 id="label-graph" className="my-2">
              {getLabel()}
            </h6>

            <Col span={24}>
              <Space direction="vertical" size={12}>
                <RangePicker
                  presets={rangePresets}
                  onChange={onRangeChange}
                  format={dateFormat}
                />
              </Space>
            </Col>
          </div>

          <Wrapper width="100%" height={340}>
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
