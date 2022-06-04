import { getPageDataFromContentful } from "lib/api";
import PageTemplate from "components/templates/PageTemplate/PageTemplate";
import { PageInterface } from "shared_interfaces/page_interface";
import getPostsByContentType from "lib/contentful/getPostsByContentType";
import { BasicPostInterface } from "shared_interfaces/post_interface";
import React from "react";
import { ContentBlockArticleList } from "components/blocks";
import { A } from "@storybook/addon-docs/node_modules/@storybook/components";
// https://docs.google.com/document/d/1RG_J13eS5MM4QMLvgjK4xSr7CrJWomsKtxLDHjcttTw/edit#

interface NewsInterface {
  page:PageInterface;
  posts: Array<BasicPostInterface>
}


export default function News({page, posts }) {
  posts = posts.sort((a,b)=> new Date(b.date).getTime() - new Date(a.date).getTime());
  return (
  <PageTemplate {...page}>
      <ContentBlockArticleList id={"news section"} title={"Nava News"} items={posts} layout="default" />
  </PageTemplate>);
}

export async function getStaticProps({ params, preview = false }) {
  const res: PageInterface = await getPageDataFromContentful({slug:"/news",
    preview: preview,
  });
  const posts: Array<BasicPostInterface> = await getPostsByContentType("News");

 return {
   props:{
     page:res,
     posts:posts
   }
 };
}
