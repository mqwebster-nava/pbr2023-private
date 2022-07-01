import { PageInterface } from "shared_interfaces/page_interface";
import { getPageDataFromContentful } from "lib/api";
import PageTemplate from "components/templates/PageTemplate/PageTemplate";
import OpenRolesComponent from "components/custom_blocks/OpenRolesComponent/OpenRolesComponent";


export default function OpenRoles(props:PageInterface) {
 
  return (
    <PageTemplate {...props}>
    </PageTemplate>
  );
}


export async function getStaticProps({ params, preview = false }) {
  const res: PageInterface = 
    await getPageDataFromContentful({
      slug:"/open-roles", 
      preview: preview,
    });
  return {
    props: res,
    // Next.js will attempt to re-generate the page:
    // - When a request comes in
    // - At most once every 60 seconds
    revalidate: 60, // In seconds
  };
}