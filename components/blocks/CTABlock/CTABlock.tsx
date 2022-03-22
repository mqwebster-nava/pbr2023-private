
import Image from "next/image";
import { Button } from "../../atom/Button/Button";
import Newsletter from "./NewsletterBlock";

interface CTABlockInterface {
    title: string;
    buttonText:string;
    buttonPath:string;
    type: string;
  }
  
  
  const CTABlock: React.FC<CTABlockInterface> = (props) => {
      if(props.type ==="Newsletter") return (<Newsletter></Newsletter>);
      return (<DefaultCTABlock {...props}></DefaultCTABlock>);
  }

  
  const DefaultCTABlock: React.FC<CTABlockInterface> = ({ title,  buttonPath, buttonText, children}) => {
    return ( 
      <div className = "bg-gray-400 w-full">
     <div className="responsive-container py-2xl">
     <div className={`w-full lg:w-2/3`}>
                  <h3 className="font-sans text-lg">{title} </h3>
                  <p className={`font-sans pt-lg text-base text-grey-base mb-lg`}>{children}</p>
          
              {buttonText && <Button href={buttonPath} >{buttonText}</Button>}
          </div>
      </div> 
      </div>
      );
}


  export default CTABlock;