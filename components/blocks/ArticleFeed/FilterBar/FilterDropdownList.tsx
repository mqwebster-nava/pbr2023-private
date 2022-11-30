import { useEffect, useState } from "react";
import ResetFilterButton from "./ResetFilterButton";


const FilterDropdownList = ({ title, isOpen, setIsOpen, handleChange, handleClearClick, items, type, currentlyActive=[]}) => {
    const [changes, setChanges] = useState([]);
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
      setChanges([]);
    }, [isOpen]);
  
  
   
    return (
      <div
        className={`${
          !isOpen && "hidden"
        } absolute z-10  left-0 right-0 bg-gray-100 shadow mt-sm p-lg min-h-[200px]`}
      >
        <div className="flex justify-between">
          <p className="pb-md font-bold">Filter by {title}</p>
          <div >
           <ResetFilterButton type={type} onClick={()=>{handleClearClick(); setIsOpen(false)}} title={"Clear all"} isActive={true}/>
            <button className="text-white bg-sage-700 hover:bg-sage-800 type-preset-7 px-md py-sm text-center inline-flex items-center " onClick={applyChanges}>Apply</button>
          </div>
        </div>
        <ul
          className=" flex w-full flex-wrap gap-lg"
          aria-labelledby="dropdownCheckboxButton"
        >
          {items.map((item, i) => {
            return (
              <li key={i}>
                <div className="flex items-center">
                  <input
                    
                    onChange={(e) =>{
                        if (changes.find((change)=>change[1]==item)) {
                          const newChanges = changes.filter((change)=>change[1]!=item)
                          setChanges(newChanges);
                        }
                        else{
                          setChanges([...changes, [e.target, item]]);
                        }
                      }}
                    id={`${item}-checkbox`}
                    type="checkbox"
                    value={item}
                    className={`${type}CheckBox w-4 h-4  bg-gray-100 rounded border-gray-300   `}
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
  };

  export default FilterDropdownList