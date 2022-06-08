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
  console.log(body);
  const bg = classNames({
    "bg-gold-50": colorTheme=="gold",
    "bg-sage-50": colorTheme=="sage",
    "bg-navy-900": colorTheme=="navy",
  });
  const textColor = classNames({
    "text-navy-900": colorTheme!="navy",
    "text-white": colorTheme=="navy",
  })

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
       <div className="bg-gold-900 h-[12px] w-[138px]"></div>
        
    ) : colorTheme == "sage" ?  (
      <div className="bg-sage-900 h-[12px] w-[138px]"></div>
       
   ) : (
      <div className="bg-plum-400 h-[12px] w-[138px]"></div>
    );
  };

  return (
    <section className={`${bg}`} key={id}>
    <div className={`responsive-container pt-4xl pb-xl`} key={id}>
      <TitleBlock />
       <div className="flex mb-xl">
         <ColoredLine/>
        {/* <div className="bg-gray-900 h-[8px] w-[138px]"></div> */}
      </div> 
      {subtitle && <BodyBlock text={subtitle}/>}
     
      {buttonText &&<div className="pt-2xl"> <Button  href={buttonPath} variant="white">{buttonText}</Button> </div>}
    </div>
    </section>
  );

};
export default SectionHeader;
