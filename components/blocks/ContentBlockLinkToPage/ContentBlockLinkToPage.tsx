
import Image from "next/image";
import { Button } from "../../atom/Button/Button";
import LeftRepeater from "./LeftRepeater";
import RightRepeater from "./RightRepeater";
type ContentBlockType = "default" | "left repeater" | "right repeater";

export interface ContentBlockInterface {
    title: string;
    buttonText:string; 
    buttonPath:string;
    type?: ContentBlockType;
    image?: StaticImageData;
    isStorybook?:boolean;
  }
  
  const ContentBlockLinkToPage: React.FC<ContentBlockInterface> = (props) => {
    if(props.type==="left repeater")return <LeftRepeater {...props} />
    if(props.type==="right repeater")return <RightRepeater {...props} ></RightRepeater>
    return <DefaultContentBlockLinkToPage {...props}  />
    
  }
const DefaultContentBlockLinkToPage: React.FC<ContentBlockInterface> = ({ title, type, buttonPath, buttonText, children}) =>{
return ( 
    <div className="responsive-container py-2xl">
    <div className={`w-full lg:w-2/3`}>
     
                 <h3 className="font-sans text-lg font-bold">{title} </h3>
                 <p className={`font-sans pt-lg text-base text-gray-800 mb-lg`}>{children}</p>
         
             {buttonText && <Button href={buttonPath} >{buttonText}</Button>}
         </div>
     </div> 
     );
}
  export default ContentBlockLinkToPage;