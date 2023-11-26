import { useState } from "react";
import { IoCloseSharp } from "react-icons/io5";
import { GiHamburgerMenu } from "react-icons/gi";
import { Link } from "react-router-dom";
import { Button } from "antd";

import logoReproHealth from "@/assets/logo-reprohealth.png";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <nav
      id="navbar"
      className="sticky left-0 top-0 z-50 w-full bg-green-50 md:static"
    >
      <div className="base-container z-10 justify-between py-5 md:flex md:py-3">
        <div className="flex items-center">
          <Link to="/">
            <img
              id="logo-reprohealth-navbar"
              src={logoReproHealth}
              alt="logo"
              className="w-32 cursor-pointer sm:w-44 md:w-52"
            />
          </Link>
        </div>

        <div>
          {isOpen ? (
            <IoCloseSharp
              id="close-dropdown"
              className="absolute right-8 top-6 cursor-pointer text-lg text-grey-900 md:hidden"
              onClick={handleOpen}
            />
          ) : (
            <GiHamburgerMenu
              id="open-dropdown"
              className="absolute right-8 top-6 cursor-pointer text-lg text-grey-900 md:hidden"
              onClick={handleOpen}
            />
          )}
        </div>
        <ul
          id="list-menu-navbar"
          className={`absolute left-0 -z-10 w-full bg-green-50 pb-5 font-semibold
      text-grey-900 md:static md:z-auto md:flex md:w-auto md:items-center md:gap-6 md:pb-0 md:pl-0 lg:gap-11 ${
        isOpen ? "top-16" : "top-[-300px] hidden"
      }`}
        >
          <li className="md:text-md mt-6 text-sm hover:bg-green-50 md:my-0 md:hover:bg-transparent">
            <a
              id="link-home-navbar"
              href="/"
              className="ms-16 duration-200 hover:text-green-500 md:ms-0"
            >
              Home
            </a>
          </li>
          <li className="md:text-md mt-6 text-sm hover:bg-green-50 md:my-0 md:hover:bg-transparent">
            <a
              id="link-about-navbar"
              href="/#about"
              className="ms-16 duration-200 hover:text-green-500 md:ms-0"
            >
              About Us
            </a>
          </li>
          <li className="md:text-md mt-6 text-sm hover:bg-green-50 md:my-0 md:hover:bg-transparent">
            <a
              id="link-service-navbar"
              href="/#services"
              className="ms-16 duration-200 hover:text-green-500 md:ms-0"
            >
              Service
            </a>
          </li>
          <li className="md:text-md mt-6 text-sm hover:bg-green-50 md:my-0 md:hover:bg-transparent">
            <a
              id="link-benefit-navbar"
              href="/#benefit"
              className="ms-16 duration-200 hover:text-green-500 md:ms-0"
            >
              Benefit
            </a>
          </li>
          <li className="md:text-md ms-16 mt-6 text-sm text-grey-10 hover:bg-green-50 md:my-0 md:ms-0 md:hover:bg-transparent">
            <Button type="primary" className="font-semibold">
              Download
            </Button>
          </li>
        </ul>
      </div>
    </nav>
  );
}
