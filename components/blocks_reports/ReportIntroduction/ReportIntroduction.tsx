// TODO Animation with arrow

import PostContent from "components/blocks/PostBody/PostContent";
import ResponsiveContentContainer from "components/blocks/ResponsiveContentContainer/ResponsiveContentContainer";
import React, { useEffect, useState } from "react";
import { ContentfulImageAsset } from "shared_interfaces/post_interface";
import {
  makeFadeAnimation,
  makeFadeInAnimation,
  makeSlideUpAnimation,
} from "../NewReportSection/animations";
import ArrowDown from "../NewReportSection/Atoms/ArrowDown";
import { animationHandler, AnimationObject, getOffsetPct } from "../NewReportSection/utils";
import { SignatureInterface, Signatures } from "./SignaturesBlock";

export interface ReportIntroductionInterface {
  title: string;
  anchor: string;
  richBody: any; // Rich text from contentful
  signatures: Array<SignatureInterface>;
  variant: string;
}

const ReportIntroductionBlock = (props: ReportIntroductionInterface) => {
  return props.variant == "PBR 2021" ? (
    <IntroductionBlock2021 {...props} />
  ) : (
    <IntroductionBlock {...props} />
  );
};

const IntroductionBlock2021 = ({
  title,
  anchor,
  richBody,
  variant,
  signatures,
}: ReportIntroductionInterface) => {
  const nextId = "pilots";
  const [animationList, setAnimationList] = useState([]);
  const initiateAnimations = () => {
    const sectionH = document.getElementById(anchor).offsetHeight;
    const screenH = window.innerHeight;

    // make pct once it gets to full page
    const desktopTriggerPct = Math.round((50 * screenH) / sectionH);
    const mobileTriggerPct = Math.round((30 * screenH) / sectionH);
    const storyOutTrigger = Math.round((100 * (sectionH - screenH)) / sectionH);
    let ana = [
      {
        triggerPct:  desktopTriggerPct,
        triggerPcts: {
          mobile: mobileTriggerPct,
          tablet:  mobileTriggerPct,
        },
        animation: makeFadeInAnimation(`${anchor}-next-arrow`, 0),
      },
      {
           triggerPct: storyOutTrigger,
           animation: makeFadeAnimation(`${anchor}-next-arrow-container`, 0, 200),
      }
    ];
    setAnimationList(ana);
    return ana;
  };

  useEffect(() => {
    // Gets the default bottom padding neeeded to stop the info right before the

    const onScroll = () => {
      const offsetPct = getOffsetPct(anchor);
      if (offsetPct < 0 || offsetPct >= 100) return;
      animationHandler({ offsetPct, animationList });
    };
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");

    if (animationList.length == 0 && mediaQuery && !mediaQuery.matches) {
      const ana = initiateAnimations();
      animationHandler({ offsetPct: getOffsetPct(anchor), animationList: ana });
    }
    window.removeEventListener("scroll", onScroll);
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => window.removeEventListener("scroll", onScroll);
  });
  return (
    <div id={`${anchor}`} className="bg-purple-50 mt-3xl" tabIndex={0}>
      <div className="responsive-container  py-2xl grid grid-cols-12 ">
        <div className="hidden lg:block lg:col-span-4">
          <div
            id={`${anchor}-desktop-title`}
            className=" text-purple-900 sticky top-[70px] bg-purple-50 pt-md z-20 "
          >
            <h2
              className={`font-serif font-light xl:text-7xl type-preset-1  pb-2xl`}
            >
              {title}
            </h2>
          </div>
        </div>
        <div className="lg:col-span-7 col-start-0 col-span-11 pr-xl">
          <div
            id={`${anchor}-mobile-title`}
            className="font-serif text-purple-900 sticky top-[70px] bg-purple-50 pt-md z-20 lg:hidden "
          >
            <h2
              className={`font-serif font-light xl:text-7xl type-preset-1  pb-2xl`}
            >
              {title}
            </h2>
          </div>
          <div
            id={`${anchor}-body`}
            className="font-serif font-light text-purple-900 pt-sm lg:pt-xl pb-2xl "
          >
            <PostContent docData={richBody.json} docLinks={richBody.links} />
          </div>
          <Signatures signatures={signatures} colorTheme={"purple"}/>
        </div>
        <div
          className="col-span-1 block opacity-100"
          id={`${anchor}-next-arrow-container`}
        >
          <a
            id={`${anchor}-next-arrow`}
            href={`#${nextId}`}
            aria-label={`Skip to next section`}
            className=" group w-full sticky top-[calc(100vh_-_150px)] px-md  mb-2xl flex flex-col items-center opacity-0 motion-reduce:opacity-100"
          >
            <p className="type-preset-7  text-purple-900 opacity-0   group-hover:opacity-100 group-focus:opacity-100">
              Next <br />
              section
            </p>
            <ArrowDown sectionId={`intro`} color={"purple-900"}></ArrowDown>
          </a>
        </div>
      </div>
    </div>
  );
};

const IntroductionBlock = ({
  title,
  anchor,
  richBody,
  variant,
  signatures,
}: ReportIntroductionInterface) => {
  return (
    <section className="bg-sage-50 " id={anchor}>
      <ResponsiveContentContainer padding="py-4xl" alignment="center">
        <div className="font-serif text-black">
          <PostContent docData={richBody.json} docLinks={richBody.links} variant="report sage" />
        </div>
        <Signatures signatures={signatures} colorTheme={"sage"} />
      </ResponsiveContentContainer>
    </section>
  );
};

export default ReportIntroductionBlock;
