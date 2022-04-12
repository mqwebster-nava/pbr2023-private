import ContentfulApi from "lib/contentful";
import CardsGrid from "components/blocks/ContentBlockArticlesList/CardsGrid";
import ContentCard from "components/atom/ContentCard/ContentCard";
import {
    PlaceholderPageHeader,
    FilteredPostsList
  } from "components/blocks";
  


export default function Toolkits({posts}) {
    return ( <div> 
       <PlaceholderPageHeader
        title={"Toolkits"}
        subtitle={"Apply human-centered and agile practices to your program"}
      />
      <hr />
      <FilteredPostsList
          title={"Latest"}
          body={
            "Nava’s been a trusted government partner since we helped fix HealthCare.gov in 2013. See what we’ve been up to recently."
          }
          posts={posts}
        >
        </FilteredPostsList>
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