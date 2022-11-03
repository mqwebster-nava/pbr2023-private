import { LinkText } from "components/atom";
import { useEffect, useState } from "react";
import MarkdownComponent from "utils/MarkdownComponent";
import { LinkListItem } from "./Atoms/LinkListItem";
import { makeSlideUpAnimation } from "./_animations";
import {
  animationHandler,
  AnimationObject,
  borderColor,
  detectMob,
  dividerColor,
  getOffsetPct,
  WindowSize,
} from "./_utils";

// TODO change the color of the lines to match table of context color

const SectionIntro = ({ section, i }) => {
  const [animationList, setAnimationList] = useState([]);
  const [isMobileLandscape, setIsMobileLandscape] = useState(false);


  const initiateAnimations = () => {
    let ana = [];
    const windowSizes: Array<WindowSize> = ["mobile", "tablet", "desktop"];
    let ThemeSlideUp: AnimationObject = {
      triggerPct: -40,
      //noRepeat:true,
      windowSizes: windowSizes,
      triggerPcts: { mobile: -90 },
      animation: makeSlideUpAnimation("themeNum-" + section.anchor, 0),
    };
    let TitleSlideUp: AnimationObject = {
      triggerPct: -30,
      //noRepeat:true,
      windowSizes: windowSizes,
      triggerPcts: { mobile: -80 },
      animation: makeSlideUpAnimation("h2-" + section.anchor, 0),
    };
    let SectionBodySlideUp: AnimationObject = {
      triggerPct: -10,
      //noRepeat:true,
      windowSizes: windowSizes,
      triggerPcts: { mobile: -70 },
      animation: makeSlideUpAnimation("sectionBody-" + section.anchor, 0),
    };

    let SectionStoriesSlideUp: AnimationObject = {
      triggerPct: -10,
      //noRepeat:true,
      windowSizes: windowSizes,
      triggerPcts: { mobile: -70 },
      animation: makeSlideUpAnimation(`sectionStories-${section.anchor}`, 0),
    };

    ana.push(TitleSlideUp);
    ana.push(ThemeSlideUp);
    ana.push(SectionBodySlideUp);
    ana.push(SectionStoriesSlideUp);

    setAnimationList(ana);
  };

  useEffect(() => {
    // Gets the default bottom padding neeeded to stop the info right before the

    const onScroll = () => {
      const offsetPct = getOffsetPct(section.anchor);
      if (offsetPct < -110 || offsetPct >= 50) return;
      const inFocus = document
        .getElementById(section.anchor)
        .contains(document.activeElement);
      animationHandler({ offsetPct, animationList, inFocus });
    };
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");

    if (animationList.length == 0 && mediaQuery && !mediaQuery.matches) {
      initiateAnimations();
    }
    const _isMobLan = detectMob() && window.matchMedia("(orientation: landscape)").matches;
    if(_isMobLan!==isMobileLandscape) setIsMobileLandscape(_isMobLan);

    window.removeEventListener("scroll", onScroll);
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => window.removeEventListener("scroll", onScroll);
  });

  const colorTheme = section.colorTheme ?? "purple";
  const bg =
    section.colorTheme === "gold"
      ? `bg-${colorTheme}-dark`
      : `bg-${colorTheme}-900`;
  const textColor = "white"; //section.colorTheme === "gold" ? "black" : "white";

  return (
    <section
      id={`${section.anchor}`}
      className="h-auto md:h-[140vh]"
      tabIndex={0}
    >
      <div className={`hidden lg:h-[100px] bg-${colorTheme}-900`}></div>
      <div
        className={`${bg} w-full md:min-h-screen block md:sticky md:top-[70px]`}
      >
        <div className="responsive-container">
          <div className="lg:pt-4xl pt-3xl ">
            <p
              className={`text-${textColor} type-preset-6 pb-sm max-w-screen-md mr-auto font-serif font-normal  opacity-0 motion-reduce:opacity-100 focus:opacity-100`}
              id={`themeNum-${section.anchor}`}
            >
              Theme {i}
            </p>
            <h2
              className={`${isMobileLandscape? "type-preset-3": "md:text-7xl type-preset-1"} font-black text-${textColor}  pb-3xl max-w-screen-md mr-auto opacity-0 motion-reduce:opacity-100 focus:opacity-100`}
              id={`h2-${section.anchor}`}
            >
              {section.title}
            </h2>
            <div
              id={`sectionBody-${section.anchor}`}
              className={`${isMobileLandscape? "type-preset-6": "type-preset-5"} font-serif font-light text-${textColor} max-w-screen-md opacity-0 motion-reduce:opacity-100 pb-lg focus:opacity-100 tracking-[0.015em] `}
            >
              <MarkdownComponent content={section.body} />
            </div>
            <div
              id={`sectionStories-${section.anchor}`}
              className={`type-preset-6 font-serif font-light pb-[160px] max-w-screen-md opacity-0 motion-reduce:opacity-100 focus:opacity-100 `}
            >
              <h3
                className={`font-normal type-preset-6 pb-md text-${textColor} tracking-[0.015em]`}
              >
                Stories
              </h3>
              <hr className={`${borderColor(colorTheme)} `} />
              <ul
                className={`grid grid-cols-1 md:grid-cols-3 gap-x-xl pt-xs gap-y-xs
                divide-y-[1px] md:divide-y-0 ${dividerColor(colorTheme)}`}
              >
                {section.items.map((story) => {
                  return (
                    <LinkListItem
                    key={`sectionIntro-${story.anchor}`}
                    href={`#${section.anchor}--${story.anchor}`}
                    variant={"default"}
                    hoverStyle={"underlined"}
                    ariaLabel={`Skip to ${story.title}`}
                    color={"white"}
                  >
                    {story.title}
                  </LinkListItem>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionIntro;

  // <div
                    //   className="w-full md:w-1/3  pt-md type-preset-6 pr-lg tracking-[0.015em]"
                     
                    // >
                    //   <LinkText
                    //     href={`#${section.anchor}--${story.anchor}`}
                    //     variant={"default"}
                    //     hoverStyle="underlined"
                    //     color={"white"}
                    //     ariaLabel={`Skip to ${story.title}`}
                    //     linkSpan={"full width"}
                    //   >

                    //     {story.title}
                    //   </LinkText>
                    // </div>