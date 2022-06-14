import React, { useEffect, useReducer, useState } from "react";
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
        text-navy-900  font-sans 
            pt-md pb-sm flex 
            ${showMenu && "border-b-2 border-black"}
         `}
      >
        {props.title}
      </div>

      {showMenu ? (
       <DropdownMenu showMenu={showMenu} subpages={props.subpages} />
      ) : null}
    </button>
  );
};


const DropdownMenu = ({showMenu, subpages}) => {

 return ( <div
  role="menu"
  className={`absolute -left-[28px] top-[45px] z-1 w-[236px]  ${
    !showMenu && "hidden"
  }`}
>
  <SlideDown className={`mt-lg py-md bg-white ${styles.navDropdown}`}>
    {showMenu ? 
     subpages.map((navitem, i) => (
      <a
      key={navitem.title}
      role="menuitem"
      tabIndex={0}
      href={navitem.slug}
        className="text-navy-900 text-left  block py-md px-[28px] font-sans hover:underline "
      >
        {navitem.title}
      </a>
    ))
    : null}
  </SlideDown>
</div>)
}

export default DropdownNavButton;
