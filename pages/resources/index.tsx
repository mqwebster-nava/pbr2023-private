import { getPageDataFromContentful } from "lib/api";
import PageTemplate from "components/templates/PageTemplate/PageTemplate";
import { PageInterface } from "lib/data_models/page_interface";
import FloatingButtonBlock from "components/blocks/FloatingButtonBlock/FloatingButtonBlock";


export default function Resources(props:PageInterface) {
 
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
    {slug: "/resources", 
    preview: preview,
  });
  return {
    props:  page,
    // Next.js will attempt to re-generate the page:
    // - When a request comes in
    // - At most once every 60 seconds
    revalidate: 60, // In seconds
     // will be passed to the page component as props
  };
}
