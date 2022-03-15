import { icolor } from "utils/theme";

export interface ButtonProps   {
  href: string;
  isVariant?: boolean
}

export const Button: React.FC<ButtonProps> = ({ children, href,  isVariant, ...rest }) => {
  return (
    <div className={``} {...rest}>
      <a
        href={href}
        type='button'
        className={
          `font-sans uppercase 
          inline-flex items-center justify-center 
          px-md py-sm 
          text-sm leading-6 font-medium  
          transition duration-150 ease-in-out flex-col
          text-${icolor}-dark border border-${icolor}-dark 
          hover:text-white hover:bg-${icolor}-dark 
          cursor-pointer`
        }>
        {children}
      </a>
    </div>
  )
}
