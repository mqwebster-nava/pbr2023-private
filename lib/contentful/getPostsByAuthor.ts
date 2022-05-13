import callContentful, { defaultOptions } from "lib/contentful/callContentful";
import { AUTHOR_ALL_FIELDS } from "lib/graphql_fragments/POST_FIELDS";


export default async function getPostsByAuthor(slug, options=defaultOptions) {
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
    const response = await callContentful(query, variables, options);
    if ("errors" in response){
      console.error(response);
      return null;
    }
    const author = response.data.authorCollection.items[0]
    return author;
  }