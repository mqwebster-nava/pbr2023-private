import { useEffect, useState } from "react";
import classNames from "classnames";

import ArrowDown from "./Atoms/ArrowDown";

const SectionIntro = ({ section, i }) => {
  const colorTheme = section.colorTheme;
  const bg =
    section.colorTheme === "gold"
      ? `bg-${colorTheme}-dark`
      : `bg-${colorTheme}-900`;

  const hoverStyles = classNames({
    "hover:text-gold-900": section.colorTheme == "gold",
    "hover:text-plum-500": section.colorTheme == "plum",
    "hover:text-sage-600": section.colorTheme == "sage",
    "hover:text-purple-600": section.colorTheme == "purple",
    "hover:text-navy-600": section.colorTheme == "navy",
  });

  return (
    <section
      id={`${section.anchor}`}
      className={`pb-8 ${
        section.anchor == "gov-services" ? "" : "border-t-2"
      } border-gray-200"`}
      tabIndex={0}
    >
      <div className="responsive-container">
        <div
          className={`flex flex-row justify-between w-full text-gray-300 ${hoverStyles} hover:cursor-pointer group`}
        >
          <span className="text-7xl font-sans font-black spacing-y-sm">
            {section.title}
          </span>

          <span
            className={`opacity-0 group-hover:opacity-100 min-w-max min-h-full font-serif text-lg pt-11 bg-navy-50`}
          >
            <div className="flex flex-row align-middle gap-1 h-fit">
              {section.themeNum == "1" ? "Read Introduction" : "Read Stories"}
              <ArrowDown color={section.colorTheme} />
            </div>
          </span>
        </div>
      </div>
    </section>
  );
};

export default SectionIntro;
