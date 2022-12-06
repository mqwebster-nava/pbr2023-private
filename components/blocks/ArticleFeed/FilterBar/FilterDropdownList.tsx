import { useEffect, useState } from "react";
import ResetFilterButton from "./ResetFilterButton";

const categories = {
  Sector: [
    "healthcare",
    "integrated benefits",
    "paid family medical leave",
    "unemployment insurance",
    "Veterans",
    "WIC",
  ],
  Capability: [
    "accessibility and equity",
    "adapting to change",
    "agile development",
    "APIs and documentation",
    "backend engineering",
    "cloud infrastructure",
    "content strategy",
    "continuous improvement",
    "crisis response",
    "frontend engineering",
    "human-centered design",
    "modernization",
    "policy",
    "product management",
    "program management",
    "program outcomes",
    "rapid delivery",
    "reducing risk",
    "scalable solutions",
    "user experience research",
    "mission and impact",
  ],
  Other: ["a day at Nava", "careers", "what we're learning"],
};

const FilterDropdownList = ({ title, isOpen, setIsOpen, handleChange, handleClearClick, items, type, currentlyActive=[]}) => {
    const [changes, setChanges] = useState([]);
    const [newActive, setNewActive] = useState(currentlyActive);
    // handleChange(e.target, item)
    const applyChanges = () => {
      handleChange(type, changes);
      setIsOpen(false)
    }

    useEffect(() => {
      Array.from(document.getElementsByClassName(`${type}CheckBox`)).forEach(
        (el) => {
          const itemName = el.id.replace("-checkbox", "")
           // @ts-ignore // would ned to change to a button
           el.checked =(currentlyActive.includes(itemName))
        }
      );
      setNewActive(currentlyActive);
      setChanges([]);
    }, [isOpen]);
  
  
   
    return (
      <div
        className={`${
          !isOpen && "hidden"
        } absolute z-10  -left-[16px] -right-[16px] bg-gray-100 shadow mt-sm p-lg min-h-[200px]`}
      >
        <div className="flex justify-between">
          <p className="pb-md font-bold">Filter by {title}</p>
          <div >
           <ResetFilterButton type={type} onClick={()=>{handleClearClick(); setIsOpen(false)}} title={"Clear all"} isActive={true}/>
            <button className="text-white bg-sage-700 hover:bg-sage-800 type-preset-7 px-md py-sm text-center inline-flex items-center " onClick={applyChanges}>Apply</button>
          </div>
        </div>
       
          {Object.keys(categories).map((cat)=>{
            return <div>
              <div className="pt-lg pb-md">{cat}</div>
              <ul
          className=" flex w-full flex-wrap gap-lg"
          aria-labelledby="dropdownCheckboxButton"
        >
              {categories[cat].map((item, i) => {
                let isActive = newActive.includes(item)
                
            const ac = isActive ? "bg-white" : "hover:bg-white";
            let acD = isActive? "stroke-black group-hover:stroke-red-700" : " stroke-gray-700 rotate-45 group-hover:stroke-sage-900";
            return (
              <li key={i}>
                <div className={`flex group items-center border-gray-400 border-[1px] p-sm type-preset-7 ${ac}`}>
                <label
                    htmlFor={`${item}-checkbox`}
                    className="mr-2 font-medium text-gray-900 "
                  >
                    {item}
                  </label>
                  <div className="relative h-[12px]">
                  <input
                    onChange={(e) =>{
                        if (changes.find((change)=>change[1]==item)) {
                          const newChanges = changes.filter((change)=>change[1]!=item)
                          setChanges(newChanges);
             ``           }
                        else{
                          setChanges([...changes, [e.target, item]]);
                        }
                        if(newActive.includes(item))setNewActive(newActive.filter((it)=>it!==item))
                        else setNewActive([...newActive, item])
                        
                    }}
                    id={`${item}-checkbox`}
                    type="checkbox"
                    value={item}
                    className={`${type}CheckBox relative h-[12px] w-[12px] opacity-0 z-10 `}
                  />
                  <span className={` h-[12px] w-[12px]   absolute left-0 `}>
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
                  </span>
                  
                  </div>
                </div>
              </li>
            );
          })}
          </ul>
            </div>

          })}
          
        
      </div>
    );
  };

  export default FilterDropdownList