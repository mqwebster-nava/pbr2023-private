import callContentful, { defaultOptions } from "lib/contentful/callContentful";
import { POST_ALL_FIELDS } from "lib/graphql_fragments/POST_FIELDS";
import { formatFullPost } from "lib/post_utils";
import getMorePosts from "./getMorePosts";


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
    const formattedPost = formatFullPost(post);
    const morePosts = await getMorePosts(formattedPost, options);
    return {
      post:formattedPost,
      morePosts
    };
  }