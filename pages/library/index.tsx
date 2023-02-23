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
 
 return {
   props:res,
   // Next.js will attempt to re-generate the page:
   // - When a request comes in
   // - At most once every 60 seconds
   revalidate: 60, // In seconds
 };
}
