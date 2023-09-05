import classNames from "classnames";

type ArrowSize = 'large' | "default" | "";

export interface ArrowDownInterface {
    size?: ArrowSize;
    color?: string ;
    sectionId?;
    isAnimated?: boolean;
    isMobileHidden?: boolean;
}

const Arrow = ({size="default", color, sectionId, isAnimated=false, isMobileHidden=false} : ArrowDownInterface) => {
    const w = size == "default" ? "24" : "48";
    const h = w;

    const strokeStyles = classNames({
        "stroke-gold-900": color == "gold",
        "stroke-plum-500": color == "plum",
        "stroke-sage-600": color == "sage",
        "stroke-purple-600": color == "purple",
        "stroke-navy-600": color == "navy",
        "stroke-white": color == undefined || color == "" || color == "white",
    });

  return (
      <div className={`w-[${w}px] h-[${h}px]`}>
          <svg
            width={w}
            height={h}
            className={`${strokeStyles}`}
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M4 11.6328L11.9992 19.632L19.9984 11.6328"
              strokeWidth="2"
              strokeLinecap="square"
            />
            <path
              d="M11.998 18.9965V2.82031"
              strokeWidth="2"
              strokeLinecap="square"
            />
          </svg>
      </div>
  );
};

export default Arrow
