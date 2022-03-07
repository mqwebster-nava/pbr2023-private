import {
  SectionHeader,
  ContentBlockLinkToPage,
  ContentBlockText,
  PlaceholderPageHeader,
  ContentBlockArticleList,
  Newsletter,
} from "components/row/index";


import { ContentCard } from "components/atom/index";


export default function News() {
  return (
    <div>
        <PlaceholderPageHeader
        title={"News"}
        subtitle={"News Subtitle"}
      />
      <hr />
      <ContentBlockArticleList
        title={"Most Recent News"}
        buttonText={"Read more"}
        buttonPath={""}
      >
        <ContentCard
          title={"Nava PBC wins new contracts to modernize mission-critical systems with the Centers for Medicare & Medicaid Services"}
          path={"/"}
        >
          Nava is thrilled to share that we won two new contracts with the Centers for Medicare & Medicaid Services (CMS) to support their ambitious goal to improve the quality of care in our healthcare system.
        </ContentCard>
        <ContentCard title={"Nava PBC awarded contract to improve MyMedicare.gov"} path={"/"}>
        Nava’s been awarded a three-year, $15.8M contract with CMS for the Medicare Authenticated Experience (MAX) to support CMS’s ambitious goal to improve the quality of care in our healthcare system.
        </ContentCard>
        <ContentCard title={"Nava PBC launches apprenticeship for engineers starting careers in public interest technology"} path={"/"}>
        Our engineering apprenticeship is a full-time, 4-month program beginning in July 2019. We’ll provide on-the-job training, salary, and a clear path towards full-time employment.
        </ContentCard>
      </ContentBlockArticleList>
      <Newsletter/>
    </div>
  );
}
