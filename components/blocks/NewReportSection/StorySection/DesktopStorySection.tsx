import { useEffect, useState } from "react";
import Image from "next/image";
import PostContent from "../../PostBody/PostContent";
import { animationHandler, AnimationObject, debounce, getOffsetPct } from "../utils";
import { makeFadeAnimation, makeSlideUpAnimation } from "../animations";
import StoryDiv from "./StoryDiv";
import CalloutDiv from "./FeaturedCallOut";
import StoryTitle from "./StoryTitle";

// TODO  When expand need to initiate animations again to get based on larger size

const DesktopStorySection = ({
  story,
  colorTheme,
  sectionAnchor,
  windowSize,
  activeSection,
}) => {
const storyId = `${sectionAnchor}--${story.anchor}`;
  const isActive = activeSection == storyId;
  const [isCollapsed, setIsCollapsed] = useState(true);
  const [animationList, setAnimationList] = useState([]);
 

  const initiateAnimations = () => {
    let ana = [];
    let fadeInPct = 12;
    let fadeOutPct = 12;
    let delay=0
    let duration = 200;
   
    let backgroundIndividualFade: AnimationObject = {
      triggerPct:fadeInPct,
      windowSizes:["tablet"],
      animation: makeFadeAnimation("storyImg-" + story.anchor, delay, 400),
    };
    ana.push(backgroundIndividualFade);
    let backgroundFade: AnimationObject = {
      triggerPct:fadeOutPct,
      animation: makeFadeAnimation("contextImg-" + story.anchor, 0, duration),
    };
    let calloutIntro: AnimationObject = {
      triggerPct:fadeInPct,
      animation: makeSlideUpAnimation(`storyCallOut-${story.anchor}`, delay+200),
    };
    let summaryIntro: AnimationObject = {
      triggerPct:fadeInPct,
      animation: makeSlideUpAnimation(`storySummary-${story.anchor}`, delay+400),
    };
    ana.push(backgroundFade);
    ana.push(calloutIntro);
    ana.push(summaryIntro);

    let titleFade: AnimationObject = {
      triggerPct: 75,
      animation: makeFadeAnimation("storyTitleDiv-" + story.anchor,0, 200),
    };

    ana.push(titleFade);
    setAnimationList(ana);
  };


const onScroll =() => {

  if (!isActive && isCollapsed) return;
  const offsetPct = getOffsetPct(storyId);

  if(!isCollapsed && (offsetPct < -50 || offsetPct> 150)) {
    console.log('collapsing ', storyId)
    setIsCollapsed(true);
    animationHandler({ offsetPct, animationList, windowSize });
    document.getElementById(`contextImg-${story.anchor}`).style.opacity='100';
    return;
  }
  if (offsetPct < 0 || offsetPct >= 100) return;
  if(isCollapsed) animationHandler({ offsetPct, animationList, windowSize });
};


  const handleExpandCollapse = () => {
    const _isExpanding = isCollapsed;
    
    if(_isExpanding){
   
        document.getElementById(`contextImg-${story.anchor}`).style.opacity='0';
        //setAnimationList([]);
        setIsCollapsed(!isCollapsed);
        document.documentElement.style.scrollBehavior = "auto";
        window.scrollTo({
            top: document.getElementById(storyId).offsetTop,
            behavior:'auto'
        });
        document.documentElement.style.scrollBehavior = "smooth";
        const top = Math.round(document.getElementById("storyTitleDiv-" + story.anchor).offsetHeight + 80);
        document.getElementById("expandBtn-" + story.anchor).classList.replace("top-0", `top-[${top}px]`)
    

    } else {
        document.documentElement.style.scrollBehavior = "auto";
        window.scrollTo({
            top: document.getElementById(storyId).offsetTop + document.getElementById(storyId).offsetHeight*.15,
            behavior:'auto'
        })
        document.documentElement.style.scrollBehavior = "smooth";
      
       // initiateAnimations();
        setIsCollapsed(!isCollapsed);
       
    }
  };

  useEffect(() => {
    if (isActive || !isCollapsed) {
        if(isCollapsed){  document.getElementById(`contextImg-${story.anchor}`).style.opacity='100';}
        if (animationList.length == 0 ) {
            initiateAnimations();
        }
      window.removeEventListener("scroll", onScroll);
      window.addEventListener("scroll", onScroll, { passive: true });
    }
    if(!isActive && !isCollapsed ){
       // console.log("expanded",storyId);
       // if(_isCurrentAnchor) window.location.hash = ''
       // setIsCollapsed(true);
    }

    return () => window.removeEventListener("scroll", onScroll);
  });

  return (
    <div className={`bg-${colorTheme}-50 relative min-h-[200vh] `}>
        <ImageBackgroundContainerDesktop
          story={story}
          colorTheme={colorTheme}
          isCollapsed={isCollapsed}
          setCollapsed={() => handleExpandCollapse()}
        ></ImageBackgroundContainerDesktop>

      <div
          id={`storyExpanded-${story.anchor}`}
          className={`responsive-container h-auto  z-30 relative  -mt-[calc(100vh_-_160px)] ${!isCollapsed ?"block":"hidden"} `}
        >
          <StoryTitle
            anchor={story.anchor}
            title={story.title}
            colorTheme={colorTheme}
            isCollapsed={isCollapsed}
            isDesktop={true}
          />
          <CalloutDiv anchor={story.anchor} featuredCallOut={story.featuredCallOut} isCollapsed={isCollapsed}  colorTheme={colorTheme}/>
          <StoryDiv
            story={story}
            colorTheme={colorTheme}
            isCollapsed={isCollapsed}
            setCollapsed={handleExpandCollapse}
          />
        </div>
      </div>
  );
};

export default DesktopStorySection;



const ImageBackgroundContainerDesktop = ({
  story,
  colorTheme,
  isCollapsed,
  setCollapsed,
}) => {
  return (
    <div
      id={`imageBackground-${story.anchor}`}
      className={`imageBackground sticky w-screen bg-${colorTheme}-50 top-[70px] z-10 overflow-hidden `} // h-[calc(100vh_-_70px)]
    >
      <div className="relative h-[calc(100vh_-_70px)] max-h-screen w-screen mx-auto max-w-screen-2xl">
        <Image
          id={`storyImg-${story.anchor}`}
          src={story.illustration.url}
          layout="fill"
          objectFit="cover"
          className="storyImg w-screen absolute top-0 left-0 right-0 opacity-100 object-left-top"
        ></Image>
        <Image
          id={`contextImg-${story.anchor}`}
          src={story.contextIllustration.url}
          layout="fill"
          objectFit="cover"
          className={`w-screen absolute top-0 left-[60px] opacity-100 object-left-top ${isCollapsed ?"block":"hidden"}`}
        ></Image>
        <div
          id={`storyMain-${story.anchor}`}
          className={`absolute top-0 right-0 left-0 pt-lg h-auto z-10 responsive-container mx-auto ${isCollapsed ?"block":"hidden"} `}
        >
          <StoryTitle
            anchor={story.anchor}
            title={story.title}
            colorTheme={colorTheme}
            isCollapsed={isCollapsed}
            isDesktop={true}
          />
          <CalloutDiv anchor={story.anchor} featuredCallOut={story.featuredCallOut} isCollapsed={isCollapsed}  colorTheme={colorTheme}/>
          <StoryDiv
            story={story}
            colorTheme={colorTheme}
            isCollapsed={isCollapsed}
            setCollapsed={setCollapsed}
          />
        </div>
      </div>
    </div>
  );
};

//   const onScroll = useMemo(
//     ()=>debounce(() => {
//     // Do stuff with the event!
   
//   if (!isActive) return;
//   const offsetPct = getOffsetPct(storyId);
//   console.log(offsetPct);
//   if (offsetPct < 0 || offsetPct >= 100) return;
//   if(isCollapsed) animationHandler({ offsetPct, animationList });
// }, 10), []);
 /*
If it is a anchored section, we show the full story from the start. 


Otherwise, show the regular version
*/


// let urlAnchor, isStory;
// if(currentUrl.includes("#")){
//     urlAnchor = currentUrl.substring(currentUrl.lastIndexOf("#")+1)
//     console.log(storyId,urlAnchor);
//     if(currentUrl==urlAnchor && isCollapsed){
//         setIsCollapsed(isCollapsed);
//     }
// }


/* 
    // Gets the default bottom padding neeeded to stop the info right before the
    function getBottomPadding() {
      const storyTitleDiv = document.getElementById(
        "storyTitleDiv-" + story.anchor
      );
      const sectionImg = document.getElementById("storyImg-" + story.anchor);
      const calloutImg = document.getElementById(
        "storyCallOut-" + story.anchor
      );
      const summImg = document.getElementById("storySummary-" + story.anchor);
      const storyMain = document.getElementById("storyMain-" + story.anchor);
      const sectionH = sectionImg.getBoundingClientRect().height;
      const secTitleH = storyTitleDiv.getBoundingClientRect().height;
      const storyH =
        calloutImg.getBoundingClientRect().height +
        summImg.getBoundingClientRect().height;

      const r = Math.round(sectionH - secTitleH - storyH);
      storyMain.style.paddingBottom = r + "px";

      return;
    }

        <div
          id={`storyMain-${story.anchor}`}
          className={`responsive-container pt-lg h-auto ml-auto md:z-10  z-10 relative `}
        >
          <div
            id={`storyCallOut-${story.anchor}`}
            className=" w-full md:w-2/3 ml-auto h-auto flex justify-start items-center my-md "
          >
            {story.callOut ? (
              <Image
                className={"z-10"}
                src={story.callOut.url}
                height={story.callOut.height}
                width={story.callOut.width}
              ></Image>
            ) : (
              "CALL OUT"
            )}
          </div>
          <div
            id={`storySummary-${story.anchor}`}
            className={` w-full md:w-2/3 ml-auto font-serif text-${colorTheme}-900 type-preset-6 bg-${colorTheme}-50 ${
              isCollapsed ? "pb-sm" : "pb-md"
            }`}
          >
            <PostContent
              docData={story.intro.json}
              docLinks={story.intro.links}
            />
            <div className="w-full border-b-[1px] border-black flex justify-between">
              <button
                className="font-serif type-preset-6 hover:font-bold"
                onClick={() => {
                  setIsCollapsed(!isCollapsed);
                }}
              >
                {isCollapsed ? "See more" : "See less"}
              </button>
              +
            </div>
          </div>
          <div
            id={`storyContent-${story.anchor}`}
            className={`storyContent lg:w-2/3 ml-auto pb-[200px] font-serif type-preset-6 tracking-wide font-light text-${colorTheme}-50 ${
              isCollapsed ? "hidden" : "block"
            }`}
          >
            <PostContent
              docData={story.body.json}
              docLinks={story.body.links}
            />
          </div>
        </div> */