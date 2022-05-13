import callContentful, { defaultOptions } from "lib/contentful/callContentful";
import { POST_CORE_FIELDS } from "lib/graphql_fragments/POST_FIELDS";
import { BasicPostInterface } from "shared_interfaces/post_interface";
import { formatPosts } from "lib/post_utils";



export default async function getPostsByContentType(contentType, options=defaultOptions) {
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
    const response = await callContentful(query, variables, options);
    if ("errors" in response){
      console.error(response);
      return null;
    }
    const posts = response.data.postCollection.items;
    const formattedPosts: Array<BasicPostInterface> = formatPosts(posts);
    return formattedPosts;
  }