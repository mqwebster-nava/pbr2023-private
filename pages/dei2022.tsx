
  import React from "react";
  import PageTemplate from "components/templates/PageTemplate/PageTemplate";
  import { getPageDataFromContentful } from "lib/api";
  import { PageInterface } from "lib/data_models/page_interface";


  export default function DEI2022(props:PageInterface) {
    return (
      <PageTemplate {...props}>
      </PageTemplate>
    );
  }
  
  export async function getStaticProps({ params, preview = false }) {
    
    const res: PageInterface = await getPageDataFromContentful({
      slug: "/dei2022",
      preview: preview,
    });
    return {
      props:  res
    };
  }