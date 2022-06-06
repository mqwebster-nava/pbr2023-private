import { Button } from "components/atom";

const TitleBlock = ({ title, subtitle, body, textColor, buttonPath=null, buttonText=null }) => {
    return (
      <div >
        <h1 className={` font-sans type-preset-1  ${textColor} font-bold md:font-black`}>
          {title}
        </h1>
        <p
          className={` text-white font-sans  type-preset-1 sm:pr-xl pr-0 md:pr-4xl font-bold md:font-black mr-xl pb-md`}
        >
          {subtitle}
        </p>
       { buttonPath &&
       <div className="animate-titleButton">
       <Button variant="white" href={buttonPath}>
         {buttonText}
       </Button>
     </div>
       }
      </div>
    );
  };

export default TitleBlock;
  