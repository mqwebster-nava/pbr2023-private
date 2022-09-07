import Logo from "components/wrapper/Navbar/Logo";
import { useEffect, useRef, useState } from "react";
import { LinkText } from "components/atom";

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
    <div className={`block sticky top-0  z-50 w-full bg-white`}>
      <div className=" responsive-container flex flex-wrap items-center justify-between h-[60px]">
        <Logo isMobile={true} color="black" />
        <a href="#reportHeader">
        <h2 className="type-preset-6 font-serif text-black">
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
            className="font-sans text-black  border-grey  "
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
{
  /* <nav className="w-full  bg-white sticky top-0  z-30  pt-md">
       
<div className="responsive-container flex justify-between">
 <Logo/>
  <div className="text-white">Menu</div>
 
</div>
</nav>
/h-[70px] */
}


const TableOfContentsSection = ({ contentBlocks, onClick=()=>{} }) => {
   // Have the bottom rule not have a hr
    return (
      <section className={` w-full h-screen flex flex-col `}>
        {contentBlocks.filter((entry)=>entry.__typename==="ReportIllustrationOverlaySubsection").map((section) => {
          const color = section.colorTheme ?? "purple";
          const textColor = section.colorTheme==="gold"?"black" : "white";
          return (
            <div className={`w-full flex-1 bg-${color}-900 `}>
              <div
                className={`responsive-container  text-white grid grid-cols-12 pl-[108px] gap-lg`}
              >
                <h2 className="col-span-4 type-preset-3 font-bold pt-sm">
                <LinkText
                          href={`#${section.anchor}`}
                          variant={"default"}
                          color={textColor}
                        >
                  {section.title}
                  </LinkText>
                </h2>
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
                className={`responsive-container  text-black grid grid-cols-12 pl-[108px] gap-lg`}
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