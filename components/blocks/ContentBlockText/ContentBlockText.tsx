import { MarkdownComponent } from "utils/utils";

interface ContentBlockInterface {
    id:string;
    title?: string;
    type?: string;
    body: any;
  }
  


  export const ContentBlockText = ({id, title, body}:ContentBlockInterface) => {
    return ( 
     <div className="responsive-container py-2xl block md:flex" key={id}>
          {title && <h3 className="font-sans type-preset-5 font-bold md:w-1/3 w-full pt-sm">{title} </h3> }
          <p className=" md:w-2/3 pt-sm w-full font-sans type-preset-6 text-gray-800 mb-md">{ <MarkdownComponent content={body} />}</p>
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
