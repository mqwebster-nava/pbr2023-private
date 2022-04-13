import ContentfulApi from "lib/contentful";
import CardsGrid from "components/blocks/ContentBlockArticlesList/CardsGrid";
import ContentCard from "components/atom/ContentCard/ContentCard";
import { BasicPostInterface } from "lib/post_data_models";
import {

  FilteredPostsList,
  PlaceholderPageHeader,

} from "components/blocks";
import { PageInterface } from "lib/page_data_models";
import PageTemplate from "components/templates/PageTemplate/PageTemplate";


// export interface CaseStudiesProps   {
//     tag:string,
//     posts:Array<BasicPostInterface>,
//   }

  
export default function CaseStudies({posts, page, preview}) {
  
  return page? ( 
    <PageTemplate page={page} preview={preview}>
    
  
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
      </PageTemplate>):<div>Error</div>;
}


export async function getStaticProps({ params, preview = false }) {
    const posts: Array<BasicPostInterface> = await ContentfulApi.getPostsByContentType("Case Study");
    const page: PageInterface = await ContentfulApi.getPageBySlug("/case-studies", {
      preview: preview,
    });
    return {
      props: {
          page,
          posts
      }, // will be passed to the page component as props
    }
  }