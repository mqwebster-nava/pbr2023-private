import { useEffect, useState } from "react";
import Image from "next/image";
import PostContent from "../../../blocks/PostBody/PostContent";
import { animationHandler, AnimationObject, getOffsetPct } from "../utils";
import {
  makeFadeAnimation,
  makeFadeInAnimation,
  makeSlideOutAnimation,
  makeSlideUpAnimation,
} from "../animations";
import Callout from "components/blocks_reports/old/NewReportContent/Callout";
import ArrowDown from "../Atoms/ArrowDown";


// TODO  When expand need to initiate animations again to get based on larger size




const StorySection = ({ story, colorTheme, sectionAnchor, nextSection, nextSectionTitle, nextSectionType="story" }) => {
  const storyId = `${sectionAnchor}--${story.anchor}`;
  const nextId = nextSection; //  && `${sectionAnchor}--${nextSection}`;
  //const isActive = activeSection == storyId;
  const [animationList, setAnimationList] = useState([]);

  const initiateAnimations = () => {
    let ana = [];
    const sectionH = document.getElementById(storyId).offsetHeight;
    const screenH = window.innerHeight;
    // make pct once it gets to full page
    const desktopTriggerPct = Math.round((35 * screenH) / sectionH);
    const mobileTriggerPct = Math.round((15 * screenH) / sectionH);
    //let fadeInPct = f;
    //let fadeOutPct = f;
    let delay = 0;
    let duration = 200;

    // Want the animations at

    let backgroundIndividualFade: AnimationObject = {
      triggerPct: mobileTriggerPct,
      windowSizes: ["mobile", "tablet"],
      animation: makeFadeAnimation("storyImg-" + story.anchor, 200, 400),
    };

    let backgroundFade: AnimationObject = {
      triggerPct: desktopTriggerPct,
      triggerPcts: { mobile: mobileTriggerPct, tablet: mobileTriggerPct },
      animation: makeFadeAnimation("contextImg-" + story.anchor, 0, duration),
    };
    let summaryIntro: AnimationObject = {
      triggerPct: desktopTriggerPct,
      //triggerPcts: {"mobile":1,  "tablet":1},
      windowSizes: ["desktop"],
      animation: makeSlideUpAnimation(
        `storySummary-${story.anchor}`,
        delay + 50
      ),
    };

    let calloutIntro: AnimationObject = {
      triggerPct: desktopTriggerPct,
      windowSizes: ["desktop"],
      animation: makeSlideUpAnimation(
        `storyCallOut-${story.anchor}`,
        delay + 50
      ),
    };
  
    const titleOutTrigger = Math.round(
      (100 * (sectionH - 0.35 * screenH)) / sectionH
    );
    let titleFade: AnimationObject = {
      triggerPct: titleOutTrigger,
      animation: makeSlideOutAnimation("storyTitleDiv-" + story.anchor, 0),
    };

    ana = [
      backgroundIndividualFade,
      backgroundFade,
      calloutIntro,
      summaryIntro,
      titleFade,
    ];

    if (nextId) {
      
      const storyOutTrigger = Math.round((100 * (sectionH - screenH)) / sectionH);
      let nextStoryArrowFade: AnimationObject = {
        triggerPct: storyOutTrigger ,
        animation: makeFadeAnimation(
          `${story.anchor}-next-arrow-container`,
          0,
          200
        ),
      };
       ana.push(nextStoryArrowFade);
      let nextStoryArrow: AnimationObject = {
        triggerPct: 1.5*desktopTriggerPct ,
        triggerPcts: {
          mobile: 1.5*mobileTriggerPct ,
          tablet: 1.5*mobileTriggerPct ,
        },
        animation: makeFadeInAnimation(
          `${story.anchor}-next-arrow`,
          delay
        ),
      };
      ana.push(nextStoryArrow);
    }

    setAnimationList(ana);
    return ana;
  };

  const onScroll = () => {
    //if (!isActive) return;
    const offsetPct = getOffsetPct(storyId);

    if (offsetPct < 0 || offsetPct >= 100) return;
    const inFocus = document.getElementById(storyId).contains(document.activeElement);
    animationHandler({ offsetPct, animationList, inFocus });
  };
  useEffect(() => {
    if (animationList.length == 0) {
      const ana = initiateAnimations();
      animationHandler({ offsetPct: getOffsetPct(storyId), animationList: ana});
    }
    window.removeEventListener("scroll", onScroll);
    window.addEventListener("scroll", onScroll, { passive: true });
  

    return () => window.removeEventListener("scroll", onScroll);
  });

  const textColor =
    colorTheme == "gold" ? "text-gold-darktext" : `text-${colorTheme}-900`;
    const c =
    colorTheme == "gold" ? "gold-dark" : `${colorTheme}-900`;
  return (
    <section className="" id={`${sectionAnchor}--${story.anchor}`}>
      <div className={`bg-${colorTheme}-50 relative min-h-[200vh] `}>

        <ImageBackgroundContainerDesktop
          story={story}
          colorTheme={colorTheme}
        ></ImageBackgroundContainerDesktop>


        <div
          className={` h-auto  z-30 relative  -mt-[calc(100vw_*_9_/_16_+_100px)] lg:-mt-[calc(100vh_-_70px)] `}
        >
          <div
            className={` grid grid-cols-12 responsive-container z-20 sticky top-[70px]`}
          >
            <div
              className={`lg:col-start-5 lg:col-span-8 col-start-0 col-span-12 pr-xl  bg-${colorTheme}-50  pt-md`}
              id={`storyTitleDiv-${story.anchor}`}
            >
              <h3
                id={`storyTitle-${story.anchor}`}
                className={`md:type-preset-3 type-preset-4 font-black ${textColor} pt-md pb-xl  opacity-100 `}
              >
                {story.title}
              </h3>
            </div>
          </div>
          <div className={`lg:h-[80vh] h-[50vh] landscape:h-[80vh] `}></div>

          <div className={`w-full bg-${colorTheme}-50 lg:bg-transparent`}>
            <div className="grid grid-cols-12 responsive-container h-auto relative">
              <div
                className={`lg:col-start-5 lg:col-span-7 col-start-0 col-span-11  pr-xl `}
              >
                <div
                  id={`storySummary-${story.anchor}`}
                  className={` lg:opacity-0 motion-reduce:opacity-100 bg-${colorTheme}-50  -mx-sm px-sm `}
                >
                  <div className={`font-serif font-bold ${textColor} border-t-[2px] border-${colorTheme}-900 type-preset-6`}>
                    <PostContent
                      docData={story.intro.json}
                      docLinks={story.intro.links}
                    />
                  </div>
                </div>

                <div
                  id={`storyCallOut-${story.anchor}`}
                  className={` lg:opacity-0 motion-reduce:opacity-100  bg-${colorTheme}-50 -mx-sm px-sm`}
                >
                  <Callout
                    body={story.featuredCallOut.body}
                    attribution={story.featuredCallOut.attribution}
                    colorTheme={colorTheme}
                    variant={story.featuredCallOut.variant}
                    attributionRole={story.featuredCallOut.attributionRole}
                  ></Callout>
                </div>
                <div
                  id={`storyContent-${story.anchor}`}
                  className={` font-serif type-preset-6 tracking-wide font-light ${textColor} bg-${colorTheme}-50 
              block pb-[200px] -mx-sm px-sm
            `}
                >
                  <PostContent
                    docData={story.body.json}
                    docLinks={story.body.links}
                  />
                </div>
              </div>

              <div className="col-span-1 block opacity-100" id={`${story.anchor}-next-arrow-container`} >
                {nextId && (
                  <a
                    id={`${story.anchor}-next-arrow`}
                    href={`#${nextId}`}
                    aria-label={`Skip to ${nextSectionTitle}`}
                    className="group w-full sticky top-[calc(100vh_-_150px)] px-md  mb-2xl opacity-0 motion-reduce:opacity-100 flex flex-col items-center"
                  >
                    <p className={`type-preset-7  text-${c} opacity-100 lg:opacity-0   group-hover:opacity-100 group-focus:opacity-100 rotate-90 lg:rotate-0 w-[100px] lg:w-auto -mb-lg lg:mb-0`}>
                      Next <br className="hidden lg:block"/>{nextSectionType}
                    </p> 
                    <ArrowDown sectionId={`${story.anchor}`} color={c} isMobileHidden={true}></ArrowDown>

                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
       
      </div>
    </section>
  );
};

const ImageBackgroundContainerDesktop = ({ story, colorTheme }) => {
  return (
    <div
      id={`imageBackground-${story.anchor}`}
      className={`imageBackground sticky w-screen bg-${colorTheme}-50 top-[70px] z-10 overflow-hidden `} // h-[calc(100vh_-_70px)]
    >
      <div className={`h-[100px] block lg:hidden`}> </div>
      <div
        className={`relative h-[calc(100vw_*_9_/_16)] lg:h-[calc(100vh_-_70px)] md:max-h-screen w-screen mx-auto max-w-[2000px] `}
      >
        <Image
          id={`storyImg-${story.anchor}`}
          alt={""}
          src={story.illustration.url}
          layout="fill"
          objectFit="cover"
          className="storyImg absolute top-0 left-0 w-screen opacity-100 object-left-top"
        ></Image>
        <Image
          id={`contextImg-${story.anchor}`}
          alt={`${story.contextIllustration.description}`}
          src={story.contextIllustration.url}
          layout="fill"
          objectFit="cover"
          className={`w-screen absolute top-0 left-0 opacity-100 object-left-top block}`}
        ></Image>
      </div>
    </div>
  );
};

export default StorySection;

//windowSize,
// activeSection,
//bg-orange-400 sm:bg-white md:bg-slate-200 lg:bg-blue-500 xl:bg-green-300

/*

 {/* <a id={`${story.anchor}-next-arrow-mobile`}
                    href={`#${nextId}`} className="
                    sticky top-[75vh]  h-[70px] 
                    w-[70px] ml-auto mb-3xl bg-white 
                    rounded-full z-40 md:hidden mr-xl
                    group px-md   flex flex-col items-center justify-center
                    ">

                    <p className="type-preset-7  opacity-70 text-center hidden group-hover:block">
                      Next story
                    </p>  *
                    <ArrowDown sectionId={`${story.anchor}`} hasStem={false}></ArrowDown>
             
        </a> 
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
