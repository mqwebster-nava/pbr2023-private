import { PageHeader } from "components/blocks";
import PostContent from "components/blocks/PostBody/PostContent";
import useCurrentSectionHook from "components/blocks/PostBody/useCurrentSectionHook";
import ResponsiveContentContainer from "components/blocks/ResponsiveContentContainer/ResponsiveContentContainer";
import dynamic from "next/dynamic";
import React, { useRef, useState } from "react";
const TextBodyBlock = dynamic(() => import("components/blocks/TextBodyBlock/TextBodyBlock"));
import Image from "next/image";



import { PageInterface } from "shared_interfaces/page_interface";
import ReportSection from "./ReportSection";

const ReportTemplate: React.FC<PageInterface> = ({
  pageHeader,
  contentBlocks,
  children,
}) => {
 
   
  const getComponent = (entry: any, index) => {
    const typename = entry.__typename;
    const componentMap = {
     "TextBodyBlock": () => <TextBodyBlock key={index} {...entry}/>,
      "ReportSection": (entry) => <ReportSection  key={index} entry={entry}/>,
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

export default ReportTemplate;