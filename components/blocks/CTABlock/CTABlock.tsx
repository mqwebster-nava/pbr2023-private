
import { Button } from "../../atom/Button/Button";
import Newsletter from "./NewsletterBlock";
import { MarkdownComponent } from "utils/utils";


interface CTABlockInterface {
    id:string;
    title: string;
    body: any;
    buttonText:string;
    buttonPath:string;
    type: string;
  }
  
  
  const CTABlock: React.FC<CTABlockInterface> = (props) => {
      if(props.type ==="Newsletter") return (<Newsletter></Newsletter>);
      return (<DefaultCTABlock {...props}></DefaultCTABlock>);
  }

  
  const DefaultCTABlock: React.FC<CTABlockInterface> = ({ id, title, body, buttonPath, buttonText, children}) => {
    return ( 
      <div className = " w-full" key={id}>
     <div className="responsive-container py-2xl bg-navy-500">
     <div className={`w-full lg:w-2/3 px-lg text-white`}>
                  <h3 className="font-sans text-lg ">{title} </h3>
                  <p className={`font-sans pt-lg text-base  mb-lg`}>{ <MarkdownComponent content={body} />}</p>
              {buttonText && <Button href={buttonPath} variant="black">{buttonText}</Button>}
          </div>
      </div> 
      </div>
    );
}


  export default CTABlock;