import classNames from "classnames";
import ColorTheme from "shared_interfaces/ColorThemes";
//import { MarkdownComponent } from "utils/utils";

import ReactMarkdown from 'react-markdown'

interface ContentBlockInterface {
    id:string;
    title?: string;
    type?: string;
    body: any;
    variant?: ColorTheme
  }
  
  export const ContentBlockText : React.FC<ContentBlockInterface> = ({id, title, body, variant="default"}) => {
    
    const bg = classNames({
      "bg-gold-50": variant=="gold",
      "bg-sage-50": variant=="sage"
    })
    return ( 
      <section className={bg} key={id}>
        <div className="responsive-container">
          <hr className="border-top-2 border-gray-400"/>
        <div className="py-2xl block md:flex" key={id}>
          {title && <h3 className="font-sans type-preset-4 font-bold md:w-1/3 w-full pt-sm pr-lg">{title} </h3> }
          <p className=" md:w-2/3 pt-sm w-full font-sans type-preset-5 text-gray-800 mb-md">{body}</p>
      </div> 
      </div>

      </section>
      );
}

  export default ContentBlockText;
  