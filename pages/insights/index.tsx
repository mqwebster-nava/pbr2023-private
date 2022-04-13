import ContentfulApi from "lib/contentful";
import { FilteredPostsList, PlaceholderPageHeader } from "components/blocks";
import { BasicPostInterface } from "lib/post_data_models";

export interface Props {
  posts: Array<BasicPostInterface>;
}

export default function Insights({ posts }: Props) {
  posts = posts.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  // For seeing how many tags each content type has
  // let tags = {};
  // const p2 = posts.filter((p)=>p.contentType=="Case Study")
  // p2.forEach((post)=>{
  //   post.contentTags?.forEach((tag)=>{
  //     if(tag in tags) tags[tag]+=1;
  //     else tags[tag]=1;
  //   });
  // });

  return (
    <div>
      <PlaceholderPageHeader
        title={"Insights"}
        subtitle={"Learn about building critical digital services alongside us"}
      />

      <div>
        <FilteredPostsList
          title={"Latest"}
          body={
            "Nava’s been a trusted government partner since we helped fix HealthCare.gov in 2013. See what we’ve been up to recently."
          }
          posts={posts.slice(0, 3)}
        >
        </FilteredPostsList>
        <FilteredPostsList
          title={"On healthcare"}
          posts={posts.filter((p) => p.contentTags?.includes("Healthcare"))}
          
        >
        </FilteredPostsList>
        <FilteredPostsList
          title={"Envisioning the future of WIC"}
          max={20}
          posts={posts}
        >
        </FilteredPostsList>
       
    
         </div>
    </div>
  );
}

export async function getStaticProps(context) {
  const posts: Array<BasicPostInterface> =
    await ContentfulApi.getPostsByContentType("Insights");
  return {
    props: {
      posts,
    }, // will be passed to the page component as props
  };
}
