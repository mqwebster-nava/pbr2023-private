// https://www.navapbc.com/public-benefit-reports/2020/
import { getPublicBenefitReportByYear } from "../../lib/public-benefit-reports";
import Image from "next/image";
import Nava2020Cover from "../../public/images/pbrs/nava-cover-2200x700-teal-2020.jpg";
import VASectionCover from "../../public/images/pbrs/nava-VA-2200x700-hi-res.jpg";
import CASectionCover from "../../public/images/pbrs/nava-cali-2200x700-hi-res.jpg";
import MedicareSectionCover from "../../public/images/pbrs/nava-medicare-2200x700-hi-res.jpg";
import CloudSectionCover from "../../public/images/pbrs/nava-cloud-2200x700-hi-res.jpg";
import { PullQuote, Signatures } from "components/atom";
import React from "react";
import {
  ReportHeaderNavy,
  ReportSections,
  ReportSideMenu,
  ReportSectionContentFull,
} from "components/blocks";

export async function getStaticProps() {
  const report = getPublicBenefitReportByYear(2020);
  return {
    props: {
      report,
    },
  };
}

const sectionData = [
  {
    id: "veterans",
    text: "Supporting Veterans",
    image: VASectionCover,
  },
  {
    id: "california",
    text: "Delivering unemployment benefits",
    image: CASectionCover,
  },
  {
    id: "cmsmax",
    text: "Designing a personal healthcare experience",
    image: MedicareSectionCover,
  },
  {
    id: "cms",
    text: "Building human-centered cloud infrastructure",
    image: CloudSectionCover,
  },
];

const menuLinks = [
  { text: "Letter from leadership", id: "intro" },
  ...sectionData,
];

const createSection = (report, index) => {
  const section = `section_${index + 1}`;
  const { title, intro, image_alt_text, metrics, body } = report[section];
  const titleId = menuLinks.slice(1)[index].id;
  const background = !(index % 2) ? "white" : "sea-foam";
  const image = sectionData[index].image;
  return {
    title,
    titleId,
    intro,
    image,
    imageAltText: image_alt_text,
    metrics,
    body,
    background,
  };
};

export default function PBR2020({ report }) {
  const reportSections = [...new Array(4)].map((_, index) =>
    createSection(report, index)
  );

  return (
    <div>
      <ReportSideMenu links={menuLinks} />
      <main className="bg-white pb-2xl">
        <PullQuote>HELLO</PullQuote>
        <ReportHeaderNavy title={report.title} />
        <Image
          alt={report.image_alt_text}
          src={Nava2020Cover}
          layout="responsive"
        />
        <ReportSectionContentFull
          title={report.intro.title}
          titleId="intro"
          body={report.intro.body}
          background="sea-foam"
        />
        <div className="bg-sage-pbr-2018 pb-4xl">
          <Signatures fullList asContainer />
        </div>
        <ReportSections sections={reportSections} stacked />
        <ReportSectionContentFull
          title={report.section_five.title}
          body={report.section_five.body}
          background="white"
          buttonText="Browse open roles"
          buttonLink="/open-roles"
        />
      </main>
    </div>
  );
}
