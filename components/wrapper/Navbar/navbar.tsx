import React, { useState } from "react";
import useWindowSize from "utils/windowSizeHook";
import DropdownNavButton from "./DropdownNavButton";
//import DropdownNavItem from "./DropdownNavItem";
import NavButton from "./NavButton";
import Logo from "./Logo";
import NavData from "./navbar_data";
import styles from "./navbar.module.css";
import { SlideDown } from "react-slidedown";
import "react-slidedown/lib/slidedown.css";

// TODO: a11y - all links must have discernable text: https://dequeuniversity.com/rules/axe/4.4/link-name?application=axeAPI
const Navbar = ({}) => {
  // Gets the current breakpoint to determine the navbar
  const screenSize = useWindowSize();
  const isMobile: Boolean = !screenSize.includes("xl");
  return isMobile ? (
    <MobileNavBar NavData={NavData} />
  ) : (
    <DesktopNavBar NavData={NavData} />
  );
};

const DesktopNavBar = ({ NavData }) => {
  return (
    <header className={`bg-white w-full z-50  `}>
      <div className=" responsive-container   flex flex-wrap items-center justify-between h-[80px]">
        <Logo />
        <nav className=" flex items-baseline w-auto" aria-label="main">
          {NavData.map((navSection) => {
            return "slug" in navSection ? (
              <NavButton
                key={navSection.title}
                slug={navSection.slug}
                color={"navy-900"}
              >
                {navSection.title}
              </NavButton>
            ) : (
              <DropdownNavButton
                key={navSection.title}
                title={navSection.title}
                color={"navy-900"}
                subpages={navSection.subpages}
              >
                {/* {navSection.subpages.map((navitem) => (
                  <DropdownNavItem href={navitem.slug} key={navitem.title}>
                    {navitem.title}
                  </DropdownNavItem>
                ))} */}
              </DropdownNavButton>
            );
          })}
          <div className="pl-sm"></div>
          <NavButton slug={"/contact"} color={"navy-900"}>
            {" "}
            {"Get In Touch"}
          </NavButton>
        </nav>
      </div>
    </header>
  );
};

const MobileNavBar = ({ NavData }) => {
  const [isShowingMenu, setIsShowingMenu] = useState(false);

  const NavLinksMobile = () => (
    <nav
      aria-label="main"
      className="absolute left-0 top-[60px] responsive-container w-full flex flex-col  bg-white py-lg"
    >
      <SlideDown className={"my-dropdown-slidedown"}>
        {isShowingMenu
          ? NavData.map((navSection) => {
              return "slug" in navSection ? (
                <a
                 href={navSection.slug}
                  className="group block w-full border-t-[2px] border-black py-lg "
                  key={navSection.title}
                >
                  <div className="relative inline-block  "
                  >
                    <div
                      className={` 
          text-navy-900 font-sans font-bold
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
                  className={`${styles.details} w-full border-t-[2px] border-black py-lg`}
                >
                  <summary
                    className={` relative  text-navy-900  pr-sm   cursor-pointer`}
                  >
                    <div className="flex flex-row justify-between items-center">
                      <h3 className=" text-navy-900 pr-sm font-sans font-bold ">
                        {navSection.title}
                      </h3>
                      <div className={`chevron`}>
                        <svg
                          width="20"
                          height="11"
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
                  {navSection.subpages.map((navitem) => (
                    <a
                      key={navitem.title}
                      href={navitem.slug}
                      className="block hover:bg-green px-4 cursor-pointer"
                    >
                      <p className="font-sans text-navy-900 hover:underline py-2 pl-5">
                        {navitem.title}
                      </p>
                    </a>
                  ))}
                </details>
              );
            })
          : null}
      </SlideDown>
    </nav>
  );
  return (
    <header className={` w-full z-40 bg-white `}>
      <div className="responsive-container flex flex-wrap items-center justify-between h-[60px]">
        <Logo isMobile={true} />
        <div className="block ">
          <button
            aria-label="menu"
            onClick={() => {
              setIsShowingMenu(!isShowingMenu);
            }}
            className="font-sans text-navy-900  border-grey  "
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
      {isShowingMenu && <NavLinksMobile />}
    </header>
  );
};

export default Navbar;
