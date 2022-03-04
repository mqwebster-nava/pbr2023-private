
import Image from "next/image";
import { Button } from "components/atom/Button/Button";
export interface RightRepeaterInterface {
    title: string;
    image?: StaticImageData;
    buttonText?:string;
    buttonPath?:string;
    colorTheme:string;
  }
  
  
  const RightRepeater: React.FC<RightRepeaterInterface> = ({ title, image, buttonPath, colorTheme, buttonText, children}) => {
      return ( 
       <div className="mx-3xl my-2xl">
       <div className={`w-full flex flex-col-reverse md:flex-row`}>
            <div className="w-full md:w-1/3 pr-xl flex justify-between flex-col"> 
                <div className="">
                    <h3 className="font-sans text-lg">{title} </h3>
                    <p className={`font-sans pt-lg text-base text-grey-base`}>{children}</p>
                </div>
                {buttonText && <Button href={buttonPath} colorTheme={colorTheme}>{buttonText}</Button>}
            </div>
            <div className="w-full md:w-2/3"> 
                <Image src={image}></Image>
            </div> 
        </div> 
        </div>
        );
  }
    
  export default RightRepeater;