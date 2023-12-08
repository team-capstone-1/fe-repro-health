import { Link } from "react-router-dom";
import { Modal, Button } from "antd";
import { useState } from "react";
import { FaTrashAlt } from "react-icons/fa";
import { APIArticle } from "@/apis/APIArticle";
import { showErrorToast, showSuccessToast } from "./Toast";

const ModalDeleteArticle = ({ closeModal, detailArticles }) => {
  const [isOpen, setIsOpen] = useState(true);

  const handleOk = async () => {
    try {
      await APIArticle.deleteArticle(detailArticles.id).then(() => {
        setIsOpen(false);
        closeModal();
        showSuccessToast("Artikel berhasil dihapus", "top-center");
      });
    } catch (error) {
      console.error(error);
      showErrorToast("Artikel gagal dihapus", "top-center");
    }
  };

  const handleCancel = () => {
    setIsOpen(false);
    closeModal();
  };

  console.log("data modal", detailArticles.id);

  return (
    <Modal
      centered
      open={isOpen}
      onOk={handleOk}
      onCancel={handleCancel}
      footer={
        <div id="modal-article-footer" className="flex justify-center">
          <Button
            id="button-article-confirm"
            key="ok"
            className="mb-2 mt-4 h-10 rounded-lg bg-red-500 text-sm text-white sm:px-7 sm:text-base sm:font-medium"
            style={{
              border: "transparent",
            }}
            onClick={handleOk}
          >
            <Link to="/artikel-saya">Ya, hapus</Link>
          </Button>
          <Button
            id="button-article-cancel"
            key="cancel"
            className="ml-4 mt-4 h-10 rounded-lg border-red-500 text-sm text-red-500 sm:px-7 sm:text-base sm:font-medium"
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
        <FaTrashAlt className="my-4 h-8 w-8 text-red-500 sm:h-8 sm:w-8" />
        <h5 className="font-bold">Menghapus Artikel</h5>
        <p
          id="logout-modal-text"
          className="mt-2 text-sm leading-relaxed text-grey-400 sm:text-base md:px-3"
        >
          Artikel ini akan dihapus secara permanen. Apakah anda yakin akan
          menghapusnya?
        </p>
      </div>
    </Modal>
  );
};

export default ModalDeleteArticle;
