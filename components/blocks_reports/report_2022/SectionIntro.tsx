import { useEffect, useState } from "react";
import classNames from "classnames";
import MarkdownComponent from "utils/MarkdownComponent";

import StorySection from "./StorySection/StorySection";
// import StorySection from "../report_2021/StorySection/StorySection";
import { LinkListItem } from "./Atoms/LinkListItem";
import ArrowDown from "./Atoms/ArrowDown";

const SectionIntro = ({
  section,
  i,
  openSection,
  setOpenSection,
  openStory,
  setOpenStory,
}) => {
  const [isStoryOpen, setIsStoryOpen] = useState(false)
  useEffect(() => {
    if (openStory !== null) {
      setIsStoryOpen(true);
    } else {
      setIsStoryOpen(false)
    }
  }, [openStory])

  const isOpen = section.anchor == openSection;
  const isHidden = section.anchor !== openSection && openSection !== null;

  const openStyles = classNames({
    "text-gold-900": section.colorTheme == "gold",
    "text-plum-500": section.colorTheme == "plum",
    "text-sage-500": section.colorTheme == "sage",
    "text-purple-500": section.colorTheme == "purple",
    "text-navy-500": section.colorTheme == "navy",
  });

  const hoverStyles =
    !isOpen &&
    classNames({
      "group-hover:text-gold-900": section.colorTheme == "gold",
      "group-hover:text-plum-500": section.colorTheme == "plum",
      "group-hover:text-sage-500": section.colorTheme == "sage",
      "group-hover:text-purple-500": section.colorTheme == "purple",
      "group-hover:text-navy-500": section.colorTheme == "navy",
    });

  const borderStyles =
    !isOpen &&
    classNames({
      // "hover:border-t-2 hover:border-gold-900": section.colorTheme == "gold",
      "hover:border-t-2 hover:border-plum-500": section.colorTheme == "plum",
      "hover:border-t-2 hover:border-sage-500": section.colorTheme == "sage",
      "hover:border-t-2 hover:border-purple-500": section.colorTheme == "purple",
      "hover:border-t-2 hover:border-navy-500": section.colorTheme == "navy",
    });

  const bgStyles = classNames({
    "bg-gold-50": section.colorTheme == "gold",
    "bg-plum-50": section.colorTheme == "plum",
    "bg-sage-50": section.colorTheme == "sage",
    "bg-purple-50": section.colorTheme == "purple",
    "bg-navy-50": section.colorTheme == "navy",
  });

  return (
    <section
      id={`${section.anchor}`}
      className={`${isHidden ? "hidden" : "group"} ${
        isOpen ? isStoryOpen ? "" : "mt-2" : i == 1 ? "mt-2" : "border-t-2 border-gray-200"
      } ${borderStyles}`}
      tabIndex={0}
    >
      {!isStoryOpen &&
        <div
          className="responsive-container w-full pb-8"
          onClick={() => setOpenSection(isOpen ? null : section.anchor)}
        >
          <div
            className={`flex flex-row justify-between items-baseline ${
              isOpen ? openStyles : "text-gray-300"
            } ${hoverStyles} group-hover:cursor-pointer`}
          >
            <span className="text-7xl tracking-[0.015em] font-sans font-black mt-[-15px]">
              {section.title}
            </span>

            <span
              className={`opacity-0 ${
                !isOpen && "group-hover:opacity-100"
              } min-w-max font-sans font-semibold type-preset-6`}
            >
              <div className="flex flex-row items-center gap-1">
                {section.themeNum == "1" ? "Read Introduction" : "Read Stories"}
                <ArrowDown color={section.colorTheme} size="default" />
              </div>
            </span>
          </div>
        </div>
      }

      {isOpen && (
        <div className={`h-full`}>
          <div className={`flex flex-col gap-8`}>
            {!isStoryOpen &&
              <div
                className={`responsive-container w-full flex justify-end font-serif mt-8 text-3xl font-light ${openStyles}`}
              >
                <div className={"w-2/3"}>
                  <MarkdownComponent content={section.body} />
                </div>
              </div>
            }

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
                        openStory={openStory}
                        setOpenStory={setOpenStory}
                      />
                    </li>
                  );
                })}
            </ul>
          </div>
        </div>
      )}
    </section>
  );
};

export default SectionIntro;
