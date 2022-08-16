import PostContent from "components/blocks/PostBody/PostContent";
import useCurrentSectionHook from "components/blocks/PostBody/useCurrentSectionHook";
import ResponsiveContentContainer from "components/blocks/ResponsiveContentContainer/ResponsiveContentContainer";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { LinkText } from "components/atom";
import ReportNavbar from "./ReportNavbar";
import SectionIntro from "./SectionIntro";
import StorySection from "./StorySection";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { ScrollToPlugin } from "gsap/dist/ScrollToPlugin";
import TableOfContentsSection from "./TableOfContents";
gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(ScrollToPlugin)
/*
Process 

-- Nav sticks 

-- Intro Frame

-- Frame 1 - Illustration Full

*/

const NewReportSection = ({ entry }) => {
  let reportSections = sortDocIntoH2Sections();
  reportSections.forEach((sec) => (sec.ref = useRef()));
  const activeSection = useCurrentSectionHook(reportSections);

 
  function sortDocIntoH2Sections() {
    let output = [];
    function addSection(title, anchor, type) {
      output.push({
        title: title,
        titleId: anchor,
        type: type,
        extraOffset: 30,
        ref: null,
        triggerTop: 9999,
        triggerBottom: 9999,
      });
    }
    entry.reportSubsectionsCollection.items.forEach((subsection) => {
      addSection(subsection.title, `${subsection.anchor}`, "section");
      subsection.storiesCollection.items.forEach((story) => {
        addSection(story.title, `${subsection.anchor}--${story.anchor}`, "story");
      });
    });
    return output;
  }

  function goToSection(t) {
    gsap.to(window, {
      scrollTo: {y:  t, autoKill: false},
      duration: 0.25
    });
    // if(anim) {
    //   anim.restart();
    // }
  }


  useEffect(() => {
    
    reportSections.forEach((section)=>{
      const trigger = section.ref.current;
      const t = section.ref.current.offsetTop;
      if(section.type=="story"){
        
        const q = gsap.utils.selector(trigger);
        gsap.to(q(".storyImg"), {
          scrollTrigger: {
              trigger:trigger,
              start: "top top",
              endTrigger: q(".trigger-content"),
              end: "bottom bottom",
              scrub: 1,
              // toggleActions: "none none reverse reset",
            },
            opacity: 1,
            duration: 1,
          });
          gsap.to(q(".storyTitle"), {
            scrollTrigger: {
                trigger:q(".trigger-content"),
                start: "top top",
                markers:true,
                scrub: 1,
                toggleActions: "none none reverse none",
              },
              opacity: 0,
              duration: 0.5,
            });
          }
          ScrollTrigger.create({
            trigger: trigger,
            onEnter: () => goToSection(t)
          });
          
          ScrollTrigger.create({
            trigger: trigger,
            start: "bottom bottom",
            onEnterBack: () => goToSection(t),
          });
    })
    
 
   
    ScrollTrigger.refresh();
  }, []);

  return (
    <>
      <TableOfContentsSection entry={entry} />
      <ReportNavbar entry={entry} />

   
      {entry.reportSubsectionsCollection.items.map((subsection) => {
        return (
          <>
            <section
              key={subsection.anchor}
              id={subsection.anchor}
              ref={ reportSections.find((k) => k.titleId == subsection.anchor).ref}
              className="snap-center"
            >
              <SectionIntro subsection={subsection} />
            </section>

            {subsection.storiesCollection.items.map((story) => {
              const anch2 = `${subsection.anchor}--${story.anchor}`;
              return (
                <section
                  key={anch2}
                  id={anch2}
                   ref={reportSections.find((k) => k.titleId == anch2).ref}
                   className="snap-center"
                >
                  <StorySection
                    story={story}
                    colorTheme={subsection.colorTheme}
                   
                  />
                </section>
              );
            })}
          </>
        );
      })}
    </>
    
  );
};
export default NewReportSection;



// gsap.from(
//   id3, {
//   scrollTrigger: {
//     trigger:id2,
//     start: "top bottom",
//    // endTrigger: id3,
//     end: "top 400px",
//     scrub: 1
//    // toggleActions: "play complete none reset",
//   },
//   opacity: 0,
//   duration: 1,
// });

// const id = "#h2-" + subsection.anchor;
// gsap.from(id, {
//   scrollTrigger: {
//     trigger: id,
//     start: "top top", // first is trigger / second is
//     markers:true,
//     end: "top 400px",
//     toggleActions: "restart complete reverse reset",
//    // scrub: 1,
//   },
//   xPercent: -100,
//   opacity: 0,
// });
// <section key={anch}>
// <div className="">
//   <div
//     className="block sticky top-[70px] h-screen w-screen -z-10"
//     style={{
//       backgroundImage: `url(${
//         activeStory.image ?? activeStory.illustration.url
//       })`,
//       backgroundRepeat: "no-repeat",
//       backgroundPosition: "center center",
//       backgroundSize: "cover",
//       transition: "background-image 0.8s ease-in-out",
//     }}
//   >
//     <div className="responsive-container pt-xl">
//     {activeStory.title}
//     </div>

//   </div>
//   <ResponsiveContentContainer
//     padding="-mt-[100vh] pb-[300px]"
//     alignment="right"
//   >
//     {subsection.storiesCollection.items.map((story) => {
//       const anch2 = `${subsection.anchor}--${story.anchor}`;
//       return (
//         <div
//           key={story.title}
//           id={anch2}
//           ref={reportSections.find((k) => k.titleId == anch2).ref}
//         >
//           {StorySection(story)}
//         </div>
//       );
//     })}
//   </ResponsiveContentContainer>
// </div>
// </section>

// Execution heading

// Custom trigger
// ScrollTrigger.create({
//   trigger: "#h3",
//   start: "top bottom+=-200px", // 200px after the top passes the bottom of the viewport
//   endTrigger: '#section2',
//   end: "bottom top",
//   onUpdate: (self) => {
//     const progress = Math.max(2, Math.ceil(self.progress * 100)); //No lower than 2.
//     number.current.innerHTML = progress;
//     // console.log(
//     //   "progress:",
//     //   self.progress.toFixed(3),
//     //   "direction:",
//     //   self.direction,
//     //   "velocity",
//     //   self.getVelocity()
//     // );
//   },
// });



    // entry.reportSubsectionsCollection.items.forEach((subsection) => {

    //   subsection.storiesCollection.items.forEach((story) => {
    //     const id2 = "#section-" +  story.anchor;
    //     console.log(id2)
    //    // const anch2 = `#${subsection.anchor}--${story.anchor}`;
    //     //const id3 = "#section-end-" +  story.anchor;
    //     gsap.from(
    //       id2, {
    //       scrollTrigger: {
    //         trigger:".trigger-top",
    //         start: "top top",
    //         markers:true,
    //         pin:".trigger-top",
    //        // endTrigger: id3,
    //         end: "top 400px",
    //         scrub: 0.5,

    //        // toggleActions: "none none reverse reset",
    //       },
    //       opacity: 0,
    //       duration: 1,
    //     });

    //   });

    // });
    // ScrollTrigger.create({
    //   snap: 1 / 4, // snap whole page to the closest section!
    // });
