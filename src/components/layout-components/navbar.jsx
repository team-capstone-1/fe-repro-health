import { useState } from "react";
import { IoCloseSharp } from "react-icons/io5";
import { GiHamburgerMenu } from "react-icons/gi";

import logoReproHealth from "@/assets/logo-reprohealth.png";
import Button from "@/components/shared-components/button";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => {
    if (!isOpen) setIsOpen(true);
    else setIsOpen(false);
  };

  return (
    <nav className="w-full bg-green-50 sticky z-50 top-0 left-0 md:static">
      <div
        className={`justify-between z-10 py-5 px-3 sm:px-6 md:px-9 md:py-5 md:flex lg:px-[6.5rem]`}
      >
        <div className="flex items-center">
          <img
            src={logoReproHealth}
            alt="logo"
            className="w-32 sm:w-44 md:w-52 cursor-pointer"
          />
        </div>

        <div>
          {isOpen ? (
            <IoCloseSharp
              className="text-grey-900 text-lg absolute right-8 top-6 cursor-pointer md:hidden"
              onClick={handleOpen}
            />
          ) : (
            <GiHamburgerMenu
              className="text-grey-900 text-lg absolute right-8 top-6 cursor-pointer md:hidden"
              onClick={handleOpen}
            />
          )}
        </div>
        <ul
          className={`text-grey-900 font-semibold pb-5 absolute -z-10 left-0 w-full
      bg-green-50 md:z-auto md:w-auto md:pl-0 md:static md:flex md:items-center md:gap-6 lg:gap-11 md:pb-0 ${
        isOpen ? "top-20" : "top-[-300px] hidden"
      }`}
        >
          <li className="text-sm md:text-md md:my-0 hover:bg-green-50 mt-6 md:hover:bg-transparent">
            <a
              href="/#"
              className={`hover:text-green-500 ms-16 md:ms-0 duration-100`}
            >
              Home {isOpen}
            </a>
          </li>
          <li className="text-sm md:text-md md:my-0 hover:bg-green-50 mt-6 md:hover:bg-transparent">
            <a
              href="/#"
              className={`hover:text-green-500 ms-16 md:ms-0 duration-100`}
            >
              About Us
            </a>
          </li>
          <li className="text-sm md:text-md md:my-0 hover:bg-green-50 mt-6 md:hover:bg-transparent">
            <a
              href="/#"
              className={`hover:text-green-500 ms-16 md:ms-0 duration-100`}
            >
              Service
            </a>
          </li>
          <li className="text-sm md:text-md md:my-0 hover:bg-green-50 mt-6 md:hover:bg-transparent">
            <a
              href="/#"
              className={`hover:text-green-500 ms-16 md:ms-0 duration-100`}
            >
              Benefit
            </a>
          </li>
          <li className="text-sm md:text-md text-grey-10 md:my-0 hover:bg-green-50 mt-6 md:hover:bg-transparent">
            <Button text="Download" />
          </li>
        </ul>
      </div>
    </nav>
  );
}
