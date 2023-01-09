

  import React from "react";
  import PageTemplate from "components/templates/PageTemplate/PageTemplate";
  import { getPageDataFromContentful } from "lib/api";
  import { PageInterface } from "lib/data_models/page_interface";


  export default function DEI2023(props:PageInterface) {
    return (
      <PageTemplate {...props}>
      </PageTemplate>
    );
  }
  
  export async function getStaticProps({ params, preview = false }) {
    
    const res: PageInterface = await getPageDataFromContentful({
      slug: "/dei2023",
      preview: preview,
    });
    return {
      props:  res,
      revalidate: 60, // In seconds
    };
  }




// import {
//   overview,
//   categories,
//   race,
//   gender,
//   additionalIdentities,
// } from "../lib/data/dei_2021";
// import { getMarkdownByFilename } from "../utils/markdown_parser";
// import {
//   PercentBarChart,
//   ResourceGroups,
//   PercentSquareChart,
//   PercentSquareChartFixed,
// } from "components/blocks";
// import React from "react";
// import PageTemplate from "components/templates/PageTemplate/PageTemplate";
// import { getPageDataFromContentful } from "lib/api";
// import { PageInterface } from "lib/data_models/page_interface";
// import ResponsiveContentContainer from "components/blocks/ResponsiveContentContainer/ResponsiveContentContainer";
// import PostContent from "components/blocks/PostBody/PostContent";
// import MarkdownComponent from "utils/MarkdownComponent";
// import ReportContentDEI from "components/blocks_reports/ReportContent/ReportContentDEI";

// interface DEIPageInterface {
//   page: PageInterface;
//   reportData: any;
// }

// export default function DEI({ page, reportData }: DEIPageInterface) {
//   const { overview, categories, race, gender, additionalIdentities, content } =
//     reportData;
//   const raceKey = "race";
//   const raceFilters = createFilters(raceKey, race.statistics[0], categories);

//   const genderKey = "gender";
//   const genderFilters = createFilters(
//     genderKey,
//     gender.statistics[0],
//     categories
//   );

//   return (
//     <PageTemplate {...page}>
//       <section className="bg-white py-4xl">
//         <div className="responsive-container">
//           <div className="grid grid-cols-1 md:grid-cols-2 justify-items-center">
//             <div className="w-full">
//               <p className="type-preset-5 font-serif">{content.lead}</p>
//               <ReportContentDEI content={content.introduction} />
//             </div>
//             <img
//               src="/images/dei/side_illustration.png"
//               width="138px"
//               className="max-h-[450px] md:scale-[1.4]"
//               alt=""
//             />
//           </div>
//         </div>
//       </section>

//       <section className="bg-sage-50 py-4xl">
//         <ResponsiveContentContainer alignment={"left"}>
//           <ReportContentDEI content={content.overview} />
//           <PercentBarChart
//             description="How we’re doing in 2021"
//             graphs={overview}
//           />
//         </ResponsiveContentContainer>
//       </section>
//       <section className="bg-white">
//         <ResponsiveContentContainer alignment={"left"} padding="py-3xl">
//           <ReportContentDEI content={content.body} />
//         </ResponsiveContentContainer>
//         <PercentSquareChart
//           title={race.title}
//           content={race.content}
//           stats={race.statistics}
//           dataKey={raceKey}
//           dataFilters={raceFilters}
//           checkbox={{
//             value: "multiRacial",
//             label: "Two or more races selected",
//           }}
//           context={[race.selfReported, race.noAnswer]}
//         />
//         <PercentSquareChart
//           title={gender.title}
//           content={gender.content}
//           stats={gender.statistics}
//           dataKey={genderKey}
//           dataFilters={genderFilters}
//           context={[gender.selfReported, gender.noAnswer]}
//           theme="gold"
//         />
//         <PercentSquareChartFixed
//           title={additionalIdentities.title}
//           stats={additionalIdentities.statistics}
//           theme="purple"
//         />
//       </section>

//       <section className="bg-sage-50">
//       <ResponsiveContentContainer alignment={"left"} padding="py-3xl">
//           <ReportContentDEI  content={content.resources.introduction} />
//           <ResourceGroups groups={content.resources.groups} />
//         </ResponsiveContentContainer>
//       </section>
//     </PageTemplate>
//   );
// }

// export async function getStaticProps({ params, preview = false }) {
//   const content = getMarkdownByFilename("dei", 2021);

//   const res: PageInterface = await getPageDataFromContentful({
//     slug: "/dei",
//     preview: preview,
//   });
//   return {
//     props: {
//       page: res,
//       reportData: {
//         overview,
//         categories,
//         race,
//         gender,
//         additionalIdentities,
//         content,
//       },
//     },
//   };
// }

// const createFilters = (dataKey, data, categories) => {
//   const filterKeys = Object.keys(data).filter(
//     (key) => !key.includes("_Multi") && !key.includes(dataKey)
//   );

//   const filters = filterKeys.map((key) => {
//     return {
//       id: key,
//       text: categories[key].display,
//       total: categories[key].total,
//     };
//   });
//   return filters;
// };
