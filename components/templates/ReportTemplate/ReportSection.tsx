import PostContent from "components/blocks/PostBody/PostContent";
import useCurrentSectionHook from "components/blocks/PostBody/useCurrentSectionHook";
import ResponsiveContentContainer from "components/blocks/ResponsiveContentContainer/ResponsiveContentContainer";
import { useRef, useState } from "react";
import Image from "next/image";

const ReportSection = ({entry}) => {

    let reportSections = sortDocIntoH2Sections();
    reportSections.forEach((sec) => (sec.ref = useRef()));
    const activeSection = useCurrentSectionHook(reportSections);
  
    function sortDocIntoH2Sections() {
      let output = [];
    
    entry.reportSubsectionsCollection.items.forEach((subsection) => {
    const anch = `${subsection.anchor}`;
    output.push({
        title: subsection.title,
        titleId: anch,
        extraOffset: 30,
        ref: null,
        triggerTop: 9999,
        triggerBottom: 9999,
    });
    subsection.storiesCollection.items.forEach((story) => {
        const anch2 = `${subsection.anchor}--${story.anchor}`;
        output.push({
        title: story.title,
        extraOffset: 30,
        titleId: anch2,
        ref: null,
        triggerTop: 9999,
        triggerBottom: 9999,
        });
    });
          
    
      });
      return output;
    }
  
return ( <>
    <ReportNavbar entry={entry}/>
     {entry.reportSubsectionsCollection.items.map((subsection) => {
       const anch = `${subsection.anchor}`;
      
       const activeStory =subsection.storiesCollection.items.find((k)=>`${anch}--${k.anchor}`===activeSection) ?? subsection.storiesCollection.items[0];
       
       return (
           <>
          <SectionIntro subsection={subsection} />
       <section key={anch}>
          
           <div className="">
             <div
               className="block sticky top-[70px] h-screen w-screen -z-10"
               style={{
                 backgroundImage: `url(${activeStory.image ?? activeStory.illustration.url})`,
                 backgroundRepeat:"no-repeat",
                 backgroundPosition:"center center",
                 backgroundSize: "cover",
                 transition: "background-image 0.8s ease-in-out"
               }}
             >
             </div>
             <ResponsiveContentContainer padding="-mt-[100vh] pb-[300px]" alignment="right" >
               {subsection.storiesCollection.items.map((story) => {
                 const anch2 = `${subsection.anchor}--${story.anchor}`;
                 return (
                   <div
                     key={story.title}
                     id={anch2}
                     ref={
                       reportSections.find((k) => k.titleId == anch2).ref
                     }
                   >
                     {StorySection(story)}
                   </div>
                 );
               })}
             </ResponsiveContentContainer>
           </div>
         </section>
           </>
       );
     })}
   </>)
}
export default ReportSection;


const ReportNavbar = ({entry}) => {
    return (<div className="w-full h-[96px] bg-black sticky top-0  z-30  pt-md">
      <div className="responsive-container grid grid-cols-5 w-full">
      <div className="text-white">LOGO</div>
       {entry.reportSubsectionsCollection.items.map(
        (subsection) => <div className="text-white px-xl type-preset-6">{subsection.title} </div>
      )} 
       </div>
    </div>)
}






const SectionIntro = ({subsection}) =>{
    const bg = subsection.colorTheme ?? "purple"
    return (         
        <section key={subsection.anchor} className={`bg-${bg}-900 w-full h-screen `}>
        <div
          className="responsive-container max-w-screen-lg"
          id={subsection.anchor}
        >
            <div className="pt-[160px] ">
              <h2 className=" font-black text-white text-7xl pb-2xl ">
                {subsection.title}
              </h2>
              <p className="type-preset-5 font-serif text-white">Veterans who file claims to receive benefits to cover certain health issues can sometimes get stuck in a waiting pattern. Nava is working with the U.S. Department of Veterans Affairs Office of the CTO’s (OCTO) Benefits Delivery Team to build tools that reduce the amount of time it takes to process a Veterans’ disability benefits claim. We envision a future where Veterans hear back about benefits claims in days instead of months, ensuring that they and their families receive the healthcare they need in a timely manner.</p>
              </div>
        </div>
      </section>)
}
const StorySection = (story) => {
  const [isCollapsed, setIsCollapsed] = useState(true);
  return (
    <>
    <div className="h-screen"></div>

      <div className="h-auto w-full  p-xl font-serif">
        <div className="w-full h-[300px] flex justify-center items-center mb-md">
           {story.callOut? 
           <Image className={"z-10"} src={story.callOut.url} height={300} width={525}>
           </Image> : "CALL OUT"}
        </div>
        <PostContent docData={story.intro.json} docLinks={story.intro.links} />

        {isCollapsed ? (
          <button
            onClick={() => {
              setIsCollapsed(false);
            }}
          >
            Read More
          </button>
        ) : (
            <PostContent docData={story.body.json} docLinks={story.body.links} />
        )}
      </div>
    </>
  );
};
