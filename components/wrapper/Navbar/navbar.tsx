import React from "react";
import NavData from "./navbar_data";
import "react-slidedown/lib/slidedown.css";
import MobileNavBar from "./MobileNav/MobileNav";
import DesktopNavBar from "./DesktopNav/DesktopNav";
// TODO: a11y - all links must have discernable text: https://dequeuniversity.com/rules/axe/4.4/link-name?application=axeAPI
const Navbar = ({}) => {
  // Gets the current breakpoint to determine the navbar

  return (
    <header className={`bg-white w-full z-50  `}>
      <DesktopNavBar NavData={NavData} />
      <MobileNavBar NavData={NavData} />
    </header>
  );
};




export default Navbar;
