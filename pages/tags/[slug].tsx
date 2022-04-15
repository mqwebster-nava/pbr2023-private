import ContentfulApi from "lib/contentful";
import {allTagsSlugIdPair, getContentUrl} from "utils/utils"
import CardsGrid from "components/blocks/ContentBlockArticlesList/CardsGrid";
import ContentCard from "components/atom/ContentCard/ContentCard";
import { BasicPostInterface } from "lib/post_data_models";
import { FilteredPostsList, PlaceholderPageHeader } from "components/blocks";

export interface FilteredByTagPageProps   {
  tag:string,
  posts:Array<BasicPostInterface>,
}

// List of posts filtered by a specific tag
  export default function FilteredByTagPage({tag, posts}:FilteredByTagPageProps) {
    return (
      <div>
      <PlaceholderPageHeader title={"tag"} subtitle={tag}/>
     <FilteredPostsList
        max={50}
        posts={posts}
      ></FilteredPostsList>
     </div>
    );
  }



  // Gets all of the tags that are used in the content and creates a page for each one
export async function getStaticPaths({ params, preview = null }) {
    const paths = Object.keys(allTagsSlugIdPair.getMap()).map((slug)=>{ return {params: {  slug } }});
    return {
      paths,
      fallback: false
    }
}


// Calls the contentful API to get posts for each tag.
export async function getStaticProps({ params, preview = false }) {
  const tag:string = allTagsSlugIdPair.get(params.slug);
    // This returns a list of posts summaries to be displayed in cards
  const posts: Array<BasicPostInterface> = await ContentfulApi.getPostsByTag(tag);
  return {
    props: {
      tag,
      posts
    },
  };
}
