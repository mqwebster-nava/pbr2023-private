import classNames from "classnames";
import HorizontalLine from "components/atom/HorizontalLine/HorizontalLine";
import { useEffect, useState } from "react";
import { capitalize } from "utils/utils";
import ResetFilterButton from "./ResetFilterButton";
import SlideDown from "react-slidedown";
import { Button } from "components/atom/Button/Button";

export interface FILTER_CHANGE {
  type: string;
  checkboxElement:any;
  name: string;
}


// This assumes length greater than 3
function splitIntoColumns(arr, size) {
  const len = arr.length;
  var myArray = [
    arr.slice(0, Math.ceil(len / 3)),
    arr.slice(Math.ceil(len / 3), Math.ceil((2 * len) / 3)),
    arr.slice(Math.ceil((2 * len) / 3), len),
  ];
  return myArray;
}

const FilterModal = ({
  title,
  isOpen,
  setIsOpen,
  getCount,
  handleChange,
  handleClearClick,
  categories,
  currentlyActive = [],
}) => {
  


  //const [changeLog, setChangeLog] = useState<Array<FILTER_CHANGE> | undefined>([]);

  // const handleChange = (type, checkboxElement, name ) => {
  //   const change:FILTER_CHANGE = {type, checkboxElement, name};
  //   let changes = [...changeLog];
  //   if (!changeLog.filter((c) => c.name == change.name).length) 
  //     changes.push(change);
  //   setChangeLog(changes)
    
  // }

  useEffect(() => {
    Array.from(document.getElementsByClassName(`filterCheckBox`)).forEach(
      (el) => {
        const itemName = el.id.replace("-checkbox", "");
        // @ts-ignore // would ned to change to a button
        el.checked = currentlyActive.includes(itemName);
      }
    );

  }, [isOpen, currentlyActive]);
  return (
    <div
      className={`${
        !isOpen && "hidden"
      }  bg-white  pt-lg min-h-[200px] pb-xl `}
    >
      <div className=" flex flex-col ">
        <div className="flex justify-between ">
          <div>
            <h3 className="type-preset-5 font-bold">Filter by</h3>
          </div>
          <button onClick={() => {
            //setChangeLog([]);
            setIsOpen(false)
            }}>Close</button>
        </div>
        <div className="overflow-y-scroll grow ">
          {Object.keys(categories).sort((a,b)=>a.localeCompare(b)).map((catName) => (
            <FilterTypeRow
            key={catName}
              catName={catName}
              catTags={categories[catName]}
              getCount={getCount}
              handleChange={handleChange}
              currentlyActive={currentlyActive}
              //changeLog={changeLog}
            />
          ))}
        </div>
        <div className=" flex justify-between w-full my-2xl gap-x-md items-center">
          <div>
          {/* {getCount()==1? `${getCount()} found post`: `${getCount()} found posts`} */}
            {/* {getCount({changeLog})==1? `${getCount({changeLog})} found post`: `${getCount({changeLog})} found posts`} */}
          </div>
          {/* <div className="flex gap-md">
            <ResetFilterButton
              type={undefined}
              onClick={() => {
                //setChangeLog([]);
                handleClearClick();
              }}
              title={"Clear all"}
              isActive={true}
            />
            <Button
              height="slim"
              onClick={() => {
                handleChanges(changeLog);
                setChangeLog([]);
                setIsOpen(false);
              }}
              
            >
              {"Apply"}
            </Button>
          </div> */}
        </div>
      </div>
    </div>
  );
};

const FilterTypeRow = ({
  catName,
  catTags,
  getCount,
  handleChange,
  currentlyActive
  //changeLog
}) => {
  return (
    <details open={false} className="list-none">
      <summary className="pt-md list-none cursor-pointer w-full">
        <HorizontalLine />
        <div className="flex flex-row justify-between items-center w-full">
          <p className="py-sm font-bold type-preset-6">{capitalize(catName)}</p>

          <div className={`chevron`}>
            <svg
              width="20"
              height="11"
              viewBox="0 0 20 11"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M19 1L10 10L1 1"
                stroke="#111827"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </div>
      </summary>

      <div
        className="pt-sm md:grid md:grid-cols-3 w-full gap-lg divide-y-[1px] md:divide-y-0 pb-2xl"
        aria-labelledby="dropdownCheckboxButton"
      >
        {splitIntoColumns(catTags, 3).map((column, j) => {
          return (
            <div className="flex flex-col divide-y-[1px]" key={`filter-col-${j}`}>
              {column.map((item, i) => {
               const analyticsLabel = "filterTag"
               let isActive = currentlyActive.includes(item)
                let resultNum = getCount({type:catName, item});
                const styles = classNames({
                  "bg-sage-50 text-gray-900": isActive,
                  "bg-white text-gray-600 hover:bg-white ":
                    !isActive && resultNum != 0,
                  "bg-gray-100 text-gray-400 ": resultNum == 0,
                });
                return (
                  <div
                    key={`filter-${i}-${j}`}
                    className={`flex group items-center p-sm type-preset-6 ${styles} ${analyticsLabel}`}
                  >
                    <label
                      htmlFor={`${item}-checkbox`}
                      className="font-medium w-full "
                    >
                      {`${item} (${resultNum})`}
                    </label>

                    <input
                      onChange={(e) => {
                        handleChange({type:catName,checkboxElement: e.target, name:item});
                      }}
                      disabled={resultNum == 0}
                      id={`${item}-checkbox`}
                      type="checkbox"
                      value={item}
                      className={`filterCheckBox h-[14px] w-[14px] accent-sage-600 `}
                    />
                  </div>
                );
              })}
            </div>
          );
        })}
      </div>
    </details>
  );
};

export default FilterModal;

  //   setChangeLog([...changeLog, change]);
    //   // Add an event here to track the filter
    // } else {
    //   setChangeLog(changeLog.filter((c) => c.name != change.name));
    // }