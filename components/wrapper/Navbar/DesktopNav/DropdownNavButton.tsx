import React, { useState } from "react";
import { SlideDown } from "react-slidedown";
import "react-slidedown/lib/slidedown.css";
import styles from "./desktopnav.module.css";

const DropdownNavButton = (props) => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <div
      className={`${styles.dropdownAnimations} relative group my-auto`}
      onMouseEnter={() => setShowMenu(true)}
      onMouseLeave={() => setShowMenu(false)}
    >
      <div
        className={` dropdowntitle
        flex flex-row justify-between items-center 
         cursor-pointer mr-3xl
         pt-md pb-sm
         `}
      >
        <p className=" text-gray-600 group-hover:text-gray-900 pr-xs font-sans ">
          {props.title}
        </p>
        <div className={`chevron mt-[4px]`}>
          <svg
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
        </div>
      </div>
      <div className={`absolute -left-[28px] top-[45px] z-1 w-[236px] block `}>
        <SlideDown className={`mt-lg  bg-white`}>
          { props.subpages.map((navitem, i) => (
                <a
                  key={navitem.title}
                  href={navitem.slug}
                  className={`text-gray-900 text-left  block  px-[28px] font-sans hover:underline 
                  ${i==0 ? "pt-xl pb-md": i==props.subpages.length-1 ? "pt-md pb-xl":"py-md" }`}
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
