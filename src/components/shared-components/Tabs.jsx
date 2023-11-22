import { useState } from "react";

export function Tabs({ children, title = ["Semua", "Belum dibaca"] }) {
  const [activeTab, setActiveTab] = useState("1");
  return (
    <>
      <div className="mt-[0.5em] sm:mt-[1em] flex w-full text-lg">
        <div
          className={`w-1/2 ${activeTab === "1"
            ? "border-b-2 border-green-500 text-green-500"
            : "border-b-2 border-gray-300 text-gray-400"
            }`}
        >
          <button
            className="h-full w-full py-3 font-medium text-sm sm:text-lg"
            onClick={() => setActiveTab("1")}
          >
            {title[0]}
          </button>
        </div>
        <div
          className={`w-1/2 ${activeTab === "2"
            ? "border-b-2 border-green-500 text-green-500"
            : "border-b-2 border-gray-300 text-gray-400"
            }`}
        >
          <button
            className="h-full w-full py-3 font-medium text-sm sm:text-lg"
            onClick={() => setActiveTab("2")}
          >
            {title[1]}
          </button>
        </div>
      </div>
      <div className={`${activeTab === "1" ? "block" : "hidden"}`}>{children[0]}</div>
      <div className={`${activeTab === "2" ? "block" : "hidden"}`}>{children[1]}</div>
    </>
  );
}