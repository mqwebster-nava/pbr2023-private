import { PageHeader } from "components/blocks";
import PostContent from "components/blocks/PostBody/PostContent";
import useCurrentSectionHook from "components/blocks/PostBody/useCurrentSectionHook";
import ResponsiveContentContainer from "components/blocks/ResponsiveContentContainer/ResponsiveContentContainer";
import dynamic from "next/dynamic";
import React, { useRef, useState } from "react";
const TextBodyBlock = dynamic(() => import("components/blocks/TextBodyBlock/TextBodyBlock"));
import Image from "next/image";


const SectionHeader = dynamic(
  () => import("components/blocks/SectionHeader/SectionHeader")
);
const MarkdownComponent = dynamic(() => import("utils/MarkdownComponent"));
const ScrollingBlock = dynamic(
  () => import("components/blocks/ScrollingBlock/ScrollingBlock")
);

import { PageInterface } from "shared_interfaces/page_interface";

const ReportTemplate: React.FC<PageInterface> = ({
  pageHeader,
  contentBlocks,
  children,
}) => {
  let reportSections = sortDocIntoH2Sections();
  reportSections.forEach((sec) => (sec.ref = useRef()));
  const activeSection = useCurrentSectionHook(reportSections);

  function sortDocIntoH2Sections() {
    let output = [];
    contentBlocks.forEach((block) => {
      if (block["__typename"] == "ReportSection") {
        output.push({
          title: block.title,
          titleId: block.anchor,
          extraOffset: 30,
          ref: null,
          triggerTop: 9999,
          triggerBottom: 9999,
        });

        block.reportSubsectionsCollection.items.forEach((subsection) => {
          const anch = `${block.anchor}--${subsection.anchor}`;
          output.push({
            title: subsection.title,
            titleId: anch,
            extraOffset: 30,
            ref: null,
            triggerTop: 9999,
            triggerBottom: 9999,
          });
          subsection.storiesCollection.items.forEach((story) => {
            const anch2 = `${block.anchor}--${subsection.anchor}--${story.anchor}`;
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
      }
    });
    return output;
  }

  const getComponent = (entry: any, index) => {
    const typename = entry.__typename;
    const componentMap = {
     "TextBodyBlock": () => <TextBodyBlock key={index} {...entry}/>,
      ReportSection: (entry) => (
        <>
          <div
            key={index}
            id={entry.anchor}
            ref={reportSections.find((k) => k.titleId == entry.anchor).ref}
          >
            <SectionHeader
              {...entry}
              body={entry.body && <MarkdownComponent content={entry.body} />}
            />
          </div>
          {entry.reportSubsectionsCollection.items.map((subsection) => {
            const anch = `${entry.anchor}--${subsection.anchor}`;
            const activeStory =subsection.storiesCollection.items.find((k)=>`${anch}--${k.anchor}`===activeSection) ?? subsection.storiesCollection.items[0];
            return (
              <section key={anch}>
                <div
                  className="sticky top-0 bg-plum-700 z-30"
                  id={anch}
                >
                  <div className="responsive-container py-xl grid grid-cols-2">
                    <div className=" ">
                      {/* <div className="type-preset-5 font-bold text-white">
                        {subsection.kicker}
                      </div> */}
                      <h2 className="type-preset-3 font-bold text-white">
                        {subsection.title}
                      </h2>
                    </div>
                    {activeStory &&  (
                      <div className="mt-auto">
                        <h3 className="type-preset-5 font-bold text-white">
                          {activeStory.title}
                        </h3>
                      </div>
                    )}
                  </div>
                </div>
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
                      const anch2 = `${entry.anchor}--${subsection.anchor}--${story.anchor}`;
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
            );
          })}
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
      <PageHeader {...pageHeader} />
      <div className="animate-fadeIn2">
        {children}
        {contentBlocks.map((block, i) => getComponent(block, i))}
      </div>
    </main>
  );
};

const StorySection = (story) => {
  const [isCollapsed, setIsCollapsed] = useState(true);
  return (
    <>
    <div className="h-screen"></div>

      <div className="h-auto w-full bg-white p-xl font-serif">
        <div className="w-full h-[300px] flex justify-center items-center bg-gray-200 mb-md">
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

export default ReportTemplate;