
import {allTagsSlugIdPair} from "utils/utils";
import { LinkText } from "components/atom/LinkText/LinkText";
import { AuthorPostInterface } from "shared_interfaces/post_interface";

interface ArticleInfoComponentProps{
    date: String;
    authors: Array<AuthorPostInterface>;
    contentTags: Array<String>;

}

const ArticleInfoComponent = ({date, authors, contentTags}:ArticleInfoComponentProps) =>{

  const monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
  ];
  const fmtdate = new Date(`${date}`);
  const dateStr = monthNames[fmtdate.getMonth()]  +' ' + fmtdate.getDate()+ ', '+fmtdate.getFullYear();

    return (<div className="type-preset-7">
      <h3 className="font-bold">Published</h3>
      <p className="font-sans pb-md">{dateStr}</p>
      <div className="font-sans md:block flex justify-between mb-lg">
              <div>
                <h3 className="font-bold">Authors</h3>
                {authors.map((author)=>(
                <div id={author.name} className="pb-md ">
                  <p>
                    <LinkText href={`/authors/${author.slug}`} variant={"underlined"}>{author.name}</LinkText></p>
                  <p className="type-preset-7">{author.role}</p>
                </div>
                ))}
              </div>
              <div>
              <h3 className="font-bold">Tags</h3>
              {contentTags && contentTags.map((tag)=>{
                return (
                  <p id={`${tag}`}>
                    <LinkText  href={`/tags/${allTagsSlugIdPair.revGet(tag)}`} variant={"underlined"}>{tag}</LinkText>
                  </p>
                )})}
              </div>
        </div>
    </div>)
 }

export default ArticleInfoComponent;