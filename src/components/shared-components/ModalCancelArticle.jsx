import { Link } from "react-router-dom";
import { Modal, Button } from "antd";
import { IoIosWarning } from "react-icons/io";
import { useState } from "react";

const ModalCancelArticle = ({ closeModal }) => {
  const [isOpen, setIsOpen] = useState(true);
  const handleCancel = () => {
    setIsOpen(false);
    closeModal();
  };

  return (
    <Modal
      open={isOpen}
      onCancel={handleCancel}
      footer={
        <div id="modal-article-footer" className="flex justify-center">
        
          <Button
            id="button-article-confirm"
            key="ok"
            className="mb-2 mt-4 h-10 rounded-lg bg-warning text-sm text-white sm:px-7 sm:text-base sm:font-medium"
            style={{
              border: "transparent",
            }}
          >
            <Link to="/artikel">Ya, Saya Yakin</Link>
          </Button>
          <Button
            id="button-article-cancel"
            key="cancel"
            className="ml-4 mt-4 h-10 rounded-lg border-warning text-sm text-warning sm:px-7 sm:text-base sm:font-medium"
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
        <IoIosWarning className="h-16 w-16 text-warning sm:h-20 sm:w-20" />
        <p
          id="logout-modal-text"
          className="mt-2 text-sm leading-relaxed text-grey-400 sm:text-base md:px-3"
        >
          Jika anda membatalkan, maka form yang telah diisi tidak akan
          tersimpan, Yakin untuk membatalkan?
        </p>
      </div>
    </Modal>
  );
};

export default ModalCancelArticle;
