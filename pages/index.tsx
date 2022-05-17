import { getPageDataFromContentful } from "lib/api";
import PageTemplate from "components/templates/PageTemplate/PageTemplate";
import { PageInterface } from "shared_interfaces/page_interface";
import HighlightedCard from "components/atom/ContentCard/HighlightedCard";

export default function Home(props:PageInterface) {
  return props ? (
    <PageTemplate {...props}></PageTemplate>
  ) : (
    <div>Error</div>
  );
}

export async function getStaticProps({ params, preview = false }) {
  const res: PageInterface = 
    await getPageDataFromContentful({
      slug:"/", 
      preview: preview,
    });
  return {
    props: res,
  };
}