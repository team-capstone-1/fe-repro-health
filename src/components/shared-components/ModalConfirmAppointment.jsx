import { useState } from "react";
import { Button, Modal } from "antd";
import { PiSealCheck } from "react-icons/pi";

import { showErrorToast, showSuccessToast } from "./Toast";
import { APIAppointment } from "@/apis/APIAppointment";
import { useDispatch } from "react-redux";
import { toggleFetchLatestData } from "@/store/toggle-fetch-new-data";

const ModalConfirmAppointment = ({
  closeModal,
  textContent,
  textTitle,
  dataPasien,
}) => {
  const [isOpen, setIsOpen] = useState(true);
  const dispatch = useDispatch();
  const handleOk = async () => {
    if (textTitle === "Terima Janji Temu") {
      try {
        await APIAppointment.confirmConsultation(dataPasien.id).then(() => {
          setIsOpen(false);
          closeModal();
          showSuccessToast(
            "Janji temu telah dikonfirmasi !",
            "top-right",
            "medium",
          );
          dispatch(toggleFetchLatestData());
        });
      } catch (err) {
        console.error(err);
        showErrorToast(
          "Janji temu gagal dikonfirmasi !",
          "top-right",
          "medium",
        );
      }
    }
    if (textTitle === "Selesaikan Janji Temu") {
      try {
        await APIAppointment.finishConsultation(dataPasien.id).then(() => {
          setIsOpen(false);
          closeModal();
          showSuccessToast("Janji temu selesai !", "top-right", "medium");
          dispatch(toggleFetchLatestData());
        });
      } catch (err) {
        console.error(err);
        showErrorToast("Janji temu gagal selesaikan !", "top-right", "medium");
      }
    }
  };
  const handleCancel = () => {
    setIsOpen(false);
    closeModal();
  };
  return (
    <>
      <Modal
        open={isOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={
          <div id="modal-logout-footer" className="flex justify-center">
            <Button
              id="button-logout-confirm"
              key="ok"
              className="mb-2 mt-4 h-10 rounded-lg bg-green-500 text-sm text-white sm:px-7 sm:text-base sm:font-medium"
              style={{
                border: "transparent",
              }}
              onClick={handleOk}
            >
              Ya, Saya Yakin
            </Button>
            <Button
              id="button-logout-cancel"
              key="cancel"
              className="ml-4 mt-4 h-10 rounded-lg border-green-500 text-sm text-green-500 sm:px-7 sm:text-base sm:font-medium"
              onClick={handleCancel}
            >
              Tidak, batalkan
            </Button>
          </div>
        }
      >
        <div
          id="logout-modal-text"
          className="flex flex-col items-center pt-5 text-center"
        >
          <PiSealCheck className="h-16 w-16 text-green-500 sm:h-20 sm:w-20" />

          <p id="doctor-name" className="mt-2 text-xl font-semibold">
            {textTitle}
          </p>
          <p
            id="logout-modal-text"
            className="mt-2 text-sm font-medium leading-relaxed text-grey-400 sm:text-base md:px-3"
          >
            Anda akan {textContent} Janji Temu milik {dataPasien?.patient_name}.
            Konfirmasi pengubahan?
          </p>
        </div>
      </Modal>
    </>
  );
};
export default ModalConfirmAppointment;
