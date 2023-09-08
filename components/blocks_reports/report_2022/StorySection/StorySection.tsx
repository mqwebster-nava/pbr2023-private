import { useEffect, useRef, useState } from "react";
import { useOnScreen } from "utils/useOnScreen";
import Image from "next/image";

import Callout from "components/blocks_reports/ReportContent/Callout";
import ReportContent from "components/blocks_reports/ReportContent/ReportContent";
import classNames from "classnames";
import { LinkText } from "components/atom/LinkText/LinkText";
import ArrowDown from "../Atoms/Arrow";
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

  const calloutText = story.featuredCallOut && story.featuredCallOut.body;

  const statList = calloutText.split("\n\n---\n\n");
  const color = colorTheme;

  let statEl = () => (
    <div className={`flex flex-col gap-8 divide-y-[1px] divide-${color}-900`}>
      {statList.map((stat, i) => {
        let stats = stat.split("\n");
        return (
          <div
            key={`${story.anchor}-statGroup-${i}`}
            className={`flex flex-col gap-0 py-8`}
          >
            {stats.map((statItem, j) => {
              const statistic = statItem.split("__")[1];
              const statisticBefore = statItem.split("__")[0];
              const statisticAfter = statItem.split("__")[2];
              return (
                <div
                  key={`${story.anchor}-statGroupItem-${j}`}
                  className={`inline-flex flex-col gap-0 text-xs`}
                >
                  <span>{statisticBefore}</span>
                  <span
                    className={`w-20 text-5xl leading-tight font-serif font-light pb-2`}
                  >
                    {statistic}
                  </span>
                  <span>{statisticAfter}</span>
                </div>
              );
            })}
          </div>
        );
      })}
    </div>
  );

  const images =
    story.illustration && story.contextIllustration
      ? story.storyImageStepsCollection
        ? [
            story.illustration,
            story.contextIllustration,
            ...story.storyImageStepsCollection.items,
          ]
        : [story.illustration, story.contextIllustration]
      : [];

  return (
    <div id={storyId} className={`scroll-mt-[180px]`}>
      <div className={`relative`}>
        <div ref={storyRef} className={`absolute top-0 w-full h-4/5`}></div>

        <div className={`responsive-container flex flex-row gap-4 pb-28`}>
          <div className="flex flex-col w-[46%] gap-0 pt-4">
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

          <div className={`w-44 h-full sticky top-[180px]`}>{statEl()}</div>

          <div
            className={`flex flex-col grow gap-12 w-7/12 h-full sticky top-[180px]`}
          >
            <div className={`w-full min-h-full aspect-video`}>
              <CrossfadeCarousel
                interval={1500}
                transition={1000}
                groupAltText={``}
                images={images.map((im) => {
                  return { src: im.url, ...im };
                })}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StorySection;
