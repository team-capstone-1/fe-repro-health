import { Button, Modal, notification } from "antd";
import { useState } from "react";
import { IoIosWarning } from "react-icons/io";

export default function ModalConfirmSchedule({
  handleOpenDrawer,
  closeModal,
  textDate,
  textSession,
}) {
  const [isModalOpen, setIsModalOpen] = useState(true);

  const handleOk = () => {
    openNotification();
    setIsModalOpen(false);
    closeModal();
    handleOpenDrawer();
  };

  const handleCancel = () => {
    setIsModalOpen(false);
    closeModal();
    handleOpenDrawer();
  };
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
            Anda akan menonaktifkan sesi {textSession} pada {textDate}. Yakin
            untuk mengonfirmasi pengubahan ini?
          </p>
        </section>
      </Modal>
    </>
  );
}

const openNotification = () => {
  notification.open({
    message: (
      <p className="font-medium text-[#FBFBFB]">Jadwal berhasil diubah !</p>
    ),
  });

  notification.config({
    top: 75,
    placement: "topLeft",
    // closeIcon: <p className="bg-transparent text-[#93E5D5]">Abaikan</p>,
    closeIcon: false,
    duration: 3,
    className: "bg-green-500 h-[64px] flex w-screen",
    stack: true,
  });
};
