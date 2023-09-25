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

  const hRuleStyles = classNames({
      "bg-gold-pbrcustomdark": colorTheme == "gold",
      "bg-plum-200": colorTheme == "plum",
      "bg-sage-200": colorTheme == "sage",
      "bg-purple-200": colorTheme == "purple",
      "bg-navy-200": colorTheme == "navy",
    });

  const bgStyles = classNames({
    "bg-gold-50": colorTheme == "gold",
    "bg-plum-50": colorTheme == "plum",
    "bg-sage-50": colorTheme == "sage",
    "bg-purple-50": colorTheme == "purple",
    "bg-navy-50": colorTheme == "navy",
  })

  const StatEl = () => (
    <div className={`flex flex-col md:px-4`}>
      {statList.map((stat, i) => {
        let stats = stat.split("\n");
        return (
          <div
            key={`${story.anchor}-statGroup-${i}`}
            className={`flex flex-col`}
          >
            {i > 0 && <hr className={`my-8 w-3/5 h-[1px] ${hRuleStyles}`} />}
            <div className={`flex flex-col gap-2`}>
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
                      className={`text-3xl font-serif font-light`}
                    >
                      {statistic}
                    </span>
                    <span>{statisticAfter}</span>
                  </div>
                );
              })}
            </div>
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
    <div ref={storyRef} id={storyId} className={`scroll-mt-[148px]`}>
      <div className={``}>
        {/* <div ref={storyRef} className={`absolute top-0 w-full h-4/5`}></div> */}

        <div className={`pt-8 grid grid-cols-6 gap-x-2.5 gap-y-8 md:grid-cols-12 md:gap-8 relative z-0`}>
          <div className={`col-span-5 row-start-3 md:row-start-auto relative z-30 ${bgStyles}`}>
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

          <div className={`col-span-5 md:col-span-2 row-start-2 md:row-start-auto h-max sticky -z-10 top-[352px] xxs:top-[464px] xs:top-[396px] sm:top-[644px] md:top-[212px] ${bgStyles}`}>
            <div className={`w-3/5 md:w-full`}>
              <StatEl />
            </div>
          </div>

          <div
            className={`col-span-5 row-start-1 md:row-start-auto md:order-last flex flex-col gap-2 md:gap-5 h-max sticky -z-20 top-[212px]`}
          >
            <div className={`relative min-h-[140px] xxs:min-h-[252px] xs:min-h-[284px] sm:min-h-[432px] md:min-h-[244px] lg:min-h-[320px] xl:min-h-[360px]`}>
              {/* TODO: convert into scroll animation component */}
              {images.map((image, i) => (
                <div
                  key={`${storyId}-image-${i}`}
                  className={`w-full absolute object-cover transition-opacity duration-500 ease-linear lg:${
                    (storyPct / 100) + (1 / images.length) > (i + 1) / images.length
                      ? `opacity-100`
                      : `opacity-0`
                  } md:${
                    (storyPct / 100) + (1 / images.length) > (i + 1) / images.length
                      ? `opacity-100`
                      : `opacity-0`
                  } ${
                    (storyPct / 100) + (4 / images.length) > (i + 1) / images.length
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

            {story.imageCaption &&
              <div className={`w-3/5 md:w-2/5 type-preset-8 font-serif`}>
                {story.imageCaption}
              </div>
            }
          </div>
        </div>
      </div>
    </div>
  );
};

export default StorySection;
