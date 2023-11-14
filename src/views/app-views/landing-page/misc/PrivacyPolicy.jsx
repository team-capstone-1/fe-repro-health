import BannerDownload from "@/components/shared-components/BannerDownload";
import Breadcrumb from "@/components/layout-components/Breadcrumb";
import {
  DataPrivacyPolicy,
  DataPrivacy,
} from "@/views/app-views/landing-page/constant/privacy-policy";
import { useDocumentTitle } from "@/hooks/useDocumentTitle";
import { useScrollToTop } from "@/hooks/useScrollToTop";

export default function PrivacyPolicy() {
  useDocumentTitle(DataPrivacyPolicy.title);
  useScrollToTop();
  return (
    <>
      <div className="base-container">
        <Breadcrumb currentPage={DataPrivacyPolicy.title} />

        <section>
          <h1 className="mb-4 mt-5">{DataPrivacyPolicy.title}</h1>
          <p className="text-base font-medium">
            {DataPrivacyPolicy.description}
          </p>
          {DataPrivacy.map((items, indexs) => (
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
