import React from "react";
import profileDoctor from "@/assets/profile-doctor.svg";
import { Card } from "antd";

export default function DoctorProfile() {
  return (
    <>
      <Card>
        <h3>Profil</h3>
        <div className="flex flex-col md:flex-row items-center md:space-x-7">
          <div id="doctor-image" >
            <img
              className="h-48 w-48 md:w-40"
              id="doctor-image"
              src={profileDoctor}
              alt="profile-doctor"
            />
          </div>
          <div className="md:flex md:flex-row md:space-x-7 md:space-y-0 md:text-left flex flex-col my-5 mx-10 text-center space-y-7">
            <div className="flex flex-col" id="doctor-information">
              <p className="text-sm font-semibold text-grey-900 md:text-base">
                Dr. Andi Cahaya, Sp.OG
              </p>
              <p className="-mt-1 text-sm font-medium text-grey-300 md:text-base">
                Spesialis Kandungan
              </p>
              <p className="mt-2 capitalize">10 tahun pengalaman</p>
            </div>
            <div className="md:flex md:w-[40%] md:space-x-3" id="doctor-address">
              <p className="text-sm font-semibold text-grey-900 md:text-base">
                Alamat
              </p>
              <p className="text-sm md:text-base">
                Klinik Nasional. Jl. Bedrek No.47e, Sanggrahan, Condongcatur,
                Kec. Depok, Kabupaten Sleman, DIY
              </p>
            </div>
            <div className="flex space-x-3 justify-center text-left" id="doctor-contacts">
              <div className="flex-col">
                <p className="text-sm font-semibold text-grey-900 md:text-base">
                  Email
                </p>
                <p className="text-sm font-semibold text-grey-900 md:text-base">
                  Phone
                </p>
              </div>
              <div className="flex-col">
                <p className="text-sm md:text-base">andicahyo@gmail.com</p>
                <p className="text-sm md:text-base">+62 812345865</p>
              </div>
            </div>
          </div>
        </div>
      </Card>
    </>
  );
}
