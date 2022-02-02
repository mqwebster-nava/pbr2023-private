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

/*
For building post pages
  getPostSlugs() - used to get a list of slugs to build out pages / might need to be specific to content type
  getPostBySlug() 
 

For building "library" pages(pages with lists of related content)
    getAllAuthors() - gets authors from author collection
    getPostSummariesByAuthor(authorId) - gets a filtered list of posts by author
 



    getAllTags() 
    getPostSlugsByTags() - used to get a list of slugs to build out pages


 */

// When I'd need the posts -- basic - all posts of kind, full post data, related posts

const defaultOptions = {
  preview: false,
};

// const author = `
// `

export default class ContentfulApi {
  static async getPostBySlug(slug, options = defaultOptions) {
    const variables = { slug, preview: options.preview };
    const query = `query GetPostBySlug($slug: String!, $preview: Boolean!) {
      postCollection(limit: 1, where: {slug: $slug}, preview: $preview) {
        total
        items {
          sys {
            id
          }
          date
          title
          contentType
          slug
          authorsCollection {
            items {
              name
              role
              bio
            }
          } 
          
          body {
            json
            links {
              assets {
                block {
                  sys {
                    id
                  }
                  url
                  title
                  width
                  height
                  description
                }
              }
            }
          }
        }
      }
    }`;

    const response = await this.callContentful(query, variables, options);
    const post = response.data.postCollection.items
      ? response.data.postCollection.items
      : [];
    return post.pop();
  }

  static async getPostsByTag(tag, options = defaultOptions) {
    const variables = { tag, };

    const query = `query GetPostsByTag($tag: String!)
    {
      postCollection(limit: 20,  where: { contentTags_contains_all:[$tag] } ) 
      {
        items {
          sys {
            id
          }
          date
          title
          slug
          contentType
          shortSummary
          contentTags
          promoImage {
            sys {
              id
            }
            url
          }
        }
      }
    }
  `;
    const response = await this.callContentful(query, variables, options);
    const posts = response.data.postCollection.items
    return posts;
  }


  static async getPostsByContentType(contentType, options = defaultOptions) {
    const variables = {contentType };
    const query = `query GetPostsByTag($contentType: String!)
    {
      postCollection(limit: 20,  where: { contentType: $contentType } ) 
      {
        items {
          sys {
            id
          }
          date
          title
          slug
          contentType
          shortSummary
          contentTags
          promoImage {
            sys {
              id
            }
            url
          }
        }
      }
    }
  `;
    const response = await this.callContentful(query, variables, options);
    const posts = response.data.postCollection.items
    return posts;
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
  console.log(response)
 
  const slugs = response.data.postCollection.items
    ? response.data.postCollection.items.map((item) => item.slug)
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
