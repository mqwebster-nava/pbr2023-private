
import {  LinkText } from "components/atom";
import HorizontalLine from "components/atom/HorizontalLine/HorizontalLine";
import React from "react";

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
  items = items.filter((post) => post != null);
  return (
    <section key={id} className="pt-xl pb-4xl" >
      <div className="responsive-container" key={id}>
      {title &&  <HorizontalLine variant="light"/>}
        <div className={`w-full pt-md flex justify-between `}>
          <div className="md:w-3/4 ">
            {title && (
              <h2 className="font-sans type-preset-3  font-bold">{title} </h2>
            )}
            {body && (
              <p
                className={`font-sans pt-lg type-preset-5 text-gray-700 mb-sm`}
              >
                {body}
              </p>
            )}
          </div>
          <div className="hidden md:inline-block">
          {buttonPath != null && (
          <LinkText href={buttonPath} variant="default" color="sage" analyticsLabel="article-feed">
            {buttonText ?? "See more"}
          </LinkText>
      )}
          </div>
        </div>
      </div>
      <div className="pt-xl">
      <ContentGrid
        id={"id"}
        items={items}
        contentType={"posts"}
        layout={layout}
      />
       <div className="responsive-container md:hidden  py-lg flex justify-end">
          {buttonPath != null && (
          <LinkText href={buttonPath} variant="default" color="sage" analyticsLabel="article-feed">
            {buttonText ?? "See more"}
          </LinkText>
      )}
          </div>
     </div>
    </section>
  );
};

export default ArticleFeed;
