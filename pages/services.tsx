import {
    SectionHeader,
    ContentBlockLinkToPage,
    ContentBlockText,
    ContentBlockText2,
    PlaceholderPageHeader,
    ContentBlockArticleList,
    Newsletter,
    PageCTASection
  } from "components/row/index";
  import { ContentCard } from "components/atom/index";
  // https://docs.google.com/document/d/1RG_J13eS5MM4QMLvgjK4xSr7CrJWomsKtxLDHjcttTw/edit#

  
  export default function Services() {
    const colorTheme = "purple";

    return (
      <div>
        <PlaceholderPageHeader
          title={"Our Approach"}
          subtitle={"Create digital services that transform program outcomes"}
        />
        <hr />
        <SectionHeader
          title={"Work with Nava"}
          colorTheme={colorTheme}
        >
         Since 2013, government agencies have trusted Nava with their most critical digital services projects. 
        </SectionHeader>
        <hr />
        <ContentBlockLinkToPage
          title={"De-risk and build confidently"}
          buttonText={"See how"}
          buttonPath={"/"}
        >
         Nava’s agile processes let us proactively identify and mitigate risks so you know we’ll build the right thing, on time and on budget.
        </ContentBlockLinkToPage>
        <hr />
        <ContentBlockLinkToPage
          title={"Improve people’s experiences"}
          buttonPath={"/"}
          buttonText="See how"
        >
          Testing and learning with real users ensures that what we build improves everyone’s experience, from civil servants to the public.
        </ContentBlockLinkToPage>
        <hr />
        <ContentBlockLinkToPage
          title={"Align technology with policy"}
          buttonText={"See how"}
          buttonPath={"/"}
        >
          Policy specialists are embedded on Nava teams to ensure that the technology we build actually supports policy and its intended outcomes.
        </ContentBlockLinkToPage>
        <hr />
        <ContentBlockLinkToPage
          title={"Meet and exceed target outcomes"}
          buttonText={"See how"}
          buttonPath={"/"}
        >
         Modernization itself isn’t an end goal. Nava works to ensure that technology improves program outcomes — often beyond expectations.
        </ContentBlockLinkToPage>
        <hr />
        <ContentBlockLinkToPage
          title={"Continuously respond to change"}
          buttonText={"See how"}
          buttonPath={"/"}
        >
         Whether you need to replace legacy systems or quickly build a new app, Nava helps agencies become more adaptable and resilient. 

        </ContentBlockLinkToPage>
        <hr />
        <SectionHeader
          title={"Gain experienced partners"}
          colorTheme={colorTheme}
        >
          Nava partners with agencies at the federal, state, and local level. Deep work in specific programs like SNAP, TK is bolstered by broad...
        </SectionHeader>
        <hr />
        <ContentBlockText2 title={"Integrated benefits"}>
        Nava works with states across the country to build an equitable social safety net that’s easy for everyone to use.
        </ContentBlockText2>
        <hr />
        <ContentBlockText2 title={"Unemployment insurance"}>
            TK copy about Nava’s expertise in UI delivery.
        </ContentBlockText2>
        <hr />
        <ContentBlockText2 title={"Human-centered cloud infrastructure"}>
            Nava helps build infrastructure that’s easy for teams to use so they can dramatically scale their work while minimizing cost and effort. 
        </ContentBlockText2>

<PageCTASection title="Get In Touch" buttonPath="/contact" buttonText="contact us">
Tell us about your challenges and ideas.
</PageCTASection>
      </div>
    );
  }
  
  