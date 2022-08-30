import { PageHeader } from "components/blocks";
import ReportIntroductionBlock from "components/blocks/NewReportSection/ReportIntroduction";
import ReportHero from "components/blocks/PageHeaders/ReportHero";
import dynamic from "next/dynamic";
import React, { useRef, useState } from "react";
const TextBodyBlock = dynamic(() => import("components/blocks/TextBodyBlock/TextBodyBlock"));


import { PageInterface } from "shared_interfaces/page_interface";
import ReportSection from "../../blocks/NewReportSection/NewReportSection";

const ReportTemplate: React.FC<PageInterface> = ({
  pageHeader,
  contentBlocks,
  children,
}) => {
 
   
  const getComponent = (entry: any, index) => {
    const typename = entry.__typename;
    const componentMap = {
     "TextBodyBlock": () => <ReportIntroductionBlock key={index} {...entry}/>,
      "ReportSection": (entry) => <ReportSection  key={index} entry={entry} hero={pageHeader}/>,
    };
    return typename in componentMap ? (
      componentMap[typename](entry)
    ) : (
      <div></div>
    );
  };

  return (
    <main id="main">
      {/* <PageHeader {...pageHeader} /> */}
      {/* <ReportHero {...pageHeader}/> */}
      <div className="animate-fadeIn2">
       { /*
        {contentBlocks.map((block, i) => getComponent(block, i))}
        */}

        {contentBlocks.filter((block)=>block.__typename==="ReportSection").map((block, i) => getComponent(block, i))}

      </div>
    </main>
  );
};

export default ReportTemplate;