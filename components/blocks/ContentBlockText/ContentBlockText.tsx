import classNames from "classnames";
import ColorTheme from "shared_interfaces/ColorThemes";
import { MarkdownComponent } from "utils/utils";

interface ContentBlockInterface {
    id:string;
    title?: string;
    type?: string;
    body: any;
    variant?: ColorTheme
  }
  


  export const ContentBlockText = ({id, title, body, variant="default"}:ContentBlockInterface) => {
    
    const bg = classNames({
      "bg-gold-50": variant=="gold"
    })
    return ( 
      <div className={bg}>
     <div className="responsive-container py-2xl block md:flex" key={id}>
          {title && <h3 className="font-sans type-preset-3 font-bold md:w-1/3 w-full pt-sm">{title} </h3> }
          <p className=" md:w-2/3 pt-sm w-full font-sans type-preset-5 text-gray-800 mb-md">{ <MarkdownComponent content={body} />}</p>
      </div> 
      </div>
      );
}

  export default ContentBlockText;
      

  // const ContentBlockText: React.FC<ContentBlockInterface> = ({ id, title, type, body, children}) => {
      
  //   return (type==="2 column")?
  //   ( 
  //     <div className="responsive-container py-2xl block md:flex" key={title}>
  //          {title && <h3 className="font-sans type-preset-5 font-bold md:w-1/3 w-full pt-sm">{title} </h3> }
  //          <p className=" md:w-2/3 pt-sm w-full font-sans type-preset-6 text-gray-800 mb-md">{children}</p>
  //      </div> 
  //      )
  //   :( 
  //      <div className="responsive-container py-2xl" key={title}>
  //      <div className={`w-full lg:w-2/3`}>
  //                   {title && <h3 className="font-sans font-bold type-preset-5">{title} </h3> }
  //                   <p className={`font-sans pt-lg type-preset-6 text-gray-800 mb-md`}>{children}</p>
  //           </div>
  //       </div> 
  //       );
  // }
