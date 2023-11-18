import React from "react";
import profileDoctor from "@/assets/profile-doctor.svg";

export default function DoctorProfile() {
  return (
    <>
      <h3>Profil</h3>
      <div className="flex items-center space-x-7">
        <div id="doctor-image">
          <img
            className="w-48 h-48 md:w-40"
            id="doctor-image"
            src={profileDoctor}
            alt="profile-doctor"
          />
        </div>
        <div className="flex space-x-7">
          <div className="flex flex-col" id="doctor-information">
            <p className="text-sm md:text-base font-semibold text-grey-900">Dr. Andi Cahaya, Sp.OG</p>
            <p className="-mt-1 font-medium text-grey-300 text-sm md:text-base">
              Spesialis Kandungan
            </p>
            <p className="mt-2 capitalize">10 tahun pengalaman</p>
          </div>
          <div className="flex w-[40%] space-x-3" id="doctor-address">
            <p className="text-sm md:text-base font-semibold text-grey-900">Alamat</p>
            <p className="text-sm md:text-base">
              Klinik Nasional. Jl. Bedrek No.47e, Sanggrahan, Condongcatur, Kec.
              Depok, Kabupaten Sleman, DIY
            </p>
          </div>
          <div className="flex space-x-3" id="doctor-contacts">
            <div className="flex-col">
              <p className="text-sm md:text-base font-semibold text-grey-900">Email</p>
              <p className="text-sm md:text-base font-semibold text-grey-900">Phone</p>
            </div>
            <div className="flex-col">
              <p className="text-sm md:text-base">andicahyo@gmail.com</p>
              <p className="text-sm md:text-base">+62 812345865</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
