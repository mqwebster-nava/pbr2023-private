import { getPageDataFromContentful } from "lib/api";
import { PageInterface } from "shared_interfaces/page_interface";
import PageTemplate from "components/templates/PageTemplate/PageTemplate";


export default function Toolkits(props: PageInterface) {
    return props? ( <PageTemplate {...props}> </PageTemplate>): <div>Error</div>

}


export async function getStaticProps({ params, preview = false }) {
    //const posts = await ContentfulApi.getPostsByContentType("Toolkit");
    const page: PageInterface = await getPageDataFromContentful(
      {slug:"/toolkits",
      preview: preview,
    });
    return {
      props: page
    }
  }
