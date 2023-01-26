import callContentful, { defaultOptions } from "lib/contentful/callContentful";
import { formatPosts } from "lib/formatters/formatPosts";
import { POST_CORE_FIELDS, TAGS_POST_FIELDS } from "lib/graphql_fragments/POST_FIELDS";
import { BasicPostInterface } from "lib/data_models/post_interface";
import { sortPostsByDate } from "lib/formatters/utils";
// TODO Would need to change - be similar to author

/**
 * getPostsByTag
 * 
 * Queries contentful to get the most recent 20 posts that contain a specific tag
 * This is called by "Tag" pages, which have a list of all articles with a given tag
 * 
 * called by the api.ts file
 */



 export default async function getPostsByTag(tag, options=defaultOptions) {
  const variables = {tag };
  const query = `query GetPostsByTag($tag: String!)
  {
    contentTagCollection(limit: 20, where: { name: $tag }) {
      items{
        __typename
        ${TAGS_POST_FIELDS}
    
      }
    }    
  }
`;
  const response = await callContentful(query, variables, options);
  if ("errors" in response){
    console.error(response);
    return null;
  }
  const tagData = response.data.contentTagCollection.items[0]
  return sortPostsByDate(tagData.linkedFrom.postCollection.items);
}

// export default async function getPostsByTag(tag, options=defaultOptions) {
//     const variables = { tag, };
//     const query = `query GetPostsByTag($tag: String!)
//     {
//       postCollection(limit: 20,  where: { contentTags_contains_all:[$tag] } ) 
//       {
//         items {
//           ${POST_CORE_FIELDS}
//         }
//       }
//     }
//   `;
//     const response = await callContentful(query, variables, options);
//     if ("errors" in response){
//       console.error(response);
//       return null;
//     }
//     const posts = response.data.postCollection.items;
//     // Format post can be a step where we check for errors
//     const formattedPosts: Array<BasicPostInterface> = formatPosts(posts);
//     return formattedPosts;
//   }