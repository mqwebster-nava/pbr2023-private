import { getPageDataFromContentful } from "lib/api";
import { PageInterface } from "shared_interfaces/page_interface";
import PageTemplate from "components/templates/PageTemplate/PageTemplate";
import getAllPostSlugs from "lib/contentful/getAllPostSlugs";

export default function WorkingAtNavaPost(props:PageInterface) {
    return (
      <PageTemplate {...props}></PageTemplate>
    );
}

export async function getStaticPaths({ params, preview = null }) {
  const postSlugs = await getAllPostSlugs("Working at Nava");
  const paths = postSlugs.map((slug) => {
    return { params: { slug } };
  });
    return {
      paths,
      fallback: false
    }
}

export async function getStaticProps({ params, preview = false }) {
  const res = await getPageDataFromContentful({
    slug:params.slug,
    preview: preview,
    variant:"post"
  });
  return {
    props: res
  }
}
