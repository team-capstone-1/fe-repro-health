import Breadcrumb from "@/components/layout-components/Breadcrumb";
import BannerDownload from "@/components/shared-components/BannerDownload";

import {
  DataUserTerms,
  DataTerms,
} from "@/views/app-views/landing-page/constant/user-terms";
import { useDocumentTitle } from "@/hooks/useDocumentTitle";
import { useScrollToTop } from "@/hooks/useScrollToTop";

export default function UserTerms() {
  useDocumentTitle(DataUserTerms.title);
  useScrollToTop();
  return (
    <>
      <div className="base-container">
        <Breadcrumb currentPage={DataUserTerms.title} />
        <section>
          <h1 className="mb-4 mt-5">{DataUserTerms.title}</h1>
          <p className="text-justify text-base">{DataUserTerms.description}</p>
          {DataTerms.map((section, index) => (
            <div key={index}>
              <strong className="mb-1 mt-3 block">
                {index + 1}. {section.title}
              </strong>
              <ul className="list-inside list-disc pl-[0.5rem] text-justify">
                {section.listTerms.map((item, itemIndex) => (
                  <li key={itemIndex} className="flex items-start">
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
