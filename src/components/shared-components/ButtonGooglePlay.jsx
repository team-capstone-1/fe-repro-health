import React from "react";
import logoGooglePlay from "@/assets/logo-google-play.png";

export default function ButtonGooglePlay() {
  return (
    <button className="flex p-1 px-3 rounded-md text-white bg-black m-1">
      <span className="w-7 m-1">
        <img src={logoGooglePlay} alt="app-store" />
      </span>
      <span className="text-left ps-2">
        <div className="text-[0.5rem] md:text-xs ">GET IN ON</div>
        <div className="text-sm md:text-lg">Google Play</div>
      </span>
    </button>
  );
}
