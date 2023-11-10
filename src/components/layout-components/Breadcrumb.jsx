import React from "react";
import { PiCaretDoubleRightBold } from "react-icons/pi";

export default function Breadcrumb({ currentPage }) {
  return (
    <>
      <div className="mb-[1.5rem] mt-[1.5rem] flex flex-auto">
        <a href="/">
          <p className="mr-2 text-green-600">Beranda</p>
        </a>
        <PiCaretDoubleRightBold className="mr-2 mt-[0.25rem] text-grey-300" />
        <p>{currentPage}</p>
      </div>
    </>
  );
}
