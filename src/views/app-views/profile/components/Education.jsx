import { ConfigProvider, Steps } from "antd";
import { useState } from "react";

const itemsEdu = [
  {
    title: "Program Magister Kedokteran, Universitas Gadjah Mada, ",
    description: "Program Kedokteran",
  },
  {
    title: "Program Residen Dokter Spesialis,  Rumah Sakit Sejahtera",
    description: "Residency Program Kedokteran Internal",
  },
  {
    title: "Program Internship Dokter Umum, RSUP Klaten",
    description: "",
  },
  {
    title: "Sarjana Kedokteran, Universitas Gadjah Mada, Fakultas Kedokteran",
    description: "",
  },
];

console.log(itemsEdu);
export default function Education() {
  const [current, setCurrent] = useState(itemsEdu.length - 2);

  const onChange = (value) => {
    // console.log("onChange:", value);
    setCurrent(value);
  };

  return (
    <section>
      <ConfigProvider
        theme={{
          components: {
            Steps: {
              descriptionMaxWidth: "200px",
              dotSize: 10,
              dotCurrentSize: 15,
              lineHeight: "25px",
            },
          },
          token: {
            colorPrimary: "#14c6a4",
            colorText: "#0D0D0D",
          },
        }}
      >
        <Steps
          progressDot
          current={current}
          onChange={onChange}
          direction="vertical"
          items={itemsEdu}
          className="font-medium"
        />
      </ConfigProvider>
    </section>
  );
}
