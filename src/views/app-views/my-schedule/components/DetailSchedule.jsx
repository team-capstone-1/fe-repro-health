import dayjs from "dayjs";
import "dayjs/locale/id";

dayjs.locale("id");

import * as yup from "yup";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { yupResolver } from "@hookform/resolvers/yup";
import { Drawer, Flex, Switch, Tooltip } from "antd";
import { FiInfo } from "react-icons/fi";
import { Controller, useForm } from "react-hook-form";

import { formatStrDayJs } from "@/utils/MapListData";
import { getListDataByDate } from "@/utils/GetListData";
import { months } from "@/utils/GenerateDate";
import { ModalConfirmSchedule } from "@/components/shared-components/ModalConfirmSchedule";
import { selectDoctorSchedule } from "@/store/get-doctor-schedule-slice";
import ListAppointment from "./ListAppointment";
import ButtonSubmit from "./ButtonSubmit";

const text = (
  <span className="text-black">
    Anda hanya dapat mengubah jadwal dari hari yang akan datang
  </span>
);

const initialValueSchema = yup.object().shape({
  form: yup.boolean(),
  "session-pagi": yup.boolean(),
  "session-siang": yup.boolean(),
  "session-malam": yup.boolean(),
});

const dataChangedSchema = yup.object().shape({
  form: yup.boolean(),
  "session-pagi": yup.boolean(),
  "session-siang": yup.boolean(),
  "session-malam": yup.boolean(),
});

function countChangedValues(initial, changed) {
  try {
    initialValueSchema.validateSync(initial, { abortEarly: false });
    dataChangedSchema.validateSync(changed, { abortEarly: false });
  } catch (error) {
    throw new Error(`Data tidak valid! ${error.errors.join(", ")}`);
  }

  let count = 0;
  for (const key in changed) {
    if (changed.hasOwnProperty(key) && initial.hasOwnProperty(key)) {
      if (changed[key] !== initial[key]) {
        count++;
      }
    }
  }
  return count;
}

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
  const [payload, setPayload] = useState(null);

  const scheduleState = useSelector(selectDoctorSchedule);
  const strDate = formatStrDayJs(selectedDate);
  const initialValue = {
    form: false,
    "session-pagi": false,
    "session-siang": false,
    "session-malam": false,
  };

  const {
    handleSubmit,
    control,
    setValue,
    setError,
    clearErrors,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(initialValueSchema),
  });

  const listData = getListDataByDate(scheduleState?.data, strDate);

  const handleOpenModal = () => {
    setIsShow((prev) => !prev);
    handleOpenDrawer();
  };

  const onSubmit = (data) => {
    let changedValue;
    let payload = {
      date: dayjs(selectedDate, "YYYY-MM-DD").format("YYYY-MM-DD"),
      session: "",
    };
    try {
      dataChangedSchema.validateSync(data);

      const changedCount = countChangedValues(data, initialValue);

      if (changedCount > 1) {
        setError("form", {
          type: "manual",
          message: "Anda hanya dapat mengubah 1 session.",
        });
      } else {
        Object.keys(data).forEach((session) => {
          const sessionType = session.split("-")[1];
          if (data[session] !== initialValue[session]) {
            const newObject = {
              doctor_available: data[session],
              session: sessionType,
            };
            changedValue = newObject;
          }
        });
        payload = {
          ...payload,
          session: changedValue?.session,
          doctor_available: changedValue?.doctor_available,
        };
        if (changedValue) {
          handleOpenModal();
          setPayload(payload);
        }
        setError("form", {
          type: "manual",
          message: "Anda tidak mengubah jadwal pada sesi manapun.",
        });
      }
    } catch (error) {
      setError("form", {
        type: "manual",
        message: error.errors?.join(", "),
      });
    }
  };

  useEffect(() => {
    clearErrors("form");
  }, [handleOpenDrawer]);

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
          initialValue["session-pagi"] = false;
        } else if (
          listData[0]?.doctor_available &&
          listData[0]?.session === "pagi"
        ) {
          setValue("session-pagi", true);
          initialValue["session-pagi"] = true;
        } else if (listData[0]?.session === "Libur") {
          setValue("session-pagi", false);
          initialValue["session-pagi"] = false;
        } else {
          setValue("session-pagi", false);
          initialValue["session-pagi"] = false;
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
          initialValue["session-siang"] = false;
        } else if (
          (listData[1]?.doctor_available && listData[1]?.session === "siang") ||
          (listData[0]?.doctor_available && listData[0]?.session === "siang")
        ) {
          setValue("session-siang", true);
          initialValue["session-siang"] = true;
        } else if (listData[0]?.session === "Libur") {
          setValue("session-siang", false);
          initialValue["session-siang"] = false;
        } else {
          setValue("session-siang", false);
          initialValue["session-siang"] = false;
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
          initialValue["session-malam"] = false;
        } else if (
          (listData[1]?.doctor_available && listData[1]?.session === "malam") ||
          (listData[2]?.doctor_available && listData[2]?.session === "malam")
        ) {
          setValue("session-malam", true);
          initialValue["session-malam"] = true;
        } else if (listData[0]?.session === "Libur") {
          setValue("session-malam", false);
          initialValue["session-malam"] = false;
        } else {
          setValue("session-malam", false);
          initialValue["session-malam"] = false;
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
        <div>
          {errors?.["form"] && (
            <p className="text-negative">{errors?.["form"]?.message}</p>
          )}
        </div>
        <Flex id="jadwal-janji-temu">
          <h5 className="mt-5 text-base font-semibold text-green-500">
            Jadwal Janji Temu
          </h5>
        </Flex>
        <div id="list-janji-temu" className="mt-5 w-full">
          <ListAppointment data={listData} />
        </div>

        <Flex justify="center" className="mt-5">
          <ButtonSubmit htmlType="submit" date={selectedDate} />
        </Flex>
      </form>
      {isShow && (
        <ModalConfirmSchedule
          payload={payload}
          handleOpenDrawer={handleOpenDrawer}
          closeModal={handleOpenModal}
          textDate={textDate}
          textSession="Malam"
        />
      )}
    </div>
  );
};
