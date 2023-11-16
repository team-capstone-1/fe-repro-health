import React, { useState } from "react";
import { Modal, Button } from "antd";
import logoutModalIcon from "@/assets/logout-modal-icon.svg";

export default function Logout({ closeModal }) {
  const [isModalOpen, setIsModalOpen] = useState(true);

  const handleOk = () => {
    setIsModalOpen(false);
    closeModal();
  };

  const handleCancel = () => {
    setIsModalOpen(false);
    closeModal();
  };

  return (
    <Modal
      open={isModalOpen}
      onOk={handleOk}
      onCancel={handleCancel}
      width={450}
      centered
      footer={
        <div className="flex justify-center">
          <Button
            key="ok"
            className="mb-2 mt-4 h-10 rounded-lg bg-negative px-7 font-semibold text-white"
            style={{
              border: "transparent",
            }}
            onClick={handleOk}
          >
            Ya, keluar
          </Button>
          <Button
            key="cancel"
            className="ml-4 mt-4 h-10 rounded-lg border-negative px-7 font-semibold text-negative"
            onClick={handleCancel}
          >
            Tidak, batalkan
          </Button>
        </div>
      }
    >

      <div className="flex flex-col items-center text-center">
        <img
          src={logoutModalIcon}
          alt="logout-modal-icon"
          className="my-4 h-10 w-10"
        />
        <p className="mt-2 text-xl font-semibold">Halo, Dr Andi!</p>
        <p className="mt-2 text-base font-medium leading-relaxed text-grey-400 md:px-3">
          Apakah anda yakin ingin keluar dari website?
        </p>
      </div>
    </Modal>
  );
}
