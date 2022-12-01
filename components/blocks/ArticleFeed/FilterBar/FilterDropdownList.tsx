import { useEffect, useState } from "react";
import ResetFilterButton from "./ResetFilterButton";


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
            const ac = newActive.includes(item) ? "bg-white" : null;
            let acD = newActive.includes(item) ? "bg-sage-900" : "bg-sage-100";
            return (
              <li key={i}>
                <div className={`flex items-center border-gray-400 border-[1px] p-sm type-preset-7 ${ac}`}>
                <label
                    htmlFor={`${item}-checkbox`}
                    className="mr-2 font-medium text-gray-900 "
                  >
                    {item}
                  </label>
                  <div className="relative">
                  <input
                    onChange={(e) =>{
                        if (changes.find((change)=>change[1]==item)) {
                          const newChanges = changes.filter((change)=>change[1]!=item)
                          setChanges(newChanges);
                        }
                        else{
                          setChanges([...changes, [e.target, item]]);
                        }
                        if(newActive.includes(item))setNewActive(newActive.filter((it)=>it!==item))
                        else setNewActive([...newActive, item])
                        
                    }}
                    id={`${item}-checkbox`}
                    type="checkbox"
                    value={item}
                    className={`${type}CheckBox relative w-4 h-4 opacity-0 z-10 `}
                  />
                  <span className={` h-4 w-4  ${acD} absolute left-0 `}></span>
                  
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    );
  };

  export default FilterDropdownList