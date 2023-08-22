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
  const [activeSectionId, setActiveSectionId] = useState(null);

  useEffect(() => {
    if (activeSection) {
      setActiveSectionId(activeSection);
    }
  }, [activeSection]);

  let currentSection = reportSections.find((section) => {
    if (section.anchor === activeSectionId) {
      return section;
    }
  });

  return (
    <div
      className={`block sticky top-0 z-50 w-full h-[100px] bg-white border-b-[1px] border-black ${
        !isShowingMenu && "overflow-clip"
      }`}
    >
      <div className="responsive-container flex flex-wrap items-center h-full ">
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

      <div className="absolute w-full border-black border-t-[1px]">
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
