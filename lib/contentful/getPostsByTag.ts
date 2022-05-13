import callContentful, { defaultOptions } from "lib/contentful/callContentful";
import { POST_CORE_FIELDS } from "lib/graphql_fragments/POST_FIELDS";
import { BasicPostInterface } from "shared_interfaces/post_interface";
import { formatPosts } from "lib/post_utils";

export default async function getPostsByTag(tag, options=defaultOptions) {
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
    const response = await callContentful(query, variables, options);
    if ("errors" in response){
      console.error(response);
      return null;
    }
    const posts = response.data.postCollection.items;
    // Format post can be a step where we check for errors
    const formattedPosts: Array<BasicPostInterface> = formatPosts(posts);
    return formattedPosts;
  }