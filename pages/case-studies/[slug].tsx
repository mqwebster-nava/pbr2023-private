import ContentfulApi from "lib/contentful";
import PostTemplate from "components/templates/PostTemplate";



  export default function CaseStudyPost({post, morePosts, preview }) {
    return (
      <PostTemplate post={post} morePosts={morePosts} preview={preview}></PostTemplate>
    );
  }


export async function getStaticPaths({ params, preview = null }) {
  const postSlugs = await ContentfulApi.getAllPostSlugs("Case Study");

  const paths = postSlugs.map((slug) => {
    return { params: { slug } };
  });

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
