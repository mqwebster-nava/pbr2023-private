/**
 * This class constructs GraphQL queries for blog posts, page content and other data
 * and calls out to the Contentful GraphQL API.
 *
 * Contentful GraphQL API docs:
 * https://www.contentful.com/developers/docs/references/graphql/
 *
 * Explore the GraphQL API in depth in the GraphiQL Playground:
 * https://graphql.contentful.com/content/v1/spaces/{SPACE_ID}/explore?access_token={ACCESS_TOKEN}
 *
 */

// When preview is true, content that are in "draft" state will be renderered. Otherwise it is hidden
// Preview is used to render previews of the page within the contentful interface.
export const defaultOptions = {
  preview: false,
};

export default async function callContentful(
  query,
  variables = {},
  options=defaultOptions
) {
  const fetchUrl = `https://graphql.contentful.com/content/v1/spaces/${process.env.CONTENTFUL_SPACE_ID}`;

  const accessToken = options.preview
    ? process.env.NEXT_PUBLIC_CONTENTFUL_PREVIEW_ACCESS_TOKEN
    : process.env.CONTENTFUL_ACCESS_TOKEN;

  const fetchOptions = {
    method: "POST",
    headers: {
      Authorization: "Bearer " + accessToken,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ query, variables }),
  };

  try {
    const data = await fetch(fetchUrl, fetchOptions).then((response) =>
      response.json()
    );
    return data;
  } catch (error) {
    throw new Error("Could not fetch data from Contentful!");
  }
}
