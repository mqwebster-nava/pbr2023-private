import React, { useEffect, useState } from "react";
import ReportContent, { REPORT_YEAR } from "../ReportContent/ReportContent";
import {
  makeFadeAnimation,
  makeFadeInAnimation,
} from "./_animations";
import ArrowDownColumn from "./Atoms/ArrowDownColumn";
import { animationHandler, AnimationObject, getOffsetPct } from "./_utils";
import { ReportIntroductionInterface } from "../ReportIntroduction/ReportIntroduction";
import {Signatures } from "../ReportIntroduction/SignaturesBlock";


const ReportIntroduction2021 = ({
    title,
    anchor,
    richBody,
    variant,
    signatures,
  }: ReportIntroductionInterface) => {
    // TODO not hardcode this
    const nextId = "pilots";
    const nextSectionTitle = "Small pilots that make a big impact";
  
    const [animationList, setAnimationList] = useState([]);
    const initiateAnimations = () => {
      const sectionH = document.getElementById(anchor).offsetHeight;
      const screenH = window.innerHeight;
  
      // make pct once it gets to full page
      const arrowFadeInTrigger = Math.round((10 * screenH) / sectionH);
      const arrowFadeOutTrigger = Math.round((100 * (sectionH - screenH)) / sectionH);
      let ana = [
        {
          triggerPct:  arrowFadeInTrigger,
          animation: makeFadeInAnimation(`${anchor}-next-arrow`, 0),
        },
        {
             triggerPct: arrowFadeOutTrigger,
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
        <ArrowDownColumn anchor={anchor} color={'purple-900'} nextId={nextId} nextSectionTitle={nextSectionTitle} nextSectionType={'section'}/>
      
          <div className="hidden lg:block  lg:col-start-1 col-span-4 row-start-1">
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
          <div className="lg:col-span-7 col-start-0 col-span-11 row-start-1 pr-xl">
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
              <ReportContent 
              docData={richBody.json} 
              docLinks={richBody.links}  
              variant={"report"}
              reportYear={"2021"}
              />
            </div>
            <Signatures signatures={signatures} colorTheme={"purple"}/>
          </div>
           </div>
      </div>
    );
  };
  
  export default ReportIntroduction2021;