import classNames from "classnames";
import HorizontalLine from "components/atom/HorizontalLine/HorizontalLine";
import { useEffect, useRef, useState } from "react";
import { capitalize } from "utils/utils";
import ResetFilterButton from "./ResetFilterButton";
import SlideDown from "react-slidedown";
import { Button } from "components/atom/Button/Button";

export interface FILTER_CHANGE {
  type: string;
  checkboxElement:any;
  name: string;
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
  useEffect(() => {
    Array.from(document.getElementsByClassName(`filterCheckBox`)).forEach(
      (el) => {
        const itemName = el.id.replace("-checkbox", "");
        console.log(itemName)
        // @ts-ignore // would ned to change to a button
        el.checked = currentlyActive.includes(itemName);
      }
    );

  }, [isOpen, currentlyActive]);

  useEffect(() => {
    const filterRows = document.querySelectorAll("details");

    const filterRowIsOpen = (target: HTMLDetailsElement) => {
      filterRows.forEach((currentRow: HTMLDetailsElement) => {
        if (currentRow != target) currentRow.removeAttribute("open");
      })
    }

    filterRows.forEach((targetRow) => {
      targetRow.addEventListener('click', () => filterRowIsOpen(targetRow));
    })

    return () => {
      filterRows.forEach((targetRow) => {
        targetRow.removeEventListener('click', () => filterRowIsOpen(targetRow));
      })
    }
  }, []);

  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const checkIfClickedOutside = e => {
      if (isOpen && ref.current && !ref.current.contains(e.target)) {
        setIsOpen(false);
      }
    }

    document.addEventListener('click', checkIfClickedOutside)

    return () => {
      document.removeEventListener('click', checkIfClickedOutside)
    }
  }, [isOpen]);

  return (
    <div
      className={`${
        !isOpen && "hidden"
      } bg-white overflow-clip pt-xl pb-3xl px-2xl min-h-[200px] border-2 border-sage-900`}
      ref={ref}
    >
      <div className="hidden md:flex flex-row gap-6">
        {Object.keys(categories).sort((a,b)=>a.localeCompare(b)).map((catName) => (
          <FilterTypeCol
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

      <div className="md:hidden flex-col gap-2 justify-between">
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
    </div>
  );
};

const FilterTypeCol = ({
  catName,
  catTags,
  getCount,
  handleChange,
  currentlyActive
  //changeLog
}) => {
  return (
    <div
      className="w-full"
      aria-labelledby="dropdownCheckboxButton"
    >
      <p className="pb-md font-bold type-preset-6">{capitalize(catName)}</p>

      {catTags.map((item, i) => {
        const analyticsLabel = "filterTag"
        let isActive = currentlyActive.includes(item)
        let resultNum = getCount({type:catName, item});
        const styles = classNames({
          "bg-sage-50 text-gray-900": isActive,
          "bg-white text-gray-600 hover:bg-white ":
            !isActive && resultNum != 0,
          "bg-gray-100 text-gray-400 ": resultNum == 0,
        });

        if (!resultNum) return;

        return (
          <div
            key={`filter-${i}`}
            className={`flex items-center gap-2 px-sm py-md type-preset-6 border-b-[1px] border-gray-200 ${styles} ${analyticsLabel}`}
          >

            <input
              onChange={(e) => {
                handleChange({type:catName,checkboxElement: e.target, name:item});
              }}
              disabled={resultNum == 0}
              id={`${item}-checkbox`}
              type="checkbox"
              value={item}
              className={`filterCheckBox h-[14px] w-[14px] accent-sage-600`}
            />

            <label
              htmlFor={`${item}-checkbox`}
              className="font-medium w-full"
            >
              {`${item}`}
            </label>
          </div>
        );
      })}
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
        className="pt-sm md:grid md:grid-cols-3 w-full gap-lg pb-2xl"
        aria-labelledby="dropdownCheckboxButton"
      >
        {catTags.map((item, i) => {
          const analyticsLabel = "filterTag"
          let isActive = currentlyActive.includes(item)
          let resultNum = getCount({type:catName, item});
          const styles = classNames({
            "bg-sage-50 text-gray-900": isActive,
            "bg-white text-gray-600 hover:bg-white ":
              !isActive && resultNum != 0,
            "bg-gray-100 text-gray-400 ": resultNum == 0,
          });

          if (!resultNum) return;

          return (
            <div
              key={`filter-${i}`}
              className={`flex gap-2 group items-center p-sm type-preset-6 border-b-[1px] border-gray-200 ${styles} ${analyticsLabel}`}
            >

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

              <label
                htmlFor={`${item}-checkbox`}
                className="font-medium w-full"
              >
                {`${item}`}
              </label>
            </div>
          );
        })}
      </div>
    </details>
  );
};

export default FilterModal;