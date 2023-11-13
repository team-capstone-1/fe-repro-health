import BannerDownload from "@/components/shared-components/BannerDownload";
import Breadcrumb from "@/components/layout-components/Breadcrumb";
import { privacyPolicy, privacy } from "@/views/app-views/landing-page/constant/privacy-policy";

export default function PrivacyPolicy() {
  return (
    <>
      <div className="base-container">
        <Breadcrumb currentPage={privacyPolicy.title} />

        <section>
          <h1 className="mb-4 mt-5">{privacyPolicy.title}</h1>
          <p className="text-base font-medium">
            {privacyPolicy.description}
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
