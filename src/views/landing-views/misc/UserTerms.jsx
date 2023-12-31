import {
  DataUserTerms,
  DataTerms,
} from "@/views/landing-views/constant/user-terms";
import { useScrollToTop } from "@/hooks/useScrollToTop";
import { useDocumentTitle } from "@/hooks/useDocumentTitle";
import { Breadcrumbs } from "@/components/layout-components/Breadcrumb";
import { BannerDownload } from "@/components/shared-components/BannerDownload";

export default function UserTerms() {
  useDocumentTitle(DataUserTerms.title);
  useScrollToTop();
  return (
    <>
      <div id="breadcrumb-user-terms" className="base-container">
        <Breadcrumbs currentPage={DataUserTerms.title} />
        <section id="user-terms-section" className="mx-3 sm:mx-0">
          <h1 id="user-terms-title" className="mb-4 mt-5">
            {DataUserTerms.title}
          </h1>
          <p id="user-terms-description" className="text-justify text-base">
            {DataUserTerms.description}
          </p>
          {DataTerms.map((section, index) => (
            <div id="user-terms-content" key={index}>
              <strong id="user-terms-content-title" className="mb-1 mt-3 block">
                {index + 1}. {section.title}
              </strong>
              <ul
                id="user-terms-content-list"
                className="list-inside list-disc pl-[0.5rem] text-justify"
              >
                {section.listTerms.map((item, itemIndex) => (
                  <li
                    id="user-terms-content-list-item"
                    key={itemIndex}
                    className="flex items-start"
                  >
                    <span className="mr-2 text-black">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </section>

        <section className="mb-[2rem] mt-[4rem]">
          <BannerDownload />
        </section>
      </div>
    </>
  );
}
