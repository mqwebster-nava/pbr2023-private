import ContentfulApi from "lib/contentful";
import CardsGrid from "components/blocks_core/ContentBlockArticlesList/CardsGrid";
import ContentCard from "components/atom/ContentCard/ContentCard";
import {
    PlaceholderPageHeader,
    FilteredPostsList
  } from "components/blocks_core";
import { PageInterface } from "lib/page_data_models";
import PageTemplate from "components/templates/PageTemplate/PageTemplate";


export default function Toolkits({posts, page, preview}) {
 
    return page? (
    <PageTemplate page={page} preview={preview}>
      <FilteredPostsList
          title={"Latest"}
          body={
            "Nava’s been a trusted government partner since we helped fix HealthCare.gov in 2013. See what we’ve been up to recently."
          }
          posts={posts}
        >
        </FilteredPostsList>
    </PageTemplate>): <div>Error</div>

}


export async function getStaticProps({ params, preview = false }) {
    const posts = await ContentfulApi.getPostsByContentType("Toolkit");
    const page: PageInterface = await ContentfulApi.getPageBySlug("/toolkits", {
      preview: preview,
    });
    return {
      props: {
          posts,
          page,
          preview
      }, // will be passed to the page component as props
    }
  }