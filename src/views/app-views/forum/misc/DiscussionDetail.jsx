import * as yup from "yup";
import { useEffect, useState } from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import { Link, useParams } from "react-router-dom";
import { FaArrowLeftLong } from "react-icons/fa6";
import { useForm } from "react-hook-form";
import { Button } from "antd";
import Markdown from "react-markdown";

import { format } from "date-fns";
import { APIForum } from "@/apis/APIForum";
import { useDocumentTitle } from "@/hooks/useDocumentTitle";
import { ModalConfirmForumAnswer } from "@/components/shared-components/ModalConfirmForumAnswer";

import anonymousPict from "@/assets/anonymous-pp.jpg";

export default function DiscussionDetail() {
  useDocumentTitle("Detail Pertanyaan");

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isShow, setIsShow] = useState(false);
  const { questionId } = useParams();
  const [payload, setPayload] = useState();
  const [isAnswered, setIsAnswered] = useState(false);

  const schema = yup.object().shape({
    replyForum: yup.string().required("Jawaban harus diisi"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  useEffect(() => {
    setLoading(true);
    const fetchData = async () => {
      try {
        const data = await APIForum.getForumDetail(questionId);
        setData(data);
        setLoading(false);
      } catch (error) {
        setLoading(false);
        console.log(error);
      }
    };
    fetchData();
  }, [isAnswered]);

  const handleShowModal = () => {
    setIsShow((prev) => !prev);
  };
  const onSubmit = (content) => {
    handleShowModal();
    setPayload({ questionId, data: content["replyForum"] });
  };

  return (
    <>
      <div className="px-0 pt-4 sm:px-5 md:px-8">
        <Link
          id="back-to-forum"
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
                src={
                  data[0]?.anonymous
                    ? anonymousPict
                    : data[0]?.patient?.profile_image
                }
                alt="patient profile"
              />
              <div className="flex flex-col justify-center">
                <h5 className="text-sm font-semibold max-[350px]:text-xs">
                  Oleh :{" "}
                  {data[0]?.anonymous ? "Anonim" : data[0]?.patient?.name}
                </h5>
                <h5 className="text-sm max-[350px]:text-xs">
                  {`${format(
                    new Date(data[0]?.date),
                    "dd MMMM yyyy",
                  )} pukul ${format(new Date(data[0]?.date), "hh:mm")} WIB`}
                </h5>
              </div>
            </div>
            {data[0]?.content}
            <div>
              {data[0]?.status ? (
                <div className="mt-6 rounded-lg ring-1 ring-slate-200">
                  <div className="bg-green-50 px-3 py-2">
                    <h5 className="font-semibold">Dijawab Oleh:</h5>
                    <div className="flex gap-3 pt-2">
                      <img
                        className="h-12 w-12 rounded-full hover:opacity-80"
                        src={
                          data[0]?.forum_replies[0]?.doctor?.profile_image ||
                          anonymousPict
                        }
                        alt="patient profile"
                      />
                      <div className="flex flex-col justify-center">
                        <h5 className="text-sm font-semibold max-[350px]:text-xs">
                          {data[0]?.forum_replies[0]?.doctor?.name}
                        </h5>
                        <h5 className="text-sm text-slate-500 max-[350px]:text-xs">
                          {`${format(
                            new Date(data[0]?.forum_replies[0]?.date),
                            "dd MMMM yyyy",
                          )} pukul ${format(
                            new Date(data[0]?.forum_replies[0]?.date),
                            "hh:mm",
                          )} WIB`}
                        </h5>
                      </div>
                    </div>
                  </div>
                  <Markdown className="px-3 py-2">
                    {data[0]?.forum_replies[0]?.content}
                  </Markdown>
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
                      {...register("replyForum")}
                      className={`h-52 rounded-sm px-2 py-3 ring-1 ${
                        errors.replyForum?.message
                          ? "outline-red-500 ring-red-500"
                          : "outline-slate-400 ring-slate-400 focus:outline-green-500"
                      }`}
                      placeholder="Tulis jawaban Anda di sini"
                    />
                    <span className="mt-1 text-xs text-red-500">
                      {errors.replyForum?.message}
                    </span>
                    <div className="flex justify-end">
                      <Button
                        id="send-reply"
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
          authorName={data[0]?.anonymous ? "Anonim" : data[0]?.patient?.name}
          payload={payload}
          setIsAnswered={setIsAnswered}
        />
      )}
    </>
  );
}
