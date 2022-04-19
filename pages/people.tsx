import ContentfulApi from "lib/contentful";
import PageTemplate from "components/templates/PageTemplate/PageTemplate";
import { PageInterface } from "models/page_models";
//https://docs.google.com/document/d/140sOP1bOThae4tYF-HXv2gh9v6PCZV8RQJrwo83yGZE/edit#

export default function People(props: PageInterface) {
  return props ? ( <PageTemplate {...props} />) : ( <div>Error</div>);
}

export async function getStaticProps({ params, preview = false }) {
  const res: PageInterface = await ContentfulApi.getPageBySlug({
    slug:"/people", 
    preview: preview,
  });
  return {
    props: res,
  };
}
