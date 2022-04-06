import ContentfulApi from "lib/contentful";
import CardsGrid from "components/blocks/ContentBlockArticlesList/CardsGrid";
import ContentCard from "components/atom/ContentCard/ContentCard";
import {
    PlaceholderPageHeader,
  } from "components/blocks";
  


export default function Toolkits({posts}) {
    return ( <div> 
       <PlaceholderPageHeader
        title={"Toolkits"}
        subtitle={"Apply human-centered and agile practices to your program"}
      />
      <hr />
        <CardsGrid  >
          {
          posts.map((post) =>( <ContentCard 
            type={post.contentType}
                  title={post.title} 
                  path={`/toolkits/${post.slug}`}>
                      {post.shortSummary}
                  </ContentCard>))
            }

        </CardsGrid>

    </div>  );
}


export async function getStaticProps(context) {
    const posts = await ContentfulApi.getPostsByContentType("Toolkit");
    
    return {
      props: {
          posts
      }, // will be passed to the page component as props
    }
  }