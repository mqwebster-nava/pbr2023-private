import { getPageDataFromContentful } from "lib/api";
import PageTemplate from "components/templates/PageTemplate/PageTemplate";
import { PageInterface } from "lib/data_models/page_interface";
import {getPosts} from "lib/contentful/getPostsByContentType";
import { BasicPostInterface } from "lib/data_models/post_interface";
import React from "react";
import { formatPosts } from "lib/formatters/formatPosts";
import getAllTags from "lib/contentful/getAllTags";

export default function AllInsights(props:PageInterface) {
 
  return (
  <PageTemplate {...props}>
  </PageTemplate>);
}

export async function getStaticProps({ params, preview = false }) {
  let res: PageInterface = await getPageDataFromContentful({slug:"/insights/all",
    preview: preview,
  });
 
  let _posts = await getPosts();
  let tags = await getAllTags();
  let posts: Array<BasicPostInterface> = formatPosts(_posts);
  posts = posts.sort((a,b)=> new Date(b.date).getTime() - new Date(a.date).getTime()).filter((a)=>new Date(a.date).getTime()< new Date().getTime());
  res.contentBlocks = [
    {
      
      __typename:"ContentBlockArticleList", // Article Feed
      id: "news section",
      items: posts,
      layout:"3 card row",
      filterable:true,
      tags:tags
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
