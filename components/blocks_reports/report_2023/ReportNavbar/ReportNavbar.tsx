import Logo from "components/wrapper/Navbar/Logo";
import { useState } from "react";

import { CloseSVG, OpenSVG } from "./SVGs";
import ReportMenu from "./ReportMenu";
import SlideDown from "react-slidedown";

const ReportNavbar = ({
  reportSections,
  contentBlocks,
  activeSection,
  setActiveSection,
  setActiveStory,
}) => {
  const [isShowingMenu, setIsShowingMenu] = useState(false);

  const menuItemClick = (e) => {
    let clickedItem = reportSections.find(
      (section) => section.anchor === e.target.dataset.refid
    );

    if (clickedItem?.type === "ReportIllustrationOverlaySubsection") {
      setActiveSection(clickedItem.anchor);

      setActiveStory(null);

      setTimeout(() => {
        window.scrollTo(0, 0)
      }, 50)
    } else if (clickedItem?.type === "story") {
      setActiveSection(clickedItem.parentAnchor);

      setActiveStory(clickedItem.anchor);
      setTimeout(() => {
        if (window.innerWidth < 768) {
          window.scrollTo({ top: document.getElementById(clickedItem.anchor).offsetTop + 336, behavior: 'smooth' })
        } else if (window.innerWidth > 1024) {
          window.scrollTo({ top: document.getElementById(clickedItem.anchor).offsetTop + 620, behavior: 'smooth' })
        } else if (window.innerWidth > 768 && window.innerWidth < 1024) {
          window.scrollTo({ top: document.getElementById(clickedItem.anchor).offsetTop + 552, behavior: 'smooth' })
        }
      }, 50)
    } else if (clickedItem?.anchor == "conclusion") {
      setActiveSection('conclusion');

      setActiveStory(null);

      setTimeout(() => {
        window.scrollTo(0, 0)
      }, 50)
    } else {
      setIsShowingMenu(false);
    }
    setIsShowingMenu(false);
  };

  return (
    <div
      className={`block sticky top-0 z-50 w-full h-full bg-white transition-all duration-100 ${activeSection ? `` : `border-b-2 border-gray-300`} ${!isShowingMenu && "overflow-clip"}`}
    >
      <div className="h-[60px] md:min-h-[80px] lg:min-h-[100px] responsive-container grid items-center grid-cols-6 gap-x-2.5 gap-y-8 md:grid-cols-12 md:gap-8`">
        <div className="hidden md:block col-span-2">
          <Logo isMobile={false} />
        </div>
        <div className="block md:hidden col-span-1">
          <Logo isMobile={true} />
        </div>

        <a
          href="/public-benefit-reports/2023"
          className="ml-8 md:ml-0 lg:ml-11 col-span-3 md:col-span-4 w-[120%] md:w-full flex flex-col text-xs md:type-preset-6 font-sans text-black tracking-[0.015em]"
          onClick={() => {
            if (isShowingMenu) setIsShowingMenu(false);
          }}
        >
          <span className="font-semibold">Public Benefit Report</span>
          <span className="">2023</span>
        </a>

        <div className="col-span-1 col-start-6 md:col-start-12 flex justify-end">
          <button
            aria-label="menu"
            aria-expanded={isShowingMenu ? "true" : "false"}
            onClick={() => {
              setIsShowingMenu(!isShowingMenu);
            }}
            className="pl-auto"
          >
            {isShowingMenu ? <CloseSVG /> : <OpenSVG />}
          </button>
        </div>
      </div>

      <div
        className={`absolute w-full h-[100vh] transition-all duration-100 lg:${isShowingMenu ? `border-t-[1px] border-black overflow-scroll` : `border-none`}`}
      >
        <div className="h-full bg-white lg:py-4xl">
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