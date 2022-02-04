
import Image from "next/image";
export interface RightRepeaterInterface {
    title: string;
    image?: StaticImageData;
    buttonText?:string;
    buttonPath?:string;
  }
  
  
  const RightRepeater: React.FC<RightRepeaterInterface> = ({ title, image, buttonPath, buttonText, children}) => {
      return ( 
       <div className="mx-3xl my-2xl">
       <div className={`w-full  flex`}>
            <div className="w-1/3 pr-xl"> 
                <h3 className={`font-sans text-xl `}>{title} </h3>
                <p className={`font-sans pt-lg text-xl text-grey-base`}>{children}</p>
            </div>
            <div className="w-2/3"> 
                <Image src={image}></Image>
            </div> 
        </div> 
        </div>
        );
  }
    
  export default RightRepeater;