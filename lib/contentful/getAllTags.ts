
import callContentful, { defaultOptions } from "lib/contentful/callContentful";
  import { TAG_FIELDS } from "lib/graphql_fragments/POST_FIELDS";
  
  export default async function getAllTags(options=defaultOptions) {
    const queryLimit = 100;
    const variables = { limit: queryLimit };
    // first get all the typical posts
    const query =
    ` query GetTags($limit: Int!)
    {
      contentTagCollection(limit: $limit) 
      {
        items {
          ${TAG_FIELDS}
        }
      }
    }
  `;
    const response = await callContentful(query, variables, options);
    if ("errors" in response){
      console.error(response);
      return null;
    }
    // then get the 'wild card' posts
    const tags = response.data.contentTagCollection.items
    return tags;
  }
// export default async function getAllTags() {
//   const accessToken = process.env.CONTENTFUL_ACCESS_TOKEN; // Potentially need to add back in preview
//   const contentTypeId = "post";
//   const environmentId = "master";

//   const client = contentful.createClient({
//     space: process.env.CONTENTFUL_SPACE_ID,
//     environment: environmentId, // defaults to 'master' if not set
//     accessToken: accessToken,
//   });

//   const contentType = await client.getContentType(contentTypeId).catch(console.error);
//   try {
//     let tags = contentType.fields.find((field) => field.id == "contentTags");
//     tags = tags.items.validations[0].in;
//     return tags;
//   } catch {
//     console.error("Error parsing content tags");
//   }
// }

// export default async function getAllTags() {
//   const accessToken = process.env.CONTENTFUL_ACCESS_TOKEN; // Potentially need to add back in preview
//   const contentTypeId = "post";
//   const environmentId = "master";

//   const client = contentful.createClient({
//     space: process.env.CONTENTFUL_SPACE_ID,
//     environment: environmentId, // defaults to 'master' if not set
//     accessToken: accessToken,
//   });

//   const contentType = await client.getContentType(contentTypeId).catch(console.error);
//   try {
//     let tags = contentType.fields.find((field) => field.id == "contentTags");
//     tags = tags.items.validations[0].in;
//     return tags;
//   } catch {
//     console.error("Error parsing content tags");
//   }
// }
