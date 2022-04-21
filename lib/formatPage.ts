

/*
This returns the article as a list of sections, which can more easily be used with the 
intercept observer.
*/

import { PageInterface } from "shared_interfaces/page_interface";
import { BasicPostInterface, FullPostInterface } from "shared_interfaces/post_interface";


export function formatPage(page){
    
    const formattedPage: PageInterface = {
        id: page.sys.id,
        slug: page.slug,
        title: page.title,
        pageHeader: page.pageHeader,
        contentBlocks: page.contentCollection.items,
        description: page.description,
    }
    return formattedPage; 
}

export function formatPostPage(post:FullPostInterface, morePosts:Array<BasicPostInterface> ){

  const formattedPage: PageInterface =  {
    id: post.id,
    slug: post.slug,
    title: post.title,
    pageHeader: {
      title: post.title,
      subtitle:post.longSummary,
      variant:"post",
    },
    description:post.shortSummary,
    contentBlocks: [
      // Post body block
      {
        __typename:"PostBody",
        body: post.body,
        contentTags: post.contentTags,
        authors: post.authors,
        date: post.date
      },
      // more posts block
      {
        __typename:"ContentBlockArticleList",
        title:"More from Nava",
        postsCollection:{
          items: morePosts
        }
      }
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
    pageHeader: {
      title: author.name,
      subtitle:author.role,
    },
    contentBlocks: [
      {
        __typename:"ContentBlockArticleList",
        postsCollection:{
          items: author.linkedFrom.postCollection.items
        }
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
    description:`Posts related to ${tagName}`,
    pageHeader: {
      title: tagName,
      subtitle: tagName,
    },
    contentBlocks: [
      {
        __typename:"ContentBlockArticleList",
        postsCollection:{
          items: posts
        }
      }
    ],
 }
  return formattedPage; 
}