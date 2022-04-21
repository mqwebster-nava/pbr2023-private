import { PageQueryInterface } from "lib/api";
import PAGE_FIELDS from "lib/graphql_fragments/PAGE_FIELDS";
import { PageInterface } from "shared_interfaces/page_interface";
import { formatPage } from "lib/formatPage";
import callContentful from "./callContentful";


export default async function getPageDataBySlug({slug, preview =false}:PageQueryInterface) {
    const variables = { slug, preview  };
    const query = `query GetPageBySlug($slug: String!, $preview: Boolean!) {
      pageContentCollection(limit: 1, where: {slug: $slug}, preview: $preview) {
        total
        items {
          ${PAGE_FIELDS}
        }
      }
    }`;
    const response = await callContentful(query, variables, {preview});
 
    if(!response.data.pageContentCollection.items) return null;
    const page = response.data.pageContentCollection.items.pop();
    return  page;
  }

