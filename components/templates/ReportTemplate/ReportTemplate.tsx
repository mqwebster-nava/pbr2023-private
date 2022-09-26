import ReportIntroductionBlock from "components/blocks_reports/NewReportSection/ReportIntroduction";
import ReportHero from "components/blocks_reports/NewReportSection/ReportHero2021";
import React, { Children, useEffect, useRef, useState } from "react";

import { PageInterface } from "shared_interfaces/page_interface";

import ReportNavbar from "components/blocks_reports/NewReportSection/ReportNavbar/ReportNavbar";
import ReportConclusion from "components/blocks_reports/NewReportSection/ReportConclusion";
import SectionIntro from "components/blocks_reports/NewReportSection/SectionIntro";
import StorySection from "components/blocks_reports/NewReportSection/StorySection/StorySection";
import TableOfContentsSection from "components/blocks_reports/NewReportSection/TableOfContents/TableOfContents";
import SplitImageTextSection from "components/blocks_reports/SplitImageTextSection/SplitImageTextSection";
import ReportHeader from "components/blocks_reports/ReportHeader/ReportHeader";


const ReportTemplate: React.FC<PageInterface> = ({
  slug,
  pageHeader,
  contentBlocks,
  children,
}) => {
  // Want everything to be a section
  //let reportSections = sortDocIntoH2Sections(contentBlocks);
  let reportSections = getSectionsInfo(contentBlocks);
  const getComponent = (entry: any, index) => {
    const typename = entry.__typename;
    const componentMap = {
      //TextBodyBlock: () => <ReportIntroductionBlock key={index} {...entry} />,
      
      ReportIntroduction: (entry) => <ReportIntroductionBlock  key={index} {...entry}  />,
      ReportSectionSplitImageText: (entry) => <SplitImageTextSection key={index} {...entry}  />,
      ReportConclusion: (entry) => <ReportConclusion  key={index} {...entry}  />,
      ReportIllustrationOverlaySubsection: (entry) => (
        <div  key={`${entry.anchor}-${index}`}>
          <SectionIntro section={entry} key={entry.anchor} i={entry.themeNum}   />
          {entry.storiesCollection.items.map((story, j) => {
           let nextSection =  entry.storiesCollection.items.length>j+1 ? `${entry.anchor}--${entry.storiesCollection.items[j+1].anchor}` : null;
           if(!nextSection && contentBlocks.length > index && "anchor" in contentBlocks[index+1]) nextSection = contentBlocks[index+1].anchor
           return (
            <StorySection
              key={story.anchor}
              story={story}
              colorTheme={entry.colorTheme}
              sectionAnchor={entry.anchor}
              nextSection={nextSection}
            />
          )})}
        </div>
      ),
      ReportSectionCustom: (entry) => 
      (entry.type=='Table of Contents') ?<TableOfContentsSection key={index} {...entry} contentBlocks={contentBlocks} /> 
      :(entry.type=='Shoutout 2019' ||entry.type=='Shoutout 2018') ? <div></div>

      :null //contentBlocks={contentBlocks}
    };
    return typename in componentMap ? (
      componentMap[typename](entry)
    ) : (
      <div key={index}></div>
    );
  };
  return (
    <main id="main">
   { slug=="/public-benefit-reports/2021" && <ReportNavbar
        contentBlocks={contentBlocks}
        reportSections={reportSections}
      />}
       <ReportHeader {...pageHeader}   />
      <div className="animate-fadeIn2">
        {contentBlocks.map((block, i) => getComponent(block, i))}
      </div>
    </main>
  );
};

// Report Sections replacing content blocks
// - need Title, anchor, type

export function getSectionsInfo(contentBlocks) {
  let output = [];

  function addSection(title, anchor, type, colorTheme, parentAnchor) {
    output.push({
      title: title,
      anchor: anchor,
      type: type,
      colorTheme: colorTheme,
      parentAnchor: parentAnchor, 
    });
  }
  addSection("Hero", "reportHeader", null, "purple", null);
  contentBlocks.forEach((section) => {
    const typename = section.__typename;
    if (typename == "ReportIllustrationOverlaySubsection"){
      addSection(
        section.title,
        section.anchor,
        typename,
        section.colorTheme,
        null,
    );
      section.storiesCollection.items.forEach((story, i) => {
          addSection(
            story.title,
            `${section.anchor}--${story.anchor}`,
            "story",
            section.colorTheme,
            section.anchor,
          );
       })

    } else {
      addSection(
        section.title,
        section.anchor,
        typename,
        ("colorTheme" in section) ? section.colorTheme: "purple",
        null, 
      )
    } return;
  });
  return output;
}

export function sortDocIntoH2Sections(contentBlocks) {
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
  addSection("Hero", "reportHeader", null, null, "purple");
  addSection("TOC", "toc", null, null, "purple");
  addSection("Intro", "intro", null, null, "purple");

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


  //const [activeSection, setActiveSection] = useState(null);
  //const [windowSize, setWindowSize] = useState(null);

  // useEffect(() => {
  //   // const onScroll = () => {
  //   //   reportSections.forEach((section, i) => {
  //   //     if (checkActive({offsetPct:getOffsetPct(section.anchor)}) &&
  //   //       activeSection != section.anchor)
  //   //       setActiveSection(section.anchor);
  //   //   });
  //   // };
  //   function handleResize() {
  //    const size = getScreenSize();
  //    if(size && size!==windowSize) setWindowSize(size);
  //   }
  //   handleResize();
  //   window.removeEventListener("resize", handleResize);
  //   window.addEventListener("resize", handleResize, { passive: true });
  //   // Empty array ensures that effect is only run on mount
  //  // window.removeEventListener("scroll", onScroll);
  //  // window.addEventListener("scroll", onScroll, { passive: true });
  //   return () => {
  //  //   window.removeEventListener("scroll", onScroll);
  //     window.removeEventListener("resize", handleResize);
  //   };
  // });