// https://www.navapbc.com/public-benefit-reports/2020/

import React from "react";
import { PageInterface } from "lib/data_models/page_interface";
import ReportTemplate from "components/templates/ReportTemplate/ReportTemplate";
import { getPageDataFromContentful } from "lib/api";





export default function PBR2022(props: PageInterface) {

  return (
        <ReportTemplate {...props}> </ReportTemplate>
  );
}

export async function getStaticProps({ params, preview = false }) {
  //const report = getMarkdownByFilename("public-benefit-reports", 2020);
  let formattedPage: PageInterface = await getPageDataFromContentful(
    {slug:"/public-benefit-reports/2022", 
    preview: preview,
    variant:"report"
    });

  return {
    props: formattedPage,
    revalidate: 60, // In seconds
  };
}