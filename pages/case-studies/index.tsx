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
  
  console.log(posts);
  return ( 
    <div> 
    
      <PlaceholderPageHeader
        title={"Case Studies"}
        subtitle={"Learn about Nava’s approach and results"}
      />
    
      <FilteredPostsList 
      title={"State of Vermont"}
      max={3}
      buttonText="Show more"
      buttonPath="/tags/continuous-improvement"
      posts={posts.filter((p) => p.clientName=="State of Vermont")}>
      </FilteredPostsList>
      <FilteredPostsList 
      title={"Centers for Medicare & Medicaid Services"}
      max={3}
      buttonText="Show more"
      buttonPath="/tags/continuous-improvement"
      posts={posts.filter((p) => p.clientName=="Centers for Medicare & Medicaid Services")}>
      </FilteredPostsList>
      <FilteredPostsList 
      title={"State of California"}
      max={3}
      buttonText="Show more"
      buttonPath="/tags/continuous-improvement"
      posts={posts.filter((p) => p.clientName=="State of California")}>
      </FilteredPostsList>
      <FilteredPostsList 
      title={"U.S. Department of Veterans Affairs"}
      max={3}
      buttonText="Show more"
      buttonPath="/tags/continuous-improvement"
      posts={posts.filter((p) => p.clientName=="U.S. Department of Veterans Affairs")}>
      </FilteredPostsList>
       
      <FilteredPostsList 
      title={"All"}
      max={20}
      posts={posts}>
      </FilteredPostsList>
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