import { useState } from "react";

const FilterBar = ({ tags, filterBarState, setFilterBarState, numResults }) => {
  const [isContentTypeOpen, setIsContentTypeOpen] = useState(false);
  const [isTagsOpen, setIsTagsOpen] = useState(false);
  const contentTypes = [
    "Insight",
    "Case Study",
    "Toolkit",
    "News",
    "Events",
    "Working at Nava",
  ];

  const handleContentTypeChange = (e, option) => {
    if (e.checked) {
      setFilterBarState((previousState) => {
        let contentTypes = [...previousState.contentTypes];
        contentTypes.push(option);
        return { ...previousState, contentTypes };
      });
    } else {
      setFilterBarState((previousState) => {
        return {
          ...previousState,
          contentTypes: previousState.contentTypes.filter(
            (type) => option != type
          ),
        };
      });
    }
  };
  const handleTagChange = (e, option) => {
    if (e.checked) {
      setFilterBarState((previousState) => {
        let tags = [...previousState.tags];
        tags.push(option);
        return { ...previousState, tags };
      });
    } else {
      setFilterBarState((previousState) => {
        return {
          ...previousState,
          tags: previousState.tags.filter((tag) => option != tag),
        };
      });
    }
  };

  return (
    <div className="grid grid-cols-12">
      <div className="relative col-span-6">
        <div>
          <FilterButton
            isOpen={isTagsOpen}
            setIsOpen={setIsTagsOpen}
            title={"Topics"}
          />
          <ResetFilterButton
            type={"tag"}
            title={
              filterBarState.tags.length > 0 ? "Show all" : "Showing all topics"
            }
            onClick={() =>
              setFilterBarState((previousState) => {
                return { ...previousState, tags: [] };
              })
            }
          />
        </div>
        <FilterDropdownList
          type={"tag"}
          isOpen={isTagsOpen}
          handleChange={handleTagChange}
          items={tags}
        />
        <ActiveFilterItems
          handleChange={handleTagChange}
          activeItems={filterBarState.tags}
        />
      </div>
      <div className="relative  col-span-5">
        <div>
          <FilterButton
            isOpen={isContentTypeOpen}
            setIsOpen={setIsContentTypeOpen}
            title={"Content Types"}
          />
          <ResetFilterButton
            type={"contentType"}
            title={
              filterBarState.contentTypes.length > 0
                ? "Show all"
                : "Showing all types"
            }
            onClick={() =>
              setFilterBarState((previousState) => {
                return { ...previousState, contentTypes: [] };
              })
            }
          />
        </div>
        <FilterDropdownList
          type={"contentType"}
          isOpen={isContentTypeOpen}
          handleChange={handleContentTypeChange}
          items={contentTypes}
        />
        <ActiveFilterItems
          handleChange={handleContentTypeChange}
          activeItems={filterBarState.contentTypes}
        />
      </div>
      <div className="col-span-1">
      <p>{`${numResults} posts found`}</p>
      </div>
    </div>
  );
};

export default FilterBar;

const FilterButton = ({ isOpen, setIsOpen, title }) => (
  <button
    id="dropdownCheckboxButton"
    data-dropdown-toggle="dropdownDefaultCheckbox"
    className="text-white bg-sage-700 hover:bg-sage-800 focus:ring-4 focus:outline-none focus:ring-sage-300 font-medium rounded-xs type-preset-7 px-4 py-2.5 text-center inline-flex items-center "
    type="button"
    onClick={() => {
      setIsOpen(!isOpen);
    }}
  >
    {title}
    <svg
      className="ml-2 w-4 h-4"
      aria-hidden="true"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M19 9l-7 7-7-7"
      ></path>
    </svg>
  </button>
);

const ResetFilterButton = ({ type, onClick, title }) => (
  <button
    className="underline px-md hover:text-sage-700"
    onClick={() => {
      Array.from(document.getElementsByClassName(`${type}CheckBox`)).forEach(
        (el) => {
          // @ts-ignore
          el.checked = false;
        }
      );
      onClick();
    }}
  >
    {title}
  </button>
);
const FilterDropdownList = ({ isOpen, handleChange, items, type }) => (
  // TODO
  <div
    className={`${
      !isOpen && "hidden"
    } absolute z-10 w-48 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600`}
  >
    <ul
      className="p-3 space-y-3 text-sm text-gray-700 dark:text-gray-200"
      aria-labelledby="dropdownCheckboxButton"
    >
      {items.map((item, i) => {
        return (
          <li key={i}>
            <div className="flex items-center">
              <input
                onChange={(e) => handleChange(e.target, item)}
                id={`${item}-checkbox`}
                type="checkbox"
                value={item}
                className={`${type}CheckBox w-4 h-4  bg-gray-100 rounded border-gray-300  `}
              />
              <label
                htmlFor={`${item}-checkbox`}
                className="ml-2 type-preset-6 font-medium text-gray-900 dark:text-gray-300"
              >
                {item}
              </label>
            </div>
          </li>
        );
      })}
    </ul>
  </div>
);

const ActiveFilterItems = ({ handleChange, activeItems }) => (
  <div className="flex gap-md py-sm flex-wrap w-full">
    {activeItems.map((item) => {
      return (
        <button
          className={` group
          border-gray-400 border-2 p-sm type-preset-7 flex gap-md items-center
           hover:bg-gray-100`}
          onClick={() => {
            let checkbox = document.getElementById(`${item}-checkbox`);
            // @ts-ignore
            checkbox.checked = false;
            handleChange(checkbox, item);
          }}
        >
          <div>{item} </div>
          <svg
            width="12"
            height="12"
            viewBox="0 0 48 48"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="pt-xs  stroke-black group-hover:stroke-red-700 "
          >
            <g clip-path="url(#clip0_334_3846)">
              <line
                x1="3"
                y1="44.4645"
                x2="44.4645"
                y2="3"
                stroke-width="5"
                stroke-linecap="round"
              />
              <line
                x1="3.53553"
                y1="3"
                x2="45"
                y2="44.4645"
                stroke-width="5"
                stroke-linecap="round"
              />
            </g>
            <defs>
              <clipPath id="clip0_334_3846">
                <rect width="48" height="48" fill="white" />
              </clipPath>
            </defs>
          </svg>
        </button>
      );
    })}
  </div>
);
