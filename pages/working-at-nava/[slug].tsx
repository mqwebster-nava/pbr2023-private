import ContentfulApi from "lib/contentful";
import { PageInterface } from "models/page_models";
import PageTemplate from "components/templates/PageTemplate/PageTemplate";

export default function WorkingAtNavaPost(props:PageInterface) {
    return (
      <PageTemplate {...props}></PageTemplate>
    );
}

export async function getStaticPaths({ params, preview = null }) {
  const postSlugs = await ContentfulApi.getAllPostSlugs("Working at Nava");
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
