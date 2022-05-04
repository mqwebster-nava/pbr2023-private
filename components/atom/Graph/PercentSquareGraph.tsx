import { usePopperTooltip } from "react-popper-tooltip";
import "react-popper-tooltip/dist/styles.css";

interface PercentSquareGraphInterface {
  percent: string;
  multiPercent?: number;
  description: string;
  category?: string;
  theme?: string;
  showTooltip?: boolean;
  fixed?: boolean;
}

const colors = {
  innerColor: {
    teal: "bg-sage-pbr-2020",
    orange: "bg-orange-dark",
    blue: "bg-blue-dark",
  },
  backgroundColor: {
    teal: "bg-sea-foam-base",
    orange: "bg-orange-light",
    blue: "bg-blue-light",
  },
};

const GraphTooltip = ({ text, setRef, getProps, getArrowProps }) => {
  return (
    <div ref={setRef} {...getProps({ className: "tooltip-container" })}>
      <p className="type-preset-7">{text}</p>
      <div {...getArrowProps({ className: "tooltip-arrow" })} />
    </div>
  );
};

export const PercentSquareGraph: React.FC<PercentSquareGraphInterface> = ({
  percent,
  multiPercent = null,
  description,
  category = "",
  theme = "teal",
  showTooltip = true,
  fixed = false,
}) => {
  const {
    getArrowProps,
    getTooltipProps,
    setTooltipRef,
    setTriggerRef,
    visible,
  } = usePopperTooltip({ placement: "top" });

  const tooltipText = `${percent}% of ${category} identify as ${description}.`;

  return (
    <div className="my-2 mr-2">
      {showTooltip && visible && (
        <GraphTooltip
          text={tooltipText}
          setRef={setTooltipRef}
          getProps={getTooltipProps}
          getArrowProps={getArrowProps}
        />
      )}
      <div
        ref={setTriggerRef}
        className={`
          h-[120px]
          w-full
          ${colors.backgroundColor[theme]}
          relative
          ${!fixed ? "hover:border border-gray-500" : ""}
        `}
      >
        <div
          className={`
            absolute bottom-0 left-0 
            ${colors.innerColor[theme]}
            w-full 
            transition-all ease-in-out duration-300
          `}
          style={{ height: `${percent}%` }}
        ></div>
        {multiPercent !== null && (
          <div
            className={`
            absolute bottom-0 left-0 
            bg-gray-500
            w-full 
            transition-all ease-in-out duration-300
          `}
            style={{ height: `${multiPercent}%` }}
          ></div>
        )}
      </div>
      <p className="type-preset-4">{percent}%</p>
      <p className="type-preset-7">{description}</p>
    </div>
  );
};
