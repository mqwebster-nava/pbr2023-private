import { PageHeader } from "components/blocks";
import ReportIntroductionBlock from "components/blocks/NewReportSection/ReportIntroduction";
import ReportHero from "components/blocks/PageHeaders/ReportHero";
import dynamic from "next/dynamic";
import React, { useEffect, useRef, useState } from "react";
const TextBodyBlock = dynamic(
  () => import("components/blocks/TextBodyBlock/TextBodyBlock")
);

import { PageInterface } from "shared_interfaces/page_interface";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { ScrollToPlugin } from "gsap/dist/ScrollToPlugin";
import ReportNavbar from "components/blocks/NewReportSection/ReportNavbar";
import ReportConclusion from "components/blocks/NewReportSection/ReportConclusion";
import SectionIntro from "components/blocks/NewReportSection/SectionIntro";
import StorySection from "components/blocks/NewReportSection/StorySection";

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(ScrollToPlugin);

const ReportTemplate: React.FC<PageInterface> = ({
  pageHeader,
  contentBlocks,
  children,
}) => {
  let reportSections = sortDocIntoH2Sections(contentBlocks);
  const [activeSection, setActiveSection] = useState(null);
  const [sectionPct, setSectionPct] = useState(null);
  

  const getTop = (el, extraOffset)=>el.offsetTop - extraOffset;
  const getBottom = (el, extraOffset)=>getTop(el,extraOffset)+ el.offsetHeight - extraOffset;
  

  useEffect(() => {
    const onScroll = () => {
      const offset = window.pageYOffset;
      
      reportSections.forEach((section, i ) => {
        const secElement = document.getElementById(section.anchor);
        if (
          offset > getTop(secElement, 30) &&
          offset < getBottom(secElement, 30) &&
          activeSection != section.anchor
        ) {
          let oldSec = reportSections.find(
            (sec) => sec.anchor === activeSection
          );
          if (oldSec) {
            const oldSectionImg = document.getElementById(
              "storyImg-" + oldSec.storyId
            );
            if (oldSectionImg) oldSectionImg.classList.replace("opacity-100", "opacity-0");
           
          }

          console.log(activeSection)
          setActiveSection(section.anchor);
          const startPct = (oldSec && reportSections.findIndex((sec) => sec.anchor === activeSection)>i) ? 100 : 0;
          setSectionPct(startPct);
         
         
          return;
        } 
      });
      if (!activeSection) return;
      const secElement = document.getElementById(activeSection);
      if(!secElement) return;
      const topTrigger =  getTop(secElement, 30);
      const bottomTrigger =  getBottom(secElement, 30)
     
      const offsetPct =  Math.round(
        (100 * (offset - topTrigger)) /
          (bottomTrigger - topTrigger)
      );
      if(offsetPct < 0  || offsetPct >=100)return;
      // section checks 
      let section = reportSections.find((sec) => sec.anchor === activeSection);
      if(section.storyId){
        const sectionImg = document.getElementById(
          "storyImg-" + section.storyId
        );
        if(((offset - topTrigger)>400) && sectionImg.classList.contains("opacity-0")){
          sectionImg.classList.replace("opacity-0", "opacity-100");
        }else if((offset - topTrigger)<400  && sectionImg.classList.contains("opacity-100")){
          sectionImg.classList.replace("opacity-100", "opacity-0");
        }
      }
      setSectionPct(offsetPct);
    };

    window.removeEventListener("scroll", onScroll);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  });


  const getComponent = (entry: any, index) => {
    const typename = entry.__typename;
    const componentMap = {
      TextBodyBlock: () => <ReportIntroductionBlock key={index} {...entry} />,
      ReportIllustrationOverlaySubsection: (entry) => (
        <>
          <SectionIntro section={entry} key={entry.anchor} />
          {entry.storiesCollection.items.map((story, j) => (
            <StorySection
              key={story.anchor}
              story={story}
              colorTheme={entry.colorTheme}
              sectionAnchor={entry.anchor}
            />
          ))}
        </>
      ),
    };
    return typename in componentMap ? (
      componentMap[typename](entry)
    ) : (
      <div></div>
    );
  };

  return (
    <main id="main">
      <ReportNavbar
        contentBlocks={contentBlocks}
        activeSection={activeSection}
        sections={reportSections}
        percent={sectionPct}
      />
      {<ReportHero {...pageHeader} />}
      <div className="animate-fadeIn2">
        {contentBlocks
          .map((block, i) => getComponent(block, i))}
        <ReportConclusion />
      </div>
    </main>
  );
};

function sortDocIntoH2Sections(contentBlocks) {
  let output = [];
  function addSection(title, anchor, type, storyId, colorTheme) {
    output.push({
      title: title,
      anchor: anchor,
      storyId: storyId,
      type: type,
      colorTheme: colorTheme,
    });
  }
  contentBlocks.forEach((subsection) => {
    const typename = subsection.__typename;
    if (typename !== "ReportIllustrationOverlaySubsection") return;
    addSection(
      subsection.title,
      `${subsection.anchor}`,
      "section",
      null,
      subsection.colorTheme
    );
    subsection.storiesCollection.items.forEach((story, i) => {
      addSection(
        story.title,
        `${subsection.anchor}--${story.anchor}`,
        "story",
        story.anchor,
        subsection.colorTheme
      );
    });
  });
  return output;
}

export default ReportTemplate;


