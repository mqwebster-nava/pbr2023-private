import callContentful, { defaultOptions } from "lib/contentful/callContentful";
import { POST_CORE_FIELDS } from "lib/graphql_fragments/POST_FIELDS";
import { BasicPostInterface } from "lib/data_models/post_interface";

/**
 * getPostsByContentType
 * 
 * Queries contentful to get posts of a specific content type, like case studies or toolkits, 
 * this is used to get posts to displace on content type specific pages like /case-studies  
 * 
 * called by the api.ts file
 */

export default async function getPostsByContentType(contentType, options=defaultOptions) {
    const variables = {contentType, keepHidden:false };
    const query =
    ` query GetPostsByContentType($contentType: String!, $keepHidden: Boolean!)
    {
      postCollection(limit: 100, where: { contentType: $contentType, keepHidden: $keepHidden }  ) 
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
    return posts;
  }