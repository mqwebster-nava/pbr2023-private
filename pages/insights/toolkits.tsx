import ContentfulApi from "lib/contentful";
import CardsGrid from "components/row/CardsGrid/CardsGrid";
import ContentCard from "components/atom/ContentCard/ContentCard";



export default function Toolkits({posts}) {
    return ( <div> 
        <h1>Toolkits </h1>
        <CardsGrid title={"Toolkits"} >
          {
          posts.map((post) =>( <ContentCard 
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