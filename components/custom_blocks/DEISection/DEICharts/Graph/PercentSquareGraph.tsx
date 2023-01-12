import { usePopperTooltip } from "react-popper-tooltip";
import "react-popper-tooltip/dist/styles.css";
// additional JS to look for
// How do you notify them when the graph has changed --
// -- For filter by - could include screen reader only text ( like aria label or field set w/ legend)
//     -- could add hidden span with the text
// could wrap graphs into aria-role = "live"
// https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/ARIA_Live_Regions
interface PercentSquareGraphInterface {
  percent: string;
  multiPercent?: number;
  description: string;
  category?: string;
  theme?: string;
  showTooltip?: boolean;
  tooltipText?: string;
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
    <div
      ref={setRef}
      {...getProps({ className: "tooltip-container max-w-[50vw] ml-sm" })}
    >
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
  tooltipText = null,
  fixed = false,
}) => {
  const {
    getArrowProps,
    getTooltipProps,
    setTooltipRef,
    setTriggerRef,
    visible,
  } = usePopperTooltip({ placement: "top" });
  const percentLabel = (Number(percent)<1 && Number(percent)>0) ? "<1%":`${percent}%`;
  tooltipText =
    tooltipText ?? `${percent}% of ${category} identify as ${description}.`;

  return (
    <div className="" aria-label={tooltipText}>
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
            w-full overflow-hidden
            transition-all ease-in-out duration-300
          `}
          style={{ height: `${percent}%` }}
        >
          <Pattern/>
        </div>
        {multiPercent !== null && (
          <div
            className={`
            absolute bottom-0 left-0 
            bg-gray-500
            w-full  opacity-90
            transition-all ease-in-out duration-300
          `}
            style={{ height: `${multiPercent}%` }}
          >
             
          </div>
        )}
      </div>
      <p className="type-preset-4" aria-hidden={true}>
        {percentLabel}
      </p>
      <p className="type-preset-6" aria-hidden={true}>
        {description}
      </p>
    </div>
  );
};

const Pattern = () => {
  return (
    <div className="w-full">

    
    <svg
      width="354"
      height="354"
      viewBox="0 0 244 244"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_518_7112)">
        <g clipPath="url(#clip1_518_7112)">
          <g clipPath="url(#clip2_518_7112)">
            <g clipPath="url(#clip3_518_7112)">
              <path
                d="M-208.686 223.275L223.564 -208.975"
                stroke="white"
                strokeWidth="1"
              />
              <path
                d="M-201.516 230.444L230.734 -201.805"
                stroke="white"
                strokeWidth="1"
              />
              <path
                d="M-194.38 237.614L237.904 -194.669"
                stroke="white"
                strokeWidth="1"
              />
              <path
                d="M-187.21 244.784L245.073 -187.499"
                stroke="white"
                strokeWidth="1"
              />
              <path
                d="M-180.041 251.92L252.209 -180.329"
                stroke="white"
                strokeWidth="1"
              />
              <path
                d="M-172.871 259.09L259.379 -173.16"
                stroke="white"
                strokeWidth="1"
              />
              <path
                d="M-165.735 266.26L266.548 -166.024"
                stroke="white"
                strokeWidth="1"
              />
              <path
                d="M-158.565 273.429L273.718 -158.854"
                stroke="white"
                strokeWidth="1"
              />
              <path
                d="M-151.395 280.566L280.855 -151.684"
                stroke="white"
                strokeWidth="1"
              />
              <path
                d="M-144.226 287.735L288.024 -144.515"
                stroke="white"
                strokeWidth="1"
              />
              <path
                d="M-137.089 294.905L295.195 -137.379"
                stroke="white"
                strokeWidth="1"
              />
              <path
                d="M-129.92 302.075L302.364 -130.209"
                stroke="white"
                strokeWidth="1"
              />
              <path
                d="M-122.75 309.245L309.533 -123.039"
                stroke="white"
                strokeWidth="1"
              />
              <path
                d="M-115.58 316.38L316.67 -115.869"
                stroke="white"
                strokeWidth="1"
              />
              <path
                d="M-108.411 323.55L323.839 -108.699"
                stroke="white"
                strokeWidth="1"
              />
              <path
                d="M-101.273 330.72L331.01 -101.563"
                stroke="white"
                strokeWidth="1"
              />
              <path
                d="M-94.1045 337.89L338.179 -94.3936"
                stroke="white"
                strokeWidth="1"
              />
              <path
                d="M-86.9346 345.026L345.315 -87.2239"
                stroke="white"
                strokeWidth="1"
              />
              <path
                d="M-79.7646 352.196L352.485 -80.054"
                stroke="white"
                strokeWidth="1"
              />
              <path
                d="M-72.6289 359.365L359.655 -72.9182"
                stroke="white"
                strokeWidth="1"
              />
              <path
                d="M-65.459 366.535L366.824 -65.7485"
                stroke="white"
                strokeWidth="1"
              />
              <path
                d="M-58.29 373.671L373.96 -58.5786"
                stroke="white"
                strokeWidth="1"
              />
              <path
                d="M-51.1201 380.841L381.13 -51.4087"
                stroke="white"
                strokeWidth="1"
              />
              <path
                d="M-43.9844 388.011L388.299 -44.2727"
                stroke="white"
                strokeWidth="1"
              />
              <path
                d="M-36.8135 395.18L395.47 -37.1033"
                stroke="white"
                strokeWidth="1"
              />
              <path
                d="M-29.6445 402.316L402.605 -29.9333"
                stroke="white"
                strokeWidth="1"
              />
              <path
                d="M-22.4746 409.486L409.775 -22.7634"
                stroke="white"
                strokeWidth="1"
              />
              <path
                d="M-15.3389 416.656L416.945 -15.6274"
                stroke="white"
                strokeWidth="1"
              />
              <path
                d="M-8.16895 423.826L424.115 -8.45776"
                stroke="white"
                strokeWidth="1"
              />
              <path
                d="M-0.999023 430.995L431.284 -1.28809"
                stroke="white"
                strokeWidth="1"
              />
              <path
                d="M6.17188 438.131L438.422 5.88184"
                stroke="white"
                strokeWidth="1"
              />
              <path
                d="M13.3408 445.301L445.591 13.0515"
                stroke="white"
                strokeWidth="1"
              />
              <path
                d="M20.4756 452.471L452.759 20.1875"
                stroke="white"
                strokeWidth="1"
              />
            </g>
          </g>
        </g>
      </g>
      <defs>
        <clipPath id="clip0_518_7112">
          <rect
            width="243.402"
            height="243.402"
            fill="white"
            transform="translate(0.335938 0.046875)"
          />
        </clipPath>
        <clipPath id="clip1_518_7112">
          <rect
            width="243.402"
            height="243.402"
            fill="white"
            transform="translate(0.335938 0.046875)"
          />
        </clipPath>
        <clipPath id="clip2_518_7112">
          <rect
            width="243.402"
            height="243.402"
            fill="white"
            transform="translate(0.335938 0.046875)"
          />
        </clipPath>
        <clipPath id="clip3_518_7112">
          <rect
            width="662.055"
            height="662.055"
            fill="white"
            transform="translate(-208.99 -209.279)"
          />
        </clipPath>
      </defs>
    </svg>
    </div>
  );
};
