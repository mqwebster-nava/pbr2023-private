import ContentfulApi from "lib/contentful";
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import PostTemplate from "components/templates/PostTemplate";


// List of posts filtered by a specific tag
  export default function FilteredByTagPage({tag, posts}) {
    
    return (
        // Header with the name of the tag
        // List of cards with post info and links to the posts
    );
  }


export async function getStaticPaths({ params, preview = null }) {
    // human centered design
    // crisis response
    // veterans
    const allTags = [
        {
            "name": "Human Centered Design",
            "slug":"human-centered-design"
        }
    ]
    // TODO this is where we get all the Case Studies Slugs 
    // getPostSlugsByContentType
    return {
      allTags,
      fallback: false
    }
}

export async function getStaticProps({ params, preview = false }) {

    // This returns a list of posts summaries to be displayed in cards
  const posts = await ContentfulApi.getPostsByTag(params.name);

  // Add this with fallback: "blocking"
  // So that if we do not have a post on production,
  // the 404 is served

  return {
    props: {
      tag: params.name,
      posts
    },
  };
}
