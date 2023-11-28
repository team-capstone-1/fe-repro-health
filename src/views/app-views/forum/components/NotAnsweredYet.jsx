import { BsSearch } from "react-icons/bs";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useDebounce } from "@/hooks/useDebounce";

export default function NotAnsweredYet() {
  const [showBy, setShowBy] = useState("populer");
  const [searchValue, setSearchValue] = useState("");
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const searchQuery = useDebounce(searchValue, 800);

  useEffect(() => {
    setLoading(true);
    let querySortBy = "";
    if (showBy === "terbaru") querySortBy = "time";
    else if (showBy === "populer") querySortBy = "title";
    try {
      const fetchData = async () => {
        const { data } = await axios.get(
          "https://6557e782bd4bcef8b6133d49.mockapi.io/forum",
          {
            params: {
              search: searchQuery,
              //   status: false,
              sortBy: querySortBy,
              order: "desc",
            },
          },
        );
        const newData = data.filter((listData) => listData.status === false);
        setData(newData);
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
          <button className="h-full w-full">Populer</button>
        </div>
        <div
          className={`cursor-pointer rounded-3xl px-5 py-1 ring-1 ${
            showBy === "terbaru"
              ? "bg-green-500 text-white ring-green-500"
              : "text-green-500 ring-green-500"
          }`}
          onClick={() => setShowBy("terbaru")}
        >
          <button className="h-full w-full">Terbaru</button>
        </div>
      </div>
      <ul className="flex flex-col gap-6">
        {loading && (
          <div className="mx-auto my-20 h-32 w-32 animate-spin rounded-full border-b-2 border-t-2 border-gray-900"></div>
        )}
        {data.length === 0 && !loading && (
          <div className="my-24 text-center sm:text-xl">
            Pencarian tidak ditemukan
          </div>
        )}
        {data.map(
          (list) =>
            !loading &&
            list.question.length > 0 && (
              <div
                key={list.question}
                className="rounded-md px-6 py-4 ring-1 ring-slate-300 max-[350px]:px-2"
              >
                <h6 className="text-right text-red-500">Belum Terjawab</h6>
                <div className="flex justify-between">
                  <Link to={list.id} className="hover:text-green-500">
                    <h5 className="text-xl font-bold">{list.title}</h5>
                  </Link>
                  <h6 className="pt-1.5 text-slate-400">{list.time}</h6>
                </div>
                <div className="flex gap-3 py-3">
                  <div className="flex">
                    <img
                      className="h-12 w-12 rounded-full hover:opacity-80"
                      src={list.authorProfile}
                      alt="patient profile"
                    />
                    <img
                      className="-ml-4 h-12 w-12 rounded-full hover:opacity-80"
                      src={list.doctorProfile}
                      alt="doctor profile"
                    />
                  </div>
                  <div className="flex flex-col justify-center">
                    <h5 className="text-sm max-[350px]:text-xs">
                      Oleh : {list.author}
                    </h5>
                    <h5 className="text-sm max-[350px]:text-xs">
                      Dijawab oleh {list.answeredBy}
                    </h5>
                  </div>
                </div>
                <div>{list.question}</div>
                <div className="flex justify-end">
                  <Link
                    to={list.id}
                    className="text-green-900 underline hover:text-green-500"
                  >
                    Lihat lebih lanjut
                  </Link>
                </div>
              </div>
            ),
        )}
      </ul>
    </div>
  );
}
