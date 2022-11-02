import { PageQueryInterface } from "lib/api";
import REPORT_FIELDS from "lib/graphql_fragments/REPORT_FIELDS";
import callContentful from "./callContentful";
/*
Replace with page data
*/



export default async function getReportDataBySlug({slug, preview =false}:PageQueryInterface) {
    const variables = { slug, preview  };
    const query = `query GetReportBySlug($slug: String!) {
      pageContentCollection(limit: 1, where: {slug: $slug}, preview:  ${preview ? 'true' : 'false'}) {
        total
        items {
          ${REPORT_FIELDS}
        }
      }
    }`;
    const response = await callContentful(query, variables, {preview});
    // console error this
    if ("errors" in response){
      console.error(response);
      return null;
    }
    if(!response.data.pageContentCollection.items) return null;
    const page = response.data.pageContentCollection.items.pop();
    return  page;
  }

