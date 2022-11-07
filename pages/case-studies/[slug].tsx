import { getPageDataFromContentful } from "lib/api";
import PageTemplate from "components/templates/PageTemplate/PageTemplate";
import { PageInterface } from "lib/data_models/page_interface";
import getAllPostSlugs from "lib/contentful/getAllPostSlugs";

const CaseStudyPost= (props: PageInterface)=> {
    return (
      <PageTemplate {...props} ></PageTemplate>
    );
}
export default CaseStudyPost;

export async function getStaticPaths({ params, preview = null }) {
  const postSlugs = await getAllPostSlugs("Case Study");

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
}
  //const post: FullPostInterface = res.post;
  //const morePosts: Array<BasicPostInterface> = res.morePosts;

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

