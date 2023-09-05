import { useEffect, useState } from "react";
import { PageHeaderInterface } from "components/blocks/PageHeaders/PageHeader";

import ArrowDown from "./Atoms/Arrow";

const ReportHero2022 = (
  { reportSections, activeSection, setActiveSection, activeStory, setActiveStory },
  {}: PageHeaderInterface
) => {
  let currentSection = reportSections.find((section) => {
    if (section.anchor == activeSection) {
      return section;
    }
  });

  let sectionList = reportSections.filter((section) => {
    if (section.type == 'ReportIllustrationOverlaySubsection') {
      return section;
    }
  })

  let handleNextSection = () => {
    let index = sectionList.indexOf(currentSection);
    let nextSection = index < sectionList.length - 1 ? sectionList[index + 1].anchor : 'Conclusion';

    setActiveSection(nextSection);
  }

  let handlePrevSection = () => {
    let index = sectionList.indexOf(currentSection);
    let prevSection = index == 0 ? null : sectionList[index - 1].anchor;

    if (index == 0) {
      setActiveStory(null);
    }
    setActiveSection(prevSection);
  }

  return (
    <header
      className={`w-full ${
        activeSection ? currentSection.colorTheme == 'gold' ? `bg-gold-pbrcustomdark text-white` : `bg-${currentSection.colorTheme}-900 text-white` : ``
      }`}
      id="reportHeader"
    >
      <div className={`responsive-container w-full flex flex-row justify-between pt-8 pb-4 relative`}>
        <div className="">
          <span className="text-7xl font-sans font-black spacing-y-sm">
            {activeSection ? `Envisioning` : `Envisioning...`}
          </span>
        </div>

        {activeSection &&
          <div className={`w-full flex flex-row justify-end gap-8 absolute top-4`}>
            <button className="flex flex-row items-center gap-4" onClick={handlePrevSection}>
              <div className={`rotate-180`}>
                <ArrowDown color={`${sectionList.colorTheme}`} size="default" />
              </div>
              {activeSection == sectionList[0].anchor ? `Home` : `Previous Section`}
            </button>

            <button className="flex flex-row items-center gap-4" onClick={handleNextSection}>
            {activeSection == sectionList[sectionList.length - 1].anchor ? `Conclusion` : `Next Section`}
              <ArrowDown color={`${sectionList.colorTheme}`} size="default" />
            </button>
          </div>
        }
      </div>
    </header>
  );
};

export default ReportHero2022;
