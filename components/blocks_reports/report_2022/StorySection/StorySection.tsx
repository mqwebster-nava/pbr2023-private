import { useEffect, useRef, useState } from "react";
import { useOnScreen } from "utils/useOnScreen";
import Image from "next/image";

import Callout from "components/blocks_reports/ReportContent/Callout";
import ReportContent from "components/blocks_reports/ReportContent/ReportContent";

const StorySection = ({
  story,
  colorTheme,
  sectionAnchor,
  activeStory,
  setActiveStory,
}) => {
  const [storyPct, setStoryPct] = useState(0);
  const storyRef = useRef(null);
  const isOnScreen = useOnScreen(storyRef);

  const storyId = `${sectionAnchor}--${story.anchor}`;

  useEffect(() => {
    const onScroll = () => {
      const storyEl = document.getElementById(storyId);
      if (!storyEl) return;

      const storyH = storyEl.offsetHeight;
      const storyTop = Math.max(
        Math.round(storyEl.getBoundingClientRect().top - 180) * -1,
        0
      );
      setStoryPct(Math.min(Math.round((storyTop / storyH) * 100), 100));
    };

    if (isOnScreen && activeStory !== null) {
      window.addEventListener("scroll", onScroll);
      return () => window.removeEventListener("scroll", onScroll);
    }
  }, [isOnScreen, storyPct]);

  useEffect(() => {
    if (isOnScreen && activeStory !== null) {
      setActiveStory(storyId);
    }
  }, [isOnScreen]);

  const calloutText = story.featuredCallOut && story.featuredCallOut.body;

  const statList = calloutText.split("\n\n---\n\n");
  const color = colorTheme;

  const StatEl = () => (
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

  // TODO: convert into scroll animation component
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
    <div ref={storyRef} id={storyId} className={`scroll-mt-[180px]`}>
      <div className={``}>
        {/* <div ref={storyRef} className={`absolute top-0 w-full h-4/5`}></div> */}

        <div className={`responsive-container flex flex-row gap-4`}>
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

          <div className={`w-44 h-full sticky top-[180px]`}>
            <StatEl />
          </div>

          <div
            className={`flex flex-col grow gap-12 w-7/12 h-full sticky top-[180px]`}
          >
            <div className={`w-full min-h-full aspect-video`}>
              {/* TODO: convert into scroll animation component */}
              {images.map((image, i) => (
                <div
                  className={`absolute object-cover transition-opacity duration-500 ease-linear ${
                    storyPct / (100 / images.length) > i - 1
                      ? `opacity-100`
                      : `opacity-0`
                  }`}
                >
                  <Image
                    src={image.url}
                    width={image.width}
                    height={image.height}
                    alt=""
                    className={``}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StorySection;
