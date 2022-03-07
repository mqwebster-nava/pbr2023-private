import ContentfulApi from "lib/contentful";
import PostTemplate from "components/templates/PostTemplate/PostTemplate";
import { FullPostInterface } from "lib/data_models";
import { PostPageProps } from "utils/postUtils";



  export default function NewsPost({post, morePosts, preview }:PostPageProps) {
    return (
      <PostTemplate post={post} morePosts={morePosts} preview={preview}></PostTemplate>
    );
  }


export async function getStaticPaths({ params, preview = null }) {
  const postSlugs = await ContentfulApi.getAllPostSlugs("News");

  const paths = postSlugs.map((slug) => {
    return { params: { slug } };
  });

    return {
      paths,
      fallback: false
    }
}

export async function getStaticProps({ params, preview = false }) {
  const post: FullPostInterface = await ContentfulApi.getPostBySlug(params.slug, {
    preview: preview,
  });
  
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
