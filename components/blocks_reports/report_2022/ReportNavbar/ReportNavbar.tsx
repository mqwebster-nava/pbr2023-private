/*
TODO 
- test out the sections being clickable
- having the progress bar start a little after 0% so doesn't look like a glitch
*/

import Logo from "components/wrapper/Navbar/Logo";
import { useEffect, useRef, useState } from "react";

import { CloseSVG, OpenSVG } from "./SVGs";
import ReportMenu from "./ReportMenu";
import SlideDown from "react-slidedown";

const getTop = (el, extraOffset) => el.offsetTop - extraOffset;
const getBottom = (el, extraOffset) =>
  getTop(el, extraOffset) + el.offsetHeight - extraOffset;

const getBottomEnd = (el, extraOffset) =>
  getTop(el, extraOffset) + el.offsetHeight - window.innerHeight;

const ReportNavbar = ({ reportSections, contentBlocks }) => {
  //

  const [activeSection, setActiveSection] = useState(null);
  const [sectionPct, setSectionPct] = useState(null);
  const [isShowingMenu, setIsShowingMenu] = useState(false);
  //  let navBG = "purple"

  const checkIfSectionIsActive = (section, offset, sectionIndex) => {
    const secElement = document.getElementById(section.anchor);
    if (
      secElement &&
      offset > getTop(secElement, 30) &&
      offset < getBottom(secElement, 30) &&
      activeSection != section.anchor
    ) {
      let oldSec = reportSections.find((sec) => sec.anchor === activeSection);
      setActiveSection(section.anchor);
      // Will need to figure out
      const startPct =
        oldSec &&
        reportSections.findIndex((sec) => sec.anchor === activeSection) >
          sectionIndex
          ? 100
          : 0;

      setSectionPct(startPct);
      return;
    }
  };

  //const checkSection
  // useEffect(() => {
  //   const onScroll = (e) => {
  //     if (isShowingMenu) {
  //       e.preventDefault();
  //       return;
  //     }
  //     const offset = window.pageYOffset;
  //     reportSections.forEach((section, i) => {
  //       checkIfSectionIsActive(section, offset, i);
  //     });

  //     if (!activeSection) return;
  //     const secElement = document.getElementById(activeSection);
  //     if (!secElement) return;

  //     const topTrigger = getTop(secElement, 30);
  //     // TODO add a way to adjust bottom for last element, IT should be the offset from the
  //     const isEnd =
  //       reportSections.findIndex((sec) => sec.anchor === activeSection) ===
  //       reportSections.length - 1;

  //     const bottomTrigger = isEnd
  //       ? getBottomEnd(secElement, 30)
  //       : getBottom(secElement, 30);

  //     let offsetPct = Math.round(
  //       (100 * (offset - topTrigger)) / (bottomTrigger - topTrigger)
  //     );

  //     if (isEnd && offsetPct > 90) offsetPct = 100;
  //     if (offsetPct < 0 || offsetPct > 100) return;
  //     setSectionPct(offsetPct);
  //   };

  //   window.removeEventListener("scroll", onScroll);
  //   window.addEventListener("scroll", onScroll);
  //   return () => window.removeEventListener("scroll", onScroll);
  // });

  return (
    <div
      className={`block sticky top-0 z-50 w-full bg-white border-b-[1px] border-black ${
        !isShowingMenu && "h-[70px] overflow-clip"
      }`}
    >
      <div className="responsive-container flex flex-wrap items-center h-full ">
        <div className="w-1/3">
          <Logo isMobile={true} />
        </div>
        <a
          href="#reportHeader"
          onClick={() => {
            if (isShowingMenu) setIsShowingMenu(false);
          }}
        >
          <h2 className="type-preset-6 font-serif text-black tracking-[0.015em]">
            Public Benefit Report
          </h2>
        </a>
        <div className="block ml-auto ">
          <button
            aria-label="menu"
            aria-expanded={isShowingMenu ? "true" : "false"}
            onClick={() => {
              setIsShowingMenu(!isShowingMenu);
            }}
            className="h-[60px] flex justify-center items-center px-xl -mr-xl"
          >
            {isShowingMenu ? <CloseSVG /> : <OpenSVG />}
          </button>
        </div>
      </div>
      {/* <div className="h-[10px]  flex basis-6">
        {reportSections.map((section, i) => {
          let s = `bg-white`;
          const bg =
            section.colorTheme === "gold"
              ? `bg-${section.colorTheme}-dark`
              : `bg-${section.colorTheme}-900`;

          if (
            activeSection &&
            reportSections.findIndex(
              (section) => section.anchor === activeSection
            ) > i
          ) {
            s = bg;
          }
          return (
            <div
              className={`h-full w-[150px] ${s}`}
              key={`${section.anchor}-${i}-nav`}
            >
              {
                <div
                  style={{
                    width: `${
                      activeSection === section.anchor ? sectionPct : 0
                    }%`,
                  }}
                  className={`h-full ${bg}`}
                ></div>
              }
            </div>
          );
        })}
      </div> */}
      <div className="absolute w-full">
        <div className="h-[100vh] bg-white">
          <SlideDown>
            {isShowingMenu ? (
              <ReportMenu
                activeSection={activeSection}
                contentBlocks={contentBlocks}
                onClick={() => setIsShowingMenu(false)}
              />
            ) : null}
          </SlideDown>
        </div>
      </div>
    </div>
  );
};

export default ReportNavbar;
