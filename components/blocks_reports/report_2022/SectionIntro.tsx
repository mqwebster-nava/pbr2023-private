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

  const toggleSection = () => {
    if (activeSection === section.anchor) {
      setActiveSection(null);
    } else {
      setActiveSection(section.anchor);
    }
  };

  const openStyles = classNames({
    "text-gold-900": section.colorTheme == "gold",
    "text-plum-500": section.colorTheme == "plum",
    "text-sage-500": section.colorTheme == "sage",
    "text-purple-500": section.colorTheme == "purple",
    "text-navy-500": section.colorTheme == "navy",
  });

  const hoverStyles = classNames({
      "group-hover:text-gold-900": section.colorTheme == "gold",
      "group-hover:text-plum-500": section.colorTheme == "plum",
      "group-hover:text-sage-500": section.colorTheme == "sage",
      "group-hover:text-purple-500": section.colorTheme == "purple",
      "group-hover:text-navy-500": section.colorTheme == "navy",
    });

  const borderStyles = classNames({
      // "hover:border-t-2 hover:border-gold-900": section.colorTheme == "gold",
      "hover:border-t-2 hover:border-plum-500": section.colorTheme == "plum",
      "hover:border-t-2 hover:border-sage-500": section.colorTheme == "sage",
      "hover:border-t-2 hover:border-purple-500":
        section.colorTheme == "purple",
      "hover:border-t-2 hover:border-navy-500": section.colorTheme == "navy",
    });

  return (
    <section
      id={`${section.anchor}`}
      className={`scroll-mt-[100vh] group mt-2 ${borderStyles}`}
      tabIndex={0}
      onClick={toggleSection}
    >
        <div className="responsive-container w-full pb-8">
          <div
            className={`flex flex-row justify-between items-baseline group-hover:cursor-pointer text-gray-300 ${hoverStyles}`}
          >
            <span className="text-7xl tracking-[0.015em] font-sans font-black mt-[-15px]">
              {section.title}
            </span>
            <span
              className={`opacity-0 group-hover:opacity-100 min-w-max font-sans font-semibold type-preset-6`}
            >
              <div className="flex flex-row items-center gap-1">
                {section.themeNum == "1" ? "Read Introduction" : "Read Stories"}
                <ArrowDown color={section.colorTheme} size="default" />
              </div>
            </span>
          </div>
        </div>

      <div className={`h-full ${!isSectionOpen && `hidden`}`}>
        <div className={`flex flex-col gap-8`}>
            <div
              className={`responsive-container w-full flex justify-end font-serif mt-8 text-3xl font-light ${openStyles}`}
            >
              <div className={"w-2/3"}>
                <MarkdownComponent content={section.body} />
              </div>
            </div>

          <div className={`relative`}>
            <div className={`sticky top-[70px] z-10`}>
                <StoriesDropdownMenu
                  items={section.items}
                  colorTheme={section.colorTheme}
                  sectionAnchor={section.anchor}
                  activeStory={activeStory}
                  setActiveStory={setActiveStory}
                  parentSectionOpen={isSectionOpen}
                />
            </div>
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
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionIntro;
