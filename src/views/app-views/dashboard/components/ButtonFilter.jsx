import { useState } from "react";
import { Row, Button, Col, Flex } from "antd";

export default function ButtonFilter() {
  const [selectedButton, setSelectedButton] = useState("Bulanan");

  const handleButtonClick = (buttonType) => {
    setSelectedButton(buttonType);
  };
  return (
    <>
      <Row id="button-filter-wrapper" justify="space-between">
        <Col xs={24} md={12}>
          <h4 id="welcome-doctor" className="mb-4 block font-semibold">
            Selamat Datang, Dr Andi!
          </h4>
        </Col>
        <Col xs={24} md={12} className="mb-5 text-start md:text-end">
          <Flex className="flex justify-start sm:pr-5 md:justify-end" wrap="wrap" gap="small">
            <Button
              id="button-filter-monthly"
              type="primary"
              className={`px-4 hover:bg-green-500 hover:text-white ${
                selectedButton === "Bulanan"
                  ? "bg-green-500"
                  : "border-green-500 text-green-600"
              }`}
              onClick={() => handleButtonClick("Bulanan")}
            >
              Bulanan
            </Button>
            <Button
              id="button-filter-weekly"
              type="primary"
              className={`px-4 hover:bg-green-500 hover:text-white ${
                selectedButton === "Mingguan"
                  ? "bg-green-500"
                  : "border-green-500 text-green-600"
              }`}
              onClick={() => handleButtonClick("Mingguan")}
            >
              Mingguan
            </Button>
            <Button
              id="button-filter-daily"
              type="primary"
              className={`px-4 hover:bg-green-500 hover:text-white ${
                selectedButton === "Harian"
                  ? "bg-green-500"
                  : "border-green-500 text-green-600"
              }`}
              onClick={() => handleButtonClick("Harian")}
            >
              Harian
            </Button>
          </Flex>
        </Col>
      </Row>
    </>
  );
}
