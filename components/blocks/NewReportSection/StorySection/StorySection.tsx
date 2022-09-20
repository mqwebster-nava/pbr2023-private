

import { useEffect, useState } from "react";
import Image from "next/image";
import PostContent from "../../PostBody/PostContent";
import { animationHandler, AnimationObject, debounce, getOffsetPct } from "../utils";
import { makeFadeAnimation, makeSlideUpAnimation } from "../animations";
import StoryDiv from "./StoryDiv";
import CalloutDiv from "./FeaturedCallOut";
import StoryTitle from "./StoryTitle";

// TODO  When expand need to initiate animations again to get based on larger size

const StorySection = ({
  story,
  colorTheme,
  sectionAnchor,
  windowSize,
  activeSection,
}) => {
const storyId = `${sectionAnchor}--${story.anchor}`;
  const isActive = activeSection == storyId;
  const [animationList, setAnimationList] = useState([]);
 

  const initiateAnimations = () => {
    let ana = [];
    let fadeInPct = 12;
    let fadeOutPct = 12;
    let delay=0
    let duration = 200;
    // Want the animations at 
   


    let backgroundIndividualFade: AnimationObject = {
      triggerPct:fadeInPct,
      windowSizes:["mobile","tablet"],
      animation: makeFadeAnimation("storyImg-" + story.anchor, delay, 400),
    };
    ana.push(backgroundIndividualFade);
    let backgroundFade: AnimationObject = {
      triggerPct:fadeOutPct ,
      animation: makeFadeAnimation("contextImg-" + story.anchor, 0, duration),
    };
    let calloutIntro: AnimationObject = {
      triggerPct:fadeInPct,
      animation: makeSlideUpAnimation(`storyCallOut-${story.anchor}`, delay+200),
    };
    // let summaryIntro: AnimationObject = {
    //   triggerPct:fadeInPct ,
    //   animation: makeSlideUpAnimation(`storySummary-${story.anchor}`, delay+200),
    // };
    ana.push(backgroundFade);
    ana.push(calloutIntro);
    //ana.push(summaryIntro);

    let titleFade: AnimationObject = {
      triggerPct: 75,
      animation: makeFadeAnimation("storyTitleDiv-" + story.anchor,0, 200),
    };
    ana.push(titleFade);


    setAnimationList(ana);
    setAnimationList(ana);
  };

const onScroll =() => {

  if (!isActive) return;
  const offsetPct = getOffsetPct(storyId);

 
  if (offsetPct < 0 || offsetPct >= 100) return;
 animationHandler({ offsetPct, animationList, windowSize });
};
  useEffect(() => {
    if (isActive ) {
        if (animationList.length == 0 ) {
            initiateAnimations();
        }
      window.removeEventListener("scroll", onScroll);
      window.addEventListener("scroll", onScroll, { passive: true });
    }

    return () => window.removeEventListener("scroll", onScroll);
  });

  return (
    <section className="" id={`${sectionAnchor}--${story.anchor}`}>
    
    <div className={`bg-${colorTheme}-50 relative min-h-[200vh] `}>
       
        <ImageBackgroundContainerDesktop
          story={story}
          colorTheme={colorTheme}
        ></ImageBackgroundContainerDesktop>

      <div
          id={`storyExpanded-${story.anchor}`}
          className={`responsive-container h-auto  z-30 relative  -mt-[calc(100vw_*_9_/_16)] md:-mt-[calc(100vh_-_70px)] block `}
        >
          <StoryTitle
            anchor={story.anchor}
            title={story.title}
            colorTheme={colorTheme}
            isDesktop={true}
          />
          <div className="h-screen"></div>
          <CalloutDiv anchor={story.anchor} featuredCallOut={story.featuredCallOut}  colorTheme={colorTheme}/>
          <StoryDiv
            story={story}
            colorTheme={colorTheme}
          />
        </div>
      </div>
      </section>
  );
};



const ImageBackgroundContainerDesktop = ({
  story,
  colorTheme,
}) => {
  return (
    <div
      id={`imageBackground-${story.anchor}`}
      className={`imageBackground sticky w-screen bg-${colorTheme}-50 md:top-[70px] top-[170px] z-10 overflow-hidden `} // h-[calc(100vh_-_70px)]
    >
      <div className="relative h-[calc(100vw_*_9_/_16)] md:h-[calc(100vh_-_70px)] md:max-h-screen w-screen mx-auto max-w-screen-2xl ">
        <Image
          id={`storyImg-${story.anchor}`}
          src={story.illustration.url}
          layout="fill"
          objectFit="cover"
          className="storyImg w-screen opacity-100 object-left-top"
        ></Image>
        <Image
          id={`contextImg-${story.anchor}`}
          src={story.contextIllustration.url}
          layout="fill"
          objectFit="cover"
          className={`w-screen opacity-100 object-left-top block}`}
        ></Image>
      </div>
    </div>
  );
};


export default StorySection;

/*
import MobileStorySection from "./MobileStorySection";
import DesktopStorySection from "./DesktopStorySection";
*/
// // TODO  When expand need to initiate animations again to get based on larger size
// const StorySection = ({
//   story,
//   colorTheme,
//   sectionAnchor,
//   windowSize,
//   activeSection,
// }) => {
//   return (
//     <section className="" id={`${sectionAnchor}--${story.anchor}`}>
//       <DesktopStorySection  story={story} colorTheme={colorTheme} sectionAnchor={sectionAnchor} activeSection={activeSection} windowSize={windowSize}/>
//     </section>
//   );
// };