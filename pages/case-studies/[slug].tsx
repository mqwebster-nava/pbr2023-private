import ContentfulApi from "lib/contentful";
import PageTemplate from "components/templates/PageTemplate/PageTemplate";
import { PageInterface } from "models/page_models";

const CaseStudyPost= (props: PageInterface)=> {
    return (
      <PageTemplate {...props} ></PageTemplate>
    );
}
export default CaseStudyPost;

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
  
  const res = await ContentfulApi.getPageBySlug({
    slug:params.slug,
    preview: preview,
    variant:"post"
  });
  return {
    props: res
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

