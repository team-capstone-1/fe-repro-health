import { useEffect, useState } from "react";
import { ConfigProvider, Skeleton, Timeline } from "antd";
import { APIProfile } from "@/apis/APIProfile";

export default function Education() {
  const [isLoading, setIsLoading] = useState(true);
  const [selectedDot, setSelectedDot] = useState(0);
  const [dataDoctor, setDataDoctor] = useState([]);

  useEffect(() => {
    const fetchDoctorEducations = async () => {
      const result = await APIProfile.getDoctorEducationHistories();
      if (result?.message === "success get doctor educations") {
        setDataDoctor(result.response);
        setIsLoading(false);
      }
    };
    fetchDoctorEducations();
  }, []);

  const handleDotClick = (index) => {
    setSelectedDot(index);
  };

  const educationItems = dataDoctor?.map((item, index) => ({
    label: (
      <p className="text-xs font-semibold sm:me-[40px] sm:text-sm lg:me-[90px] lg:text-base">
        {item.start_date?.slice(0, 4)} - {item.end_date?.slice(0, 4)}
      </p>
    ),

    children: (
      <div className="ms-[5px] sm:ms-[10px] lg:ms-[20px]">
        <ul key={item.id} className="w-[200px] sm:w-[250px] lg:w-[500px]">
          <li>
            <p className="text-xs font-semibold sm:w-[300px] md:w-[420px] md:text-sm lg:w-[550px] lg:text-base xl:w-[800px]">
              {item.university}
            </p>
          </li>
          <li>
            <p className="text-xs font-light text-[#686868] sm:w-[300px] md:w-[420px] md:text-sm lg:w-[550px] lg:text-sm xl:w-[800px]">
              {item.education_program}
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
        <Skeleton loading={isLoading} />

        <Timeline
          items={educationItems}
          mode="left"
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
      borderRadius: "100%",
      backgroundColor: selected ? "#14C6A4" : "transparent",
    }}
  />
);
