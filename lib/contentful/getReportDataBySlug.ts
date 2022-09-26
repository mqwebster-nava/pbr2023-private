import { PageQueryInterface } from "lib/api";
import PAGE_FIELDS from "lib/graphql_fragments/PAGE_FIELDS";
import REPORT_FIELDS from "lib/graphql_fragments/REPORT_FIELDS";
import callContentful from "./callContentful";
export default async function getReportDataBySlug({slug, preview =false}:PageQueryInterface) {
    const variables = { slug, preview  };
    const query = `query GetReportBySlug($slug: String!) {
      reportPageContentCollection(limit: 1, where: {slug: $slug}, preview:  ${preview ? 'true' : 'false'}) {
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
    if(!response.data.reportPageContentCollection.items) return null;
    const page = response.data.reportPageContentCollection.items.pop();
    return  page;
  }

