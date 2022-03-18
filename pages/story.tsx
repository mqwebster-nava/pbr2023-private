
import ContentfulApi from "lib/contentful";
import PageTemplate from "components/templates/PageTemplate/PageTemplate";
import { PageInterface } from "lib/page_data_models";
import { PageProps } from "utils/pageUtils";
//https://docs.google.com/document/d/1SWVZyiBQ0xPpmFcVuZFwyqtYOQlV5ujWZejTJ4d8Cs4/edit#


export default function Story({page, preview}:PageProps ) {
  return page? (<PageTemplate page={page} preview={preview}/>): <div>Error</div>
  ;
}

export async function getStaticProps({ params, preview = false }) {
  const res: PageInterface = await ContentfulApi.getPageBySlug("/story", {
    preview: preview,
  });
 return {
   props:
   { page:res }
 };
}

