import classNames from "classnames";
import { AnalyticsLabelType } from "shared_interfaces/Analytics";

type LinkTextVariant = "default" | "" | "underlined";
type LinkColor = "black" | "sage" | "white" | "gray" | "";
type LinkHover = "underlined" | "sage";

export interface LinkTextProps {
  href: string;
  color?: LinkColor;
  onClick?: any;
  variant: LinkTextVariant;
  hoverStyle?: LinkHover;
  analyticsLabel?: AnalyticsLabelType;
  ariaLabel?: string;
  isBolded?: boolean
}

export const LinkListItem: React.FC<LinkTextProps> = ({
  children,
  href,
  onClick = null,
  variant,
  color = "black",
  hoverStyle = null,
  analyticsLabel = "",
  ariaLabel = null,
  isBolded = false
}) => {
  // checks id external link and adds blank target it is so url opens in another tab
  const loc = href.substr(0, 1);
  const target = loc === "/" || loc === "#" ? "" : "_blank";

  const variantStyles = classNames({
    "underline decoration-1 whitespace-pre-wrap underline-offset-2":
      variant == "underlined",
  });

  const colorStyles = classNames({
    "text-sage-700": color == "sage",
    "text-gray-900": color == "black",
    "text-gray-600": color == "gray",
    "text-white": color == "white",
  });
  const hoverStyles = classNames({
    "hover:text-sage-900 hover:underline decoration-1": color == "sage",
    "hover:text-sage-700":
      hoverStyle === "sage" ||
      (!hoverStyle && (color == "black" || color == "gray")),
    "hover:underline decoration-1 hover:underline-offset-2":
      hoverStyle === "underlined" ||
      (!hoverStyle && color == "white") ||
      (!hoverStyle && color === ""),
  });

  return (
    <li
      className={`py-sm w-full `}
    >
      <a href={href} aria-label={ariaLabel} target={target} onClick={onClick}>
        <p
          className={`font-serif ${isBolded?"font-bold":"font-light"} type-preset-6  ${colorStyles} ${variantStyles} ${hoverStyles} ${analyticsLabel}`}
        >
          {children}
        </p>
      </a>
    </li>
  );
};

// border-t-[1px] border-white 