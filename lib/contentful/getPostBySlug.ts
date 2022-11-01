import callContentful, { defaultOptions } from "lib/contentful/callContentful";
import { POST_ALL_FIELDS } from "lib/graphql_fragments/POST_FIELDS";
import getMorePosts from "./getMorePosts";

/**
 * getPostBySlug
 * 
 * Recieves all the specific data for a single post page so it can be rendered. 
 * This includes all types of posts such as case studies and toolkits
 * 
 * In addition to getting the post data, it calls getMorePosts, to get recommended posts related to it's tags
 * 
 * called by the api.ts file
 */



export default async function getPostBySlug(slug, options=defaultOptions) {
    const variables = { slug, preview: options.preview };
    const preview = options.preview;
    const query = `query GetPostBySlug($slug: String!) {
      postCollection(limit: 1, where: {slug: $slug}, preview:  ${preview ? 'true' : 'false'}) {
        total
        items {
          ${POST_ALL_FIELDS}
        }
      }
    }`;
    // TODO get CTA & add it
    const response = await callContentful(query, variables, options);
    if ("errors" in response){
      console.error(response);
      return null;
    }
    if(!response.data.postCollection.items) return null;
    const post =  response.data.postCollection.items.pop();
    return post;
  }

     // const formattedPost = formatFullPost(post);
    // const morePosts = await getMorePosts(formattedPost, options);
    // return {
    //   post:formattedPost,
    //   morePosts
    // };