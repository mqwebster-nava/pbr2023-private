import { Button } from "components/atom";
import React, { useState } from "react";
import useWindowSize from "utils/windowSizeHook";
import DropdownNavButton from "./DropdownNavButton";
import DropdownNavItem from "./DropdownNavItem";
import NavButton from "./NavButton";
import Logo from "./Logo";
import NavData from "./navbar_data";

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
    <nav className={`absolute  bg-white w-full z-20  "`}>
      <div className=" responsive-container   flex flex-wrap items-end justify-between">
        <Logo />
        <div className=" flex items-baseline w-auto">
          {NavData.map((navSection) => {
            return "slug" in navSection ? (
              <NavButton slug={navSection.slug}> {navSection.title}</NavButton>
            ) : (
              <DropdownNavButton title={navSection.title}>
                {navSection.subpages.map((navitem) => (
                  <DropdownNavItem href={navitem.slug}>
                    {navitem.title}
                  </DropdownNavItem>
                ))}
              </DropdownNavButton>
            );
          })}
          <Button href="/contact"> Get In Touch </Button>
        </div>
      </div>
    </nav>
  );
};

const MobileNavBar = ({ NavData }) => {
  const [isShowingMenu, setIsShowingMenu] = useState(false);

  const NavLinksMobile = () => (
    <div className="responsive-container w-full flex flex-col items-start bg-sage-50">
      <div className="py-lg">
        {NavData.map((navSection) => {
          return "slug" in navSection ? (
            <NavButton slug={navSection.slug}> {navSection.title}</NavButton>
          ) : (
            <div>
              <div className="relative inline-block  text-navy-900  pr-sm   cursor-pointer">
                <h3 className=" text-navy-900 pr-sm font-sans font-bold flex  items-center">
                  {navSection.title}
                </h3>
              </div>
              {navSection.subpages.map((navitem) => (
                <a
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
    </div>
  );
  return (
    <nav className={`absolute w-full z-10 bg-white`}>
      <div className="responsive-container  pt-lg flex flex-wrap items-baseline justify-between">
        <Logo />
        <div className="block ">
          <button
            onClick={() => {
              setIsShowingMenu(!isShowingMenu);
            }}
            className="   font-sans bg--200 text-navy-900 hover:text-sage-200 border-grey  "
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
    </nav>
  );
};

export default Navbar;
