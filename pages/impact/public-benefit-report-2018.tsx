// @ts-nocheck
import React from "react";
import {
  ReportHeaderTextOverlay,
  ReportSections,
  ReportShoutoutSection,
  ReportIntroSection,
} from "components/blocks";
import { getMarkdownByFilename } from "../../lib/markdown";
import { PageInterface } from "shared_interfaces/page_interface";

export async function getStaticProps() {
  const report = getMarkdownByFilename("public-benefit-reports", 2018);
  const formattedPage: PageInterface = {
    id: "public-benefit-reports",
    slug: "public-benefit-reports",
    title: "",
    description:"description",
    socialImage: null,
    pageHeader: null,
    contentBlocks: [
      report
    ], 
 }
  return {
    props: formattedPage,
  };
}

export default function PBR2018(props:PageInterface ) {
  const report = props.contentBlocks[0];
  const {
    report_theme,
    title,
    introduction,
    section_one,
    section_two,
    section_three,
    shoutouts,
  } = report;

  const sections = [
    {
      picture: "/images/pbrs/2018-1.png",
      picture_position: "left",
      isWhiteBG: true,
      content: section_one,
    },
    {
      picture: "/images/pbrs/2018-2.png",
      picture_position: "right",
      isWhiteBG: false,
      content: section_two,
    },
    {
      picture: "/images/pbrs/2018-3.png",
      picture_position: "left",
      isWhiteBG: true,
      content: section_three,
    },
  ];

  const theme = {
    sage: {
      background: "bg-sea-foam-base",
      text: "text-sage-pbr",
    },
    default: {
      text: "text-navy-900",
    },
  };

  return (
    <main>
      <ReportHeaderTextOverlay
        reportTheme={report_theme}
        title={title}
        banner="/images/pbrs/2018-head.png"
        pdfLink="/files/2018NavaPublicBenefitReport.pdf"
      />
      <ReportIntroSection body={introduction} theme={theme} />
      <ReportSections sections={sections} theme={theme} />
      <ReportShoutoutSection
        title={shoutouts.title}
        introduction={shoutouts.introduction}
        theme={theme}
      />
    </main>
  );
}
