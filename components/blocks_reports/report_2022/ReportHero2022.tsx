import { useEffect, useState } from "react";
import { PageHeaderInterface } from "components/blocks/PageHeaders/PageHeader";

const ReportHero2022 = ({reportSections, activeSection, activeStory}, {}: PageHeaderInterface) => {
  let currentSection = reportSections.find((section) => {if (section.anchor == activeSection) {return section}})

  return (
    <header className={`w-full ${activeSection && `bg-${currentSection.colorTheme}-900 text-white`} ${activeStory ? 'hidden' : ''}`} id="reportHeader">
      {!activeStory &&
        <div className="responsive-container pt-8 pb-2">
          <span className=" text-7xl font-sans font-black spacing-y-sm">
            Envisioning...
          </span>
        </div>
      }
    </header>
  );
};

export default ReportHero2022;
