import React from "react";
import Logo from "../Logo";
import NavButton from "./NavButton";
import DropdownNavButton from "./DropdownNavButton";
import { AnalyticsLabelType } from "utils/Analytics";

/*
Notes
Main Navigation
Desktop:
--- Skip to main content button would be nice ( added )
--- Drop down menus are not buttons - do not voice their state, expanded or not
--- Drop downs are tabbable, but do not respond to down or up arrow key presses
--- Focus styling could be better on navigation, borders are cut off
--- Not sure if issue, but there is a difference in functionality between tabbing and shift-tabbing. Pressing shift-tab does not open the subitems, but tab does. 

Mobile:
--- Banner is just a banner, there is no screen reader notification that you are in a navigation element
--- Menu button does not announce expanded or collapsed state
--- Menu items cannot be accessed via arrow keys (not necessarily an issue)


Issues
- Hidden states lead to issues w/ it finding stuff in the dom
- Focus state is slightly unclear
- Slide down makes it harder to implement traditional list view
- Unsure of what aria labels to add.
*/



const DesktopNavBar = ({ NavData }) => {
  const analyticsLabel: AnalyticsLabelType = "navbar";
    return (
      <div className="hidden lg:flex responsive-container   flex-wrap items-center justify-between h-[80px]">
        <a className="absolute -left-[1000px] focus:left-0 top-0 bg-white p-sm" href="#main">Skip Navigation Links</a>
        <Logo />
        <nav className=" flex items-baseline w-auto animate-fadeIn " aria-label="main">
          {NavData?.map((navSection) => {
            return "slug" in navSection ? (
              <NavButton
                key={navSection.title}
                slug={navSection.slug}
                title= {navSection.title}
                analyticsLabel={analyticsLabel}
              />
            ) : (
              <DropdownNavButton
                key={navSection.title}
                title={navSection.title}
                subpages={navSection.subpages}
                analyticsLabel={analyticsLabel}
              ></DropdownNavButton>
            );
          })}
         
        </nav>
      </div>
    );
  };

export default DesktopNavBar;