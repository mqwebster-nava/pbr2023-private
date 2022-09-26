import { LinkText } from "components/atom";
import { useEffect, useState } from "react";
import { makeSlideUpAnimation } from "../animations";
import ArrowDown from "../Atoms/ArrowDown";

import { animationHandler, AnimationObject, getOffsetPct } from "../utils";


// Components that can be animated
const TableOfContentsSection = ({ title, anchor, contentBlocks}) => { //activeSection, windowSize,
  const [animationList, setAnimationList] = useState([]);
 

  const initiateAnimations= () =>{
    let animations = []
    let line1Fade: AnimationObject = {
      triggerPct:3,
      animation: makeSlideUpAnimation("desktop-description1", 0),
    };
    animations.push(line1Fade);

    //Introing the secitons
    contentBlocks
      .filter(
        (entry) =>
          entry.__typename === "ReportIllustrationOverlaySubsection"
      ).forEach((block, i)=>{
        
        let a: AnimationObject = {
          triggerPct:-30 + 10*i,
          animation: makeSlideUpAnimation("themenum-"+ block.anchor, 0),
        };
        animations.push(a);
      
        let b: AnimationObject = {
          triggerPct:20,
          animation: makeSlideUpAnimation("stories-"+ block.anchor, 0),
        };
        animations.push(b);
      })
      animations.push( {
        triggerPct:10,
        animation: makeSlideUpAnimation("themenum-reportConclusion", 0),
      });
      animations.push( {
        triggerPct:-30,
        animation: makeSlideUpAnimation("themenum-intro", 0),
      });


      // Part 2
      let line2Fade: AnimationObject = {
        triggerPct:20,
        animation: makeSlideUpAnimation("desktop-description2", 0),
      };
      animations.push(line2Fade);
  
    setAnimationList(animations);
      
  }


  useEffect(() => {
    const onScroll = () => {
      const offsetPct = getOffsetPct(anchor);
      if(offsetPct<-100 || offsetPct > 100) return;
      animationHandler({offsetPct, animationList});
    }
    
    if(animationList.length==0) initiateAnimations();
    window.removeEventListener("scroll", onScroll);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  });


  //@apply px-xl md:px-4xl 2xl:px-0 2xl:mx-auto 2xl:max-w-screen-xl ;
  return (
    <section className={`w-full lg:h-[200vh] bg-white relative`} id={anchor}>
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
            <p className={`type-preset-7 font-serif  text-${textColor}`}>
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
          const textColor = section.colorTheme === "gold" ? "black" : "white";
          return (
            <MobileSectionTitle
             key={`${section.anchor}-${i}-toc`}
              title={section.title}
              anchor={section.anchor}
              themeNum={i}
              bgColor={`bg-${color}-900`}
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
    <div className="h-[160px]  hidden lg:block"></div>
    <div className="lg:sticky top-[70px] lg:min-h-[calc(100vh_-_70px)] lg:h-[calc(100vh_-_70px)] hidden lg:block">
      <div className="pl-xl md:pl-4xl md:pr-0  flex flex-col-reverse lg:flex-row-reverse gap-lg h-full 2xl:px-0 2xl:mx-auto 2xl:max-w-screen-xl ">
        <div className="w-full lg:w-3/4 h-full flex flex-col">
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
              const textColor =
                section.colorTheme === "gold" ? "black" : "white";
              return (
                <DesktopSectionTitle
                key={`${section.anchor}-${i}-toc`}
                  title={section.title}
                  anchor={section.anchor}
                  themeNum={i + 1}
                  bgColor={`bg-${color}-900`}
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
        <div className="w-full lg:w-1/4 h-full bg-white pt-[88px] px-xl md:px-4xl lg:px-0 lg:max-w-[316px] flex flex-col justify-between">
         <div>
          <div id={"desktop-description1"} className={`type-preset-5 font-serif font-light pt-sm opacity-0 motion-reduce:opacity-100`}>
            Our 2021 report is <b className="font-bold">themed</b> around building equity through strong public services.
          </div>
          <p id={"desktop-description2"} className={`pt-xl type-preset-5 font-serif font-light opacity-0 motion-reduce:opacity-100`} >
            Through <b className="font-bold">project-specific stories</b>, the 2021 report details how Nava
            worked to build equity by designing public services for all.
          </p>
          </div>
          <div className="hidden md:block pb-[160px]">
            <ArrowDown color="black" size="default" sectionId={'toc'}/>
          </div>
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
  fontStyle
}) => {
  return (
    <div className={`w-full grow ${bgColor} opacity-0 motion-reduce:opacity-100`} id={`themenum-${anchor}`}>
      <div
        className={`  xl:ml-[88px] ml-xl text-${textColor} grid grid-cols-8  gap-lg `}
      >
        <div  className="col-span-3 lg:py-auto py-lg">
          {themeNum != null && (
            <p className="type-preset-6 font-serif ">
              Theme {themeNum }
            </p>
          )}
          <h2 className={`type-preset-5 ${fontStyle} text-${textColor}`}>
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
          className={` col-span-5 pt-md pr-xl divide-y divide-${textColor} opacity-0 motion-reduce:opacity-100`}
        >
          {stories &&
            stories.map((story) => {
              const anch2 = `#${anchor}--${story.anchor}`;
              const title =  story.title;
              return (
                <div
                  className=" font-serif py-sm type-preset-6" key={`${anch2}-toc`}
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
