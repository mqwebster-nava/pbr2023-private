
import Image from "next/image";
import { Button } from "components/atom/Button/Button";
import { Children } from "react";

interface ContentBlockInterface {
    title?: string;
    buttonText?:string;
    buttonPath?:string;
    body?: string;
  }
  
  
  const ContentBlockArticleList: React.FC<ContentBlockInterface> = ({ title,  body, buttonPath, buttonText, children}) => {
    const childrenArray = Children.toArray(children);

    return ( 
       <div className="responsive-container py-2xl">
       <div className={`w-full `}>
        
                  {title &&  <h3 className="font-sans text-lg font-bold">{title} </h3> }
                  {body && <p className={`font-sans pt-lg text-base text-grey-base mb-md`}>{body}</p> }
                    <div className={`w-full flex  items-stretch md:flex-row flex-col gap-8 my-3xl `}>
            <div className="w-full md:w-1/3 self-stretch"> {childrenArray[0]} </div>
            <div className="w-full md:w-1/3 self-stretch"> {childrenArray[1]} </div>
            <div className="w-full md:w-1/3 self-stretch"> {childrenArray[2]} </div>
        </div> 
                    
                {buttonText && <Button href={buttonPath} >{buttonText}</Button>}
            </div>
        </div> 
        );
  }
    
  export default ContentBlockArticleList;