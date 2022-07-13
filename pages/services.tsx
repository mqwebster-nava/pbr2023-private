

import { getPageDataFromContentful } from "lib/api";
import PageTemplate from "components/templates/PageTemplate/PageTemplate";
import { PageInterface } from "shared_interfaces/page_interface";
import CapabilitiesSection from "components/blocks/CapabilitiesSection/CapabilitiesSection";
// https://docs.google.com/document/d/1RG_J13eS5MM4QMLvgjK4xSr7CrJWomsKtxLDHjcttTw/edit#

export default function Services(props:PageInterface ) {
  return (
  <PageTemplate {...props}>
  </PageTemplate>);
}

export async function getStaticProps({ params, preview = false }) {
  const res: PageInterface = await getPageDataFromContentful({
    slug:"/services", 
    preview: preview,
  });
  return {
    props: res,
    revalidate: 60, // In seconds
  };
}