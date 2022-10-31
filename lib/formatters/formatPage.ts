import { PageInterface } from "shared_interfaces/page_interface";
import { BasicPostInterface, FullPostInterface } from "shared_interfaces/post_interface";
import { getContentUrl, liftData } from "utils/utils";
import { defaultSocialImage } from "./utils";

export function formatPage(page){
  
    let formattedPage: PageInterface = {
        id: page.sys.id,
        slug: page.slug,
        title: page.title,
        socialImage: liftData(page.socialImage),
        pageHeader:liftData(page.pageHeader),
        contentBlocks: page.contentCollection.items.map((item)=>liftData({...item})),
        description: page.description,
        isBottomCTA: false
    }
    if(!formattedPage.contentBlocks || formattedPage.contentBlocks.length<1) return formattedPage;
    // Check for CTA block at bottom bc it requires extra formatting
    const lastBlockIndex = formattedPage.contentBlocks.length-1;
    if ( formattedPage.contentBlocks[lastBlockIndex]["__typename"]=="SectionCtaBlock"){
      formattedPage.contentBlocks[lastBlockIndex].isBottom=true;
      formattedPage.isBottomCTA =  true
    }
    return formattedPage; 
}


export function formatReportPage(page){
  
  let formattedPage: PageInterface = {
      id: page.sys.id,
      slug: page.slug,
      title: page.title,
      socialImage: liftData(page.socialImage),
      pageHeader:liftData(page.pageHeader),
      contentBlocks: page.contentCollection.items.map((item)=>liftData({...item})),
      description: page.description,
      isBottomCTA: false
  }
  if(!formattedPage.contentBlocks || formattedPage.contentBlocks.length<1) return formattedPage;
  // Check for CTA block at bottom bc it requires extra formatting
  return formattedPage; 
}


export function formatPostPage(post:FullPostInterface, morePosts:Array<BasicPostInterface> ){
  const variant =  post.contentType==="Events" ? "Events Post" : "Post"
  const formattedPage: PageInterface =  {
    id: post.id,
    slug: getContentUrl(post.contentType, post.slug),
    title: post.title,
    socialImage: liftData(post.socialImage) ?? liftData(post.promoImage)?? defaultSocialImage,
    isBottomCTA: true,
    pageHeader: {
      id: `${post.id}-header`,
      title:post.contentType ,
      variant:variant,
      subtitle:post.title,
      body:post.longSummary,
      image:  liftData(post.leadImage),
      eventInfo: post.eventInfo,
    },
    description:post.shortSummary,
    contentBlocks: [
      // Post body block
      post.contentType==="Events" && post.eventInfo && post.eventInfo.speakers &&{
        __typename:"PostEventSpeakersRow",
        id: `${post.id}-PostEventSpeakersRow`,
        speakers: post.eventInfo.speakers
      },
      {
        __typename:"PostBody",
        id: `${post.id}-body`,
        body: post.body,
        contentTags: post.contentTags,
        authors: post.authors,
        date: post.date,
        hideSideNav: post.hideSideNav,
        eventInfo:  post.eventInfo,
      },
      // more posts block
      post.contentType!=="Events" && {
        __typename:"ContentBlockArticleList",
        id: `${post.id}-more-posts`,
        title:"More from Nava",
        items: morePosts,
        layout:"3 card row"
      },
      {
        __typename:"SectionCtaBlock",
        id: `${post.id}-work`,
        title:"Partner with us",
        body:"Let’s talk about what we can build together.",
        buttonText:"Get in touch",
        buttonPath:"/contact",
        isBottom:true,
        image:{
          sys: { id: '1lNLtY5DLthC94TiYeKcvR' },
          url: 'https://images.ctfassets.net/t2ekr6eg3fr3/5BzdwfkJyPTjzFhJ3zGQrg/2dd62521fe065a8ea539ae8aed33c720/CTA2-500x500-V01.png',
          width: 500,
          height: 500,
          title: 'illustration-plum-3',
          description: ''
        }
      },
     
    ],
 }
 return formattedPage;
}

