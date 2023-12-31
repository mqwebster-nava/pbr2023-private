import React from "react";
import getNavData from "./navbar_data";
import "react-slidedown/lib/slidedown.css";
import MobileNavBar from "./MobileNav/MobileNav";
import DesktopNavBar from "./DesktopNav/DesktopNav";
import { getExperimentValue } from "utils/useOptimizely";
// TODO: a11y - all links must have discernable text: https://dequeuniversity.com/rules/axe/4.4/link-name?application=axeAPI
const Navbar = ({ experiments = null }) => {
  // Gets the current breakpoint to determine the navbar
  const variant = experiments && getExperimentValue(experiments, "Insights Library AB Test")
  const variantData = (variant==null && experiments)?[]:getNavData(variant);

  return (
    <header className={`bg-white w-full z-50  `}>
      <DesktopNavBar NavData={variantData} />
      <MobileNavBar NavData={variantData} />
    </header>
  );
};

export default Navbar;
