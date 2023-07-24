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
      className="h-auto md:h-[140vh] scroll-mt-[70px]"
      tabIndex={0}
    ></section>
  );
};

export default SectionIntro;
