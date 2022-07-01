import { getPageDataFromContentful } from "lib/api";
import { PageInterface } from "shared_interfaces/page_interface";
import PageTemplate from "components/templates/PageTemplate/PageTemplate";
import getAllAuthorSlugs from "lib/contentful/getAllAuthorSlugs";


// TODO connect to page template

export default function AuthorPosts(props:PageInterface) { //{ posts, name, role, bio }
  return (
    <PageTemplate { ...props}></PageTemplate>
  );
}

export async function getStaticPaths({ params, preview = null }) {
  const postSlugs = await getAllAuthorSlugs();
  const paths = postSlugs.map((slug) => {
    return { params: { slug } };
  });
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params, preview = false }) {
  const page : PageInterface = await getPageDataFromContentful({slug:params.slug, variant:"author", preview });

  return {
    props: page,
    // Next.js will attempt to re-generate the page:
    // - When a request comes in
    // - At most once every 60 seconds
    revalidate: 60, // In seconds
  };
}
