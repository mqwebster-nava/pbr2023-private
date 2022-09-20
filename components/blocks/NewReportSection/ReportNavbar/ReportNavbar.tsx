import Logo from "components/wrapper/Navbar/Logo";
import { useEffect, useRef, useState } from "react";

import { CloseSVG, OpenSVG } from "./SVGs";
import ReportMenu from "./ReportMenu";


const ReportNavbar = ({  contentBlocks, reportSections}) => {
  const [activeSection, setActiveSection] = useState(null);
  const [sectionPct, setSectionPct] = useState(null);
  const [isShowingMenu, setIsShowingMenu] = useState(false);
  //let navBG = "purple"
  const getTop = (el, extraOffset)=>el.offsetTop - extraOffset;
  const getBottom = (el, extraOffset)=>getTop(el,extraOffset)+ el.offsetHeight - extraOffset;
   

  //const checkSection
  useEffect(() => {
    const onScroll = () => {
      const offset = window.pageYOffset;
      
      reportSections.forEach((section, i ) => {
        const secElement = document.getElementById(section.anchor);
        if (
          offset > getTop(secElement, 30) &&
          offset < getBottom(secElement, 30) &&
          activeSection != section.anchor
        ) {
          let oldSec = reportSections.find(
            (sec) => sec.anchor === activeSection
          );
          setActiveSection(section.anchor);
          const startPct = (oldSec && reportSections.findIndex((sec) => sec.anchor === activeSection)>i) ? 100 : 0;
          setSectionPct(startPct);
          return;
        } 
      });
      
      if (!activeSection) return;
      const secElement = document.getElementById(activeSection);
      if(!secElement) return;
      const topTrigger =  getTop(secElement, 30);
      const bottomTrigger =  getBottom(secElement, 30)
     
      const offsetPct =  Math.round(
        (100 * (offset - topTrigger)) /
          (bottomTrigger - topTrigger)
      );

      if(offsetPct < 0  || offsetPct >=100)return;
      setSectionPct(offsetPct);
    };

    window.removeEventListener("scroll", onScroll);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  });



  return (
    <div className={`block sticky top-0  z-50 w-full bg-white ${!isShowingMenu && "h-[70px] overflow-clip"}`}>
      <div className=" responsive-container flex flex-wrap items-center justify-between h-[60px] ">
        <Logo isMobile={true} color="black" />
        <a href="#reportHeader">
        <h2 className="type-preset-6 font-serif text-black">
          Public Benefit Report
        </h2>
        </a>
        <div className="block ">
          <button
            aria-label="menu"
            aria-expanded={isShowingMenu ? "true" : "false"}
            onClick={() => {
              setIsShowingMenu(!isShowingMenu);
            }}
            className="font-sans text-white  border-grey  "
          >
            {isShowingMenu ? (
              <CloseSVG/>
            ) : (
              <OpenSVG/>
            )}
          </button>
        </div>
      </div>
      <div className="h-[10px]  flex basis-6">
        {reportSections.map((section, i)=>{
          let s = `bg-white`
          
          if(activeSection && (reportSections.findIndex(
            (section) => section.anchor === activeSection
          ) > i) ){
            s = `bg-${section.colorTheme}-900`
          }
          return ( <div className={`h-full w-[150px] ${s}`}>
            {  <div style={{width:`${activeSection=== section.anchor ? sectionPct: 0}%`}}className={`h-full bg-${section.colorTheme}-900`}></div>}
          </div>)
        })}
      </div>
      <div className="overflow-scroll">
        {isShowingMenu ? (
          <ReportMenu
            contentBlocks={contentBlocks}
            onClick={() => setIsShowingMenu(false)}
          />
        ) : null}
      </div>
    </div>
  );
};

export default ReportNavbar;


 // import { LinkText } from "components/atom";
// import SlideDown from "react-slidedown";

// import classNames from "classnames";
// import { AnalyticsLabelType } from "shared_interfaces/Analytics";
// import styles from "./mobilenav.module.css";
  // if (activeSection){
  //   const sectionInfo = reportSections.find(
  //     (section) => section.anchor === activeSection
  //   );
  //   navBG = sectionInfo.colorTheme;
  // }
