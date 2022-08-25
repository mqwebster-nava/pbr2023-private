import useCurrentSectionHook from "components/blocks/PostBody/useCurrentSectionHook";
import { useEffect, useRef, useState } from "react";
import ReportNavbar from "./ReportNavbar";
import SectionIntro from "./SectionIntro";
import StorySection from "./Story2";
import PostContent from "../PostBody/PostContent";
import styles from "./styles.module.css";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { ScrollToPlugin } from "gsap/dist/ScrollToPlugin";
import TableOfContentsSection from "./TableOfContents";
import MarkdownComponent from "utils/MarkdownComponent";

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(ScrollToPlugin);
/*
Process 
-- Nav sticks 
-- Intro Frame
-- Frame 1 - Illustration Full
*/

const NewReportSection = ({ entry }) => {
  let reportSections = sortDocIntoH2Sections();
  reportSections.forEach((sec) => (sec.ref = useRef()));
  //const activeSection = useCurrentSectionHook(reportSections);
  const [activeSection, setActiveSection] = useState(null);
  let observer;

  function sortDocIntoH2Sections() {
    let output = [];
    function addSection(title, anchor, type, storyId, pin, colorTheme) {
      output.push({
        title: title,
        titleId: anchor,
        storyId: storyId,
        type: type,
        extraOffset: 30,
        ref: null,
        triggerTop: 9999,
        triggerBottom: 9999,
        pin: pin,
        colorTheme: colorTheme,
      });
    }
    entry.reportSubsectionsCollection.items.forEach((subsection) => {
      addSection(
        subsection.title,
        `${subsection.anchor}`,
        "section",
        null,
        true,
        subsection.colorTheme
      );
      subsection.storiesCollection.items.forEach((story, i) => {
        addSection(
          story.title,
          `${subsection.anchor}--${story.anchor}`,
          "story",
          story.anchor,
          subsection.storiesCollection.items.length - 1 === i,
          subsection.colorTheme
        );
      });
    });
    return output;
  }

  useEffect(() => {
    reportSections.forEach((h2) => {
      if (h2.ref.current) {
        const extraOffset = "extraOffset" in h2 ? h2.extraOffset : 30;
        h2.triggerTop = h2.ref.current.offsetTop - extraOffset; //- window.innerHeight/2;
        h2.triggerBottom =
          h2.triggerTop + h2.ref.current.offsetHeight - extraOffset; // - 5;
      }
    });
  
    const onScroll = () => {
      const offset = window.pageYOffset;
      reportSections.forEach((h2) => {
        if (
          offset > h2.triggerTop &&
          offset < h2.triggerBottom &&
          activeSection != h2.titleId
        ) {
          let oldSec = reportSections.find(
            (sec) => sec.titleId === activeSection
          );
          
          if (oldSec) {
            const oldSectionImg = document.getElementById(
              "storyImg-" + oldSec.storyId
            );
            if (oldSectionImg) oldSectionImg.classList.replace("opacity-100", "opacity-0");
           
            if(observer) observer.unobserve(oldSec.ref.current)
          }
          if (h2.storyId) {
            const sectionImg = document.getElementById(
              "storyImg-" + h2.storyId
            );
            sectionImg.classList.replace("opacity-0", "opacity-100");
            // observer = new IntersectionObserver(
            //   ([e]) => {
            //     console.log(e.intersectionRatio);
            //     const storyTitle = document.getElementById(
            //       "storyTitle-" + h2.storyId
            //     );
            //     if(e.intersectionRatio< 0.95 && e.intersectionRatio>0.5  && storyTitle){
            //       storyTitle.classList.replace("opacity-100", "opacity-0");
              
            //     }
            //     else if(e.intersectionRatio< 0.2  && storyTitle){
            //       storyTitle.classList.replace("opacity-0", "opacity-100");
            //     }
            //     },
            //   { threshold: [.95, 0] }
            // )
            // observer.observe(sectionImg)
          }
          setActiveSection(h2.titleId);
         
          

          return;
        } else if(activeSection == h2.titleId) {
          const sectionImg = document.getElementById(
            "imageBackground-" + h2.storyId
          );
         
          //if(storyTitle)console.log(sectionImg.offsetTop, h2.ref.current.getBoundingClientRect().height)
        }

      });
    };
    window.removeEventListener("scroll", onScroll);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  });

  return (
    <>
      
      <TableOfContentsSection entry={entry} />
   
      <ReportNavbar entry={entry} />
      {entry.reportSubsectionsCollection.items.map((subsection, i) => {
        const colorTheme = subsection.colorTheme ?? "purple";
        return (
          <>
            <section
              key={subsection.anchor}
              id={subsection.anchor}
              ref={
                reportSections.find((k) => k.titleId == subsection.anchor).ref
              }
            >
              <div className={`bg-${colorTheme}-900 w-full min-h-screen `}>
                <div
                  className="responsive-container max-w-screen-lg"
                  id={subsection.anchor}
                >
                  <div className="pt-[160px] ">
                    <h2
                      className=" font-black text-white text-7xl pb-2xl "
                      id={`h2-${subsection.anchor}`}
                    >
                      {subsection.title}
                    </h2>
                    <p className="type-preset-5 font-serif text-white pb-[160px]">
                      <MarkdownComponent content={subsection.body} />
                    </p>
                  </div>
                </div>
              </div>
            </section>
            {subsection.storiesCollection.items.map((story, j) => {
              const anch2 = `${subsection.anchor}--${story.anchor}`;

              return (
                <section
                  key={anch2}
                  id={anch2}
                  ref={reportSections.find((k) => k.titleId == anch2).ref}
                  className={`relative`}
                >
                  <StorySection story={story} colorTheme={colorTheme} />
                </section>
              );
            })}
          </>
        );
      })}
      <section className="w-full h-screen bg-gold-700">
      <div className="responsive-container lg:pl-[108px] py-2xl" >
        <div className="font-serif text-black type-preset-1 pt-2xl">
          Conclusion
       </div>
        </div>
      </section>
    </>
  );
};
export default NewReportSection;
