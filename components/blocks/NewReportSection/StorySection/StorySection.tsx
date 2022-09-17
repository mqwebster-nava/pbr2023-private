
import MobileStorySection from "./MobileStorySection";
import DesktopStorySection from "./DesktopStorySection";

// TODO  When expand need to initiate animations again to get based on larger size
const StorySection = ({
  story,
  colorTheme,
  sectionAnchor,
  windowSize,
  activeSection,
}) => {
  return (
    <section className="" id={`${sectionAnchor}--${story.anchor}`}>
      {windowSize==="mobile" ? <MobileStorySection story={story} colorTheme={colorTheme} sectionAnchor={sectionAnchor} activeSection={activeSection} windowSize={windowSize}/> : 
      <DesktopStorySection  story={story} colorTheme={colorTheme} sectionAnchor={sectionAnchor} activeSection={activeSection} windowSize={windowSize}/>
      }
  
    </section>
  );
};



export default StorySection;




//const [isCollapsed, setIsCollapsed] = useState(true);
  //const [animationList, setAnimationList] = useState([]);
  //const storyId = `${sectionAnchor}--${story.anchor}`;
 // const isActive = activeSection == storyId;

  // const initiateAnimations = () => {
  //   let ana = [];
  //   const storyTitleDiv = document.getElementById(
  //     "storyTitleDiv-" + story.anchor
  //   );
  //   const storyH = storyTitleDiv.getBoundingClientRect().height;
  //   const bgTriggerH = storyH + 50;
  //   let backgroundFade: AnimationObject = {
  //     triggerPct:
  //       (100 * bgTriggerH) / document.getElementById(storyId).offsetHeight,
  //     animation: makeFadeAnimation("contextImg-" + story.anchor),
  //   };

  //   ana.push(backgroundFade);
  //   let titleFade: AnimationObject = {
  //     triggerPct: 75,
  //     animation: makeFadeAnimation("storyTitleDiv-" + story.anchor),
  //   };

  //   ana.push(titleFade);
  //   if (windowSize === "mobile") {
  //     let mobileFade2: AnimationObject = {
  //       triggerPct:
  //         (40 * window.innerHeight) /
  //         document.getElementById(storyId).offsetHeight,
  //       animation: makeFadeAnimation("storyImg-" + story.anchor),
  //     };
  //     ana.push(mobileFade2);
  //   }
  //   setAnimationList(ana);
  // };
  // useEffect(() => {
  //   // Gets the default bottom padding neeeded to stop the info right before the
  //   function getBottomPadding() {
  //     // console.log(windowSize)
  //     if (windowSize === "desktop") {
  //       const storyTitleDiv = document.getElementById(
  //         "storyTitleDiv-" + story.anchor
  //       );
  //       const sectionImg = document.getElementById("storyImg-" + story.anchor);
  //       const calloutImg = document.getElementById(
  //         "storyCallOut-" + story.anchor
  //       );
  //       const summImg = document.getElementById("storySummary-" + story.anchor);
  //       const storyMain = document.getElementById("storyMain-" + story.anchor);
  //       const sectionH = sectionImg.getBoundingClientRect().height;
  //       const secTitleH = storyTitleDiv.getBoundingClientRect().height;
  //       const storyH =
  //         calloutImg.getBoundingClientRect().height +
  //         summImg.getBoundingClientRect().height;

  //       const r = Math.round(sectionH - secTitleH - storyH);
  //       storyMain.style.paddingBottom = r + "px";
  //     } else if (windowSize === "mobile") {
  //       // console.log(windowSize)
  //       const imgBg = document.getElementById(
  //         "imageBackground-" + story.anchor
  //       );
  //       const storyTitleDiv = document.getElementById(
  //         "storyTitleDiv-" + story.anchor
  //       );
  //       const secTitleH = storyTitleDiv.getBoundingClientRect().height;
  //       imgBg.style.top = 70 + Math.round(secTitleH) + "px";
  //     }
  //     return;
  //   }

  //   const onScroll = () => {
  //     if (!isActive) return;
  //     const offsetPct = getOffsetPct(storyId);

  //     if (offsetPct < 0 || offsetPct >= 100) return;
  //     animationHandler({ offsetPct, animationList });
  //   };

  //   if (isActive) {
  //     getBottomPadding();
  //     if (animationList.length == 0) {
  //       initiateAnimations();
  //     }
  //     window.removeEventListener("scroll", onScroll);
  //     window.addEventListener("scroll", onScroll, { passive: true });
  //   }
  //   return () => window.removeEventListener("scroll", onScroll);
  // });


   {/* <div className={`bg-${colorTheme}-50 relative h-[200vh]`}>
         <div
          id={`storyTitleDiv-${story.anchor}`}
          className={`sticky top-[70px] z-20 right-0 responsive-container `}
        >
          <div className={`bg-${colorTheme}-50 ml-auto md:w-2/3 w-full pt-md `}>
            <h2
              id={`storyTitle-${story.anchor}`}
              className={`storyTitle md:type-preset-3 type-preset-4 font-black text-${colorTheme}-900 py-md  opacity-100`}
            >
              {story.title}
            </h2>
          </div>
        </div> 
        <ImageBackgroundContainerDesktop
          story={story}
          colorTheme={colorTheme}
        ></ImageBackgroundContainerDesktop>
        <div className="lg:hidden block h-[300px]"></div>

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
        </div> 
      </div>*/}
/*

import { useEffect, useState } from "react";
import Image from "next/image";
import PostContent from "../PostBody/PostContent";
import { animationHandler, AnimationObject, getOffsetPct } from "./utils";


// TODO  When expand need to initiate animations again to get based on larger size





const makeFadeAnimation = (elementId) => {
  const an = document.getElementById(elementId).animate(
    [
      { opacity: '100%' },
      { opacity: '0%' },
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

const StorySection = ({ story, colorTheme, sectionAnchor, windowSize, activeSection }) => {
  const [isCollapsed, setIsCollapsed] = useState(true);
  const [animationList, setAnimationList] = useState([]);
  const storyId = `${sectionAnchor}--${story.anchor}`;
  const isActive = activeSection==storyId;


  const initiateAnimations= () =>{
    let ana  = []
    const storyTitleDiv = document.getElementById(
      "storyTitleDiv-" + story.anchor
    );
    const storyH = storyTitleDiv.getBoundingClientRect().height;
    const bgTriggerH = storyH + 50;
    let backgroundFade: AnimationObject = {
      triggerPct: 100* bgTriggerH / document.getElementById(storyId).offsetHeight,
      animation: makeFadeAnimation("contextImg-" + story.anchor),
    };

    ana.push(backgroundFade);
    let titleFade: AnimationObject = {
      triggerPct: 75,
      animation: makeFadeAnimation("storyTitleDiv-" + story.anchor),
    };

    ana.push(titleFade);
    if(windowSize==="mobile"){
    
      let mobileFade2: AnimationObject = {
        triggerPct: 40* window.innerHeight / document.getElementById(storyId).offsetHeight,
        animation: makeFadeAnimation("storyImg-" + story.anchor),
      };
      ana.push(mobileFade2);
    }
    setAnimationList(ana);
  }
const handleExpand = () => {

  }


  useEffect(() => {
    // Gets the default bottom padding neeeded to stop the info right before the
    function getBottomPadding() {
     // console.log(windowSize)
      if (windowSize === "desktop") {
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
      } else if(windowSize==="mobile"){
       // console.log(windowSize)
        const imgBg = document.getElementById("imageBackground-"+story.anchor)
        const storyTitleDiv = document.getElementById("storyTitleDiv-" + story.anchor);
        const secTitleH = storyTitleDiv.getBoundingClientRect().height;
        imgBg.style.top = 70+ Math.round(secTitleH) + "px"
      }
      return;
    }

    const onScroll = () => {
      if(!isActive)return;
      const offsetPct = getOffsetPct(storyId);
      
      if (offsetPct < 0 || offsetPct >= 100) return;
      animationHandler({offsetPct, animationList});
    };
    
   

    if(isActive){
      getBottomPadding();
      if(animationList.length==0){
        initiateAnimations();
      }
      window.removeEventListener("scroll", onScroll);
      window.addEventListener("scroll", onScroll, { passive: true });
    }
    return () => window.removeEventListener("scroll", onScroll);
  });

  return (
    <section className="" id={`${sectionAnchor}--${story.anchor}`}>
      <div className={`bg-${colorTheme}-50 relative`}>
        <div
          id={`storyTitleDiv-${story.anchor}`}
          className={`sticky top-[70px] z-20 right-0 responsive-container `}
        >
          <div className={`bg-${colorTheme}-50 ml-auto md:w-2/3 w-full pt-md `}>
            <h2
              id={`storyTitle-${story.anchor}`}
              className={`storyTitle md:type-preset-3 type-preset-4 font-black text-${colorTheme}-900 py-md  opacity-100`}
            >
              {story.title}
            </h2>
          </div>
        </div>
        <ImageBackgroundContainer story={story} colorTheme={colorTheme}></ImageBackgroundContainer>
         <div className="lg:hidden block h-[300px]"></div> 
       
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
        </div>
      </div>
    </section>
  );
};

export default StorySection;


const ImageBackgroundContainer = ({story, colorTheme}) => {
return (  <div
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
</div>)
}




        // const sectionImg = document.getElementById("storyImg-" + story.anchor);
        // const storyTitleDiv = document.getElementById(
        //   "storyTitleDiv-" + story.anchor
        // );
        // const storyH = storyTitleDiv.getBoundingClientRect().height;
        // const bgTriggerH = storyH + 50;

        // if (
        //   offset - topTrigger > bgTriggerH &&
        //   sectionImg.classList.contains("opacity-0")
        // ) {
        //   sectionImg.classList.replace("opacity-0", "opacity-100");
        // } else if (
        //   offset - topTrigger < bgTriggerH &&
        //   sectionImg.classList.contains("opacity-100")
        // ) {
        //   sectionImg.classList.replace("opacity-100", "opacity-0");
        // }
        // TODO snap to spot
        // else if (offsetPct > 75 && offsetPct <90  && !isSnapScrolling) {
        //   setIsSnapScrolling(true);
        //   window.scrollTo({
        //     top: bottomTrigger,
        //     behavior: 'smooth'
        //   });
        // }
*/
