// @ts-nocheck
import React from "react";
import {
  ReportHeaderHero,
  ReportIntroSection,
  ReportSections,
  ReportShoutoutSection,
} from "components/blocks";

import { getMarkdownByFilename } from "../../lib/markdown";

export async function getStaticProps() {
  const report = getMarkdownByFilename("public-benefit-reports", 2019);
  return {
    props: {
      report,
    },
  };
}

export default function PBR2019({ report }) {
  const {
    title,
    introduction,
    section_one,
    section_two,
    section_three,
    section_four,
    shoutouts,
  } = report;

  const { employee_list, alumni_list, partner_list, tot_list, pet_list } =
    shoutouts;
  const shoutoutLists = [
    employee_list,
    alumni_list,
    partner_list,
    tot_list,
    pet_list,
  ];
  const sections = [
    {
      picture: "/images/pbrs/2019-1.png",
      picture_position: "left",
      isWhiteBG: true,
      content: section_one,
    },
    {
      picture: "/images/pbrs/2019-2.png",
      picture_position: "right",
      isWhiteBG: false,
      content: section_two,
    },
    {
      picture: "/images/pbrs/2019-3.png",
      picture_position: "left",
      isWhiteBG: true,
      content: section_three,
    },
    {
      picture: "/images/pbrs/2019-4.png",
      picture_position: "right",
      content: section_four,
    },
  ];

  const theme = {
    sage: {
      background: "bg-sage-50",
      text: "text-sage-pbr",
    },
    default: {
      text: "text-navy-900",
    },
  };

  return (
    <main>
      <ReportHeaderHero
        title={title}
        banner="/images/pbrs/2019-head.png"
        altText="An illustration of people holding lines that spell out NAVA."
        pdfLink="/files/2019NavaPublicBenefitReport.pdf"
      />
      <ReportIntroSection body={introduction} theme={theme} />
      <ReportSections sections={sections} theme={theme} />
      <ReportShoutoutSection
        title={shoutouts.title}
        introduction={shoutouts.introduction}
        lists={shoutoutLists}
        theme={theme}
      />
    </main>
  );
}
