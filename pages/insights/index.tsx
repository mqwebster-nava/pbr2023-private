import { getPageDataFromContentful } from "lib/api";
import PageTemplate from "components/templates/PageTemplate/PageTemplate";
import HighlightedCard from "components/atom/ContentCard/HighlightedCard";
import { PageInterface } from "shared_interfaces/page_interface";

// export interface Props {
//   posts: Array<BasicPostInterface>;
// }

export default function Insights(props:PageInterface) {
 
  return props ? (
    <PageTemplate {...props}>
    
    </PageTemplate>
  ) : (
    <div>Error</div>
  );
}

export async function getStaticProps({ params, preview = false }) {
  // const posts: Array<BasicPostInterface> =
  //   await ContentfulApi.getPostsByContentType("Insights");

  const page: PageInterface = await getPageDataFromContentful(
    {slug: "/insights", 
    preview: preview,
  });
  return {
    props:  page,
     // will be passed to the page component as props
  };
}
