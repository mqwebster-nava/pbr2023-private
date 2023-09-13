import Arrow from "./Arrow";

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
  return (
    <div className={`flex flex-col gap-8`}>
      <button className={`flex flex-col w-5 [&:hover~*]:opacity-25`} onClick={handleNextSection}>
        <div className={`-rotate-90`}>
          <Arrow color={color} />
        </div>
        <div className={``}>Next</div>
      </button>

      <button className={`flex flex-col w-5 [&:hover~*]:opacity-25`} onClick={handlePrevSection}>
        <div className={`rotate-90`}>
          <Arrow color={color} />
        </div>
        <div className={``}>Previous</div>
      </button>
    </div>
  );
};

export default NavigationArrows;
