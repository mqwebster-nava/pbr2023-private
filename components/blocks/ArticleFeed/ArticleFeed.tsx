
import { ContentCardInterface } from "components/atom/ContentCard/ContentCard";
import HorizontalLine from "components/atom/HorizontalLine/HorizontalLine";
import { LinkText } from "components/atom/LinkText/LinkText";
import React from "react";
import { getContentUrl, getDateStr, getEventDateStr } from "utils/utils";

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
  // Convert all items to Content 
  let contentCards: Array<ContentCardInterface> = []
  items.forEach((item)=>{
    if(item["__typename"] == "Post" ){
      const kicker = item.contentType == "Case Study" ? item.clientName :
                           item.contentType == "News" ? getDateStr(item.date) :
                           item.contentType == "Events" ? getEventDateStr(item.date): null;
      let contentCard : ContentCardInterface = {
        id:item.id,
        kicker:kicker,
        title: item.title,
        path: getContentUrl(item.contentType, item.slug),
        image: item.promoImage,
        summary: item.shortSummary
      }
      contentCards.push(contentCard)
    }
    else contentCards.push(item)
  })



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
        items={contentCards}
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
