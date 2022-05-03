import { ButtonProps } from "./Button";

export interface FormInputButtonProps {
  value: string;
  name: string;
  id: string;
}


const FormInputButton = ({
    value, name, id
  }: FormInputButtonProps) => {
    
    return (
      <input 
      type="submit"
      value={value}
      name={name}
      id={id}
      className={`
            font-sans font-bold h-[70px]
            inline-flex items-center justify-center rounded-sm
            px-lg py-sm  
            text-base leading-6
            transition duration-150 ease-in-out flex-col
            cursor-pointer
            text-white  bg-sage-900 hover:bg-black
      `}/>
    );
  };

export default FormInputButton;
  