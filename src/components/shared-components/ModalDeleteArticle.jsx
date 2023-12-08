import { Link } from "react-router-dom";
import { Modal, Button } from "antd";
import { useState } from "react";
import { FaTrashAlt } from "react-icons/fa";

const ModalDeleteArticle = ({ closeModal }) => {
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
                        className="mb-2 mt-4 h-10 rounded-lg bg-red-500 text-sm text-white sm:px-7 sm:text-base sm:font-medium"
                        style={{
                            border: "transparent",
                        }}
                    >
                        <Link to="/artikel-saya">Ya, hapus</Link>
                    </Button>
                    <Button
                        id="button-article-cancel"
                        key="cancel"
                        className="ml-4 mt-4 h-10 rounded-lg border-red-500 text-red-500 text-sm sm:px-7 sm:text-base sm:font-medium"
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
                <FaTrashAlt className="h-8 w-8 text-red-500 sm:h-8 sm:w-8 my-4" />
                <h5 className="font-bold">Menghapus artikel</h5>
                <p
                    id="logout-modal-text"
                    className="mt-2 text-sm leading-relaxed text-grey-400 sm:text-base md:px-3"
                >
                    Artikel ini akan dihapus secara permanen. Apakah anda yakin akan menghapusnya?
                </p>
            </div>
        </Modal>
    );
};

export default ModalDeleteArticle;
