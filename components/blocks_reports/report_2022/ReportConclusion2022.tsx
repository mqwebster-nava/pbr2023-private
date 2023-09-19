import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import ReportContent from "../ReportContent/ReportContent";
import { LinkListItem } from "./Atoms/LinkListItem";
import NavigationArrows from "./Atoms/NavigationArrows";

const ReportConclusion2022 = ({ title, richBody, anchor, activeSection, setActiveSection, activeStory, setActiveStory }) => {
  let currentYear = new Date().getFullYear();
  const router = useRouter();

  useEffect(() => {
    if (activeSection == 'conclusion') {
      router.push({hash: anchor});
    }
  }, [activeSection])

  return (
    <>
      {activeSection == 'conclusion' ?
        (
          <section
              id={anchor}
              className={`w-full min-h-[125vh] bg-gold-700 relative scroll-mt-[70px]`}
          >
              <div className="responsive-container pt-2xl pb-4xl md:min-h-[calc(100vh_-_70px)] sticky top-[70px] overflow-hidden">
              <div className="relative h-full">
                  <div
                  id="conclusion-box"
                  className="absolute top-0 left-0 -z-10 h-full w-full "
                  ></div>
                  <h2 className="font-serif font-light md:text-7xl type-preset-1 pt-3xl">
                  {title}
                  </h2>
                  <div
                  id={"conclusion-text"}
                  className="type-preset-6 font-serif font-light text-black pt-[70px] max-w-screen-md motion-reduce:opacity-100"
                  >
                  <ReportContent
                      docData={richBody.json}
                      docLinks={richBody.links}
                      variant={"report"}
                      reportYear={"2021"}
                  />
                  </div>
                  <p
                  id={"conclusion-next"}
                  className="type-preset-5 font-bold pt-[70px] pb-md motion-reduce:opacity-100"
                  >
                  Where next?
                  </p>
                  <div className="flex gap-xl flex-col md:flex-row pb-2xl">
                  {[
                  [
                      ["/files/2021NavaPublicBenefitReport.pdf", "Download PDF"],
                      ["#reportHeader", "Back to top"],
                  ],
                  [
                      ["/careers", " Careers"],
                      ["/case-studies", "Case Studies"],
                      ["/public-benefit-reports/2020", "2020 Public Benefit Report"],
                  ],
                  [["/contact", "Get in touch"], ["https://navapbc.us10.list-manage.com/subscribe?u=c69eb1fd5475fa5122ef55965&id=a994830182","Sign up for our newsletter", ]],
                  ].map((row, i) => (
                  <ul
                      id={`conclusion-footer${i + 1}`}
                      key={`conclusion-footer${i + 1}`}
                      className="w-full md:w-1/3 flex flex-col gap-md pt-xs font-serif font-light divide-y-[1px] divide-black border-t-[1px] border-black motion-reduce:opacity-100"
                  >
                      {row.map((link) => (
                          <LinkListItem
                          key={`${link[0]}-intro`}
                          href={link[0]}
                          variant={"default"}
                          hoverStyle={"underlined"}
                          color={"black"}
                      >
                          {link[1]}
                      </LinkListItem>
                      ))}
                  </ul>
                  ))}
              </div>
              </div>
              </div>
              <div className=" py-xl absolute bottom-0 left-0 right-0  width-full">
                  <div
                  className={
                      "responsive-container flex items-center justify-between flex-col-reverse sm:flex-row"
                  }
                  >
                  <p className="text-black font-sans type-preset-8 pt-md sm:pt-0">
                      {`© ${currentYear} Nava PBC. All rights reserved.`}
                  </p>
                  </div>
              </div>
          </section>
        )
      : null}
    </>
  );
};

export default ReportConclusion2022;