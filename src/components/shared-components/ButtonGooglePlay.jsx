import React from "react";
import logoGooglePlay from "@/assets/logo-google-play.png";

export default function ButtonGooglePlay() {
  return (
    <button className="flex p-1 ps-3 pe-4 rounded-md text-white bg-black ">
      <span className="w-7 m-1">
        <img src={logoGooglePlay} alt="app-store" />
      </span>
      <span className="text-left ps-2">
        <div className="text-[0.5rem] md:text-xs ">Get it on </div>
        <div className="text-sm md:text-xl">Google Play</div>
      </span>
    </button>
  );
}
