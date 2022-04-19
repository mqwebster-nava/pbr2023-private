
/**
 * This class constructs GraphQL queries for blog posts, page content and other data
 * and calls out to the Contentful GraphQL API.
 *
 * Contentful GraphQL API docs:
 * https://www.contentful.com/developers/docs/references/graphql/
 *
 * Explore the GraphQL API in depth in the GraphiQL Playground:
 * https://graphql.contentful.com/content/v1/spaces/{SPACE_ID}/explore?access_token={ACCESS_TOKEN}
 *
 */

import { PageInterface } from "models/page_models";
import { AuthorPostInterface, BasicPostInterface, FullPostInterface } from "models/post_model";
import { formatPage } from "utils/page_utils";
import { formatFullPost, formatImageAsset, formatPosts } from "utils/post_utils";
import { allTagsSlugIdPair } from "utils/utils";
import { PAGE_FIELDS } from "./page_data_models";
import { 
  AUTHOR_ALL_FIELDS,
  POST_ALL_FIELDS, 
  POST_CORE_FIELDS,

} from "./post_data_models";

// When preview is true, content that are in "draft" state will be renderered. Otherwise it is hidden
// Preview is used to render previews of the page within the contentful interface.
const defaultOptions = {
  preview: false,
};

type PageVariant = "default" | "post" | "tags" | "author";

export interface PageQueryInterface {
  slug: string;
  variant?: PageVariant;
  preview?: boolean;
}



export default class ContentfulApi {
 
  static async getPageBySlug({slug, variant="default", preview =false}:PageQueryInterface) {

   // If it is a default page, then there should be a corresponding Page Content model in 
    // Contentful with page info
    // ex /impact has all the impact content
    if(variant=="default"){
      return await this.getPageDataBySlug({slug,preview });
    }
   
    // If it is a post, we create the page interface data from the post content
    if(variant=="post"){
      // Get the post data
      const res = await this.getPostBySlug(slug);
      const post:FullPostInterface = res.post;
      const formattedPage: PageInterface = {
        id: post.id,
        slug: post.slug,
        title: post.title,
        pageHeader: {
          title: post.title,
          subtitle:post.longSummary,
          variant:"post",
        },
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
              items: res.morePosts
            }
          }
        ],
        description:post.shortSummary,
     }
     return formattedPage;
    }

    if (variant=="author"){
      const author = await this.getPostsByAuthor(slug);
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

    if (variant=="tags"){
      const tagName:string = allTagsSlugIdPair.get(slug);
      const posts:Array<BasicPostInterface> = await this.getPostsByTag(tagName);
    
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
  }

  private static async getPageDataBySlug({slug, preview =false}:PageQueryInterface) {
    const variables = { slug, preview  };
    const query = `query GetPageBySlug($slug: String!, $preview: Boolean!) {
      pageContentCollection(limit: 1, where: {slug: $slug}, preview: $preview) {
        total
        items {
          ${PAGE_FIELDS}
        }
      }
    }`;
    const response = await this.callContentful(query, variables, {preview});
 
    if(!response.data.pageContentCollection.items) return null;
    const page = response.data.pageContentCollection.items.pop();
    const formattedPage:PageInterface = formatPage(page);
  
    return  formattedPage;
  }


  
  private static async getPostBySlug(slug, options = defaultOptions) {
    const variables = { slug, preview: options.preview };
    const query = `query GetPostBySlug($slug: String!, $preview: Boolean!) {
      postCollection(limit: 1, where: {slug: $slug}, preview: $preview) {
        total
        items {
          ${POST_ALL_FIELDS}
        }
      }
    }`;
   
    const response = await this.callContentful(query, variables, options);
    if(!response.data.postCollection.items) return null;
    const post =  response.data.postCollection.items.pop();
    const formattedPost = formatFullPost(post);
    const morePosts = await this.getMorePosts(formattedPost, options);
    return {
      post:formattedPost,
      morePosts
    };
  }

/*
This gets 3 posts that have similar tags to the post the user is currently reading 
*/
private static async getMorePosts( post: FullPostInterface, options = defaultOptions) {
    const variables = { slug:post.slug, preview: options.preview };
    const query = `query GetMorePosts($slug: String!, $preview: Boolean!) {
      postCollection(where: { slug_not_in: [ $slug ] }, preview: $preview) {
        total
        items {
          ${POST_CORE_FIELDS}
        }
      }
    }`;
    const response = await this.callContentful(query, variables, options);
    const posts = response.data.postCollection.items
      ? response.data.postCollection.items
      : [];
    const formattedPosts: Array<BasicPostInterface> = formatPosts(posts);
    // Filter by tags -- if no matches then get 3 random posts
    const filteredPosts: Array<BasicPostInterface> 
        =  post.contentTags 
        ? formattedPosts.filter((_post)=> _post.contentTags &&_post.contentTags.some(element => post.contentTags.includes(element))).sort(() => Math.random() - 0.5).slice(0,3)
        : formattedPosts.sort(() => Math.random() - 0.5).slice(0,3);

    return filteredPosts;
  }


  private static async getPostsByTag(tag, options = defaultOptions) {
    const variables = { tag, };
    const query = `query GetPostsByTag($tag: String!)
    {
      postCollection(limit: 20,  where: { contentTags_contains_all:[$tag] } ) 
      {
        items {
          ${POST_CORE_FIELDS}
        }
      }
    }
  `;
    const response = await this.callContentful(query, variables, options);
    const posts = response.data.postCollection.items;
    const formattedPosts: Array<BasicPostInterface> = formatPosts(posts);
    return formattedPosts;
  }


  private static async getPostsByContentType(contentType, options = defaultOptions) {
    const variables = {contentType };
    const query =( contentType==="Insights")? 
    ` query GetAllPosts
    {
      postCollection(limit: 100) 
      {
        items {
          ${POST_CORE_FIELDS}
        }
      }
    }
    `:
    ` query GetPostsByContentType($contentType: String!)
    {
      postCollection(limit: 100, where: { contentType: $contentType }  ) 
      {
        items {
          ${POST_CORE_FIELDS}
        }
      }
    }
  `;
    const response = await this.callContentful(query, variables, options);
    const posts = response.data.postCollection.items;
    const formattedPosts: Array<BasicPostInterface> = formatPosts(posts);
    return formattedPosts;
  }


  private static async getPostsByAuthor(slug, options = defaultOptions) {
    const variables = {slug };
    const query = `query GetPostsByAuthor($slug: String!)
    {
      authorCollection(limit: 20, where: { slug: $slug }) {
        items{
          ${AUTHOR_ALL_FIELDS}
      
        }
      }    
    }
  `;
    const response = await this.callContentful(query, variables, options);
    const author = response.data.authorCollection.items[0]
    return author;
  }
/**
   * Fetch a batch of blog post slugs (by given page number).
   *
   * This method queries the GraphQL API for a single batch of blog post slugs.
   *
   * The query limit of 100 is the maximum number of slugs
   * we can fetch with this query due to GraphQL complexity costs.
   *
   * For more information about GraphQL query complexity, visit:
   * https://www.contentful.com/developers/videos/learn-graphql/#graphql-fragments-and-query-complexity
   *
   * param: page (number)
   *
   */
 static async getAllPostSlugs(contentType) {
  const queryLimit = 100;
  const variables = { limit: queryLimit,  contentType };

  const query = `query GetPostSlugs($limit: Int!, $contentType: String!) {
      postCollection(limit: $limit, order: date_DESC, where: { contentType: $contentType }) {
        total
        items {
          slug
          }
        }
      }`;

  const response = await this.callContentful(query, variables);
 
  const slugs = response.data.postCollection.items
    ? response.data.postCollection.items.map((item) => item.slug)
    : [];
  return slugs;
}

static async getAllAuthorSlugs() {
  const queryLimit = 100;
  const variables = { limit: queryLimit};

  const query = `query GetAuthorSlugs($limit: Int!) {
      authorCollection(limit: $limit) {
        total
        items {
          slug
          }
        }
      }`;

  const response = await this.callContentful(query, variables);

  const slugs = response.data.authorCollection.items
    ? response.data.authorCollection.items.map((item) => item.slug)
    : [];
  return slugs;
}
  /**
   * Call the Contentful GraphQL API using fetch.
   *
   * param: query (string)
   */
 
  static async callContentful(query, variables = {}, options = defaultOptions) {
    const fetchUrl = `https://graphql.contentful.com/content/v1/spaces/${process.env.CONTENTFUL_SPACE_ID}`;

    const accessToken = options.preview
      ? process.env.NEXT_PUBLIC_CONTENTFUL_PREVIEW_ACCESS_TOKEN
      : process.env.CONTENTFUL_ACCESS_TOKEN;

    const fetchOptions = {
      method: "POST",
      headers: {
        Authorization: "Bearer " + accessToken,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ query, variables }),
    };

    try {
      const data = await fetch(fetchUrl, fetchOptions).then((response) =>
        response.json()
      );
      return data;
    } catch (error) {
      throw new Error("Could not fetch data from Contentful!");
    }
  }
}

