import React, {useState } from "react";
import { SlideDown } from "react-slidedown";
import "react-slidedown/lib/slidedown.css";
import styles from "./navbar.module.css";

const DropdownNavButton = (props) => {
  const [showMenu, setShowMenu] = useState(false);


  return (
    <div className="relative"
      onMouseEnter={() => setShowMenu(true)}
      onFocus={() => setShowMenu(true)}
      onBlur={() => setShowMenu(false)}
      onMouseLeave={() => setShowMenu(false)}
    >
   
      <button
       
        className={` 
        inline-block cursor-pointer mr-3xl
        text-gray-900  font-sans 
            pt-md pb-sm
            ${showMenu && "border-b-2 border-black"}
         `}
      >
        {props.title}
      </button>
       <div
       className={`absolute -left-[28px] top-[45px] z-1 w-[236px] block `}
     >
       <SlideDown 
       className={`mt-lg py-md bg-white ${styles.navDropdown}`}
       >
         { showMenu ? 
          props.subpages.map((navitem, i) => (
         
           <a
           key={navitem.title}
           href={navitem.slug}
             className="text-gray-900 text-left  block py-md px-[28px] font-sans hover:underline "
           >
             {navitem.title}
           </a>
         ))
     : null}
       </SlideDown>
     </div>
      
    </div>
  );
};

// DropDownMenuInter

// const DropdownMenu: React.FC<> = ({showMenu, subpages}) => {

//  return ( )
// }

export default DropdownNavButton;
