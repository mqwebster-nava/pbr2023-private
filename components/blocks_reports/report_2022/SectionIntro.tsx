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
  url,
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

  useEffect(() => {
    if (url.asPath.includes(section.anchor)) {
      setOpenSection(section.anchor)
    }
  }, [url])

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
      className={`scroll-mt-[100vh] ${isHidden ? "hidden" : "group"} ${
        isOpen ? isStoryOpen ? "" : "mt-2" : i == 1 ? "mt-2" : "border-t-2 border-gray-200"
      } ${borderStyles}`}
      tabIndex={0}
    >
      {!isStoryOpen &&
          <div
            className="responsive-container w-full pb-8"
            onClick={() => {
              setOpenSection(isOpen ? null : section.anchor)
              if (isOpen) {
                url.push('/public-benefit-reports/2022')
              } else {
                url.push(`#${section.anchor}`)
              }
            }}
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

        <div className={isOpen ? `h-full relative` : `hidden`}>
          <div className={`flex flex-col ${isStoryOpen ? `gap-0` : `gap-8`}`}>
            {!isStoryOpen &&
              <div
                className={`responsive-container w-full flex justify-end font-serif mt-8 text-3xl font-light ${openStyles}`}
              >
                <div className={"w-2/3"}>
                  <MarkdownComponent content={section.body} />
                </div>
              </div>
            }

            <div className={`sticky top-[70px] z-10`}>
              {isStoryOpen &&
                <DropdownMenu items={section.items} colorTheme={section.colorTheme} sectionAnchor={section.anchor} openStory={openStory} setOpenStory={setOpenStory} />
              }
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
                        openStory={openStory}
                        setOpenStory={setOpenStory}
                      />
                    </li>
                  );
                })}
            </ul>
          </div>
        </div>
    </section>
  );
};

export default SectionIntro;

const DropdownMenu = ({items, colorTheme, sectionAnchor, openStory, setOpenStory}) => {
  const [selectedOption, setSelectedOption] = useState(items[0].title);
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const selectOption = (option) => {
    setSelectedOption(option);
    setOpenStory(option);
    setIsOpen(false);
  };

  const availableOptions = items.filter((option) => option.title !== selectedOption);

  return (
    <div className={`relative z-40 w-full font-serif font-semibold type-preset-3 text-${colorTheme}-900 border-b-[1px] border-${colorTheme}-900`}>
      <div className={`w-full ${isOpen ? `bg-white hover:bg-${colorTheme}-50` : `bg-${colorTheme}-50`}`}>
        <div className={`responsive-container`}>
          <button
            type="button"
            className={`inline-flex w-full py-md focus:outline-none focus:ring-none`}
            id="dropdown-menu-button"
            onClick={toggleDropdown}
          >
            <div className={``}>
              {selectedOption}
            </div>
          </button>
        </div>
      </div>

      {isOpen && (
        <div className={`absolute w-full border-b-[1px] border-${colorTheme}-900`}>
          <div className={``} role="menu" aria-orientation="vertical" aria-labelledby="dropdown-menu-button">
            {availableOptions.map((option, index) => (
              <div key={index} className={`w-full border-t-[1px] border-${colorTheme}-900 bg-white hover:bg-${colorTheme}-50`}>
                <a
                  href={`2022#${sectionAnchor}--${option.anchor}`}
                  className="flex w-full py-md responsive-container"
                  role="menuitem"
                  onClick={() => selectOption(option.title)}
                >
                  {option.title}
                </a>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
