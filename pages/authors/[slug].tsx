import ContentfulApi from "lib/contentful";
import { PageInterface } from "models/page_models";
import PageTemplate from "components/templates/PageTemplate/PageTemplate";


// TODO connect to page template

export default function AuthorPosts(props:PageInterface) { //{ posts, name, role, bio }
  return (
    <PageTemplate { ...props}></PageTemplate>
  );
}

export async function getStaticPaths({ params, preview = null }) {
  const postSlugs = await ContentfulApi.getAllAuthorSlugs();
  const paths = postSlugs.map((slug) => {
    return { params: { slug } };
  });
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params, preview = false }) {
  const page : PageInterface = await ContentfulApi.getPageBySlug({slug:params.slug, variant:"author", preview });

  return {
    props: page,
  };
}
