import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { FaArrowLeftLong } from "react-icons/fa6";
import { useForm } from "react-hook-form";
import { Button } from "antd";

import ModalConfirmForumAnswer from "@/components/shared-components/ModalConfirmForumAnswer";

export default function DiscussionDetail() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isShow, setIsShow] = useState(false);
  const { questionId } = useParams();
  const { register, handleSubmit } = useForm();

  useEffect(() => {
    setLoading(true);
    try {
      const fetchData = async () => {
        const { data } = await axios.get(
          "https://6557e782bd4bcef8b6133d49.mockapi.io/forum",
          {
            params: {
              id: String(questionId),
            },
          },
        );
        const newData = data.filter((listData) => listData.id == questionId);
        setData(newData);
        setLoading(false);
      };
      fetchData();
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  }, []);

  const handleShowModal = () => {
    setIsShow((prev) => !prev);
  };
  const onSubmit = (data) => {
    handleShowModal();
    console.log({ data });
  };

  return (
    <>
      <div className="px-6 pt-4">
        <Link
          className="text-lg font-medium text-slate-500 hover:text-green-500"
          to="/forum"
        >
          <FaArrowLeftLong className="inline-block pb-0.5" />
          <span className="pl-5 text-base">Kembali ke Forum</span>
        </Link>
        {loading && (
          <div className="mx-auto my-20 h-32 w-32 animate-spin rounded-full border-b-2 border-t-2 border-gray-900"></div>
        )}
        {!loading && (
          <div className="py-4">
            <h5 className="text-lg font-bold">{data[0]?.title}</h5>
            <div className="flex gap-3 py-3">
              <img
                className="h-12 w-12 rounded-full hover:opacity-80"
                src={data[0]?.authorProfile}
                alt="patient profile"
              />
              <div className="flex flex-col justify-center">
                <h5 className="text-sm font-semibold max-[350px]:text-xs">
                  Oleh : {data[0]?.author}
                </h5>
                <h5 className="text-sm max-[350px]:text-xs">{data[0]?.time}</h5>
              </div>
            </div>
            {data[0]?.question}
            <div>
              {data[0]?.status ? (
                <div className="mt-6 rounded-lg ring-1 ring-slate-200">
                  <div className="bg-green-50 px-3 py-2">
                    <h5 className="font-semibold">Dijawab Oleh:</h5>
                    <div className="flex gap-3 pt-2">
                      <img
                        className="h-12 w-12 rounded-full hover:opacity-80"
                        src={data[0]?.authorProfile}
                        alt="patient profile"
                      />
                      <div className="flex flex-col justify-center">
                        <h5 className="text-sm font-semibold max-[350px]:text-xs">
                          Oleh : {data[0]?.author}
                        </h5>
                        <h5 className="text-sm text-slate-500 max-[350px]:text-xs">
                          {data[0]?.time}
                        </h5>
                      </div>
                    </div>
                  </div>
                  <p className="px-3 py-2">{data[0]?.answer}</p>
                </div>
              ) : (
                <div className="py-5">
                  <form
                    className="flex flex-col"
                    onSubmit={handleSubmit(onSubmit)}
                  >
                    <h5 className="text-lg font-semibold">Jawab Pertanyaan</h5>
                    <textarea
                      id="reply-forum"
                      {...register("reply-forum")}
                      className="h-52 rounded-sm px-2 py-3 ring-1 ring-slate-400"
                      placeholder="Tulis jawaban Anda di sini"
                      required
                    />
                    <div className="flex justify-end">
                      <Button
                        className="me-0 mt-12 w-36 bg-green-500 text-white"
                        htmlType="submit"
                      >
                        Kirim
                      </Button>
                    </div>
                  </form>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
      {isShow && (
        <ModalConfirmForumAnswer
          closeModal={handleShowModal}
          authorName={data[0]?.author}
        />
      )}
    </>
  );
}
