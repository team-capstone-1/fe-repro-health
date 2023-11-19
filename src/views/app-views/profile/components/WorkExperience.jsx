import React, { useState } from "react";
import { Timeline, ConfigProvider } from "antd";

export default function WorkExperience() {

  const data = [
    {
      year: "2020 - Sekarang",
      job: "Konsultan Kesehatan Reproduksi di Klinik Sehat Hati",
      description: [
        "Memberikan konsultasi kepada pasien tentang kesehatan reproduksi.",
        "Terlibat dalam program perawatan kesuburan.",
      ],
    },
    {
      year: "2016 - 2020",
      job: "Spesialis Obstetri dan Ginekologi di Rumah Sakit Kharisma",
      description: [
        "Memperoleh gelar spesialis dalam Obstetri dan Ginekologi (Sp.OG).",
        "Bertanggung jawab atas departemen kesehatan reproduksi.",
      ],
    },
    {
      year: "2009 - 2013",
      job: "Residen Kedokteran Spesialis Obstetri dan Ginekologi di Rumah Sakit Sejahtera (2009-2013)",
      description: [
        "Melanjutkan pendidikan medis ke tingkat spesialisasi.",
        "Mengambil tanggung jawab dalam perawatan kehamilan dan persalinan.",
      ],
    },
    {
      year: "2005 - 2009",
      job: "Dokter Muda di Klinik Sejahtera",
      description: [
        "Bertanggung jawab atas perawatan prenatal, persalinan, dan perawatan pasien ginekologi.",
        "Menjalani praktik bedah obstetri dan ginekologi.",
      ],
    },
  ];

  const CustomDot = ({ onClick, selected }) => (
    <button
      onClick={onClick}
      style={{
        width: 16,
        height: 16,
        border: "2px solid #14C6A4",
        borderRadius: "50%",
        backgroundColor: selected ? "#14C6A4" : "#FFFFFF",
        marginBlock: 0,
        margin: 0,
        padding: 0,
      }}
    />
  );

  const [selectedDot, setSelectedDot] = useState(null);

  const handleDotClick = (index) => {
    setSelectedDot(index);
  };

  const timelineItems = data.map((items, index) => ({
    label: <p className="text-base font-bold text-grey-900 mr-3 text-left">{items.year}</p>,
    dot: (
      <CustomDot
        onClick={() => handleDotClick(index)}
        selected={selectedDot === index}
      
      />
    ),
    children: (
      <div className="">
        <p className="font-semibold text-grey-900 ml-3">{items.job}</p>
        {items.description.map((desc, descIndex) => (
          <p
            key={descIndex}
            className="ml-5 text-base font-normal text-grey-300"
          >
            &bull; {desc}
          </p>
        ))}
      </div>
    ),
  }));

  return (
    <ConfigProvider
      theme={{
        components: {
          Timeline: {
            tailColor: "#D9D9D9",
          },
        },
        token: {
          colorPrimary: "#14C6A4",
          colorTextLabel: "#0D0D0D",
        },
      }}
    >
      <Timeline mode="left" items={timelineItems} className="my-7"/>
    </ConfigProvider>
  );
}
