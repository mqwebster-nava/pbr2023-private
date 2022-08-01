// https://www.navapbc.com/public-benefit-reports/2020/
import { getMarkdownByFilename } from "../../lib/markdown";
import Image from "next/image";
import Nava2020Cover from "../../public/images/pbrs/nava-cover-2200x700-teal-2020.jpg";
import VASectionCover from "../../public/images/pbrs/nava-VA-2200x700-hi-res.jpg";
import CASectionCover from "../../public/images/pbrs/nava-cali-2200x700-hi-res.jpg";
import MedicareSectionCover from "../../public/images/pbrs/nava-medicare-2200x700-hi-res.jpg";
import CloudSectionCover from "../../public/images/pbrs/nava-cloud-2200x700-hi-res.jpg";
import React, { useRef } from "react";
import { ReportHeaderNavy, SectionHeader } from "components/blocks";
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
        <SectionHeader title={"Equity is..."} id={"eq"} />
        <ScrollingBlock
          title={"Small pilots make a big impact"}
          kicker={"Equity is..."}
          id={"test"}
          body={"Body Text"}
          stories={[
            {
              title: "Veterans Affairs to receive benefits to cover",
              intro:
                "Veterans who file claims to receive benefits to cover certain health issues can sometimes get stuck in a waiting pattern. Nava is working with the U.S. Department of Veterans Affairs Office of the CTO’s (OCTO) Benefits Delivery Team to build tools that reduce the amount of time it takes to process a Veterans’ disability benefits claim. We envision a future where Veterans hear back about benefits claims in days instead of months, ensuring that they and their families receive the healthcare they need in a timely manner.",
              full: "To speed up the handling of these claims, we developed a prototype to process one specific disability claim – hypertension – and released it to a small number of claims in order to learn from and continually iterate on the prototype. We started with a prototype called the Hypertension Fast Tracker that allowed some Veterans’ claims for hypertension disability benefits to be processed in days instead of months. \n Through our research into the claims adjudication process, we discovered that requiring Veterans to complete duplicative, unnecessary medical exams in order to get a claim approved contributed to the delay. We hypothesized that by introducing Veterans Affairs Medical Center (VAMC) health evidence to VA claims benefits adjudicators, we could help reduce unnecessary medical exams when possible and decrease the times Veterans spend waiting for a claim decision. \n We approached this project by deciding to narrow the scope dramatically to quickly release a prototype to a small number of claims. Our prototype addressed one disability type for a subset of one type of claim, and was used several times a day by one or two pilot participants. By starting with such a dramatically slow rollout, we can learn and iterate the prototype based on how it performs. This is a crucial step in an evolving technology landscape like the VA’s where systems are continually upgraded. Both OCTO and the Veterans Benefits Administration (VBA) supported and fostered the kind of environment where we could release and continually improve these small prototypes. \n We went on to expand the prototype, now called the Rapid Ready for Decision program, to asthma claims, and are evaluating new claims for suitability as well. The measurably positive outcomes we have observed are a testament to the strength of our small scale, iterative approach and the use of prototypes when introducing new digital software. \n The initial prototype, the Hypertension Fast Tracker, was released in December 2021, and allowed some Veterans’ claims for hypertension disability benefits to be processed in days instead of months. So far, processing times using our prototypes have averaged 3-5 days for claims that don’t need exams and 25 days for those that do. That’s compared to 80 to 100 days on average. Even with our low volume of claims, we’ve saved Veterans over 5000 days of waiting for a decision this quarter. \n These are small outcomes, but that’s intentional. Our approach is to deliver value more quickly by starting small and learning through prototyping and iteration. Keeping this in mind, these outcomes are good indicators that are helping us learn and evolve our prototype. Our work is both serving veterans and providing knowledge generation for sustainable, repeatable processes in the VA’s future.",
            },
            {
              title: "Massachusetts PFML",
              intro:
                "Veterans who file claims to receive benefits to cover certain health issues can sometimes get stuck in a waiting pattern. Nava is working with the U.S. Department of Veterans Affairs Office of the CTO’s (OCTO) Benefits Delivery Team to build tools that reduce the amount of time it takes to process a Veterans’ disability benefits claim. We envision a future where Veterans hear back about benefits claims in days instead of months, ensuring that they and their families receive the healthcare they need in a timely manner.",
              full: "To speed up the handling of these claims, we developed a prototype to process one specific disability claim – hypertension – and released it to a small number of claims in order to learn from and continually iterate on the prototype. We started with a prototype called the Hypertension Fast Tracker that allowed some Veterans’ claims for hypertension disability benefits to be processed in days instead of months. \n Through our research into the claims adjudication process, we discovered that requiring Veterans to complete duplicative, unnecessary medical exams in order to get a claim approved contributed to the delay. We hypothesized that by introducing Veterans Affairs Medical Center (VAMC) health evidence to VA claims benefits adjudicators, we could help reduce unnecessary medical exams when possible and decrease the times Veterans spend waiting for a claim decision. \n We approached this project by deciding to narrow the scope dramatically to quickly release a prototype to a small number of claims. Our prototype addressed one disability type for a subset of one type of claim, and was used several times a day by one or two pilot participants. By starting with such a dramatically slow rollout, we can learn and iterate the prototype based on how it performs. This is a crucial step in an evolving technology landscape like the VA’s where systems are continually upgraded. Both OCTO and the Veterans Benefits Administration (VBA) supported and fostered the kind of environment where we could release and continually improve these small prototypes. \n We went on to expand the prototype, now called the Rapid Ready for Decision program, to asthma claims, and are evaluating new claims for suitability as well. The measurably positive outcomes we have observed are a testament to the strength of our small scale, iterative approach and the use of prototypes when introducing new digital software. \n The initial prototype, the Hypertension Fast Tracker, was released in December 2021, and allowed some Veterans’ claims for hypertension disability benefits to be processed in days instead of months. So far, processing times using our prototypes have averaged 3-5 days for claims that don’t need exams and 25 days for those that do. That’s compared to 80 to 100 days on average. Even with our low volume of claims, we’ve saved Veterans over 5000 days of waiting for a decision this quarter. \n These are small outcomes, but that’s intentional. Our approach is to deliver value more quickly by starting small and learning through prototyping and iteration. Keeping this in mind, these outcomes are good indicators that are helping us learn and evolve our prototype. Our work is both serving veterans and providing knowledge generation for sustainable, repeatable processes in the VA’s future.",
            },
          ]}
        ></ScrollingBlock>
        <ScrollingBlock
          title={"Accessing Accessibility"}
          kicker={"Equity is..."}
          id={"test2"}
          body={"Body Text"}
          stories={[]}
        ></ScrollingBlock>
        <SectionHeader title={"Sustainability looks like"} id={"eq"} />
        <ScrollingBlock
          title={"Human-centered infrastructure"}
          kicker={"Sustainability looks like"}
          id={"test"}
          body={"Body Text"}
          stories={[]}
        ></ScrollingBlock>
        <ScrollingBlock
          title={"Two steps forward one step back"}
          kicker={"Sustainability looks like"}
          id={"test"}
          body={"Body Text"}
          stories={[]}
        ></ScrollingBlock>
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
    description:
      "Addressing the structural failures that have affected millions of Americans—most dramatically during the pandemic in 2020—requires resilience. See how we build it into everything we do.",
    socialImage: {
      id: "WufZdooSKmPSGJlCZlUtu",
      url: "https://images.ctfassets.net/t2ekr6eg3fr3/WufZdooSKmPSGJlCZlUtu/b5772ce17a9c3e4b1fd851d9fe059a1a/pbr-promo-image.png",
      width: 1596,
      height: 897,
      title: "PBR image",
      description: "",
    },
    pageHeader: null,
    contentBlocks: [report],
  };
  return {
    props: formattedPage,
  };
}
