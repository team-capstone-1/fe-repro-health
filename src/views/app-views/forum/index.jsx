import { Tabs } from "@/components/shared-components/Tabs";
import { BsSearch } from "react-icons/bs";
// import { Input } from "antd";
import { useState } from "react";
import { Link } from "react-router-dom";
// const { Search } = Input;

export default function Forum() {
  // const [isLoading, setIsLoading] = useState(false);
  const [isShow, setIsShow] = useState("populer");

  const lists = [
    {
      title: "abc",
      status: "abcd",
      time: "abcde",
      author: "abcdef",
      answeredBy: "abcdefg",
      question: "abcdefgh",
      authorProfile:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwVr7l3OZ3GT9x2k95wC5OE8PrjbhRaxUkVdq4hEsWfJd1UZLrwwC8V3kVme0YqBREaC0&usqp=CAU",
      doctorProfile:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLjpysLu9Dh9eOhUa7msvEo6fxQ2148RipgHnCGunZ12jIckDwoQRi39XhU6LA97zdwkQ&usqp=CAU",
      questionLink: "/abcdefgh",
    },
    {
      title: "abc",
      status: "abcd",
      time: "abcde",
      author: "abcdef",
      answeredBy: "abcdefg",
      question: "abcdefgh",
      authorProfile:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwVr7l3OZ3GT9x2k95wC5OE8PrjbhRaxUkVdq4hEsWfJd1UZLrwwC8V3kVme0YqBREaC0&usqp=CAU",
      doctorProfile:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLjpysLu9Dh9eOhUa7msvEo6fxQ2148RipgHnCGunZ12jIckDwoQRi39XhU6LA97zdwkQ&usqp=CAU",
      questionLink: "/abcdefgh",
    },
    {
      title: "abc",
      status: "abcd",
      time: "abcde",
      author: "abcdef",
      answeredBy: "abcdefg",
      question: "abcdefgh",
      authorProfile:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwVr7l3OZ3GT9x2k95wC5OE8PrjbhRaxUkVdq4hEsWfJd1UZLrwwC8V3kVme0YqBREaC0&usqp=CAU",
      doctorProfile:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLjpysLu9Dh9eOhUa7msvEo6fxQ2148RipgHnCGunZ12jIckDwoQRi39XhU6LA97zdwkQ&usqp=CAU",
      questionLink: "/abcdefgh",
    },
    {
      title: "abc",
      status: "abcd",
      time: "abcde",
      author: "abcdef",
      answeredBy: "abcdefg",
      question: "abcdefgh",
      authorProfile:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwVr7l3OZ3GT9x2k95wC5OE8PrjbhRaxUkVdq4hEsWfJd1UZLrwwC8V3kVme0YqBREaC0&usqp=CAU",
      doctorProfile:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLjpysLu9Dh9eOhUa7msvEo6fxQ2148RipgHnCGunZ12jIckDwoQRi39XhU6LA97zdwkQ&usqp=CAU",
      questionLink: "/abcdefgh",
    },
    {
      title: "abc",
      status: "abcd",
      time: "abcde",
      author: "abcdef",
      answeredBy: "abcdefg",
      question: "abcdefgh",
      authorProfile:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwVr7l3OZ3GT9x2k95wC5OE8PrjbhRaxUkVdq4hEsWfJd1UZLrwwC8V3kVme0YqBREaC0&usqp=CAU",
      doctorProfile:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLjpysLu9Dh9eOhUa7msvEo6fxQ2148RipgHnCGunZ12jIckDwoQRi39XhU6LA97zdwkQ&usqp=CAU",
      questionLink: "/abcdefgh",
    },
  ];

  return (
    <>
      <Tabs>
        {/* isi content tab 1 */}
        <div className="mt-4 pb-10 sm:px-5">
          <div className="relative focus:bg-black">
            <div className="pointer-events-none absolute inset-y-0 start-0 flex items-center ps-8">
              <BsSearch className="text-gray-400" />
            </div>
            <input
              type="text"
              id="input-group-1"
              className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-5 ps-14 text-sm focus:outline-green-500"
              placeholder="Cari kata kunci"
            />
          </div>
          <div className="flex gap-3 py-4">
            <div
              className={`rounded-3xl px-5 py-1 ring-1 ${
                isShow === "populer"
                  ? "bg-green-500 text-white ring-green-700"
                  : "text-green-500 ring-green-500"
              }`}
              onClick={() => setIsShow("populer")}
            >
              <button className="h-full w-full">Populer</button>
            </div>
            <div
              className={`rounded-3xl px-5 py-1 ring-1 ${
                isShow === "terbaru"
                  ? "bg-green-500 text-white ring-green-700"
                  : "text-green-500 ring-green-500"
              }`}
              onClick={() => setIsShow("terbaru")}
            >
              <button className="h-full w-full">Terbaru</button>
            </div>
          </div>
          <ul className="flex flex-col gap-6">
            {lists.map((list) => (
              <div
                key={list.question}
                className="rounded-md px-6 py-4 ring-1 ring-slate-300 max-[350px]:px-2"
              >
                <h6 className="text-right text-green-500">{list.status}</h6>
                <div className="flex justify-between">
                  <h5 className="text-xl font-bold">{list.title}</h5>
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
                    <h5 className="text-sm">Oleh : {list.author}</h5>
                    <h5 className="text-sm">Dijawab oleh {list.answeredBy}</h5>
                  </div>
                </div>
                <div>{list.question}</div>
                <div className="flex justify-end">
                  <Link
                    to={list.link}
                    className=" text-green-900 underline hover:text-green-500"
                  >
                    Lihat lebih lanjut
                  </Link>
                </div>
              </div>
            ))}
          </ul>
        </div>

        {/* isi content tab 2 */}
        <div className="mt-4 sm:px-5">
          <div className="relative">
            <div className="pointer-events-none absolute inset-y-0 start-0 flex items-center ps-8">
              <BsSearch className="text-gray-400" />
            </div>
            <input
              type="text"
              id="input-group-1"
              className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-5 ps-14 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
              placeholder="name@flowbite.com"
            />
          </div>
          <div className="flex gap-3 py-4">
            <div
              className={`rounded-3xl px-5 py-1 ring-1 ${
                isShow === "populer"
                  ? "bg-green-500 text-white ring-green-700"
                  : "text-green-500 ring-green-500"
              }`}
              onClick={() => setIsShow("populer")}
            >
              <button className="h-full w-full">Populer</button>
            </div>
            <div
              className={`rounded-3xl px-5 py-1 ring-1 ${
                isShow === "terbaru"
                  ? "bg-green-500 text-white ring-green-700"
                  : "text-green-500 ring-green-500"
              }`}
              onClick={() => setIsShow("terbaru")}
            >
              <button className="h-full w-full">Terbaru</button>
            </div>
          </div>
          <ul className="flex flex-col gap-6">
            {lists.map((list) => (
              <div
                key={list.question}
                className="rounded-md px-6 py-4 ring-1 ring-slate-300 max-[350px]:px-2"
              >
                <h6 className="text-right text-green-500">{list.status}</h6>
                <div className="flex justify-between">
                  <h5 className="text-xl font-bold">{list.title}</h5>
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
                    <h5 className="text-sm">Oleh : {list.author}</h5>
                    <h5 className="text-sm">Dijawab oleh {list.answeredBy}</h5>
                  </div>
                </div>
                <div>{list.question}</div>
                <div className="flex justify-end">
                  <Link
                    to={list.link}
                    className=" text-green-900 underline hover:text-green-500"
                  >
                    Lihat lebih lanjut
                  </Link>
                </div>
              </div>
            ))}
          </ul>
        </div>
      </Tabs>
    </>
  );
}
