import dayjs from "dayjs";
import { useEffect, useState } from "react";
import { Timeline, ConfigProvider, Skeleton } from "antd";
import { APIProfile } from "@/apis/APIProfile";

export default function WorkExperience() {
  const [isLoading, setIsLoading] = useState(true);
  const [selectedDot, setSelectedDot] = useState(0);
  const [dataDoctor, setDataDoctor] = useState([]);

  useEffect(() => {
    const fetchDoctorWorkExperience = async () => {
      const result = await APIProfile.getDoctorWorkHistories();
      if (result.message === "success get doctor work histories") {
        setDataDoctor(result.response);
        const lastIndex = result?.response?.length - 1;
        setSelectedDot(lastIndex);
        setIsLoading(false);
      }
    };
    fetchDoctorWorkExperience();
  }, []);
  const handleDotClick = (index) => {
    setSelectedDot(index);
  };

  const timelineItems = dataDoctor?.map((items, index) => ({
    label: (
      <p className="text-xs font-semibold sm:me-[40px] sm:text-sm lg:me-[90px] lg:text-base">
        {items.start_date?.slice(0, 4)} -{" "}
        {items.end_date?.slice(0, 4) >= dayjs().year()
          ? "Sekarang"
          : items.end_date?.slice(0, 4)}
      </p>
    ),
    dot: (
      <CustomDot
        onClick={() => handleDotClick(index)}
        selected={selectedDot === index}
      />
    ),
    children: (
      <div className="ms-[5px] sm:ms-[10px] lg:ms-[20px]">
        <div className="w-[180px] sm:w-[250px] lg:w-[500px]">
          <p className="mb-1 text-xs font-semibold sm:w-[300px] md:w-[420px] md:text-sm lg:w-[550px] lg:text-base xl:w-[800px]">
            {items.job}
          </p>
        </div>
        <ul className="w-[180px] list-disc sm:w-[250px] lg:w-[500px]">
          <li className="mb-1 ms-3 text-xs font-light text-[#686868] sm:w-[300px] md:w-[420px] md:text-sm lg:w-[550px] lg:text-sm xl:w-[800px]">
            {items.position}
          </li>
        </ul>
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
        <Skeleton loading={isLoading} />
        <Timeline
          mode="left"
          items={timelineItems}
          reverse={true}
          style={{ display: "inline-block" }}
        />
      </ConfigProvider>
    </section>
  );
}
const CustomDot = ({ onClick, selected }) => (
  <button
    onClick={onClick}
    style={{
      width: 16,
      height: 16,
      border: "2px solid #14C6A4",
      borderRadius: "50%",
      backgroundColor: selected ? "#14C6A4" : "#FFFFFF",
    }}
  />
);
