import Image from "next/image";
import { Button } from "../../atom/Button/Button";
export interface LeftRepeaterInterface {
  title: string;
  image: StaticImageData;
  colorTheme: string;
  buttonText?: string;
  buttonPath?: string;
  isStorybook?:boolean;
}

const LeftRepeater: React.FC<LeftRepeaterInterface> = ({
  title,
  image,
  buttonPath,
  buttonText,
  colorTheme,
  children,
  isStorybook
}) => {

  return (
    <div className={"mx-3xl my-2xl"}>
    <div className={`w-full flex flex-col md:flex-row`}>
      <div className={`w-full md:w-1/3 `}>
       { isStorybook ? <Image height={"300px"} width={"300px"} src={image} /> :
            <Image src={image} />
        }
      </div>
      <div className={`w-full md:w-2/3 md:ml-xl flex justify-between flex-col`}>
        <div>
        <h3 className={`font-sans text-lg `}>{title} </h3>
        <p className={`font-sans pt-lg text-base text-grey-base`}>{children}</p>
        </div>
        {buttonText && <Button colorTheme={colorTheme} href={buttonPath}>{buttonText}</Button> }
      </div>
    </div>
    </div>
  );
};

export default LeftRepeater;
