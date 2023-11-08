// import React from "react";
import doctorImg from "@/assets/doctor.svg";
import ButtonGooglePlay from "@/components/shared-components/ButtonGooglePlay";
import ButtonAppStore from "@/components/shared-components/ButtonAppStore";
import handPhone from "@/assets/handphone.png";
import handPhoneSecond from "@/assets/handphone-2.png";
import forumIcon from "@/assets/forum-icon.svg";
import artikelIcon from "@/assets/artikel-icon.svg";
import appointmentIcon from "@/assets/appointment-icon.svg";
import doctorVector from "@/assets/doctor-vector.png";

import { AiOutlineCheck } from "react-icons/ai";
import { GrLinkNext } from "react-icons/gr";

export default function LandingPage() {
  return (
    <>
      <header className="relative pt-8 h-[59rem] md:h-[68rem] lg:h-[45rem] bg-green-50">
        <div className="absolute w-full bg-repeat-x h-[30rem]  bg-vector-header"></div>
        <div className="px-2 sm:px-12 lg:px-[5.5rem] xl:px-32 2xl:px-[10.5rem] static grid grid-cols-1 lg:grid-cols-2 h-[34.6rem]">
          <div className="pt-5 md:w-[40rem] md:pt-20 z-10">
            <h3 className="text-green-500">ReproHealth</h3>
            <h1 className="text-green-900">
              Partner Terpercaya untuk Kesehatan Reproduksi Anda
            </h1>
            <div className="md:w-[36rem]">
              <p className="mt-8 text-sm md:text-xl font-medium text-grey-400">
                Dengan akses mudah, informasi terpercaya, dan konsultasi yang
                nyaman, kami hadir untuk membantu Anda dalam mengakses layanan
                kesehatan reproduksi.
              </p>
            </div>
            <div className="flex mt-14 gap-2 md:gap-10">
              <ButtonAppStore />
              <ButtonGooglePlay />
            </div>
          </div>
          <div className="static">
            <div className="absolute right-0 -bottom-0 w-[40rem] h-[20rem] md:w-[44rem] md:h-[30rem] bg-ellipse-header"></div>
            <div
              className="hidden sm:block sm:absolute sm:right-0 sm:-bottom-0 w-[36rem] h-[38rem] 
            md:right-24 md:-bottom-0 lg:absolute lg:right-14 bg-doctor-header"
            ></div>
            <img
              src={doctorImg}
              alt="doctor"
              className="absolute right-2 -bottom-0 sm:hidden"
            />
          </div>
        </div>
      </header>
      <section className="h-auto md:relative p-2 py-14 sm:px-12 lg:px-[5.5rem] xl:px-32 2xl:px-[10.5rem] bg-green-100">
        <div className="hidden lg:block absolute lg:left-16 lg:bottom-0 w-[24rem] h-[21.9rem]">
          <img src={handPhone} alt="handphone" />
        </div>
        <div className="lg:ms-[20rem] lg:mt-10 lg:text-justify">
          <h2 className="text-2xl sm:text-4xl text-green-900">
            Tentang ReproHealth
          </h2>
          <p className="py-2 mt-5 text-sm sm:text-base font-medium text-grey-400 ">
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
      <section className="h-auto p-2 py-8 sm:px-12 lg:px-[5.5rem] xl:px-32 2xl:px-[10.5rem] bg-grey-10">
        <h2 className="mb-8 text-center text-2xl md:text-4xl text-green-900">
          Pelayanan Kesehatan Untukmu
        </h2>
        <div className="md:ps-9 grid grid-cols-1 md:grid-cols-3">
          <div className="p-8">
            <img src={forumIcon} alt="forum" className="w-11" />
            <h3 className="mt-3 text-2xl text-green-900">Forum</h3>
            <p className="mt-6 text-base">
              Membantu Anda dalam mencari isu-isu kesehatan reproduksi dan
              menanyakan masalah kesehatan reproduksi secara anonim.
            </p>
          </div>
          <div className="p-8">
            <img src={appointmentIcon} alt="appointment" className="w-9" />
            <h3 className="mt-3 text-2xl text-green-900">Janji Temu</h3>
            <p className="mt-6 text-base">
              Membantu Anda mengatur janji temu untuk konsultasi langsung dengan
              dokter kesehatan reproduksi melalui aplikasi.
            </p>
          </div>
          <div className="p-8">
            <img src={artikelIcon} alt="artikel" className="w-10" />
            <h3 className="mt-3 text-2xl text-green-900">Artikel</h3>
            <p className="mt-6 text-base">
              Membantu Anda meningkatkan pemahaman Anda tentang topik-topik
              penting dalam kesehatan reproduksi, melalui artikel dari sumber
              yang akurat.
            </p>
          </div>
        </div>
      </section>
      <section className="h-auto md:relative p-2 py-8 sm:px-12 lg:px-[5.5rem] xl:px-32 2xl:px-[10.5rem]">
        <div className="grid grid-cols-1">
          <div className="p-2 flex justify-center lg:absolute lg:right-16 lg:bottom-8 lg:w-[30rem] lg:h-[21.9rem]">
            <img src={doctorVector} alt="doctor" />
          </div>
          <div className="lg:ps-10 mt-10 w-auto lg:me-[30rem] lg:mt-10">
            <h2 className="text-2xl sm:text-4xl text-green-900">
              Mengapa Harus Kami?
            </h2>
            <ul className="pt-8">
              <li className="flex items-center pb-3">
                <span className="me-3 text-xl text-green-500">
                  <AiOutlineCheck />
                </span>
                Atur janji temu langsung dengan dokter kesehatan reproduksi
                melalui aplikasi.
              </li>
              <li className="flex items-center pb-3">
                <span className="me-3 text-xl text-green-500">
                  <AiOutlineCheck />
                </span>
                Bertanya langsung kepada dokter dan dapatkan jawaban dari para
                ahli melalui forum diskusi.
              </li>
              <li className="flex items-center pb-3">
                <span className="me-3 text-xl text-green-500">
                  <AiOutlineCheck />
                </span>
                Bagikan kebaikan kesehatan reproduksi dengan satu akun untuk 5
                anggota keluarga.
              </li>
              <li className="flex items-center pb-3">
                <span className="me-3 text-xl text-green-500">
                  <AiOutlineCheck />
                </span>
                200+ artikel tentang kesehatan reproduksi dari sumber yang
                akurat.
              </li>
              <li className="flex items-center pb-3">
                <span className="me-3 text-xl text-green-500">
                  <AiOutlineCheck />
                </span>
                100+ mitra kesehatan yang terpercaya
              </li>
              <li className="flex items-center pb-3">
                <span className="me-3 text-xl text-green-500">
                  <AiOutlineCheck />
                </span>
                Keamanan data dan privasi Anda untuk pengalaman yang aman dan
                nyaman.
              </li>
            </ul>
          </div>
        </div>
      </section>
      <section className="h-auto md:relative p-2 py-8 sm:px-12 lg:px-[5.5rem] xl:px-36 2xl:px-[10.5rem]">
        <div className="bg-green-50 w-auto h-auto lg:h-[13rem] bg-vector-header-2 sm:bg-no-repeat">
          <div className="px-2 lg:ps-56 grid grid-cols-1 lg:grid-cols-2 lg:grid-flow-row-dense">
            <div className="pt-12 w-auto lg:w-[30rem] xl:w-[33rem]">
              <h2 className="text-2xl text-green-900">
                Jadikan Kesehatan Reproduksi Anda Prioritas! Unduh ReproHealth
                Sekarang
              </h2>
              <h4 className="pt-2 text-xl text-grey-400">
                Tanggapan Cepat, Solusi Akurat!
              </h4>
            </div>
            <div className="flex justify-center gap-3 my-10 lg:grid lg:ms-36 lg:gap-3">
              <ButtonAppStore />
              <ButtonGooglePlay />
            </div>
          </div>
          <div className="px-2 flex justify-center items-end lg:absolute lg:left-40 lg:bottom-8 lg:w-[10.62rem] lg:h-[14rem]">
            <img src={handPhoneSecond} alt="handphoneSecondary" />
          </div>
        </div>
      </section>
      <section className="base-container w-auto h-auto bg-green-100">
        <div className="py-[3.25rem] md:text-center">
          <h2 className="text-[2rem] text-green-900">
            Ingin bergabung sebagai dokter?
          </h2>
          <p className="text-xl mt-1">
            Kesempatan bergabung dengan Tim ReproHealth
          </p>
          <div className="mt-6 flex md:justify-center text-grey-500">
            <button className="text-base font-semibold flex items-center py-3 px-8 rounded-lg bg-green-500">
              Pelajari Lebih Lanjut
              <span className="ms-1 mb-1">
                <GrLinkNext />
              </span>
            </button>
          </div>
        </div>
      </section>
      <section className="base-container w-auto h-[16rem] bg-green-900">
        footer
      </section>
    </>
  );
}
