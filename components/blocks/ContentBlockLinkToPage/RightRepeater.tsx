
import Image from "next/image";
import { Button } from "../../atom/Button/Button";
import { ContentBlockInterface } from "./ContentBlockLinkToPage";

  
  const RightRepeater: React.FC<ContentBlockInterface> = ({ title, image, buttonPath, buttonText,isStorybook, children}) => {
      return ( 
       <div className="responsive-container py-2xl">
       <div className={`w-full flex flex-col-reverse md:flex-row`}>
            <div className="w-full md:w-1/3 pr-xl flex justify-between flex-col"> 
                <div className="">
                    <h3 className="font-sans text-lg font-bold">{title} </h3>
                    <p className={`font-sans pt-lg text-base text-gray-800 mb-lg`}>{children}</p>
                </div>
                {buttonText && <Button href={buttonPath}>{buttonText}</Button>}
            </div>
            <div className="w-full md:w-2/3 relative "> 
               
            { isStorybook ? <Image quality={50} layout="fill"  className={"object-cover"}src={image} /> :
            <Image quality={50}  className={"object-cover"}src={image}/>
        }
            </div> 
        </div> 
        </div>
        );
  }
    
  export default RightRepeater;