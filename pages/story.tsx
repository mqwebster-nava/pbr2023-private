
import { getPageDataFromContentful } from "lib/api";
import PageTemplate from "components/templates/PageTemplate/PageTemplate";
import { PageInterface } from "lib/data_models/page_interface";
//https://docs.google.com/document/d/1SWVZyiBQ0xPpmFcVuZFwyqtYOQlV5ujWZejTJ4d8Cs4/edit#

export default function Story(props:PageInterface ) {
  return props? (<PageTemplate {...props}/>): <div>Error</div>
  ;
}

export async function getStaticProps({ params, preview = false }) {
  const res: PageInterface = await getPageDataFromContentful({
    slug:"/story",
    preview: preview,
  });
 return {
   props:res,
   revalidate: 60, // In seconds
 };
}

