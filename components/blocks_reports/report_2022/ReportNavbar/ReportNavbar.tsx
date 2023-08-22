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

const ReportNavbar = ({ reportSections, contentBlocks, activeSection, activeStory }) => {
  const [isShowingMenu, setIsShowingMenu] = useState(false);
  const [sectionPct, setSectionPct] = useState(0);

  let currentSection = reportSections.find((section) => {
    return activeStory && (section.anchor === activeSection) ? section : null;
  });

  useEffect(() => {
    const onScroll = (e) => {
      let section = document.getElementById(currentSection.anchor);
      let sectionTop = section.offsetTop;
      let sectionH = section.offsetHeight - 70;
      let sectionBot = Math.max((section.getBoundingClientRect().bottom - sectionTop - 70), 0);

      setSectionPct(((sectionH - Math.round(sectionBot) + 70) / (sectionH - sectionTop)) * 100);
    }

    if (activeStory) {
      window.addEventListener("scroll", onScroll);
      return () => window.removeEventListener("scroll", onScroll);
    }
  }, [activeStory, sectionPct])

  return (
    <div
      className={`block sticky top-0 z-50 w-full h-full bg-white border-b-[1px] border-black ${
        !isShowingMenu && "overflow-clip"
      }`}
    >
      <div className="responsive-container flex flex-wrap items-center h-[100px] ">
        <div className="w-[16%]">
          <Logo isMobile={true} />
        </div>
        <a
          href="/public-benefit-reports/2022"
          className="type-preset-7 font-sans text-black tracking-[0.015em]"
          onClick={() => {
            if (isShowingMenu) setIsShowingMenu(false);
          }}
        >
          <h2 className="font-semibold">
            Public Benefit Report
          </h2>
          <h2 className="">
            2022
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

      {activeStory &&
        <div className={`w-full h-2 ${currentSection ? `bg-${currentSection.colorTheme}-50` : `bg-white`}`}>
          <div className={`h-full ${currentSection ? `bg-${currentSection.colorTheme}-900` : `bg-white`}`} style={{width: `${sectionPct}%`}}></div>
        </div>
      }

      <div className={`absolute w-full border-black border-t-[1px] ${isShowingMenu ? `top-[100px]` : ``}`}>
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
