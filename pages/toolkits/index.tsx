import { getPageDataFromContentful } from "lib/api";
import { PageInterface } from "lib/data_models/page_interface";
import PageTemplate from "components/templates/PageTemplate/PageTemplate";


export default function Toolkits(props: PageInterface) {
    return props? ( <PageTemplate {...props}> </PageTemplate>): <div>Error</div>

}


export async function getStaticProps({ params, preview = false }) {
    const page: PageInterface = await getPageDataFromContentful(
      {slug:"/toolkits",
      preview: preview,
    });
    return {
      props: page,
      // Next.js will attempt to re-generate the page:
      // - When a request comes in
      // - At most once every 60 seconds
      revalidate: 60, // In seconds
    }
  }
