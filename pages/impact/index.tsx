import {
  SectionHeader,
  ContentBlockLinkToPage,
  ContentBlockText,
  PlaceholderPageHeader,
  ContentBlockArticleList,
  Newsletter,
} from "components/blocks";
import { ContentCard } from "components/atom/index";
import React from "react";
// https://docs.google.com/document/d/1RG_J13eS5MM4QMLvgjK4xSr7CrJWomsKtxLDHjcttTw/edit#


export default function Impact() {
  return (
    <div>
      <PlaceholderPageHeader
        title={"Impact"}
        subtitle={"Nava’s mission is to make government services simple, effective, and accessible to all"}
      />
      <hr />
      <SectionHeader
        title={"Delivering on our promise to the public"}
      >
      As a public benefit corporation, Nava has a fiduciary duty to our mission. We’re responsible to ourselves and the public for ensuring that critical public services are simple, effective, and accessible to all. 
      </SectionHeader>
      <hr />
      <ContentBlockText >
        <p>To ensure that our work aligns with our mission we select projects that:</p>
        <ul className="list-disc">
          {[
            "Support populations whose well-being is under threat from institutional, economic, societal, or environmental pressures",
            "Make digital services more simple, effective, accessible, and equitable",
            "Continue to positively impact the communities we serve long after our contract ends"
          ].map((item) => (
            <li key={item.length} className="font-sans text-base">
              {item}
            </li>
          ))}
        </ul>
      </ContentBlockText>
      <hr />
      <ContentBlockText >
          <p>Advancing our vision over the long-term is an incredible opportunity to help mend the brittle and broken relationships between people and public institutions. We made the choice to focus on populations whose well-being is under threat because it’s here that the stakes are often highest, where trust is either created or destroyed en masse. We’ll know we’re successful not in months or years, but when trust in government is restored.</p>
      </ContentBlockText>
    
      <hr />
    
      <SectionHeader
        title={"Tracking the impact of our work"}
      >
        While we keep our eyes on the horizon, our annual reports help keep us accountable in the near term.
      </SectionHeader>
      <hr />
      <ContentBlockText >
        <p>See how we measure up across three key areas:</p>
        <ul className="list-disc">
          {[
            "Service experiences are simple, fast, equitable, and accessible to all",
            "Program outcomes are effective for the beneficiary population",
            "Agency tech and ops are adaptable and resilient in a changing world"            
          ].map((item) => (
            <li key={item.length} className="font-sans text-base">
              {item}
            </li>
          ))}
        </ul>
      </ContentBlockText>
      <ContentBlockArticleList>
        <ContentCard
          title={"Structural change requires resilience"}
          path={"/"}
        >
          Read our 2020 Public Benefit Report
        </ContentCard>
        <ContentCard title={"Building resilient services at scale"} path={"/"}>
        Read our 2019 Public Benefit Report
        </ContentCard>
        <ContentCard title={"Progress takes work"} path={"/"}>
        Read our 2018 Public Benefit Report
        </ContentCard>
      </ContentBlockArticleList>
      <Newsletter/>
    </div>
  );
}

