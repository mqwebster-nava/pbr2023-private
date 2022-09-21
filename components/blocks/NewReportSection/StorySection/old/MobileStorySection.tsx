import { useEffect, useState } from "react";
import Image from "next/image";
import PostContent from "../../../PostBody/PostContent";
import { animationHandler, AnimationObject, getOffsetPct } from "../../utils";
import StoryDiv from "./StoryDiv";
import { makeFadeInAnimation } from "../../animations";
import CalloutDiv from "./FeaturedCallOut";
import StoryTitle from "./StoryTitle";

// TODO  When expand need to initiate animations again to get based on larger size

const makeFadeAnimation = (elementId) => {
  const an = document
    .getElementById(elementId)
    .animate([{ opacity: "100%" }, { opacity: "0%" }], {
      duration: 200,
      iterations: 1,
      fill: "forwards",
    });
  an.pause();
  return an;
};

const MobileStorySection = ({
  story,
  colorTheme,
  sectionAnchor,
  activeSection,
  windowSize
}) => {
  const [animationList, setAnimationList] = useState([]);
  const storyId = `${sectionAnchor}--${story.anchor}`;
  const isActive = activeSection == storyId;

  const initiateAnimations = () => {
    let ana = [];
    const storyTitleDiv = document.getElementById(
      "storyTitleDiv-" + story.anchor
    );
    const storyH = storyTitleDiv.getBoundingClientRect().height;
    const bgTriggerH = storyH + 50;
    let backgroundFade: AnimationObject = {
      triggerPct:
        (100 * bgTriggerH) / document.getElementById(storyId).offsetHeight,
      animation: makeFadeAnimation("contextImg-" + story.anchor),
    };
    makeFadeInAnimation(`storySummary-${story.anchor}`, 0).play();
    makeFadeInAnimation(`storyCallOut-${story.anchor}`, 0).play();
    
    ana.push(backgroundFade);
    // let storyFade: AnimationObject = {
    //   triggerPct: 0,
    //   animation: makeFadeInAnimation(`storySummary-${story.anchor}`, 0),
    // };
    let titleFade: AnimationObject = {
      triggerPct: 75,
      animation: makeFadeAnimation("storyTitleDiv-" + story.anchor),
    };
    // let calloutFade: AnimationObject = {
    //   triggerPct: 0,
    //   animation: makeFadeInAnimation(`storyCallOut-${story.anchor}`, 0),
    // };

    //ana.push( storyFade);
    ana.push(titleFade);
    //ana.push(calloutFade);

    let mobileFade2: AnimationObject = {
      triggerPct:
        (40 * window.innerHeight) /
        document.getElementById(storyId).offsetHeight,
      animation: makeFadeAnimation("storyImg-" + story.anchor),
    };
    ana.push(mobileFade2);
    setAnimationList(ana);
  };


  useEffect(() => {
    // Gets the default bottom padding neeeded to stop the info right before the
    function getBottomPadding() {
      const imgBg = document.getElementById("imageBackground-" + story.anchor);
      const storyTitleDiv = document.getElementById(
        "storyTitleDiv-" + story.anchor
      );
      const secTitleH = storyTitleDiv.getBoundingClientRect().height;
      imgBg.style.top = 70+ Math.round(secTitleH) + "px";
      return;
    }

    const onScroll = () => {
      if (!isActive) return;
      const offsetPct = getOffsetPct(storyId);

      if (offsetPct < 0 || offsetPct >= 100) return;
      animationHandler({ offsetPct, animationList, windowSize });
    };

    if (isActive) {
      getBottomPadding();
      if (animationList.length == 0) {
        initiateAnimations();
      }
      window.removeEventListener("scroll", onScroll);
      window.addEventListener("scroll", onScroll, { passive: true });
    }
    return () => window.removeEventListener("scroll", onScroll);
  });

  return (
    <>
      <div className={`bg-${colorTheme}-50 relative min-h-[120vh]`}>
        <StoryTitle anchor={story.anchor} title={story.title} colorTheme={colorTheme} isDesktop={false}/>
        <ImageBackgroundContainer
          story={story}
          colorTheme={colorTheme}
        ></ImageBackgroundContainer>
        <div className="lg:hidden block h-[300px]"></div>

        <div
          id={`storyMain-${story.anchor}`}
          className={`responsive-container py-lg h-auto ml-auto md:z-10  z-10 relative `}
        >
         <CalloutDiv anchor={story.anchor} featuredCallOut={story.featuredCallOut} colorTheme={colorTheme}/>
          <StoryDiv story={story} colorTheme={colorTheme} ></StoryDiv>
        </div>
      </div>
    </>
  );
};

export default MobileStorySection;

const ImageBackgroundContainer = ({ story, colorTheme }) => {
  return (
    <div
      id={`imageBackground-${story.anchor}`}
      className={`imageBackground sticky w-screen bg-${colorTheme}-50 top-[70px] z-10 md:z-10 `} // h-[calc(100vh_-_70px)]
    >
      <div className="relative h-[calc(100vw_*_9_/_16)] md:h-[calc(100vh_-_70px)] md:max-h-screen w-screen mx-auto max-w-screen-2xl">
        <Image
          id={`storyImg-${story.anchor}`}
          src={story.illustration.url}
          layout="fill"
          objectFit="cover"
          className="storyImg w-screen absolute top-0 left-[60px] right-0 opacity-100 object-left-top transition-opacity duration-500"
        ></Image>
        <Image
          id={`contextImg-${story.anchor}`}
          src={story.contextIllustration.url}
          layout="fill"
          objectFit="cover"
          className=" w-screen absolute top-0 left-[60px] opacity-100 object-left-top"
        ></Image>
      </div>
    </div>
  );
};

