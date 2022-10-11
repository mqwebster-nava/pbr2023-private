import { getDateStr, slugify } from "utils/utils";
import { LinkText } from "components/atom/LinkText/LinkText";
import { AuthorPostInterface } from "shared_interfaces/post_interface";

interface ArticleInfoComponentProps {
  date: string;
  authors: Array<AuthorPostInterface>;
  contentTags: Array<string>;
  isEvent: boolean;
}

const ArticleInfoComponent = ({
  date,
  authors,
  contentTags,
  isEvent = false,
}: ArticleInfoComponentProps) => {
  const publishDate = getDateStr(date);
  return (
    <div className="type-preset-7">
      <div className="font-sans md:block flex justify-between pb-xl md:pb-2xl">
        {!isEvent && (
          <div>
            {publishDate && (
              <div className={"pb-2xl"}>
                <p className="font-sans">
                  <b className="font-bold block pb-sm">Published</b>
                  {publishDate}
                </p>
              </div>
            )}
            <div className="md:pb-2xl">
              <p className="font-bold pb-sm">Authors</p>
              <ul>
                {authors.map((author) => (
                  <li id={author.name} className="pb-md " key={author.name}>
                    <p>
                      <LinkText
                        href={`/authors/${author.slug}`}
                        variant={"underlined"}
                      >
                        {author.name}
                      </LinkText>
                    </p>
                    <p className=" text-gray-700">{author.role}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}
        <div>
          {contentTags && <p className="font-bold pb-md">Topics</p>}
          {contentTags && (
            <ul>
              {contentTags.map((tag) => {
                return (
                  <li id={`${tag}`} key={tag} className="pb-md">
                    <LinkText
                      href={`/tags/${slugify(tag)}`}
                      variant={"underlined"}
                    >
                      {tag}
                    </LinkText>
                  </li>
                );
              })}{" "}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};

export default ArticleInfoComponent;
