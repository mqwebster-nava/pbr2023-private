import { FullPostInterface } from "lib/data_models";
import {allTagsSlugIdPair} from "utils/utils";

interface ArticleInfoComponentProps{
    post: FullPostInterface
}

const ArticleInfoComponent = ({post}:ArticleInfoComponentProps) =>{
    return (<>
      <p className="font-sans pb-md">Date: ______</p>
      <div className="font-sans md:block flex justify-between mb-lg">
              <div>
                <h3>Authors</h3>
                {post.authors.map((author)=>(
                <div id={author.name} className="pb-sm">
                  <p><a className="text-blue-700 underline" href={`/authors/${author.slug}`}>{author.name}</a></p>
                  <p className="text-sm">{author.role}</p>
                </div>
                ))}
              </div>
              <div>
              <h3>Tags</h3>
              {post.contentTags && post.contentTags.map((tag)=>{
                return (
                  <p id={tag}><a className="text-blue-700 underline text-base" href={`/tags/${allTagsSlugIdPair.revGet(tag)}`}>{tag}</a></p>
                )})}
              </div>
        </div>
    </>)
 }

export default ArticleInfoComponent;