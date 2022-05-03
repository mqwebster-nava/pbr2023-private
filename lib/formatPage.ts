

/*
This returns the article as a list of sections, which can more easily be used with the 
intercept observer.
*/

import { PageInterface } from "shared_interfaces/page_interface";
import { BasicPostInterface, ContentfulImageAsset, FullPostInterface } from "shared_interfaces/post_interface";
import { liftData } from "utils/utils";
const defaultSocialImage: ContentfulImageAsset = {
  id: '6f9PYC9LuxyTeGpAQ0A4Ea',
  url: 'https://images.ctfassets.net/t2ekr6eg3fr3/6f9PYC9LuxyTeGpAQ0A4Ea/3792ece63db1863f5754a373b770f731/purple-nava.png',
  width: 760,
  height: 380,
  title: 'Purple Nava Logo',
  description: 'A logo to act as a placeholder for the social image'
}
export {defaultSocialImage};

export function formatPage(page){
    const formattedPage: PageInterface = {
        id: page.sys.id,
        slug: page.slug,
        title: page.title,
        socialImage: liftData(page.socialImage) ?? defaultSocialImage,
        pageHeader:liftData(page.pageHeader),
        contentBlocks: page.contentCollection.items.map((item)=>liftData({...item})),
        description: page.description,
    }
    return formattedPage; 
}

export function formatPostPage(post:FullPostInterface, morePosts:Array<BasicPostInterface> ){


  const formattedPage: PageInterface =  {
    id: post.id,
    slug: post.slug,
    title: post.title,
    socialImage: liftData(post.promoImage)?? defaultSocialImage,
    pageHeader: {
      id: `${post.id}-header`,
      title: post.title,
      subtitle:post.contentType,
      body:post.longSummary,
      image:  liftData(post.leadImage) ?? liftData(post.promoImage),
      variant:"post",
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
        date: post.date
      },
      {
        __typename:"SectionCtaBlock",
        id: `${post.id}-work`,
        title:"Want to work with us?",
        body:"Let’s make government services simple, effective, and accessible to all.",
        buttonText:"Get in touch",
        buttonPath:"/contact",
      },
      // more posts block
      {
        __typename:"ContentBlockArticleList",
        id: `${post.id}-more-posts`,
        title:"More from Nava",
        posts: morePosts
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
    pageHeader: {
      id: `${slug}-header`,
      title: author.name,
      subtitle:author.role,
    },
    contentBlocks: [
      {
        __typename:"ContentBlockArticleList",
        id: `${slug}-posts`,
        posts: author.linkedFrom.postCollection.items
        
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
    pageHeader: {
      id: `${slug}-header`,
      title: tagName,
      subtitle: tagName,
    },
    contentBlocks: [
      {
        __typename:"ContentBlockArticleList",
        id: `${slug}-posts`,
        posts: posts
      }
    ],
 }
  return formattedPage; 
}