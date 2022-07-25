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
    sage: "bg-sage-400",
    gold: "bg-gold-900",
    purple: "bg-purple-900",
  },
  backgroundColor: {
    sage: "bg-sage-50",
    gold: "bg-gold-50",
    purple: "bg-purple-50",
  },
};

const GraphTooltip = ({ text, setRef, getProps, getArrowProps }) => {
  return (
    <div ref={setRef} {...getProps({ className: "tooltip-container" })}>
      <p className="type-preset-6">{text}</p>
      <div {...getArrowProps({ className: "tooltip-arrow" })} />
    </div>
  );
};

export const PercentSquareGraph: React.FC<PercentSquareGraphInterface> = ({
  percent,
  multiPercent = null,
  description,
  category = "All employees",
  theme = "sage",
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
    <div className="my-2 mr-2" aria-label={tooltipText}>
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
      <p className="type-preset-4" aria-hidden={true}>{percent}%</p>
      <p className="type-preset-6"  aria-hidden={true}>{description}</p>
    </div>
  );
};
