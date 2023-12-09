import { useState } from "react";
import { Row, Button, Col, Flex } from "antd";
import { useSelector } from "react-redux";

import { selectDoctorProfile } from "@/store/get-doctor-profile-slice";

export function ButtonFilter({ onFilterClick }) {
  const [selectedFilter, setSelectedfilter] = useState("bulan");
  const doctorState = useSelector(selectDoctorProfile);
  const { doctorName } = doctorState.data?.response.name || {
    name: "Dr. Andi Cahaya",
  };

  const handleButtonClick = (buttonType) => {
    setSelectedfilter(buttonType);
    onFilterClick(buttonType);
  };

  return (
    <>
      <Row id="button-filter-wrapper" justify="space-between">
        <Col xs={24} md={12}>
          <h4 id="welcome-doctor" className="mb-4 block font-semibold">
            Selamat Datang, {doctorName?.split(",")[0]}!
          </h4>
        </Col>
        <Col xs={24} md={12} className="mb-5 text-start md:text-end">
          <Flex
            className="flex justify-start sm:pr-5 md:justify-end"
            wrap="wrap"
            gap="small"
          >
            <Button
              ghost
              id="button-filter-monthly"
              className={`px-4 hover:bg-green-500 hover:text-white ${
                selectedFilter === "bulan"
                  ? "bg-green-500 hover:border-green-200"
                  : "border-green-500 bg-transparent text-green-600"
              }`}
              onClick={() => handleButtonClick("bulan")}
            >
              Bulanan
            </Button>
            <Button
              ghost
              id="button-filter-weekly"
              className={`px-4 hover:bg-green-500 hover:text-white ${
                selectedFilter === "minggu"
                  ? "bg-green-500 hover:border-green-200"
                  : "border-green-500 text-green-600"
              }`}
              onClick={() => handleButtonClick("minggu")}
            >
              Mingguan
            </Button>
            <Button
              ghost
              id="button-filter-daily"
              className={`px-4 hover:bg-green-500 hover:text-white ${
                selectedFilter === "hari"
                  ? "bg-green-500 hover:border-green-200"
                  : "border-green-500 text-green-600"
              }`}
              onClick={() => handleButtonClick("hari")}
            >
              Harian
            </Button>
          </Flex>
        </Col>
      </Row>
    </>
  );
}
