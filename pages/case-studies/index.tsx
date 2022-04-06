import ContentfulApi from "lib/contentful";
import CardsGrid from "components/blocks/ContentBlockArticlesList/CardsGrid";
import ContentCard from "components/atom/ContentCard/ContentCard";
import { BasicPostInterface } from "lib/post_data_models";
import {

  FilteredPostsList,
  PlaceholderPageHeader,

} from "components/blocks";


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
      <FilteredPostsList 
      title={"Continuous Improvement"}
      max={3}
      buttonText="Show more"
      buttonPath="/tags/continuous-improvement"
      posts={posts.filter((p) => p.contentTags?.includes("Continuous Improvement"))}>
      </FilteredPostsList>
       
      <FilteredPostsList 
      title={"Human-Centered Design"}
      max={3}
      buttonText="Show more"
      buttonPath="/tags/human-centered-design"
      posts={posts.filter((p) => p.contentTags?.includes("Human-Centered Design"))}>
      </FilteredPostsList>
       
        <CardsGrid >
          {
          posts.map((post) =>( <ContentCard 
            type={post.contentType}
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