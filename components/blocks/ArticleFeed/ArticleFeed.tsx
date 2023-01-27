import HorizontalLine from "components/atom/HorizontalLine/HorizontalLine";
import { LinkText } from "components/atom/LinkText/LinkText";
import { ContentTagInterface } from "lib/data_models/post_interface";
import React, { useEffect, useState } from "react";

import ContentGrid, { ListLayout } from "./ContentGrid";
import FilterBar, { FilterButton } from "./FilterBar/FilterBar";
import ResetFilterButton from "./FilterBar/ResetFilterButton";

interface ArticleFeedInterface {
  id?: string;
  title?: string;
  buttonText?: string;
  buttonPath?: string;
  body?: string;
  items: any;
  max?: number;
  layout?: ListLayout;
  filterable?: boolean;
  tags?: Array<ContentTagInterface>;
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
  filterable = false,
  tags = [],
}: ArticleFeedInterface) => {
  layout ??= "1 large 2 small cards row";
  items = items.filter((post) => post != null);
  const [isTagsOpen, setIsTagsOpen] = useState(false);

  const [filterBarState, setFilterBarState] = useState({
    tags: [],
  });
  // const [filterBarState, setFilterBarState ] = useState({
  //   contentType:[],
  //   sector:[],
  //   capability: []
  // });

  // TODO could format posts here
  const [displayedPosts, setDisplayedPosts] = useState(items);
  useEffect(() => {
    let _items = items;
    if (filterBarState.tags.length > 0) {
      _items = _items.filter((it) => {
        return (
          it.contentTags &&
          it.contentTags.some((tag) => filterBarState.tags.includes(tag))
        );
      });
    }

    //  if(filterBarState.sector.length>0){
    //   _items = _items.filter((it)=> {
    //     return it.contentTags && it.contentTags.some((tag)=>filterBarState.sector.includes(tag))
    //   })
    //  }
    //  if(filterBarState.capability.length>0){
    //   _items = _items.filter((it)=> {
    //     return it.contentTags && it.contentTags.some((tag)=>filterBarState.capability.includes(tag))
    //   })
    //  }
    //  if(filterBarState.contentType.length>0){
    //   _items = _items.filter((it)=> {
    //     return it.contentType && filterBarState.contentType.includes(it.contentType)
    //   })
    //  }

    if (_items !== displayedPosts) setDisplayedPosts(_items);
  }, [filterBarState]);
  return (
    <section key={id} className="pt-xl pb-4xl">
      <div className="responsive-container" key={id}>
        {title && <HorizontalLine variant="light" />}
        <div className={`w-full pt-md flex justify-between `}>
          <div className="md:w-2/3 ">
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
            {buttonPath != null ? (
              <LinkText
                href={buttonPath}
                variant="default"
                color="sage"
                analyticsLabel="article-feed"
              >
                {buttonText ?? "See more"}
              </LinkText>
            ) : null}
          </div>
        </div>
        {filterable && (
          <FilterBar
            tags={tags}
            filterBarState={filterBarState}
            setFilterBarState={setFilterBarState}
            numResults={displayedPosts.length}
            allPosts={items}
          />
        )}
      </div>
      <div className="pt-xl">
        <ContentGrid
          id={"id"}
          items={displayedPosts}
          contentType={"posts"}
          layout={layout}
        />
        <div className="responsive-container md:hidden  py-lg flex justify-end">
          {buttonPath != null && (
            <LinkText
              href={buttonPath}
              variant="default"
              color="sage"
              analyticsLabel="article-feed"
            >
              {buttonText ?? "See more"}
            </LinkText>
          )}
        </div>
      </div>
    </section>
  );
};
export default ArticleFeed;

// const handleClear = (type) => {
//   setFilterBarState((previousState) => {
//     let v = { ...previousState };
//     v[type] = [];
//     return v;
//   });
// };

//     filterable== true ?    <div className="flex gap-x-md">
//       { filterBarState.tags.length > 0 &&
//    <ResetFilterButton type={"tags"} onClick={() => handleClear("tags")} title={"Clear all"} isActive={true}/>
//   }
//   <FilterButton
//     isOpen={isTagsOpen}
//     setIsOpen={(open) => {
//       setIsTagsOpen(open);
//       //setIsContentTypeOpen(false)
//     }}
//     title={`Filters ${
//       filterBarState.tags.length > 0
//         ? "(" + filterBarState.tags.length + ")"
//         : ""
//     }`}
//   />

// </div>: null
