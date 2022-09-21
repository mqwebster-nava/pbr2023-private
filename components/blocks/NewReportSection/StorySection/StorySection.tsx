import { useEffect, useState } from "react";
import Image from "next/image";
import PostContent from "../../PostBody/PostContent";
import {
  animationHandler,
  AnimationObject,
  debounce,
  getOffsetPct,
} from "../utils";
import { makeFadeAnimation, makeFadeInAnimation, makeSlideUpAnimation } from "../animations";
import Callout from "components/blocks/PostBody/Callout";
import ArrowDown from "../Atoms/ArrowDown";

// TODO  When expand need to initiate animations again to get based on larger size

const StorySection = ({
  story,
  colorTheme,
  sectionAnchor,
  windowSize,
  activeSection,
  nextSection
}) => {
  const storyId = `${sectionAnchor}--${story.anchor}`;
  const nextId = nextSection && `${sectionAnchor}--${nextSection}`;
  const isActive = activeSection == storyId;
  const [animationList, setAnimationList] = useState([]);

  const initiateAnimations = () => {
    let ana = [];
    // make pct once it gets to full page
    const f = Math.round(35 * window.innerHeight / document.getElementById(storyId).offsetHeight);
    console.log(f);
    let fadeInPct = f;
    let fadeOutPct = f;
    let delay = 0;
    let duration = 200;
    // Want the animations at

    let backgroundIndividualFade: AnimationObject = {
      triggerPct: fadeInPct,
      windowSizes: ["mobile", "tablet"],
      animation: makeFadeAnimation("storyImg-" + story.anchor, 200, 400),
    };
    ana.push(backgroundIndividualFade);
    let backgroundFade: AnimationObject = {
      triggerPct: fadeOutPct,
      animation: makeFadeAnimation("contextImg-" + story.anchor, 0, duration),
    };
    let calloutIntro: AnimationObject = {
      triggerPct: fadeInPct,
      animation: makeSlideUpAnimation(
        `storyCallOut-${story.anchor}`,
        delay + 50
      ),
    };
    let summaryIntro: AnimationObject = {
      triggerPct: fadeInPct,
      animation: makeSlideUpAnimation(
        `storySummary-${story.anchor}`,
        delay + 50
      ),
    };

    ana.push(backgroundFade);
    ana.push(calloutIntro);
    ana.push(summaryIntro);

    let titleFade: AnimationObject = {
      triggerPct: 75,
      animation: makeFadeAnimation("storyTitleDiv-" + story.anchor, 0, 200),
    };
    ana.push(titleFade);
if(nextId){
    let nextStoryArrow: AnimationObject = {
      triggerPct: fadeInPct,
      animation: makeFadeInAnimation(
        `${story.anchor}-next-arrow`,
        delay + 50
      ),
    };
    ana.push(nextStoryArrow);
  }

    setAnimationList(ana);
  };

  const onScroll = () => {
    if (!isActive) return;
    const offsetPct = getOffsetPct(storyId);

    if (offsetPct < 0 || offsetPct >= 100) return;
    animationHandler({ offsetPct, animationList, windowSize });
  };
  useEffect(() => {
    if (isActive) {
      if (animationList.length == 0) {
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
        <div>
  
        </div>
        <ImageBackgroundContainerDesktop
          story={story}
          colorTheme={colorTheme}
        ></ImageBackgroundContainerDesktop>
        <div></div>

        <div
          id={`storyExpanded-${story.anchor}`}
          className={`grid grid-cols-12 responsive-container h-auto  z-30 relative  -mt-[calc(100vw_*_9_/_16_+_100px)] lg:-mt-[calc(100vh_-_70px)] `}
        >
          <div className="lg:col-start-5 lg:col-span-7 col-start-0 col-span-11">
          <div
            id={`storyTitleDiv-${story.anchor}`}
            className={`z-20 sticky top-[70px]`}
          >
            <div
              className={`bg-${colorTheme}-50   w-full  pt-md  `}
            >
              <h2
                id={`storyTitle-${story.anchor}`}
                className={`md:type-preset-3 type-preset-4 font-black text-${colorTheme}-900 py-md  opacity-100 lg:px-sm`}
              >
                {story.title}
              </h2>
            </div>
          </div>

          <div className="h-screen "></div>

          <div
            className={` w-full`}
          >
            <div
              id={`storySummary-${story.anchor}`}
              className={`font-bold text-${colorTheme}-900 border-t-[2px] border-${colorTheme}-900 type-preset-6 opacity-0 motion-reduce:opacity-100 bg-${colorTheme}-50 `}
            >
              <PostContent
                docData={story.intro.json}
                docLinks={story.intro.links}
              />
            </div>

            <div
              id={`storyCallOut-${story.anchor}`}
              className={` opacity-0 motion-reduce:opacity-100  bg-${colorTheme}-50 `}
            >
              <Callout
                body={story.featuredCallOut.body}
                attribution={story.featuredCallOut.attribution}
                colorTheme={colorTheme}
                variant={story.featuredCallOut.variant}
              ></Callout>
            </div>
            <div
              id={`storyContent-${story.anchor}`}
              className={` font-serif type-preset-6 tracking-wide font-light text-${colorTheme}-900 bg-${colorTheme}-50 
              block pb-[200px]
            `}
            >
              <PostContent
                docData={story.body.json}
                docLinks={story.body.links}
              />
            </div>
          </div>
        </div>
        <div className="col-span-1 ">
          {nextId &&
          <a id={`${story.anchor}-next-arrow`} href={`#${nextId}`}className=" w-full sticky top-[calc(100vh_-_120px)] px-md  pb-md opacity-0 motion-reduce:opacity-100 flex flex-col items-center">
          <p className="type-preset-7  opacity-70 text-center">Next story</p>
          <ArrowDown sectionId={`${story.anchor}`} ></ArrowDown>
          </a>
      }
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
            <div className={`h-[100px] block lg:hidden`} > </div>
      <div className="relative h-[calc(100vw_*_9_/_16)] lg:h-[calc(100vh_-_70px)] md:max-h-screen w-screen mx-auto max-w-[2000px] ">
       
        <Image
          id={`storyImg-${story.anchor}`}
          src={story.illustration.url}
          layout="fill"
          objectFit="cover"
          className="storyImg absolute top-0 left-0 w-screen opacity-100 object-left-top"
        ></Image>
        <Image
          id={`contextImg-${story.anchor}`}
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


//bg-orange-400 sm:bg-white md:bg-slate-200 lg:bg-blue-500 xl:bg-green-300





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
