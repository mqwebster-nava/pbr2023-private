
import ContentfulApi from "lib/contentful";
import LargeHero from "components/row/LargeHero/LargeHero";
import CardsGrid from "components/row/CardsGrid/CardsGrid";
import ContentCard from "components/atom/ContentCard/ContentCard";
import {
  SectionHeader,
  ContentBlockLinkToPage,
  ContentBlockText,
  PlaceholderPageHeader,
  ContentBlockArticleList,
  Newsletter,
} from "components/row/index";



export default function Insights({posts}) {
    
    
    return ( <div> 
       <PlaceholderPageHeader
        title={"Insights"}
        subtitle={"Learn about building critical digital services alongside us"}
      />
       
    <div> 
        <CardsGrid>
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