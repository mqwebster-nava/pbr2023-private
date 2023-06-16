
import { clearArrays, combineArrays } from "utils/utils";
import ActiveFilterItems from "./ActiveFiltersList";
import { getActiveFilters } from "./filteredPostsHook";
import FilterModal, { FILTER_CHANGE } from "./FilterModal";


const FilterBar = ({ categories, filterBarState, setFilterBarState, getCount, isMenuOpen, setIsMenuOpen }) => {
 
  const handleChange = ({type, checkboxElement, name}:FILTER_CHANGE) => {
    let currentList = filterBarState[type];
    if (checkboxElement.checked && !filterBarState[type].includes(name)) {
      currentList.push(name);
    } else if (!checkboxElement.checked) {
      currentList = currentList.filter((n) => name != n);
    }
    setFilterBarState((previousState) => {
      let r = { ...previousState };
      r[type] = currentList;
      return r;
    });
  };



  const handleClear = () => {
    setFilterBarState((previousState) => {
      return clearArrays({ ...previousState });
    });
  };


  return (
    <div className="md:pt-xl " >
       {/* <div className="w-full grid md:grid-cols-12">
         <div className="flex gap-md py-sm flex-wrap w-full divide-x-[1px] divide-black md:col-span-10">
          {
            Object.keys(filterBarState).filter((key)=>filterBarState[key].length>0).map((key, i) => {
              return <ActiveFilterItems
              key={`activeitems-${key}`}
              type={key}
              handleClearClick={() => handleClear()}
              handleChange={handleChange}
              activeItems={filterBarState[key]}
              i={i}
            />
            })
          }
        </div>
      </div> */}

      <div className="pt-sm">
        <FilterModal
          title={"Filters"}
          isOpen={isMenuOpen}
          setIsOpen={(open) => {
            setIsMenuOpen(open);
          } }
          handleChange={handleChange}
          handleClearClick={() => handleClear()}
          currentlyActive={combineArrays(filterBarState)}
          categories={categories}
          getCount={getCount}
        />
      </div>
    </div>
  );
};

export default FilterBar;