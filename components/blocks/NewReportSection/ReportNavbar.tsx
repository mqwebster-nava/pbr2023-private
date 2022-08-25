import Logo from "components/wrapper/Navbar/Logo";
import { useState } from "react";
import SlideDown from "react-slidedown";
import TableOfContentsSection from "./TableOfContents";


const ReportNavbar = ({ entry }) => {
  const [isShowingMenu, setIsShowingMenu] = useState(false);
    return (
      <div  className="block sticky top-0  z-30  pt-md w-full bg-white">
      <div className=" responsive-container flex flex-wrap items-center justify-between h-[60px]">
        <Logo isMobile={true} />
        <div className="block ">
          <button
            aria-label="menu"
            aria-expanded={isShowingMenu?"true":"false"}
            onClick={() => {
              setIsShowingMenu(!isShowingMenu);
            }}
            className="font-sans text-gray-900  border-grey  "
          >
            {isShowingMenu ? (
              <svg
                width="20"
                height="25"
                viewBox="0 0 23 23"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M22.0003 1L1 22.0003M1 1L22.0003 22.0003"
                  stroke="black"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            ) : (
              <svg
                width="20"
                height="25"
                viewBox="0 0 27 22"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M26.3997 1H1"
                  stroke="black"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M26.3997 10.7695H1"
                  stroke="black"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M26.3997 20.5391H1"
                  stroke="black"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            )}
          </button>
        </div>
      </div>
      <div className="overflow-scroll">
        {isShowingMenu? <TableOfContentsSection entry={entry} onClick={()=>setIsShowingMenu(false)}/>
        :null}
      </div>
    </div>
    );
  };

export default ReportNavbar;
{/* <nav className="w-full  bg-white sticky top-0  z-30  pt-md">
       
<div className="responsive-container flex justify-between">
 <Logo/>
  <div className="text-white">Menu</div>
 
</div>
</nav>
/h-[70px] */}