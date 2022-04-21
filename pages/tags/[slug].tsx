import { getPageDataFromContentful } from "lib/api";
import {allTagsSlugIdPair, getContentUrl} from "utils/utils"
import { PageInterface } from "shared_interfaces/page_interface";
import PageTemplate from "components/templates/PageTemplate/PageTemplate";


// List of posts filtered by a specific tag
  export default function FilteredByTagPage(props:PageInterface) {
    return ( <PageTemplate {...props}></PageTemplate>);
  }

  // Gets all of the tags that are used in the content and creates a page for each one
export async function getStaticPaths({ params, preview = null }) {
    const paths = Object.keys(allTagsSlugIdPair.getMap()).map((slug)=>{ return {params: {  slug } }});
    return {
      paths,
      fallback: false
    }
}


// Calls the contentful API to get posts for each tag.
export async function getStaticProps({ params, preview = false }) {
  const page : PageInterface = await getPageDataFromContentful({slug:params.slug, variant:"tags", preview });
  return {
    props: page,
  };
}
