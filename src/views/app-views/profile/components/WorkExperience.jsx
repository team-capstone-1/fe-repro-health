import { useState } from "react";
import { Timeline, ConfigProvider } from "antd";
import { DataExperience as data } from "../constant/data-experience";

export default function WorkExperience() {
  const CustomDot = ({ onClick, selected }) => (
    <button
      onClick={onClick}
      style={{
        width: 16,
        height: 16,
        border: "2px solid #14C6A4",
        borderRadius: "50%",
        backgroundColor: selected ? "#14C6A4" : "#FFFFFF",
        // marginBlock: 0,
        // margin: 0,
        // padding: 0,
      }}
    />
  );

  // const [selectedDot, setSelectedDot] = useState(null);
  const [selectedDot, setSelectedDot] = useState(0);

  const handleDotClick = (index) => {
    setSelectedDot(index);
  };

  const timelineItems = data.map((items, index) => ({
    // label: (
    //   <p className="mr-3 text-left text-base font-bold text-grey-900">
    //     {items.year}
    //   </p>
    // ),
    label: <p className="me-[90px] font-semibold">{items.year}</p>,
    dot: (
      <CustomDot
        onClick={() => handleDotClick(index)}
        selected={selectedDot === index}
      />
    ),
    children: (
      <div className="ms-[20px]">
        <div className="w-[500px]">
          <p className="w-[50rem] font-medium">{items.job}</p>
        </div>
        {items.description.map((desc, descIndex) => (
          <ul key={descIndex} className="w-[500px] ">
            <li className="ml-3 w-[50rem] text-sm font-light text-[#686868]">
              &bull; {desc}
            </li>
          </ul>
        ))}
        {/* <p className="ml-3 font-semibold text-grey-900">{items.job}</p>
        {items.description.map((desc, descIndex) => (
          <p
            key={descIndex}
            className="ml-5 text-base font-normal text-grey-300"
          >
            &bull; {desc}
          </p>
        ))} */}
      </div>
    ),
  }));

  return (
    <section id="profile-experience-section" className="mt-10">
      <ConfigProvider
        theme={{
          components: {
            Timeline: {
              itemPaddingBottom: "20px",
              tailColor: "rgba(217, 217, 217, 0.7)",
            },
          },
          token: {
            colorPrimary: "#14C6A4",
            colorTextLabel: "#0D0D0D",
          },
        }}
      >
        <Timeline
          mode="left"
          items={timelineItems}
          style={{ display: "inline-block" }}
        />
      </ConfigProvider>
    </section>
  );
}
