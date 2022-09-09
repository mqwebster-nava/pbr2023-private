import { LinkText } from "components/atom";
import { useEffect, useState } from "react";

import { animationHandler, AnimationObject, getOffsetPct } from "./utils";


// Components that can be animated

const makeSlideUpAnimation = (elementId) => {
  let an = document.getElementById(elementId).animate(
    [
      { transform: 'translateY(20%)', opacity: '0%',  },
      { transform: 'translateY(0%)', opacity: '100%',   },
    ],
    {
      duration: 200,
      iterations: 1,
      fill: 'forwards',
    }
  );
  an.pause();
  return an;
};


const TableOfContentsSection = ({ contentBlocks, activeSection, windowSize, onClick = () => {} }) => {
  const [animationList, setAnimationList] = useState([]);
  const isActive = activeSection=="toc";



  const initiateAnimations= () =>{
    let animations = []
    let line1Fade: AnimationObject = {
      triggerPct:3,
      animation: makeSlideUpAnimation("desktop-description1"),
    };
    animations.push(line1Fade);

    // Introing the secitons
    contentBlocks
      .filter(
        (entry) =>
          entry.__typename === "ReportIllustrationOverlaySubsection"
      ).forEach((block, i)=>{
        let a: AnimationObject = {
          triggerPct:-40 + 10*i,
          animation: makeSlideUpAnimation("themenum-"+ block.anchor),
        };
        animations.push(a);
      
        let b: AnimationObject = {
          triggerPct:20,
          animation: makeSlideUpAnimation("stories-"+ block.anchor),
        };
        animations.push(b);
      })
      animations.push( {
        triggerPct:-10,
        animation: makeSlideUpAnimation("themenum-conclusion"),
      });
      animations.push( {
        triggerPct:-50,
        animation: makeSlideUpAnimation("themenum-intro"),
      });


      // Part 2
      let line2Fade: AnimationObject = {
        triggerPct:20,
        animation: makeSlideUpAnimation("desktop-description2"),
      };
      animations.push(line2Fade);
  
    setAnimationList(animations);
      
  }


  useEffect(() => {
    const onScroll = () => {
      const offsetPct = getOffsetPct(activeSection);
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
    <section className={`w-full lg:h-[200vh] bg-white relative`} id="toc">
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
            <p className={`type-preset-7 font-serif pt-sm text-${textColor}`}>
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
      <div className="w-full h-full bg-white pt-3xl px-xl md:px-4xl  ">
        <p className="type-preset-5 font-serif pb-md">
          Our 2021 report is themed around building equity through strong
          public services.
        </p>
      </div>
      <MobileSectionTitle
        title={"Letter from Leadership"}
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
        anchor={"conclusion"}
        themeNum={null}
        bgColor={`bg-gold-50`}
        textColor={"black"}
        fontStyle={"font-serif"}
      />

      <div className="w-full lg:w-1/3 h-full bg-white pt-3xl px-xl md:px-4xl lg:px-0 flex flex-col justify-between">
        <p className="type-preset-5 font-serif pb-md" >
          Through project-specific stories, the 2021 report details how Nava
          worked to build equity by designing public services for all.
        </p>
      </div>
        <div className="w-full h-full flex flex-col">
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
                <div className={`w-full grow bg-${color}-900 `}>
                  <div className={`md:px-4xl px-xl text-white  gap-lg`}>
                    <div className={` pt-md divide-y divide-${textColor}`}>
                      {section.storiesCollection.items.map((story) => {
                        const anch2 = `#${section.anchor}--${story.anchor}`;
                        const title = story.shortTitle ?? story.title;
                        return (
                          <div className={`font-serif py-sm text-${textColor}`}>
                            <LinkText
                              href={anch2}
                              variant={"default"}
                              color={["black", "white"].includes(textColor)? textColor : null}
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
            })}
        </div>
    </div>
  );
};


const DesktopSection = ({contentBlocks}) => {
  return (
    <>
    <div className="lg:sticky top-[70px] lg:h-[calc(100vh_-_70px)] hidden lg:block">
      <div className="pl-xl md:pl-4xl md:pr-0  flex flex-col-reverse lg:flex-row-reverse gap-lg h-full 2xl:px-0 2xl:mx-auto 2xl:max-w-screen-xl ">
        <div className="w-full lg:w-3/4 h-full flex flex-col">
          <DesktopSectionTitle
            title={"Introduction Letter"}
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
            anchor={"conclusion"}
            themeNum={null}
            bgColor={`bg-gold-50`}
            textColor={"black"}
            stories={null}
            fontStyle={"font-serif"}
          />
        </div>
        <div className="w-full lg:w-1/4 h-full bg-white pt-3xl px-xl md:px-4xl lg:px-0 lg:max-w-[316px] flex flex-col justify-between">
         <div>
          <div id={"desktop-description1"} className={`type-preset-5 font-serif opacity-0 motion-reduce:opacity-100`}>
            Our 2021 report is themed around building equity through strong public services.
          </div>
          <p id={"desktop-description2"} className={`pt-xl type-preset-5 font-serif opacity-0 motion-reduce:opacity-100`} >
            Through project-specific stories, the 2021 report details how Nava
            worked to build equity by designing public services for all.
          </p>
          </div>
          <div className="pb-xl hidden lg:block">
            <svg
              width="56"
              height="103"
              viewBox="0 0 56 103"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M27.998 1V101.613"
                stroke="black"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M54.9964 74.5254L27.9982 101.614L1 74.5254"
                stroke="black"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
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
        className={` xl:ml-sm md:ml-4xl pl-xl text-white grid grid-cols-12  gap-lg `}
      >
        <div  className="lg:col-span-4 col-span-12 lg:py-auto py-lg">
          {themeNum != null && (
            <p className="type-preset-6 font-serif pt-sm">
              Theme {themeNum }
            </p>
          )}
          <h2 className={`type-preset-5 font-bold ${fontStyle} text-${textColor}`}>
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
          className={` col-span-8 pt-md divide-y divide-${textColor}  opacity-0 motion-reduce:opacity-100`}
        >
          {stories &&
            stories.map((story) => {
              const anch2 = `#${anchor}--${story.anchor}`;
              const title = story.shortTitle ?? story.title;
              return (
                <div
                  className=" font-serif py-sm type-preset-6"
                >
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
};

  // console.log(offsetPct);
      // if(offsetPct>10 && windowSize==="desktop" &&  document.getElementById("desktop-description") && document.getElementById("desktop-description").classList.contains("opacity-0")) { // TODO add mobile check 
      //   gsap.fromTo("#desktop-description", {y:50,}, {y:0, });
      //   document.getElementById("desktop-description").classList.replace("opacity-0", "opacity-100")
      // }

      // if(offsetPct> 25 && !showTOC ) { // TODO add mobile check
      //   setShowTOC(true);
      // }
      // else if (offsetPct < 25 && showTOC) {
      //   setShowTOC(false);
      // }