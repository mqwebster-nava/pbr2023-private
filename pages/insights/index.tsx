
import ContentfulApi from "lib/contentful";
import CardsGrid from "components/blocks/ContentBlockArticlesList/CardsGrid";
import ContentCard from "components/atom/ContentCard/ContentCard";
import {
  PlaceholderPageHeader,
} from "components/blocks";
import { BasicPostInterface } from "lib/post_data_models";


export interface Props   {
  posts:Array<BasicPostInterface>,
}


export default function Insights({posts}:Props) {

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
                  promoImage={post.promoImage}
                  path={`/insights/${post.slug}`}>
                      {post.shortSummary}
                  </ContentCard>))
            }
        </CardsGrid>
    </div> 
    </div>  );
}
  

export async function getStaticProps(context) {
    const posts: Array<BasicPostInterface> = await ContentfulApi.getPostsByContentType("Insight");
    
    return {
      props: {
          posts
      }, // will be passed to the page component as props
    }
  }