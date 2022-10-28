import { getPageDataFromContentful } from "lib/api";
import PageTemplate from "components/templates/PageTemplate/PageTemplate";
import { PageInterface } from "shared_interfaces/page_interface";
import getPostsByContentType from "lib/contentful/getPostsByContentType";
import { BasicPostInterface } from "shared_interfaces/post_interface";
import React from "react";
import { formatPosts } from "lib/formatters/formatPosts";

export default function News(props:PageInterface) {
 
  return (
  <PageTemplate {...props}>
  </PageTemplate>);
}

export async function getStaticProps({ params, preview = false }) {
  let res: PageInterface = await getPageDataFromContentful({slug:"/news",
    preview: preview,
  });
 
  

  let _posts = await getPostsByContentType("News");
  let posts: Array<BasicPostInterface> = formatPosts(_posts);
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
   props:res,
   // Next.js will attempt to re-generate the page:
   // - When a request comes in
   // - At most once every 60 seconds
   revalidate: 60, // In seconds
 };
}
