import React from "react";
import doctorImg from "@/assets/doctor.svg";
import ButtonGooglePlay from "@/components/shared-components/ButtonGooglePlay";
import ButtonAppStore from "@/components/shared-components/ButtonAppStore";

export default function LandingPage() {
  return (
    <>
      <header className="relative pt-8 bg-green-50">
        <div className="grid grid-cols-1 md:grid-cols-2 h-[34.6rem] bg-center bg-vector-header">
          <div className="mx-10 md:w-[40rem] md:mx-28 pt-20 z-10 relative">
            <h3 className="text-green-500">ReproHealth</h3>
            <h1 className="text-green-900">
              Partner Terpercaya untuk Kesehatan Reproduksi Anda
            </h1>
            <div className="md:w-[36rem]">
              <p className="mt-8 text-xl font-medium text-grey-400">
                Dengan akses mudah, informasi terpercaya, dan konsultasi yang
                nyaman, kami hadir untuk membantu Anda dalam mengakses layanan
                kesehatan reproduksi.
              </p>
            </div>
            <div className="flex mt-10 gap-2 md:gap-10">
              <ButtonAppStore />
              <ButtonGooglePlay />
            </div>
          </div>
          <div className="relative">
            <div
              className="absolute right-0 -bottom-[30rem] w-[40rem] h-[20rem] sm:w-[44rem] sm:h-[30rem] lg:w-[44rem] lg:h-[30rem] bg-ellipse-header 
            md:absolute md:right-0 md:-bottom-[30rem] lg:absolute lg:right-0 lg:-bottom-28"
            ></div>
            <div
              className="hidden sm:block sm:absolute sm:right-0 sm:-bottom-[30rem] sm:w-[36.25rem] sm:h-[39.56rem] lg:w-[36.25rem] lg:h-[39.56rem] 
            md:absolute md:right-24 md:-bottom-[30rem] lg:absolute lg:right-14 lg:-bottom-28 bg-doctor-header"
            ></div>
            <img
              src={doctorImg}
              alt="doctor"
              className="absolute items-center -bottom-[30rem] sm:hidden"
            />
          </div>
        </div>
      </header>
      <section className="flex my-32  p-2 bg-black">
        <div className="w-10 h-10 bg-green-50"></div>
        <div className="w-10 h-10 bg-green-100"></div>
        <div className="w-10 h-10 bg-green-200"></div>
        <div className="w-10 h-10 bg-green-300"></div>
        <div className="w-10 h-10 bg-green-400"></div>
        <div className="w-10 h-10 bg-green-500"></div>
        <div className="w-10 h-10 bg-green-600"></div>
        <div className="w-10 h-10 bg-green-700"></div>
        <div className="w-10 h-10 bg-green-800"></div>
        <div className="w-10 h-10 bg-green-900"></div>
      </section>
      <section className="flex my-32  p-2 bg-black">
        <div className="w-10 h-10 bg-grey-10"></div>
        <div className="w-10 h-10 bg-grey-50"></div>
        <div className="w-10 h-10 bg-grey-100"></div>
        <div className="w-10 h-10 bg-grey-200"></div>
        <div className="w-10 h-10 bg-grey-300"></div>
        <div className="w-10 h-10 bg-grey-400"></div>
        <div className="w-10 h-10 bg-grey-500"></div>
        <div className="w-10 h-10 bg-grey-600"></div>
        <div className="w-10 h-10 bg-grey-700"></div>
        <div className="w-10 h-10 bg-grey-800"></div>
        <div className="w-10 h-10 bg-grey-900"></div>
      </section>
    </>
  );
}
