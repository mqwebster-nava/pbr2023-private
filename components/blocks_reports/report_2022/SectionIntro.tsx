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
  const [sectionPct, setSectionPct] = useState(0);
  const [prevSection, setPrevSection] = useState(null);
  const [nextSection, setNextSection] = useState(null);

  let currentSection = section.anchor == activeSection;

  useEffect(() => {
    if (activeSection && activeSection == section.anchor && activeStory) {
      let sectionIndex = sectionList.indexOf(section.anchor);

      if (sectionIndex == 0) {
        setPrevSection(null);
        setNextSection(sectionList[sectionIndex + 1]);
      }
      if (sectionIndex > 0 && sectionIndex < sectionList.length - 1) {
        setPrevSection(sectionList[sectionIndex - 1]);
        setNextSection(sectionList[sectionIndex + 1]);
      }
      if (sectionIndex == sectionList.length - 1) {
        setPrevSection(sectionList[sectionIndex - 1]);
        setNextSection(null);
      }
    }
  }, [activeSection, activeStory]);

  useEffect(() => {
    const onScroll = () => {
      let sectionEl = document.getElementById(section.anchor);
      let sectionTop = sectionEl.offsetTop;
      let sectionH = sectionEl.offsetHeight - 70;
      let sectionBot = Math.max((sectionEl.getBoundingClientRect().bottom - sectionTop - 70), 0);

      setSectionPct(((sectionH - Math.round(sectionBot) + 70) / (sectionH - sectionTop)) * 100);
    }

    if (activeStory) {
      window.addEventListener("scroll", onScroll);
      return () => window.removeEventListener("scroll", onScroll);
    }
  }, [activeStory, sectionPct])

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

  const openStyles = isSectionOpen
    ? classNames({
        "text-white bg-gold-pbrcustomdark": section.colorTheme == "gold",
        "text-white bg-plum-900": section.colorTheme == "plum",
        "text-white bg-sage-900": section.colorTheme == "sage",
        "text-white bg-purple-900": section.colorTheme == "purple",
        "text-white bg-navy-900": section.colorTheme == "navy",
      })
    : `text-gray-300`;

  const bgStyles = !isSectionOpen
    ? classNames({
        "hover:bg-gold-900": section.colorTheme == "gold",
        "hover:bg-plum-500": section.colorTheme == "plum",
        "hover:bg-sage-500": section.colorTheme == "sage",
        "hover:bg-purple-500": section.colorTheme == "purple",
        "hover:bg-navy-500": section.colorTheme == "navy",
      })
    : ``;

  return (
    <section
      id={`${section.anchor}`}
      className={`w-full group ${
        !activeSection
          ? section.themeNum == 1
            ? `border-none`
            : `border-t-2 border-gray-300 hover:border-none`
          : section.colorTheme == 'gold' ? `bg-gold-pbrcustomdark` : `bg-${section.colorTheme}-900`
      } ${bgStyles} ${isSectionHidden ? `hidden` : ``}`}
      tabIndex={0}
      onMouseEnter={() => {
        let hero = document.getElementById("reportHeader");

        if (!activeSection && section.themeNum == 1) {
          hero.classList.add(`bg-${section.colorTheme}-900`, `text-white`);
        }
      }}
      onMouseLeave={() => {
        let hero = document.getElementById("reportHeader");

        if (!activeSection && section.themeNum == 1) {
          hero.classList.remove(`bg-${section.colorTheme}-900`, `text-white`);
        }
      }}
    >
      {!activeStory && (
        <div
          className="responsive-container w-full pb-8"
          onClick={toggleSection}
        >
          <div
            className={`flex flex-row justify-between items-baseline group-hover:cursor-pointer group-hover:text-white ${openStyles}`}
          >
            <span className="text-7xl tracking-[0.015em] font-sans font-black mt-[-15px]">
              {section.title}
            </span>
            <span
              className={
                isSectionOpen
                  ? `opacity-0`
                  : `opacity-0 group-hover:opacity-100 min-w-max font-sans font-semibold type-preset-6`
              }
            >
              <div className="flex flex-row items-center gap-1">
                {section.themeNum == "1" ? "Read Introduction" : "Read Stories"}
                <ArrowDown color={"white"} size="default" />
              </div>
            </span>
          </div>
        </div>
      )}

      <div className={`${!isSectionOpen ? `hidden` : ``}`}>
        <div className={`flex flex-col gap-8`}>
          {!activeStory && (
            <div
              className={`responsive-container w-full flex justify-end font-serif mt-8 text-3xl font-light ${openStyles}`}
            >
              <div className={"w-2/3"}>
                <MarkdownComponent content={section.body} />
              </div>
            </div>
          )}

          <div className={`relative`}>
            <div className={`sticky top-[100px] z-10`}>
              {activeStory &&
                <div className={`w-full h-2 ${currentSection ? `bg-${section.colorTheme}-50` : `bg-white`}`}>
                  <div className={`h-full ${currentSection ? `bg-${section.colorTheme}-900` : `bg-white`}`} style={{width: `${sectionPct}%`}}></div>
                </div>
              }
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
              <ul className={`relative text-${section.colorTheme}-900 bg-${section.colorTheme}-50`}>
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
