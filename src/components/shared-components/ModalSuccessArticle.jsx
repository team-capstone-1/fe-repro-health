import { Link } from "react-router-dom";
import { Modal, Button } from "antd";
import { PiSealCheck } from "react-icons/pi";
import { useState } from "react";

const ModalSuccessArticle = ({ closeModal }) => {
  const [isOpen, setIsOpen] = useState(true);
  const handleCancel = () => {
    setIsOpen(false);
    closeModal();
  };

  return (
    <Modal
      centered
      open={isOpen}
      onCancel={handleCancel}
      footer={
        <div id="modal-article-footer" className="flex justify-center">
          <Button
            id="button-article-confirm"
            key="ok"
            className="mb-2 mt-4 h-10 rounded-lg bg-green-500 text-sm text-white sm:px-7 sm:text-base sm:font-medium"
            style={{
              border: "transparent",
            }}
          >
            <Link to="/artikel">Kembali ke Halaman Utama</Link>
          </Button>
        </div>
      }
    >
      <div
        id="success-modal-text"
        className="flex flex-col items-center pt-5 text-center"
      >
        <PiSealCheck className="h-16 w-16 text-green-500 sm:h-20 sm:w-20" />
        <p
          id="success-modal-text"
          className="mt-2 text-base font-semibold leading-relaxed text-grey-400 sm:text-xl md:px-3"
        >
          Artikel telah berhasil di unggah!
        </p>
      </div>
    </Modal>
  );
};

export default ModalSuccessArticle;
