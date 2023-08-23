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

const ReportNavbar = ({ reportSections, contentBlocks, activeSection, setActiveSection, activeStory, setActiveStory }) => {
  const [isShowingMenu, setIsShowingMenu] = useState(false);

  const menuItemClick = (e) => {
    let clickedItem = reportSections.find((section) => section.anchor === e.target.dataset.refid);

    if (clickedItem.type === "ReportIllustrationOverlaySubsection") {
      setActiveStory(null);
      setActiveSection(clickedItem.anchor);
    } else if (clickedItem.type === "story") {
      // removes the --story from the anchor to show only section anchor
      let storySection = clickedItem.anchor.replace(/--.*/, '')
      setActiveSection(storySection);
      setActiveStory(clickedItem.anchor);
    }
    setIsShowingMenu(false);
  }

  return (
    <div
      className={`block sticky top-0 z-50 w-full h-full bg-white ${!activeStory && `border-b-[1px] border-black`} ${
        !isShowingMenu && "overflow-clip"
      }`}
    >
      <div className="responsive-container flex flex-wrap items-center h-[100px] ">
        <div className="w-[16%]">
          <Logo isMobile={false} />
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

      <div className={`absolute w-full border-black border-t-[1px] ${isShowingMenu ? `top-[100px]` : ``}`}>
        <div className="h-[100vh] bg-white">
          <SlideDown>
            {isShowingMenu ? (
              <ReportMenu
                activeSection={activeSection}
                contentBlocks={contentBlocks}
                onClick={(e) => menuItemClick(e)}
              />
            ) : null}
          </SlideDown>
        </div>
      </div>
    </div>
  );
};

export default ReportNavbar;
