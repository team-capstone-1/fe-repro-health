import { Link } from "react-router-dom";
import { Button } from "antd";
import { VscSend } from "react-icons/vsc";
import { BsClock } from "react-icons/bs";
import { HiOutlineDocumentText } from "react-icons/hi";
import {
  AiOutlineCheck,
  AiOutlineMail,
  AiOutlineMessage,
} from "react-icons/ai";
import doctor from "@/assets/doctor.svg";
import arrow from "@/assets/arrow.svg";
import Breadcrumb from "@/components/layout-components/Breadcrumb";
import { useDocumentTitle } from "@/hooks/useDocumentTitle";
import { useScrollToTop } from "@/hooks/useScrollToTop";

import {
  DataBenefitLists,
  DataDoctorPage as doctorPage,
} from "@/views/app-views/landing-page/constant/doctor-page";

export default function DoctorPage() {
  useDocumentTitle(doctorPage.title);
  useScrollToTop();
  return (
    <>
      <section className="base-container">
        <Breadcrumb currentPage={doctorPage.title} />
      </section>
      <section className="base-container py-6 md:flex">
        <div className="md:w-3/5 lg:w-2/3">
          <div className="max-w-[726px]">
            <h2 className=" text-green-900">{doctorPage.header}</h2>
            <h4 className="py-2 text-[1.1rem] font-bold text-green-900 sm:text-[1.3rem] lg:text-[1.5rem] xl:text-[1.68rem] 2xl:py-4">
              {doctorPage.headerBenefit}
            </h4>
            <BenefitList />
          </div>
        </div>
        <div className="md:w-2/5 lg:w-1/3">
          <div className="">
            <img
              className="mx-auto mt-5 w-60 sm:w-64 md:mt-[9em] lg:mt-[7em] lg:w-[18rem] xl:mt-[5.5em] xl:w-[21rem] 2xl:mt-[4em] 2xl:w-96"
              src={doctor}
              alt=""
            />
          </div>
        </div>
      </section>
      <section className="base-container py-2 sm:py-8">
        <h4 className="text-[1.1rem] font-bold text-green-900 sm:text-[1.3rem] lg:text-[1.5rem] xl:text-[1.68rem]">
          {doctorPage.headerJoin}
        </h4>
        <HowToJoinList />
      </section>
      <section className="px-0 sm:px-12 lg:px-[5.5rem] xl:px-32 2xl:px-[10.5rem]">
        <div className="w-full bg-green-50 px-2 py-4 sm:my-5 sm:px-6 sm:py-8 md:my-10 lg:my-16 lg:px-8 lg:py-8 xl:my-24 2xl:px-10 2xl:py-10">
          <h4 className="font-bold text-green-900 sm:text-[1.5rem] md:text-[1.65] lg:text-[1.8rem] xl:text-[1.9rem]">
            {doctorPage.headerCTA}
          </h4>
          <p className="mt-2 font-medium sm:text-lg lg:text-lg xl:text-xl">
            {doctorPage.subCTA}
          </p>
          <Button className="mt-5 h-10 bg-green-500 px-6 pb-8 pt-2 font-semibold text-white hover:border-white 2xl:mt-6">
            <AiOutlineMail className="mr-1 inline-block h-5 w-5 pb-[0.15em]" />
            <Link to="mailto:ReproHealthCS@gmail.com">Hubungi Email Kami</Link>
          </Button>
        </div>
      </section>
    </>
  );
}

function BenefitList() {
  const benefitLists = DataBenefitLists;
  return (
    <ul className="space-y-2 text-[0.95rem] font-medium sm:text-base md:text-lg 2xl:text-left">
      {benefitLists.map((list) => (
        <li key={list.id} className="flex">
          <div className="my-auto pr-2">
            <span className="inline-block rounded-full bg-green-50 px-[0.4em] py-[0.2em]">
              <AiOutlineCheck className="inline-block h-5 w-5 text-green-600" />
            </span>
          </div>
          <div className="my-auto inline-block">{list.textContent}</div>
        </li>
      ))}
    </ul>
  );
}

const DataHowToJoinLists = [
  {
    id: 1,
    icon: <AiOutlineMessage className="h-8 w-8" />,
    title: "Hubungi Kami",
    textContent:
      "Kontak tim kami untuk mendapatkan informasi tentang prosedur dan berkas yang diperlukan.",
  },
  {
    id: 2,
    icon: <HiOutlineDocumentText className="h-8 w-8" />,
    title: "Siapkan Berkas",
    textContent:
      "Persiapkan semua dokumen yang diperlukan sesuai panduan yang telah diberikan.",
  },
  {
    id: 3,
    icon: <VscSend className="h-8 w-8" />,
    title: "Kirim Berkas",
    textContent:
      "Kirimkan berkas Anda sesuai petunjuk yang telah diberikan kepada tim ReproHealth.",
  },
  {
    id: 4,
    icon: <BsClock className="h-8 w-8" />,
    title: "Tunggu Verifikasi",
    textContent:
      "Setelah mengirimkan berkas, tunggu konfirmasi dari tim kami untuk bergabung dengan Tim ReproHealth",
  },
];

function HowToJoinList() {
  const howToJoinLists = DataHowToJoinLists;
  return (
    <ul className="grid grid-cols-1 grid-rows-4 gap-6 pt-6 sm:grid-cols-2 sm:grid-rows-2 lg:grid-cols-4 lg:grid-rows-1 2xl:gap-12 2xl:pt-8">
      {howToJoinLists.map((list) => (
        <li key={list.id}>
          <div className="flex justify-between">
            <span className="rounded-full bg-green-50 p-3 text-green-500">
              {list.icon}
            </span>
            <img className="hidden lg:block" src={list.id !== 4 && arrow} />
          </div>
          <div>
            <h5 className="mt-2 font-bold 2xl:mt-5">{list.title}</h5>
            <p className="mt-5 font-medium 2xl:mt-8">{list.textContent}</p>
          </div>
        </li>
      ))}
    </ul>
  );
}
