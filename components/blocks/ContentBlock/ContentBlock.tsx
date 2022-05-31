
import Image from "next/image";
import { Button } from "../../atom/Button/Button";
import { ContentfulImageAsset } from "shared_interfaces/post_interface";
import classNames from "classnames";


type ContentBlockType = "default" | "left repeater" | "right repeater";

export interface ContentBlockInterface {
    id:string;
    title?: string;
    body?:any;
    buttonText?:string; 
    buttonPath?:string;
    type?: ContentBlockType;
    image: ContentfulImageAsset;
  }
  
  const ContentBlock  = ({id, title, body, type = "left repeater", image, buttonPath, buttonText}:ContentBlockInterface) => {
    
    const direction = classNames({
      "md:flex-row-reverse": type=="left repeater",
      "md:flex-row":
        type == "right repeater",
    });
    const imagePadding = classNames({
      "pb-2xl pl-0 md:pb-0 md:pl-2xl": type=="left repeater",
      "pb-2xl  pr-0 md:pb-0 md:pr-2xl":  type == "right repeater",
    });
    if(image==null){console.error("Content Block image cannot be null", title); return null;}

    return (
      <section className={"responsive-container py-2xl"} key={id}>
      <div className={`w-full flex flex-col justify-between ${direction}`}>
        <div className={`w-full md:w-1/2 max-w-[478px] ${imagePadding}`}>
           <Image objectFit={"fill"} height={image.height} width={image.width}layout={"responsive"} src={image.url} alt={image.description} /> 
        </div>
        <div className={`w-full md:w-1/2 flex justify-center flex-col`}>
         {title && <h3 className={`font-sans type-preset-3 font-bold `}>{title} </h3> }
          <p className={`font-sans pt-lg type-preset-5 text-gray-800 pb-2xl`}>{body}</p>
          {buttonText && <Button  href={buttonPath} variant="outlined">{buttonText}</Button> }
        </div>
      </div>
      </section>
    );
  }



// const DefaultContentBlock: React.FC<ContentBlockInterface> = ({id, title, body, type, buttonPath, buttonText}) =>{
// return ( 
//     <div className="responsive-container py-2xl" key={id}>
//     <div className={`w-full lg:w-2/3`}>
     
//                  <h3 className="font-sans type-preset-3 font-bold">{title} </h3>
//                  <p className={`font-sans pt-lg type-preset-5 text-gray-800 mb-lg`}>{<MarkdownComponent content={body} />}</p>
         
//              {buttonText && <Button href={buttonPath} variant="outlined" >{buttonText}</Button>}
//          </div>
//      </div> 
//      );
// }

export default ContentBlock;