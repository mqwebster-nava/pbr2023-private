import { getDateStr, slugify } from "utils/utils";
import { LinkText } from "components/atom/LinkText/LinkText";
import { AuthorPostInterface } from "shared_interfaces/post_interface";

interface ArticleInfoComponentProps {
  date: string;
  authors: Array<AuthorPostInterface>;
  contentTags: Array<string>;
}

const ArticleInfoComponent = ({
  date,
  authors,
  contentTags,
}: ArticleInfoComponentProps) => {
  return (
    <div className="type-preset-7">
      <div className="font-sans md:block flex justify-between pb-2xl">
        <div>
        <div className={"pb-2xl"}>
          <h3 className="font-bold">Published</h3>
          <p className="font-sans">{getDateStr(date)}</p>
          </div>
          <div className="pb-2xl">
            <h3 className="font-bold pb-sm">Authors</h3>
            {authors.map((author) => (
              <div id={author.name} className="pb-md " key={author.name}>
                <p>
                  <LinkText
                    href={`/authors/${author.slug}`}
                    variant={"underlined"}
                  >
                    {author.name}
                  </LinkText>
                </p>
                <p className=" text-gray-700">{author.role}</p>
              </div>
            ))}
          </div>
          </div>
        <div>
          <h3 className="font-bold pb-sm">Topics</h3>
          {contentTags &&
            contentTags.map((tag) => {
              return (
                <p id={`${tag}`} key={tag}>
                  <LinkText
                    href={`/tags/${slugify(tag)}`}
                    variant={"underlined"}
                  >
                    {tag}
                  </LinkText>
                </p>
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default ArticleInfoComponent;
