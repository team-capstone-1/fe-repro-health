import { IoNotificationsOutline } from "react-icons/io5";
import { Link } from "react-router-dom";

import profileDoctor from "@/assets/profile-doctor.svg";
import logoReproHealth from "@/assets/logo-reprohealth.png";

export default function Topbar() {
  return (
    <nav className="static left-0 top-0 z-50 w-full border bg-white">
      <div className="app-container z-10 flex justify-between py-5 md:py-3">
        <div className="flex items-center">
          <Link to="/">
            <img
              src={logoReproHealth}
              alt="logo"
              className="w-40 cursor-pointer"
            />
          </Link>
        </div>

        <div className="flex items-center gap-3">
          <div className="text-2xl">
            <IoNotificationsOutline />
          </div>
          <div className="h-11 w-11 rounded-full bg-slate-700">
            <img src={profileDoctor} alt="profile-doctor" />
          </div>
          <div>
            <h6 className="text-base leading-none">Dr. Andi Cahaya, Sp.OG</h6>
            <span className="text-sm font-medium leading-none">
              Spesialis Kandungan
            </span>
          </div>
        </div>
      </div>
    </nav>
  );
}
