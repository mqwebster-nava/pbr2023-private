
export interface ButtonProps   {
  href: string;
  colorTheme?: string;
  isVariant?: boolean
}

export const Button: React.FC<ButtonProps> = ({ children, href, colorTheme, isVariant, ...rest }) => {
  if(!colorTheme)colorTheme="sage";
  return (
    <div className={``} {...rest}>
      <a
      href={href}
        type='button'
        className={
          `font-sans inline-flex items-center justify-center px-sm py-sm border border-transparent text-base leading-6 font-medium rounded-md focus:outline-none focus:shadow-outline transition duration-150 ease-in-out flex-col
          text-white bg-grey-base hover:bg-${colorTheme}-base`
        }>
        {children}
      </a>
    </div>
  )
}

//bg-${colorTheme}-dark hover:bg-${colorTheme}-base`
