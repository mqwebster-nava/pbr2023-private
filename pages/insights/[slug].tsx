import ContentfulApi from "lib/contentful";
import PostTemplate from "components/templates/PostTemplate/PostTemplate";
import { FullPostInterface, BasicPostInterface } from "lib/post_data_models";
import { PostPageProps } from "utils/postUtils";



export default function InsightPost({post, morePosts, preview }:PostPageProps) {
    return (
      <PostTemplate post={post} morePosts={morePosts} preview={preview}></PostTemplate>
    );
  }


export async function getStaticPaths({ params, preview = null }) {
  const postSlugs = await ContentfulApi.getAllPostSlugs("Insight");

  const paths = postSlugs.map((slug) => {
    return { params: { slug } };
  });
  

    return {
      paths,
      fallback: false
    }
}

export async function getStaticProps({ params, preview = false }) {
  const res = await ContentfulApi.getPostBySlug(params.slug, {
    preview: preview,
  });
  //console.log(JSON.stringify(res));
  const post: FullPostInterface = res.post;
  const morePosts: Array<BasicPostInterface> = res.morePosts;


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
      morePosts
    },
  };
}
