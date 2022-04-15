import {
  PlaceholderPageHeader,
  ContentBlockArticleList,
  Newsletter,
} from "components/blocks_core";


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
         type={"News"}
          title={"Nava PBC wins new contracts to modernize mission-critical systems with the Centers for Medicare & Medicaid Services"}
          path={"/"}
        >
          Nava is thrilled to share that we won two new contracts with the Centers for Medicare & Medicaid Services (CMS) to support their ambitious goal to improve the quality of care in our healthcare system.
        </ContentCard>
        <ContentCard 
        type={"News"}
        title={"Nava PBC awarded contract to improve MyMedicare.gov"} path={"/"}>
        Nava’s been awarded a three-year, $15.8M contract with CMS for the Medicare Authenticated Experience (MAX) to support CMS’s ambitious goal to improve the quality of care in our healthcare system.
        </ContentCard>
        <ContentCard 
         type={"News"}
        title={"Nava PBC launches apprenticeship for engineers starting careers in public interest technology"} path={"/"}>
        Our engineering apprenticeship is a full-time, 4-month program beginning in July 2019. We’ll provide on-the-job training, salary, and a clear path towards full-time employment.
        </ContentCard>
      </ContentBlockArticleList>
      <Newsletter/>
    </div>
  );
}

// import ContentfulApi from "lib/contentful";
// import PageTemplate from "components/templates/PageTemplate/PageTemplate";
// import { PageInterface } from "lib/page_data_models";
// import { PageProps } from "utils/pageUtils";
// // https://docs.google.com/document/d/1RG_J13eS5MM4QMLvgjK4xSr7CrJWomsKtxLDHjcttTw/edit#



// export default function News({page, preview}:PageProps ) {
//   return (<PageTemplate page={page} preview={preview}/>);
// }

// export async function getStaticProps({ params, preview = false }) {
//   const res: PageInterface = await ContentfulApi.getPageBySlug("/news", {
//     preview: preview,
//   });
 
//  return {
//    props:
//    { page:res }
//  };
// }