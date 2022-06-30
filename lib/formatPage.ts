

/*
This returns the article as a list of sections, which can more easily be used with the 
intercept observer.
*/

import { PageInterface } from "shared_interfaces/page_interface";
import { BasicPostInterface, ContentfulImageAsset, FullPostInterface } from "shared_interfaces/post_interface";
import { capitalize, liftData } from "utils/utils";

const sortPostsByDate= (posts) =>  posts.sort((a,b)=> new Date(b.date).getTime() - new Date(a.date).getTime());


const defaultSocialImage: ContentfulImageAsset = {
  id: '6f9PYC9LuxyTeGpAQ0A4Ea',
  url: 'https://images.ctfassets.net/t2ekr6eg3fr3/4FSYQIlTVLRdNz6jb65wYI/b1ca224c0842ad6ba621397d324950e2/About-_Navas_Story_Social_1280x720_-8.png',
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
        socialImage: liftData(page.socialImage) ?? defaultSocialImage,
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

export function formatPostPage(post:FullPostInterface, morePosts:Array<BasicPostInterface> ){
  const formattedPage: PageInterface =  {
    id: post.id,
    slug: post.slug,
    title: post.title,
    socialImage: liftData(post.promoImage)?? defaultSocialImage,
    isBottomCTA: false,
    pageHeader: {
      id: `${post.id}-header`,
      title:post.contentType ,
      variant:"Post",
      subtitle:post.title,
      body:post.longSummary,
      image:  liftData(post.leadImage),
    },
    description:post.shortSummary,
    contentBlocks: [
      // Post body block
      {
        __typename:"PostBody",
        id: `${post.id}-body`,
        body: post.body,
        contentTags: post.contentTags,
        authors: post.authors,
        date: post.date,
        hideSideNav: post.hideSideNav,
        isEvent: post.contentType=="Events",
        registrationLink: post.registrationLink
      },
      {
        __typename:"SectionCtaBlock",
        id: `${post.id}-work`,
        title:"Partner with us",
        body:"Let’s talk about what we can build together.",
        buttonText:"Get in touch",
        buttonPath:"/contact",
        image:{
          sys: { id: '1lNLtY5DLthC94TiYeKcvR' },
          url: 'https://images.ctfassets.net/t2ekr6eg3fr3/5BzdwfkJyPTjzFhJ3zGQrg/2dd62521fe065a8ea539ae8aed33c720/CTA2-500x500-V01.png',
          width: 500,
          height: 500,
          title: 'illustration-plum-3',
          description: ''
        }
      },
      // more posts block
      post.contentType!=="Events" && {
        __typename:"ContentBlockArticleList",
        id: `${post.id}-more-posts`,
        title:"More from Nava",
        items: morePosts,
        layout:"3 card row"
      },
     

    ],
 }
 return formattedPage;
}



export function formatAuthorPage(slug, author){
    
  const formattedPage: PageInterface = {
    id: slug,
    slug: slug,
    title: author.name,
    description:author.bio,
    socialImage: defaultSocialImage,
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
    slug: slug,
    title: tagName,
    socialImage: defaultSocialImage,
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