

import Image from "next/image";
import { Button } from "components/atom/Button/Button";

interface ContentBlockInterface {
    title?: string;
  }
  
  
  const ContentBlockText: React.FC<ContentBlockInterface> = ({ title,  children}) => {
      return ( 
       <div className="responsive-container">
       <div className={`w-full lg:w-2/3`}>
        
                    {title && <h3 className="font-sans text-lg">{title} </h3> }
                    <p className={`font-sans pt-lg text-base text-grey-base mb-md`}>{children}</p>
            </div>
        </div> 
        );
  }


  export const ContentBlockText2: React.FC<ContentBlockInterface> = ({ title,  children}) => {
    return ( 
     <div className="responsive-container block md:flex">
          {title && <h3 className="font-sans text-lg font-bold md:w-1/3 w-full pt-sm">{title} </h3> }

          <p className=" md:w-2/3 pt-sm w-full font-sans text-base text-grey-base mb-md">{children}</p>
       
      </div> 
      );
}
    
  export default ContentBlockText;