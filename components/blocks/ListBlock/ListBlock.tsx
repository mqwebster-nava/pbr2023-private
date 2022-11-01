import classNames from "classnames";
import HorizontalLine from "components/atom/HorizontalLine/HorizontalLine";
import React from "react";
import ColorTheme from "utils/ColorThemes";
interface ListBlockInterface {
    id:string;
    title?: string;
    body: any;
    colorTheme?: ColorTheme
  }
  
  export const ListBlock : React.FC<ListBlockInterface> = ({id, title, body, colorTheme="default"}) => {
    
    const bg = classNames({
      "bg-gold-50": colorTheme=="gold",
      "bg-sage-50": colorTheme=="sage"
    })
    return ( 
      <section className={bg} key={id}>
        <div className="responsive-container">
         <HorizontalLine variant="light" />
        <div className="py-2xl block md:flex" key={id}>
          {title && <h3 className="font-sans type-preset-4 font-bold md:w-1/3 w-full pt-sm md:pr-2xl">{title} </h3> }
          <p className=" md:w-2/3 pt-sm w-full font-sans type-preset-5 text-gray-900 mb-md">{body}</p>
      </div> 
      </div>

      </section>
      );
}

  export default ListBlock;
  