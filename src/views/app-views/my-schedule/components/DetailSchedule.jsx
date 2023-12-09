import { useEffect, useState } from "react";
import { Button, Drawer, Flex, Switch, Tooltip } from "antd";
import { months } from "@/utils/GenerateDate";
import { FiInfo } from "react-icons/fi";
import { Controller, useForm } from "react-hook-form";
import { formatStrDayJs } from "@/utils/MapListData";
import { getListDataByDate } from "@/utils/GetListData";
import { NewResponse } from "@/views/app-views/my-schedule/constant/my-schedule/NewResponse";

import { ModalConfirmSchedule } from "@/components/shared-components/ModalConfirmSchedule";
import { selectDoctorSchedule } from "@/store/get-doctor-schedule-slice";
import ListAppointment from "./ListAppointment";
import ButtonSubmit from "./ButtonSubmit";
import { useSelector } from "react-redux";

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
  const scheduleState = useSelector(selectDoctorSchedule);
  const strDate = formatStrDayJs(selectedDate);

  const { handleSubmit, control, setValue } = useForm();

  const listData = getListDataByDate(scheduleState?.data, strDate);

  const handleOpenModal = () => {
    setIsShow((prev) => !prev);
    handleOpenDrawer();
  };

  const payload = {
    date: formatStrDayJs(selectedDate),
    listData: [],
  };
  const onSubmit = (data) => {
    Object.keys(data).forEach((session) => {
      const sessionType = session.split("-")[1];
      const newObject = {
        doctor_available: data[session],
        session: sessionType,
      };
      payload.listData.push(newObject);
      handleOpenModal();
    });

    console.log(payload);
  };

  const textDate = (
    <span>
      {selectedDate.date()} {months[selectedDate.month()]} {selectedDate.year()}
    </span>
  );

  const Morning = () => {
    useEffect(() => {
      const CheckType = () => {
        if (listData === null) {
          setValue("session-pagi", false);
        } else if (
          listData[0]?.doctor_available &&
          listData[0]?.session === "pagi"
        ) {
          setValue("session-pagi", true);
        } else if (listData[0]?.session === "Libur") {
          setValue("session-pagi", false);
        } else {
          setValue("session-pagi", false);
        }
      };

      CheckType();
    }, []);

    return (
      <>
        <Flex justify="space-between" align="center">
          <div>
            <h6 className="text-base font-semibold">Pagi</h6>
            <p>08.00 - 11.00</p>
          </div>
          <Controller
            name="session-pagi"
            control={control}
            render={({ field: { value, onChange } }) => (
              <Switch
                id="switch-pagi"
                checked={value}
                onChange={onChange}
                className={`${value ? "bg-green-500" : "bg-grey-300"}`}
              />
            )}
          />
        </Flex>
      </>
    );
  };

  const Noon = () => {
    useEffect(() => {
      const CheckType = () => {
        if (listData === null) {
          setValue("session-siang", false);
        } else if (
          (listData[1]?.doctor_available && listData[1]?.session === "siang") ||
          (listData[0]?.doctor_available && listData[0]?.session === "siang")
        ) {
          setValue("session-siang", true);
        } else if (listData[0]?.session === "Libur") {
          setValue("session-siang", false);
        } else {
          setValue("session-siang", false);
        }
      };
      CheckType();
    }, []);

    return (
      <Flex justify="space-between" align="center">
        <div>
          <h6 className="text-base font-semibold">Siang</h6>
          <p>13.00 - 15.30</p>
        </div>
        <Controller
          name="session-siang"
          control={control}
          render={({ field: { value, onChange } }) => (
            <Switch
              id="switch-siang"
              checked={value}
              onChange={onChange}
              className={`${value ? "bg-green-500" : "bg-grey-300"}`}
            />
          )}
        />
      </Flex>
    );
  };

  const Night = () => {
    useEffect(() => {
      const CheckType = () => {
        if (listData === null) {
          setValue("session-malam", false);
        } else if (
          (listData[1]?.doctor_available && listData[1]?.session === "malam") ||
          (listData[2]?.doctor_available && listData[2]?.session === "malam")
        ) {
          setValue("session-malam", true);
        } else if (listData[0]?.session === "Libur") {
          setValue("session-malam", false);
        } else {
          setValue("session-malam", false);
        }
      };

      CheckType();
    }, []);

    return (
      <Flex justify="space-between" align="center">
        <div>
          <h6 className="text-base font-semibold">Malam</h6>
          <p>18.30 - 20.30</p>
        </div>
        <Controller
          name="session-malam"
          control={control}
          render={({ field: { value, onChange } }) => (
            <Switch
              id="switch-malam"
              checked={value}
              onChange={onChange}
              className={`${value ? "bg-green-500" : "bg-grey-300"}`}
            />
          )}
        />
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
      <form onSubmit={handleSubmit(onSubmit)}>
        <Morning />
        <Noon />
        <Night />

        <Flex id="jadwal-janji-temu">
          <h5 className="mt-5 text-base font-semibold text-green-500">
            Jadwal Janji Temu
          </h5>
        </Flex>
        <div id="list-janji-temu" className="mt-5 w-full">
          <ListAppointment data={listData} />
        </div>

        <Flex justify="center" className="mt-5">
          <ButtonSubmit
            htmlType="submit"
            date={selectedDate}
            // openHandler={handleOpenModal}
          />
        </Flex>
      </form>
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
