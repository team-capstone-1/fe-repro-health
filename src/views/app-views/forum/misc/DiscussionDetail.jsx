import { Link, useParams } from "react-router-dom";
import { FaArrowLeftLong } from "react-icons/fa6";
import { useEffect, useState } from "react";
import axios from "axios";

export default function DiscussionDetail() {
  const [data, setData] = useState([]);
  const { questionId } = useParams();

  useEffect(() => {
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
        console.log(newData);
      };
      fetchData();
    } catch (error) {
      console.log(error);
    }
  }, []);

  return (
    <>
      <div className="pl-5 pt-4">
        <Link
          className="text-lg font-medium text-slate-500 hover:text-green-500"
          to="/forum"
        >
          <FaArrowLeftLong className="inline-block pb-0.5" />
          <span className="pl-5">Kembali ke Forum</span>
        </Link>
        <div className="py-6">
          <h5 className="text-xl font-bold">{data[0]?.title}</h5>
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
          </div>
        </div>
      </div>
    </>
  );
}
