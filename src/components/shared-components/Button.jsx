import React from "react";

export default function Button({ text, icon }) {
  return (
    <button className="py-2 px-7 ms-16 md:ms-0 rounded-lg bg-green-500 hover:bg-green-600 text-white">
      <div className="flex">
        <span className="text-xl me-3">{icon}</span>
        {text}
      </div>
    </button>
  );
}
