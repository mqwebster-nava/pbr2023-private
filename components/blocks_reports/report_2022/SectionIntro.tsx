import { useEffect, useState } from "react";

const SectionIntro = ({ section, i }) => {
  const colorTheme = section.colorTheme ?? "purple";
  const bg =
    section.colorTheme === "gold"
      ? `bg-${colorTheme}-dark`
      : `bg-${colorTheme}-900`;
  const textColor = "white";

  return (
    <section
    id={`${section.anchor}`}
    className="pb-8 border-t-2 border-gray-200"
    tabIndex={0}
    >
      <div className="responsive-container">
        <div className=" w-[1048px]"><span className="text-7xl font-sans font-black spacing-y-sm text-gray-300">{section.title}</span></div>
      </div>
    </section>
  );
};

export default SectionIntro;
