
import Image from "next/image";
import { Button } from "components/atom/Button/Button";

interface ContentBlockInterface {
    title: string;
    buttonText:string;
    buttonPath:string;
  }
  
  
  const ContentBlockLinkToPage: React.FC<ContentBlockInterface> = ({ title,  buttonPath, buttonText, children}) => {
      return ( 
       <div className="mx-3xl my-2xl">
       <div className={`w-full `}>
        
                    <h3 className="font-sans text-lg">{title} </h3>
                    <p className={`font-sans pt-lg text-base text-grey-base mb-md`}>{children}</p>
            
                {buttonText && <Button href={buttonPath} >{buttonText}</Button>}
            </div>
        </div> 
        );
  }
    
  export default ContentBlockLinkToPage;