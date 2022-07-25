import { getPageDataFromContentful } from "lib/api";
import PageTemplate from "components/templates/PageTemplate/PageTemplate";
import { PageInterface } from "shared_interfaces/page_interface";
import getPostsByContentType from "lib/contentful/getPostsByContentType";
import { BasicPostInterface } from "shared_interfaces/post_interface";
import React from "react";
import { isDateAfterNow } from "utils/utils";

export default function Events(props:PageInterface) {
 
  return (
  <PageTemplate {...props}>
  </PageTemplate>);
}

export async function getStaticProps({ params, preview = false }) {
  let res: PageInterface = await getPageDataFromContentful({slug:"/events",
    preview: preview,
  });
 
  
  let posts: Array<BasicPostInterface> = await getPostsByContentType("Events");

  posts = posts.sort((a,b)=> new Date(b.date).getTime() - new Date(a.date).getTime());
  const futureEvents = posts.filter((e)=> isDateAfterNow(e.date));
  const pastEvents = posts.filter((e)=> !isDateAfterNow(e.date));
  res.contentBlocks = [
    futureEvents.length>0 && {
      __typename:"ContentBlockArticleList", // Article Feed
      id: "events section",
      title: "Upcoming Events",
      items:futureEvents,
      layout:"3 card row"
    },
    pastEvents.length>0 && {
      __typename:"ContentBlockArticleList", // Article Feed
      id: "events section",
      title: "Past Events",
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
