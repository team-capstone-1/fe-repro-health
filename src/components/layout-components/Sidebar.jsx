import { useState } from "react";
import { ConfigProvider, Menu } from "antd";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";
import { AiOutlineSchedule } from "react-icons/ai";
import { TfiDashboard } from "react-icons/tfi";
import { HiOutlineNewspaper } from "react-icons/hi";
import { PiWechatLogoBold } from "react-icons/pi";
import { CgProfile } from "react-icons/cg";
import { IoIosLogOut } from "react-icons/io";
import LogoutModal from "@/components/layout-components/LogoutModal";

export default function Sidebar() {
  const [collapsed, setCollapsed] = useState(true);
  const [showLogoutModal, setShowLogoutModal] = useState(false);

  const openLogoutModal = () => {
    console.log("Opening Logout Modal");
    setShowLogoutModal(true);
  };

  const closeLogoutModal = () => {
    setShowLogoutModal(false);
  };

  const toggleCollapsed = () => {
    setCollapsed((prev) => !prev);
  };
  const iconStyle = `w-5 h-5  ${collapsed ? "mt-[10px] -ml-[1px]" : "mr-2"}`;
  const items = [
    getItem(
      "",
      "1",
      <div
        className={`${collapsed ? "-ml-8 px-8" : "-ml-6 py-3 pl-6 pr-12"}`}
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
    getItem("Artikel", "4", <HiOutlineNewspaper className={iconStyle} />),
    getItem("Forum", "5", <PiWechatLogoBold className={iconStyle} />),
    getItem("Profile", "6", <CgProfile className={iconStyle} />),
    {
      style: {
        opacity: 0,
        pointerEvents: "none",
      },
      className: "pt-36",
    },
    {
      type: "divider",
      style: {
        border: "none",
        borderTop: "2px solid #e8e8e8",
      },
    },
    {
      label: "",
      key: "7",
      icon: (
        <div
          className={`${collapsed ? "-ml-8 px-8" : "-ml-6 py-3 pl-6 pr-16"}`}
          onClick={openLogoutModal}
        >
          {collapsed ? (
            <IoIosLogOut className="h-5 w-5" />
          ) : (
            <span>
              <IoIosLogOut className="mr-5 h-5 w-5" />
              Logout
            </span>
          )}
        </div>
      ),
      danger: true,
    },
  ];
  return (
    <div className="sticky top-[76px] h-[calc(100vh-75.91px)] min-h-[650px] bg-white sm:top-[83px] sm:max-md:h-[calc(100vh-82.6px)] md:top-[75px] md:h-[calc(100vh-74.63px)]">
      <ConfigProvider
        theme={{
          components: {
            Menu: {
              itemSelectedBg: "#17c6a3",
              itemSelectedColor: "#fff",
              dangerItemSelectedBg: "#ff5757",
              dangerItemSelectedColor: "#fff",
            },
          },
        }}
      >
        <Menu
          className={`max-w-[256px] space-y-5 pt-8 transition-all duration-700 ease-out ${
            collapsed ? "px-2" : "px-8"
          }`}
          defaultSelectedKeys={["1"]}
          mode="inline"
          theme="light"
          inlineCollapsed={collapsed}
          items={items}
        ></Menu>
      </ConfigProvider>
      {/* Logout Modal */}
      {showLogoutModal && <LogoutModal closeModal={closeLogoutModal} />}
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
