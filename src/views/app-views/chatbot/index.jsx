//refactor belakangan, yg penting jadi dulu -nau
import { Button } from "antd";
import { useState, useRef, useEffect } from "react";
import { LuSendHorizonal } from "react-icons/lu";
import { useForm } from "react-hook-form";
import ChatbotIcon from "@/assets/chatbot-icon.svg";
import ChatbotMascot from "@/assets/chatbot-mascot.svg";
import profileDoctor from "@/assets/profile-doctor.svg";
import { useDocumentTitle } from "@/hooks/useDocumentTitle";
import { APIChatbot } from "@/apis/APIChatbot";
import { APIProfile } from "@/apis/APIProfile";
import { v4 as uuidv4 } from "uuid";
import Markdown from "react-markdown";
import id from "date-fns/locale/id";
import distanceInWordsStrict from "date-fns/formatDistanceStrict";

export default function Chatbot() {
  useDocumentTitle("Asisten Dokter");

  const { register, handleSubmit, reset } = useForm();
  const [chatLists, setChatLists] = useState([]);
  console.log(chatLists, "chatLists")
  const ref = useRef(null);
  const uuid = uuidv4();
  const [refetch, setRefetch] = useState(false);
  const [trigerSelectedChat, setTrigerSelectedChat] = useState(false);
  const [isloading, setIsLoading] = useState(false);
  const [isNewChat, setIsNewChat] = useState(false);
  const [selectedChat, setSelectedChat] = useState([
    {
      data: {
        doctor_id: null,
        id: null,
        pesan: [],
        tgl: "",
        titleChat: "",
      },
      status: "",
    },
  ]);

  const handleAddBtn = () => {
    const newList = {
      data: {
        doctor_id: null,
        id: uuid,
        pesan: [],
        tgl: new Date(),
        titleChat: "Obrolan Baru",
      },
      status: "",
    };
    const newLists = [...chatLists];
    newLists.unshift(newList);
    setChatLists(newLists);
    setSelectedChat([newList]);
    setIsNewChat(true);
  };

  useEffect(() => {
    if (chatLists.length) {
      ref.current?.scrollIntoView({
        behavior: "smooth",
        block: "end",
      });
    }
  }, [chatLists.length, selectedChat]);

  const formattedDate = (date, withoutTime) => {
    const formattedDate = new Date(date);
    const day = formattedDate.getDate().toString().padStart(2, "0");
    const month = (formattedDate.getMonth() + 1).toString().padStart(2, "0");
    const year = formattedDate.getFullYear();

    const hours = String(formattedDate.getHours()).padStart(2, "0");
    const minutes = String(formattedDate.getMinutes()).padStart(2, "0");
    const seconds = String(formattedDate.getSeconds()).padStart(2, "0");

    if (withoutTime) {
      return `${day}/${month}/${year}`;
    }
    return `${day}/${month}/${year} ${hours}:${minutes}:${seconds}`;
  };

  const relativeTime = (date) => {
    const oneDayInMilliseconds = 24 * 60 * 60 * 1000;
    const currentDate = new Date();
    const timeDifference = currentDate.getTime() - new Date(date).getTime();
    if (timeDifference > oneDayInMilliseconds) {
      return formattedDate(date, true);
    } else {
      if (timeDifference < 1000 * 60) {
        return "Baru saja";
      }
      return distanceInWordsStrict(new Date(date), new Date(), {
        locale: id,
        // addSuffix: true,
      });
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const dataProfile = await APIProfile.getDoctorProfile();
        const dataChatbot = await APIChatbot.getChatbotHistory(
          dataProfile.response.id,
        );
        dataChatbot.forEach((data) => {
          const newDate = formattedDate(data.data.tgl);
          data.data.tgl = newDate;
        });
        dataChatbot.sort((a, b) => {
          return new Date(b.data.tgl) - new Date(a.data.tgl);
        });
        dataChatbot.forEach((data) => {
          data.data.pesan.sort((a, b) => {
            return new Date(a.waktu) - new Date(b.waktu);
          });
        });
        setChatLists(dataChatbot);
        if (refetch) {
          setTrigerSelectedChat(true);
        }
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
    setRefetch(false);
  }, [refetch]);

  useEffect(() => {
    if (trigerSelectedChat) {
      const selected = chatLists.filter(
        (selected) => selected.data.id === selectedChat[0]?.data.id,
      );
      setSelectedChat(selected);
      setTrigerSelectedChat(false);
      if (isNewChat) {
        setSelectedChat([chatLists[0]]);
        setIsNewChat(false);
      }
    }
  }, [chatLists, selectedChat, trigerSelectedChat]);

  const handleOnSubmit = async (data) => {
    reset();
    // setIsNewChat(false);
    setIsLoading(true);
    if (selectedChat[0]?.data.id === null) {
      handleAddBtn();
      setIsNewChat(true);
    }
    
    // setSelectedChat(...selectedChat, {
    //   data: {
    //     ...selectedChat[0]?.data,
    //     pesan: [
    //       // eslint-disable-next-line no-unsafe-optional-chaining
    //       ...selectedChat[0]?.data.pesan,
    //       {
    //         id: uuidv4(),
    //         jawaban: "Mohon tunggu AI sedang menjawab...",
    //         pengirim: "",
    //         pesan: data["input-chatbot"],
    //         waktu: new Date(),
    //       },
    //     ],
    //   },
    //   status: "",
    //   }
    //   );

    selectedChat[0]?.data.pesan.push({
      id: uuidv4(),
      jawaban: "Mohon tunggu AI sedang menjawab...",
      pengirim: "",
      pesan: data["input-chatbot"],
      waktu: new Date(),
    });

    setTimeout(() => {
      ref.current?.scrollIntoView({
        behavior: "smooth",
        block: "end",
      });
    }, 100);

    try {
      if (selectedChat[0]?.data.doctor_id === null) {
        await APIChatbot.getChatbotRecommendation({
          message: data["input-chatbot"],
        }).then(() => {
          setRefetch(true);
          setIsLoading(false);
        });
      } else {
        await APIChatbot.getChatbotRecommendation({
          session_id: selectedChat[0]?.data.id,
          message: data["input-chatbot"],
        }).then(() => {
          setRefetch(true);
          setIsLoading(false);
        });
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <div className="md:h-[calc(100vh-82.6px) flex min-h-[500px] flex-col-reverse gap-8 px-2 py-5 pb-8 md:h-[calc(100vh-81.8px)] md:flex-row md:pb-5 2xl:px-4">
        <div className="h-full max-h-[80vh] overflow-y-scroll rounded-md p-4 ring-1 ring-slate-200 md:max-h-screen md:w-5/12 md:max-w-[400px] [&::-webkit-scrollbar-thumb]:bg-slate-400 [&::-webkit-scrollbar-track]:bg-transparent [&::-webkit-scrollbar]:w-[4px]">
          <h1 className="text-2xl">Asisten Dokter</h1>
          <div className="py-5">
            <Button
              id="add-new-message"
              className="w-full bg-green-500 pb-8 pt-2 font-semibold text-white hover:border-green-500"
              onClick={() => handleAddBtn()}
            >
              <span className="w-full overflow-hidden text-ellipsis whitespace-nowrap">
                Buat Pesan Baru
              </span>
            </Button>
          </div>
          <h5 className="text-sm font-semibold text-grey-200">Riwayat Chat</h5>
          <div className="mb-5 mt-3 flex h-[60%] min-h-[60%] flex-col gap-3">
            {chatLists.length === 0 && (
              <div className="flex h-full w-full items-center justify-center">
                <div className="flex items-center justify-center ">
                  <p className="px-2 text-center font-medium md:px-8">
                    Riwayat chat kosong
                  </p>
                </div>
              </div>
            )}
            {chatLists.map((list) => (
              <div
                id="chat-history"
                key={list.data.id}
                className={`flex cursor-pointer items-center justify-between rounded-md px-3 py-2.5 ring-2 ${
                  selectedChat[0]?.data.id === list.data.id
                    ? "ring-green-500"
                    : "ring-slate-300"
                }`}
                onClick={() => {
                  const selected = chatLists.filter(
                    (selected) => selected.data.id === list.data.id,
                  );
                  setSelectedChat(selected);
                }}
              >
                <p className="overflow-hidden text-ellipsis whitespace-nowrap pr-3 text-sm font-medium">
                  {list.data.titleChat}
                </p>
                <p className="w-4/12 max-w-[65px] break-words text-right text-[0.7rem] text-green-400">
                  {relativeTime(list.data.tgl)}
                </p>
              </div>
            ))}
          </div>
        </div>
        <div className="max-h-full w-full max-w-[1200px] rounded-md ring-1 ring-slate-200">
          <div className="flex items-center gap-6 border-b-2 px-6 py-4">
            <img src={ChatbotIcon} alt="" />
            <div className="flex flex-col gap-1">
              <h5 className="font-semibold leading-none">Asisten Dokter</h5>
              <p className="hidden font-medium leading-none md:block">
                Tanyakan pertanyaan Anda melaui chatbot pintar kami
              </p>
            </div>
          </div>
          <div className="flex h-[calc(100%-165px)] items-center justify-center">
            <div className="flex h-[61.5vh] max-h-[61.5vh] w-full flex-col overflow-y-scroll px-4 min-[500px]:px-6 [&::-webkit-scrollbar-thumb]:bg-slate-400 [&::-webkit-scrollbar-track]:bg-transparent [&::-webkit-scrollbar]:w-[4px]">
              {selectedChat[0]?.data.pesan.length === 0 ? (
                <div className="my-auto">
                  <img className="mx-auto" src={ChatbotMascot} alt="" />
                  <p className="px-2 text-center font-medium md:px-8">
                    Selamat datang di Asisten Dokter! Saya adalah AI Bot yang
                    siap membantu Anda menjelajahi topik Kesehatan Reproduksi.
                    Ada yang ingin Anda diskusikan hari ini?
                  </p>
                </div>
              ) : (
                selectedChat[0]?.data.pesan.map((chat) => (
                  <div
                    key={chat.id}
                    className="mt-3 flex flex-col gap-3 sm:gap-4"
                  >
                    <div className="flex justify-end">
                      <div className="flex flex-row-reverse">
                        <img
                          className="hidden h-8 w-8 sm:block"
                          src={profileDoctor}
                          alt=""
                        />
                        <div className="mt-1.5 flex flex-col gap-1.5 sm:pl-12 sm:pr-5">
                          <p className="text-right font-semibold">Anda</p>
                          <div className="">
                            <p className="break-words rounded-md bg-green-100 p-3 text-sm font-medium">
                              <Markdown>{chat.pesan}</Markdown>
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex">
                      <div className="flex">
                        <img
                          className="hidden h-8 w-8 sm:block"
                          src={ChatbotIcon}
                          alt=""
                        />
                        <div className="mt-1.5 flex flex-col gap-1.5 sm:pl-5 sm:pr-12">
                          <p className="text-left font-semibold">
                            Asisten Dokter
                          </p>
                          <div className="">
                            <p className="break-words rounded-md bg-grey-50 p-3 text-sm font-medium">
                              <Markdown>{chat.jawaban}</Markdown>
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))
              )}
              <div ref={ref}></div>
            </div>
          </div>
          <div className="px-4 pb-6 pt-4 min-[500px]:px-6 md:pb-0">
            <form onSubmit={handleSubmit(handleOnSubmit)}>
              <div className="relative flex focus:bg-black">
                <textarea
                  id="input-chatbot"
                  {...register("input-chatbot")}
                  type="text"
                  className="peer absolute left-0.5 top-1/2 block h-11 w-[calc(100%-3rem)] -translate-y-1/2 resize-none overflow-y-scroll rounded-md pt-[0.8em] focus:outline-none disabled:cursor-not-allowed disabled:bg-gray-200 disabled:opacity-60 px-2 md:px-4 [&::-webkit-scrollbar-thumb]:bg-slate-400 [&::-webkit-scrollbar-track]:bg-transparent [&::-webkit-scrollbar]:w-[4px]"
                  placeholder={
                    isloading
                      ? "Mohon tunggu AI sedang menjawab..."
                      : "Kirim pesan di sini..."
                  }
                  required
                  disabled={isloading}
                  maxLength={1024}
                />
                <div className="block h-12 w-full resize-none overflow-y-scroll rounded-md border-2 border-gray-300 pt-[0.8em] peer-focus:border-green-500 md:px-6 [&::-webkit-scrollbar-thumb]:bg-slate-400 [&::-webkit-scrollbar-track]:bg-transparent [&::-webkit-scrollbar]:w-[4px]"></div>
                <button
                  id="send-message"
                  type="submit"
                  disabled={isloading}
                  className="absolute right-0.5 top-1/2 z-10 h-11 w-11 -translate-y-1/2 cursor-pointer pb-0.5 text-gray-600 hover:text-green-600 disabled:cursor-not-allowed disabled:text-gray-400 disabled:hover:text-gray-400"
                >
                  {isloading ? (
                    <div className="mx-auto h-5 w-5 animate-spin rounded-full border-b-2 border-t-2 border-gray-900"></div>
                  ) : (
                    <LuSendHorizonal className="mx-auto h-5 w-5 " />
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
