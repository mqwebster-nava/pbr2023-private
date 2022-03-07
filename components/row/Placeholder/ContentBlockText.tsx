

import Image from "next/image";
import { Button } from "components/atom/Button/Button";

interface ContentBlockInterface {
    title?: string;
  }
  
  
  const ContentBlockText: React.FC<ContentBlockInterface> = ({ title,  children}) => {
      return ( 
       <div className="mx-3xl my-2xl">
       <div className={`w-full `}>
        
                    {title && <h3 className="font-sans text-lg">{title} </h3> }
                    <p className={`font-sans pt-lg text-base text-grey-base mb-md`}>{children}</p>
            
              
            </div>
        </div> 
        );
  }
    
  export default ContentBlockText;