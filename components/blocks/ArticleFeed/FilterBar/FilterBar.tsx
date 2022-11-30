import classNames from "classnames";
import { useEffect, useState } from "react";
import FilterDropdownList from "./FilterDropdownList";

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
    "Public Benefit Report",
  ];

  const handleContentTypeChange = (checkboxElement, name) => {
    if (checkboxElement.checked && !filterBarState.contentTypes.includes(name)) {
      setFilterBarState((previousState) => {
        let contentTypes = [...previousState.contentTypes];
        contentTypes.push(name);
        return { ...previousState, contentTypes };
      });
    } else if(!checkboxElement.checked){
      setFilterBarState((previousState) => {
        return {
          ...previousState,
          contentTypes: previousState.contentTypes.filter(
            (type) => name != type
          ),
        };
      });
    }
  };
  const handleTagChange = (checkboxElement, name) => {
    if (checkboxElement.checked && !filterBarState.tags.includes(name)) {
      setFilterBarState((previousState) => {
        let tags = [...previousState.tags];
        tags.push(name);
        return { ...previousState, tags };
      });
    } else if(!checkboxElement.checked){
      setFilterBarState((previousState) => {
        return {
          ...previousState,
          tags: previousState.tags.filter((tag) => name != tag),
        };
      });
    }
  };

  return (
    <div className="flex relative">
      <div className="">
        <div>
          <FilterButton
            isOpen={isTagsOpen}
            setIsOpen={(open)=>{
              setIsTagsOpen(open)
              setIsContentTypeOpen(false)
            }}
            title={"Topics"}
          />
          <ResetFilterButton
            type={"tag"}
            activetitle={"Show all"}
            inactiveTitle={"Showing all topics"}
            isActive={filterBarState.tags.length > 0}
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
          setIsOpen={(open)=>{
            setIsTagsOpen(open)
            setIsContentTypeOpen(false)
          }}
          handleChange={handleTagChange}
          currentlyActive={filterBarState.tags}
          items={tags}
          
        />
        <ActiveFilterItems
          handleChange={handleTagChange}
          activeItems={filterBarState.tags}
        />
      </div>
      <div className="">
        <div>
          <FilterButton
            isOpen={isContentTypeOpen}
            setIsOpen={(open)=>{
              setIsContentTypeOpen(open)
              setIsTagsOpen(false)
            }}
            title={"Content Types"}
          />
          <ResetFilterButton
            type={"contentType"}
            activetitle={"Show all"}
            inactiveTitle={"Showing all types"}
            isActive={filterBarState.contentTypes.length > 0}
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
          setIsOpen={(open)=>{
            setIsContentTypeOpen(open)
            setIsTagsOpen(false)
          }}
          handleChange={handleContentTypeChange}
          items={contentTypes}
          currentlyActive={filterBarState.contentTypes}
        />
        <ActiveFilterItems
          handleChange={handleContentTypeChange}
          activeItems={filterBarState.contentTypes}
        />
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

const ResetFilterButton = ({
  type,
  onClick,
  activetitle,
  inactiveTitle,
  isActive,
}) => {
  const styles = classNames({
    "underline hover:text-sage-700": isActive,
    "text-gray-700 ": !isActive,
  });

  return (
    <button
      disabled={!isActive}
      className={` px-md ${styles}`}
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
      {isActive ? activetitle : inactiveTitle}
    </button>
  );
};

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
