import ContentfulApi from "lib/contentful";
import CardsGrid from "components/row/CardsGrid/CardsGrid";
import ContentCard from "components/atom/ContentCard/ContentCard";



export default function CaseStudies({posts}) {
   // console.log(posts)
    return ( <div> 
        <h1>Case Studies </h1>
        <CardsGrid title={"Case Studies"} >
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
    const posts = await ContentfulApi.getPostsByContentType("Case Study");
    
    return {
      props: {
          posts
      }, // will be passed to the page component as props
    }
  }