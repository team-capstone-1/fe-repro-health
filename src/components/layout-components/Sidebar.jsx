import { useState } from "react";
import { ConfigProvider, Menu } from "antd";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";
import { AiOutlineSchedule, AiOutlineDollarCircle } from "react-icons/ai";
import { TfiDashboard } from "react-icons/tfi";
import { HiOutlineNewspaper } from "react-icons/hi";
import { PiWechatLogoBold } from "react-icons/pi";
import { CgProfile } from "react-icons/cg";

export default function Sidebar() {
  const [collapsed, setCollapsed] = useState(true);
  const toggleCollapsed = () => {
    setCollapsed((prev) => !prev);
  };
  const iconStyle = `w-5 h-5 ${collapsed ? "mt-[10px] -ml-[1px]" : "mr-2"}`;
  const items = [
    getItem(
      "",
      "1",
      <div
        className={` ${collapsed ? "-ml-8 px-8" : "-ml-6 py-3 pl-6 pr-12"}`}
        onClick={toggleCollapsed}
      >
        {collapsed ? (
          <RightOutlined />
        ) : (
          <span>
            <LeftOutlined className="pr-5" />
            Hide Panel
          </span>
        )}
      </div>,
    ),
    {
      type: "divider",
      style: {
        margin: "20px 0",
        border: "none",
        borderTop: "2px solid #e8e8e8",
      },
    },
    getItem("Dashboard", "2", <TfiDashboard className={iconStyle} />),
    getItem("Janji Temu", "3", <AiOutlineSchedule className={iconStyle} />),
    getItem("Pendapatan", "4", <AiOutlineDollarCircle className={iconStyle} />),
    getItem("Artikel", "5", <HiOutlineNewspaper className={iconStyle} />),
    getItem("Forum", "6", <PiWechatLogoBold className={iconStyle} />),
    getItem("Profile", "7", <CgProfile className={iconStyle} />),
  ];
  return (
    <div className="">
      <ConfigProvider
        theme={{
          components: {
            Menu: {
              itemSelectedBg: "#17c6a3",
              itemSelectedColor: "#fff",
            },
          },
        }}
      >
        <Menu
          className={`h-[calc(100vh-73.03px)] max-w-[256px] space-y-5 py-8 text-slate-500 transition-all duration-700 ${
            collapsed ? "px-2" : "px-8 w-screen max-w-[100vw] sm:w-[256px] sm:max-w-[256px]"
          }`}
          defaultSelectedKeys={["1"]}
          mode="inline"
          theme="light"
          inlineCollapsed={collapsed}
          items={items}
        />
      </ConfigProvider>
    </div>
  );
}

function getItem(label, key, icon, children, type) {
  return {
    key,
    icon,
    children,
    label,
    type,
  };
}
