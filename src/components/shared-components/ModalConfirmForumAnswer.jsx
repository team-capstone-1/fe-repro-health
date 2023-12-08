import { useState } from "react";
import { Button, Modal } from "antd";
import { PiSealCheck } from "react-icons/pi";
import { APIForum } from "@/apis/APIForum";
import { showSuccessToast, showErrorToast } from "./Toast";

const ModalConfirmForumAnswer = ({
  closeModal,
  authorName,
  payload,
  setIsAnswered,
}) => {
  const [isOpen, setIsOpen] = useState(true);

  const handleOk = () => {
    setIsOpen(false);
    const postData = async () => {
      try {
        await APIForum.addForumReply(payload);
        showSuccessToast("Jawaban anda telah dikirim !", "top-center", "large");
      } catch (error) {
        showErrorToast("Gagal mengirim jawaban !", "top-center", "large");
        console.error(error);
      } finally {
        closeModal();
        setIsAnswered(true);
      }
    };
    postData();
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
            Kirim Jawaban
          </p>
          <p
            id="logout-modal-text"
            className="mt-2 text-sm font-medium leading-relaxed text-grey-400 sm:text-base md:px-3"
          >
            Anda akan mengirim jawaban untuk pertanyaan dari
            <span className="font-semibold"> {authorName}</span>. Jawaban yang
            dikirim tidak dapat diedit. Konfirmasi pengiriman?
          </p>
        </div>
      </Modal>
    </>
  );
};
export default ModalConfirmForumAnswer;
