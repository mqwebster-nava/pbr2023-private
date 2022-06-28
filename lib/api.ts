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

import { PageInterface } from "shared_interfaces/page_interface";
import { BasicPostInterface } from "shared_interfaces/post_interface";
import { slugify } from "utils/utils";
import getAllTags from "./contentful/getAllTags";
import getPageDataBySlug from "./contentful/getPageDataBySlug";
import getPostBySlug from "./contentful/getPostBySlug";
import getPostsByAuthor from "./contentful/getPostsByAuthor";
import getPostsByTag from "./contentful/getPostsByTag";
import {
  formatAuthorPage,
  formatPage,
  formatPostPage,
  formatTagsPage,
} from "./formatPage";

// When preview is true, content that are in "draft" state will be renderered. Otherwise it is hidden
// Preview is used to render previews of the page within the contentful interface.
const defaultOptions = {
  preview: false,
};

type PageVariant = "default" | "post" | "tags" | "author";

export interface PageQueryInterface {
  slug: string;
  variant?: PageVariant;
  preview?: boolean;
}

export async function getPageDataFromContentful({
  slug,
  variant = "default",
  preview = false,
}: PageQueryInterface) {
  // If it is a default page, then there should be a corresponding Page Content model in
  // Contentful with page info
  if (variant == "default") {
    const page = await getPageDataBySlug({ slug, preview });
    // Checks for errors and formats
    let formattedPage: PageInterface = formatPage(page);
    // check to see if employee list is one of the blocks and add data there
   await Promise.all(
        formattedPage.contentBlocks.map(async (block, i) => {
          if (block["__typename"] == "CustomBlock" && block.type == "Employee List") {
              const employeeData = await getEmployeeListFromAirtable();
              formattedPage.contentBlocks[i] = { ...block, employeeData };
          }
        })
      );
    return formattedPage;
    
  }

  // If it is a post, we create the page interface data from the post content
  if (variant == "post") {
    // Get the post data
    try {
      const res = await getPostBySlug(slug);
      const { post, morePosts } = res;
      const formattedPage: PageInterface = formatPostPage(post, morePosts);
      return formattedPage;
    } catch (e) {
      return null;
    }
  }

  if (variant == "author") {
    const author = await getPostsByAuthor(slug);
    const formattedPage: PageInterface = formatAuthorPage(slug, author);
    return formattedPage;
  }

  if (variant == "tags") {
    const tags = await getAllTags();
    const tagName = tags.find((tag) => slugify(tag) === slug);
    const posts: Array<BasicPostInterface> = await getPostsByTag(tagName);
    const formattedPage: PageInterface = formatTagsPage(slug, tagName, posts);
    return formattedPage;
  }
}

async function getEmployeeListFromAirtable() {
  const apiKey = "keyhwtCt910pVmtUG";
  const tableId = "tblpYB59rae1t15C5";
  const data = await fetch(
    `https://api.airtable.com/v0/appwGmpLTG1da8Ayy/${tableId}?api_key=${apiKey}`
  )
    .then((res) => res.json())
    .catch((error) => {
      console.error(error);
    });
  let records = data.records;
  let maxPages = 4,
    currentPage = 1,
    offset = data.offset;
  while (offset && currentPage < maxPages) {
    const data2 = await fetch(
      `https://api.airtable.com/v0/appwGmpLTG1da8Ayy/${tableId}?api_key=${apiKey}&offset=${offset}`
    )
      .then((res) => res.json())
      .catch((error) => {
        console.error(error);
      });
    records = records.concat(data2.records);
    if ("offset" in data2) offset = data2.offset;
    else offset = null;
    currentPage += 1;
  }
  return records;
}
