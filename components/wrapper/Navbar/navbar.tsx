import React from "react";
import NavData, { NavData2 } from "./navbar_data";
import "react-slidedown/lib/slidedown.css";
import MobileNavBar from "./MobileNav/MobileNav";
import DesktopNavBar from "./DesktopNav/DesktopNav";
// TODO: a11y - all links must have discernable text: https://dequeuniversity.com/rules/axe/4.4/link-name?application=axeAPI
const Navbar = ({ variant = null }) => {
  // Gets the current breakpoint to determine the navbar
  console.log(variant)
  const variantData = variant==null?[]: variant == 0 ? NavData : NavData2;
  return (
    <header className={`bg-white w-full z-50  `}>
      <DesktopNavBar NavData={variantData} />
      <MobileNavBar NavData={variantData} />
    </header>
  );
};

export default Navbar;
