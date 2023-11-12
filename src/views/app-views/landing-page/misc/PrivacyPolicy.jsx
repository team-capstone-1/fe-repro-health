import BannerDownload from "@/components/shared-components/BannerDownload";
import Breadcrumb from "@/components/layout-components/Breadcrumb";
import { privacy } from "@/views/app-views/landing-page/constant/privacy-policy";

export default function PrivacyPolicy() {
  return (
    <>
      <div className="base-container">
        <Breadcrumb currentPage="Kebijakan Privasi" />

        <section>
          <h1 className="mb-4 mt-5">Kebijakan Privasi</h1>
          <p className="text-base font-medium">
            Selamat datang di Website Reprohealth. Kami berkomitmen untuk
            menjaga kerahasiaan informasi pribadi Anda dan memberikan
            perlindungan terhadap data yang Anda bagikan kepada kami. Kebijakan
            privasi ini menjelaskan bagaimana kami mengumpulkan, menggunakan,
            mengungkap, dan melindungi informasi pribadi Anda. Dengan
            menggunakan layanan kami, Anda setuju untuk mematuhi dan terikat
            oleh kebijakan privasi ini.
          </p>
          {privacy.map((items, indexs) => (
            <div key={indexs}>
              <h5 className="text-base font-bold">{items.title}</h5>
              <h5 className="text-base font-medium">{items.subs[0]}</h5>
              <h5 className="text-base font-medium">{items.subs[1]}</h5>
              <ul>
                {items.textContent.map((item, index) => (
                  <li key={index} className="flex items-start">
                    <span className="mx-2 text-base font-medium">
                      {index + 1}.
                    </span>
                    <span className="text-base font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </section>

        <section className="mb-[2rem] mt-[3.5rem]">
          <BannerDownload />
        </section>
      </div>
    </>
  );
}
