

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
        pageHeader: {
          id:page.pageHeader.sys.id,
          ...page.pageHeader
        },
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
      id: `${post.id}-header`,
      title: post.title,
      subtitle:post.longSummary,
      variant:"post",
    },
    description:post.shortSummary,
    contentBlocks: [
      // Post body block
      {
        __typename:"PostBody",
        sys:{id: `${post.id}-body`},
        body: post.body,
        contentTags: post.contentTags,
        authors: post.authors,
        date: post.date
      },
      // more posts block
      {
        __typename:"ContentBlockArticleList",
        sys:{id: `${post.id}-more-posts`},
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
      id: `${slug}-header`,
      title: author.name,
      subtitle:author.role,
    },
    contentBlocks: [
      {
        __typename:"ContentBlockArticleList",
        sys:{id: `${slug}-posts`},
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
      id: `${slug}-header`,
      title: tagName,
      subtitle: tagName,
    },
    contentBlocks: [
      {
        __typename:"ContentBlockArticleList",
        sys:{ id: `${slug}-posts`},
        postsCollection:{
          items: posts
        }
      }
    ],
 }
  return formattedPage; 
}