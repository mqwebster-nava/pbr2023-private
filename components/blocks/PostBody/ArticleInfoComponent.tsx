
import {getDateStr, slugify} from "utils/utils";
import { LinkText } from "components/atom/LinkText/LinkText";
import { AuthorPostInterface } from "shared_interfaces/post_interface";

interface ArticleInfoComponentProps{
    date: string;
    authors: Array<AuthorPostInterface>;
    contentTags: Array<string>;

}

const ArticleInfoComponent = ({date, authors, contentTags}:ArticleInfoComponentProps) =>{


    return (<div className="type-preset-7">
       <div className="font-sans md:block flex justify-between mb-lg">
     <div>
     <h3 className="font-bold">Published</h3>
      <p className="font-sans pb-md">{getDateStr(date)}</p>
     
              <div>
                <h3 className="font-bold">Authors</h3>
                {authors.map((author)=>(
                <div id={author.name} className="pb-md " key={author.name}>
                  <p>
                    <LinkText href={`/authors/${author.slug}`} variant={"underlined"}>{author.name}</LinkText></p>
                  <p className="type-preset-7">{author.role}</p>
                </div>
                ))}
              </div>
              </div>
              <div>
              <h3 className="font-bold">Tags</h3>
              {contentTags && contentTags.map((tag)=>{
                return (
                  <p id={`${tag}`} key={tag}>
                    <LinkText  href={`/tags/${slugify(tag)}`} variant={"underlined"}>{tag}</LinkText>
                  </p>
                )})}
              </div>
        </div>
    </div>)
 }

export default ArticleInfoComponent;