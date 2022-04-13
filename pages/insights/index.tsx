import ContentfulApi from "lib/contentful";
import { FilteredPostsList, PlaceholderPageHeader } from "components/blocks";
import { BasicPostInterface } from "lib/post_data_models";
import {allTagsSlugIdPair} from "utils/utils"
export interface Props {
  posts: Array<BasicPostInterface>;
}

export default function Insights({ posts }: Props) {
  posts = posts.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  const tags = [
    "Human-Centered Design",
    "Scalable Solutions",
    "User Experience Research",
    "Continuous Improvement",
    "Healthcare",
    "Accessibility and Equity",
    "Agile Development",
    "Content Strategy"
  ]


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
        {tags.map((tag)=>{
          const urlpart = allTagsSlugIdPair.revGet(tag);
          return <FilteredPostsList
            max={3}
           title={tag}
           buttonPath={`/tags/${urlpart}`}
           posts={posts.filter((p) => p.contentTags?.includes(tag))}
         />
        })}

        
        <FilteredPostsList
           max={50}
          title={"All"}
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
