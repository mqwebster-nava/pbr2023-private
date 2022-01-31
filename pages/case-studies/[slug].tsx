import ContentfulApi from "lib/contentful";
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import PostTemplate from "components/templates/PostTemplate";



  export default function CaseStudyPost({post, morePosts, preview }) {
    console.log(post);
    return (
      <PostTemplate post={post} morePosts={morePosts} preview={preview}></PostTemplate>
    );
  }


export async function getStaticPaths({ params, preview = null }) {
    const paths = [{ params: { slug:"supporting-veterans-with-virtual-tele-hearings"  } }]
    // TODO this is where we get all the Case Studies Slugs 
    // getPostSlugsByContentType
    return {
      paths,
      fallback: false
    }
}

export async function getStaticProps({ params, preview = false }) {
  const post = await ContentfulApi.getPostBySlug(params.slug, {
    preview: preview,
  });

  // Add this with fallback: "blocking"
  // So that if we do not have a post on production,
  // the 404 is served
  if (!post) {
    return {
      notFound: true,
    };
  }
  return {
    props: {
      preview,
      post,
    },
  };
}

// // export async function getStaticPaths() {
// //     return null;
// //     //const post = await getPostBySlug("test");
// //     //console.log(post);

// //     // return {
// //     //     paths: [ `/case-studies/${post.path}`],
// //     //     fallback: true,
// //     // }
// // }
