import { useEffect, useState } from "react";


const FilterDropdownList = ({ isOpen, setIsOpen, handleChange, items, type, currentlyActive=[]}) => {
    const [changes, setChanges] = useState([]);
    // handleChange(e.target, item)
    const applyChanges = () => {
      changes.forEach((change)=>{
        handleChange(change[0], change[1])
      })
      setIsOpen(false)
    }

    useEffect(() => {
      Array.from(document.getElementsByClassName(`${type}CheckBox`)).forEach(
        (el) => {
          const itemName = el.id.replace("-checkbox", "")
           // @ts-ignore
           el.checked =(currentlyActive.includes(itemName))
        }
      );
    }, [isOpen]);
  
  
   
    return (
      <div
        className={`${
          !isOpen && "hidden"
        } absolute z-10  left-0 right-0 bg-gray-100 rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600`}
      >
        <div className="flex justify-between p-lg">
          <p className="">Filter By X</p>
          <div >
            <button className="px-sm">Clear all</button>
            <button onClick={applyChanges}>Apply</button>
          </div>
        </div>
        <ul
          className="p-3 flex w-full flex-wrap gap-lg"
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
  };

  export default FilterDropdownList