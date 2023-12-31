import { getPageDataFromContentful } from "lib/api";
import PageTemplate from "components/templates/PageTemplate/PageTemplate";
import { PageInterface } from "lib/data_models/page_interface";
import getPostsByContentType from "lib/contentful/getPostsByContentType";
import { BasicPostInterface } from "lib/data_models/post_interface";
import React from "react";
import { isDateAfterNow } from "utils/utils";
import { formatPosts } from "lib/formatters/formatPosts";

export default function Events(props:PageInterface) {
 
  return (
  <PageTemplate {...props}>
  </PageTemplate>);
}

export async function getStaticProps({ params, preview = false }) {
  let res: PageInterface = await getPageDataFromContentful({slug:"/events",
    preview: preview,
  });
 
  
  let _posts = await getPostsByContentType("Events");
  const posts: Array<BasicPostInterface> = formatPosts(_posts);
  const futureEvents = posts.filter((e)=> isDateAfterNow(e.date)).sort((a,b)=> new Date(a.date).getTime() - new Date(b.date).getTime());
  const pastEvents = posts.filter((e)=> !isDateAfterNow(e.date)).sort((a,b)=> new Date(b.date).getTime() - new Date(a.date).getTime());
  res.contentBlocks = [
    futureEvents.length>0 && {
      __typename:"ContentBlockArticleList", // Article Feed
      id: "events section",
      title: "Upcoming",
      items:futureEvents,
      layout:"3 card row"
    },
    pastEvents.length>0 && {
      __typename:"ContentBlockArticleList", // Article Feed
      id: "events section",
      title: "Past",
      items: pastEvents,
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
