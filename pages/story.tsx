
import ContentfulApi from "lib/contentful";
import PageTemplate from "components/templates/PageTemplate/PageTemplate";
import { PageInterface } from "models/page_models";
//https://docs.google.com/document/d/1SWVZyiBQ0xPpmFcVuZFwyqtYOQlV5ujWZejTJ4d8Cs4/edit#

export default function Story(props:PageInterface ) {
  return props? (<PageTemplate {...props}/>): <div>Error</div>
  ;
}

export async function getStaticProps({ params, preview = false }) {
  const res: PageInterface = await ContentfulApi.getPageBySlug({
    slug:"/story",
    preview: preview,
  });
 return {
   props:res
 };
}

