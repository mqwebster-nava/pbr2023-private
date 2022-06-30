import { getPageDataFromContentful } from "lib/api";
import PageTemplate from "components/templates/PageTemplate/PageTemplate";
import { PageInterface } from "shared_interfaces/page_interface";
import getPostsByContentType from "lib/contentful/getPostsByContentType";
import { BasicPostInterface } from "shared_interfaces/post_interface";
import React from "react";

export default function AllInsights(props:PageInterface) {
 
  return (
  <PageTemplate {...props}>
  </PageTemplate>);
}

export async function getStaticProps({ params, preview = false }) {
  let res: PageInterface = await getPageDataFromContentful({slug:"/insights/all",
    preview: preview,
  });
 
  
  let posts: Array<BasicPostInterface> = await getPostsByContentType("Insight");
  posts = posts.sort((a,b)=> new Date(b.date).getTime() - new Date(a.date).getTime());
  res.contentBlocks = [
    {
      
      __typename:"ContentBlockArticleList", // Article Feed
      id: "news section",
      items: posts,
      layout:"3 card row"
    },
    ...res.contentBlocks
  ]
 return {
   props:res
 };
}
