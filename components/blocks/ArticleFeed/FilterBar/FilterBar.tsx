import classNames from "classnames";
import { useEffect, useState } from "react";
import ActiveFilterItems from "./ActiveFiltersList";
import FilterDropdownList from "./FilterDropdownList";
import ResetFilterButton from "./ResetFilterButton";



const FilterBar = ({ tags, filterBarState, setFilterBarState, numResults, allPosts }) => {
 // const [isContentTypeOpen, setIsContentTypeOpen] = useState(false);
  //const [isCapabilitiesOpen, setIsCapabilitiesOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  let categories = {}
  tags.forEach((t)=>{
    if(!t.type) return
    if(!(t.type in categories)){
      categories[t.type]=[]
    }
    categories[t.type].push(t.name)

  })

  const handleChange = (type, checkboxElement, name) => {
    let currentList = filterBarState["tags"];
    if (checkboxElement.checked && !filterBarState["tags"].includes(name)) {
      currentList.push(name);
    } else if (!checkboxElement.checked) {
      currentList = currentList.filter((n) => name != n);
    }
    setFilterBarState((previousState) => {
      let r = { ...previousState };
      r["tags"] = currentList;
      return r;
    });
  };
  const handleClear = () => {
    setFilterBarState((previousState) => {
      let v = { ...previousState };
      v["tags"] = [];
      return v;
    });
  };
  const getCount = (type, item) => {
    //let l =  type=="contentTypes" ? displayedPosts?.filter((post)=>post.contentType==item) : 
    let l =  allPosts?.filter((post)=>post.contentTags&&post.contentTags.includes(item));
    // Object.keys(categories).map((cat)=>{ 
    //   if(cat!==type && filterBarState[cat].length>0){
    //     if(cat=="contentTypes"){
    //       l = l.filter((post)=>filterBarState[cat].includes(post.contentType))
    //     } else{
    //       l = l.filter((post)=>post?.contentTag?.some((tag)=>filterBarState[cat].includes(tag)));
    //     }
    //   }

    // });
    return l.length;

  };

  // const getCount = (type, item) => {
  //   let l =  type=="contentTypes" ? displayedPosts?.filter((post)=>post.contentType==item) : displayedPosts?.filter((post)=>post.contentTags&&post.contentTags.includes(item));
  //   Object.keys(categories).map((cat)=>{ 
  //     if(cat!==type && filterBarState[cat].length>0){
  //       if(cat=="contentTypes"){
  //         l = l.filter((post)=>filterBarState[cat].includes(post.contentType))
  //       } else{
  //         l = l.filter((post)=>post?.contentTag?.some((tag)=>filterBarState[cat].includes(tag)));
  //       }
  //     }

  //   });
  //   return l.length;

  // };

  return (
    <div className="relative pt-xl"
    onMouseLeave={()=>{
      setIsMenuOpen(false);
      //setIsCapabilitiesOpen(false)
     // setIsContentTypeOpen(false)
    }}
    >
      <div className="flex justify-between align-bottom gap-x-md">
       
          <FilterButton
            isOpen={isMenuOpen}
            setIsOpen={(open) => {
              setIsMenuOpen(open);
              //setIsCapabilitiesOpen(false)
              //setIsContentTypeOpen(false)
            }}
            title={`Filters ${
              filterBarState.tags.length > 0
                ? "(" + filterBarState.tags.length + ")"
                : ""
            }`}
          />
        <div className="w-full "
         onMouseEnter={()=>{
          setIsMenuOpen(false);
        }}
        >

      
          { (filterBarState.tags.length > 0 /* || filterBarState.capability.length > 0  || filterBarState.contentType.length > 0  */) && 
           <ResetFilterButton type={"tags"} onClick={() =>{   handleClear(); }} title={"Clear all"} isActive={true}/>
          }
            </div>
      </div>
      <div className="">
        <FilterDropdownList
          title={"Filters"}
          type={"tags"}
          isOpen={isMenuOpen}
          setIsOpen={(open) => {
            setIsMenuOpen(open);
          }}
          handleChange={handleChange}
          handleClearClick={() => handleClear()}
          currentlyActive={filterBarState.tags}
          categories={categories}
          getCount={getCount}
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
      className={`ml-2 w-4 h-4 transition duration-300 ${isOpen&& "rotate-180"}`}
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




// const categories = {
//   sectors: [
//     "healthcare",
//     "integrated benefits",
//     "paid family medical leave",
//     "unemployment insurance",
//     "Veterans",
//     "WIC",
//   ],
//   capabilities: [
//     "accessibility and equity",
//     "adapting to change",
//     "agile development",
//     "APIs and documentation",
//     "backend engineering",
//     "cloud infrastructure",
//     "content strategy",
//     "continuous improvement",
//     "crisis response",
//     "frontend engineering",
//     "human-centered design",
//     "modernization",
//     "policy",
//     "product management",
//     "program management",
//     "program outcomes",
//     "rapid delivery",
//     "reducing risk",
//     "scalable solutions",
//     "user experience research",
//     "mission and impact",
//   ],
//   contentTypes: [
//     "Insight",
//     "Case Study",
//     "Toolkit",
//     "News",
//     "Events",
//     "Working at Nava",
//     "Public Benefit Report",
//   ],
//   // Other: ["a day at Nava", "careers", "what we're learning"],
// };

// const FilterBar = ({ tags, filterBarState, setFilterBarState, numResults, displayedPosts }) => {
//  // const [isContentTypeOpen, setIsContentTypeOpen] = useState(false);
//   //const [isCapabilitiesOpen, setIsCapabilitiesOpen] = useState(false);
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   let categories = {}
//   tags.forEach((t)=>{
//     if(!t.type) return
//     if(!(t.type in categories)){
//       categories[t.type]=[]
//     }
//     categories[t.type].push(t.name)

//   })
//   console.log(categories)
  

//   const handleChange = (type, checkboxElement, name) => {
//     let currentList = filterBarState[type];
//     if (checkboxElement.checked && !filterBarState[type].includes(name)) {
//       currentList.push(name);
//     } else if (!checkboxElement.checked) {
//       currentList = currentList.filter((n) => name != n);
//     }
//     setFilterBarState((previousState) => {
//       let r = { ...previousState };
//       r[type] = currentList;
//       return r;
//     });
//   };
//   const handleClear = (type) => {
//     setFilterBarState((previousState) => {
//       let v = { ...previousState };
//       v[type] = [];
//       return v;
//     });
//   };

//   const getCount = (type, item) => {
//     let l =  type=="contentTypes" ? displayedPosts?.filter((post)=>post.contentType==item) : displayedPosts?.filter((post)=>post.contentTags&&post.contentTags.includes(item));
//     Object.keys(categories).map((cat)=>{ 
//       if(cat!==type && filterBarState[cat].length>0){
//         if(cat=="contentTypes"){
//           l = l.filter((post)=>filterBarState[cat].includes(post.contentType))
//         } else{
//           l = l.filter((post)=>post?.contentTag?.some((tag)=>filterBarState[cat].includes(tag)));
//         }
//       }

//     });
//     return l.length;

//   };

//   return (
//     <div className="relative pt-xl"
//     onMouseLeave={()=>{
//       setIsMenuOpen(false);
//       //setIsCapabilitiesOpen(false)
//      // setIsContentTypeOpen(false)
//     }}
//     >
//       <div className="flex justify-between align-bottom gap-x-md">
       
//           <FilterButton
//             isOpen={isMenuOpen}
//             setIsOpen={(open) => {
//               setIsMenuOpen(open);
//               //setIsCapabilitiesOpen(false)
//               //setIsContentTypeOpen(false)
//             }}
//             title={`Filters ${
//               filterBarState.sector.length > 0
//                 ? "(" + filterBarState.sector.length + ")"
//                 : ""
//             }`}
//           />
//           {/* <FilterButton
//             isOpen={isCapabilitiesOpen}
//             setIsOpen={(open) => {
//               setIsCapabilitiesOpen(open);
//               setIsContentTypeOpen(false)
//               setIsSectorsOpen(false)
//             }}
//             title={`Capabilities ${
//               filterBarState.capabilities.length > 0
//                 ? "(" + filterBarState.capabilities.length + ")"
//                 : ""
//             }`}
//           />
//            <FilterButton
//             isOpen={isContentTypeOpen}
//             setIsOpen={(open)=>{
//               setIsContentTypeOpen(open)
//               setIsCapabilitiesOpen(false)
//               setIsSectorsOpen(false)
//             }}
//             title={`Content Types ${filterBarState.contentTypes.length>0 ? "("+filterBarState.contentTypes.length+")": ""}`}
//           /> 
//            */}
     
//         <div className="w-full "
//          onMouseEnter={()=>{
//           setIsMenuOpen(false);
//         }}
//         >

      
//           { (filterBarState.sector.length > 0 || filterBarState.capability.length > 0  || filterBarState.contentType.length > 0  ) && 
//            <ResetFilterButton type={"tags"} onClick={() =>{   handleClear("sector"); }} title={"Clear all"} isActive={true}/>
//           }
//             </div>
//       </div>
//       <div className="">
//         <FilterDropdownList
//           title={"Filters"}
//           type={"sector"}
//           isOpen={isMenuOpen}
//           setIsOpen={(open) => {
//             setIsMenuOpen(open);
//           }}
//           handleChange={handleChange}
//           handleClearClick={() => handleClear("sector")}
//           currentlyActive={filterBarState.sector}
//           items={categories['sector']}
//           getCount={getCount}
//         />
//         {/* <FilterDropdownList
//           title={"Capabilities"}
//           type={"capabilities"}
//           isOpen={isCapabilitiesOpen}
//           setIsOpen={(open)=>{
//             setIsCapabilitiesOpen(open)
            
//           }}

//           handleChange={handleChange}
//           handleClearClick={()=> handleClear("capabilities")}
//           items={categories.capabilities}
//           currentlyActive={filterBarState.capabilities}
//           getCount={getCount}
//         /> */}
//         {/* <FilterDropdownList
//           title={"content type"}
//           type={"contentTypes"}
//           isOpen={isContentTypeOpen}
//           setIsOpen={(open)=>{
//             setIsContentTypeOpen(open)
//           }}
//           handleChange={handleChange}
//           handleClearClick={()=> handleClear("contentTypes")}
//           items={categories.contentTypes}
//           currentlyActive={filterBarState.contentTypes}
//           getCount={getCount}
//         /> */}
       
//       </div>
//       <div className="pt-sm">
//         <p>{`${numResults} posts found`}</p>
//       </div>
//     </div>
//   );
// };

// export default FilterBar;

// export const FilterButton = ({ isOpen, setIsOpen, title }) => (
//   <button
//     id="dropdownCheckboxButton"
//     data-dropdown-toggle="dropdownDefaultCheckbox"
//     className={`min-w-[200px] text-black border-black border-[1px] ${isOpen&&"bg-sage-100"} hover:bg-sage-100 type-preset-6  px-md py-sm  inline-flex items-center justify-between`}
//     type="button"
//     onMouseEnter={()=>setIsOpen(true)}
//     onFocus={()=>setIsOpen(true)}
//     onClick={() => {
//       setIsOpen(!isOpen);
//     }}
//   >
//     {title}
//     <svg
//       className={`ml-2 w-4 h-4 transition duration-300 ${isOpen&& "rotate-180"}`}
//       aria-hidden="true"
//       fill="none"
//       stroke="currentColor"
//       viewBox="0 0 24 24"
//       xmlns="http://www.w3.org/2000/svg"
//     >
//       <path
//         strokeLinecap="round"
//         strokeLinejoin="round"
//         strokeWidth="2"
//         d="M19 9l-7 7-7-7"
//       ></path>
//     </svg>
//   </button>
// );

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
