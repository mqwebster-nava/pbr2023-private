import classNames from "classnames";
import React from "react";
type Variant = "default" | "outlined" | "white" | "dark";

export interface ButtonProps {
  href?: string;
  variant?: Variant;
}

// TODO button
// -- rounded

export const Button: React.FC<ButtonProps> = ({
  children,
  href,
  variant = "default",
}) => {
  const variantStyles = classNames({
    "text-sage-700 bg-white hover:bg-sage-100": variant == "white",
    "text-sage-700 border border-sage-700 hover:bg-sage-100":
      variant == "outlined",
    "text-white  bg-sage-base  hover:bg-sage-900": variant == "default",
    "text-white  bg-sage-900  hover:bg-black": variant == "dark",

  });

  return (
    <div>
    <button 
onClick={()=> {location.href = href;}}
    className={
          `font-sans font-bold md:h-[70px]
          inline-flex items-center justify-center rounded-sm
          px-xl py-sm  
         mr-auto
          type-preset-6 leading-6
          transition duration-150 ease-in-out flex-col
          cursor-pointer
          ${variantStyles}`}
      >
        {children}
      </button>
      </div>
  );
};
