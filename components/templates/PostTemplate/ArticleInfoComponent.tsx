import {allTagsSlugIdPair} from "utils/utils";

const ArticleInfoComponent = ({post}) =>{
    return (<div>
      <p>Date: ______</p>
              <div>
                <h3>Authors</h3>
                {post.authorsCollection.items.map((author)=>(
                <div id={author.name}>
                  <p><a className="text-blue-700 underline" href={`/authors/${author.slug}`}>{author.name}</a></p>
                  <p>{author.role}</p>
                </div>
                ))}
              </div>
              <div>
              <h3>Tags</h3>
              {post.contentTags && post.contentTags.map((tag)=>{
                return (
                  <p id={tag}><a className="text-blue-700 underline" href={`/tags/${allTagsSlugIdPair.revGet(tag)}`}>{tag}</a></p>
                )})}
              </div>
    </div>)
 }

export default ArticleInfoComponent;