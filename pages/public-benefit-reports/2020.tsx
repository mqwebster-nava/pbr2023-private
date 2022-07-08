// https://www.navapbc.com/public-benefit-reports/2020/
import { getMarkdownByFilename } from "../../lib/markdown";
import Image from "next/image";
import Nava2020Cover from "../../public/images/pbrs/nava-cover-2200x700-teal-2020.jpg";
import VASectionCover from "../../public/images/pbrs/nava-VA-2200x700-hi-res.jpg";
import CASectionCover from "../../public/images/pbrs/nava-cali-2200x700-hi-res.jpg";
import MedicareSectionCover from "../../public/images/pbrs/nava-medicare-2200x700-hi-res.jpg";
import CloudSectionCover from "../../public/images/pbrs/nava-cloud-2200x700-hi-res.jpg";
import React, { useRef } from "react";
import {
  ReportHeaderNavy,
  ReportSideMenu,
  ReportSectionContentFull,
  ReportSectionStacked,
  ReportSection,
} from "components/blocks";
import { PageInterface } from "shared_interfaces/page_interface";
import useCurrentSectionHook from "components/blocks/PostBody/useCurrentSectionHook";
import { ReportIntroSectionFull } from "components/blocks/ReportSection/ReportIntroSectionFull";

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

const sideNavRefProperties = {
  triggerTop: 9999,
  triggerBottom: 9999
}

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
    ref: useRef(),
    ...sideNavRefProperties
  };
};

export default function PBR2020(props: PageInterface) {
  const report = props.contentBlocks[0];
  const reportSections = [...new Array(4)].map((_, index) =>
    createSection(report, index)
  );

  const introSection = [
    {
      titleId: "intro",
      title: report.intro.title,
      ref: useRef(),
      ...sideNavRefProperties
    },
  ];

  const allSections = introSection.concat(reportSections);
  const activeSection = useCurrentSectionHook(allSections);

  const reportSection = (section, index, stacked) => {
    if(index === 0) return <ReportIntroSectionFull title={report.intro.title} body={report.intro.body} />
    // Leave out ref in passing props to components.
    const props = (({ ref, ...o }) => o)(section)
    return stacked ? (
      <ReportSectionStacked key={index} {...props} />
    ) : (
      <ReportSection key={index} {...props} theme={null} />
    );
  };

  return (
    <div>
      <ReportSideMenu links={menuLinks} activeSection={activeSection} />
      <main className="bg-white pb-2xl">
        <ReportHeaderNavy title={report.title} maxWidth="max-w-xl" />
        <Image
          alt={report.image_alt_text}
          src={Nava2020Cover}
          layout="responsive"
        />
        {allSections.map((section, index) =>(
            <div ref={section.ref} key={index}>
              {reportSection(section, index, true)}
            </div>
          )
        )}
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



export async function getStaticProps() {
  const report = getMarkdownByFilename("public-benefit-reports", 2020);
  const formattedPage: PageInterface = {
    id: "public-benefit-reports/2020",
    slug: "/public-benefit-reports/2020",
    title: "Nava: Public Benefit Report: 2020",
    description: "Addressing the structural failures that have affected millions of Americans—most dramatically during the pandemic in 2020—requires resilience. See how we build it into everything we do.",
    socialImage: {
      "id": "WufZdooSKmPSGJlCZlUtu",
      "url": "https://images.ctfassets.net/t2ekr6eg3fr3/WufZdooSKmPSGJlCZlUtu/b5772ce17a9c3e4b1fd851d9fe059a1a/pbr-promo-image.png",
      "width": 1596,
      "height": 897,
      "title": "PBR image",
      "description": ""
  },
    pageHeader: null,
    contentBlocks: [report],
  };
  return {
    props: formattedPage,
  };
}
