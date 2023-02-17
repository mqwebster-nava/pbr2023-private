import { Button } from "components/atom/Button/Button";
import HorizontalLine from "components/atom/HorizontalLine/HorizontalLine";
import { LinkText } from "components/atom/LinkText/LinkText";
import { ContentTagInterface } from "lib/data_models/post_interface";
import React, { useEffect, useState } from "react";
import { clearArrays, combineArrays } from "utils/utils";

import ContentGrid, { ListLayout } from "./ContentGrid";
import FilterBar from "./FilterBar/FilterBar";
import FilterButton from "./FilterBar/FilterButton";
import ResetFilterButton from "./FilterBar/ResetFilterButton";
import useFilteredPosts from "./FilterBar/filteredPostsHook";

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
 
  let categories = {
    Type: [
      "Case Study",
      "Insight",
      "News",
      "Working at Nava",
      "Events",
      "Toolkit",
    ],
  };
  tags.forEach((t) => {
    if (!t.type) return;
    if (!(t.type in categories)) {
      categories[t.type] = [];
    }
    categories[t.type].push(t.name);
  });

  const [displayedPosts, filterBarState, setFilterBarState, getCount] =
    useFilteredPosts(items, categories, filterable);

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const FilterButtons = () => {
    return (
      <div className="flex gap-x-md">
        {combineArrays(filterBarState).length > 0 && (
          <ResetFilterButton
            type={"tags"}
            onClick={() => {
              setFilterBarState(clearArrays(filterBarState));
            }}
            title={"Clear all"}
            isActive={true}
          />
        )}
        <Button
        height="slim"
          onClick={() => {
            setIsMenuOpen(true);
            
          }}
          >
           {`Filters ${
            combineArrays(filterBarState).length > 0
              ? "(" + combineArrays(filterBarState).length + ")"
              : ""
          }`}

<svg
  xmlns="http://www.w3.org/2000/svg"
  width="22"
  height="20"
  viewBox="0 0 26 24"
  fill="none"
  className="ml-sm"
>
  <path
    d="M10.1747 11.952L1 1H25.2096L15.8908 11.952V20.1179L10.1747 23V11.952Z"
    stroke="white"
    stroke-linejoin="round"
  />
</svg>
          </Button>
       
      </div>
    )
  }



  return (
    <section key={id} className="pt-xl pb-4xl">
      <div className="responsive-container" key={id}>
        {title && <HorizontalLine variant="light" />}
        <div className={`w-full pt-md flex justify-between items-center `}>
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
            ) : filterable ? <FilterButtons/> : null}
          </div>
        </div>
        {filterable && (
          <>
            <div className="md:hidden  pt-lg ">
            <FilterButtons/>
          </div>
          <FilterBar
            categories={categories}
            filterBarState={filterBarState}
            setFilterBarState={setFilterBarState}
            getCount={getCount}
            isMenuOpen={isMenuOpen}
            setIsMenuOpen={setIsMenuOpen}
          />
          </>
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
          ) }
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

//   filterable== true ?    <div className="flex gap-x-md">
//     { filterBarState.tags.length > 0 &&
//  <ResetFilterButton type={"tags"} onClick={() => handleClear("tags")} title={"Clear all"} isActive={true}/>
// }
// <FilterButton
//   isOpen={isTagsOpen}
//   setIsOpen={(open) => {
//     setIsTagsOpen(open);
//     //setIsContentTypeOpen(false)
//   }}
//   title={`Filters ${
//     filterBarState.tags.length > 0
//       ? "(" + filterBarState.tags.length + ")"
//       : ""
//   }`}
// />

// </div>: null

// if (filterBarState.tags.length > 0) {
//   _items = _items.filter((it) => {
//     return (
//       it.contentTags &&
//       it.contentTags.some((tag) => filterBarState.tags.includes(tag))
//     );
//   });
// }

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
