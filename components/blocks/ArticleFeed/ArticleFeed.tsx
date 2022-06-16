
import {  LinkText } from "components/atom";

import ContentGrid, { ListLayout } from "./ContentGrid";



interface ArticleFeedInterface {
  id: string;
  title?: string;
  buttonText?: string;
  buttonPath?: string;
  body?: string;
  items: any;
  max?: number;
  layout?: ListLayout;
}

const ArticleFeed = ({
  id,
  title,
  body,
  items,
  buttonPath,
  buttonText,
  max = 6,
  layout,
}: ArticleFeedInterface) => {
  layout ??= "1 large 2 small cards row";
  console.log(layout);
  items = items.filter((post) => post != null);
  return (
    <section key={id} >
      <div className="responsive-container pt-xl" key={id}>
        <div className={`w-full pt-md flex justify-between ${title && "border-t-2"}`}>
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
      <div className="py-xl">
      <ContentGrid
        id={"id"}
        items={items}
        contentType={"posts"}
        layout={layout}
      />
     </div>
    </section>
  );
};

export default ArticleFeed;
