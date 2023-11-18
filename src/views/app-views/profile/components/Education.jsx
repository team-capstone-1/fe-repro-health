import { useState } from "react";
import { ConfigProvider, Steps } from "antd";
import { DataEducation as education } from "../constant/data-education";

export default function Education() {
  const [current, setCurrent] = useState(education.length - 2);

  const onChange = (value) => {
    // console.log("onChange:", value);
    setCurrent(value);
  };

  return (
    <section id="profile-education-section">
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
          items={education}
          className="font-medium"
        />
      </ConfigProvider>
    </section>
  );
}
