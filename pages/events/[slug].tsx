import { getPageDataFromContentful } from "lib/api";
import { PageInterface } from "lib/data_models/page_interface";
import PageTemplate from "components/templates/PageTemplate/PageTemplate";
import getAllPostSlugs from "lib/contentful/getAllPostSlugs";

export default function EventsPost(props:PageInterface) {
    return (
      <PageTemplate {...props}></PageTemplate>
    );
  }


export async function getStaticPaths({ params, preview = null }) {
  const postSlugs = await getAllPostSlugs("Events");

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
  if (!res) {
    return {
      notFound: true,
    };
  }
  return {
    props: res,
    // Next.js will attempt to re-generate the page:
    // - When a request comes in
    // - At most once every 60 seconds
    revalidate: 60, // In seconds
  }
}
