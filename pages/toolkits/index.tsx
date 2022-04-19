import ContentfulApi from "lib/contentful";
import { PageInterface } from "models/page_models";
import PageTemplate from "components/templates/PageTemplate/PageTemplate";


export default function Toolkits(props: PageInterface) {
    return props? ( <PageTemplate {...props}> </PageTemplate>): <div>Error</div>

}


export async function getStaticProps({ params, preview = false }) {
    //const posts = await ContentfulApi.getPostsByContentType("Toolkit");
    const page: PageInterface = await ContentfulApi.getPageBySlug(
      {slug:"/toolkits",
      preview: preview,
    });
    return {
      props: page
    }
  }
