import { Button } from "../";
import styles from "./Details.module.css";

export interface ButtonProps {
  summary: string;
}

export const Details: React.FC<ButtonProps> = ({ summary, children }) => {
  return (
    <details className={`${styles.details} `}>
      <summary className="font-sans font-bold md:h-[70px]
    inline-flex items-center justify-center rounded-sm
    px-xl py-sm  
    type-preset-6 leading-6
    transition duration-150 ease-in-out flex-col
    cursor-pointer text-white  bg-sage-base  hover:bg-sage-900">
       {summary}
      </summary>
      {children}
    </details>
  );
};
