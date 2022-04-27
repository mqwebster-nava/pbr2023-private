import { MarkdownComponent } from "utils/utils";

interface ContentBlockInterface {
    id:string;
    title?: string;
    type?: string;
    body: any;
  }
  


  export const ContentBlockText: React.FC<ContentBlockInterface> = ({id, title, body, children}) => {
    return ( 
     <div className="responsive-container py-2xl block md:flex">
          {title && <h3 className="font-sans text-lg font-bold md:w-1/3 w-full pt-sm">{title} </h3> }
          <p className=" md:w-2/3 pt-sm w-full font-sans text-base text-gray-800 mb-md">{ <MarkdownComponent content={body} />}</p>
      </div> 
      );
}
    

  // const ContentBlockText: React.FC<ContentBlockInterface> = ({ id, title, type, body, children}) => {
      
  //   return (type==="2 column")?
  //   ( 
  //     <div className="responsive-container py-2xl block md:flex" key={title}>
  //          {title && <h3 className="font-sans text-lg font-bold md:w-1/3 w-full pt-sm">{title} </h3> }
  //          <p className=" md:w-2/3 pt-sm w-full font-sans text-base text-gray-800 mb-md">{children}</p>
  //      </div> 
  //      )
  //   :( 
  //      <div className="responsive-container py-2xl" key={title}>
  //      <div className={`w-full lg:w-2/3`}>
  //                   {title && <h3 className="font-sans font-bold text-lg">{title} </h3> }
  //                   <p className={`font-sans pt-lg text-base text-gray-800 mb-md`}>{children}</p>
  //           </div>
  //       </div> 
  //       );
  // }

  export default ContentBlockText;