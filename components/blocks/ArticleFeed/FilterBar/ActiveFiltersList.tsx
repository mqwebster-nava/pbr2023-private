import HorizontalLine from "components/atom/HorizontalLine/HorizontalLine";
import { FILTER_CHANGE } from "./FilterModal";
import ResetFilterButton from "./ResetFilterButton";

const ActiveFilterItems = ({
  type,
  handleClearClick,
  handleChange,
  activeItems,
  i,
}) =>
  activeItems.length > 0 && (
    <div className={`flex gap-md flex-wrap ${i != 0 && "pl-md"}`}>
      {activeItems.map((item, j) => {
        return (
          <div
            key={`filter-${i}-${j}`}
            className={`flex group items-center p-sm type-preset-6 bg-sage-50 text-gray-900`}
          >
            <label htmlFor={`${item}-checkbox`} className="font-medium w-full pr-sm">
              {`${item} `}
            </label>

            <input
              onChange={(e) => {
                handleChange({
                  type: type,
                  checkboxElement: e.target,
                  name: item,
                });
              }}
              id={`${item}-checkbox`}
              type="checkbox"
              value={item}
              checked
              className={`filterCheckBox h-[14px] w-[14px] accent-sage-600 `}
            />
          </div>
        );
      })}
    </div>
  );

export default ActiveFilterItems;

{
  /* <div className="flex justify-between pt-sm">
            <p className="type-preset-7">Selected {title}</p>
            <ResetFilterButton type={type} onClick={handleClearClick} title={"Clear all"} isActive={true}/>
        </div> */
}

// const ActiveFilterItems = ({  type, handleClearClick, handleChange, activeItems, i }) => activeItems.length>0 &&(

//   <div className={`flex gap-md flex-wrap ${i!=0 && "pl-md"}`}>

//         {activeItems.map((item) => {
//           return (
//             <button
//               key={`activeFilterItem-${item}`}
//               className={` group
//               border-gray-400 border-[1px] p-sm type-preset-7 flex gap-md items-center
//                hover:bg-gray-100`}
//               onClick={() => {
//                 let checkboxElement = document.getElementById(`${item}-checkbox`);
//                 // @ts-ignore
//                 checkboxElement.checked = false;
//                 const change: FILTER_CHANGE = {type,checkboxElement, name:item}
//                 handleChange(change);
//               }}
//             >
//               <div>{item} </div>
//               <svg
//                 width="12"
//                 height="12"
//                 viewBox="0 0 48 48"
//                 fill="none"
//                 xmlns="http://www.w3.org/2000/svg"
//                 className="pt-xs  stroke-black group-hover:stroke-red-700 "
//               >
//                 <g clipPath="url(#clip0_334_3846)">
//                   <line
//                     x1="3"
//                     y1="44.4645"
//                     x2="44.4645"
//                     y2="3"
//                     strokeWidth="5"
//                     strokeLinecap="round"
//                   />
//                   <line
//                     x1="3.53553"
//                     y1="3"
//                     x2="45"
//                     y2="44.4645"
//                     strokeWidth="5"
//                     strokeLinecap="round"
//                   />
//                 </g>
//                 <defs>
//                   <clipPath id="clip0_334_3846">
//                     <rect width="48" height="48" fill="white" />
//                   </clipPath>
//                 </defs>
//               </svg>
//             </button>
//           );
//         })}
//         </div>
//       // </div>
//       // {/* <HorizontalLine/> */}
//       // </div>
//     );

//   export default ActiveFilterItems;
