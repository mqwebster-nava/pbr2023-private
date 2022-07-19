import React, { useState } from "react";
import { SlideDown } from "react-slidedown";
import "react-slidedown/lib/slidedown.css";
import { AnalyticsLabelType } from "shared_interfaces/Analytics";
import styles from "./desktopnav.module.css";


// Select allows to do the arrows but would have to do a lot of custom styling
// could just add javascript to handle up and down arrows

// If you use a list item, it helps users know when that is together, 
//helps users know how many items in that list

// display none leave the containing box while visibility none removes  
// -- both remove things from the accessibility tree

interface DropdownNavButtonInterface {
  title: string;
  subpages: any;
  analyticsLabel?: AnalyticsLabelType
}


const DropdownNavButton = ({
  title,
  subpages,
  analyticsLabel="navbar"
}:DropdownNavButtonInterface) => {
  const [isShowingMenu, setIsShowingMenu] = useState(false);


  const Chevron = () => (<div className={`chevron mt-[4px]`}>
  <svg
    aria-label=""
    width="8"
    height="5"
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
</div>);

  return (
    <div
      role={"menu"}
      className={`${styles.dropdownAnimations} relative group my-auto`}
      onMouseEnter={()=>setIsShowingMenu(true)}
      onMouseLeave={()=>setIsShowingMenu(false)}
      onFocus={()=>setIsShowingMenu(true)}
      onBlur={()=>setIsShowingMenu(false)}
      aria-expanded={isShowingMenu? "true":"false"}
    >
      <div
       tabIndex={0}
        className={`dropdowntitle
        flex flex-row justify-between items-center gap-x-xs
         cursor-pointer mr-3xl
         pt-md pb-sm 
         text-gray-600 group-hover:text-gray-900 pr-xs font-sans
         `}
      >
          {title}
      
        <Chevron/>
      </div>
      <div className={`absolute -left-[28px] top-[43px] z-1 w-[236px] hidden group-hover:block group-focus-within:block   `}>
        <SlideDown className={`mt-[19px]  bg-white`}>
          { subpages.map((navitem, i) => (
                <a
                  role={"menuitem"}
                  key={navitem.title}
                  href={navitem.slug}
                  className={`text-gray-900 text-left  block  px-[28px] font-sans hover:underline  ${analyticsLabel}
                  ${i==0 ? "pt-xl pb-md": i==subpages.length-1 ? "pt-md pb-xl":"py-md" }`}
                >
                  {navitem.title}
                </a>
              ))
            }
        </SlideDown>
      </div>
    </div>
  );
};

export default DropdownNavButton;
