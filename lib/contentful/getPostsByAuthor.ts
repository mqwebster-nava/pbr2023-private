import callContentful, { defaultOptions } from "lib/contentful/callContentful";
import { AUTHOR_ALL_FIELDS } from "lib/graphql_fragments/POST_FIELDS";

/**
 * getPostsByAuthor
 * 
 * Queries contentful to get posts of a specific author, at build time, page is created for each author with their posts
 * the posts for each are retrieved through this function. (ex /authors/karen-turner )
 * 
 * called by the api.ts file
 */


export default async function getPostsByAuthor(slug, options=defaultOptions) {
    const variables = {slug };
    const query = `query GetPostsByAuthor($slug: String!)
    {
      authorCollection(limit: 20, where: { slug: $slug }) {
        items{
          __typename
          ${AUTHOR_ALL_FIELDS}
      
        }
      }    
    }
  `;
    const response = await callContentful(query, variables, options);
    if ("errors" in response){
      console.error(response);
      return null;
    }
    const author = response.data.authorCollection.items[0]
    return author;
  }