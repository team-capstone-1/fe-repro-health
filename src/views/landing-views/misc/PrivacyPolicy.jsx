import BannerDownload from "@/components/shared-components/BannerDownload";
import { Breadcrumbs } from "@/components/layout-components/Breadcrumb";
import {
  DataPrivacyPolicy,
  DataPrivacy,
} from "@/views/landing-views/constant/privacy-policy";
import { useDocumentTitle } from "@/hooks/useDocumentTitle";
import { useScrollToTop } from "@/hooks/useScrollToTop";

export default function PrivacyPolicy() {
  useDocumentTitle(DataPrivacyPolicy.title);
  useScrollToTop();
  return (
    <>
      <div id="breadcrumb-privacy" className="base-container">
        <Breadcrumbs currentPage={DataPrivacyPolicy.title} />

        <section
          id="privacy-policy-section"
          className="mx-3 text-justify sm:mx-0 "
        >
          <h1 id="privacy-policy-title" className="mb-4 mt-5">
            {DataPrivacyPolicy.title}
          </h1>
          <p id="privacy-policy-description" className=" text-base font-medium">
            {DataPrivacyPolicy.description}
          </p>
          {DataPrivacy.map((items, indexs) => (
            <div id="privacy-policy-content" key={indexs}>
              <h5
                id="privacy-policy-content-title"
                className="mt-3 text-base font-bold"
              >
                {items.title}
              </h5>
              <h5
                id="privacy-policy-content-sub"
                className="text-base font-medium"
              >
                {items.subs[0]}
              </h5>
              <h5
                id="privacy-policy-content-sub-two"
                className="text-base font-medium"
              >
                {items.subs[1]}
              </h5>
              <ul id="privacy-policy-content-list">
                {items.textContent.map((item, index) => (
                  <li
                    id="privacy-policy-content-list-item"
                    key={index}
                    className="flex items-start"
                  >
                    <span
                      id="privacy-policy-content-list-item-number"
                      className="mx-2 text-base font-medium"
                    >
                      {index + 1}.
                    </span>
                    <span
                      id="privacy-policy-content-list-item-text"
                      className="text-base font-medium"
                    >
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </section>

        <section id="call-to-action" className="mb-[2rem] mt-[3.5rem]">
          <BannerDownload />
        </section>
      </div>
    </>
  );
}
