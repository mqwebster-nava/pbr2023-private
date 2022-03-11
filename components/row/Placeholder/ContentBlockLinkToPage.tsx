
import Image from "next/image";
import { Button } from "components/atom/Button/Button";

interface ContentBlockInterface {
    title: string;
    buttonText:string;
    buttonPath:string;
  }
  
  
  const ContentBlockLinkToPage: React.FC<ContentBlockInterface> = ({ title,  buttonPath, buttonText, children}) => {
      return ( 
       <div className="responsive-container py-2xl">
       <div className={`w-full lg:w-2/3`}>
        
                    <h3 className="font-sans text-lg font-bold">{title} </h3>
                    <p className={`font-sans pt-lg text-base text-grey-base mb-lg`}>{children}</p>
            
                {buttonText && <Button href={buttonPath} >{buttonText}</Button>}
            </div>
        </div> 
        );
  }
    
  export default ContentBlockLinkToPage;