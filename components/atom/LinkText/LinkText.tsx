import classNames from "classnames";

type LinkTextVariant = "default" | "underlined";
type LinkColor = "black" |"sage" | "white";

export interface LinkTextProps {
  href: string;
  variant: LinkTextVariant;
  color?: LinkColor;
}

export const LinkText: React.FC<LinkTextProps> = ({
  children,
  href,
  variant,
  color="black"
}) => {
  // checks id external link and adds blank target it is so url opens in another tab
  const target = href.substr(0, 1) === "/" ? "" : "_blank";

  const variantStyles = classNames({
    "underline decoration-1 whitespace-pre-wrap  inline": variant == "underlined",
  });
 
  const colorStyles = classNames({
    "text-sage-600 hover:text-sage-base hover:underline decoration-1": color=="sage",
    "text-gray-900 hover:text-sage-base": color=="black",
    "text-white hover:underline decoration-1": color=="white"
  });
 


  return (
    <a
      className={` ${colorStyles} ${variantStyles}`}
      href={href}
      target={target}
    >
      {children}
    </a>
  );
};
