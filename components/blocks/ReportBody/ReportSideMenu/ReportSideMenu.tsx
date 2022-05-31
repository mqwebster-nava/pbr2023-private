import AnchorLink from "components/atom/AnchorLink/AnchorLink";
import React from "react";

const ReportSideMenu = ({ links, activeSection }) => {
  return (
    <aside className="bg-gray-100 fixed hidden lg:block w-[300px] z-1 right-[7%] top-[20%] p-4">
      <ul>
        <span className="font-bold">On this page:</span>
        {links.map((link, index) => {
         return (
          <li key={`report_side_menu_${index}`} className={`pt-xl text-sage-dark hover:text-sage-base ${activeSection === link.id ? "font-bold" : ""}`}>
            {/* <a
              className={`text-sage-dark hover:text-sage-base ${activeSection === link.id ? "font-bold" : ""}`}
              href={`#${link.id}`}
            >
              {link.text}
            </a> */}
            <AnchorLink href={`#${link.id}`}>{link.text}</AnchorLink>
          </li>
        )})}
      </ul>
    </aside>
  );
};

export default ReportSideMenu;