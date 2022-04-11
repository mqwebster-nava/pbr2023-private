import classNames from "classnames";
type Variant = "default" | "outlined" | "black";


export interface ButtonProps {
  href?: string;
  variant?: Variant;
}

// TODO button 
// -- rounded

export const Button: React.FC<ButtonProps> = ({
  children,
  href,
  variant="default",
  ...rest
}) => {
  console.log(variant)

  const variantStyles = classNames({
    "text-white bg-black hover:bg-gray-200 hover:text-black": (variant=="black"),
    "text-sage-600 border hover:bg-sage-50 ": (variant=="outlined"),
    "text-white  bg-sage-base  hover:bg-sage-900": (variant==="default"),
  });

  return (
    <div className={``} {...rest}>
      <a
        href={href}
        type='button'
        className={
          `font-sans
          inline-flex items-center justify-center
          px-sm py-sm 
          rounded
          text-base leading-6
          transition duration-150 ease-in-out flex-col
          cursor-pointer
          ${variantStyles}`
        }>
        {children}
      </a>
    </div>
  );
};
