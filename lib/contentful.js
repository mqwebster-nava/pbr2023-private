
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

const author = ` 
`

export default class ContentfulApi {

  /**
   * Fetch a single blog post by slug.
   *
   * This method is used on pages/blog/[slug] to fetch the data for
   * individual blog posts at build time, which are prerendered as
   * static HTML.
   *
   * This query fetches linked assets (i.e. images) and entries
   * (i.e. video embed and code block entries) that are embedded
   * in the Rich Text field. This is rendered to the page using
   * @components/RichTextPageContent.
   *
   * param: slug (string)
   *
   */
  
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
              image {
                sys {
                  id
                }
                url
              }
            }
          } 
          body {
            json
            links {
              entries {
                inline {
                }
                block {
                  sys {
                    id
                  }
                }
              }
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

  static async getPostsByTag(tag){

    const query = `query GetPostsByTag($tag: String!, $preview: Boolean!) {
      {postCollection(limit: 20, 
          where: {contentTags_contains_all:[$tag]}) {
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
              sys {s
                id
              }
              url
            }
        }
    }
  }`

  }

  static async getPostSummaryBySlug(slug, options = defaultOptions) {
    const variables = { slug, preview: options.preview };
    console.log(slug);
    const collection = 'post'
    const query = `query GetPostBySlug($slug: String!, $preview: Boolean!) {
      ${collection}Collection(limit: 3, where: {slug: $slug}, preview: $preview) {
        items {
          sys {
            id
          }
          date
          title
          slug
          contentType
          shortSummary
          promoimage {
            sys {s
              id
            }
            url
          }
      }
    }`;

    const response = await this.callContentful(query, variables, options);
    console.log(response.data)
    const post = response.data.postCollection.items
      ? response.data.postCollection.items
      : [];
    return post.pop();
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
        response.json(),
      );
      return data;
    } catch (error) {
      throw new Error("Could not fetch data from Contentful!");
    }
  }
}

// getPostsByContentType(contentType) - used for cards for filter pages - either the content-type list or general (so we can filter by author, client or topic)  
// getPostsByAuthor(author) - used for cards for filter pages - either the content-type list or general (so we can filter by author, client or topic)  
// getPostsByTag(contentType) - used for cards for filter pages - either the content-type list or general (so we can filter by author, client or topic)  
// getPostsByClient(contentType) - used for cards for filter pages - either the content-type list or general (so we can filter by author, client or topic)  
