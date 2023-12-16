import { useState, useRef, useEffect } from "react";
import { Row, Col } from "antd";

import { ButtonFilter } from "./components/ButtonFilter";
import { TotalCards } from "./components/TotalCards";
import { ChartIncome } from "./components/ChartIncome";
import { AppointmentTable } from "./components/AppointmentTable";
import { MonthlyCalendar } from "./components/MonthlyCalendar";
import { useDocumentTitle } from "@/hooks/useDocumentTitle";
import { useScrollToTop } from "@/hooks/useScrollToTop";

export default function Dashboard() {
  useDocumentTitle("Dashboard");
  useScrollToTop();

  const [selectedFilter, setSelectedFilter] = useState("bulan");
  const [monthlyCalendarHeight, setMonthlyCalendarHeight] = useState(null);
  const monthlyCalendarRef = useRef(null);

  const handleFilterClick = (filter) => {
    setSelectedFilter(filter);
  };

  const updateMonthlyCalendarHeight = () => {
    if (monthlyCalendarRef.current) {
      setMonthlyCalendarHeight(monthlyCalendarRef.current.clientHeight);
    }
  };

  useEffect(() => {
    updateMonthlyCalendarHeight();
  }, [selectedFilter]);

  return (
    <>
      <div className="mb-5 py-5">
        <ButtonFilter onFilterClick={handleFilterClick} />
        <Row gutter={[16, 24]}>
          <Col span={24}>
            <TotalCards selectedFilter={selectedFilter} />
          </Col>
          <Col xs={24} md={24} lg={14} xl={16}>
            <ChartIncome
              selectedFilter={selectedFilter}
              monthlyCalendarHeight={monthlyCalendarHeight}
            />
          </Col>
          <Col xs={24} md={24} lg={10} xl={8} ref={monthlyCalendarRef}>
            <MonthlyCalendar />
          </Col>
          <Col span={24}>
            <AppointmentTable />
          </Col>
        </Row>
      </div>
    </>
  );
}
