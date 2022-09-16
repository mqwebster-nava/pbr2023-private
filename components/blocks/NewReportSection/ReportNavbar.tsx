import Logo from "components/wrapper/Navbar/Logo";
import { useEffect, useRef, useState } from "react";
import { LinkText } from "components/atom";

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
    <div className={`block sticky top-0  z-50 w-full bg-${navBG}-900`}>
      <div className=" responsive-container flex flex-wrap items-center justify-between h-[60px] ">
        <Logo isMobile={true} color="white" />
        <a href="#reportHeader">
        <h2 className="type-preset-6 font-serif text-white">
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
      <div className="h-md bg-sage-50 flex basis-6">
        {reportSections.map((section, i)=>{
          let s = `bg-${section.colorTheme}-50`
          
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

//   import { LinkText } from "components/atom";
// import { useEffect, useState } from "react";
// import { makeSlideUpAnimation } from "../animations";
// import ArrowDown from "../Atoms/ArrowDown";

// import { animationHandler, AnimationObject, getOffsetPct } from "../utils";


// // Components that can be animated
// const TableOfContentsSection = ({ contentBlocks, activeSection, windowSize, onClick = () => {} }) => {
//   const [animationList, setAnimationList] = useState([]);
//   const isActive = activeSection=="toc";



//   const initiateAnimations= () =>{
//     let animations = []
//     let line1Fade: AnimationObject = {
//       triggerPct:3,
//       animation: makeSlideUpAnimation("desktop-description1", 0),
//     };
//     animations.push(line1Fade);

//     // Introing the secitons
//     contentBlocks
//       .filter(
//         (entry) =>
//           entry.__typename === "ReportIllustrationOverlaySubsection"
//       ).forEach((block, i)=>{
//         let a: AnimationObject = {
//           triggerPct:-30 + 10*i,
//           animation: makeSlideUpAnimation("themenum-"+ block.anchor, 0),
//         };
//         animations.push(a);
      
//         let b: AnimationObject = {
//           triggerPct:20,
//           animation: makeSlideUpAnimation("stories-"+ block.anchor, 0),
//         };
//         animations.push(b);
//       })
//       animations.push( {
//         triggerPct:10,
//         animation: makeSlideUpAnimation("themenum-conclusion", 0),
//       });
//       animations.push( {
//         triggerPct:-30,
//         animation: makeSlideUpAnimation("themenum-intro", 0),
//       });


//       // Part 2
//       let line2Fade: AnimationObject = {
//         triggerPct:20,
//         animation: makeSlideUpAnimation("desktop-description2", 0),
//       };
//       animations.push(line2Fade);
  
//     setAnimationList(animations);
      
//   }


//   useEffect(() => {
//     const onScroll = () => {
//       const offsetPct = getOffsetPct('toc');
//       if(offsetPct<-100 || offsetPct > 100) return;
//       animationHandler({offsetPct, animationList});
//     }
    
//     if(animationList.length==0) initiateAnimations();
//     window.removeEventListener("scroll", onScroll);
//     window.addEventListener("scroll", onScroll, { passive: true });
//     return () => window.removeEventListener("scroll", onScroll);
//   });


//   //@apply px-xl md:px-4xl 2xl:px-0 2xl:mx-auto 2xl:max-w-screen-xl ;
//   return (
//     <section className={`w-full lg:h-[200vh] bg-white relative`} id="toc">
//       <DesktopSection contentBlocks={contentBlocks}/>
//       <MobileSection contentBlocks={contentBlocks}/>
//     </section>
//   );
// };
// export default TableOfContentsSection;

// const MobileSectionTitle = ({
//   title,
//   anchor,
//   themeNum,
//   bgColor,
//   textColor,
//   fontStyle
// }) => {
//   return (
//     <div className={`w-full grow ${bgColor}`} >
//       <a  href={`#${anchor}`}>
//        <div className={`px-xl md:px-4xl py-lg`}>

      
//           {themeNum != null && (
//             <p className={`type-preset-7 font-serif pt-sm text-${textColor}`}>
//               Theme {themeNum + 1}
//             </p>
//           )}
//           <h2 className={`type-preset-5 ${fontStyle} text-${textColor} group-hover:underline `}>
//               {title}
//           </h2>
//           </div>
//       </a>
     
//     </div>
//   );
// };
// const MobileSection = ({contentBlocks}) => {
//   return (
//     <div className="block lg:hidden">
//       <div className="w-full h-full bg-white pt-3xl px-xl md:px-4xl  ">
//         <p className="type-preset-5 font-serif pb-md">
//           Our 2021 report is themed around building equity through strong
//           public services.
//         </p>
//         <p className="type-preset-5 font-serif pb-md">
//           Through project-specific stories, the 2021 report details how Nava
//           worked to build equity by designing public services for all.
//         </p>
//       </div>
//       <MobileSectionTitle
//         title={"Letter from Leadership"}
//         anchor={"intro"}
//         themeNum={null}
//         bgColor={`bg-purple-50`}
//         textColor={"purple-900"}
//         fontStyle={"font-serif"}
//       />
//       {contentBlocks
//         .filter(
//           (entry) =>
//             entry.__typename === "ReportIllustrationOverlaySubsection"
//         )
//         .map((section, i) => {
//           const color = section.colorTheme ?? "purple";
//           const textColor = section.colorTheme === "gold" ? "black" : "white";
//           return (
//             <MobileSectionTitle
//               title={section.title}
//               anchor={section.anchor}
//               themeNum={i}
//               bgColor={`bg-${color}-900`}
//               textColor={textColor}
//               fontStyle={"font-bold"}
//             />
//           );
//         })}
//       <MobileSectionTitle
//         title={"Conclusion"}
//         anchor={"conclusion"}
//         themeNum={null}
//         bgColor={`bg-gold-50`}
//         textColor={"black"}
//         fontStyle={"font-serif"}
//       />
//     </div> 
//   );
// };


// const DesktopSection = ({contentBlocks}) => {
//   return (
//     <>
//     <div className=" top-[70px] lg:h-[calc(100vh_-_70px)]">
//       <div className="pl-xl md:pl-4xl md:pr-0  flex flex-col-reverse lg:flex-row-reverse gap-lg h-full 2xl:px-0 2xl:mx-auto 2xl:max-w-screen-xl ">
//         <div className="w-full lg:w-3/4 h-full flex flex-col">
//           <DesktopSectionTitle
//             title={"Introduction Letter"}
//             anchor={"intro"}
//             themeNum={null}
//             bgColor={`bg-purple-50`}
//             textColor={"purple-900"}
//             stories={null}
//             fontStyle={"font-serif"}
//           />
//           {contentBlocks
//             .filter(
//               (entry) =>
//                 entry.__typename === "ReportIllustrationOverlaySubsection"
//             )
//             .map((section, i) => {
//               const color = section.colorTheme ?? "purple";
//               const textColor =
//                 section.colorTheme === "gold" ? "black" : "white";
//               return (
//                 <DesktopSectionTitle
//                   title={section.title}
//                   anchor={section.anchor}
//                   themeNum={i + 1}
//                   bgColor={`bg-${color}-900`}
//                   textColor={textColor}
//                   stories={section.storiesCollection.items}
//                   fontStyle={"font-bold"}
//                 />
//               );
//             })}
//           <DesktopSectionTitle
//             title={"Conclusion"}
//             anchor={"conclusion"}
//             themeNum={null}
//             bgColor={`bg-gold-50`}
//             textColor={"black"}
//             stories={null}
//             fontStyle={"font-serif"}
//           />
//         </div>
  
//       </div>
//     </div>
//     </>
//   );
// };

// const DesktopSectionTitle = ({
//   title,
//   anchor,
//   themeNum,
//   bgColor,
//   textColor,
//   stories,
//   fontStyle
// }) => {
//   return (
//     <div className={`w-full grow ${bgColor} opacity-0 motion-reduce:opacity-100`} id={`themenum-${anchor}`}>
//       <div
//         className={` xl:ml-sm md:ml-4xl pl-xl text-white grid grid-cols-12  gap-lg `}
//       >
//         <div  className="lg:col-span-4 col-span-12 lg:py-auto py-lg">
//           {themeNum != null && (
//             <p className="type-preset-6 font-serif ">
//               Theme {themeNum }
//             </p>
//           )}
//           <h2 className={`type-preset-5 font-bold ${fontStyle} text-${textColor}`}>
//             <LinkText
//               href={`#${anchor}`}
//               variant={"default"}
//               color={["black", "white"].includes(textColor)? textColor : null}
//               hoverStyle={"underlined"}
//             >
//               {title}
//             </LinkText>
//           </h2>
//         </div>
//         <div
//         id={`stories-${anchor}`}
//           className={` col-span-8 pt-md divide-y divide-${textColor}  opacity-0 motion-reduce:opacity-100`}
//         >
//           {stories &&
//             stories.map((story) => {
//               const anch2 = `#${anchor}--${story.anchor}`;
//               const title =  story.title;
//               return (
//                 <div
//                   className=" font-serif py-sm type-preset-6"
//                 >
//                   <LinkText
//                     href={anch2}
//                     variant={"default"}
//                     color={textColor}
//                   >
//                     {title}
//                   </LinkText>
//                 </div>
//               );
//             })}
//         </div>
//       </div>
//     </div>
//   );
// };