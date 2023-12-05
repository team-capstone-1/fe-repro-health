import ButtonGooglePlay from "@/components/shared-components/ButtonGooglePlay";
import ButtonAppStore from "@/components/shared-components/ButtonAppStore";
import BannerDownload from "@/components/shared-components/BannerDownload";
import doctorImg from "@/assets/doctor.svg";
import handPhone from "@/assets/handphone.png";
import doctorVector from "@/assets/doctor-vector.png";

import { AiOutlineCheck } from "react-icons/ai";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import { Button } from "antd";

import {
  DataHeroSection,
  DataAboutSection,
  DataServiceSection,
  DataBenefitLists,
  DataCtaDoctor,
} from "@/views/landing-views/constant/home-page";
import { useScrollToTop } from "@/hooks/useScrollToTop";
import { useDocumentTitle } from "@/hooks/useDocumentTitle";

export default function LandingPage() {
  useDocumentTitle("ReproHealth");
  useScrollToTop();
  return (
    <>
      <HeroSection />
      <AboutSection />
      <ServicesList />
      <BenefitList />
      <DownloadSection />
      <DoctorSection />
    </>
  );
}

function HeroSection() {
  const heroSection = DataHeroSection;

  return (
    <header
      id="hero-section"
      className="relative h-[59rem] bg-green-50 pt-8 md:h-[68rem] lg:h-[45rem]"
    >
      <div className="absolute h-[38rem] w-full bg-vector-header bg-repeat-x"></div>
      <div className="static grid h-[34.6rem] grid-cols-1 px-2 sm:px-16 lg:grid-cols-2 lg:px-[5.5rem] xl:px-32 2xl:px-[10.5rem]">
        <div className="z-10 pt-5 md:w-[40rem] md:pt-20">
          <h3 id="hero-title" className="text-green-500">
            {heroSection.title}
          </h3>
          <h1 id="hero-sub-title" className="text-green-900">
            {heroSection.subs}
          </h1>
          <div className="md:w-[36rem]">
            <p
              id="hero-description"
              className="mt-8 text-sm font-medium text-grey-400 md:text-xl"
            >
              {heroSection.description}
            </p>
          </div>
          <div id="hero-button" className="mt-14 flex gap-2 md:gap-10">
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
  );
}

function AboutSection() {
  const aboutSection = DataAboutSection;
  return (
    <section
      id="tentang-kami"
      className="h-auto bg-green-50 p-2 py-14 sm:px-12 md:relative lg:px-[5.5rem] xl:px-32 2xl:px-[10.5rem]"
    >
      <div className="absolute hidden h-[21.9rem] w-[24rem] lg:bottom-0 lg:left-16 lg:block">
        <img src={handPhone} alt="handphone" />
      </div>
      <div className="lg:ms-[20rem] lg:mt-10 lg:text-justify">
        <h2 id="about-title" className="text-2xl text-green-900 sm:text-4xl">
          {aboutSection.title}
        </h2>
        <p
          id="about-description"
          className="mt-5 py-2 text-sm font-medium text-grey-400 sm:text-base "
        >
          {aboutSection.description}
        </p>
      </div>
    </section>
  );
}

function ServicesList() {
  const serviceLists = DataServiceSection;
  return (
    <>
      <section
        id="layanan"
        className="h-auto bg-grey-10 p-2 py-8 sm:px-12 lg:px-[5.5rem] xl:px-32 2xl:px-[10.5rem]"
      >
        <h2
          id="services-title"
          className="my-5 text-center text-2xl text-green-900 md:text-4xl"
        >
          {serviceLists.title}
        </h2>
        <div
          id="services-content-list"
          className="grid grid-cols-1 md:grid-cols-3"
        >
          {serviceLists.content.map((service) => (
            <div className="p-5 md:p-2 lg:p-8" key={service.id}>
              <div className="grid h-16 w-16 place-content-center rounded-full bg-green-50">
                <img
                  id="service-icon"
                  src={service.icon}
                  alt="forum"
                  className={service.class}
                />
              </div>
              <h3 id="service-title" className="mt-3 text-2xl text-green-900">
                {service.title}
              </h3>
              <p id="service-content" className="mt-6 text-base">
                {service.textContent}
              </p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

function BenefitList() {
  const benefitLists = DataBenefitLists;
  return (
    <section
      id="manfaat"
      className="h-auto p-2 py-8 sm:px-12 md:relative lg:px-[5.5rem] xl:px-32 2xl:px-[10.5rem]"
    >
      <div className="grid grid-cols-1">
        <div className="flex justify-center p-2 lg:absolute lg:bottom-8 lg:right-16 lg:h-[21.9rem] lg:w-[30rem]">
          <img src={doctorVector} alt="doctor" />
        </div>
        <div className="mt-10 w-auto lg:me-[30rem] lg:mt-10 lg:ps-10">
          <h2
            id="benefit-title"
            className="text-2xl text-green-900 sm:text-4xl"
          >
            {benefitLists.title}
          </h2>
          <ul id="benefit-list" className="pt-8">
            {benefitLists.content.map((list, index) => (
              <li
                id="benefit-list-item"
                key={list.id + index}
                className="flex items-center pb-3"
              >
                <span
                  id="benefit-list-item-icon"
                  className="me-3 inline-block rounded-full bg-green-50 px-[0.4em] py-[0.4em] text-xl text-green-500"
                >
                  <AiOutlineCheck />
                </span>
                {list.textContent}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

function DownloadSection() {
  return (
    <section className="my-5 h-auto p-2 py-8 sm:px-12 md:relative lg:px-[5.5rem] xl:px-36 2xl:px-[10.5rem]">
      <BannerDownload />
    </section>
  );
}

function DoctorSection() {
  const doctorSection = DataCtaDoctor;
  return (
    <section
      id="cta-doctor"
      className="base-container h-auto w-auto bg-green-100"
    >
      <div className="py-[3.25rem] md:text-center">
        <h2 id="cta-doctor-title" className="text-green-900">
          {doctorSection.title}
        </h2>
        <p
          id="cta-doctor-description"
          className="mt-1 text-sm md:text-base lg:text-lg xl:text-xl"
        >
          {doctorSection.subs}
        </p>
        <div className="mt-6 flex text-white md:justify-center">
          <Link id="link-cta-doctor" to="/bergabung-sebagai-dokter">
            <ButtonCtaDoctor />
          </Link>
        </div>
      </div>
    </section>
  );
}

function ButtonCtaDoctor() {
  return (
    <Button
      id="button-cta-doctor"
      type="primary"
      className="flex items-center px-8 py-6 text-base font-semibold"
    >
      Pelajari Lebih Lanjut
      <span className="ms-2 text-base text-white">
        <FaArrowRight />
      </span>
    </Button>
  );
}
