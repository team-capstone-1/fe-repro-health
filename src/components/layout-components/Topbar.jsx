import { useEffect } from "react";
import { Link } from "react-router-dom";
import { IoNotificationsOutline } from "react-icons/io5";
import { PiRobot } from "react-icons/pi";
import { useDispatch, useSelector } from "react-redux";
import { Flex, Skeleton } from "antd";

import { DrawerSidebar } from "@/components/layout-components/DrawerSidebar";
import BlankProfile from "@/assets/blank-profile.png";
import logoReproHealth from "@/assets/logo-reprohealth.png";
import {
  fetchGetDoctorProfile,
  selectDoctorProfile,
} from "@/store/get-doctor-profile-slice";

export default function Topbar() {
  const dispatch = useDispatch();
  const stateDataDoctor = useSelector(selectDoctorProfile);
  const dataDoctor = stateDataDoctor?.data?.response;

  useEffect(() => {
    dispatch(fetchGetDoctorProfile());
  }, [dispatch]);

  return (
    <nav
      id="topbar"
      className="sticky left-0 top-0 z-50 w-full border-b bg-grey-10"
    >
      <div className="app-container z-10 flex justify-between py-5 md:py-3">
        <div className="flex items-center">
          <DrawerSidebar />
          <Link to="/dashboard">
            <img
              id="logo-reprohealth-topbar"
              src={logoReproHealth}
              alt="logo"
              className="hidden w-28 cursor-pointer sm:block md:w-40"
            />
          </Link>
        </div>

        <div id="profile-doctor-topbar" className="flex items-center gap-3">
          <div
            id="bot-icon-topbar"
            className="flex items-center justify-center text-xl md:text-2xl"
          >
            <Link to="/asisten-dokter" className="hover:text-green-500">
              <PiRobot />
            </Link>
          </div>
          <div id="notification-icon-topbar" className="text-xl md:text-2xl">
            <Link to="/notifikasi" className="hover:text-green-500">
              <IoNotificationsOutline />
            </Link>
          </div>
          <div id="profile-doctor-topbar" className="flex items-center">
            <div>
              <a href="/profil">
                {stateDataDoctor.status === "loading" && (
                  <Skeleton.Avatar active size={40} />
                )}
                {stateDataDoctor.status === "success" && (
                  <img
                    id="profile-doctor-topbar"
                    src={dataDoctor?.profile_image || BlankProfile}
                    alt="profile-doctor"
                    className="h-8 w-8 rounded-full md:h-11 md:w-11"
                  />
                )}
                {stateDataDoctor.status === "failed" && (
                  <Skeleton.Avatar size={40} />
                )}
              </a>
            </div>
            <a href="/profil" className="hover:text-green-500">
              <div className="ml-2">
                {stateDataDoctor.status === "loading" && (
                  <Flex className="flex-col" gap={2}>
                    <div>
                      <Skeleton.Input active className="h-5 w-48" />
                    </div>
                    <div>
                      <Skeleton.Input active className="h-4 w-40" />
                    </div>
                  </Flex>
                )}
                {stateDataDoctor.status === "success" && (
                  <>
                    <h6
                      id="doctor-name-topbar"
                      className="text-xs leading-none sm:text-sm md:text-base"
                    >
                      {dataDoctor?.name}
                    </h6>
                    <span
                      id="doctor-specialist-topbar"
                      className="text-xs font-medium leading-none md:text-sm"
                    >
                      Spesialis {dataDoctor?.specialist.name}
                    </span>
                  </>
                )}
                {stateDataDoctor.status === "failed" && (
                  <>
                    <h6
                      id="doctor-name-topbar"
                      className="text-xs leading-none sm:text-sm md:text-base"
                    >
                      Error Fetching Data!
                    </h6>
                    <span
                      id="doctor-specialist-topbar"
                      className="text-xs font-medium leading-none md:text-sm"
                    >
                      Something Went Wrong!
                    </span>
                  </>
                )}
              </div>
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
