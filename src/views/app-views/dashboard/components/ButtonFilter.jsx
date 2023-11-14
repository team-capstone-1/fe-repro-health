import { useState } from "react";
import { Row, Button, Space } from "antd";

export default function ButtonFilter() {
  const [selectedButton, setSelectedButton] = useState("Tahunan");

  const handleButtonClick = (buttonType) => {
    setSelectedButton(buttonType);
  };
  return (
    <>
      <Row justify="space-between">
        <h4 className="my-4 block font-semibold">Selamat Datang, Dr Andi!</h4>
        <Space>
          <Button
            type="primary"
            className={`px-4 hover:bg-green-500 hover:text-white ${
              selectedButton === "Tahunan"
                ? "bg-green-500"
                : "hover: border-green-500 px-4 text-green-600"
            }`}
            onClick={() => handleButtonClick("Tahunan")}
          >
            Tahunan
          </Button>
          <Button
            type="primary"
            className={`px-4 hover:bg-green-500 hover:text-white ${
              selectedButton === "Bulanan"
                ? "bg-green-500"
                : "hover: border-green-500 px-4 text-green-600"
            }`}
            onClick={() => handleButtonClick("Bulanan")}
          >
            Bulanan
          </Button>
          <Button
            type="primary"
            className={`px-4 hover:bg-green-500 hover:text-white ${
              selectedButton === "Mingguan"
                ? "bg-green-500"
                : "hover: border-green-500 px-4 text-green-600"
            }`}
            onClick={() => handleButtonClick("Mingguan")}
          >
            Mingguan
          </Button>
        </Space>
      </Row>
    </>
  );
}