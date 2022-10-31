// @ts-nocheck
import React from "react";
import {
  ReportHeaderTextOverlay,
  ReportSections,
  ReportShoutoutSection,
  ReportIntroSection,
} from "components/blocks";
import { getMarkdownByFilename } from "../../utils/markdown_parser";
import { PageInterface } from "shared_interfaces/page_interface";

export async function getStaticProps() {
  const report = getMarkdownByFilename("public-benefit-reports", 2018);
  const formattedPage: PageInterface = {
    id: "public-benefit-reports/2018",
    slug: "/public-benefit-reports/2018",
    title: "Nava: Public Benefit Reports: 2018 Progress Takes Work",
    description:"Our government partners are committed to doing the hard work it takes to transform government services. See what we’ve accomplished together.",
    socialImage: {
       "id": "6uEQZE20CFQeMa63MMWyHl",
      "url": "https://images.ctfassets.net/t2ekr6eg3fr3/6uEQZE20CFQeMa63MMWyHl/5d528c6614a95fd0929ef280c8a51a8f/Screen_Shot_2022-06-14_at_3.33.05_PM.png",
      "width": 1127,
      "height": 633,
      "title": "2018_PBR screenshot",
      "description": ""
  },
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
      picturePosition: "left",
      pictureAltText: "",
      isWhiteBG: true,
      content: section_one,
    },
    {
      picture: "/images/pbrs/2018-2.png",
      picturePosition: "right",
      pictureAltText: "",
      isWhiteBG: false,
      content: section_two,
    },
    {
      picture: "/images/pbrs/2018-3.png",
      picturePosition: "left",
      pictureAltText: "",
      isWhiteBG: true,
      content: section_three,
    },
  ];

  const theme = {
    sage: {
      background: "bg-sage-50",
      text: "text-sage-pbr",
    },
    default: {
      text: "text-gray-900",
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
