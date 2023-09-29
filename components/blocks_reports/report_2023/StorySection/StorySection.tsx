import { useEffect, useRef, useState } from "react";
import { useOnScreen } from "utils/useOnScreen";
import Image from "next/image";
import classNames from "classnames";

import Callout2023 from "components/blocks_reports/ReportContent/Callout2023";
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

  const handleResize = () => setImageHeight(Math.round(imageRef.current?.offsetWidth * (435/616)))

  useEffect(() => {
    handleResize()
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    }
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

  const bgStyles = classNames({
    "bg-white": colorTheme == "gold",
    "bg-plum-50": colorTheme == "plum",
    "bg-sage-50": colorTheme == "sage",
    "bg-purple-50": colorTheme == "purple",
    "bg-navy-50": colorTheme == "navy",
  })

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
        <div className={`pt-8 grid grid-cols-6 gap-x-2.5 gap-y-10 lg:grid-cols-12 lg:gap-8 relative z-0`}>
          <div className={`col-span-full md:col-span-5 row-start-3 md:row-start-auto relative z-30 ${bgStyles}`}>
            <div className={`font-serif font-light text-base leading-[20px] md:text-lg md:leading-[28px] ${colorTheme == 'gold' ? `text-black` : ``}`}>
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
            <div className={`col-span-full md:col-span-2 row-start-2 lg:row-start-auto h-max lg:sticky -z-10 lg:top-[212px] ${bgStyles}`}>
              <div className={`relative`}>
                <Callout2023 variant={story.featuredCallOut.variant} body={calloutText} anchor={story.anchor} colorTheme={colorTheme} attribution={story.featuredCallOut.attribution} attributionRole={story.featuredCallOut.attributionRole} />
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
              <div className={`w-full md:w-3/5 text-xs font-serif`}>
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
