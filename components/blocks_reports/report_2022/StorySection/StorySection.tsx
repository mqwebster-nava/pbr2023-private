import { useEffect, useRef, useState } from "react";
import { useOnScreen } from "utils/useOnScreen";
import Image from "next/image";

import Callout from "components/blocks_reports/ReportContent/Callout";
import ReportContent from "components/blocks_reports/ReportContent/ReportContent";
import classNames from "classnames";
import { LinkText } from "components/atom/LinkText/LinkText";
import ArrowDown from "../Atoms/ArrowDown";
import CrossfadeCarousel from "components/atom/CrossfadeCarousel/CrossfadeCarousel";

const StorySection = ({
  story,
  colorTheme,
  sectionAnchor,
  nextSection,
  nextSectionTitle,
  nextSectionType = "story",
  activeStory,
  setActiveStory,
}) => {
  const storyId = `${sectionAnchor}--${story.anchor}`;
  const nextId = nextSection;

  const storyRef = useRef(null);
  const isOnScreen = useOnScreen(storyRef);
  useEffect(() => {
    if (isOnScreen && activeStory !== null) {
      setActiveStory(storyId);
    }
  }, [isOnScreen]);

  const textStyles = classNames({
    "text-gold-900": colorTheme == "gold",
    "text-plum-900": colorTheme == "plum",
    "text-sage-900": colorTheme == "sage",
    "text-purple-900": colorTheme == "purple",
    "text-navy-900": colorTheme == "navy",
  });

  const borderStyles = classNames({
        "border-t-[1px] border-gold-900": colorTheme == "gold",
        "border-t-[1px] border-plum-500": colorTheme == "plum",
        "border-t-[1px] border-sage-600": colorTheme == "sage",
        "border-t-[1px] border-purple-600": colorTheme == "purple",
        "border-t-[1px] border-navy-600": colorTheme == "navy",
      })

  const hoverBgStyles = classNames({
    "hover:bg-gold-50": colorTheme == "gold",
    "hover:bg-plum-50": colorTheme == "plum",
    "hover:bg-sage-50": colorTheme == "sage",
    "hover:bg-purple-50": colorTheme == "purple",
    "hover:bg-navy-50": colorTheme == "navy",
  });

  let calloutText = story.featuredCallOut.body;

  if (calloutText.includes("//images")) {
    calloutText = <img src={story.featuredCallOut.body} alt="" />;
  }

  const images = story.illustration && story.contextIllustration ? [story.illustration, story.contextIllustration] : [];

  return (
    <div id={storyId} className={`text-${colorTheme}-900 bg-${colorTheme}-50`}>
      <div className={`relative`}>
        <div ref={storyRef} className={`absolute top-0 w-full h-4/5`}></div>

        <div
          className={`responsive-container flex flex-row gap-24 relative pb-28`}
        >
          <div className="flex flex-col gap-0 w-5/12 pt-4">
            <div className={`font-serif font-semibold`}>
              <ReportContent
                docData={story.intro?.json}
                docLinks={story.intro?.links}
                variant={"report"}
                reportYear={"2022"}
                isMobileLandscape={false}
              />
            </div>
            <div className={`font-serif font-normal`}>
              <ReportContent
                docData={story.body.json}
                docLinks={story.body.links}
                variant={"report"}
                reportYear={"2022"}
                isMobileLandscape={false}
              />
            </div>
          </div>

          <div
            className={`flex flex-col gap-12 w-7/12 h-fit sticky top-[142px]`}
          >
            <div className={`min-h-[400px]`}>
              <CrossfadeCarousel
                interval={2000}
                transition={1000}
                groupAltText={``}
                images={images.map((im) => {
                  return { src: im.url, ...im }
                })}
              />
            </div>
            <div>{calloutText}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StorySection;
