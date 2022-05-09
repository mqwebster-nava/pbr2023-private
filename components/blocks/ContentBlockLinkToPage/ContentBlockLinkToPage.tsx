
import Image from "next/image";
import { Button } from "../../atom/Button/Button";
import LeftRepeater from "./LeftRepeater";
import RightRepeater from "./RightRepeater";
type ContentBlockType = "default" | "left repeater" | "right repeater";
import { MarkdownComponent } from "utils/utils";
import { ContentfulImageAsset } from "shared_interfaces/post_interface";

export interface ContentBlockInterface {
    id:string;
    title: string;
    body?:any;
    buttonText:string; 
    buttonPath:string;
    type?: ContentBlockType;
    image?: ContentfulImageAsset;
    isStorybook?:boolean;
  }
  
  const ContentBlockLinkToPage = (props:ContentBlockInterface) => {
    if(props.type==="left repeater")return <LeftRepeater {...props} />
    if(props.type==="right repeater")return <RightRepeater {...props} ></RightRepeater>
    return <DefaultContentBlockLinkToPage {...props}  />
    
  }
const DefaultContentBlockLinkToPage: React.FC<ContentBlockInterface> = ({id, title, body, type, buttonPath, buttonText}) =>{
return ( 
    <div className="responsive-container py-2xl" key={id}>
    <div className={`w-full lg:w-2/3`}>
     
                 <h3 className="font-sans type-preset-3 font-bold">{title} </h3>
                 <p className={`font-sans pt-lg type-preset-5 text-gray-800 mb-lg`}>{<MarkdownComponent content={body} />}</p>
         
             {buttonText && <Button href={buttonPath} variant="outlined" >{buttonText}</Button>}
         </div>
     </div> 
     );
}

export default ContentBlockLinkToPage;