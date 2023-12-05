import dayjs from "dayjs";
import "dayjs/locale/id";

dayjs.locale("id");
import { Modal, Divider, Flex, Image, Spin } from "antd";
import { useEffect, useState } from "react";
import { IoMdCheckmark } from "react-icons/io";
import siluetTF from "@/assets/silluet-bukti-tf.png";
import buktiTF from "@/assets/bukti-tf.png";
import Utils from "@/utils";
import { APIAppointment } from "@/apis/APIAppointment";

const ModalPaymentAppointment = ({ closeModal, data }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [isOpen, setIsOpen] = useState(true);
  const [imagePreview, setImagePreview] = useState(false);
  const [dataPayment, setDataPayment] = useState(null);

  useEffect(() => {
    setIsLoading(true);
    const fetchData = async (transaction_id) => {
      try {
        const result =
          await APIAppointment.getDetailTransaction(transaction_id);
        setDataPayment(result);
        setIsLoading(false);
      } catch (err) {
        console.error(err);
        setIsLoading(false);
        setIsError(err);
      }
    };

    fetchData(data.transaction_id);
  }, []);

  const handleCancel = () => {
    setIsOpen(false);
    closeModal();
  };

  const paymentMethod = (val) => {
    if (val?.payment_method === "manual_transfer") {
      return "Transfer Manual";
    }
    if (val?.payment_method === "clinic_payment") {
      return "Pembayaran Klinik";
    }
  };
  return (
    <Modal
      className="px-4 md:px-8 lg:px-10"
      open={isOpen}
      onCancel={handleCancel}
      footer={
        <Spin size="large" spinning={isLoading}>
          {!isError && (
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
                    {Utils.thousandSeparator(dataPayment?.total)}
                  </p>
                </div>
              </div>

              <Divider className="m-0 mt-6 border border-dashed border-black/20" />

              <div className="mt-4">
                <h5 className="text-left text-base font-semibold">
                  Detail Transaksi
                </h5>
                <div className="mt-2 flex flex-col gap-2">
                  <Flex justify="space-between" align="center">
                    <p className="text-base">No Ref</p>
                    <p className="text-base font-semibold">
                      {dataPayment?.invoice}
                    </p>
                  </Flex>
                  <Flex justify="space-between" align="center">
                    <p className="text-base">Tanggal Pembayaran</p>
                    <p className="text-base font-semibold">
                      {dayjs(dataPayment?.date).format("DD-MM-YYYY, HH:mm")} WIB
                    </p>
                  </Flex>
                  <Flex justify="space-between" align="center">
                    <p className="text-base">Metode Pembayaran</p>
                    <p className="text-base font-semibold">
                      {paymentMethod(dataPayment)}
                    </p>
                  </Flex>
                  <Flex justify="space-between" align="center">
                    <p className="text-base">Nama Pengirim</p>
                    <p className="text-base font-semibold">
                      {dataPayment?.name}
                    </p>
                  </Flex>
                  <Flex justify="space-between" align="center" className="mt-5">
                    <p className="text-base">Nominal</p>
                    <p className="text-base font-semibold">
                      {Utils.thousandSeparator(dataPayment?.price)}
                    </p>
                  </Flex>
                  <Flex justify="space-between" align="center">
                    <p className="text-base">Biaya Admin</p>
                    <p className="text-base font-semibold">
                      {Utils.thousandSeparator(dataPayment?.admin_fee)}
                    </p>
                  </Flex>
                  <Flex justify="space-between" align="center">
                    <p className="text-base">Total</p>
                    <p className="text-xl font-bold text-green-500">
                      {Utils.thousandSeparator(dataPayment?.total)}
                    </p>
                  </Flex>
                </div>
                <div className="mt-2 flex justify-start gap-2">
                  <Image
                    onClick={() => setImagePreview(true)}
                    className="w-[100px] rounded-lg"
                    src={siluetTF}
                  />
                </div>
                {imagePreview && (
                  <Modal
                    open={imagePreview}
                    onCancel={() => setImagePreview(false)}
                    footer={null}
                  >
                    <Image
                      className="rounded-lg"
                      src={buktiTF}
                      preview={false}
                    />
                  </Modal>
                )}
              </div>
            </div>
          )}
        </Spin>
      }
    >
      {isError && (
        <Flex justify="center" align="center" className="flex-col">
          <h5 className="font-semibold">Terjadi kesalahan!</h5>
          <p>silahkan coba kembali beberapa saat lagi.</p>
          <p className="text-negative">{isError.message}</p>
        </Flex>
      )}
    </Modal>
  );
};

export default ModalPaymentAppointment;
