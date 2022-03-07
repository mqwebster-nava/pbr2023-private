
import {
    SectionHeader,
    PlaceholderPageHeader,
    Newsletter,
  } from "components/row/index";
  import { ContentCard } from "components/atom/index";
  import React from "react";
  // https://docs.google.com/document/d/1RG_J13eS5MM4QMLvgjK4xSr7CrJWomsKtxLDHjcttTw/edit#
  
  
  export default function People() {
    const colorTheme = "purple";
  
    return (
      <div>
        <PlaceholderPageHeader
          title={"Our People"}
          subtitle={"[Placeholder text]"}
        />
        <hr />
        <SectionHeader
          title={"Our values guide our work"}
          colorTheme={colorTheme}
        >
          Every day we make countless decisions that inform our ability to improve how government serves everyone. We don’t take that lightly. Our values guide our work, help us ask the right questions, and ultimately help us serve the public.
        </SectionHeader>
        <hr />
       
        <Newsletter/>
      </div>
    );
  }
  
  