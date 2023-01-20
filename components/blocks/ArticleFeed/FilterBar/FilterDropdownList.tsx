import { useEffect, useState } from "react";
import ResetFilterButton from "./ResetFilterButton";



const FilterDropdownList = ({
  title,
  isOpen,
  setIsOpen,
  getCount,
  handleChange,
  handleClearClick,
  items,
  type,
  currentlyActive = []
}) => {

//  console.log(displayedPosts);
  useEffect(() => {
    Array.from(document.getElementsByClassName(`${type}CheckBox`)).forEach(
      (el) => {
        const itemName = el.id.replace("-checkbox", "");
        // @ts-ignore // would ned to change to a button
        el.checked = currentlyActive.includes(itemName);
      }
    );
  }, [isOpen, currentlyActive]);

  function splitIntoColumns(arr, size) {
    const len = arr.length;
    var myArray = [arr.slice(0, Math.ceil(len/3)),arr.slice(Math.ceil(len/3), Math.ceil(2*len/3)), arr.slice( Math.ceil(2*len/3), len),];
    return myArray;
  }

  return (
    <div
      className={`${
        !isOpen && "hidden"
      } absolute z-10  -left-[16px] -right-[16px] bg-gray-50 mt-sm p-lg min-h-[200px] pb-xl`}
    >
      <div className="flex justify-between">
        <p className="pb-md font-bold">Filter by {title}</p>
      </div>
      <div
        className="grid grid-cols-3 w-full gap-lg"
        aria-labelledby="dropdownCheckboxButton"
      >
        {splitIntoColumns(items, 3).map((column, j) => {
          
          return (
            <div className="flex flex-col divide-y-[1px]">
              {column.map((item, i) => {
                let isActive = currentlyActive.includes(item);
                let resultNum= getCount(type, item)
                const ac = isActive
                  ? "bg-sage-50 text-gray-900"
                  : "bg-gray-50 text-gray-600 hover:bg-white";
                let acD = isActive
                  ? "stroke-black group-hover:stroke-red-700"
                  : " stroke-gray-700 rotate-45 group-hover:stroke-sage-900";
                return (
                    <div
                    key={i}
                      className={`flex group items-center p-sm type-preset-6 ${ac}`}
                    >
                      <label
                        htmlFor={`${item}-checkbox`}
                        className="font-medium w-full "
                      >
                        {`${item} (${resultNum})`}
                      </label>
                     
                        <input
                          onChange={(e) => {
                            handleChange(type, e.target, item);
                          }}
                          id={`${item}-checkbox`}
                          type="checkbox"
                          value={item}
                          className={`${type}CheckBox h-[14px] w-[14px]  `}
                        />
                    </div>
                );
              })}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default FilterDropdownList;
/*
Get post numbers
1. Which type its on
2. What it's value is

goes through and gets all the ones that matches it's type. ( currently doing) 

Then goes through the other types and makes sure one is in there



*/
// const [changes, setChanges] = useState([]);
//const [newActive, setNewActive] = useState(currentlyActive);
// handleChange(e.target, item)
// const applyChanges = () => {
//   handleChange(type, changes);
//   setIsOpen(false)
// }

//             if (changes.find((change)=>change[1]==item)) {
//               const newChanges = changes.filter((change)=>change[1]!=item)
//               setChanges(newChanges);
//  ``          }
//             else{
//               setChanges([...changes, [e.target, item]]);
//             }
//             if(newActive.includes(item))setNewActive(newActive.filter((it)=>it!==item))
//             else setNewActive([...newActive, item])
/* {Object.keys(categories).map((cat)=>{
return <div>
  <div className="pt-lg pb-md font-bold type-preset-6">{cat}</div>
  */
/* <div >
      <ResetFilterButton type={type} onClick={()=>{handleClearClick(); setIsOpen(false)}} title={"Clear all"} isActive={true}/>
      <button className="text-white bg-sage-700 hover:bg-sage-800 type-preset-7 px-md py-sm text-center inline-flex items-center " onClick={applyChanges}>Apply</button>
    </div> */

    /* <span
                          className={` h-[12px] w-[12px]   absolute left-0 `}
                        >
                          <svg
                            width="12"
                            height="12"
                            viewBox="0 0 48 48"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            className={`pt-xs     ${acD} `}
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
                        </span> */