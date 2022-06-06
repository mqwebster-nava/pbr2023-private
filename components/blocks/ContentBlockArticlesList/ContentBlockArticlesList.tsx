import { getContentUrl } from "utils/utils";
import { ContentCard, LinkText } from "components/atom";
import classNames from "classnames";
import ContentGrid, { ListLayout } from "../ContentGrid/ContentGrid";

interface ArticleListInterface {
  id: string;
  title?: string;
  buttonText?: string;
  buttonPath?: string;
  body?: string;
  items: any;
  cycleNum?: number;
  max?: number;
  layout?: ListLayout;
}

const ContentBlockArticleList = ({
  id,
  title,
  body,
  items,
  buttonPath,
  buttonText,
  cycleNum = Math.floor(Math.random() * 4),
  max = 6,
  layout = "feature",
}: ArticleListInterface) => {
  items = items.filter((post) => post != null);
  return (
    <section key={id}>
      <div className="responsive-container pt-xl" key={id}>
        <div className={`w-full border-t-2 pt-md flex justify-between`}>
          <div>
            {title && (
              <h3 className="font-sans type-preset-3  font-bold">{title} </h3>
            )}
            {body && (
              <p
                className={`font-sans pt-lg type-preset-5 text-gray-700 mb-sm`}
              >
                {body}
              </p>
            )}
          </div>
          <div>
          {buttonPath != null && (
       
          <LinkText href={buttonPath} variant="default" color="sage">
            {buttonText ?? "See more"}
          </LinkText>
      )}
          </div>
        </div>
      </div>
      <ContentGrid
        id={"id"}
        items={items}
        contentType={"posts"}
        layout={layout}
        cycleNum={cycleNum}
      />
     
    </section>
  );
};

export default ContentBlockArticleList;
