import { Button, Modal } from "antd";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { IoIosWarning } from "react-icons/io";

import { showErrorToast, showSuccessToast } from "./Toast";
import { APISchedule } from "@/apis/APISchedule";
import { toggleFetchLatestData } from "@/store/toggle-fetch-new-data";

export function ModalConfirmSchedule({
  payload,
  handleOpenDrawer,
  closeModal,
  textDate,
}) {
  const [isModalOpen, setIsModalOpen] = useState(true);
  const dispatch = useDispatch();
  const handleOk = async () => {
    if (payload.doctor_available) {
      try {
        await APISchedule.updateActiveSchedule(payload);
        showSuccessToast("Jadwal berhasil diubah !", "top-center", "large");
      } catch (error) {
        console.error(error);
        showErrorToast("Jadwal gagal diubah !", "top-center", "large");
      } finally {
        setIsModalOpen(false);
        closeModal();
        handleOpenDrawer();
        dispatch(toggleFetchLatestData());
      }
    } else {
      try {
        await APISchedule.updateInactiveSchedule(payload);
        showSuccessToast("Jadwal berhasil diubah !", "top-center", "large");
      } catch (error) {
        console.error(error);
        showErrorToast("Jadwal gagal diubah !", "top-center", "large");
      } finally {
        setIsModalOpen(false);
        closeModal();
        handleOpenDrawer();
        dispatch(toggleFetchLatestData());
      }
    }
  };

  const handleCancel = () => {
    setIsModalOpen(false);
    closeModal();
    handleOpenDrawer();
  };

  const status = payload.doctor_available ? "mengaktifkan" : "menonaktifkan";
  return (
    <>
      <Modal
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={
          <section id="footer-confirm-schedule" className="flex justify-center">
            <Button
              id="button-confirm-schedule"
              key="ok"
              onClick={handleOk}
              className="mb-2 mt-5 h-10 rounded-lg bg-[#FEA53F] text-sm text-white sm:px-7 sm:text-base sm:font-medium"
              style={{
                border: "transparent",
              }}
            >
              Ya, Saya yakin
            </Button>
            <Button
              id="button-cancel-schedule"
              key="cancel"
              onClick={handleCancel}
              className="ms-4 mt-5 h-10 rounded-lg border-[#FEA53F] text-sm text-[#FEA53F] sm:px-7 sm:text-base sm:font-medium"
            >
              Tidak, Batalkan
            </Button>
          </section>
        }
      >
        <section
          id="modal-confirm-schedule"
          className="flex flex-col items-center pt-7 text-center"
        >
          <IoIosWarning className="h-16 w-16 text-[#FEA53F] sm:h-20 sm:w-20" />
          <p className="mt-5 text-[14px] font-normal text-grey-400 sm:text-sm md:px-3">
            Anda akan <strong>{status}</strong> sesi{" "}
            <strong>{payload?.session}</strong> pada tanggal{" "}
            <strong>{textDate}</strong>. Yakin untuk mengonfirmasi pengubahan
            ini?
          </p>
        </section>
      </Modal>
    </>
  );
}
