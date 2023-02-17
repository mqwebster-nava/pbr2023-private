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
  handleChanges,
  handleClearClick,
  categories,
  currentlyActive = [],
}) => {
  


  const [changeLog, setChangeLog] = useState<Array<FILTER_CHANGE> | undefined>([]);

  const handleChange = (type, checkboxElement, name ) => {
    const change:FILTER_CHANGE = {type, checkboxElement, name};
    //handleChanges([change]);
    setChangeLog([...changeLog, change]);
    if (!changeLog.filter((c) => c.name == change.name).length) {
      setChangeLog([...changeLog, change]);
    }
  }

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
      } z-50  fixed left-0 right-0 top-0 bottom-0 bg-white  p-lg min-h-[200px] pb-xl `}
    >
      <div className=" flex flex-col h-[100vh]">
        <div className="flex justify-between responsive-container">
          <div>
            <h3 className="type-preset-5 font-bold">Filter by</h3>
          </div>
          <button onClick={() => {
           
            setChangeLog([]);
            setIsOpen(false)
            }}>Cancel</button>
        </div>
        <div className="overflow-y-scroll grow responsive-container">
          {Object.keys(categories).map((catName) => (
            <FilterTypeRow
              catName={catName}
              catTags={categories[catName]}
              getCount={getCount}
              handleChange={handleChange}
              currentlyActive={currentlyActive}
              changeLog={changeLog}
            />
          ))}
        </div>
        <div className=" responsive-container flex justify-between w-full my-2xl gap-x-md items-center">
          <div>
            {getCount({changeLog})==1? `${getCount({changeLog})} found post`: `${getCount({changeLog})} found posts`}
          </div>
          <div className="flex gap-md">
            <ResetFilterButton
              type={undefined}
              onClick={() => {
                setChangeLog([]);
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
          </div>
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
  currentlyActive,
  changeLog
}) => {
  return (
    <details open={false}>
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
            <div className="flex flex-col divide-y-[1px]">
              {column.map((item, i) => {
                let changeItem = changeLog.filter((c) => (c.name == item))
                let isActive = changeItem.length ? changeItem[0].checkboxElement.checked : currentlyActive.includes(item)
                let resultNum = getCount({type:catName, item, changeLog});
                const styles = classNames({
                  "bg-sage-50 text-gray-900": isActive,
                  "bg-white text-gray-600 hover:bg-white ":
                    !isActive && resultNum != 0,
                  "bg-gray-100 text-gray-400 ": resultNum == 0,
                });
                return (
                  <div
                    key={i}
                    className={`flex group items-center p-sm type-preset-6 ${styles}`}
                  >
                    <label
                      htmlFor={`${item}-checkbox`}
                      className="font-medium w-full "
                    >
                      {`${item} (${resultNum})`}
                    </label>

                    <input
                      onChange={(e) => {
                        handleChange(catName, e.target, item);
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