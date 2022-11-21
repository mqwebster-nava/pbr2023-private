import { useState } from "react";

const FilterBar = ({ tags, filterBarState, setFilterBarState }) => {
  const [isContentTypeOpen, setIsContentTypeOpen] = useState(false);
  const [isTagsOpen, setIsTagsOpen] = useState(false);
  const contentTypes = ["Insight", "Case Study", "Toolkit", "News", "Events"];

  const handleContentTypeChange = (e, option) => {
    console.log(e.checked, option);
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
    <div className="grid grid-cols-2">
      <div className="relative col-span-1">
        <div>
          <FilterButton
            isOpen={isTagsOpen}
            setIsOpen={setIsTagsOpen}
            title={"Topics"}
          />
          <ResetFilterButton type={"tag"} title={filterBarState.tags.length>0?"Show all":"Showing all topics"} onClick={()=>setFilterBarState((previousState) => {
                return { ...previousState, tags: [] };
              })}/>
        </div>
        <FilterDropdownList type={"tag"} isOpen={isTagsOpen} handleChange={handleTagChange} items={tags} />
        <ActiveFilterItems handleChange={handleTagChange} activeItems={filterBarState.tags}/>
       
      </div>
      <div className="relative">
        <div>
          <FilterButton
            isOpen={isContentTypeOpen}
            setIsOpen={setIsContentTypeOpen}
            title={"Content Types"}
          />
            <ResetFilterButton type={"contentType"} title={filterBarState.contentTypes.length>0?"Show all":"Showing all types"} onClick={()=>setFilterBarState((previousState) => {
                return { ...previousState, contentTypes: [] };
              })}/>
        </div>
        <FilterDropdownList type={"contentType"} isOpen={isContentTypeOpen} handleChange={handleContentTypeChange} items={contentTypes} />
        <ActiveFilterItems handleChange={handleContentTypeChange} activeItems={filterBarState.contentTypes}/>
       
      </div>
    </div>
  );
};

export default FilterBar;

const FilterButton = ({ isOpen, setIsOpen, title }) => (
  <button
    id="dropdownCheckboxButton"
    data-dropdown-toggle="dropdownDefaultCheckbox"
    className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
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
const FilterDropdownList= ({ isOpen, handleChange, items, type}) =>(
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
      {items.map((item) => {
        return (
          <li>
            <div className="flex items-center">
              <input
                onChange={(e) => handleChange(e.target, item)}
                id={`${item}-checkbox`}
                type="checkbox"
                value={item}
                className={`${type}CheckBox w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500`}
              />
              <label
                htmlFor={`${item}-checkbox`}
                className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
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


const ActiveFilterItems= ({handleChange, activeItems}) =>(
<div className="flex gap-md py-sm">
{activeItems.map((item) => {
  return (
    <button
      className="bg-navy-50 p-sm"
      onClick={() => {
        let checkbox = document.getElementById(`${item}-checkbox`);
        // @ts-ignore
        checkbox.checked = false;
        handleChange(checkbox,item);
      }}
    >
      {item} x
    </button>
  );
})}
</div>);