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
          `font-sans inline-flex items-center justify-center px-sm py-sm border border-transparent text-base leading-6 font-medium rounded-md focus:outline-none focus:shadow-outline transition duration-150 ease-in-out flex-col
          text-white bg-grey-base hover:bg-${icolor}-base cursor-pointer`
        }>
        {children}
      </a>
    </div>
  )
}

//bg-${colorTheme}-dark hover:bg-${colorTheme}-base`
