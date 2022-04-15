
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

import { PageInterface, PAGE_FIELDS } from "./page_data_models";
import { 
  AUTHOR_ALL_FIELDS,
  POST_ALL_FIELDS, 
  POST_CORE_FIELDS,
  BasicPostInterface,
  FullPostInterface,
  AuthorPostInterface,
  ContentfulImageAsset

} from "./post_data_models";


/*
- Database Query

-  Data Model Interfaces

- Component Interfaces 
    - PageInterface
          - Page Interface Data
          - Preview
          - List of Post 

*/





// When preview is true, content that are in "draft" state will be renderered. Otherwise it is hidden
// Preview is used to render previews of the page within the contentful interface.
const defaultOptions = {
  preview: false,
};




export default class ContentfulApi {

  static async getPageBySlug(slug, options = defaultOptions) {
    const variables = { slug, preview: options.preview };
    const query = `query GetPageBySlug($slug: String!, $preview: Boolean!) {
      pageContentCollection(limit: 1, where: {slug: $slug}, preview: $preview) {
        total
        items {
          ${PAGE_FIELDS}
        }
      }
    }`;

    const response = await this.callContentful(query, variables, options);
 
    if(!response.data.pageContentCollection.items) return null;
    const page = response.data.pageContentCollection.items.pop();
   
    const formattedPage: PageInterface = {
      id: page.sys.id,
      slug: page.slug,
      title: page.title,
      pageHeader: page.pageHeader,
      contentBlocks: page.contentCollection.items,
      description: page.description
    }
    return  formattedPage;
  }

  
  static async getPostBySlug(slug, options = defaultOptions) {
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
    const formattedPost: FullPostInterface = {
      id: post.sys.id,
      slug: post.slug,
      title: post.title,
      contentTags:post.contentTags,
      clientName: post.clientName,
      longSummary: post.longSummary,
      hideSideNav:post.hideSideNav,
      authors: post.authorsCollection?.items?.map((author)=>{
        const formattedAuthor: AuthorPostInterface ={
          name: author.name,
          slug: author.slug,
          bio: author.bio,
          role: author.role
        }
        return formattedAuthor;
      }),
      body: post.body,
      date: post.date,
      contentType: post.contentType,
      shortSummary: post.shortSummary,
      promoImage: formatImageAsset(post.promoImage)
    }
   
    const morePosts = await this.getMorePosts(formattedPost, options);
    return {
      post:formattedPost,
      morePosts
    };
  }

/*
This gets 3 posts that have similar tags to the post the user is currently reading 
*/
  static async getMorePosts( post: FullPostInterface, options = defaultOptions) {
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


  static async getPostsByTag(tag, options = defaultOptions) {
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


  static async getPostsByContentType(contentType, options = defaultOptions) {
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

  static async getPostsByAuthor(slug, options = defaultOptions) {
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

