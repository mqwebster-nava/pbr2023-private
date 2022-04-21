import { getPageDataFromContentful } from "lib/api";
import PageTemplate from "components/templates/PageTemplate/PageTemplate";
import { PageInterface } from "shared_interfaces/page_interface";
import HighlightedCard from "components/atom/ContentCard/HighlightedCard";
import { CTABlock, Newsletter } from "components/blocks";

export default function Home(props:PageInterface) {
  return props ? (
    <PageTemplate {...props}>

<HighlightedCard 
      title={"How APIs can help WIC better meet staff and participants’ needs"} 
      path={"/" } 
      type={"Insight"}
     promoImage={ 
      {
        id: '5D9BooUBjHC6MYX45Xyk7T',
        url: 'https://images.ctfassets.net/t2ekr6eg3fr3/6rpVAwgdjrrnR2OrgaHzrL/8a192fb130c0dba481ca54562deb022d/sample-feature.png?h=250',
        title: 'How APIs can help WIC better meet staff and participants’ needs',
        description: 'An API standard would unlock digital tools and catalyze WIC’s ability to evolve and grow.',
        width: 1500,
        height: 845}  
      }>
        An API standard would unlock digital tools and catalyze WIC’s ability to evolve and grow.
      </HighlightedCard>
      
      <Newsletter></Newsletter>
    </PageTemplate>
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