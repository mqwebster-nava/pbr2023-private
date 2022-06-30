import React from "react";
import Logo from "../Logo";
import NavButton from "./NavButton";
import DropdownNavButton from "./DropdownNavButton";

const DesktopNavBar = ({ NavData }) => {
    return (
      <div className="hidden lg:flex  responsive-container   flex-wrap items-center justify-between h-[80px]">
        <Logo />
        <nav className=" flex items-baseline w-auto" aria-label="main">
          {NavData.map((navSection) => {
            return "slug" in navSection ? (
              <NavButton
                key={navSection.title}
                slug={navSection.slug}
              >
                {navSection.title}
              </NavButton>
            ) : (
              <DropdownNavButton
                key={navSection.title}
                title={navSection.title}
                subpages={navSection.subpages}
              ></DropdownNavButton>
            );
          })}
         
        </nav>
      </div>
    );
  };

export default DesktopNavBar;