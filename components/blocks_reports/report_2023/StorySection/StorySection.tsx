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
  const [imageHeight, setImageHeight] = useState(0);
  const storyRef = useRef(null);
  const imageRef = useRef(null);

  const handleResize = () => setImageHeight(Math.round(imageRef.current.offsetWidth * (435/616)))

  useEffect(() => {handleResize()}, [])
  useEffect(() => {
    // console.log(imageRef.current.id, Math.round(imageRef.current.offsetWidth * (435/616)))
    window.addEventListener("resize", handleResize);
  }, [])

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

  const statList = calloutText?.split("\n\n---\n\n");

  const borderStyles = classNames({
      "border-gold-pbrcustomdark": colorTheme == "gold",
      "border-plum-200": colorTheme == "plum",
      "border-sage-200": colorTheme == "sage",
      "border-purple-200": colorTheme == "purple",
      "border-navy-200": colorTheme == "navy",
    });

  const bgStyles = classNames({
    "bg-white": colorTheme == "gold",
    "bg-plum-50": colorTheme == "plum",
    "bg-sage-50": colorTheme == "sage",
    "bg-purple-50": colorTheme == "purple",
    "bg-navy-50": colorTheme == "navy",
  })

  const StatEl = () => {return (
    <div>
      {statList && <div className={`flex flex-col lg:px-4`}>
        {statList.map((stat, i) => {
          let stats = stat.split("\n");
          return (
            <div
              key={`${story.anchor}-statGroup-${i}`}
              className={`w-full h-full flex flex-col bg-${colorTheme}-50 relative`}
            >
              {i > 0 && <hr className={`my-8 w-3/5 h-[1px] border-t-[1px] ${borderStyles}`} />}
              <div className={`flex flex-col gap-2`}>
                {stats.map((statItem, j) => {
                  const statistic = statItem.split("__")[1];
                  const statisticBefore = statItem.split("__")[0];
                  const statisticAfter = statItem.split("__")[2];
                  return (
                    <div
                      key={`${story.anchor}-statGroup${i}Item-${j}`}
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
      </div>}
    </div>
  )};

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
        <div className={`pt-8 grid grid-cols-6 gap-x-2.5 gap-y-20 lg:grid-cols-12 lg:gap-8 relative z-0`}>
          <div className={`col-span-full md:col-span-5 row-start-3 md:row-start-auto relative z-30 ${bgStyles}`}>
            <div className={`font-serif font-light text-base leading-[20px] md:text-lg md:leading-[28px]`}>
              <ReportContent
                docData={story.intro?.json}
                docLinks={story.intro?.links}
                variant={"report"}
                reportYear={"2023"}
                isMobileLandscape={false}
              />
            </div>
            <div className={`font-serif font-light text-sm leading-[18px] md:text-base md:leading-[25.2px]`}>
              <ReportContent
                docData={story.body.json}
                docLinks={story.body.links}
                variant={"report"}
                reportYear={"2023"}
                isMobileLandscape={false}
              />
            </div>
          </div>

          {colorTheme !== 'gold' &&
            <div className={`col-span-4 md:col-span-2 row-start-2 lg:row-start-auto h-max lg:sticky -z-10 lg:top-[212px] ${bgStyles}`}>
              <div className={`relative`}>
                <StatEl />
              </div>
            </div>
          }

          <div
            className={`col-span-full ${colorTheme == 'gold' ? `lg:col-span-6 lg:col-start-7` : `lg:col-span-5 lg:row-start-auto`} row-start-1 lg:order-last flex flex-col gap-5 h-max sticky -z-20 lg:top-[212px]`}
          >
            <div ref={imageRef} style={{height: `${imageHeight}px`}} className={`relative max-w-[616px]`}>
              {/* TODO: convert into scroll animation component */}
              {images.map((image, i) => (
                <div key={`${storyId}-image-${i}`} className={``}>
                  <div
                    key={`${storyId}-image-sm-${i}`}
                    className={`block lg:hidden w-full absolute object-cover transition-opacity duration-500 ease-linear ${
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

                  <div
                    key={`${storyId}-image-lg-${i}`}
                    className={`hidden lg:block w-full absolute object-cover transition-opacity duration-500 ease-linear ${
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
                </div>
              ))}
            </div>

            {story.imageCaption &&
              <div className={`w-full md:w-2/5 type-preset-8 font-serif`}>
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
