import Logo from "components/wrapper/Navbar/Logo";
import { useEffect, useRef, useState } from "react";
import SlideDown from "react-slidedown";
import TableOfContentsSection from "./TableOfContents";

const ReportNavbar = ({ entry, activeSection, sections }) => {
  const [currentSectionPct, setCurrentSectionPct] = useState(0);
  const ref = useRef();
  useEffect(() => {
    const onScroll = () => {
      const offset = window.pageYOffset;
      if (!activeSection) return;
      const sectionInfo = sections.find(
        (section) => section.titleId === activeSection
      );
      if (!sectionInfo) return;
     
      const offsetPct =  Math.round(
        (100 * (offset - sectionInfo.triggerTop)) /
          (sectionInfo.triggerBottom - sectionInfo.triggerTop)
      );
      if(offsetPct < 0  || offsetPct >=100)return;
       setCurrentSectionPct(offsetPct);
      
    };
    window.removeEventListener("scroll", onScroll);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  });

  const [isShowingMenu, setIsShowingMenu] = useState(false);
  let navBG = "purple"
  if (activeSection){
    const sectionInfo = sections.find(
      (section) => section.titleId === activeSection
    );
    navBG = sectionInfo.colorTheme;
  }

  return (
    <div className={`block sticky top-0  z-50 w-full bg-${navBG}-900`}>
      <div className=" responsive-container flex flex-wrap items-center justify-between h-[60px]">
        <Logo isMobile={true} color="white" />
        <a href="#reportHeader">
        <h2 className="type-preset-6 font-serif text-white">
          Public Benefit Report 2021
        </h2>
        </a>

        <div className="block ">
          <button
            aria-label="menu"
            aria-expanded={isShowingMenu ? "true" : "false"}
            onClick={() => {
              setIsShowingMenu(!isShowingMenu);
            }}
            className="font-sans text-white-900  border-grey  "
          >
            {isShowingMenu ? (
              <svg
                width="20"
                height="25"
                viewBox="0 0 23 23"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M22.0003 1L1 22.0003M1 1L22.0003 22.0003"
                  stroke="white"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            ) : (
              <svg
                width="20"
                height="25"
                viewBox="0 0 27 22"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M26.3997 1H1"
                  stroke="white"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M26.3997 10.7695H1"
                  stroke="white"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M26.3997 20.5391H1"
                  stroke="white"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            )}
          </button>
        </div>
      </div>
      <div className="h-md bg-sage-50 flex basis-6">
        {sections.map((section, i)=>{
          let s = `bg-${section.colorTheme}-50`
          
          if(activeSection && (sections.findIndex(
            (section) => section.titleId === activeSection
          ) > i) ){
            s = `bg-${section.colorTheme}-900`
          }
          return ( <div className={`h-full w-[150px] ${s}`}>
            {  <div style={{width:`${activeSection=== section.titleId ? currentSectionPct: 0}%`}}className={`h-full bg-${section.colorTheme}-900`}></div>}
          </div>)
        })}
        
        
      </div>
      <div className="overflow-scroll">
        {isShowingMenu ? (
          <TableOfContentsSection
            entry={entry}
            onClick={() => setIsShowingMenu(false)}
          />
        ) : null}
      </div>
    </div>
  );
};

export default ReportNavbar;
{
  /* <nav className="w-full  bg-white sticky top-0  z-30  pt-md">
       
<div className="responsive-container flex justify-between">
 <Logo/>
  <div className="text-white">Menu</div>
 
</div>
</nav>
/h-[70px] */
}
