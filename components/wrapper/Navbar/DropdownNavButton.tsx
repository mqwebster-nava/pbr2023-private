import { useState } from "react";

const DropdownNavButton = (props) => {
    const [showMenu, setShowMenu] = useState(false);
  
    return (
      <button
        className="relative inline-block cursor-pointer pr-3xl"
        onMouseEnter={() => setShowMenu(true)}
        onFocus={() => setShowMenu(true)}
        onBlur={() => setShowMenu(false)}
        onMouseLeave={() => setShowMenu(false)}
        data-bs-toggle="dropdown"

      >
        <div
         aria-expanded={showMenu? "true":"false"}
         aria-haspopup="true"
          className=" 
            text-navy-900 font-bold font-sans 
            pt-md pb-sm flex 
            "
        >
          {props.title}
     
  
          <svg

            aria-hidden="true"
            focusable="false"
            data-prefix="fas"
            data-icon="caret-down"
            className="w-2 ml-2 h-full my-auto"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 320 512"
          >
            <path
              fill="currentColor"
              d="M31.3 192h257.3c17.8 0 26.7 21.5 14.1 34.1L174.1 354.8c-7.8 7.8-20.5 7.8-28.3 0L17.2 226.1C4.6 213.5 13.5 192 31.3 192z"
            ></path>
          </svg>
        </div>
          <div role="menu" className={`absolute left-0 top-[42px] bg-white z-1 w-full border-t-8 border-sage-base ${!showMenu && "hidden"}`}>
            {props.children}
          </div>
      </button>
    );
  };
  
  export default DropdownNavButton;