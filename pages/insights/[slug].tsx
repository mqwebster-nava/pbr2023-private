import { getPageDataFromContentful } from "lib/api";
import { PageInterface } from "shared_interfaces/page_interface";
import PageTemplate from "components/templates/PageTemplate/PageTemplate";
import getAllPostSlugs from "lib/contentful/getAllPostSlugs";

export default function InsightPost(props:PageInterface) {
    return (
      <PageTemplate {...props}></PageTemplate>
    );
  }


export async function getStaticPaths({ params, preview = null }) {
  const postSlugs = await getAllPostSlugs("Insight");

  const paths = postSlugs.map((slug) => {
    return { params: { slug } };
  });
    return {
      paths,
      fallback: 'blocking'
    }
}

export async function getStaticProps({ params, preview = false }) {
  const res = await getPageDataFromContentful({
    slug:params.slug,
    preview: preview,
    variant:"post"
  });
  return {
    props: res,
    // Next.js will attempt to re-generate the page:
    // - When a request comes in
    // - At most once every 60 seconds
    revalidate: 60, // In seconds
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
