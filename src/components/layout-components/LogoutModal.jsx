import React, { useState } from "react";
import logoutIcon from "@/assets/logout-modal-icon.svg";

export default function Logout({ closeModal }) {
  const [showModal, setShowModal] = useState(true);

  return (
    <>
      {showModal && (
        <>
          <div className="fixed inset-0 z-[100] flex items-center justify-center overflow-y-auto overflow-x-hidden outline-none focus:outline-none">
            {/*content*/}
            <div className="relative mx-[10vw] flex w-auto flex-col rounded-lg bg-white shadow-lg outline-none focus:outline-none md:mx-auto">
              {/*header*/}
              <div className="my-5 flex h-36 self-center p-5">
                <img src={logoutIcon} alt="logout-modal-icon" />
                <button
                  className="float-right ml-auto border-0 bg-transparent p-1 text-3xl font-semibold leading-none text-black opacity-5 outline-none focus:outline-none"
                  onClick={() => {
                    setShowModal(false);
                    closeModal();
                  }}
                ></button>
              </div>

              {/*message*/}
              <div className="relative w-[80%] flex-auto justify-center self-center text-center md:w-[30vw]">
                <p className="text-3xl font-semibold">Halo, Dr Andi!</p>
                <p className="text-xl font-medium leading-relaxed md:px-5">
                  Apakah anda yakin ingin keluar dari website?
                </p>
              </div>

              {/*buttons*/}
              <div className="my-6 flex items-center justify-center space-x-4 p-6">
                <button
                  className="h-10 rounded-lg border-2 border-grey-200 px-7 text-grey-200 hover:bg-grey-200 hover:text-white md:ms-0"
                  type="button"
                  onClick={() => {
                    setShowModal(false);
                    closeModal();
                  }}
                >
                  Tidak
                </button>
                <button
                  className="h-10 rounded-lg bg-negative px-7 text-white hover:bg-negative-25 md:ms-0"
                  type="button"
                  onClick={() => {
                    setShowModal(false);
                    closeModal(); // Close the modal when the button is clicked
                  }}
                >
                  Ya
                </button>
              </div>
            </div>
          </div>
          <div className="fixed inset-0 z-50 bg-grey-900 bg-opacity-70"></div>
        </>
      )}
    </>
  );
}
