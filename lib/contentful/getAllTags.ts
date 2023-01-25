//TODO WOULD NEED TO CHANGE

const contentful = require("contentful");

export default async function getAllTags() {
  const accessToken = process.env.CONTENTFUL_ACCESS_TOKEN; // Potentially need to add back in preview
  const contentTypeId = "post";
  const environmentId = "master";

  const client = contentful.createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    environment: environmentId, // defaults to 'master' if not set
    accessToken: accessToken,
  });

  const contentType = await client.getContentType(contentTypeId).catch(console.error);
  try {
    let tags = contentType.fields.find((field) => field.id == "contentTags");
    tags = tags.items.validations[0].in;
    return tags;
  } catch {
    console.error("Error parsing content tags");
  }
}

