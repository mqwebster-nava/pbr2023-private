import Arrow from "./Arrow";
import { useRef } from "react";

export interface NavigationArrowsInterface {
  color?: string;
  handleNextSection;
  handlePrevSection;
  layout?: "horizontal" | "vertical";
}

const NavigationArrows = ({
  color,
  handleNextSection,
  handlePrevSection,
  layout = "vertical",
}: NavigationArrowsInterface) => {
  const nextArrowRef = useRef(null);
  const prevArrowRef = useRef(null);

  return (
    <div className={`w-full flex md:flex-col md:gap-8 ${layout == 'vertical' ? `flex-col gap-4` : `flex-row-reverse justify-between`}`}>
      <button
        disabled={handleNextSection ? false : true}
        onMouseOver={() => {
          if (handleNextSection && handlePrevSection) return prevArrowRef.current.style.opacity = "0.25"
        }}
        onMouseLeave={() => {
          if (handleNextSection && handlePrevSection) return prevArrowRef.current.style.opacity = "1"
        }}
        ref={nextArrowRef}
        className={`group/nextArrow flex flex-col items-end disabled:opacity-25`}
        onClick={handleNextSection}
      >
        <div className={`-rotate-90`}>
          <Arrow color={color} />
        </div>
        <div className={`${layout == 'horizontal' ? `` : `hidden`} md:block group-hover/nextArrow:underline group-disabled/nextArrow:no-underline font-serif`}>Next</div>
      </button>

      <button
        disabled={handlePrevSection ? false : true}
        onMouseOver={() => {
          if (handleNextSection && handlePrevSection) return nextArrowRef.current.style.opacity = "0.25"
        }}
        onMouseLeave={() => {
          if (handleNextSection && handlePrevSection) return nextArrowRef.current.style.opacity = "1"
        }}
        ref={prevArrowRef}
        className={`group/prevArrow flex flex-col ${layout == 'horizontal' ? `items-start md:items-end` : `items-end`} disabled:opacity-25`}
        onClick={handlePrevSection}
      >
        <div className={`rotate-90`}>
          <Arrow color={color} />
        </div>
        <div className={`${layout == 'horizontal' ? `` : `hidden`} md:block group-hover/prevArrow:underline group-disabled/prevArrow:no-underline font-serif`}>Previous</div>
      </button>
    </div>
  );
};

export default NavigationArrows;
