import { useState } from "react";

export function Tabs({ children, title = ["Tab 1", "Tab 2"] }) {
  const [activeTab, setActiveTab] = useState("1");
  return (
    <>
      <div className="mt-[2.4em] flex w-full text-lg">
        <div
          className={`w-1/2 ${
            activeTab === "1"
              ? "border-b-2 border-green-500 text-green-500"
              : "border-b-2 border-gray-300 text-gray-400"
          }`}
        >
          <button
            className="h-full w-full py-3 text-sm font-medium sm:text-lg"
            onClick={() => setActiveTab("1")}
          >
            {title[0]}
          </button>
        </div>
        <div
          className={`w-1/2 ${
            activeTab === "2"
              ? "border-b-2 border-green-500 text-green-500"
              : "border-b-2 border-gray-300 text-gray-400"
          }`}
        >
          <button
            className="h-full w-full py-3 text-sm font-medium sm:text-lg"
            onClick={() => setActiveTab("2")}
          >
            {title[1]}
          </button>
        </div>
      </div>
      <div className={`${activeTab === "1" ? "block" : "hidden"}`}>
        {children[0]}
      </div>
      <div className={`${activeTab === "2" ? "block" : "hidden"}`}>
        {children[1]}
      </div>
    </>
  );
}

export function TabsDoctorProfile({
  children,
  title = ["Tab 1", "Tab 2", "Tab 3"],
}) {
  const [activeTab, setActiveTab] = useState("1");

  return (
    <>
      <section className=" flex w-full text-lg">
        <div
          className={`w-1/3 ${
            activeTab === "1"
              ? "border-b-2 border-green-500 text-green-500"
              : "border-b-2 border-gray-300 text-gray-400 hover:text-green-500"
          }`}
        >
          <button
            className="h-full w-full py-3 text-[10px] font-medium sm:text-sm lg:text-lg"
            onClick={() => setActiveTab("1")}
          >
            {title[0]}
          </button>
        </div>

        <div
          className={`w-1/3 ${
            activeTab === "2"
              ? "border-b-2 border-green-500 text-green-500"
              : "border-b-2 border-gray-300 text-gray-400 hover:text-green-500"
          }`}
        >
          <button
            className="h-full w-full py-3 text-[10px] font-medium sm:text-sm lg:text-lg"
            onClick={() => setActiveTab("2")}
          >
            {title[1]}
          </button>
        </div>

        <div
          className={`w-1/3 ${
            activeTab === "3"
              ? "border-b-2 border-green-500 text-green-500"
              : "border-b-2 border-gray-300 text-gray-400 hover:text-green-500"
          }`}
        >
          <button
            className="h-full w-full py-3 text-[10px] font-medium sm:text-sm lg:text-lg"
            onClick={() => setActiveTab("3")}
          >
            {title[2]}
          </button>
        </div>
      </section>

      <div className={`${activeTab === "1" ? "block" : "hidden"}`}>
        {children[0]}
      </div>

      <div className={`${activeTab === "2" ? "block" : "hidden"}`}>
        {children[1]}
      </div>

      <div className={`${activeTab === "3" ? "block" : "hidden"}`}>
        {children[2]}
      </div>
    </>
  );
}
