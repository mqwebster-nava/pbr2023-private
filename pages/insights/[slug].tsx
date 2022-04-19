import ContentfulApi from "lib/contentful";
import { PageInterface } from "models/page_models";
import PageTemplate from "components/templates/PageTemplate/PageTemplate";

export default function InsightPost(props:PageInterface) {
    return (
      <PageTemplate {...props}></PageTemplate>
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
  const res = await ContentfulApi.getPageBySlug({
    slug:params.slug,
    preview: preview,
    variant:"post"
  });
  return {
    props: res
  }
  // const res = await ContentfulApi.getPostBySlug(params.slug, {
  //   preview: preview,
  // });
  // const post: FullPostInterface = res.post;
  // const morePosts: Array<BasicPostInterface> = res.morePosts;


  // // Add this with fallback: "blocking"
  // // So that if we do not have a post on production,
  // // the 404 is served
  // if (!post) {
  //   return {
  //     notFound: true,
  //   };
  // }
  // return {
  //   props: {
  //     preview,
  //     post,
  //     morePosts
  //   },
  // };
}
