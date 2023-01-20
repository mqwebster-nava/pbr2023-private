import classNames from "classnames";
import { useEffect, useState } from "react";
import ActiveFilterItems from "./ActiveFiltersList";
import FilterDropdownList from "./FilterDropdownList";
import ResetFilterButton from "./ResetFilterButton";



const contentTypes = [
  "Insight",
  "Case Study",
  "Toolkit",
  "News",
  "Events",
  "Working at Nava",
  "Public Benefit Report",
];


const FilterBar = ({ tags, filterBarState, setFilterBarState, numResults, displayedPosts }) => {
  const [isContentTypeOpen, setIsContentTypeOpen] = useState(false);
  const [isCapabilitiesOpen, setIsCapabilitiesOpen] = useState(false);
  const [isSectorsOpen, setIsSectorsOpen] = useState(false);
  

  const handleChange = (type, checkboxElement, name) => {
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
  const handleClear = (type) => {
    setFilterBarState((previousState) => {
      let v = { ...previousState };
      v[type] = [];
      return v;
    });
  };


  return (
    <div className="relative pt-xl"
    onMouseLeave={()=>{
      setIsSectorsOpen(false);
      setIsCapabilitiesOpen(false)
      setIsContentTypeOpen(false)
    }}
    >
      <div className="flex justify-between align-bottom gap-x-md">
       
          <FilterButton
            isOpen={isSectorsOpen}
            setIsOpen={(open) => {
              setIsSectorsOpen(open);
              setIsCapabilitiesOpen(false)
              setIsContentTypeOpen(false)
            }}
            title={`Sectors ${
              filterBarState.sectors.length > 0
                ? "(" + filterBarState.sectors.length + ")"
                : ""
            }`}
          />
          <FilterButton
            isOpen={isCapabilitiesOpen}
            setIsOpen={(open) => {
              setIsCapabilitiesOpen(open);
              setIsContentTypeOpen(false)
              setIsSectorsOpen(false)
            }}
            title={`Capabilities ${
              filterBarState.capabilities.length > 0
                ? "(" + filterBarState.capabilities.length + ")"
                : ""
            }`}
          />
           <FilterButton
            isOpen={isContentTypeOpen}
            setIsOpen={(open)=>{
              setIsContentTypeOpen(open)
              setIsCapabilitiesOpen(false)
              setIsSectorsOpen(false)
            }}
            title={`Content Types ${filterBarState.contentTypes.length>0 ? "("+filterBarState.contentTypes.length+")": ""}`}
          /> 
          
     
        <div className="w-full "
         onMouseEnter={()=>{
          setIsSectorsOpen(false);
          setIsCapabilitiesOpen(false)
          setIsContentTypeOpen(false)
        }}
        >

      
          { (filterBarState.sectors.length > 0 || filterBarState.capabilities.length > 0  || filterBarState.contentTypes.length > 0  ) && 
           <ResetFilterButton type={"tags"} onClick={() =>{ handleClear("contentTypes");  handleClear("sectors");  handleClear("capabilities")}} title={"Clear all"} isActive={true}/>
          }
            </div>
      </div>
      <div className="">
        <FilterDropdownList
          title={"Sector"}
          type={"sectors"}
          isOpen={isSectorsOpen}
          setIsOpen={(open) => {
            setIsSectorsOpen(open);
          }}
          handleChange={handleChange}
          handleClearClick={() => handleClear("sectors")}
          currentlyActive={filterBarState.sectors}
          items={[]}
          displayedPosts={displayedPosts}
        />
        <FilterDropdownList
          title={"Capabilities"}
          type={"capabilities"}
          isOpen={isCapabilitiesOpen}
          setIsOpen={(open)=>{
            setIsCapabilitiesOpen(open)
            
          }}
          handleChange={handleChange}
          handleClearClick={()=> handleClear("capabilities")}
          items={[]}
          currentlyActive={filterBarState.capabilities}
          displayedPosts={displayedPosts}
        />
        <FilterDropdownList
          title={"content type"}
          type={"contentTypes"}
          isOpen={isContentTypeOpen}
          setIsOpen={(open)=>{
            setIsContentTypeOpen(open)
          }}
          handleChange={handleChange}
          handleClearClick={()=> handleClear("contentTypes")}
          items={contentTypes}
          currentlyActive={filterBarState.contentTypes}
          displayedPosts={displayedPosts}
        />
       
      </div>
      <div className="pt-sm">
        <p>{`${numResults} posts found`}</p>
      </div>
    </div>
  );
};

export default FilterBar;

export const FilterButton = ({ isOpen, setIsOpen, title }) => (
  <button
    id="dropdownCheckboxButton"
    data-dropdown-toggle="dropdownDefaultCheckbox"
    className={`min-w-[200px] text-black border-black border-[1px] ${isOpen&&"bg-sage-100"} hover:bg-sage-100 type-preset-6  px-md py-sm  inline-flex items-center justify-between`}
    type="button"
    onMouseEnter={()=>setIsOpen(true)}
    onFocus={()=>setIsOpen(true)}
    onClick={() => {
      setIsOpen(!isOpen);
    }}
  >
    {title}
    <svg
      className={`ml-2 w-4 h-4 transition ${isOpen&& "rotate-180"}`}
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



  // const handleChanges = (type, changes) => {
  //   let currentList = filterBarState[type];
  //   changes.forEach(([checkboxElement, name]) => {
  //     if (checkboxElement.checked && !filterBarState[type].includes(name)) {
  //       currentList.push(name);
  //     } else if (!checkboxElement.checked) {
  //       currentList = currentList.filter((n) => name != n);
  //     }
  //   });
  //   setFilterBarState((previousState) => {
  //     let r = { ...previousState };
  //     r[type] = currentList;
  //     return r;
  //   });
  // };

    {/* <div className="pt-sm">
       
           <div className="flex gap-md py-sm flex-wrap w-full">

        <ActiveFilterItems
          title={"sectors"}
          type={"sectors"}
          handleClearClick={() => handleClear("sectors")}
          handleChange={handleChanges}
          activeItems={filterBarState.sectors}
        />
        <ActiveFilterItems
          title={"capabilities"}
          type={"capabilities"}
          handleClearClick={() => handleClear("capabilities")}
          handleChange={handleChanges}
          activeItems={filterBarState.capabilities}
        />
        <ActiveFilterItems
          title={"content types"}
          type={"contentTypes"}
          handleClearClick={()=>handleClear("contentTypes")}
          handleChange={handleChanges}
          activeItems={filterBarState.contentTypes}
        />
        </div></div> */}
{
  /* <ResetFilterButton
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


      <div>
          
           <ResetFilterButton
            type={"tag"}
            activetitle={"Clear all"}
            inactiveTitle={"Showing all"}
            isActive={filterBarState.tags.length > 0 }
            onClick={() =>
              setFilterBarState((previousState) => {
                return { ...previousState, tags: [] };
              })
            }
          />
       
        </div>
       
      
      */
}

// const handleContentTypeChange = (checkboxElement, name) => {
//   if (checkboxElement.checked && !filterBarState.contentTypes.includes(name)) {
//     setFilterBarState((previousState) => {
//       let contentTypes = [...previousState.contentTypes];
//       contentTypes.push(name);
//       return { ...previousState, contentTypes };
//     });
//   } else if(!checkboxElement.checked){
//     setFilterBarState((previousState) => {
//       return {
//         ...previousState,
//         contentTypes: previousState.contentTypes.filter(
//           (type) => name != type
//         ),
//       };
//     });
//   }
// };
// const handleTagChange = (checkboxElement, name) => {
//   if (checkboxElement.checked && !filterBarState.tags.includes(name)) {
//     setFilterBarState((previousState) => {
//       let tags = [...previousState.tags];
//       tags.push(name);
//       return { ...previousState, tags };
//     });
//   } else if(!checkboxElement.checked){
//     setFilterBarState((previousState) => {
//       return {
//         ...previousState,
//         tags: previousState.tags.filter((tag) => name != tag),
//       };
//     });
//   }
// };
