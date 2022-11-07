
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
  



  const createFilters = (dataKey, data, categories) => {
    const filterKeys = Object.keys(data).filter(
      (key) => !key.includes("_Multi") && !key.includes(dataKey)
    );
  
    const filters = filterKeys.map((key) => {
      return {
        id: key,
        text: categories[key].display,
        total: categories[key].total,
      };
    });
    return filters;
  };
  
  