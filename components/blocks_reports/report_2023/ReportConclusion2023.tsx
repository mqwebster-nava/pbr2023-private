import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { LinkListItem } from "./Atoms/LinkListItem";
import NavigationArrows from "./Atoms/NavigationArrows";

const ReportConclusion2023 = ({
  title,
  richBody,
  anchor,
  activeSection,
  setActiveSection,
  setActiveStory,
  reportSections,
}) => {
  const router = useRouter();

  useEffect(() => {
    if (activeSection == "conclusion") {
      router.push({ hash: anchor });
    }
  }, [activeSection]);

  // Find first story of last section in reportSections list
  const sections = reportSections.filter((section) => {if (section.type == "ReportIllustrationOverlaySubsection") return section}).map((section) => section.anchor);
  const lastSection = sections[sections.length - 1];
  const reportSectionsLastSectionIndex = reportSections.findIndex((section) => section.anchor == lastSection);
  const lastSectionFirstStory = reportSections[reportSectionsLastSectionIndex + 1].anchor

  let handlePrevSection = () => {
    setActiveStory(lastSectionFirstStory)
    setActiveSection(lastSection);
    setTimeout(() => window.scrollTo(0, 0), 50)
  };

  return (
    <>
      {activeSection == "conclusion" ? (
        <section
          id={anchor}
          className={`text-white relative scroll-mt-[70px]`}
        >
          <div className={`w-full bg-purple-900`}>
            <div className="responsive-container pt-8 pb-16 grid grid-cols-6 gap-x-2.5 gap-y-8 md:grid-cols-12 md:gap-8">
              <div className="relative col-span-full h-full hidden">
                <h2 className="text-7xl tracking-[0.015em] font-sans font-black">
                  {title}
                </h2>
              </div>

              <div className={`col-span-1 col-end-7 md:col-end-13`}>
                <NavigationArrows color="" handleNextSection={undefined} handlePrevSection={handlePrevSection} />
              </div>

              <div
                id={"conclusion-text"}
                className="col-span-5 md:col-span-6 md:col-start-7 pt-8 font-serif text-base leading-5 md:text-3xl md:leading-normal font-light"
              >
                {richBody.json.content[0].content[0].value}
              </div>
            </div>
          </div>

          <div className={`w-full min-h-[60vh] bg-purple-800`}>
            <div className={`responsive-container pt-8 pb-16 grid grid-cols-6 gap-x-2.5 md:grid-cols-12 md:gap-8`}>
              <p
                id={"conclusion-next"}
                className="col-span-full md:col-span-2 md:row-span-full type-preset-6 font-bold pt-2"
              >
                Where next
              </p>

              {[
                [
                  ["/public-benefit-reports/2023", "Back to top"],
                  ["/careers", " Careers"],
                  ["/case-studies", "Case Studies"],
                  [
                    "/public-benefit-reports/2020",
                    "2020 Public Benefit Report",
                  ],
                ],
                [
                  ["/contact", "Get in touch"],
                  [
                    "https://navapbc.us10.list-manage.com/subscribe?u=c69eb1fd5475fa5122ef55965&id=a994830182",
                    "Sign up for our newsletter",
                  ],
                ],
              ].map((row, i) => (
                <ul
                  id={`conclusion-footer${i + 1}`}
                  key={`conclusion-footer${i + 1}`}
                  className="col-span-full md:col-span-2"
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

              <div className="col-span-full md:col-span-2 md:col-end-13">
                {[
                  [
                    ["/files/2023NavaPublicBenefitReport.pdf", "Download PDF"],
                  ],
                ].map((row, i) => (
                  <ul
                    id={`conclusion-footer${i + 1}`}
                    key={`conclusion-footer${i + 1}`}
                    className=""
                  >
                    {row.map((link) => (
                      <LinkListItem
                        key={`${link[0]}-intro`}
                        href={link[0]}
                        variant={"default"}
                        hoverStyle={"underlined"}
                        color={"black"}
                        isBolded={true}
                      >
                        {link[1]}
                      </LinkListItem>
                    ))}
                  </ul>
                ))}
              </div>
            </div>
          </div>
        </section>
      ) : null}
    </>
  );
};

export default ReportConclusion2023;
