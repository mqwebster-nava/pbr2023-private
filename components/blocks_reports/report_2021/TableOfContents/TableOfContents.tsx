import { LinkText } from "components/atom";
import { useEffect, useState } from "react";
import { makeSlideUpAnimation } from "../_animations";
import ArrowDown from "../Atoms/ArrowDown";

import { animationHandler, AnimationObject, dividerColor, getOffsetPct } from "../_utils";


// Components that can be animated
const TableOfContentsSection = ({ title, anchor, contentBlocks}) => { //activeSection, windowSize,
  const [animationList, setAnimationList] = useState([]);
 

  const initiateAnimations= () =>{
    let animations = []
    //Introing the secitons
    contentBlocks
      .filter(
        (entry) =>
          entry.__typename === "ReportIllustrationOverlaySubsection"
      ).forEach((block, i)=>{
        
        let a: AnimationObject = {
          triggerPct:-30 + 10*i,
          animation: makeSlideUpAnimation("themenum-"+ block.anchor, 0),
          //noRepeat:true
        };
        animations.push(a);
      
        let b: AnimationObject = {
          triggerPct:20,
          animation: makeSlideUpAnimation("stories-"+ block.anchor, i*100),
          //noRepeat:true
        };
        animations.push(b);
      })
      animations.push( {
        triggerPct:0,
        animation: makeSlideUpAnimation("themenum-reportConclusion", 0),
        //noRepeat:true
      });
      animations.push( {
        triggerPct:-30,
        animation: makeSlideUpAnimation("themenum-intro", 0),
        //noRepeat:true
      });

      let line1Fade: AnimationObject = {
        triggerPct:0,
        animation: makeSlideUpAnimation("desktop-description1", 0),
        //noRepeat:true
      };
      animations.push(line1Fade);
      // Part 2
      let line2Fade: AnimationObject = {
        triggerPct:20,
        animation: makeSlideUpAnimation("desktop-description2", 0),
       // noRepeat:true
      };
      animations.push(line2Fade);
      let arrowFade: AnimationObject = {
        triggerPct:20,
        animation: makeSlideUpAnimation("tocArrow", 0),
        //noRepeat:true
      };
      animations.push(arrowFade);
  
    setAnimationList(animations);
      return animations;
  }


  useEffect(() => {
    const onScroll = () => {
      const offsetPct = getOffsetPct(anchor);
      if(offsetPct<-100 || offsetPct > 100) return;
      const inFocus = document.getElementById(anchor).contains(document.activeElement);
      
      animationHandler({offsetPct, animationList, inFocus});
    }
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");

    if(animationList.length==0  && mediaQuery && !mediaQuery.matches){

     const a = initiateAnimations();
     const offsetPct = getOffsetPct(anchor);
     animationHandler({offsetPct, animationList:a});
    }
    window.removeEventListener("scroll", onScroll);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  });


  //@apply px-xl md:px-4xl 2xl:px-0 2xl:mx-auto 2xl:max-w-screen-xl ;
  return (
    <section className={`w-full lg:h-[150vh] bg-white relative`} id={anchor} tabIndex={0}>
      <DesktopSection contentBlocks={contentBlocks}/>
      <MobileSection contentBlocks={contentBlocks}/>
    </section>
  );
};
export default TableOfContentsSection;

const MobileSectionTitle = ({
  title,
  anchor,
  themeNum,
  bgColor,
  textColor,
  fontStyle
}) => {
  return (
    <div className={`w-full grow ${bgColor}`} >
      <a  href={`#${anchor}`}>
       <div className={`px-xl md:px-4xl py-lg`}>

      
          {themeNum != null && (
            <p className={`type-preset-7 font-serif  text-${textColor} tracking-[0.015em]`}>
              Theme {themeNum + 1}
            </p>
          )}
          <h2 className={`type-preset-5 ${fontStyle} text-${textColor} group-hover:underline `}>
              {title}
          </h2>
          </div>
      </a>
     
    </div>
  );
};
const MobileSection = ({contentBlocks}) => {
  return (
    <div className="block lg:hidden">
      <div className="w-full h-full bg-white pt-lg pb-3xl px-xl md:px-4xl  ">
        <p className="type-preset-5 font-serif pb-md">
        Our 2021 report is <b className="font-bold">themed</b> around building equity through strong public services.
        </p>
        <p className="type-preset-5 font-serif ">
        Through <b className="font-bold">project-specific stories</b>, the 2021 report details how Nava worked to build equity by designing public services for all.
        </p>
      </div>
      <MobileSectionTitle
        title={"Letter from leadership"}
        anchor={"intro"}
        themeNum={null}
        bgColor={`bg-purple-50`}
        textColor={"purple-900"}
        fontStyle={"font-serif"}
      />
      {contentBlocks
        .filter(
          (entry) =>
            entry.__typename === "ReportIllustrationOverlaySubsection"
        )
        .map((section, i) => {
          const color = section.colorTheme ?? "purple";
          const bg = section.colorTheme === "gold" ? `bg-${color}-dark` : `bg-${color}-900`;
          const textColor = "white" //section.colorTheme === "gold" ? "black" : "white";
          return (
            <MobileSectionTitle
             key={`${section.anchor}-${i}-toc`}
              title={section.title}
              anchor={section.anchor}
              themeNum={i}
              bgColor={bg}
              textColor={textColor}
              fontStyle={"font-bold"}
            />
          );
        })}
      <MobileSectionTitle
        title={"Conclusion"}
        anchor={"reportConclusion"}
        themeNum={null}
        bgColor={`bg-gold-50`}
        textColor={"black"}
        fontStyle={"font-serif"}
      />
    </div> 
  );
};


const DesktopSection = ({contentBlocks}) => {
  return (
    <>
    <div className="lg:sticky top-[70px] lg:min-h-[calc(100vh_-_70px)] hidden lg:block">
      <div className="pl-xl md:pl-4xl md:pr-0  flex flex-row gap-lg h-full 2xl:px-0 2xl:mx-auto 2xl:max-w-screen-xl align-stretch">
      
        <div className="w-full lg:w-1/4 h-full lg:min-h-[calc(100vh_-_70px)]  pt-[88px] px-xl md:px-4xl lg:px-0 lg:max-w-[316px] flex flex-col justify-between aling-start">
         <div>
          <div id={"desktop-description1"} className={`type-preset-5 font-serif font-light pt-lg opacity-0 motion-reduce:opacity-100`}>           
            Our 2021 report is <b className="font-bold">themed</b> around building equity through strong public services.
          </div>
          <p id={"desktop-description2"} className={`pt-xl type-preset-5 font-serif font-light opacity-0 motion-reduce:opacity-100`} >
            Through <b className="font-bold">project-specific stories</b>, the 2021 report details how Nava 
            worked to build equity by designing public services for all.
          </p>
          </div>
          <a  
          id={"tocArrow"} 
          className="group hidden md:block  mb-4xl pt-lg opacity-0 motion-reduce:opacity-100" 
          href={"#intro"} 
          aria-label={"skip to Letter from leadership"}
          >
            <p className="type-preset-7  opacity-0   group-hover:opacity-100 group-focus:opacity-100 ">
                      Next <br/>section
                    </p> 
              <ArrowDown
                color="black"
                size="default"
                sectionId={"toc"}
              />
            </a>
            
        </div>
        <div className="w-full lg:w-3/4 flex flex-col">
          <DesktopSectionTitle
            title={"Letter from leadership"}
            anchor={"intro"}
            themeNum={null}
            bgColor={`bg-purple-50`}
            textColor={"purple-900"}
            stories={null}
            fontStyle={"font-serif"}
          />
          {contentBlocks
            .filter(
              (entry) =>
                entry.__typename === "ReportIllustrationOverlaySubsection"
            )
            .map((section, i) => {
             
              const color = section.colorTheme ?? "purple";
              const bg = section.colorTheme === "gold" ? `bg-${color}-dark` : `bg-${color}-900`;
              const textColor = "white" //section.colorTheme === "gold" ? "black" : "white";

              return (
                <DesktopSectionTitle
                key={`${section.anchor}-${i}-toc`}
                  title={section.title}
                  anchor={section.anchor}
                  themeNum={i + 1}
                  colorTheme={color}
                  bgColor={bg}
                  textColor={textColor}
                  stories={section.storiesCollection.items}
                  fontStyle={"font-bold"}
                />
              );
            })}
          <DesktopSectionTitle
            title={"Conclusion"}
            anchor={"reportConclusion"}
            themeNum={null}
            bgColor={`bg-gold-50`}
            textColor={"black"}
            stories={null}
            fontStyle={"font-serif"}
          />
        </div>
       
      </div>
    </div>
    </>
  );
};

const DesktopSectionTitle = ({
  title,
  anchor,
  themeNum,
  bgColor,
  textColor,
  stories,
  fontStyle,
  colorTheme=null
}) => {

 


  return (
    <div className={`w-full grow ${bgColor} opacity-0 motion-reduce:opacity-100`} id={`themenum-${anchor}`}>
      <div
        className={`  xl:ml-[88px] ml-xl text-${textColor} grid grid-cols-8  gap-lg `}
      >
        <div  className={`col-span-3 lg:py-auto py-lg divide-y-[1px] ${dividerColor(colorTheme)}`}>
          {themeNum != null && (
            <p className="type-preset-6 font-serif font-normal tracking-[0.015em] pb-sm  ">
              Theme {themeNum }
            </p>
          )}
          <h2 className={`type-preset-5 pt-sm ${fontStyle} text-${textColor} ${themeNum==null && "pb-xl"}`}>
            <LinkText
              href={`#${anchor}`}
              variant={"default"}
              color={["black", "white"].includes(textColor)? textColor : null}
              hoverStyle={"underlined"}
            >
              {title}
            </LinkText>
          </h2>
        </div>
        <div
        id={`stories-${anchor}`}
          className={` col-span-5 pt-lg pr-xl pb-xl divide-y ${dividerColor(colorTheme)} opacity-0 motion-reduce:opacity-100 focus-within:opacity-100`}
        >
           <p className="type-preset-6 font-serif font-normal tracking-[0.015em] pb-sm">
              Stories
            </p>
         
          {stories &&
            stories.filter((story)=>story.hideStory!==true).map((story) => {
              const anch2 = `#${anchor}--${story.anchor}`;
              const title =  story.title;
              return (
                <div
                  className=" font-serif py-sm type-preset-6 font-light tracking-[0.015em]" key={`${anch2}-toc`}
                >
                  <LinkText
                    href={anch2}
                    variant={"default"}
                    color={textColor}
                    hoverStyle={"underlined"}
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
};
