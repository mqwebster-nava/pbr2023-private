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
import { LinkText } from "components/atom";

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
      
     
      <ReportNavbar entry={entry} />
      <TableOfContentsSection entry={entry} />
   
      {entry.reportSubsectionsCollection.items.map((subsection, i) => {
        // TODO update color palette just for gold
        let colorTheme = subsection.colorTheme ?? "purple";
        let textColor = subsection.colorTheme==="gold" ? "black" : "white";
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
                  className="responsive-container mr-auto lg:pl-[108px]"
                  id={subsection.anchor}
                >
                  <div className="pt-[160px] ">
                    <h2
                      className={`font-black text-${textColor} text-7xl pb-3xl max-w-screen-md mr-auto`}
                      id={`h2-${subsection.anchor}`}
                    >
                      {subsection.title}
                    </h2>
                    <p className={`type-preset-5 font-serif font-light text-${textColor} pb-[160px] max-w-screen-md`}>
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
      <div className="responsive-container py-2xl lg:pl-[108px]" >
        <div className="font-serif text-black type-preset-1 pt-3xl">
          Conclusion
       </div>
       <p className="type-preset-5 font-sans text-black pt-[70px] max-w-screen-md">
       Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
       </p>
       <div className="flex pt-[70px]">
        <div className="w-1/3">
          <p className="type-preset-5 font-bold">Where next?</p>
        </div>
        {/* TODO add rules between them & prototype */}
        <div className="w-2/3 flex flex-col gap-sm pt-xs font-serif divide-y divide-black">
        <LinkText href="/public-benefit-reports/2020" variant={"default"} color="black">Download PDF</LinkText>
          <LinkText href="/careers" variant={"default"} color="black">Careers</LinkText>
          <LinkText href="/case-studies" variant={"default"} color="black"> Case Studies</LinkText>
          <LinkText href="/public-benefit-reports/2020" variant={"default"} color="black">2020 Public Benefit Report</LinkText>
        </div>
       </div>
        </div>
      </section>
    </>
  );
};
export default NewReportSection;


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