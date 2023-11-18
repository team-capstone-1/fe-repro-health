import { Card, Col, ConfigProvider, Row, Tabs } from "antd";
import React from "react";
import WorkExperience from "./WorkExperience";
import Education from "./Education";

function TabsDoctor() {
  const onChange = (key) => {
    console.log(key);
  };

  const tabs = [
    {
      key: "1",
      label: <p className="w-[420px] text-center">Pengalaman kerja</p>,
      children: <WorkExperience />,
    },
    {
      key: "2",
      label: <p className="w-[420px] text-center">Pendidikan</p>,
      children: <Education />,
    },
    {
      key: "3",
      label: <p className="w-[420px] text-center">Sertifikasi</p>,
      children: "Content of Tab Pane 3",
    },
  ];

  return (
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
  );
}

export default TabsDoctor;
