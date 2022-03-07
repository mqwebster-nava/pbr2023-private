import {
    SectionHeader,
    ContentBlockLinkToPage,
    ContentBlockText,
    PlaceholderPageHeader,
    ContentBlockArticleList,
    Newsletter,
  } from "components/row/index";
  import { ContentCard } from "components/atom/index";
  import React from "react";
  // https://docs.google.com/document/d/1RG_J13eS5MM4QMLvgjK4xSr7CrJWomsKtxLDHjcttTw/edit#
  
  
  export default function DEI() {
    const colorTheme = "purple";
  
    return (
      <div>
        <PlaceholderPageHeader
          title={"Diversity, equity, and inclusion at Nava"}
          subtitle={"[todo]"}
        />
        <hr />
       
        <Newsletter/>
      </div>
    );
  }
  
  