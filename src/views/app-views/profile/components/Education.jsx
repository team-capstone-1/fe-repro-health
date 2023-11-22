import { ConfigProvider, Timeline } from "antd";
import { DataEducations as educations } from "../constant/data-education";
import { useState } from "react";

export default function Education() {
  const CustomDot = ({ onClick, selected }) => (
    <button
      onClick={onClick}
      style={{
        width: 16,
        height: 16,
        border: "2px solid #14C6A4",
        borderRadius: "100%",
        backgroundColor: selected ? "#14C6A4" : "transparent",
      }}
    />
  );

  const [selectedDot, setSelectedDot] = useState(0);

  const handleDotClick = (index) => {
    setSelectedDot(index);
  };

  const educationItems = educations.map((education, index) => ({
    label: (
      <p className="text-xs font-semibold sm:me-[40px] sm:text-sm lg:me-[90px] lg:text-base">
        {education.starting_date} - {education.end_date}
      </p>
    ),

    children: (
      <div className="ms-[20px]">
        <ul key={education.id} className="w-[500px] sm:w-[250px] lg:w-[500px]">
          <li>
            <p className="text-xs font-medium sm:text-sm lg:text-base">
              {education.title_program}, {education.university}
            </p>
          </li>
          <li>
            <p className="text-[10px] font-light text-[#686868] sm:text-sm lg:text-sm">
              {education.education_program}
            </p>
          </li>
        </ul>
      </div>
    ),

    dot: (
      <CustomDot
        onClick={() => handleDotClick(index)}
        selected={selectedDot === index}
      />
    ),
  }));

  return (
    <section id="profile-education-section" className="mt-10">
      <ConfigProvider
        theme={{
          components: {
            Timeline: {
              itemPaddingBottom: "20px",
              tailColor: "rgba(217, 217, 217, 0.7)",
            },
          },
          token: {
            colorPrimary: "#14c6a4",
            colorText: "#0D0D0D",
          },
        }}
      >
        <Timeline
          items={educationItems}
          mode="left"
          style={{ display: "inline-block" }}
        />
      </ConfigProvider>
    </section>
  );
}
