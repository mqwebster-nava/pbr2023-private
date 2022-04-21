import callContentful from "lib/contentful/callContentful";



export default async function getAllAuthorSlugs() {
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
  
    const response = await callContentful(query, variables);
  
    const slugs = response.data.authorCollection.items
      ? response.data.authorCollection.items.map((item) => item.slug)
      : [];
    return slugs;
  }