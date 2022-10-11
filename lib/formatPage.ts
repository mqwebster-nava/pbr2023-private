

/*
This returns the article as a list of sections, which can more easily be used with the 
intercept observer.
*/

import { PageInterface } from "shared_interfaces/page_interface";
import { BasicPostInterface, ContentfulImageAsset, FullPostInterface } from "shared_interfaces/post_interface";
import { capitalize, getContentUrl, liftData } from "utils/utils";


const sortPostsByDate= (posts) =>  posts.sort((a,b)=> new Date(b.date).getTime() - new Date(a.date).getTime());


const defaultSocialImage: ContentfulImageAsset = {
  id: '6f9PYC9LuxyTeGpAQ0A4Ea',
  url: 'https://images.ctfassets.net/t2ekr6eg3fr3/1XVCel1lt0F1olfgIWgnh1/219ed4ebe26ec4528c04a834b2b77e8f/Author-Social-V2.png',
  width: 1280,
  height: 720,
  title: 'Purple Nava Logo',
  description: 'A logo to act as a placeholder for the social image'
}
export {defaultSocialImage};

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



export function formatAuthorPage(slug, author){
    
  const formattedPage: PageInterface = {
    id: slug,
    slug: `/authors/${slug}`,
    title: author.name,
    description:author.bio,
    socialImage: {
      id: '1XVCel1lt0F1olfgIWgnh1',
      url: 'https://images.ctfassets.net/t2ekr6eg3fr3/1XVCel1lt0F1olfgIWgnh1/219ed4ebe26ec4528c04a834b2b77e8f/Author-Social-V2.png',
      width: 1280,
      height: 720,
      title: 'Author Social',
      description: ''
    },
    isBottomCTA: false,
    pageHeader: {
      id: `${slug}-header`,
      variant:"Secondary",
      title: author.name,
      subtitle:author.role,
    },
    contentBlocks: [
      {
        __typename:"AuthorBioBlock",
        id: `${slug}-bio`,
        ...author
      },
      {
        __typename:"ContentBlockArticleList",
        id: `${slug}-posts`,
        items:  sortPostsByDate(author.linkedFrom.postCollection.items),
        layout:"3 card row"
      }
    ], 
 }
  return formattedPage; 
}


export function formatTagsPage(slug, tagName, posts){
    
  const formattedPage: PageInterface = {
    id: slug,
    slug: `/tags/${slug}`,
    title: tagName,
    socialImage: {
        id: '37ezJD5SPWfjLlm0n4swuq',
        url: 'https://images.ctfassets.net/t2ekr6eg3fr3/37ezJD5SPWfjLlm0n4swuq/ac58529bd710971907e89e9e03b865cd/Tag-Social-V2.png',
        width: 1280,
        height: 720,
        title: 'Tag Social',
        description: ''
      },
    description:`Posts related to ${tagName}`,
    isBottomCTA: false,
    pageHeader: {
      id: `${slug}-header`,
      variant:"Secondary",
      title:"Related articles",
      subtitle:capitalize(tagName),
    },
    contentBlocks: [
      {
        __typename:"ContentBlockArticleList",
        id: `${slug}-posts`,
        items:  sortPostsByDate(posts),
        layout:"3 card row"
      }
    ],
 }
  return formattedPage; 
}