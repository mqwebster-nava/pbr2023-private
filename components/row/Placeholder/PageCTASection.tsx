
import Image from "next/image";
import { Button } from "components/atom/Button/Button";

interface ContentBlockInterface {
    title: string;
    buttonText:string;
    buttonPath:string;
  }
  
  
  const PageCTASection: React.FC<ContentBlockInterface> = ({ title,  buttonPath, buttonText, children}) => {
      return ( 
        <div className = "bg-gray-400 w-full">
       <div className="responsive-container">
       <div className={`w-full lg:w-2/3`}>
                    <h3 className="font-sans text-lg">{title} </h3>
                    <p className={`font-sans pt-lg text-base text-grey-base mb-lg`}>{children}</p>
            
                {buttonText && <Button href={buttonPath} >{buttonText}</Button>}
            </div>
        </div> 
        </div>
        );
  }
    
  export default PageCTASection;