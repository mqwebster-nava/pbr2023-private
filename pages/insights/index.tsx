import ContentfulApi from "lib/contentful";
import PageTemplate from "components/templates/PageTemplate/PageTemplate";
import HighlightedCard from "components/atom/ContentCard/HighlightedCard";
import { PageInterface } from "models/page_models";

// export interface Props {
//   posts: Array<BasicPostInterface>;
// }

export default function Insights(props:PageInterface) {
  // posts = posts.sort(
  //   (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  // );

  // const tags = [
  //   "Human-Centered Design",
  //   "Scalable Solutions",
  //   "User Experience Research",
  //   "Continuous Improvement",
  //   "Healthcare",
  //   "Accessibility and Equity",
  //   "Agile Development",
  //   "Content Strategy",
  // ];

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
      {/* {tags.map((tag) => {
        const urlpart = allTagsSlugIdPair.revGet(tag);
        return (
          <FilteredPostsList
            max={3}
            title={tag}
            buttonPath={`/tags/${urlpart}`}
            posts={posts.filter((p) => p.contentTags?.includes(tag))}
          />
        );
      })} */}
      {/* <FilteredPostsList
        max={50}
        title={"All"}
        posts={posts}
      ></FilteredPostsList> */}
    </PageTemplate>
  ) : (
    <div>Error</div>
  );
}

export async function getStaticProps({ params, preview = false }) {
  // const posts: Array<BasicPostInterface> =
  //   await ContentfulApi.getPostsByContentType("Insights");

  const page: PageInterface = await ContentfulApi.getPageBySlug(
    {slug: "/insights", 
    preview: preview,
  });
  return {
    props:  page,
     // will be passed to the page component as props
  };
}

// For seeing how many tags each content type has
// let tags = {};
// const p2 = posts.filter((p)=>p.contentType=="Case Study")
// p2.forEach((post)=>{
//   post.contentTags?.forEach((tag)=>{
//     if(tag in tags) tags[tag]+=1;
//     else tags[tag]=1;
//   });
// });
