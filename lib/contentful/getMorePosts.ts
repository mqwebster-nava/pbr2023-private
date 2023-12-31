import callContentful, { defaultOptions } from "lib/contentful/callContentful";
import { BasicPostInterface, FullPostInterface } from "lib/data_models/post_interface";
import { formatPosts } from "lib/formatters/formatPosts";
import { POST_CORE_FIELDS } from "lib/graphql_fragments/POST_FIELDS";

/*
 This gets 3 posts that have similar tags to the post the user is currently reading 
 */
export default async function getMorePosts(
  post: FullPostInterface,
  options = defaultOptions
) {
  if(!post) return null;
  const variables = { slug: post.slug, preview: options.preview };
  const query = `query GetMorePosts($slug: String!, $preview: Boolean!) {
      postCollection( where: { slug_not_in: [ $slug ] }, preview: $preview) {
        total
        items {
          ${POST_CORE_FIELDS}
        }
      }
    }`;

  const response = await callContentful(query, variables, options);

  if ("errors" in response) {
    console.error(response);
    return null;
  }
  let posts = response.data.postCollection.items
    ? response.data.postCollection.items
    : [];
 
 // const formattedPosts: Array<BasicPostInterface> = formatPosts(posts);
  // Filter by tags -- if no matches then get 3 random post
  const filteredPosts = post.contentTags //: Array<BasicPostInterface>
    ? formatPosts(posts)
        .filter(
          (_post) =>
            _post.contentTags &&
            _post.contentTags.some((element) =>
              post.contentTags.includes(element)
            )
        )
        .sort(() => Math.random() - 0.5)
        .slice(0, 3)
    : posts.sort(() => Math.random() - 0.5).slice(0, 3);
  return filteredPosts;
}
