
import ContentfulApi from "lib/contentful";
import PageTemplate from "components/templates/PageTemplate/PageTemplate";
import { PageInterface } from "lib/page_data_models";
import { PageProps } from "utils/pageUtils";
// https://docs.google.com/document/d/1RG_J13eS5MM4QMLvgjK4xSr7CrJWomsKtxLDHjcttTw/edit#



export default function Values({page, preview}:PageProps ) {
  return (<PageTemplate page={page} preview={preview}/>);
}

export async function getStaticProps({ params, preview = false }) {
  const res: PageInterface = await ContentfulApi.getPageBySlug("/values", {
    preview: preview,
  });
 return {
   props:
   { page:res }
 };
}


    /* <PlaceholderPageHeader
        title={"Values"}
        subtitle={"Our values shape our culture and ability to achieve our mission"}
      />
      <hr />
      <SectionHeader
        title={"Our values guide our work"}
        colorTheme={colorTheme}
      >
        Every day we make countless decisions that inform our ability to improve how government serves everyone. We don’t take that lightly. Our values guide our work, help us ask the right questions, and ultimately help us serve the public.
      </SectionHeader>
      <hr />
      <ContentBlockText2
      title={"Be active stewards"}
      >
       The work we do impacts the lives of millions of people. The stakes are extremely high, so the standards we hold ourselves to must be even higher. In order to meet them, we must always listen closely to the communities we serve, and strive to develop a nuanced and insightful understanding of their experiences and needs. We must then continually advocate for these voices, both to ourselves and our partners. Only with great care and humility — a willingness to be wrong — can we build the tools that will be lasting, accessible, and truly helpful to the people who need them.
      </ContentBlockText2>
      <hr />
      <ContentBlockText2
      title={"Pursue the root cause"}
      >
      We are here to build better foundations, not just better facades. The problems we solve are very complex, with broad social, cultural, and civic implications. This means we must always resist the quick fix in favor of pursuing the underlying cause. Getting at the root of a problem is not easy — it requires active listening, practiced empathy, and great tenacity – but it is absolutely necessary. Where we rebuild roots, we are able to effectively and efficiently remake systems from the ground up.
      </ContentBlockText2>
      <hr />
      <ContentBlockText2
      title={"Think long-term"}
      >
       We work to make basic government services effective, efficient, and responsive to the needs of millions of people. This is a continuous process — one that will outlast election cycles and resonate across lifetimes. We can’t and won’t think about our work in terms of the daily news cycle. Instead, we recognize that it benefits from, if not requires, taking a profoundly long-term perspective.
      </ContentBlockText2>
      <hr />
      <ContentBlockText2
      title={"Build together"}
      >
       True partnerships are truly collaborative. Our government partners bring decades of knowledge, experience, and policy insight to the table. We have our own set of specialities in technology and design. By bringing these skillsets together, our work becomes more impactful, the systems we build more resilient, and the tools we make more comprehensive. In order to achieve this collaborative spirit, we invite feedback early and often, always provide context for our choices, and share and receive knowledge with equal levels of enthusiasm. We are committed to always working in step with our partners in government.
      </ContentBlockText2>
      <hr />
      <ContentBlockText2
      title={"Inclusion is essential"}
      >
      Outcomes are unequivocally better when they incorporate a diverse array of insights and expertise. Recognizing that, we will always deliberately and thoughtfully pursue the widest range of viewpoints and life experiences possible. This helps us do the necessary work of recognizing and questioning our own assumptions. It also helps us find stronger and more holistic solutions to the problems we are striving to solve. The people we work with, and the range of experiences they bring to the table, should be directly reflective of the communities we serve. We cannot do our work well otherwise.
Nava is committed to growing and supporting a talented team that reflects the diverse communities we serve across the US. Read our diversity, equity, and inclusion report.

      </ContentBlockText2>
      <hr />
      <ContentBlockText2
      title={"Progress takes work"}
      >
       Progress takes enduring commitment and extraordinary effort. It is composed of small, daily steps — not necessarily big leaps. We celebrate the difficulty of our daily work and aspire to its undertaking with enthusiasm. That often means tackling tasks that fall outside of the job description. It also means knowing how to thrive under pressure. We believe the future belongs to people who are willing to make change happen, and we are grateful to play our part.
      </ContentBlockText2>
      <hr />
   
    
      <SectionHeader
        title={"Our values shape our team"}
        colorTheme={colorTheme}
      >
        To build digital services that are simple, effective, and accessible to all, our teams must 
reflect the diverse communities we serve across the US.

      </SectionHeader>
      <hr />
      <ContentBlockText >
          <p>Find out how we’re doing in our <a 
          className="text-blue-900"
          href={"https://www.navapbc.com/diversity/"}
          >Diversity, Equity, and Inclusion report</a></p>
      </ContentBlockText>
     
      <Newsletter/> */