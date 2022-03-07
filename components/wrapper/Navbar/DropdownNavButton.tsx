import { useState } from "react";

const DropdownNavButton = (props) => {
    const [showMenu, setShowMenu] = useState(false);
  
    return (
      <div
        className="relative inline-block  hover:bg-gray-200 hover:text-white hover:underline text-black  px-2 cursor-pointer"
        onMouseEnter={() => setShowMenu(true)}
        onMouseLeave={() => setShowMenu(false)}
      >
        <a
          className=" text-black font-sans p-sm flex 
            items-center"
        >
          {props.title}
  
          <svg
            aria-hidden="true"
            focusable="false"
            data-prefix="fas"
            data-icon="caret-down"
            className="w-2 ml-2"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 320 512"
          >
            <path
              fill="currentColor"
              d="M31.3 192h257.3c17.8 0 26.7 21.5 14.1 34.1L174.1 354.8c-7.8 7.8-20.5 7.8-28.3 0L17.2 226.1C4.6 213.5 13.5 192 31.3 192z"
            ></path>
          </svg>
        </a>
  
        {showMenu && (
          <div className="absolute left-0 bg-gray-200 min-w-64 w-32 z-1">
            {props.children}
          </div>
        )}
      </div>
    );
  };
  
  export default DropdownNavButton;