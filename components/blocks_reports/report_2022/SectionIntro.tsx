import { useEffect, useState } from "react";
import classNames from "classnames";

import ArrowDown from "./Atoms/ArrowDown";

const SectionIntro = ({ section, i }) => {
  const hoverStyles = classNames({
    "group-hover:text-gold-900": section.colorTheme == "gold",
    "group-hover:text-plum-500": section.colorTheme == "plum",
    "group-hover:text-sage-600": section.colorTheme == "sage",
    "group-hover:text-purple-600": section.colorTheme == "purple",
    "group-hover:text-navy-600": section.colorTheme == "navy",
  });

  const borderStyles = classNames({
    // "hover:border-t-2 hover:border-gold-900": section.colorTheme == "gold",
    "hover:border-t-2 hover:border-plum-500": section.colorTheme == "plum",
    "hover:border-t-2 hover:border-sage-600": section.colorTheme == "sage",
    "hover:border-t-2 hover:border-purple-600": section.colorTheme == "purple",
    "hover:border-t-2 hover:border-navy-600": section.colorTheme == "navy",
  });

  return (
    <section
      id={`${section.anchor}`}
      className={`group pb-8 ${
        section.anchor == "gov-services" ? "" : "border-t-2"
      } border-gray-200 ${borderStyles}`}
      tabIndex={0}
    >
      <div className="responsive-container">
        <div
          className={`flex flex-row justify-between items-baseline w-full text-gray-300 ${hoverStyles} group-hover:cursor-pointer`}
        >
          <span className="text-7xl font-sans font-black spacing-y-sm">
            {section.title}
          </span>

          <span
            className={`opacity-0 group-hover:opacity-100 min-w-max font-serif text-lg`}
          >
            <div className="flex flex-row items-center gap-1">
              {section.themeNum == "1" ? "Read Introduction" : "Read Stories"}
              <ArrowDown color={section.colorTheme} size="default" />
            </div>
          </span>
        </div>
      </div>
    </section>
  );
};

export default SectionIntro;
