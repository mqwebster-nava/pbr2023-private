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
  activeStory,
  setActiveStory,
}) => {
  const storyId = `${sectionAnchor}--${story.anchor}`;

  const storyRef = useRef(null);
  const isOnScreen = useOnScreen(storyRef);
  useEffect(() => {
    if (isOnScreen && activeStory !== null) {
      setActiveStory(storyId);
    }
  }, [isOnScreen]);

  let calloutText = story.featuredCallOut && story.featuredCallOut.body;

  if (calloutText && calloutText.includes("//images")) {
    calloutText = <img src={story.featuredCallOut.body} alt="" />;
  }

  const images = story.illustration && story.contextIllustration ? story.storyImageStepsCollection ? [story.illustration, story.contextIllustration, ...story.storyImageStepsCollection.items] : [story.illustration, story.contextIllustration] : [];

  return (
    <div id={storyId} className={`scroll-mt-[180px]`}>
      <div className={`relative`}>
        <div ref={storyRef} className={`absolute top-0 w-full h-4/5`}></div>

        <div
          className={`responsive-container flex flex-row gap-24 pb-28`}
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
            className={`flex flex-col gap-12 w-7/12 h-full sticky top-[180px]`}
          >
            <div className={`min-h-full aspect-video`}>
              <CrossfadeCarousel
                interval={1500}
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
