import Logo from "components/wrapper/Navbar/Logo";
import { useEffect, useRef, useState } from "react";
import TableOfContentsSection from "./TableOfContents";

const ReportNavbar = ({  contentBlocks, activeSection, sections, percent}) => {

  const [isShowingMenu, setIsShowingMenu] = useState(false);
  let navBG = "purple"
  if (activeSection){
    const sectionInfo = sections.find(
      (section) => section.anchor === activeSection
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
              <CloseSVG/>
            ) : (
              <OpenSVG/>
            )}
          </button>
        </div>
      </div>
      <div className="h-md bg-sage-50 flex basis-6">
        {sections.map((section, i)=>{
          let s = `bg-${section.colorTheme}-50`
          
          if(activeSection && (sections.findIndex(
            (section) => section.anchor === activeSection
          ) > i) ){
            s = `bg-${section.colorTheme}-900`
          }
          return ( <div className={`h-full w-[150px] ${s}`}>
            {  <div style={{width:`${activeSection=== section.anchor ? percent: 0}%`}}className={`h-full bg-${section.colorTheme}-900`}></div>}
          </div>)
        })}
      </div>
      <div className="overflow-scroll">
        {isShowingMenu ? (
          <TableOfContentsSection
            contentBlocks={contentBlocks}
            onClick={() => setIsShowingMenu(false)}
          />
        ) : null}
      </div>
    </div>
  );
};


const CloseSVG = () => <svg
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

const OpenSVG = () => 
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
