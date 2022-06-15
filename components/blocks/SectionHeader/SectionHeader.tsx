import classNames from "classnames";
import { Button } from "components/atom";
import ColorTheme from "shared_interfaces/ColorThemes";

// TODO move as much to tailwind


export interface SectionHeaderInterface {
  title: string;
  id: string;
  subtitle?: any;
  body?:any;
  colorTheme?: ColorTheme;
  buttonText?: string;
  buttonPath?: string;
}

const SectionHeader = ({
  id,
  title,
  subtitle,
  body,
  colorTheme="default",
  buttonText,
  buttonPath
}:SectionHeaderInterface) => {
  const bg = classNames({
    "bg-gold-50": colorTheme=="gold",
    "bg-sage-50": colorTheme=="sage",
    "bg-navy-900": colorTheme=="navy",
    "bg-purple-900": colorTheme=="purple",
  });
  const textColor =  (colorTheme=="navy" ||colorTheme=="purple")? "text-white":"text-navy-900";

  const TitleBlock = () => {
    return (
      <div className="lg:w-3/4 w-full">
        <h2
          className={`w-full font-sans ${textColor} type-preset-2 font-black mt-xl mb-xl`}
        >
          {title}
        </h2>
      </div>
    );
  };
  const BodyBlock = ({text}) => {
    return (
      <div className={`flex`}>
        <p className={`md:w-3/4 type-preset-3  font-serif ${textColor}`}>
         {text}
        </p>
      </div>
    );
  };
  const ColoredLine = () => {
 
    return colorTheme == "gold" ? (
       <div className="bg-gold-900 h-[7px] w-[138px]"></div>
        
    ) : colorTheme == "sage" ?  (
      <div className="bg-sage-900 h-[7px] w-[138px]"></div>
       
   ): colorTheme == "purple" ?  (
    <div className="bg-purple-700 h-[7px] w-[138px]"></div>
     
 ) : (
      <div className="bg-plum-400 h-[7px] w-[138px]"></div>
    );
  };

  return (
    <section className={`${bg}`} key={id}>
    <div className={`responsive-container pt-3xl pb-xl`} key={id}>
      <TitleBlock />
       <div className={`flex ${(subtitle || body) && "mb-xl"}`}>
         <ColoredLine/>
        {/* <div className="bg-gray-900 h-[8px] w-[138px]"></div> */}
      </div> 
      {subtitle && <BodyBlock text={subtitle}/>}
      {body && <BodyBlock text={body}/>}
     
      {buttonText &&<div className="pt-2xl"> <Button  href={buttonPath} variant="white">{buttonText}</Button> </div>}
    </div>
    </section>
  );

};
export default SectionHeader;
