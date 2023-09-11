import { useEffect, useState } from "react";
import { PageHeaderInterface } from "components/blocks/PageHeaders/PageHeader";

import NavigationArrows from "./Atoms/NavigationArrows";

const ReportHero2022 = (
  {
    reportSections,
    activeSection,
    setActiveSection,
    activeStory,
    setActiveStory,
  },
  {}: PageHeaderInterface
) => {
  const [isSectionOpen, setIsSectionOpen] = useState(false);
  useEffect(() => {
    if (activeSection !== null) {
      setIsSectionOpen(true);
    }
  }, [activeSection])

  const currentSection = reportSections.find((section) => {
    if (section.anchor == activeSection) {
      return section;
    }
  });

  const sectionList = reportSections.filter((section) => {
    if (section.type == "ReportIllustrationOverlaySubsection") {
      return section;
    }
  });

  const index = sectionList.indexOf(currentSection);

  const handleNextSection = () => {
    let nextSection =
      index < sectionList.length - 1
        ? sectionList[index + 1].anchor
        : "Conclusion";

    setActiveSection(nextSection);

    if (index == 0 || nextSection == "Conclusion") {
      setActiveStory(null);
    }
  };

  let handlePrevSection = () => {
    let prevSection = index == 0 ? null : sectionList[index - 1].anchor;

    if (index == 0) {
      setActiveStory(null);
    } else if (index == 1) {
      const firstStory = reportSections.find(
        (section) => section.type == "story" && section.anchor
      );
      setActiveStory(firstStory);
    }
    setActiveSection(prevSection);
  };

  return (
    <header
      className={`w-full ${
        activeSection
          ? currentSection.colorTheme == "gold"
            ? `bg-gold-pbrcustomdark text-white`
            : `transition-colors delay-1000 duration-1000 bg-${currentSection.colorTheme}-900 text-white`
          : ``
      }`}
      id="reportHeader"
    >
      <div
        className={`responsive-container w-full max-h-32 flex flex-row justify-between pt-8 pb-4 relative`}
      >
        <div className="">
          <span className="text-7xl font-sans font-black spacing-y-sm">
            {activeSection ? `Envisioning` : `Envisioning...`}
          </span>
        </div>

        {activeSection && (
          <div>
            <NavigationArrows
              handleNextSection={handleNextSection}
              handlePrevSection={handlePrevSection}
            />
          </div>
        )}
      </div>
    </header>
  );
};

export default ReportHero2022;
