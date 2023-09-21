import Arrow from "./Arrow";
import { useRef } from "react";

export interface NavigationArrowsInterface {
  color?: string;
  handleNextSection;
  handlePrevSection;
}

const NavigationArrows = ({
  color,
  handleNextSection,
  handlePrevSection,
}: NavigationArrowsInterface) => {
  const nextArrowRef = useRef(null);
  const prevArrowRef = useRef(null);

  return (
    <div className={`flex flex-col gap-4 md:gap-8`}>
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
        <div className={`hidden md:block group-hover/nextArrow:underline group-disabled/nextArrow:no-underline font-serif`}>Next</div>
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
        className={`group/prevArrow flex flex-col items-end disabled:opacity-25`}
        onClick={handlePrevSection}
      >
        <div className={`rotate-90`}>
          <Arrow color={color} />
        </div>
        <div className={`hidden md:block group-hover/prevArrow:underline group-disabled/prevArrow:no-underline font-serif`}>Previous</div>
      </button>
    </div>
  );
};

export default NavigationArrows;
