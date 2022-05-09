import classNames from "classnames";

type LinkTextVariant = "default" | "arrow" | "large arrow" | "underlined";
export interface LinkTextProps {
  href: string;
  variant: LinkTextVariant;
}

export const LinkText: React.FC<LinkTextProps> = ({
  children,
  href,
  variant,
}) => {
  // checks id external link and adds blank target it is so url opens in another tab
  const target = href.substr(0, 1) === "/" ? "" : "_blank";

  const variantStyles = classNames({
    underline: variant == "underlined",
    "type-preset-5": variant == "large arrow",
  });

  return (
    <a
      className={`group text-black hover:text-sage-base inline-flex items-center gap-sm ${variantStyles}`}
      href={href}
      target={target}
    >
      {children}
      {(variant == "arrow" || variant == "large arrow") && (
        <svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            className="fill-black group-hover:fill-sage-base"
            fillRule="evenodd"
            clipRule="evenodd"
            d="M8 0L6.59 1.41L12.17 7H0V9H12.17L6.59 14.59L8 16L16 8L8 0Z"
          />
        </svg>
      )}
    </a>
  );
};
