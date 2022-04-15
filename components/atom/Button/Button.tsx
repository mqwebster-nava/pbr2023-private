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
  variant = "default",
  ...rest
}) => {
  const variantStyles = classNames({
    "text-white bg-black hover:bg-white hover:text-black": variant == "black",
    "text-black border hover:bg-sage-900 hover:text-white":
      variant == "outlined",
    "text-white  bg-sage-base  hover:bg-sage-900": variant == "default",
  });

  return (
    <div className={``} {...rest}>
      <a
        href={href}
        type='button'
        className={
          `font-sans
          inline-flex items-center justify-center rounded-sm
          px-sm py-sm  
          text-base leading-6
          transition duration-150 ease-in-out flex-col
          cursor-pointer
          ${variantStyles}`}
      >
        {children}
      </a>
    </div>
  );
};
