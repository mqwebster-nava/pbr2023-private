import { getPageDataFromContentful } from "lib/api";
import PageTemplate from "components/templates/PageTemplate/PageTemplate";
import { PageInterface } from "lib/data_models/page_interface";
import {getPosts} from "lib/contentful/getPostsAll";
import { BasicPostInterface } from "lib/data_models/post_interface";
import React from "react";
import { formatPosts } from "lib/formatters/formatPosts";
import getAllTags from "lib/contentful/getAllTags";

export default function Library(props:PageInterface) {
 
  return (
  <PageTemplate {...props}>
  </PageTemplate>);
}

export async function getStaticProps({ params, preview = false }) {
  let res: PageInterface = await getPageDataFromContentful({slug:"/library",
    preview: preview,
  });
 
  let _posts = await getPosts();
  let tags = await getAllTags();
  let posts: Array<BasicPostInterface> = formatPosts(_posts);
  posts = posts.sort((a,b)=> new Date(b.date).getTime() - new Date(a.date).getTime()).filter((a)=>new Date(a.date).getTime()< new Date().getTime());

  const filterEx = posts.slice(4, 7);

  res.contentBlocks = [
    {
      
      __typename:"ContentBlockArticleList", // Article Feed
      id: "new section",
      items:filterEx,
      layout:"1 large 2 small cards row",
      title:"Featured"
    },
    {
      
      __typename:"ContentBlockArticleList", // Article Feed
      id: "news section",
      items: posts,
      layout:"3 card row",
      title:"All resource",
      filterable:true,
      tags:tags
    }
  ]
 return {
   props:res,
   // Next.js will attempt to re-generate the page:
   // - When a request comes in
   // - At most once every 60 seconds
   revalidate: 60, // In seconds
 };
}
