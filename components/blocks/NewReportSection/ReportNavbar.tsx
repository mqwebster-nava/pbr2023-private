import Logo from "components/wrapper/Navbar/Logo";
import { useEffect, useRef, useState } from "react";
import { LinkText } from "components/atom";
import SlideDown from "react-slidedown";

import classNames from "classnames";
import { AnalyticsLabelType } from "shared_interfaces/Analytics";
import styles from "./mobilenav.module.css";


const ReportNavbar = ({  contentBlocks, reportSections}) => {
  const [activeSection, setActiveSection] = useState(null);
  const [sectionPct, setSectionPct] = useState(null);
  const [isShowingMenu, setIsShowingMenu] = useState(false);
  let navBG = "purple"
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


 
  if (activeSection){
    const sectionInfo = reportSections.find(
      (section) => section.anchor === activeSection
    );
    navBG = sectionInfo.colorTheme;
  }

  return (
    <div className={`block sticky top-0  z-50 w-full bg-white`}>
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
      <div className="h-md  flex basis-6">
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
  stroke="black"
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
    stroke="black"
    strokeLinecap="round"
    strokeLinejoin="round"
  />
  <path
    d="M26.3997 10.7695H1"
    stroke="black"
    strokeLinecap="round"
    strokeLinejoin="round"
  />
  <path
    d="M26.3997 20.5391H1"
    stroke="black"
    strokeLinecap="round"
    strokeLinejoin="round"
  />
</svg>

export default ReportNavbar;



const TableOfContentsSection = ({ contentBlocks, onClick=()=>{} }) => {
   // Have the bottom rule not have a hr
    return (
      <section className={` w-full h-screen flex flex-col `}>
        {contentBlocks.filter((entry)=>entry.__typename==="ReportIllustrationOverlaySubsection").map((section, i) => {
          const color = section.colorTheme ?? "purple";
          const textColor = section.colorTheme==="gold"?"black" : "white";
          return (
            <div className={`w-full flex-1 bg-${color}-900 `}>
              <div
                className={`responsive-container  text-white grid grid-cols-12 gap-lg`}
              >
              <div className="col-span-4 ">
            <p className="type-preset-6 font-serif pt-sm">
              Theme {i+1 }
            </p>
          
                <h2 className="type-preset-4 font-bold pt-sm">
                <LinkText
                          href={`#${section.anchor}`}
                          variant={"default"}
                          color={textColor}
                        >
                  {section.title}
                  </LinkText>
                </h2>
                </div>  
                <div className={`col-span-8 pt-md divide-y divide-${textColor}`}>
                  {section.storiesCollection.items.map((story) => {
                    const anch2 = `#${section.anchor}--${story.anchor}`;
                    const title = story.shortTitle ?? story.title;
                    return (
    
                      <div onClick={onClick} className="font-serif py-sm">
                        <LinkText
                          href={anch2}
                          variant={"default"}
                          color={textColor}
                        >
                          {title}
                        </LinkText>
                        
                      </div>
                    
                    );
                  })}
                </div>
              </div>
            </div>
          );
        })}
         <div className={`w-full flex-1 bg-white `}>
              <div
                className={`responsive-container  text-black grid grid-cols-12 gap-lg`}
              >
                <h2 className="col-span-4 type-preset-3 font-bold pt-sm">
                <LinkText
                          href={``}
                          variant={"default"}
                          color={'black'}
                        >
                 Download PDF
                  </LinkText>
                </h2>
            
              </div>
            </div>
      </section>
    );
  };

  // const NavLinksMobile = () => (
      
  //   <nav
  //     aria-label="main"
  //     className=" absolute left-0 top-[60px] responsive-container w-full flex flex-col  bg-white z-50 "
  //   >
  //     <SlideDown className={``}>
  //       {isShowingMenu
  //         ? NavData.map((navSection, i) => {
  //             const extraPadding = classNames({
  //               "mt-lg": i == 0,
  //               "mb-lg": i == NavData.length - 1,
  //             });
  //             return "slug" in navSection ? (
  //               <a
  //                 href={navSection.slug}
  //                 className={`group block w-full border-t-[1px] border-black py-lg ${extraPadding} ${analyticsLabel}`}
  //                 key={navSection.title}
  //               >
  //                 <div className="relative inline-block  ">
  //                   <div
  //                     className={` 
  //           text-gray-900 font-sans font-bold
  //           mr-3xl
  //           group-hover:border-black border-b-2  border-transparent
  //             `}
  //                   >
  //                     {navSection.title}
  //                   </div>
  //                 </div>
  //               </a>
  //             ) : (
  //               <details
  //                 key={navSection.title}
  //                 className={`${styles.details} ${extraPadding} w-full border-t-[1px] border-black py-lg`}
  //               >
  //                 <summary
  //                   className={` relative  text-gray-900  pr-sm   cursor-pointer`}
  //                 >
  //                   <div className="flex flex-row justify-between items-center">
  //                     <h3 className=" text-gray-900 pr-sm font-sans font-bold ">
  //                       {navSection.title}
  //                     </h3>
  //                     <div className={`chevron`}>
  //                       <svg
  //                         width="18"
  //                         height="9"
  //                         viewBox="0 0 20 11"
  //                         fill="none"
  //                         xmlns="http://www.w3.org/2000/svg"
  //                       >
  //                         <path
  //                           d="M19 1L10 10L1 1"
  //                           stroke="#111827"
  //                           strokeLinecap="round"
  //                           strokeLinejoin="round"
  //                         />
  //                       </svg>
  //                     </div>
  //                   </div>
  //                 </summary>
  //                 <SlideDown className={`${styles.mobileSlideDown}`}>
  //                   {navSection.subpages.map((navitem) => (
  //                     <a
  //                       key={navitem.title}
  //                       href={navitem.slug}
  //                       className={`block hover:bg-green px-4 cursor-pointer ${analyticsLabel}`}
  //                     >
  //                       <p className="font-sans text-gray-900 hover:underline py-2 pl-5">
  //                         {navitem.title}
  //                       </p>
  //                     </a>
  //                   ))}
  //                 </SlideDown>
  //               </details>
  //             );
  //           })
  //         : null}
  //     </SlideDown>
  //   </nav>
  // );