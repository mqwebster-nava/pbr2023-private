
import { getPageDataFromContentful } from "lib/api";
import PageTemplate from "components/templates/PageTemplate/PageTemplate";
import { PageInterface } from "shared_interfaces/page_interface";

// https://docs.google.com/document/d/1RG_J13eS5MM4QMLvgjK4xSr7CrJWomsKtxLDHjcttTw/edit#

export default function WorkingAtNava(props:PageInterface ) {
  return (<PageTemplate {...props}/>);
}

export async function getStaticProps({ params, preview = false }) {
  const res: PageInterface = await getPageDataFromContentful(
    {slug:"/working-at-nava", 
    preview: preview,
    });
 return {
   props:res 
 };
}


