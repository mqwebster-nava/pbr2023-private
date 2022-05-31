
import React, { useState } from "react";
import useWindowSize from "utils/windowSizeHook";
import DropdownNavButton from "./DropdownNavButton";
import DropdownNavItem from "./DropdownNavItem";
import NavButton from "./NavButton";
import Logo from "./Logo";
import NavData from "./navbar_data";

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
    <header className={`bg-gray-100 w-full z-20 pt-sm `}>
      <div className=" responsive-container   flex flex-wrap items-center justify-between">
        <Logo />
        <nav className=" flex items-baseline w-auto" aria-label="main">
          {NavData.map((navSection) => {
            return "slug" in navSection ? (
              <NavButton key={navSection.title} slug={navSection.slug}> {navSection.title}</NavButton>
            ) : (
              
              <DropdownNavButton key={navSection.title} title={navSection.title} >
                {navSection.subpages.map((navitem) => (
                  <DropdownNavItem href={navitem.slug} key={navitem.title}>
                    {navitem.title}
                  </DropdownNavItem>
                ))}
              </DropdownNavButton>
           
            );
          })}
          <div className="pl-sm"></div>
          <NavButton slug={"/contact"}> {"Get In Touch"}</NavButton>
        </nav>
      </div>
    </header>
  );
};

const MobileNavBar = ({ NavData }) => {
  const [isShowingMenu, setIsShowingMenu] = useState(false);

  const NavLinksMobile = () => (
    <nav aria-label="main" className="responsive-container w-full flex flex-row items-start bg-white">
      <div className="py-lg">
        {NavData.map((navSection) => {
          return "slug" in navSection ? (
            <NavButton key={navSection.title} slug={navSection.slug}> {navSection.title}</NavButton>
          
          ) : (
            <div key={navSection.title}>
              <div className="relative inline-block  text-navy-900  pr-sm   cursor-pointer">
                <h3 className=" text-navy-900 pr-sm font-sans font-bold flex  items-center">
                  {navSection.title}
                </h3>
              </div>
              {navSection.subpages.map((navitem) => (
                <a
                  key={navitem.title}
                  href={navitem.slug}
                  className="block hover:bg-green px-4 cursor-pointer"
                >
                  <p className="font-sans text-navy-900 hover:text-sage-300 py-2 pl-5">
                    {navitem.title}
                  </p>
                </a>
              ))}
            </div>
          );
        })}
      </div>
    </nav>
  );
  return (
    <header className={` w-full z-10 bg-gray-100`}>
      <div className="responsive-container  pt-lg flex flex-wrap items-baseline justify-between">
        <Logo />
        <div className="block ">
          <button
            aria-label="menu"
            onClick={() => {
              setIsShowingMenu(!isShowingMenu);
            }}
            className="font-sans text-navy-900 hover:text-sage-200 border-grey  "
          >
            <svg
              height="32px"
              id="Layer_1"
              version="1.1"
              viewBox="0 0 32 32"
              width="32px"
            >
              <path d="M4,10h24c1.104,0,2-0.896,2-2s-0.896-2-2-2H4C2.896,6,2,6.896,2,8S2.896,10,4,10z M28,14H4c-1.104,0-2,0.896-2,2  s0.896,2,2,2h24c1.104,0,2-0.896,2-2S29.104,14,28,14z M28,22H4c-1.104,0-2,0.896-2,2s0.896,2,2,2h24c1.104,0,2-0.896,2-2  S29.104,22,28,22z" />
            </svg>
          </button>
        </div>
      </div>
      {isShowingMenu && <NavLinksMobile />}
    </header>
  );
};

export default Navbar;
