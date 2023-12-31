import { getPageDataFromContentful } from "lib/api";
import PageTemplate from "components/templates/PageTemplate/PageTemplate";
import { PageInterface } from "lib/data_models/page_interface";



export default function CaseStudies(props:PageInterface) {
  
  return props? (   <PageTemplate {...props}> </PageTemplate>):<div>Error</div>;
}


export async function getStaticProps({ params, preview = false }) {
    //const posts: Array<BasicPostInterface> = await ContentfulApi.getPostsByContentType("Case Study");
    const page: PageInterface = await getPageDataFromContentful({
      slug:"/case-studies", 
      preview: preview,
    });
    return {
      props: page,
      // Next.js will attempt to re-generate the page:
      // - When a request comes in
      // - At most once every 60 seconds
      revalidate: 60, // In seconds
    }
  }

  /*     
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
      </FilteredPostsList> */