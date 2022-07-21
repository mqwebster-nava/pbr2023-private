import classNames from "classnames";
import { AnalyticsLabelType } from "shared_interfaces/Analytics";

type LinkTextVariant = "default" | "" |"underlined";
type LinkColor = "black" |"sage" | "white" |"gray";

export interface LinkTextProps {
  href: string;
  variant: LinkTextVariant;
  color?: LinkColor;
  analyticsLabel?:AnalyticsLabelType
  ariaLabel?: string;
}

export const LinkText: React.FC<LinkTextProps> = ({
  children,
  href,
  variant,
  color="black",
  analyticsLabel="",
  ariaLabel=null
}) => {
  // checks id external link and adds blank target it is so url opens in another tab
  const loc =href.substr(0, 1);
  const target = (loc === "/" || loc==="#") ? "" : "_blank";

  const variantStyles = classNames({
    "underline decoration-1 whitespace-pre-wrap inline underline-offset-2": variant == "underlined",
  });
 
  const colorStyles = classNames({
    "text-sage-700 hover:text-sage-900 hover:underline decoration-1": color=="sage",
    "text-gray-900 hover:text-sage-700": color=="black",
    "text-gray-600 hover:text-sage-700": color=="gray",
    "text-white hover:underline decoration-1": color=="white"
  });
 


  return (
    <a
      className={` ${colorStyles} ${variantStyles} ${analyticsLabel}`}
      href={href}
      target={target}
      aria-label={ariaLabel}
    >
      {children}
    </a>
  );
};
