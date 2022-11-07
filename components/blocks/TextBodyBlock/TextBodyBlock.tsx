import PostContent from "components/blocks/PostBody/PostContent";
import ResponsiveContentContainer from "components/blocks/ResponsiveContentContainer/ResponsiveContentContainer";
import classNames from "classnames";
import HorizontalLine from "components/atom/HorizontalLine/HorizontalLine";
import ColorTheme from "utils/ColorThemes";

interface TextBodyInterface {
    type?: string;
    title?: string;
    richBody: any;
    colorTheme?: ColorTheme
  }

const TextBodyBlock = (props:TextBodyInterface)=>{
    return (props.type && props.type=="list") ? <ListBlock {...props} /> :  <DefaultTextBodyBlock {...props} />
}

const DefaultTextBodyBlock = ({title, richBody}:TextBodyInterface) => {
    return (
        <ResponsiveContentContainer alignment={"left"}  padding={"py-xl"}>
        <div className="font-serif">
        {title && <h3 className={`font-sans type-preset-3 font-bold pb-lg`}>{title} </h3> }
            <PostContent docData={richBody.json} docLinks={richBody.links} />
        </div>
        </ResponsiveContentContainer>)
}


const ListBlock = ({title, richBody, colorTheme="default"}:TextBodyInterface) => {
    
    const bg = classNames({
      "bg-gold-50": colorTheme=="gold",
      "bg-sage-50": colorTheme=="sage"
    })
    return ( 
      <section className={bg}>
        <div className="responsive-container">
         <HorizontalLine variant="light" />
        <div className="py-2xl block md:flex" >
          {title && <h3 className="font-sans type-preset-4 font-bold md:w-1/3 w-full pt-sm md:pr-2xl">{title} </h3> }
          <div className="md:w-2/3 pt-sm w-full font-sans type-preset-5 text-gray-900 mb-md">
             <PostContent docData={richBody.json} docLinks={richBody.links} />
          </div>
      </div> 
      </div>

      </section>
      );
}

export default TextBodyBlock;


