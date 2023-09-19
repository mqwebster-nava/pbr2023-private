import { useEffect, useRef, useState } from "react";
import { useOnScreen } from "utils/useOnScreen";
import Image from "next/image";
import classNames from "classnames";

import Callout from "components/blocks_reports/ReportContent/Callout";
import ReportContent from "components/blocks_reports/ReportContent/ReportContent";
import { getOffsetPct } from "../_utils";

const StorySection = ({
  story,
  colorTheme,
  sectionAnchor,
}) => {
  const [storyPct, setStoryPct] = useState(0);
  const storyRef = useRef(null);

  const storyId = `${sectionAnchor}--${story.anchor}`;

  const onScroll = () => {
    const offsetPct = getOffsetPct(storyId)
    if (offsetPct < -10 || offsetPct >= 100) return;
    setStoryPct(offsetPct);
  };

  useEffect(() => {
    window.removeEventListener("scroll", onScroll);
    window.addEventListener("scroll", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
    }
  }, [storyPct]);

  const calloutText = story.featuredCallOut && story.featuredCallOut.body;

  const statList = calloutText.split("\n\n---\n\n");

  const dividerStyles = classNames({
      "divide-gold-pbrcustomdark": colorTheme == "gold",
      "divide-plum-900": colorTheme == "plum",
      "divide-sage-900": colorTheme == "sage",
      "divide-purple-900": colorTheme == "purple",
      "divide-navy-900": colorTheme == "navy",
    });

  const StatEl = () => (
    <div className={`flex flex-col gap-8 divide-y-2 ${dividerStyles}`}>
      {statList.map((stat, i) => {
        let stats = stat.split("\n");
        return (
          <div
            key={`${story.anchor}-statGroup-${i}`}
            className={`flex flex-col gap-0 last:pt-8`}
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

        <div className={`responsive-container pt-8 grid grid-cols-12 gap-8`}>
          <div className="col-span-5">
            <div className={`font-serif font-light text-lg`}>
              <ReportContent
                docData={story.intro?.json}
                docLinks={story.intro?.links}
                variant={"report"}
                reportYear={"2022"}
                isMobileLandscape={false}
              />
            </div>
            <div className={`font-serif font-light`}>
              <ReportContent
                docData={story.body.json}
                docLinks={story.body.links}
                variant={"report"}
                reportYear={"2022"}
                isMobileLandscape={false}
              />
            </div>
          </div>

          <div className={`col-span-2 h-max sticky top-[212px]`}>
            <StatEl />
          </div>

          <div
            className={`col-span-5 h-max sticky top-[212px]`}
          >
            <div className={`relative min-h-[360px]`}>
              {/* TODO: convert into scroll animation component */}
              {images.map((image, i) => (
                <div
                  key={`${storyId}-image-${i}`}
                  className={`w-full absolute object-cover transition-opacity duration-500 ease-linear ${
                    (storyPct / 100) + (1 / images.length) > (i + 1) / images.length
                      ? `opacity-100`
                      : `opacity-0`
                  }`}
                >
                  <Image
                    src={image.url}
                    width={616}
                    height={435}
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
