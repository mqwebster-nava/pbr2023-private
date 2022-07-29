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
  ReportHeaderNavy, SectionHeader,
} from "components/blocks";
import { PageInterface } from "shared_interfaces/page_interface";
import ListBlock from "components/blocks/ListBlock/ListBlock";
import ScrollingBlock from "components/blocks/ScrollingBlock/ScrollingBlock";
export default function PBR2021(props: PageInterface) {
  const report = props.contentBlocks[0];



  return (
    <div>
      
      <main className=" pb-2xl">
        <ReportHeaderNavy title={report.title} maxWidth="max-w-xl" />
        <Image
          alt={report.image_alt_text}
          src={Nava2020Cover}
          layout="responsive"
        />
        <SectionHeader title={"Equity is..."} id={"eq"}/>
        <ScrollingBlock title={"Small pilots make a big impact"} kicker={"Equity is..."} id={"test"} body={"Body Text"}></ScrollingBlock>
        <ScrollingBlock title={"Accessing Accessibility"} kicker={"Equity is..."} id={"test2"} body={"Body Text"}></ScrollingBlock>
        <SectionHeader title={"Sustainability looks like"} id={"eq"}/>
        <ScrollingBlock title={"Human-centered infrastructure"} kicker={"Sustainability looks like"} id={"test"} body={"Body Text"}></ScrollingBlock>
        <ScrollingBlock title={"Two steps forward one step back"} kicker={"Sustainability looks like"} id={"test"} body={"Body Text"}></ScrollingBlock>
      </main>
    </div>
  );
}



export async function getStaticProps() {
  const report = getMarkdownByFilename("public-benefit-reports", 2020);
  const formattedPage: PageInterface = {
    id: "public-benefit-reports/2021",
    slug: "/public-benefit-reports/2021",
    title: "Nava: Public Benefit Report: 2021",
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
