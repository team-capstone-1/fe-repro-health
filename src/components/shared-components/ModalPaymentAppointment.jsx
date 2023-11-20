import { Modal, Divider, Flex } from "antd";
import { useState } from "react";
import { IoMdCheckmark } from "react-icons/io";
import { DataPasien } from "@/views/app-views/appointment/constant/detail-pasien";;

const ModalPaymentAppointment = ({ closeModal }) => {
  const [isOpen, setIsOpen] = useState(true);

  const handleCancel = () => {
    setIsOpen(false);
    closeModal();
  };
  return (
    <Modal
      className="px-4 md:px-8 lg:px-10"
      open={isOpen}
      onCancel={handleCancel}
      footer={
        <div id="payment-modal" className="my-4 flex flex-col">
          <div className="flex flex-col justify-center gap-6">
            <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-green-100">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-green-500">
                <IoMdCheckmark className="h-6 w-6 text-grey-50" />
              </div>
            </div>

            <div className="text-center">
              <p className="text-xl text-grey-900">Pembayaran Diterima!</p>
              <p className="mt-1 text-2xl font-bold text-grey-900">
                Rp 123.456
              </p>
            </div>
          </div>

          <Divider className="m-0 mt-6 border border-dashed border-black/20" />

          <div className="mt-4">
            <h5 className="text-left text-base font-semibold">
              Detail Transaksi
            </h5>
            <div className="mt-2 flex flex-col gap-2">
              {DataPasien.paymentDetail.map((items, i) => (
                <Flex justify="space-between" align="center" key={i}>
                  {items["Total"] ? (
                    <>
                      <p className="text-base">{Object.keys(items)}</p>
                      <p className="text-xl font-bold text-green-500">
                        {Object.values(items)}
                      </p>
                    </>
                  ) : (
                    <>
                      <p className="text-left text-base">{Object.keys(items)}</p>
                      <p className="text-base font-semibold">
                        {Object.values(items)}
                      </p>
                    </>
                  )}
                </Flex>
              ))}
            </div>
          </div>
        </div>
      }
    ></Modal>
  );
};

export default ModalPaymentAppointment;
