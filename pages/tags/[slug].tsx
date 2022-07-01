import { getPageDataFromContentful } from "lib/api";
import { PageInterface } from "shared_interfaces/page_interface";
import PageTemplate from "components/templates/PageTemplate/PageTemplate";
import getAllTags from "lib/contentful/getAllTags";
import { slugify } from "utils/utils";
// Here I want to get all content types


// List of posts filtered by a specific tag
  export default function FilteredByTagPage(props:PageInterface) {
    return ( <PageTemplate {...props}></PageTemplate>);
  }

  // Gets all of the tags that are used in the content and creates a page for each one
export async function getStaticPaths({ params, preview = null }) {
  const tags = await getAllTags();
  const paths = tags.map((tag)=>{ return {params: { slug:slugify(tag), tag } }});
    return {
      paths,
      fallback: 'blocking'
    }
}



// Calls the contentful API to get posts for each tag.
export async function getStaticProps({ params, preview = false }) {
  const page : PageInterface = await getPageDataFromContentful({slug:params.slug, variant:"tags", preview });
  return {
    props: page,
    // Next.js will attempt to re-generate the page:
    // - When a request comes in
    // - At most once every 60 seconds
    revalidate: 60, // In seconds
  };
}
