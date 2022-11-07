import classNames from "classnames";
import { Button } from "components/atom/Button/Button";
import ColorTheme from "utils/ColorThemes";

// TODO move as much to tailwind


export interface SectionHeaderInterface {
  title: string;
  id: string;
  body?:any;
  colorTheme?: ColorTheme;
  buttonText?: string;
  buttonPath?: string;
}

const SectionHeader = ({
  id,
  title,
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
  let LineColor = classNames({
    "bg-gold-900":colorTheme == "gold",
    "bg-sage-700":colorTheme =="sage",
    "bg-purple-500":colorTheme=="purple",
    "bg-navy-200":colorTheme == "navy",
    "bg-plum-400 ": colorTheme=="default" || colorTheme==null
  })

  const TextColor =  (colorTheme=="navy" ||colorTheme=="purple")? "text-white":"text-gray-900";

  const TitleBlock = () => {
    return (
      <div className="lg:w-3/4 w-full">
        <h2
          className={`w-full font-sans ${TextColor} type-preset-2 font-black mt-xl mb-xl`}
        >
          {title}
        </h2>
      </div>
    );
  };
  const BodyBlock = ({text}) => {
    return (
      <div className={`flex pb-xl`}>
        <div className={`lg:w-3/4 type-preset-3  font-serif ${TextColor}`}>
         {text}
        </div>
      </div>
    );
  };
  
  return (
    <section className={`${bg}`} key={id}>
    <div className={`responsive-container pt-3xl pb-xl`} >
      <TitleBlock />
       <div className={`flex ${ body && "mb-xl"}`}>
       <div className={`${LineColor} h-[5px] w-[65px]`}></div>
        {/* <div className="bg-gray-900 h-[8px] w-[138px]"></div> */}
      </div> 
      {body && <BodyBlock text={body}/>}
      {buttonText &&<div className="pt-2xl"> <Button  href={buttonPath} variant="white" analyticsLabel="section-header">{buttonText}</Button> </div>}
    </div>
    </section>
  );

};
export default SectionHeader;
