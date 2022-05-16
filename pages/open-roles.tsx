import axios from "axios";
import { useEffect, useState } from "react";

//https://www.digitalocean.com/community/tutorials/react-axios-react
import AnchorLink from "components/atom/AnchorLink/AnchorLink";
import { LinkText } from "components/atom/LinkText/LinkText";
import { PageInterface } from "shared_interfaces/page_interface";
import { getPageDataFromContentful } from "lib/api";
import PageTemplate from "components/templates/PageTemplate/PageTemplate";
import OpenRolesComponent from "components/custom_blocks/OpenRolesComponent/OpenRolesComponent";
/*
In the open positions page, we are getting Nava's open positions from Lever's API,
since all the roles are updated there.

We use axios to call the api at page load and display them in groupings.

*/


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
      slug:"/", 
      preview: preview,
    });
  return {
    props: res,
  };
}