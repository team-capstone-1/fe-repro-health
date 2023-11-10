// import React from "react";
import ButtonGooglePlay from "@/components/shared-components/ButtonGooglePlay";
import ButtonAppStore from "@/components/shared-components/ButtonAppStore";
import BannerDownload from "@/components/shared-components/BannerDownload";
import doctorImg from "@/assets/doctor.svg";
import handPhone from "@/assets/handphone.png";
import forumIcon from "@/assets/forum-icon.svg";
import artikelIcon from "@/assets/artikel-icon.svg";
import appointmentIcon from "@/assets/appointment-icon.svg";
import doctorVector from "@/assets/doctor-vector.png";

import { AiOutlineCheck } from "react-icons/ai";
import { AiOutlineArrowRight } from "react-icons/ai";
import { Link } from "react-router-dom";

export default function LandingPage() {
  return (
    <>
      <header className="relative h-[59rem] bg-green-50 pt-8 md:h-[68rem] lg:h-[45rem]">
        <div className="absolute h-[38rem] w-full bg-vector-header bg-repeat-x"></div>
        <div className="static grid h-[34.6rem] grid-cols-1 px-2 sm:px-12 lg:grid-cols-2 lg:px-[5.5rem] xl:px-32 2xl:px-[10.5rem]">
          <div className="z-10 pt-5 md:w-[40rem] md:pt-20">
            <h3 className="text-green-500">ReproHealth</h3>
            <h1 className="text-green-900">
              Partner Terpercaya untuk Kesehatan Reproduksi Anda
            </h1>
            <div className="md:w-[36rem]">
              <p className="mt-8 text-sm font-medium text-grey-400 md:text-xl">
                Dengan akses mudah, informasi terpercaya, dan konsultasi yang
                nyaman, kami hadir untuk membantu Anda dalam mengakses layanan
                kesehatan reproduksi.
              </p>
            </div>
            <div className="mt-14 flex gap-2 md:gap-10">
              <ButtonAppStore />
              <ButtonGooglePlay />
            </div>
          </div>
          <div className="static">
            <div className="absolute -bottom-0 right-0 h-[20rem] w-[40rem] bg-ellipse-header md:h-[30rem] md:w-[44rem]"></div>
            <div
              className="hidden h-[38rem] w-[36rem] bg-doctor-header sm:absolute sm:-bottom-0 sm:right-0 
            sm:block md:-bottom-0 md:right-24 lg:absolute lg:right-14"
            ></div>
            <img
              src={doctorImg}
              alt="doctor"
              className="absolute -bottom-0 right-2 sm:hidden"
            />
          </div>
        </div>
      </header>
      <section
        id="about"
        className="h-auto bg-green-100 p-2 py-14 sm:px-12 md:relative lg:px-[5.5rem] xl:px-32 2xl:px-[10.5rem]"
      >
        <div className="absolute hidden h-[21.9rem] w-[24rem] lg:bottom-0 lg:left-16 lg:block">
          <img src={handPhone} alt="handphone" />
        </div>
        <div className="lg:ms-[20rem] lg:mt-10 lg:text-justify">
          <h2 className="text-2xl text-green-900 sm:text-4xl">
            Tentang ReproHealth
          </h2>
          <p className="mt-5 py-2 text-sm font-medium text-grey-400 sm:text-base ">
            ReproHealth berkomitmen untuk memberikan akses mudah, informasi
            terpercaya, dan layanan yang nyaman kepada penggunanya. Dengan fitur
            forum diskusi, janji temu dengan dokter, dan artikel kesehatan
            reproduksi, ReproHealth membantu mengatasi setiap permasalahan
            reproduksi dan meningkatkan pemahaman tentang kesehatan reproduksi.
            Kami adalah mitra kesehatan reproduksi yang setia, siap mendukung
            pengguna dalam perjalanan mereka menuju kesehatan reproduksi yang
            optimal.
          </p>
        </div>
      </section>
      <section
        id="services"
        className="h-auto bg-grey-10 p-2 py-8 sm:px-12 lg:px-[5.5rem] xl:px-32 2xl:px-[10.5rem]"
      >
        <h2 className="mb-8 text-center text-2xl text-green-900 md:text-4xl">
          Pelayanan Kesehatan Untukmu
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 md:ps-9">
          <div className="p-8">
            <div className="grid h-16 w-16 place-content-center rounded-full bg-green-50">
              <img src={forumIcon} alt="forum" className="w-11" />
            </div>
            <h3 className="mt-3 text-2xl text-green-900">Forum</h3>
            <p className="mt-6 text-base">
              Membantu Anda dalam mencari isu-isu kesehatan reproduksi dan
              menanyakan masalah kesehatan reproduksi secara anonim.
            </p>
          </div>
          <div className="p-8">
            <div className="grid h-16 w-16 place-content-center rounded-full bg-green-50">
              <img src={appointmentIcon} alt="appointment" className="w-9" />
            </div>
            <h3 className="mt-3 text-2xl text-green-900">Janji Temu</h3>
            <p className="mt-6 text-base">
              Membantu Anda mengatur janji temu untuk konsultasi langsung dengan
              dokter kesehatan reproduksi melalui aplikasi.
            </p>
          </div>
          <div className="p-8">
            <div className="grid h-16 w-16 place-content-center rounded-full bg-green-50">
              <img src={artikelIcon} alt="artikel" className="w-10" />
            </div>
            <h3 className="mt-3 text-2xl text-green-900">Artikel</h3>
            <p className="mt-6 text-base">
              Membantu Anda meningkatkan pemahaman Anda tentang topik-topik
              penting dalam kesehatan reproduksi, melalui artikel dari sumber
              yang akurat.
            </p>
          </div>
        </div>
      </section>
      <section
        id="benefit"
        className="h-auto p-2 py-8 sm:px-12 md:relative lg:px-[5.5rem] xl:px-32 2xl:px-[10.5rem]"
      >
        <div className="grid grid-cols-1">
          <div className="flex justify-center p-2 lg:absolute lg:bottom-8 lg:right-16 lg:h-[21.9rem] lg:w-[30rem]">
            <img src={doctorVector} alt="doctor" />
          </div>
          <div className="mt-10 w-auto lg:me-[30rem] lg:mt-10 lg:ps-10">
            <h2 className="text-2xl text-green-900 sm:text-4xl">
              Mengapa Harus Kami?
            </h2>
            <BenefitList />
          </div>
        </div>
      </section>
      <section className="h-auto p-2 py-8 sm:px-12 md:relative lg:px-[5.5rem] xl:px-36 2xl:px-[10.5rem]">
        <BannerDownload />
      </section>
      <section className="base-container h-auto w-auto bg-green-100">
        <div className="py-[3.25rem] md:text-center">
          <h2 className="text-[2rem] text-green-900">
            Ingin bergabung sebagai dokter?
          </h2>
          <p className="mt-1 text-xl">
            Kesempatan bergabung dengan Tim ReproHealth
          </p>
          <div className="mt-6 flex text-white md:justify-center">
            <Link to="/join-as-doctor">
              <button className="flex items-center rounded-lg bg-green-500 px-8 py-3 text-base font-semibold">
                Pelajari Lebih Lanjut
                <span className="ms-1 text-lg text-white">
                  <AiOutlineArrowRight />
                </span>
              </button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

function BenefitList() {
  const benefitLists = [
    {
      id: 1,
      textContent:
        "Atur janji temu langsung dengan dokter kesehatan reproduksi melalui aplikasi.",
    },
    {
      id: 2,
      textContent:
        "Bertanya langsung kepada dokter dan dapatkan jawaban dari para ahli melalui forum diskusi.",
    },
    {
      id: 3,
      textContent:
        "Bagikan kebaikan kesehatan reproduksi dengan satu akun untuk 5 anggota keluarga.",
    },
    {
      id: 4,
      textContent:
        "200+ artikel tentang kesehatan reproduksi dari sumber yang akurat.",
    },
    {
      id: 5,
      textContent: "100+ mitra kesehatan yang terpercaya",
    },
    {
      id: 6,
      textContent:
        "Keamanan data dan privasi Anda untuk pengalaman yang aman dan nyaman.",
    },
  ];

  return (
    <ul className="pt-8">
      {benefitLists.map((list) => (
        <li key={list.id} className="flex items-center pb-3">
          <span className="me-3 inline-block rounded-full bg-green-50 px-[0.4em] py-[0.4em] text-xl text-green-500">
            <AiOutlineCheck />
          </span>
          {list.textContent}
        </li>
      ))}
    </ul>
  );
}
