import HorizontalLine from "components/atom/HorizontalLine/HorizontalLine";
import ResetFilterButton from "./ResetFilterButton";




const ActiveFilterItems = ({ title, type, handleClearClick, handleChange, activeItems, }) => activeItems.length>0 &&(
    // <div className="pt-sm">
    // <div className="flex gap-md py-sm flex-wrap w-full">
<>
      {activeItems.map((item) => {
        return (
          <button
            className={` group
            border-gray-400 border-[1px] p-sm type-preset-7 flex gap-md items-center
             hover:bg-gray-100`}
            onClick={() => {
              let checkbox = document.getElementById(`${item}-checkbox`);
              // @ts-ignore
              checkbox.checked = false;
              handleChange(type,[[checkbox, item]]);
            }}
          >
            <div>{item} </div>
            <svg
              width="12"
              height="12"
              viewBox="0 0 48 48"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="pt-xs  stroke-black group-hover:stroke-red-700 "
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
          </button>
        );
      })}
      </>
    // </div>
    // {/* <HorizontalLine/> */}
    // </div>
  );

export default ActiveFilterItems;

      {/* <div className="flex justify-between pt-sm">
            <p className="type-preset-7">Selected {title}</p>
            <ResetFilterButton type={type} onClick={handleClearClick} title={"Clear all"} isActive={true}/>
        </div> */}