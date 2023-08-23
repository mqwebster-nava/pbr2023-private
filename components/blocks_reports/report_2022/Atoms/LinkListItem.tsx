import classNames from "classnames";
import { AnalyticsLabelType } from "utils/Analytics";
import ArrowDown from "./ArrowDown";

type LinkTextVariant = "default" | "" | "underlined" | "intro";
type LinkColor = "black" | "white" | "gray" | "gold" | "plum" | "sage" | "navy" | "purple" | "";
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
    "underline decoration-1 whitespace-pre-wrap underline-offset-2 type-preset-6":
      variant == "underlined",
    "type-preset-3": variant == "intro"
  });

  const textStyles = classNames({
    "text-gold-900": color == "gold",
    "text-plum-900": color == "plum",
    "text-sage-900": color == "sage",
    "text-purple-900": color == "purple",
    "text-navy-900": color == "navy",
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

  const borderStyles = classNames({
    "border-t-[1px] border-gold-900": color == "gold",
    "border-t-[1px] border-plum-500": color == "plum",
    "border-t-[1px] border-sage-600": color == "sage",
    "border-t-[1px] border-purple-600": color == "purple",
    "border-t-[1px] border-navy-600": color == "navy",
  });

  const hoverBgStyles = variant == "intro" && classNames({
    "hover:bg-gold-50": color == "gold",
    "hover:bg-plum-50": color == "plum",
    "hover:bg-sage-50": color == "sage",
    "hover:bg-purple-50": color == "purple",
    "hover:bg-navy-50": color == "navy",
  });

  return (
    <li
      className={`py-md w-full ${variantStyles} ${textStyles} ${borderStyles} ${hoverBgStyles} ${hoverStyles}`}
    >
      <div className={`responsive-container`}>
        <a href={href} aria-label={ariaLabel} target={target} onClick={onClick}>
          <div className={`flex items-center justify-between`}>
            <p
              className={`font-serif ${isBolded?"font-bold":"font-light"} ${analyticsLabel}`}
              data-refid={href.replace("#", "")}
            >
              {children}
            </p>

            <div className={``}>
              <ArrowDown color={color} />
            </div>
          </div>
        </a>
      </div>
    </li>
  );
};