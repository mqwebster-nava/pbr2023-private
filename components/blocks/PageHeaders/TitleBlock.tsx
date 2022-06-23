import { Button } from "components/atom";

const TitleBlock = ({ title, subtitle, body, textColor, buttonPath=null, buttonText=null }) => {
    return (
      <div >
        <h1 className={` font-sans type-preset-1  ${textColor} font-bold md:font-black w-full xl:w-3/4`}>
          {title}
        </h1>
        <p
          className={` text-white font-sans  type-preset-1  font-bold md:font-black w-full xl:w-3/4`}
        >
          {subtitle}
        </p>
       { buttonPath &&
       <div className="animate-titleButton pt-md">
       <Button variant="white" href={buttonPath}>
         {buttonText}
       </Button>
     </div>
       }
      </div>
    );
  };

export default TitleBlock;
  