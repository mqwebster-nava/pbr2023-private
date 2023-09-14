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
    <div className={`flex flex-col gap-8`}>
      <button onMouseOver={() => prevArrowRef.current.style.opacity = "0.25"} onMouseLeave={() => prevArrowRef.current.style.opacity = "1"} ref={nextArrowRef} className={`group/nextArrow flex flex-col w-5`} onClick={handleNextSection}>
        <div className={`-rotate-90`}>
          <Arrow color={color} />
        </div>
        <div className={`group-hover/nextArrow:underline`}>Next</div>
      </button>

      <button onMouseOver={() => nextArrowRef.current.style.opacity = "0.25"} onMouseLeave={() => nextArrowRef.current.style.opacity = "1"} ref={prevArrowRef} className={`group/prevArrow flex flex-col w-5`} onClick={handlePrevSection}>
        <div className={`rotate-90`}>
          <Arrow color={color} />
        </div>
        <div className={`group-hover/prevArrow:underline`}>Previous</div>
      </button>
    </div>
  );
};

export default NavigationArrows;
