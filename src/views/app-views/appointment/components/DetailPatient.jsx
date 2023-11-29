import { useState } from "react";
import { Button, Card, Drawer, Flex } from "antd";
import { DataPasien } from "@/views/app-views/appointment/constant/detail-pasien";
import ModalConfirmAppointment from "@/components/shared-components/ModalConfirmAppointment";
import ModalPaymentAppointment from "@/components/shared-components/ModalPaymentAppointment";

import { ToastContainer } from "react-toastify";

export default function DetailPatient({ handleOpen, isOpen }) {
  return (
    <>
      <Drawer
        width={500}
        title={<HeaderDrawer />}
        placement="right"
        onClose={handleOpen}
        open={isOpen}
      >
        <ContentDrawer />
        <ToastContainer className=" mt-16 w-full sm:mt-10 sm:w-[480px]" />
      </Drawer>
    </>
  );
}

const HeaderDrawer = () => {
  return (
    <div className="ps-5">
      <h5 className="text-xl font-medium">Detail Pasien</h5>
    </div>
  );
};

const ContentDrawer = () => {
  return (
    <>
      <CardDetailPatient />
      <CardDetailAppointment />
    </>
  );
};

const CardDetailPatient = () => (
  <Card id="card-pasien-detail" className="mt-0">
    <Flex justify="center">
      <img
        src={DataPasien.image}
        alt="pasien"
        className="h-[6.25rem] w-[6.25rem] rounded-full border bg-white"
      />
    </Flex>
    <Flex justify="center" className="mt-2">
      <h5 className="font-medium">{DataPasien.name}</h5>
    </Flex>
    {DataPasien.detail.map((item, i) => (
      <Flex justify="space-between" className="mt-2" key={i}>
        <p className="text-xs font-normal sm:text-sm">{Object.keys(item)}</p>
        <p className="text-xs font-medium sm:text-sm">{Object.values(item)}</p>
      </Flex>
    ))}
  </Card>
);

const CardDetailAppointment = () => {
  const [isShow, setIsShow] = useState(false);
  const [isShowPayment, setIsShowPayment] = useState(false);

  const handleOpenModal = () => {
    setIsShow((prev) => !prev);
  };
  const handleOpenModalPayment = () => {
    setIsShowPayment((prev) => !prev);
  };
  return (
    <>
      <Card id="card-informasi-janji-temu" className="mt-4">
        <Flex>
          <h5 className="font-medium">{DataPasien.appointment}</h5>
        </Flex>
        {DataPasien.appointmentDetail.map((item, i) => (
          <Flex justify="space-between" className="mt-2" key={i}>
            {item["Metode Pembayaran"] ? (
              <>
                <p className="text-xs font-normal sm:text-sm">
                  {Object.keys(item)}
                </p>
                <p className="flex flex-col items-end text-xs font-medium sm:text-sm">
                  {Object.values(item)}
                  <span
                    onClick={handleOpenModalPayment}
                    className="cursor-pointer text-xs text-positive"
                  >
                    Lihat Bukti Transfer
                  </span>
                </p>
                {isShowPayment && (
                  <ModalPaymentAppointment
                    closeModal={handleOpenModalPayment}
                  />
                )}
              </>
            ) : (
              <>
                <p className="text-xs font-normal sm:text-sm">
                  {Object.keys(item)}
                </p>
                <p className="text-xs font-medium sm:text-sm">
                  {Object.values(item)}
                </p>
              </>
            )}
          </Flex>
        ))}
        {DataPasien.status === "Menunggu" && (
          <>
            <Flex justify="space-between" className="mt-2">
              <p className="text-xs font-normal sm:text-sm">Status</p>
              <p className="cursor-default rounded-lg bg-warning-25 px-6 py-2 text-xs font-medium text-warning">
                {DataPasien.status}
              </p>
            </Flex>
            <Flex justify="center" className="mt-5">
              <Button
                type="primary"
                className="bg-green-500 px-10 pb-8 pt-2 hover:bg-green-600 disabled:bg-grey-100 disabled:text-grey-200"
                onClick={handleOpenModal}
              >
                Konfirmasi Sekarang
              </Button>
            </Flex>
            {isShow && (
              <ModalConfirmAppointment
                closeModal={handleOpenModal}
                textTitle="Terima Janji Temu"
                textContent="menerima"
              />
            )}
          </>
        )}
        {DataPasien.status === "Berjalan" && (
          <>
            <Flex justify="space-between" className="mt-2">
              <p className="text-xs font-normal sm:text-sm">Status</p>
              <p className="cursor-default rounded-lg bg-link-25 px-6 py-2 text-xs font-medium text-link">
                {DataPasien.status}
              </p>
            </Flex>
            <Flex justify="center" className="mt-5">
              <Button
                type="primary"
                className="bg-green-500 px-10 pb-8 pt-2 hover:bg-green-600 disabled:bg-grey-100 disabled:text-grey-200"
                onClick={handleOpenModal}
              >
                Selesaikan Sekarang
              </Button>
            </Flex>
            {isShow && (
              <ModalConfirmAppointment
                closeModal={handleOpenModal}
                textTitle="Selesaikan Janji Temu"
                textContent="menyelesaikan"
              />
            )}
          </>
        )}
        {DataPasien.status === "Dibatalkan" && (
          <>
            <Flex justify="space-between" className="mt-2">
              <p className="text-xs font-normal sm:text-sm">Status</p>
              <p className="cursor-default rounded-lg bg-negative-25 px-6 py-2 text-xs font-medium text-negative">
                {DataPasien.status}
              </p>
            </Flex>
            <Flex justify="center" className="mt-5">
              <Button
                type="primary"
                className="bg-green-500 px-10 pb-8 pt-2 hover:bg-green-600 disabled:bg-grey-100 disabled:text-grey-200"
                disabled
              >
                Selesaikan Sekarang
              </Button>
            </Flex>
          </>
        )}
        {DataPasien.status === "Selesai" && (
          <>
            <Flex justify="space-between" className="mt-2">
              <p className="text-xs font-normal sm:text-sm">Status</p>
              <p className="cursor-default rounded-lg bg-positive-25 px-6 py-2 text-xs font-medium text-positive">
                {DataPasien.status}
              </p>
            </Flex>
            <Flex justify="center" className="mt-5">
              <Button
                type="primary"
                className="bg-green-500 px-10 pb-8 pt-2 hover:bg-green-600 disabled:bg-grey-100 disabled:text-grey-200"
                disabled
              >
                Selesaikan Sekarang
              </Button>
            </Flex>
          </>
        )}
      </Card>
    </>
  );
};
