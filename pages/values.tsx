
import ContentfulApi from "lib/contentful";
import PageTemplate from "components/templates/PageTemplate/PageTemplate";
import { PageInterface } from "models/page_models";

// https://docs.google.com/document/d/1RG_J13eS5MM4QMLvgjK4xSr7CrJWomsKtxLDHjcttTw/edit#



export default function Values(props:PageInterface ) {
  return (<PageTemplate {...props}/>);
}

export async function getStaticProps({ params, preview = false }) {
  const res: PageInterface = await ContentfulApi.getPageBySlug({
   slug: "/values",
    preview: preview,
  });
 return {
   props:res
 };
}
