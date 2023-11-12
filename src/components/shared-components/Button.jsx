import React from "react";

export default function Button({ text, icon }) {
  return (
    <button className="rounded-lg bg-green-500 px-5 py-2 text-white hover:bg-green-600 md:ms-0">
      <div className="me-1 flex">
        <span className="me-2 text-xl">{icon}</span>
        {text}
      </div>
    </button>
  );
}
