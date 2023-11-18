import { Card, ConfigProvider, Tabs } from "antd";
import React from "react";
import WorkExperience from "./WorkExperience";

export default function TabsDoctor() {
  const onChange = (key) => {
    console.log(key);
  };

  const tabs = [
    {
      key: "1",
      label: <p className="w-[430px] text-center">Pengalaman kerja</p>,
      children: <WorkExperience />,
    },
    {
      key: "2",
      label: <p className="w-[430px] text-center">Pendidikan</p>,
      children: "Content of Tab Pane 2",
    },
    {
      key: "3",
      label: <p className="w-[430px] text-center">Sertifikasi</p>,
      children: "Content of Tab Pane 3",
    },
  ];

  return (
    <section id="tabs-profile">
      <ConfigProvider
        theme={{
          token: {
            colorPrimary: "#14c6a4",
          },
        }}
      >
        <Card>
          <Tabs defaultActiveKey="1" items={tabs} onChange={onChange} />
        </Card>
      </ConfigProvider>
    </section>
  );
}
