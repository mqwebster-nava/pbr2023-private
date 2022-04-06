// @ts-nocheck
import React from "react";
import {
  ReportHeaderTextOverlay,
  ReportSections,
  ReportShoutoutSection,
  ReportIntroSection,
} from "components/blocks";
import { getPublicBenefitReportByYear } from "../../lib/public-benefit-reports";

export async function getStaticProps() {
  const report = getPublicBenefitReportByYear(2018);
  return {
    props: {
      report,
    },
  };
}

export default function PBR2018({ report }) {
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
      background: "bg-sage-pbr-2018",
      text: "text-sage-pbr",
    },
    default: {
      text: "text-navy-900",
    },
  };

  return (
    <div>
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
    </div>
  );
}
