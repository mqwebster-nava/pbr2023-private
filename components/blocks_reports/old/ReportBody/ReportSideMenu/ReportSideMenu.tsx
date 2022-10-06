
import { LinkText } from "components/atom";
import React from "react";

const ReportSideMenu = ({ links, activeSection }) => {
  return (
    <aside className="bg-gray-100 fixed hidden lg:block w-[300px] z-1 right-[7%] top-[20%] p-4">
      <ul>
        <span className="font-bold">On this page:</span>
        {links.map((link, index) => {
         return (
          <li key={`report_side_menu_${index}`} className={`pt-xl text-sage-dark hover:text-sage-base ${activeSection === link.id ? "font-bold" : ""}`}>
            <LinkText href={`#${link.id}`} variant={"default"} color={activeSection === link.id ? "black":"gray"}>{link.text}</LinkText>
          </li>
        )})}
      </ul>
    </aside>
  );
};

export default ReportSideMenu;
