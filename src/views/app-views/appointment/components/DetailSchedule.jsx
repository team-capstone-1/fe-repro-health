import {
  Badge,
  Button,
  Collapse,
  ConfigProvider,
  Divider,
  Drawer,
  Flex,
  Switch,
  Tooltip,
  theme,
} from "antd";
import { months } from "@/utils/GenerateDate";
import { FiInfo } from "react-icons/fi";
import { useState } from "react";

const ListAppointment = () => {
  return (
    <ul className="text-black">
      <li>
        <Flex align="start" gap={5}>
          <Badge color="#17c6a3" />
          <span className="flex flex-col text-base font-semibold">
            Anastasia Amalia
            <span className="font-normal text-grey-200">009</span>
          </span>
        </Flex>
      </li>
      <li>
        <Flex align="start" gap={5}>
          <Badge color="#17c6a3" />
          <span className="flex flex-col text-base font-semibold">
            Supriyadi
            <span className="font-normal text-grey-200">010</span>
          </span>
        </Flex>
      </li>
      <li>
        <Flex align="start" gap={5}>
          <Badge color="#17c6a3" />
          <span className="flex flex-col text-base font-semibold">
            Naufal Helmi
            <span className="font-normal text-grey-200">012</span>
          </span>
        </Flex>
      </li>
    </ul>
  );
};
const items = (panelStyle) => [
  {
    key: "1",
    label: <p className="text-base font-semibold">Pagi</p>,
    children: <ListAppointment />,
    style: panelStyle,
  },
  {
    key: "2",
    label: <p className="text-base font-semibold">Siang</p>,
    children: <ListAppointment />,
    style: panelStyle,
  },
  {
    key: "3",
    label: <p className="text-base font-semibold">Malam</p>,
    children: <ListAppointment />,
    style: panelStyle,
  },
];

export default function DrawerDetailSchedule({ handleOpen, isOpen, date }) {
  const HeaderDrawer = () => {
    return (
      <div className="ps-5">
        <h5 className="text-xl font-semibold">
          {date.date()} {months[date.month()]} {date.year()}
        </h5>
      </div>
    );
  };

  return (
    <Drawer
      width={500}
      title={<HeaderDrawer />}
      placement="right"
      onClose={handleOpen}
      open={isOpen}
    >
      <DrawerContent handleOpen={handleOpen} />
    </Drawer>
  );
}

const DrawerContent = ({ handleOpen }) => {
  const text = (
    <span className="text-black">
      Anda hanya dapat mengubah jadwal dari hari yang akan datang
    </span>
  );

  const panelStyle = {
    marginBottom: 8,
    background: "#e9e9e9",
    borderRadius: 5,
    border: "none",
  };

  return (
    <div className="flex flex-col gap-4 overflow-hidden">
      <Flex align="center" gap={5} className="text-green-500">
        <h5 className="text-base font-semibold">Jadwal Saya</h5>
        <Tooltip placement="right" title={text} color="white" arrow={true}>
          <FiInfo className="text-xl" />
        </Tooltip>
      </Flex>
      <Morning />
      <Noon />
      <Night />

      <Flex>
        <h5 className="text-base font-semibold text-green-500">
          Jadwal Janji Temu
        </h5>
      </Flex>
      <div className="w-full">
        <Collapse
          accordion
          bordered={false}
          expandIconPosition="end"
          items={items(panelStyle)}
          style={{
            background: "#fff",
          }}
        />
      </div>

      <Flex justify="center" className="mt-5">
        <Button
          type="primary"
          className="bg-green-500 px-10 pb-8 pt-2 hover:bg-green-600 disabled:bg-grey-100 disabled:text-grey-200"
          // disabled
          onClick={handleOpen}
        >
          Simpan Perubahan
        </Button>
      </Flex>
    </div>
  );
};

const Morning = () => {
  const [isChecked, setIsChecked] = useState(true);

  const onChange = (checked) => {
    setIsChecked((prev) => !prev);
    console.log(`switch to ${checked}`);
  };
  return (
    <Flex justify="space-between" align="center">
      <div>
        <h6 className="text-base font-semibold">Pagi</h6>
        <p>08.00 - 11.00</p>
      </div>
      <div>
        <Switch
          checked={isChecked}
          onChange={onChange}
          className={`${isChecked ? "bg-green-500" : "bg-grey-300"}`}
        />
      </div>
    </Flex>
  );
};

const Noon = () => {
  const [isChecked, setIsChecked] = useState(true);

  const onChange = (checked) => {
    setIsChecked((prev) => !prev);
    console.log(`switch to ${checked}`);
  };
  return (
    <Flex justify="space-between" align="center">
      <div>
        <h6 className="text-base font-semibold">Siang</h6>
        <p>13.00 - 15.30</p>
      </div>
      <div>
        <Switch
          checked={isChecked}
          onChange={onChange}
          className={`${isChecked ? "bg-green-500" : "bg-grey-300"}`}
        />
      </div>
    </Flex>
  );
};

const Night = () => {
  const [isChecked, setIsChecked] = useState(true);

  const onChange = (checked) => {
    setIsChecked((prev) => !prev);
    console.log(`switch to ${checked}`);
  };
  return (
    <Flex justify="space-between" align="center">
      <div>
        <h6 className="text-base font-semibold">Malam</h6>
        <p>18.30 - 20.30</p>
      </div>
      <div>
        <Switch
          checked={isChecked}
          onChange={onChange}
          className={`${isChecked ? "bg-green-500" : "bg-grey-300"}`}
        />
      </div>
    </Flex>
  );
};
