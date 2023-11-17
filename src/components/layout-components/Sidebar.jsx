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
import { Link, useNavigate } from "react-router-dom";

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
  const iconStyle = `w-5 h-5  ${
    collapsed ? "mt-0.5 -ml-[0.6em]" : "mr-1 -ml-2"
  }`;
  const items = [
    getItem(
      "",
      "1",
      <div
        id="toggle-collapse"
        className={`${collapsed ? "-ml-8 px-8" : "-ml-6 py-3 pl-6 pr-12"}`}
        onClick={toggleCollapsed}
      >
        {collapsed ? (
          <RightOutlined id="show-toggle" />
        ) : (
          <span id="hide-toggle">
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
    getItem(
      "Dashboard",
      "2",
      <Link to="/dashboard" className="p-2">
        <TfiDashboard className={iconStyle} id="dashboard-icon-sidebar" />
      </Link>,
    ),
    getItem(
      "Janji Temu",
      "3",
      <Link to="/appointment" className="p-2">
        <AiOutlineSchedule className={iconStyle} id="janji-temu-icon-sidebar" />
      </Link>,
    ),
    getItem(
      "Artikel",
      "4",
      <Link to="#" className="p-2">
        <HiOutlineNewspaper className={iconStyle} id="artikel-icon-sidebar" />
      </Link>,
    ),
    getItem(
      "Forum",
      "5",
      <Link to="#" className="p-2">
        <PiWechatLogoBold className={iconStyle} id="forum-icon-sidebar" />
      </Link>,
    ),
    getItem(
      "Profile",
      "6",
      <Link to="#" className="p-2">
        <CgProfile className={iconStyle} id="profile-icon-sidebar" />
      </Link>,
    ),
    {
      type: "divider",
      className: `absolute bottom-20 w-16 border-t-2 border-gray-200 transition-all duration-500 ease-out ${
        collapsed ? "w-16" : "w-48"
      }`,
    },
    {
      label: "",
      key: "7",
      icon: (
        <div
          id="logout-button"
          className={`${collapsed ? "-ml-8 px-8" : "-ml-6 py-3 pl-6 pr-16"}`}
          onClick={openLogoutModal}
        >
          {collapsed ? (
            <IoIosLogOut className="-ml-1 mt-2.5 h-5 w-5" id="logout-icon" />
          ) : (
            <span className="">
              <IoIosLogOut className="mr-5 h-5 w-5 " id="logout-icon" />
              Logout
            </span>
          )}
        </div>
      ),
      danger: true,
      className: `bottom-5 absolute ml-2 transition-all duration-500 ${
        collapsed ? "w-16" : "w-44 content-['Logout']"
      }`,
    },
  ];
  return (
    <div className="sticky top-[75.91px] hidden max-h-[500px] bg-white sm:top-[82.6px] sm:block md:top-[74.63px]">
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
          className={`relative flex h-[calc(100vh-75.91px)] min-h-[500px] max-w-[256px] flex-col space-y-5 pt-8 transition-all duration-700 ease-out sm:max-md:h-[calc(100vh-82.6px)] ${
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
