import { getPageDataFromContentful } from "lib/api";
import PageTemplate from "components/templates/PageTemplate/PageTemplate";
import { PageInterface } from "lib/data_models/page_interface";

export default function ContractVehicles(props:PageInterface ) {
  return (
  <PageTemplate {...props}>
  </PageTemplate>);
}

export async function getStaticProps({ params, preview = false }) {
  const res: PageInterface = await getPageDataFromContentful({
    slug:"/nava-labs", 
    preview: preview,
  });
  return {
    props: res,
    revalidate: 60, // In seconds
  };
}