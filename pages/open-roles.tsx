import { PageInterface } from "shared_interfaces/page_interface";
import { getPageDataFromContentful } from "lib/api";
import PageTemplate from "components/templates/PageTemplate/PageTemplate";
import OpenRolesComponent from "components/custom_blocks/OpenRolesComponent/OpenRolesComponent";


export default function OpenRoles(props:PageInterface) {
 
  return (
    <PageTemplate {...props}>
    <OpenRolesComponent/>
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
  };
}