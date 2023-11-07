import React from "react";

export default function Button({ text }) {
  return (
    <button className="py-2 px-7 ms-16 md:ms-0 rounded-lg bg-green-500 hover:bg-green-600">
      {text}
    </button>
  );
}
