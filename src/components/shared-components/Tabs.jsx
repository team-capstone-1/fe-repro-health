import { useState } from "react";

export function Tabs({ children }) {
  const [activeTab, setActiveTab] = useState("1");
  return (
    <>
      <div className="mt-[0.5em] sm:mt-[1em] flex w-full text-lg">
        <div
          className={`w-1/2 ${
            activeTab === "1"
              ? "border-b-2 border-green-500 text-green-500"
              : "border-b-2 border-gray-300 text-gray-400"
          }`}
        >
          <button
            className="h-full w-full py-3 font-medium"
            onClick={() => setActiveTab("1")}
          >
            Semua Diskusi
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
            className="h-full w-full py-3 font-medium"
            onClick={() => setActiveTab("2")}
          >
            Belum Dijawab
          </button>
        </div>
      </div>
      <div className={`${activeTab === "1" ? "block" : "hidden"}`}>{children[0]}</div>
      <div className={`${activeTab === "2" ? "block" : "hidden"}`}>{children[1]}</div>
    </>
  );
}

// import { Tabs } from "antd";
// const onChange = (key) => {
//   console.log(key);
// };
// const items = [
//   {
//     key: "1",
//     label: "Tab 1",
//     children: "Content of Tab Pane 1",
//   },
//   {
//     key: "2",
//     label: "Tab 2",
//     children: "Content of Tab Pane 2",
//   },
// ];

// export default function Forum() {
//   return (
//     <>
//       <div className="w-full flex justify-evenly">
//         <div className="w-full flex justify-evenly">
//           <Tabs
//             className="w-full flex justify-evenly"
//             tabBarStyle={{ color: "#0d0d0d"}}
//             defaultActiveKey="1"
//             items={items}
//             onChange={onChange}
//           />
//         </div>
//       </div>
//     </>
//   );
// }
