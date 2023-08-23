import { useEffect, useState } from "react";
import classNames from "classnames";
import MarkdownComponent from "utils/MarkdownComponent";

import StorySection from "./StorySection/StorySection";
// import StorySection from "../report_2021/StorySection/StorySection";
import { LinkListItem } from "./Atoms/LinkListItem";
import ArrowDown from "./Atoms/ArrowDown";
import StoriesDropdownMenu from "./Atoms/StoriesDropdownMenu";

const SectionIntro = ({
  section,
  i,
  activeSection,
  setActiveSection,
  activeStory,
  setActiveStory,
  sectionList,
}) => {
  const [isSectionOpen, setIsSectionOpen] = useState(false);
  const [isSectionHidden, setIsSectionHidden] = useState(false);

  useEffect(() => {
    if (activeSection === section.anchor) {
      setIsSectionOpen(true);
    } else {
      setIsSectionOpen(false);
    }
  }, [activeSection]);

  useEffect(() => {
    if (activeSection && activeSection !== section.anchor) {
      setIsSectionHidden(true);
    } else {
      setIsSectionHidden(false);
    }
  }, [activeSection]);

  const toggleSection = () => {
    setActiveSection(activeSection === section.anchor ? null : section.anchor);
    setActiveStory(null);
  };

  const openStyles = isSectionOpen ? classNames({
    "text-gold-900": section.colorTheme == "gold",
    "text-plum-500": section.colorTheme == "plum",
    "text-sage-500": section.colorTheme == "sage",
    "text-purple-500": section.colorTheme == "purple",
    "text-navy-500": section.colorTheme == "navy",
  }) : `text-gray-300`;

  const hoverStyles = !isSectionOpen ? classNames({
      "group-hover:text-gold-900": section.colorTheme == "gold",
      "group-hover:text-plum-500": section.colorTheme == "plum",
      "group-hover:text-sage-500": section.colorTheme == "sage",
      "group-hover:text-purple-500": section.colorTheme == "purple",
      "group-hover:text-navy-500": section.colorTheme == "navy",
    }) : ``;

  const borderStyles = !isSectionOpen ? section.themeNum == 1 ? `border-none` : classNames({
      "border-gray-300 border-t-2 hover:border-gold-900": section.colorTheme == "gold",
      "border-gray-300 border-t-2 hover:border-plum-500": section.colorTheme == "plum",
      "border-gray-300 border-t-2 hover:border-sage-500": section.colorTheme == "sage",
      "border-gray-300 border-t-2 hover:border-purple-500": section.colorTheme == "purple",
      "border-gray-300 border-t-2 hover:border-navy-500": section.colorTheme == "navy",
    }) : ``;

  return (
    <section
      id={`${section.anchor}`}
      className={`w-full group ${borderStyles} ${isSectionHidden ? `hidden` : ``}`}
      tabIndex={0}
    >
      {!activeStory && <div className="responsive-container w-full pb-8" onClick={toggleSection}>
        <div
          className={`flex flex-row justify-between items-baseline group-hover:cursor-pointer ${hoverStyles} ${openStyles}`}
        >
          <span className="text-7xl tracking-[0.015em] font-sans font-black mt-[-15px]">
            {section.title}
          </span>
          <span
            className={isSectionOpen ? `opacity-0` : `opacity-0 group-hover:opacity-100 min-w-max font-sans font-semibold type-preset-6`}
          >
            <div className="flex flex-row items-center gap-1">
              {section.themeNum == "1" ? "Read Introduction" : "Read Stories"}
              <ArrowDown color={section.colorTheme} size="default" />
            </div>
          </span>
        </div>
      </div>}

      <div className={`h-full ${!isSectionOpen ? `hidden` : ``}`}>
        <div className={`flex flex-col gap-8`}>
            {!activeStory && <div
              className={`responsive-container w-full flex justify-end font-serif mt-8 text-3xl font-light ${openStyles}`}
            >
              <div className={"w-2/3"}>
                <MarkdownComponent content={section.body} />
              </div>
            </div>}

          <div className={`relative`}>
            <div className={`sticky top-[109px] z-10`}>
                <StoriesDropdownMenu
                  items={section.items}
                  colorTheme={section.colorTheme}
                  sectionAnchor={section.anchor}
                  activeStory={activeStory}
                  setActiveStory={setActiveStory}
                  parentSectionOpen={isSectionOpen}
                />
            </div>

            {(isSectionOpen && activeStory) &&
              <ul className={``}>
                {section.items
                  .filter((story) => story.hideStory !== true)
                  .map((story) => {
                    return (
                      <li key={story.anchor}>
                        <StorySection
                          key={story.anchor}
                          story={story}
                          colorTheme={section.colorTheme}
                          sectionAnchor={section.anchor}
                          nextSection={""}
                          nextSectionTitle={""}
                          nextSectionType={""}
                          activeStory={activeStory}
                          setActiveStory={setActiveStory}
                        />
                      </li>
                    );
                  })}
              </ul>
            }
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionIntro;
