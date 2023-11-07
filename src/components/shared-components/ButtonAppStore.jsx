import React from "react";
import { AiFillApple } from "react-icons/ai";

export default function ButtonAppStore() {
  return (
    <button className="flex p-1 ps-2 pe-4 rounded-md text-white bg-black ">
      <span className="text-4xl">
        <AiFillApple />
      </span>
      <span className="block">
        <div className="text-[0.5rem] md:text-xs">Download on the</div>
        <div className="text-sm md:text-xl">App Store</div>
      </span>
    </button>
  );
}
