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
      "Public Benefit Report",
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
      <div className="flex">
        <Button
          onClick={() => {
            var element_to_scroll_to = document.getElementById(id);
            element_to_scroll_to.scrollIntoView();
            setIsMenuOpen((prevState) => !prevState);
          }}
        >
          {`Filter Insights`}

          <svg
            width="22"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="ml-lg"
          >
            <g clipPath="url(#clip0_2001_174)">
              <path
                d="M3.42857 5.99997C4.84873 5.99997 6 4.84871 6 3.42855C6 2.00838 4.84873 0.857117 3.42857 0.857117C2.00841 0.857117 0.857143 2.00838 0.857143 3.42855C0.857143 4.84871 2.00841 5.99997 3.42857 5.99997Z"
                stroke="white"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M6 3.42853H23.1429"
                stroke="white"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M12 14.5714C13.4202 14.5714 14.5714 13.4201 14.5714 12C14.5714 10.5798 13.4202 9.42853 12 9.42853C10.5798 9.42853 9.42857 10.5798 9.42857 12C9.42857 13.4201 10.5798 14.5714 12 14.5714Z"
                stroke="white"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M0.857143 12H9.42857"
                stroke="white"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M14.5714 12H23.1429"
                stroke="white"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M20.5714 23.1429C21.9916 23.1429 23.1429 21.9916 23.1429 20.5714C23.1429 19.1513 21.9916 18 20.5714 18C19.1513 18 18 19.1513 18 20.5714C18 21.9916 19.1513 23.1429 20.5714 23.1429Z"
                stroke="white"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M18 20.5714H0.857143"
                stroke="white"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </g>
            <defs>
              <clipPath id="clip0_2001_174">
                <rect width="24" height="24" fill="white" />
              </clipPath>
            </defs>
          </svg>
        </Button>

        {combineArrays(filterBarState).length > 0 && (
          <ResetFilterButton
            type={"tags"}
            onClick={() => {
              setFilterBarState(clearArrays(filterBarState));
            }}
            title={`Clear ${displayedPosts.length} insight${
              displayedPosts.length > 1 ? "s" : ""
            }`}
            isActive={true}
          />
        )}
      </div>
    );
  };

  return (
    <section key={id} id={id} className="pt-xl pb-4xl">
      <div className="responsive-container" key={id}>
        {/* {title && <HorizontalLine variant="light" />} */}
        <div className={`w-full pt-md flex justify-between items-center `}>
          {/* <div className="md:w-2/3 ">
            {title && (
              <h2 className="font-sans type-preset-3 font-bold">{title} </h2>
            )}

            {body && (
              <p
                className={`font-sans pt-lg type-preset-5 text-gray-700 mb-sm`}
              >
                {body}
              </p>
            )}
          </div> */}

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
            ) : filterable ? (
              <FilterButtons />
            ) : null}
          </div>
        </div>

        {filterable && (
          <>
            <div className="md:hidden pt-lg">
              <FilterButtons />
            </div>

            <FilterBar
              categories={categories}
              filterBarState={filterBarState}
              setFilterBarState={setFilterBarState}
              getCount={getCount}
              isMenuOpen={isMenuOpen}
              setIsMenuOpen={(_isOpen) => {
                var element_to_scroll_to = document.getElementById(id);
                element_to_scroll_to.scrollIntoView();
                setIsMenuOpen(_isOpen);
              }}
            />
          </>
        )}
      </div>

      <div className="pt-2xl">
        <ContentGrid
          id={"id"}
          items={displayedPosts}
          contentType={"posts"}
          layout={layout}
        />

        <div className="responsive-container md:hidden py-lg flex justify-end">
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
