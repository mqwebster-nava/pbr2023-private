import classNames from "classnames";
import React from "react";
import { AnalyticsLabelType } from "utils/Analytics";
type Variant = "default" | "outlined" | "white" | "dark" | "outlined white" |"";
type HEIGHT = "default" | "slim";

export interface ButtonProps {
  href?: string;
  variant?: Variant;
  buttonAriaLabel?:string;
  analyticsLabel?:AnalyticsLabelType;
  height?: HEIGHT;
  onClick?: () => void;
}

// TODO button

export const Button: React.FC<ButtonProps> = ({
  children,
  href,
  variant = "default",
  buttonAriaLabel=null,
  analyticsLabel="",
  onClick=null,
  height="default"
}) => {
  const variantStyles = classNames({
    "text-sage-700 bg-white hover:bg-sage-100": variant == "white",
    "text-sage-700 border border-sage-700 hover:bg-sage-100":
      variant == "outlined",
    "text-white border border-sage-700 hover:bg-sage-700":
      variant == "outlined white",
    "text-white  bg-sage-base  hover:bg-sage-900": variant == "default",
    "text-white  bg-sage-900  hover:bg-black": variant == "dark",
  });
  const heightStyles = classNames({
    "h-[55px] md:h-[70px]": height == "default",
    "": height == "slim",
  });

  return (
    <div>
    <button 
    aria-label={buttonAriaLabel}
    onClick={()=> {onClick?onClick() :location.href = href;}}
    className={
          `font-sans font-bold ${heightStyles}
          inline-flex items-center justify-center 
          px-2xl py-sm  
          mr-auto
          type-preset-7 md:type-preset-6 leading-6
          transition duration-150 ease-in-out flex-row
          cursor-pointer
          ${variantStyles}
          ${analyticsLabel}`}
      >
        {children}
      </button>
      </div>
  );
};
