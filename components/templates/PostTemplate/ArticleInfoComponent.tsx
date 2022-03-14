import { FullPostInterface } from "lib/post_data_models";
import {allTagsSlugIdPair} from "utils/utils";
import { icolor } from "utils/theme";

interface ArticleInfoComponentProps{
    post: FullPostInterface
}

const ArticleInfoComponent = ({post}:ArticleInfoComponentProps) =>{

  const monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
  ];
  const date = new Date(post.date);
  const dateStr = monthNames[date.getMonth()]  +' ' + date.getDate()+ ', '+date.getFullYear();

    return (<>
      <p className="font-sans pb-md font-bold">{dateStr}</p>
      <div className="font-sans md:block flex justify-between mb-lg">
              <div>
                <h3 className="font-bold">Authors</h3>
                {post.authors.map((author)=>(
                <div id={author.name} className="pb-sm ">
                  <p><a className={`text-${icolor}-dark hover:text-${icolor}-base underline`} href={`/authors/${author.slug}`}>{author.name}</a></p>
                  <p className="text-sm">{author.role}</p>
                </div>
                ))}
              </div>
              <div>
              <h3 className="font-bold">Tags</h3>
              {post.contentTags && post.contentTags.map((tag)=>{
                return (
                  <p id={tag}><a className={`text-${icolor}-dark hover:text-${icolor}-base underline text-base`} href={`/tags/${allTagsSlugIdPair.revGet(tag)}`}>{tag}</a></p>
                )})}
              </div>
        </div>
    </>)
 }

export default ArticleInfoComponent;