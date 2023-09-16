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
      const sectionEl = document
        .getElementById(section.anchor)
      if (!sectionEl) return;

      const offset = window.scrollY

      const sectionTop = sectionEl.offsetTop
      const sectionBot = sectionTop + sectionEl.offsetHeight
      const sectionBotEnd = sectionBot - window.innerHeight
      setSectionPct((offset - sectionTop) / (sectionBotEnd - sectionTop) * 100);
    };

    if (activeStory) {
      window.addEventListener("scroll", onScroll);
    }
    return () => window.removeEventListener("scroll", onScroll);
  }, [activeStory, sectionPct]);

  const makeSlideUpAnimation = (elementId, delay) => {
    let el = document.getElementById(elementId);
    let an = el.animate(
      [
        { transform: `translateY(calc(${el.offsetTop}px - 170px))`, marginBottom: "100vh" },
        { transform: `translateY(0px)`, marginBottom: "0vh" },
      ],
      {
        duration: 800,
        iterations: 1,
        fill: "forwards",
        easing: "ease",
        delay: delay,
      }
    )
    return an;
  };

  const toggleSection = () => {
    if (section.themeNum == 1) {
      setActiveSection(section.anchor);
      setActiveStory(`${section.anchor}--${section.storiesCollection.items[0].anchor}`);
    } else {
      makeSlideUpAnimation(section.anchor, 0);
      setActiveSection(section.anchor);
      setActiveStory(null);
    }
    setTimeout(() => window.scrollTo(0, 0), 50)
  };

  let handleNextSection = () => {
    let index = sectionList.indexOf(activeSection);
    let nextSection =
      index < sectionList.length - 1 ? sectionList[index + 1] : "Conclusion";

    setActiveSection(nextSection);
    setActiveStory((prevStory) => {
      if (prevStory) {
        let sectionIndex = reportSections.findIndex((section) => section.anchor == nextSection);
        return reportSections[sectionIndex + 1].anchor;
      }
    });
    setTimeout(() => window.scrollTo(0, 0), 50)
  };

  let handlePrevSection = () => {
    let index = sectionList.indexOf(activeSection);
    let prevSection = index == 0 ? null : sectionList[index - 1];

    if (index == 0) {
      setActiveStory(null);
    } else if (index == 1) {
      setActiveStory("gov-services--pbr-2022-intro");
    }

    setActiveSection(prevSection);
    setTimeout(() => window.scrollTo(0, 0), 50)
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
        "hover:bg-gold-pbrcustomdark": section.colorTheme == "gold",
        "hover:bg-plum-500": section.colorTheme == "plum",
        "hover:bg-sage-500": section.colorTheme == "sage",
        "hover:bg-purple-500": section.colorTheme == "purple",
        "hover:bg-navy-500": section.colorTheme == "navy",
      })
    : ``;

  const borderStyles = !isSectionOpen && classNames({
    "border-none": section.themeNum == 1,
    "border-t-2 border-gray-300 hover:border-transparent": section.themeNum != 1,
  })

  return (
    <section
      id={`${section.anchor}`}
      className={`w-full transition-colors group ${borderStyles} ${openStyles} ${bgStyles} ${isSectionHidden ? `hidden` : ``} ${activeSection ? `duration-[2000ms]` : ` duration-[0ms]`}`}
      tabIndex={0}
    >
      <div className={`responsive-container w-full`}>
        <a
          href={`2022#${section.anchor}`}
          className={`${activeSection ? `cursor-default` : `cursor-pointer`}`}
          onClick={(e) => activeSection ? e.preventDefault() : toggleSection()}
        >
          <div
            className={`relative min-h-[170px] pb-8 flex flex-row justify-between items-baseline group-hover:text-white`}
          >
            <span className="max-w-[1096px] text-7xl tracking-[0.015em] font-sans font-black mt-[-15px]">
              {section.title}
            </span>

          {isSectionOpen ? (
            <div className="absolute top-4 right-0 responsive-container">
              <NavigationArrows
                handleNextSection={handleNextSection}
                handlePrevSection={handlePrevSection}
              />
            </div>
          ) : (
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
          )}
        </div>
      </div>

        <div className={`${!isSectionOpen ? `hidden` : ``}`}>
          <div className={`flex flex-col gap-8`}>
            {section.themeNum == 1 ? (
              <SlideDown>
                <div
                  className={`responsive-container animate-fadeIn2 w-full flex justify-end font-serif mt-8 text-3xl font-light`}
                >
                  <div className={"w-2/3"}>
                    <MarkdownComponent content={section.body} />
                  </div>
                </div>
              </SlideDown>
            ) : (
              <div
                className={`responsive-container animate-fadeIn2 w-full flex justify-end font-serif mt-8 text-3xl font-light`}
              >
                <div className={"w-2/3"}>
                  <MarkdownComponent content={section.body} />
                </div>
              </div>
            )}

            <div className="bg-white">
              <div className={`relative animate-fadeIn2 bg-${section.colorTheme}-50`}>
                <div className={`sticky top-[100px] z-10`}>
                  {activeStory && (
                    <div
                      className={`w-full h-1 overflow-hidden ${
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
                  <div className={`pb-28`}>
                    <div className={`relative responsive-container text-${section.colorTheme}-900 bg-${section.colorTheme}-50`}>
                      <ul id={`${section.anchor}--stories-list`} className={`w-full flex flex-col gap-20`}>
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

                      <div className={`absolute bottom-0 right-0`}>
                        <div className="">
                          <NavigationArrows
                            color={section.colorTheme}
                            handleNextSection={handleNextSection}
                            handlePrevSection={handlePrevSection}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
    </section>
  );
};

export default SectionIntro;
