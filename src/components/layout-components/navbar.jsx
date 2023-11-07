import { useState } from "react";
import { IoCloseSharp } from "react-icons/io5";
import { GiHamburgerMenu } from "react-icons/gi";

import logoReproHealth from "/logo-reprohealth.png";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => {
    if (!isOpen) setIsOpen(true);
    else setIsOpen(false);
  };

  return (
    <nav className="w-full bg-green-50 sticky z-50 top-0 left-0">
      <div
        className={`justify-between z-10 py-5 px-10 md:px-9 md:py-3 md:flex lg:px-[6.5rem]`}
      >
        <div className="text-2xl cursor-pointer flex items-center">
          <img src={logoReproHealth} alt="logo" className="w-[12rem]" />
        </div>

        <div onClick={handleOpen}>
          {isOpen ? (
            <IoCloseSharp className="text-white text-3xl absolute right-8 top-6 cursor-pointer md:hidden" />
          ) : (
            <GiHamburgerMenu className="text-white text-3xl absolute right-8 top-6 cursor-pointer md:hidden" />
          )}
        </div>
        <ul
          className={`text-grey-900 font-bold pb-5 absolute -z-10 left-0 w-full
      bg-green-50 md:z-auto md:w-auto md:pl-0 md:static md:flex md:items-center md:gap-6 lg:gap-11 md:pb-0 ${
        isOpen ? "top-20" : "top-[-300px] hidden"
      }`}
        >
          <li className="text-md md:my-0 hover:bg-green-50 mt-6 md:hover:bg-transparent">
            <a
              href="/#"
              className={`hover:text-blue-gray-500 ms-16 md:ms-0 duration-100`}
            >
              Home {isOpen}
            </a>
          </li>
          <li className="text-md md:my-0 hover:bg-green-50 mt-6 md:hover:bg-transparent">
            <a
              href="/#"
              className={`hover:text-blue-gray-500 ms-16 md:ms-0 duration-100`}
            >
              About Us
            </a>
          </li>
          <li className="text-md md:my-0 hover:bg-green-50 mt-6 md:hover:bg-transparent">
            <a
              href="/#"
              className={`hover:text-blue-gray-500 ms-16 md:ms-0 duration-100`}
            >
              Services
            </a>
          </li>
          <li className="text-md md:my-0 hover:bg-green-50 mt-6 md:hover:bg-transparent">
            <a
              href="/#"
              className={`hover:text-blue-gray-500 ms-16 md:ms-0 duration-100`}
            >
              Benefit
            </a>
          </li>
          <li className="text-md text-grey-10 md:my-0 hover:bg-green-50 mt-6 md:hover:bg-transparent">
            <button className="py-2 px-7 ms-16 md:ms-0 rounded-md bg-green-500">
              Download
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
}
