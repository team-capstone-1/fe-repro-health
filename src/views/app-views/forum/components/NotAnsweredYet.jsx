import { BsSearch } from "react-icons/bs";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useDebounce } from "@/hooks/useDebounce";
import id from "date-fns/locale/id";
import distanceInWordsStrict from "date-fns/formatDistanceStrict";
import anonymousPict from "@/assets/anonymous-pp.jpg";
import { APIForum } from "@/apis/APIForum";
import { MdOutlineRemoveRedEye } from "react-icons/md";

export default function NotAnsweredYet() {
  const [showBy, setShowBy] = useState("populer");
  const [searchValue, setSearchValue] = useState("");
  const [loading, setLoading] = useState(true);
  const [forumList, setForumList] = useState([]);
  const searchQuery = useDebounce(searchValue, 800);

  useEffect(() => {
    setLoading(true);
    try {
      const fetchData = async () => {
        const data = await APIForum.getForumList(searchQuery);
        if (showBy === "populer") {
          data.sort((a, b) => {
            return b.view - a.view;
          });
        } else if (showBy === "terbaru") {
          data.sort((a, b) => {
            return new Date(b.date) - new Date(a.date);
          });
        }
        data.forEach((data) => {
          data.date = distanceInWordsStrict(new Date(data.date), new Date(), {
            locale: id,
            addSuffix: true,
          });
        });
        const newData = data.filter((listData) => listData.status === false);
        setForumList(newData);
        setLoading(false);
      };
      fetchData();
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  }, [showBy, searchQuery]);

  return (
    <div className="mt-4 pb-10 sm:px-2 md:px-5">
      <div className="relative">
        <div className="pointer-events-none absolute inset-y-0 start-0 flex items-center ps-4 sm:ps-8">
          <BsSearch className="text-gray-400" />
        </div>
        <input
          type="text"
          id="search-bar-forum-2"
          className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-3 ps-10 text-sm focus:outline-green-500 sm:p-5 sm:ps-14"
          placeholder="Cari kata kunci"
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
        />
      </div>
      <div className="flex gap-3 py-4">
        <div
          className={`cursor-pointer rounded-3xl px-5 py-1 ring-1 ${
            showBy === "populer"
              ? "bg-green-500 text-white ring-green-500"
              : "text-green-500 ring-green-500"
          }`}
          onClick={() => setShowBy("populer")}
        >
          <button id="popular-2" className="h-full w-full">
            Populer
          </button>
        </div>
        <div
          className={`cursor-pointer rounded-3xl px-5 py-1 ring-1 ${
            showBy === "terbaru"
              ? "bg-green-500 text-white ring-green-500"
              : "text-green-500 ring-green-500"
          }`}
          onClick={() => setShowBy("terbaru")}
        >
          <button id="news-2" className="h-full w-full">
            Terbaru
          </button>
        </div>
      </div>
      <ul className="flex flex-col gap-6">
        {loading && (
          <div className="mx-auto my-20 h-32 w-32 animate-spin rounded-full border-b-2 border-t-2 border-gray-900"></div>
        )}
        {forumList.length === 0 && !loading && (
          <div className="my-24 text-center sm:text-xl">
            Pencarian tidak ditemukan
          </div>
        )}
        {!loading &&
          forumList.length > 0 &&
          forumList.map((data) => (
            <div
              key={data.question}
              className="rounded-md px-6 py-4 ring-1 ring-slate-300 max-[350px]:px-2"
            >
              <h6 className="text-right text-red-500 max-[450px]:text-[0.65rem]">
                Belum Terjawab
              </h6>
              <div className="flex justify-between">
                <Link
                  id="forum-title-2"
                  to={data.id}
                  className="hover:text-green-500"
                >
                  <h5 className="text-xl font-bold max-[450px]:text-base">
                    {data.title}
                  </h5>
                </Link>
                <h6 className="pt-1.5 text-slate-400 max-[450px]:text-[0.7rem]">
                  {data.date}
                </h6>
              </div>
              <div className="flex gap-3 py-3">
                <div className="flex">
                  <img
                    className="h-12 w-12 rounded-full hover:opacity-80"
                    src={
                      data.anonymous
                        ? anonymousPict
                        : data.patient.profile_image
                    }
                    alt="patient profile"
                  />
                  {data.status && (
                    <img
                      className="-ml-4 h-12 w-12 rounded-full hover:opacity-80"
                      src={data.forum_replies?.[0]?.doctor?.profile_image}
                      alt="doctor profile"
                    />
                  )}
                </div>
                <div className="flex flex-col justify-center">
                  <h5 className="text-sm max-[450px]:text-[0.7rem]">
                    Oleh : {data.anonymous ? "Anonim" : data.patient.name}
                  </h5>
                  {data.status && (
                    <h5 className="text-sm max-[450px]:text-[0.7rem]">
                      Dijawab oleh {data.forum_replies?.[0]?.doctor?.name}
                    </h5>
                  )}
                </div>
              </div>
              <div
                className="text-justify max-[450px]:text-xs"
                style={{
                  display: "-webkit-box",
                  WebkitBoxOrient: "vertical",
                  overflow: "hidden",
                  WebkitLineClamp: 3,
                }}
              >
                {data.content}
              </div>
              <div className="mt-2 flex justify-between">
                <div className="flex items-center gap-1 max-[450px]:text-xs">
                  <MdOutlineRemoveRedEye className="h-4 w-4" />
                  {data.view} kali dilihat
                </div>
                <Link
                  id="see-more-2"
                  to={data.id}
                  className="text-green-900 underline hover:text-green-500 max-[450px]:text-xs"
                >
                  Lihat lebih lanjut
                </Link>
              </div>
            </div>
          ))}
      </ul>
    </div>
  );
}
