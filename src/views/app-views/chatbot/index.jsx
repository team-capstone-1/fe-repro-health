import { Button } from "antd";
import { useState, useRef, useEffect } from "react";
import ChatbotIcon from "@/assets/chatbot-icon.svg";
import ChatbotMascot from "@/assets/chatbot-mascot.svg";
import { LuSendHorizonal } from "react-icons/lu";
import { useForm } from "react-hook-form";
import profileDoctor from "@/assets/profile-doctor.svg";

export default function Chatbot() {
  const { register, handleSubmit } = useForm();
  const [lists, setLists] = useState(initialLists);
  const ref = useRef(null);
  const [selectedList, setSelectedList] = useState([
    {
      id: null,
      titleChat: "",
      tgl: "",
      pesan: [],
    },
  ]);

  const date = new Date();
  const formattedDate = date.toLocaleDateString("id-ID", {
    day: "2-digit",
    month: "2-digit",
    year: "2-digit",
  });

  const handleAddBtn = () => {
    const newList = {
      id: lists.length + 1,
      titleChat: "Pertanyaan Baru",
      tgl: formattedDate,
      pesan: [],
    };
    const newLists = [...lists];
    newLists.unshift(newList);
    setLists(newLists);
    setSelectedList([newList]);
  };

  const onSubmit = (data) => {
    if (selectedList[0]?.id === null) handleAddBtn();
    console.log(data);
  };

  useEffect(() => {
    if (lists.length) {
      ref.current?.scrollIntoView({
        behavior: "smooth",
        block: "end",
      });
    }
  }, [lists.length, selectedList]);

  return (
    <>
      <div className="sm:max-md:h-[calc(100vh-82.6px) flex min-h-[500px] flex-col-reverse gap-8 px-2 py-5 sm:h-[calc(100vh-81.8px)] sm:flex-row 2xl:px-4">
        <div className="h-full overflow-y-scroll rounded-md p-4 ring-1 ring-slate-200 sm:w-5/12 sm:max-w-[400px] [&::-webkit-scrollbar-thumb]:bg-slate-400 [&::-webkit-scrollbar-track]:bg-transparent [&::-webkit-scrollbar]:w-[4px]">
          <h1 className="text-2xl">Asisten Dokter</h1>
          <div className="py-5">
            <Button
              id="add-new-message"
              className="w-full border-2 border-green-500 pb-8 pt-2 font-semibold text-green-500 hover:ring-green-500"
              onClick={() => handleAddBtn()}
            >
              <span className="w-full overflow-hidden text-ellipsis whitespace-nowrap">
                Buat Pesan Baru
              </span>
            </Button>
          </div>
          <h5 className="text-sm font-semibold text-grey-200">Riwayat Chat</h5>
          <div className="mt-3 flex flex-col gap-3">
            {lists.map((list) => (
              <div
                id="chat-history"
                key={list.id}
                className={`flex cursor-pointer items-center justify-between rounded-md px-3.5 py-2.5 ring-2 ${
                  selectedList[0]?.id === list.id
                    ? "text-green-500 ring-green-500"
                    : "ring-slate-300"
                }`}
                onClick={() => {
                  const selected = lists.filter(
                    (selected) => selected.id === list.id,
                  );
                  setSelectedList(selected);
                }}
              >
                <p className="overflow-hidden text-ellipsis whitespace-nowrap pr-4 text-sm font-medium">
                  {list.titleChat}
                </p>
                <p className="text-xs text-slate-500">{list.tgl}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="max-h-full w-full max-w-[1200px] rounded-md ring-1 ring-slate-200">
          <div className="flex items-center gap-6 border-b-2 px-6 py-4">
            <img src={ChatbotIcon} alt="" />
            <h5 className="font-semibold">Asisten Dokter</h5>
          </div>
          <div className="flex h-[calc(100%-165px)] items-center justify-center">
            <div className="flex h-full max-h-[80vh] w-full flex-col overflow-y-scroll px-2 min-[500px]:px-6 [&::-webkit-scrollbar-thumb]:bg-slate-400 [&::-webkit-scrollbar-track]:bg-transparent [&::-webkit-scrollbar]:w-[4px]">
              {selectedList[0]?.pesan.length === 0 ? (
                <div className="my-auto">
                  <img className="mx-auto" src={ChatbotMascot} alt="" />
                  <p className="px-2 text-center font-medium sm:px-8">
                    Selamat datang di Asisten Dokter! Saya adalah AI Bot yang
                    siap membantu Anda menjelajahi topik Kesehatan Reproduksi.
                    Ada yang ingin Anda diskusikan hari ini?
                  </p>
                </div>
              ) : (
                selectedList[0]?.pesan.map((pesan) => (
                  <div
                    key={pesan.id}
                    className={`flex flex-col gap-1.5 pt-5 ${
                      pesan.pengirim === "user" ? "items-end" : "items-start"
                    }`}
                  >
                    <div
                      className={`flex flex-col gap-1.5 ${
                        pesan.pengirim === "user" ? "items-end" : "items-start"
                      }`}
                    >
                      <div
                        className={`flex gap-3 ${
                          pesan.pengirim === "user" && "flex-row-reverse"
                        }`}
                      >
                        <img
                          src={
                            pesan.pengirim === "user"
                              ? profileDoctor
                              : ChatbotIcon
                          }
                          className="hidden h-8 w-8 min-[500px]:block"
                          alt="chatbot icon"
                        />
                        <div
                          className={`${
                            pesan.pengirim === "user" && "text-right"
                          }`}
                        >
                          <p>
                            {pesan.pengirim === "user"
                              ? "Anda"
                              : "Asisten Dokter"}
                          </p>
                          <div
                            className={`flex w-fit items-center justify-center rounded-md px-1.5 py-2.5 min-[500px]:px-3 ${
                              pesan.pengirim === "user"
                                ? "bg-green-500 text-white"
                                : "bg-slate-300"
                            }`}
                          >
                            <p className="overflow-hidden text-ellipsis whitespace-nowrap text-sm font-medium">
                              {pesan.pesan}
                            </p>
                          </div>
                        </div>
                      </div>
                      {/* <p className="text-xs text-slate-500">{pesan.waktu}</p> */}
                    </div>
                  </div>
                ))
              )}
              <div ref={ref}></div>
            </div>
          </div>
          <div className="px-6 pb-6 pt-4 sm:pb-0">
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="relative flex focus:bg-black">
                <textarea
                  id="input-chatbot"
                  {...register("input-chatbot")}
                  type="text"
                  className="block h-12 w-full resize-none overflow-y-scroll rounded-md border-2 border-gray-300 px-6 pr-10 pt-[0.8em] focus:outline-green-500 [&::-webkit-scrollbar-thumb]:bg-slate-400 [&::-webkit-scrollbar-track]:bg-transparent [&::-webkit-scrollbar]:w-[4px]"
                  placeholder="Kirim pesan di sini..."
                  required
                  maxLength={1024}
                />
                <button
                  id="send-message"
                  type="submit"
                  className="absolute right-4 top-1/2 -translate-y-1/2 cursor-pointer pb-0.5"
                >
                  <LuSendHorizonal className="h-5 w-5 text-gray-600 hover:text-green-600" />
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

const initialLists = [
  {
    id: 1,
    titleChat: "Pertanyaan 1",
    tgl: "11/11/23",
    pesan: [
      {
        id: 1,
        pesan: "Pesan 1",
        waktu: "11/11/23",
        pengirim: "user",
      },
      {
        id: 2,
        pesan: "Pesan 2",
        waktu: "11/11/23",
        pengirim: "bot",
      },
      {
        id: 3,
        pesan: "Pesan 3",
        waktu: "11/11/23",
        pengirim: "user",
      },
      {
        id: 4,
        pesan: "Pesan 4",
        waktu: "11/11/23",
        pengirim: "bot",
      },
      {
        id: 5,
        pesan: "Pesan 5",
        waktu: "11/11/23",
        pengirim: "user",
      },
      {
        id: 6,
        pesan: "Pesan 6",
        waktu: "11/11/23",
        pengirim: "bot",
      },
      {
        id: 7,
        pesan: "Pesan 7",
        waktu: "11/11/23",
        pengirim: "user",
      },
      {
        id: 8,
        pesan: "Pesan 8",
        waktu: "11/11/23",
        pengirim: "bot",
      },
      {
        id: 9,
        pesan: "Pesan 9",
        waktu: "11/11/23",
        pengirim: "user",
      },
      {
        id: 10,
        pesan: "Pesan 10",
        waktu: "11/11/23",
        pengirim: "bot",
      },
      {
        id: 11,
        pesan: "Pesan 11",
        waktu: "11/11/23",
        pengirim: "user",
      },
      {
        id: 12,
        pesan: "Pesan 12",
        waktu: "11/11/23",
        pengirim: "bot",
      },
    ],
  },
  {
    id: 2,
    titleChat: "Pertanyaan 2",
    tgl: "02/09/23",
    pesan: [
      {
        id: 1,
        pesan: "Pesan 1",
        waktu: "11/11/23",
        pengirim: "user",
      },
      {
        id: 2,
        pesan: "Pesan 2",
        waktu: "11/11/23",
        pengirim: "bot",
      },
      {
        id: 3,
        pesan: "Pesan 3",
        waktu: "11/11/23",
        pengirim: "user",
      },
      {
        id: 4,
        pesan: "Pesan 4",
        waktu: "11/11/23",
        pengirim: "bot",
      },
      {
        id: 5,
        pesan: "Pesan 5",
        waktu: "11/11/23",
        pengirim: "user",
      },
      {
        id: 6,
        pesan: "Pesan 6",
        waktu: "11/11/23",
        pengirim: "bot",
      },
      {
        id: 7,
        pesan: "Pesan 7",
        waktu: "11/11/23",
        pengirim: "user",
      },
      {
        id: 8,
        pesan: "Pesan 8",
        waktu: "11/11/23",
        pengirim: "bot",
      },
      {
        id: 9,
        pesan: "Pesan 9",
        waktu: "11/11/23",
        pengirim: "user",
      },
      {
        id: 10,
        pesan: "Pesan 10",
        waktu: "11/11/23",
        pengirim: "bot",
      },
      {
        id: 11,
        pesan: "Pesan 11",
        waktu: "11/11/23",
        pengirim: "user",
      },
      {
        id: 12,
        pesan: "Pesan 12",
        waktu: "11/11/23",
        pengirim: "bot",
      },
    ],
  },
  {
    id: 3,
    titleChat: "Pertanyaan 3",
    tgl: "07/10/23",
    pesan: [
      {
        id: 1,
        pesan: "Pesan 1",
        waktu: "11/11/23",
        pengirim: "user",
      },
      {
        id: 2,
        pesan: "Pesan 2",
        waktu: "11/11/23",
        pengirim: "bot",
      },
      {
        id: 3,
        pesan: "Pesan 3",
        waktu: "11/11/23",
        pengirim: "user",
      },
      {
        id: 4,
        pesan: "Pesan 4",
        waktu: "11/11/23",
        pengirim: "bot",
      },
      {
        id: 5,
        pesan: "Pesan 5",
        waktu: "11/11/23",
        pengirim: "user",
      },
      {
        id: 6,
        pesan: "Pesan 6",
        waktu: "11/11/23",
        pengirim: "bot",
      },
      {
        id: 7,
        pesan: "Pesan 7",
        waktu: "11/11/23",
        pengirim: "user",
      },
      {
        id: 8,
        pesan: "Pesan 8",
        waktu: "11/11/23",
        pengirim: "bot",
      },
      {
        id: 9,
        pesan: "Pesan 9",
        waktu: "11/11/23",
        pengirim: "user",
      },
      {
        id: 10,
        pesan: "Pesan 10",
        waktu: "11/11/23",
        pengirim: "bot",
      },
      {
        id: 11,
        pesan: "Pesan 11",
        waktu: "11/11/23",
        pengirim: "user",
      },
      {
        id: 12,
        pesan: "Pesan 12",
        waktu: "11/11/23",
        pengirim: "bot",
      },
    ],
  },
  {
    id: 4,
    titleChat: "Pertanyaan 4",
    tgl: "11/11/23",
    pesan: [
      {
        id: 1,
        pesan: "Pesan 1",
        waktu: "11/11/23",
        pengirim: "user",
      },
      {
        id: 2,
        pesan: "Pesan 2",
        waktu: "11/11/23",
        pengirim: "bot",
      },
      {
        id: 3,
        pesan: "Pesan 3",
        waktu: "11/11/23",
        pengirim: "user",
      },
      {
        id: 4,
        pesan: "Pesan 4",
        waktu: "11/11/23",
        pengirim: "bot",
      },
      {
        id: 5,
        pesan: "Pesan 5",
        waktu: "11/11/23",
        pengirim: "user",
      },
      {
        id: 6,
        pesan: "Pesan 6",
        waktu: "11/11/23",
        pengirim: "bot",
      },
      {
        id: 7,
        pesan: "Pesan 7",
        waktu: "11/11/23",
        pengirim: "user",
      },
      {
        id: 8,
        pesan: "Pesan 8",
        waktu: "11/11/23",
        pengirim: "bot",
      },
      {
        id: 9,
        pesan: "Pesan 9",
        waktu: "11/11/23",
        pengirim: "user",
      },
      {
        id: 10,
        pesan: "Pesan 10",
        waktu: "11/11/23",
        pengirim: "bot",
      },
      {
        id: 11,
        pesan: "Pesan 11",
        waktu: "11/11/23",
        pengirim: "user",
      },
      {
        id: 12,
        pesan: "Pesan 12",
        waktu: "11/11/23",
        pengirim: "bot",
      },
    ],
  },
  {
    id: 5,
    titleChat: "Pertanyaan 5",
    tgl: "15/11/23",
    pesan: [
      {
        id: 1,
        pesan: "Pesan 1",
        waktu: "11/11/23",
        pengirim: "user",
      },
      {
        id: 2,
        pesan: "Pesan 2",
        waktu: "11/11/23",
        pengirim: "bot",
      },
      {
        id: 3,
        pesan: "Pesan 3",
        waktu: "11/11/23",
        pengirim: "user",
      },
      {
        id: 4,
        pesan: "Pesan 4",
        waktu: "11/11/23",
        pengirim: "bot",
      },
      {
        id: 5,
        pesan: "Pesan 5",
        waktu: "11/11/23",
        pengirim: "user",
      },
      {
        id: 6,
        pesan: "Pesan 6",
        waktu: "11/11/23",
        pengirim: "bot",
      },
      {
        id: 7,
        pesan: "Pesan 7",
        waktu: "11/11/23",
        pengirim: "user",
      },
      {
        id: 8,
        pesan: "Pesan 8",
        waktu: "11/11/23",
        pengirim: "bot",
      },
      {
        id: 9,
        pesan: "Pesan 9",
        waktu: "11/11/23",
        pengirim: "user",
      },
      {
        id: 10,
        pesan: "Pesan 10",
        waktu: "11/11/23",
        pengirim: "bot",
      },
      {
        id: 11,
        pesan: "Pesan 11",
        waktu: "11/11/23",
        pengirim: "user",
      },
      {
        id: 12,
        pesan: "Pesan 12",
        waktu: "11/11/23",
        pengirim: "bot",
      },
    ],
  },
  {
    id: 6,
    titleChat: "Pertanyaan 6",
    tgl: "20/11/23",
    pesan: [
      {
        id: 1,
        pesan: "Pesan 1",
        waktu: "11/11/23",
        pengirim: "user",
      },
      {
        id: 2,
        pesan: "Pesan 2",
        waktu: "11/11/23",
        pengirim: "bot",
      },
      {
        id: 3,
        pesan: "Pesan 3",
        waktu: "11/11/23",
        pengirim: "user",
      },
      {
        id: 4,
        pesan: "Pesan 4",
        waktu: "11/11/23",
        pengirim: "bot",
      },
      {
        id: 5,
        pesan: "Pesan 5",
        waktu: "11/11/23",
        pengirim: "user",
      },
      {
        id: 6,
        pesan: "Pesan 6",
        waktu: "11/11/23",
        pengirim: "bot",
      },
      {
        id: 7,
        pesan: "Pesan 7",
        waktu: "11/11/23",
        pengirim: "user",
      },
      {
        id: 8,
        pesan: "Pesan 8",
        waktu: "11/11/23",
        pengirim: "bot",
      },
      {
        id: 9,
        pesan: "Pesan 9",
        waktu: "11/11/23",
        pengirim: "user",
      },
      {
        id: 10,
        pesan: "Pesan 10",
        waktu: "11/11/23",
        pengirim: "bot",
      },
      {
        id: 11,
        pesan: "Pesan 11",
        waktu: "11/11/23",
        pengirim: "user",
      },
      {
        id: 12,
        pesan: "Pesan 12",
        waktu: "11/11/23",
        pengirim: "bot",
      },
    ],
  },
];