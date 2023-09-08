import { useEffect, useState } from "react";
import classNames from "classnames";
import MarkdownComponent from "utils/MarkdownComponent";
import SlideDown from "react-slidedown";

import StorySection from "./StorySection/StorySection";
import ArrowDown from "./Atoms/Arrow";
import StoriesDropdownMenu from "./Atoms/StoriesDropdownMenu";
import NavigationArrows from "./Atoms/NavigationArrows";

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

  let currentSection = section.anchor == activeSection;

  useEffect(() => {
    setSectionPct(0);
    setIsSectionOpen(currentSection);
    setIsSectionHidden(activeSection && !currentSection);
  }, [activeSection]);

  useEffect(() => {
    const onScroll = () => {
      let sectionEl = document
        .getElementById(section.anchor)
        .querySelector("ul");

      let sectionBot = Math.max(
        Math.round(sectionEl?.getBoundingClientRect().bottom),
        0
      );
      let sectionH = sectionEl?.offsetHeight;

      setSectionPct(100 - (sectionBot / sectionH) * 100);
    };

    if (activeStory) {
      window.addEventListener("scroll", onScroll);
      return () => window.removeEventListener("scroll", onScroll);
    }
  }, [activeStory, sectionPct]);

  const makeSlideUpAnimation = (elementId, delay) => {
    let el = document.getElementById(elementId);
    let an = el.animate(
      [
        { transform: `translateY(${el.offsetTop}px)` },
        { transform: `translateY(0px)` },
      ],
      {
        duration: 600,
        iterations: 1,
        fill: "forwards",
        easing: "ease",
        delay: delay,
      }
    );
    return an;
  };

  const toggleSection = () => {
    if (section.themeNum == 1) {
      setActiveSection(section.anchor);
      setActiveStory(section.storiesCollection.items[0].anchor);
    } else {
      makeSlideUpAnimation(section.anchor, 0);
      setActiveSection(section.anchor);
      setActiveStory(null);
    }
  };

  let handleNextSection = () => {
    let index = sectionList.indexOf(activeSection);
    let nextSection =
      index < sectionList.length - 1 ? sectionList[index + 1] : "Conclusion";

    setActiveSection(nextSection);
    window.scrollTo(0, 0);
  };

  let handlePrevSection = () => {
    let index = sectionList.indexOf(activeSection);
    let prevSection = index == 0 ? null : sectionList[index - 1];

    if (index == 0) {
      setActiveStory(null);
    }
    setActiveSection(prevSection);
    window.scrollTo(0, 0);
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
          : section.colorTheme == "gold"
          ? `bg-gold-pbrcustomdark`
          : `bg-${section.colorTheme}-900`
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
      <div
        className={`responsive-container w-full min-h-[170px] pb-8 ${
          !activeSection && `group-hover:cursor-pointer`
        }`}
        onClick={(e) => (activeSection ? e.preventDefault() : toggleSection())}
      >
        <div
          className={`flex flex-row justify-between items-baseline group-hover:text-white ${openStyles}`}
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

      <div className={`${!isSectionOpen ? `hidden` : ``}`}>
        <div className={`flex flex-col gap-8`}>
          <div
            className={`responsive-container w-full flex justify-end font-serif mt-8 text-3xl font-light ${openStyles}`}
          >
            <div className={"w-2/3"}>
              <MarkdownComponent content={section.body} />
            </div>
          </div>

          <div className={`relative`}>
            <div className={`sticky top-[100px] z-10`}>
              {activeStory && (
                <div
                  className={`w-full h-2 ${
                    currentSection ? `bg-${section.colorTheme}-50` : `bg-white`
                  }`}
                >
                  <div
                    className={`h-full ${
                      currentSection
                        ? `bg-${section.colorTheme}-900`
                        : `bg-white`
                    }`}
                    style={{ width: `${sectionPct}%` }}
                  ></div>
                </div>
              )}
              <StoriesDropdownMenu
                items={section.items}
                colorTheme={section.colorTheme}
                sectionAnchor={section.anchor}
                activeStory={activeStory}
                setActiveStory={setActiveStory}
                parentSectionOpen={isSectionOpen}
              />
            </div>

            {isSectionOpen && activeStory && (
              <div
                className={`text-${section.colorTheme}-900 bg-${section.colorTheme}-50`}
              >
                <ul className={`relative`}>
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

                <div className={`w-full h-[100vh]`}>
                  <div className="responsive-container">
                    <NavigationArrows
                      color={section.colorTheme}
                      handleNextSection={handleNextSection}
                      handlePrevSection={handlePrevSection}
                    />
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionIntro;
