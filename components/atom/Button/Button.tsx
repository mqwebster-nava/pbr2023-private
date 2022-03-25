import { icolor } from "utils/theme";

export interface ButtonProps {
  href: string;
  isVariant?: boolean;
}

// TODO button 
// -- rounded

export const Button: React.FC<ButtonProps> = ({
  children,
  href,
  isVariant,
  ...rest
}) => {

  
  return (
    <div className={``} {...rest}>
      <a
        href={href}
        type='button'
        className={
          `font-sans
          inline-flex items-center justify-center
          px-sm py-sm 
          text-base leading-6
          transition duration-150 ease-in-out flex-col
          cursor-pointer
          ${isVariant ?
            "text-black border hover:bg-sage-900 hover:text-white"
          : "text-white  bg-sage-base  hover:bg-sage-900  "}
           `

        }>
        {children}
      </a>
    </div>
  );
};




// <button
// type="button"
// className="
// text-navy-900 font-sans text-base 
// bg-gold-700 hover:bg-gold-800 
// focus:outline-none focus:ring-4 
// focus:ring-gold-300 font-medium 
// rounded-sm  px-5 py-2.5 text-center 
// mr-2 mb-2 
// dark:bg-gold-600 dark:hover:bg-gold-700  dark:focus:ring-gold-800"
// >
// Get In Touch
// </button>
