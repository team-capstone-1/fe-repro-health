import dayjs from "dayjs";
import "dayjs/locale/id";
import { useEffect, useState } from "react";
import { Button, Card, Drawer, Flex } from "antd";
import { ToastContainer } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";

import Utils from "@/utils";
import ModalConfirmAppointment from "@/components/shared-components/ModalConfirmAppointment";
import ModalPaymentAppointment from "@/components/shared-components/ModalPaymentAppointment";
import { APIAppointment } from "@/apis/APIAppointment";
import SkeletonDetailPatient from "./SkeletonDetailPatient";
import {
  selectToggleFetchLatestData,
  toggleFetchLatestData,
} from "@/store/toggle-fetch-new-data";

export default function DetailPatient({ idAppointment, handleOpen, isOpen }) {
  return (
    <>
      <Drawer
        width={500}
        title={<HeaderDrawer />}
        placement="right"
        onClose={handleOpen}
        open={isOpen}
      >
        <ContentDrawer idAppointment={idAppointment} />
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

const ContentDrawer = ({ idAppointment }) => {
  const [dataPasien, setDataPasien] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const { shouldFetchLatestData } = useSelector(selectToggleFetchLatestData);
  const dispatch = useDispatch();
  useEffect(() => {
    const fetchData = async (idAppointment) => {
      try {
        const result = await APIAppointment.getAppointmentById(idAppointment);
        setDataPasien(result);
        setIsLoading(false);
      } catch (err) {
        console.error(err);
        setIsError(err);
        setIsLoading(false);
      }
    };
    fetchData(idAppointment);
    if (shouldFetchLatestData) {
      fetchData(idAppointment);
      dispatch(toggleFetchLatestData());
    }
  }, [shouldFetchLatestData, dispatch]);

  return (
    <>
      {isError && (
        <Card className="flex flex-col text-center">
          <h5 className="text-xl font-semibold">Terjadi Kesalahan!</h5>
          <p>Silahkan kembali beberapa saat lagi</p>
          <p className="italic text-negative">{isError.message}</p>
        </Card>
      )}
      {isLoading ? (
        <SkeletonDetailPatient />
      ) : (
        <>
          <CardDetailPatient dataPasien={dataPasien} isError={isError} />
          <CardDetailAppointment dataPasien={dataPasien} isError={isError} />
        </>
      )}
    </>
  );
};

const CardDetailPatient = ({ dataPasien, isError }) => {
  const dateOfBirth = dayjs(dataPasien?.date_of_birth).format("DD MMMM YYYY");
  const gender = dataPasien?.gender === "male" ? "Laki-laki" : "Perempuan";
  return (
    <>
      <Card
        id="card-pasien-detail"
        className={`mt-0 ${isError ? "hidden" : "block"}`}
      >
        <Flex justify="center">
          <img
            src={dataPasien?.profile_image}
            alt="pasien"
            className="h-[6.25rem] w-[6.25rem] rounded-full border bg-white"
          />
        </Flex>
        <Flex justify="center" className="mt-2">
          <h5 className="font-semibold">{dataPasien?.patient_name}</h5>
        </Flex>
        <Flex justify="space-between" className="mt-2">
          <p className="text-xs font-normal sm:text-sm">ID Pasien</p>
          <p className="w-14 overflow-hidden text-ellipsis whitespace-nowrap text-xs  font-medium sm:text-sm">
            {dataPasien?.patient_id}
          </p>
        </Flex>
        <Flex justify="space-between" className="mt-2">
          <p className="text-xs font-normal sm:text-sm">Tanggal Lahir</p>
          <p className="text-xs  font-medium sm:text-sm">{dateOfBirth}</p>
        </Flex>
        <Flex justify="space-between" className="mt-2">
          <p className="text-xs font-normal sm:text-sm">Jenis Kelamin</p>
          <p className="text-xs  font-medium sm:text-sm">{gender}</p>
        </Flex>
        <Flex justify="space-between" className="mt-2">
          <p className="text-xs font-normal sm:text-sm">Tinggi Badan</p>
          <p className="text-xs  font-medium sm:text-sm">
            {dataPasien?.height} cm
          </p>
        </Flex>
        <Flex justify="space-between" className="mt-2">
          <p className="text-xs font-normal sm:text-sm">Berat Badan</p>
          <p className="text-xs  font-medium sm:text-sm">
            {dataPasien?.weight} kg
          </p>
        </Flex>
        <Flex justify="space-between" className="mt-2">
          <p className="text-xs font-normal sm:text-sm">Nomor Telepon</p>
          <p className="text-xs  font-medium sm:text-sm">
            {dataPasien?.telephone_number}
          </p>
        </Flex>
        <Flex justify="space-between" className="mt-2">
          <p className="text-xs font-normal sm:text-sm">Email</p>
          <p className="text-xs  font-medium sm:text-sm">{dataPasien?.email}</p>
        </Flex>
      </Card>
    </>
  );
};

const CardDetailAppointment = ({ dataPasien, isError }) => {
  const [isShow, setIsShow] = useState(false);
  const [isShowPayment, setIsShowPayment] = useState(false);

  const handleOpenModal = () => {
    setIsShow((prev) => !prev);
  };
  const handleOpenModalPayment = () => {
    setIsShowPayment((prev) => !prev);
  };

  const date = dayjs(dataPasien?.date).format("DD MMMM YYYY");
  const session = (val) => {
    if (val === "pagi") {
      return "Pagi, 08.00 - 11.00";
    }
    if (val === "siang") {
      return "Siang, 13.00 - 15.30";
    }
    if (val === "malam") {
      return "Malam, 13.30 - 20.30";
    }
  };

  const paymentMethod = (val) => {
    if (val === "clinic_payment") {
      return "Pembayaran Klinik";
    }
    if (val === "manual_transfer") {
      return "Transfer Manual";
    }
  };

  return (
    <>
      <Card
        id="card-informasi-janji-temu"
        className={`mt-4 ${isError ? "hidden" : "block"}`}
      >
        <Flex>
          <h5 className="font-semibold">Informasi Janji Temu</h5>
        </Flex>
        <Flex justify="space-between" className="mt-2">
          <p className="text-xs font-normal sm:text-sm">No Urut</p>
          <p className="text-xs font-medium sm:text-sm">
            {dataPasien?.sequence_number}
          </p>
        </Flex>
        <Flex justify="space-between" className="mt-2">
          <p className="text-xs font-normal sm:text-sm">Tanggal</p>
          <p className="text-xs font-medium sm:text-sm">{date}</p>
        </Flex>
        <Flex justify="space-between" className="mt-2">
          <p className="text-xs font-normal sm:text-sm">Sesi</p>
          <p className="text-xs font-medium sm:text-sm">
            {session(dataPasien?.session)}
          </p>
        </Flex>
        <Flex justify="space-between" className="mt-2">
          <p className="text-xs font-normal sm:text-sm">Lokasi</p>
          <p className="w-80 text-end text-xs font-medium sm:text-sm">
            {dataPasien?.location}
          </p>
        </Flex>
        {dataPasien?.payment_method ? (
          <Flex justify="space-between" className="mt-2">
            <p className="text-xs font-normal sm:text-sm">Metode Pembayaran</p>
            <p className="flex flex-col text-end text-xs font-medium sm:text-sm">
              {paymentMethod(dataPasien?.payment_method)}
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
                data={dataPasien}
              />
            )}
          </Flex>
        ) : (
          <Flex justify="space-between" className="mt-2">
            <p className="text-xs font-normal sm:text-sm">Metode Pembayaran</p>
            <p className="text-end text-xs font-medium sm:text-sm">
              Belum Dibayar
            </p>
          </Flex>
        )}
        <Flex justify="space-between" className="mt-2">
          <p className="text-xs font-normal sm:text-sm">Total Biaya</p>
          <p className="text-end text-xs font-medium sm:text-sm">
            {Utils.thousandSeparator(dataPasien?.total)}
          </p>
        </Flex>
        {dataPasien?.status === "waiting" && (
          <>
            <Flex justify="space-between" className="mt-2">
              <p className="text-xs font-normal sm:text-sm">Status</p>
              <p className="cursor-default rounded-lg bg-warning-25 px-6 py-2 text-xs font-medium text-warning">
                Menunggu
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
                dataPasien={dataPasien}
              />
            )}
          </>
        )}
        {dataPasien?.status === "processed" && (
          <>
            <Flex justify="space-between" className="mt-2">
              <p className="text-xs font-normal sm:text-sm">Status</p>
              <p className="cursor-default rounded-lg bg-link-25 px-6 py-2 text-xs font-medium text-link">
                Berjalan
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
                dataPasien={dataPasien}
              />
            )}
          </>
        )}
        {dataPasien?.status === "cancelled" && (
          <>
            <Flex justify="space-between" className="mt-2">
              <p className="text-xs font-normal sm:text-sm">Status</p>
              <p className="cursor-default rounded-lg bg-negative-25 px-6 py-2 text-xs font-medium text-negative">
                Dibatalkan
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
        {dataPasien?.status === "done" && (
          <>
            <Flex justify="space-between" className="mt-2">
              <p className="text-xs font-normal sm:text-sm">Status</p>
              <p className="cursor-default rounded-lg bg-positive-25 px-6 py-2 text-xs font-medium text-positive">
                Selesai
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
