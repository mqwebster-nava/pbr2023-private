import { useEffect, useState } from "react";
import Image from "next/image";
import PostContent from "../PostBody/PostContent";

const StorySection = ({ story, colorTheme, sectionAnchor, windowSize }) => {
  const [isCollapsed, setIsCollapsed] = useState(true);
  const [isActive, setIsActive] = useState(false);
  //const [isSnapScrolling, setIsSnapScrolling] = useState(false);
  const storyId = `${sectionAnchor}--${story.anchor}`;

  const getTop = (el, extraOffset) => el.offsetTop - extraOffset;
  const getBottom = (el, extraOffset) =>
    getTop(el, extraOffset) + el.offsetHeight - extraOffset;

  useEffect(() => {
    // Gets the default bottom padding neeeded to stop the info right before the
    function getBottomPadding() {
      console.log(windowSize)
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
        console.log(windowSize)
        const imgBg = document.getElementById("imageBackground-"+story.anchor)
        const storyTitleDiv = document.getElementById("storyTitleDiv-" + story.anchor);
        const secTitleH = storyTitleDiv.getBoundingClientRect().height;
        imgBg.style.top = 70+ Math.round(secTitleH) + "px"

      }

      return;
    }

    const onScroll = () => {
      const offset = window.pageYOffset;
      const secElement = document.getElementById(storyId);
      if (!secElement) return;
      const topTrigger = getTop(secElement, 30);
      const bottomTrigger = getBottom(secElement, 30);

      const _isActive = offset > topTrigger && offset < bottomTrigger;
      if (_isActive !== isActive) setIsActive(_isActive);

      if (_isActive) {
        const offsetPct = Math.round(
          (100 * (offset - topTrigger)) / (bottomTrigger - topTrigger)
        );
        if (offsetPct < 0 || offsetPct >= 100) return;

        const sectionImg = document.getElementById("storyImg-" + story.anchor);
        const storyTitleDiv = document.getElementById(
          "storyTitleDiv-" + story.anchor
        );
        const storyH = storyTitleDiv.getBoundingClientRect().height;
        const bgTriggerH = storyH + 50;
        if (
          offset - topTrigger > bgTriggerH &&
          sectionImg.classList.contains("opacity-0")
        ) {
          sectionImg.classList.replace("opacity-0", "opacity-100");
        } else if (
          offset - topTrigger < bgTriggerH &&
          sectionImg.classList.contains("opacity-100")
        ) {
          sectionImg.classList.replace("opacity-100", "opacity-0");
        }
        // TODO snap to spot
        // else if (offsetPct > 75 && offsetPct <90  && !isSnapScrolling) {
        //   setIsSnapScrolling(true);
        //   window.scrollTo({
        //     top: bottomTrigger,
        //     behavior: 'smooth'
        //   });
        // }
      }
    };
    getBottomPadding();
    window.removeEventListener("scroll", onScroll);
    window.addEventListener("scroll", onScroll, { passive: true });
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


        <div
          id={`imageBackground-${story.anchor}`}
          className={`imageBackground sticky w-screen bg-${colorTheme}-50 top-[70px] z-10 md:z-10 `} // h-[calc(100vh_-_70px)]
        >
          <div className="relative h-[calc(100vw_*_9_/_16)] md:h-[calc(100vh_-_70px)] md:max-h-screen w-screen mx-auto max-w-screen-2xl">
            <Image
              id={``}
              src={story.contextIllustration.url}
              width={16}
              height={9}
              layout="fill"
              objectFit="cover"
              className=" w-screen absolute top-0 left-[60px] opacity-90 object-left-top"
            ></Image>
            <Image
              id={`storyImg-${story.anchor}`}
              src={story.illustration.url}
              width={16}
              height={9}
              layout="fill"
              objectFit="cover"
              className="storyImg w-screen absolute top-0 left-[60px] right-0 opacity-0 object-left-top transition-opacity duration-500"
            ></Image>
          </div>
        </div>
         <div className="lg:hidden block h-[300px]"></div> 
        <div
          id={`storyMain-${story.anchor}`}
          className={`responsive-container pt-lg h-auto ml-auto md:z-10  z-0 relative `}
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
              isCollapsed ? "pb-sm" : "pb-2xl"
            }`}
          >
            <PostContent
              docData={story.intro.json}
              docLinks={story.intro.links}
            />
            <div className="w-full">

            <hr />
            <button
              className="font-serif type-preset-6 underline hover:font-bold"
              onClick={() => {
                setIsCollapsed(!isCollapsed);
              }}
            >
              {isCollapsed ? "See more" : "See less"}
            </button>
            </div>
          </div>
          <div
            id={`storyContent-${story.anchor}`}
            className={`storyContent lg:w-2/3 ml-auto pb-[200px] font-serif type-preset-6 font-light text-${colorTheme}-50 ${
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
