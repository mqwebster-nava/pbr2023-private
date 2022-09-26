
// https://www.navapbc.com/public-benefit-reports/2020/

import React from "react";
import { PageInterface } from "shared_interfaces/page_interface";
import ReportTemplate from "components/templates/ReportTemplate/ReportTemplate";
import { getPageDataFromContentful } from "lib/api";


export default function PBR2019(props: PageInterface) {

  return (
        <ReportTemplate {...props} > </ReportTemplate>
  );
}

export async function getStaticProps({ params, preview = false }) {
  //const report = getMarkdownByFilename("public-benefit-reports", 2020);
  let formattedPage: PageInterface = await getPageDataFromContentful(
    {slug:"/public-benefit-reports/2019", 
    preview: preview,
    variant:"report"
    });

  return {
    props: formattedPage,
  };
}


// // @ts-nocheck
// import React from "react";
// import {
//   ReportHeaderHero2019,
//   ReportIntroSection,
//   ReportSections,
//   ReportShoutoutSection,
// } from "components/blocks";

// import { getMarkdownByFilename } from "../../lib/markdown";
// import { PageInterface } from "shared_interfaces/page_interface";

// export async function getStaticProps() {
//   const report = getMarkdownByFilename("public-benefit-reports", 2019);
//   const formattedPage: PageInterface = {
//     id: "public-benefit-reports/2019",
//     slug: "/public-benefit-reports/2019",
//     title: "Nava: Public Benefit Reports: 2019 Think Long Term",
//     description:"Building simple, effective, and accessible government services is an ongoing, continuous process. See how thinking long-term informs and strengthens our work.",
//     socialImage: {
//       "id": "1FBw7iCNqGBWNn7dwQvPaT",
//       "url": "https://images.ctfassets.net/t2ekr6eg3fr3/1FBw7iCNqGBWNn7dwQvPaT/01dff7b0334798a221ae4036b1e7de41/PBR-2019-promo.png",
//       "width": 1600,
//       "height": 900,
//       "title": "PBR-2019-promo",
//       "description": ""
//   },
//     pageHeader: null,
//     contentBlocks: [
//       report
//     ], 
//  }
//   return {
//     props: formattedPage,
//   };
// }

// export default function PBR2019(props:PageInterface) {
//   const report = props.contentBlocks[0];
//   const {
//     title,
//     introduction,
//     section_one,
//     section_two,
//     section_three,
//     section_four,
//     shoutouts,
//   } = report;

//   const { employee_list, alumni_list, partner_list, tot_list, pet_list } =
//     shoutouts;
//   const shoutoutLists = [
//     employee_list,
//     alumni_list,
//     partner_list,
//     tot_list,
//     pet_list,
//   ];
//   const sections = [
//     {
//       picture: "/images/pbrs/2019-1.png",
//       picturePosition: "left",
//       pictureAltText: "",
//       isWhiteBG: true,
//       content: section_one,
//     },
//     {
//       picture: "/images/pbrs/2019-2.png",
//       picturePosition: "right",
//       pictureAltText: "",
//       isWhiteBG: false,
//       content: section_two,
//     },
//     {
//       picture: "/images/pbrs/2019-3.png",
//       picturePosition: "left",
//       pictureAltText: "",
//       isWhiteBG: true,
//       content: section_three,
//     },
//     {
//       picture: "/images/pbrs/2019-4.png",
//       picturePosition: "right",
//       pictureAltText: "",
//       content: section_four,
//     },
//   ];

//   const theme = {
//     sage: {
//       background: "bg-sage-50",
//       text: "text-sage-pbr",
//     },
//     default: {
//       text: "text-gray-900",
//     },
//   };

//   return (
//     <main>
//       <ReportHeaderHero2019
//         title={title}
//         altText="An illustration of people holding lines that spell out NAVA."
//         pdfLink="/files/2019NavaPublicBenefitReport.pdf"
//       />
//       <ReportIntroSection body={introduction} theme={theme} />
//       <ReportSections sections={sections} theme={theme} />
//       <ReportShoutoutSection
//         title={shoutouts.title}
//         introduction={shoutouts.introduction}
//         lists={shoutoutLists}
//         theme={theme}
//       />
//     </main>
//   );
// }
