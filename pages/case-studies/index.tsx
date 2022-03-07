import ContentfulApi from "lib/contentful";
import CardsGrid from "components/row/CardsGrid/CardsGrid";
import ContentCard from "components/atom/ContentCard/ContentCard";
import { BasicPostInterface } from "lib/data_models";
import {
  SectionHeader,
  ContentBlockLinkToPage,
  ContentBlockText,
  PlaceholderPageHeader,
  ContentBlockArticleList,
  Newsletter,
} from "components/row/index";


export interface CaseStudiesProps   {
    tag:string,
    posts:Array<BasicPostInterface>,
  }

  
export default function CaseStudies({posts}:CaseStudiesProps) {
    return ( 
    <div> 
    
      <PlaceholderPageHeader
        title={"Case Studies"}
        subtitle={"Learn about Nava’s approach and results"}
      />
      <hr />
        <CardsGrid >
          {
          posts.map((post) =>( <ContentCard 
                  title={post.title} 
                  path={`/case-studies/${post.slug}`}>
                      {post.shortSummary}
                  </ContentCard>))
            }

        </CardsGrid>

    </div>  );
}


export async function getStaticProps(context) {
    const posts: Array<BasicPostInterface> = await ContentfulApi.getPostsByContentType("Case Study");
    
    return {
      props: {
          posts
      }, // will be passed to the page component as props
    }
  }