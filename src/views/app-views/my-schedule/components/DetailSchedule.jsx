import { useEffect, useState } from "react";
import { Button, Drawer, Flex, Switch, Tooltip } from "antd";
import { months } from "@/utils/GenerateDate";
import { FiInfo } from "react-icons/fi";
import { formatStrDayJs } from "@/utils/MapListData";
import { getListDataByDate } from "@/utils/GetListData";

import ModalConfirmSchedule from "@/components/shared-components/ModalConfirmSchedule";
import ListAppointment from "./ListAppointment";
import ButtonSubmit from "./ButtonSubmit";

const text = (
  <span className="text-black">
    Anda hanya dapat mengubah jadwal dari hari yang akan datang
  </span>
);

export default function DrawerDetailSchedule({
  handleOpenDrawer,
  isOpen,
  date,
}) {
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
      onClose={handleOpenDrawer}
      open={isOpen}
    >
      <DrawerContent handleOpenDrawer={handleOpenDrawer} selectedDate={date} />
    </Drawer>
  );
}

const DrawerContent = ({ handleOpenDrawer, selectedDate }) => {
  const [isShow, setIsShow] = useState(false);

  const strDate = formatStrDayJs(selectedDate);

  const listData = getListDataByDate(strDate);

  const handleOpenModal = () => {
    setIsShow((prev) => !prev);
    handleOpenDrawer();
  };

  const textDate = (
    <span>
      {selectedDate.date()} {months[selectedDate.month()]} {selectedDate.year()}
    </span>
  );

  const Morning = () => {
    const [isChecked, setIsChecked] = useState(true);

    const handleCheck = () => {
      setIsChecked((prev) => !prev);
    };

    useEffect(() => {
      const CheckType = () => {
        if (listData === null) {
          setIsChecked(false);
        } else if (
          listData[0]?.type === "Masuk" &&
          listData[0]?.content === "Pagi"
        ) {
          setIsChecked(true);
        } else if (listData[0]?.type === "Libur") {
          setIsChecked(false);
        } else {
          setIsChecked(false);
        }
      };

      CheckType();
    }, []);

    const onChange = (checked) => {
      handleCheck();
      console.log(`switch to ${checked}`);
    };
    return (
      <>
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
      </>
    );
  };

  const Noon = () => {
    const [isChecked, setIsChecked] = useState(true);

    useEffect(() => {
      const CheckType = () => {
        if (listData === null) {
          setIsChecked(false);
        } else if (
          (listData[1]?.type === "Masuk" && listData[1]?.content === "Siang") ||
          (listData[0]?.type === "Masuk" && listData[0]?.content === "Siang")
        ) {
          setIsChecked(true);
        } else if (listData[0]?.type === "Libur") {
          setIsChecked(false);
        } else {
          setIsChecked(false);
        }
      };
      CheckType();
    }, []);

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

    useEffect(() => {
      const CheckType = () => {
        if (listData === null) {
          setIsChecked(false);
        } else if (
          (listData[1]?.type === "Masuk" && listData[1]?.content === "Malam") ||
          (listData[2]?.type === "Masuk" && listData[2]?.content === "Malam")
        ) {
          setIsChecked(true);
        } else if (listData[0]?.type === "Libur") {
          setIsChecked(false);
        } else {
          setIsChecked(false);
        }
      };

      CheckType();
    }, []);

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

  return (
    <div id="drawer-content" className="flex flex-col gap-4 overflow-hidden">
      <Flex align="center" gap={5} className="text-green-500">
        <h5 className="text-base font-semibold">Jadwal Saya</h5>
        <Tooltip placement="right" title={text} color="white" arrow={true}>
          <span>
            <FiInfo className="text-xl" />
          </span>
        </Tooltip>
      </Flex>
      <Morning />
      <Noon />
      <Night />

      <Flex id="jadwal-janji-temu">
        <h5 className="text-base font-semibold text-green-500">
          Jadwal Janji Temu
        </h5>
      </Flex>
      <div id="list-janji-temu" className="w-full">
        <ListAppointment data={listData} />
      </div>

      <Flex justify="center" className="mt-5">
        <ButtonSubmit date={selectedDate} openHandler={handleOpenModal} />
      </Flex>
      {isShow && (
        <ModalConfirmSchedule
          handleOpenDrawer={handleOpenDrawer}
          closeModal={handleOpenModal}
          textDate={textDate}
          textSession="Malam"
        />
      )}
    </div>
  );
};
