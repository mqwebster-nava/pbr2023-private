import { useEffect, useState } from "react";

const SectionIntro = ({ section, i }) => {
  const colorTheme = section.colorTheme ?? "purple";
  const bg =
    section.colorTheme === "gold"
      ? `bg-${colorTheme}-dark`
      : `bg-${colorTheme}-900`;
  const textColor = "white";

  return (
    <>
      <section
      id={`${section.anchor}`}
      className="h-auto md:h-[140vh] scroll-mt-[70px] border-t-2 border-gray-200"
      tabIndex={0}
      >
      </section>

      {section.title}
      <br />
      <br />
      <div>{Object.keys(section).map(function(k){return k}).join(", ")}</div>
    </>
  );
};

export default SectionIntro;
