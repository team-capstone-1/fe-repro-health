import { useState } from "react";
import { ConfigProvider, Drawer, Menu, Space } from "antd";
import { Link } from "react-router-dom";
import { BsList } from "react-icons/bs";
import { TfiDashboard } from "react-icons/tfi";
import { AiOutlineSchedule } from "react-icons/ai";
import { HiOutlineNewspaper } from "react-icons/hi";
import { PiWechatLogoBold } from "react-icons/pi";
import { CgProfile } from "react-icons/cg";
import { IoIosLogOut } from "react-icons/io";

import logoReproHealth from "@/assets/logo-reprohealth.png";
import LogoutModal from "@/components/layout-components/LogoutModal";

const App = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isShow, setIsShow] = useState(false);

  const handleOpenModal = () => {
    setIsShow((prev) => !prev);
  };

  const handleOpen = () => {
    setIsOpen((prev) => !prev);
  };

  const LogoutItem = () => {
    return (
      <div className="flex justify-center px-4">
        <button
          id="logout-button-drawer"
          className="flex w-full flex-row rounded-lg py-[0.6rem] text-sm text-negative hover:bg-negative hover:text-white "
          onClick={handleOpenModal}
        >
          <span className="ms-4">
            <IoIosLogOut
              className="me-2 text-xl font-semibold"
              id="logout-icon"
            />
          </span>
          Logout
        </button>
      </div>
    );
  };

  const iconStyle = "text-xl";
  const items = [
    getItem(
      "Dashboard",
      "2",
      <TfiDashboard className={iconStyle} id="dashboard-icon-sidebar" />,
    ),
    getItem(
      "Janji Temu",
      "3",
      <AiOutlineSchedule className={iconStyle} id="janji-temu-icon-sidebar" />,
    ),
    getItem(
      "Artikel",
      "4",
      <HiOutlineNewspaper className={iconStyle} id="artikel-icon-sidebar" />,
    ),
    getItem(
      "Forum",
      "5",
      <PiWechatLogoBold className={iconStyle} id="forum-icon-sidebar" />,
    ),
    getItem(
      "Profile",
      "6",
      <CgProfile className={iconStyle} id="profile-icon-sidebar" />,
    ),
  ];

  return (
    <>
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
        <Space>
          <BsList
            className="m-1 cursor-pointer text-xl sm:hidden"
            onClick={handleOpen}
          />
        </Space>
        <Drawer
          width={300}
          title={<DrawerTitle />}
          placement="left"
          closable={true}
          onClose={handleOpen}
          open={isOpen}
          footer={<LogoutItem />}
        >
          <Menu
            className="flex flex-col gap-1 border-0"
            defaultSelectedKeys={["1"]}
            mode="inline"
            theme="light"
            items={items}
          ></Menu>
        </Drawer>
      </ConfigProvider>
      {/* Logout Modal */}
      {isShow && <LogoutModal closeModal={handleOpenModal} />}
    </>
  );
};
export default App;

const DrawerTitle = () => {
  return (
    <div className="flex justify-end">
      <Link to="/">
        <img
          id="logo-reprohealth-drawer"
          src={logoReproHealth}
          alt="logo"
          className="w-28 cursor-pointer sm:block md:w-40"
        />
      </Link>
    </div>
  );
};

function getItem(label, key, icon, children, type) {
  return {
    key,
    icon,
    children,
    label,
    type,
  };
}
