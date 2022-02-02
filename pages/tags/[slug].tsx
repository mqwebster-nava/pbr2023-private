import ContentfulApi from "lib/contentful";


// List of posts filtered by a specific tag
  export default function FilteredByTagPage({tag, posts}) {
    return (
      <div>
     <h1>Tags: {tag}</h1>
    <div>{posts.map((post)=>
       <div>
         <h3>{post.title}</h3>
         <p>{post.shortSummary}</p>
       </div>
     )}
     </div> 
     </div>
    );
  }


  const allTagsSlugIdPair = {
      "human-centered-design" :"Human-Centered Design",
      "veterans":"Veterans",
      "continuous-improvement":"Continuous Improvement",
      "crisis-response":"Crisis Response",
      "user-experience-research": "User Experience Research",
      "program-outcomes":"Program Outcomes",
      "healthcare":"Healthcare",
      "adapting-to-change":"Adapting To Change",
      "policy":"Policy"
  }

  // Gets all of the tags that are used in the content and creates a page for each one
export async function getStaticPaths({ params, preview = null }) {
    const paths = Object.keys(allTagsSlugIdPair).map((slug)=>{ return {params: {  slug } }});
    return {
      paths,
      fallback: false
    }
}


// Calls the contentful API to get posts for each tag.
export async function getStaticProps({ params, preview = false }) {
  const tag = allTagsSlugIdPair[params.slug];
    // This returns a list of posts summaries to be displayed in cards
  const posts = await ContentfulApi.getPostsByTag(tag);
  return {
    props: {
      tag,
      posts
    },
  };
}
