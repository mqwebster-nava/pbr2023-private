import callContentful from "lib/contentful/callContentful";


export default async function getAllPostSlugs(contentType) {
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
  
    const response = await callContentful(query, variables);
    if ("errors" in response){
      console.error(response);
      return null;
    }
    const slugs = response.data.postCollection.items
      ? response.data.postCollection.items.map((item) => item.slug)
      : [];
    return slugs;
  }