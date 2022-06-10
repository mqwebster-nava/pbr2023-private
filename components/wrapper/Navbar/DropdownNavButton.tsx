import { useState } from "react";
import { SlideDown } from "react-slidedown";
import "react-slidedown/lib/slidedown.css";
import styles from "./navbar.module.css";

const DropdownNavButton = (props) => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <button
      className="relative inline-block cursor-pointer pr-3xl  "
      onMouseEnter={() => setShowMenu(true)}
      onFocus={() => setShowMenu(true)}
      onBlur={() => setShowMenu(false)}
      onMouseLeave={() => setShowMenu(false)}
      data-bs-toggle="dropdown"
    >
      <div
        aria-expanded={showMenu ? "true" : "false"}
        aria-haspopup="true"
        className={` 
        text-navy-900 font-bold font-sans 
            pt-md pb-sm flex 
            ${showMenu && "border-b-4 border-black"}
         `}
      >
{props.title} 
      </div>
      
        {showMenu ? (
          <div
            role="menu"
            className={`absolute -left-[28px] top-[45px] z-1 w-[236px]  ${
              !showMenu && "hidden"
            }`}
          >
            <SlideDown className={`mt-lg bg-white ${styles.navDropdown}`}>
              {showMenu ? props.children:null }
              </SlideDown>
          </div>
        ) : null}
     
    </button>
  );
};

export default DropdownNavButton;
