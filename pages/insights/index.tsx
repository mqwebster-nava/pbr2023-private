
import ContentfulApi from "lib/contentful";
import LargeHero from "components/row/LargeHero/LargeHero";
import CardsGrid from "components/row/CardsGrid/CardsGrid";
import ContentCard from "components/atom/ContentCard/ContentCard";

export default function Insights({posts}) {
    
    
    return ( <div> 
         <LargeHero 
      title={"Insights"} 
      subtitle={"Come help us build the services of a better future for millions of people."} 
      colorTheme={"navy"} 

    />
    <div> 
        <h1>Insights </h1>
        <CardsGrid title={"Insights"} >
          {
          posts.map((post) =>( <ContentCard 
                  title={post.title} 
                  path={`/insights/${post.slug}`}>
                      {post.shortSummary}
                  </ContentCard>))
            }

        </CardsGrid>
        

    </div> 

    </div>  );
}
  

export async function getStaticProps(context) {
    const posts = await ContentfulApi.getPostsByContentType("Insight");
    
    return {
      props: {
          posts
      }, // will be passed to the page component as props
    }
  }