import classNames from "classnames";
import React, { useState } from "react";
import SlideDown from "react-slidedown";
import { AnalyticsLabelType } from "utils/Analytics";
import Logo from "../Logo";
import styles from "./mobilenav.module.css";

const MobileNavBar = ({ NavData }) => {
  const [isShowingMenu, setIsShowingMenu] = useState(false);
  const analyticsLabel: AnalyticsLabelType = "navbar";

  const NavLinksMobile = () => (
    
    <nav
      aria-label="main"
      className=" absolute left-0 top-[60px] responsive-container w-full flex flex-col  bg-white z-50 "
    >
      <SlideDown className={``}>
        {isShowingMenu
          ? NavData.map((navSection, i) => {
              const extraPadding = classNames({
                "mt-lg": i == 0,
                "mb-lg": i == NavData.length - 1,
              });
              return "slug" in navSection ? (
                <a
                  href={navSection.slug}
                  className={`group block w-full border-t-[1px] border-black py-lg ${extraPadding} ${analyticsLabel}`}
                  key={navSection.title}
                >
                  <div className="relative inline-block  ">
                    <div
                      className={` 
            text-gray-900 font-sans font-bold
            mr-3xl
            group-hover:border-black border-b-2  border-transparent
              `}
                    >
                      {navSection.title}
                    </div>
                  </div>
                </a>
              ) : (
                <details
                  key={navSection.title}
                  className={`${styles.details} ${extraPadding} w-full border-t-[1px] border-black py-lg`}
                >
                  <summary
                    className={` relative  text-gray-900  pr-sm   cursor-pointer`}
                  >
                    <div className="flex flex-row justify-between items-center">
                      <h3 className=" text-gray-900 pr-sm font-sans font-bold ">
                        {navSection.title}
                      </h3>
                      <div className={`chevron`}>
                        <svg
                          width="18"
                          height="9"
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
                  </summary>
                  <SlideDown className={`${styles.mobileSlideDown}`}>
                    {navSection.subpages.map((navitem) => (
                      <a
                        key={navitem.title}
                        href={navitem.slug}
                        className={`block hover:bg-green px-4 cursor-pointer ${analyticsLabel}`}
                      >
                        <p className="font-sans text-gray-900 hover:underline py-2 pl-5">
                          {navitem.title}
                        </p>
                      </a>
                    ))}
                  </SlideDown>
                </details>
              );
            })
          : null}
      </SlideDown>
    </nav>
  );
  return (
    <div  className="lg:hidden block ">
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
      <NavLinksMobile />
    </div>
  );
};

export default MobileNavBar;
