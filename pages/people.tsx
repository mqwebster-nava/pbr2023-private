import ContentfulApi from "lib/contentful";
import {
    SectionHeader,
    PlaceholderPageHeader,
    Newsletter,
  } from "components/blocks";
  import { ContentCard } from "components/atom/index";
  import React from "react";
  // https://docs.google.com/document/d/1RG_J13eS5MM4QMLvgjK4xSr7CrJWomsKtxLDHjcttTw/edit#
  
  
  export default function People() {
    const colorTheme = "purple";
  
    return (
      <div>
        <PlaceholderPageHeader
          title={"Our People"}
          subtitle={"Proven leadership, proud to be among the best at what we do "}
        />
        <hr />
        <SectionHeader
          title={"Our values guide our work"}
        >
          Every day we make countless decisions that inform our ability to improve how government serves everyone. We don’t take that lightly. Our values guide our work, help us ask the right questions, and ultimately help us serve the public.
        </SectionHeader>
        <hr />
       
        <Newsletter/>
      </div>
    );
  }
  
  
// export async function getStaticProps({ params, preview = false }) {
//   const res = await ContentfulApi.getPageBySlug("/people", {
//     preview: preview,
//   });
//  return null;
// }
