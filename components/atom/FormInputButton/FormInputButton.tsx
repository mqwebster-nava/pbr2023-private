import classNames from "classnames";

export interface FormInputButtonProps {
  value: string;
  name: string;
  id: string;
  onClick?: any;
  isFullWidth?: boolean;
}


const FormInputButton = ({
    value, name, id, onClick=null, isFullWidth=false
  }: FormInputButtonProps) => {
    
    const isFullW = classNames({
     "w-full lg:w-auto": isFullWidth,
    })
    return (
      <input 
      type="submit"
      value={value}
      name={name}
      id={id}
      onClick={onClick}
      className={`
            font-sans font-bold h-[70px]
            inline-flex items-center justify-center 
            px-2xl py-sm  
            type-preset-6 leading-6
            transition duration-150 ease-in-out flex-col
            cursor-pointer
            text-white  bg-sage-900 hover:bg-black
            ${isFullW}
      `}/>
    );
  };

export default FormInputButton;
  