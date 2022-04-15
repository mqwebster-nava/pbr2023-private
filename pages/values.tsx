
import ContentfulApi from "lib/contentful";
import PageTemplate from "components/templates/PageTemplate/PageTemplate";
import { PageInterface } from "lib/page_data_models";
import { PageProps } from "models/page_models";
// https://docs.google.com/document/d/1RG_J13eS5MM4QMLvgjK4xSr7CrJWomsKtxLDHjcttTw/edit#



export default function Values({page, preview}:PageProps ) {
  return (<PageTemplate page={page} preview={preview}/>);
}

export async function getStaticProps({ params, preview = false }) {
  const res: PageInterface = await ContentfulApi.getPageBySlug("/values", {
    preview: preview,
  });
 return {
   props:
   { page:res }
 };
}
