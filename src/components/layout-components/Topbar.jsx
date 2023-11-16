import { IoNotificationsOutline } from "react-icons/io5";
import { Link } from "react-router-dom";

import profileDoctor from "@/assets/profile-doctor.svg";
import logoReproHealth from "@/assets/logo-reprohealth.png";

export default function Topbar() {
  return (
    <nav
      id="topbar"
      className="sticky left-0 top-0 z-50 w-full border bg-grey-10"
    >
      <div className="app-container z-10 flex justify-between py-5 md:py-3">
        <div className="flex items-center">
          <Link to="/">
            <img
              id="logo-reprohealth-topbar"
              src={logoReproHealth}
              alt="logo"
              className="w-28 cursor-pointer md:w-40"
            />
          </Link>
        </div>

        <div
          id="profile-doctor-topbar"
          className="flex items-center gap-1 sm:gap-3"
        >
          <div id="notification-icon-topbar" className="text-xl md:text-2xl">
            <IoNotificationsOutline />
          </div>
          <div className="h-8 w-8 rounded-full bg-slate-700 md:h-11 md:w-11">
            <img
              id="profile-doctor-topbar"
              src={profileDoctor}
              alt="profile-doctor"
            />
          </div>
          <div>
            <h6
              id="doctor-name-topbar"
              className="text-xs leading-none sm:text-sm md:text-base"
            >
              Dr. Andi Cahaya, Sp.OG
            </h6>
            <span
              id="doctor-specialist-topbar"
              className="text-xs font-medium leading-none md:text-sm"
            >
              Spesialis Kandungan
            </span>
          </div>
        </div>
      </div>
    </nav>
  );
}
