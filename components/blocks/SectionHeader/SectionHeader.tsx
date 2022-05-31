import classNames from "classnames";
import { Button } from "components/atom";
import ColorTheme from "shared_interfaces/ColorThemes";

// TODO move as much to tailwind


export interface SectionHeaderInterface {
  title: string;
  id: string;
  subtitle?: any;
  colorTheme?: ColorTheme;
  buttonText?: string;
  buttonPath?: string;
}

const SectionHeader = ({
  id,
  title,
  subtitle,
  colorTheme="default",
  buttonText,
  buttonPath
}:SectionHeaderInterface) => {
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
        <h1
          className={`w-full font-sans ${textColor} type-preset-2 font-black mt-xl mb-xl`}
        >
          {title}
        </h1>
      </div>
    );
  };
  const BodyBlock = () => {
    return (
      <div className={`flex`}>
        <div className={`md:w-3/4 type-preset-3  font-serif ${textColor}`}>
          {subtitle}
        </div>
      </div>
    );
  };
  const ColoredLine = () => {
    return colorTheme == "gold" ? (
      <div className="flex mb-xl">
        <div className="bg-gold-900 h-[12px] w-[46px]"></div>
        <div className="bg-gold-700 h-[12px] w-[46px]"></div>
        <div className="bg-gold-500 h-[12px] w-[46px]"></div>
      </div>
    ) : (
      <div className="flex mb-xl">
        <div className="bg-purple-900 h-[12px] w-[46px]"></div>
        <div className="bg-purple-500 h-[12px] w-[46px]"></div>
        <div className="bg-purple-300 h-[12px] w-[46px]"></div>
      </div>
    );
  };

  return (
    <section className={`${bg}`} key={id}>
    <div className={`responsive-container pt-4xl pb-2xl`} key={id}>
      <TitleBlock />
      <ColoredLine/>
      {subtitle && <BodyBlock />}
      {buttonText &&<div className="pt-2xl"> <Button  href={buttonPath} variant="white">{buttonText}</Button> </div>}
    </div>
    </section>
  );

};
export default SectionHeader;
