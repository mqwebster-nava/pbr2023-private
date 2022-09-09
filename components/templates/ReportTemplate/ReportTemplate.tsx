import ReportIntroductionBlock from "components/blocks/NewReportSection/ReportIntroduction";
import ReportHero from "components/blocks/NewReportSection/ReportHero";
import React, { useEffect, useRef, useState } from "react";

import { PageInterface } from "shared_interfaces/page_interface";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { ScrollToPlugin } from "gsap/dist/ScrollToPlugin";
import ReportNavbar from "components/blocks/NewReportSection/ReportNavbar";
import ReportConclusion from "components/blocks/NewReportSection/ReportConclusion";
import SectionIntro from "components/blocks/NewReportSection/SectionIntro";
import StorySection from "components/blocks/NewReportSection/StorySection";
import TableOfContentsSection from "components/blocks/NewReportSection/TableOfContents";
gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(ScrollToPlugin);

const ReportTemplate: React.FC<PageInterface> = ({
  pageHeader,
  contentBlocks,
  children,
}) => {
  let reportSections = sortDocIntoH2Sections(contentBlocks);
  const [activeSection, setActiveSection] = useState(null);
  //const windowSize = useWindowSize();
  const [windowSize, setWindowSize] = useState(null);

  const getTop = (el, extraOffset) => el.offsetTop - extraOffset;
  const getBottom = (el, extraOffset) =>
    getTop(el, extraOffset) + el.offsetHeight - extraOffset;

  useEffect(() => {
    const onScroll = () => {
      const offset = window.pageYOffset;
      reportSections.forEach((section, i) => {
        const secElement = document.getElementById(section.anchor);
        if (
          offset > getTop(secElement, 30) &&
          offset < getBottom(secElement, 30) &&
          activeSection != section.anchor
        )
          setActiveSection(section.anchor);
      });
    };
    function handleResize() {
      // Set window width/height to state
      if (
        (window.innerWidth < 768 || window.innerHeight < 650) &&
        windowSize !== "mobile"
      ) {
        setWindowSize("mobile");
        // TODO deal with all the sizes
      } else if (
        window.innerWidth > 768 &&
        window.innerHeight > 650 &&
        windowSize !== "desktop"
      ) {
        setWindowSize("desktop");
      }
    }
    handleResize();
    window.removeEventListener("resize", handleResize);
    window.addEventListener("resize", handleResize, { passive: true });

    // Empty array ensures that effect is only run on mount
    window.removeEventListener("scroll", onScroll);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", handleResize);
    };
  });

  const getComponent = (entry: any, index) => {
    const typename = entry.__typename;
    const componentMap = {
      TextBodyBlock: () => <ReportIntroductionBlock key={index} {...entry} />,
      ReportIllustrationOverlaySubsection: (entry) => (
        <>
          <SectionIntro section={entry} key={entry.anchor} i={index} />
          {entry.storiesCollection.items.map((story, j) => (
            <StorySection
              key={story.anchor}
              story={story}
              colorTheme={entry.colorTheme}
              sectionAnchor={entry.anchor}
              windowSize={windowSize}
              activeSection={activeSection}
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
        reportSections={reportSections}
      />
      {<ReportHero {...pageHeader} />}
      <div className="animate-fadeIn2">
        {
          <TableOfContentsSection
            contentBlocks={contentBlocks}
            activeSection={activeSection}
            windowSize={windowSize}
          />
        }
        {contentBlocks.map((block, i) => getComponent(block, i))}
        <ReportConclusion />
      </div>
    </main>
  );
};

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
  addSection("TOC", "toc", null, null, "white");
  addSection("Intro", "intro", null, null, "white");

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
