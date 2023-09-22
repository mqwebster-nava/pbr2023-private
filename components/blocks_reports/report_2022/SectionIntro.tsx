import { useEffect, useState } from "react";
import { useRouter } from "next/router";
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
  reportSections,
}) => {
  const router = useRouter();

  const updateActive = (url) => {
    if (url == undefined) return;

    let section
    let story
    const isStory = url.includes("--");

    if (isStory) {
      section = url.split("--")[0];
      story = url;
    } else {
      section = url;
      story = null;
    }

    setActiveSection(section);
    setActiveStory(story);

    setTimeout(() => {
      if (isStory) {
        const storyEl = document.getElementById(story);
        if (storyEl) {
          storyEl.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      } else window.scrollTo(0, 0);
    }, isStory ? 50 : 0)
  }

  useEffect(() => {
    const url = router.asPath.split('#')[1];
    window.addEventListener('load', () => {updateActive(url)})
  }, [router.asPath])

  const [isSectionOpen, setIsSectionOpen] = useState(false);
  const [isSectionHidden, setIsSectionHidden] = useState(false);
  const [sectionPct, setSectionPct] = useState(0);

  let currentSection = section.anchor == activeSection;
  let sectionList = reportSections.filter((block) => {
    if (block.type == 'ReportIllustrationOverlaySubsection') return block
  }).map((block) => block.anchor)

  useEffect(() => {
    if (currentSection) {
      router.push({hash: activeStory ? activeStory : activeSection})
  }}, [activeSection, activeStory])

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
  };

  let handleNextSection = (position) => {
    let index = sectionList.indexOf(activeSection);
    let nextSection =
      index < sectionList.length - 1 ? sectionList[index + 1] : "conclusion";

    setActiveSection(nextSection);
    if ((index == 0 && position == "top") || nextSection == "conclusion") {
      setActiveStory(null);
    } else {
      setActiveStory((prevStory) => {
        if (prevStory) {
          let sectionIndex = reportSections.findIndex((section) => section.anchor == nextSection);
          return reportSections[sectionIndex + 1].anchor;
        } else return null
      });
    }
  };

  let handlePrevSection = () => {
    let index = sectionList.indexOf(activeSection);
    let prevSection = index == 0 ? null : sectionList[index - 1];

    if (index == 0) {
      setActiveStory(null);
      router.push({hash: ''})
    } else if (index == 1) {
      setActiveStory("gov-services--pbr-2022-intro");
    } else {
      setActiveStory((prevStory) => {
        if (prevStory) {
          let sectionIndex = reportSections.findIndex((section) => section.anchor == prevSection);
          return reportSections[sectionIndex + 1].anchor;
        } else return null
      });
    }

    setActiveSection(prevSection);
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

  const storyBorderStyles = classNames({
    "border-gold-pbrcustomdark": section.colorTheme == "gold",
    "border-plum-200": section.colorTheme == "plum",
    "border-sage-200": section.colorTheme == "sage",
    "border-purple-200": section.colorTheme == "purple",
    "border-navy-200": section.colorTheme == "navy",
  });

  return (
    <section
      id={`${section.anchor}`}
      className={`w-full transition-colors group scroll-mt-[100vh] ${borderStyles} ${openStyles} ${bgStyles} ${isSectionHidden ? `hidden` : ``} ${activeSection ? `duration-[2000ms]` : ` duration-[0ms]`}`}
    >
      <div className={`responsive-container w-full relative`}>
        <a
          href={`2022#${section.anchor}`}
          className={`${activeSection ? `cursor-default` : `cursor-pointer`}`}
          onClick={(e) => activeSection ? e.preventDefault() : toggleSection()}
        >
          <div
            className={`relative sm:min-h-full md:min-h-[170px] md:pb-8 flex flex-row justify-between items-baseline group-hover:text-white`}
          >
            <span className="max-w-[1096px] text-2xl md:text-7xl tracking-[0.015em] font-sans font-black relative top-[-0.64rem] md:top-[-0.84rem]">
              {section.title}
            </span>

            {/* TODO: Look into "Read Stories" arrow rotating 90deg into "Next" nav arrow */}
            {isSectionOpen ? (
              <div className="">
                <NavigationArrows
                  handleNextSection={() => handleNextSection("top")}
                  handlePrevSection={handlePrevSection}
                />
              </div>
            ) : (
              <>
                <span
                  className={`block md:hidden ${isSectionOpen ? `opacity-0` : `opacity-100`}`}
                >
                  <ArrowDown color={"gray"} size="default" />
                </span>
                <span
                className={`
                  hidden md:block
                  ${isSectionOpen
                    ? `opacity-0`
                    : `opacity-0 group-hover:opacity-100 min-w-max font-serif font-semibold type-preset-6`}`
                }
                >
                  <div className="flex flex-row items-center gap-1">
                    {section.themeNum == "1" ? "Read Introduction" : "Read Stories"}
                    <ArrowDown color={"white"} size="default" />
                  </div>
                </span>
              </>
            )}
          </div>
        </a>
      </div>

        <div className={`${!isSectionOpen ? `hidden` : ``}`}>
          <div className={`flex flex-col gap-4 md:gap-8`}>
            <div className={`font-serif mt-8 text-base leading-5 md:text-3xl md:leading-normal font-light pr-12 md:pr-0`}>
              {section.themeNum == 1 ? (
                <SlideDown>
                  <div
                    className={`responsive-container animate-fadeIn2 w-full flex justify-end`}
                  >
                    <div className={"w-full md:w-2/3"}>
                      <MarkdownComponent content={section.body} />
                    </div>
                  </div>
                </SlideDown>
              ) : (
                <div
                  className={`responsive-container animate-fadeIn2 w-full flex justify-end`}
                >
                  <div className={"w-full md:w-2/3"}>
                    <MarkdownComponent content={section.body} />
                  </div>
                </div>
              )}
            </div>

            <div className="bg-white">
              <div className={`relative animate-fadeIn2 bg-${section.colorTheme}-50`}>
                <div className={`sticky top-[100px] z-40`}>
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
                    <div className={`responsive-container text-${section.colorTheme}-900 bg-${section.colorTheme}-50`}>
                      <ul id={`${section.anchor}--stories-list`} className={`w-full flex flex-col gap-96`}>
                        {section.items
                          .filter((story) => story.hideStory !== true)
                          .map((story) => {
                            return (
                              <li key={story.anchor} className={`border-t-2 ${storyBorderStyles} first:border-transparent`}>
                                <StorySection
                                  key={story.anchor}
                                  story={story}
                                  colorTheme={section.colorTheme}
                                  sectionAnchor={section.anchor}
                                />
                              </li>
                            );
                          })}
                      </ul>

                      <div className={`relative ml-auto w-fit`}>
                        <div className="">
                          <NavigationArrows
                            color={section.colorTheme}
                            handleNextSection={() => handleNextSection("bottom")}
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
